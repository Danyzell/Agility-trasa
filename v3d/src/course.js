/* 3D parkur z Plánu: plocha, překážky v rozměrech FCI (výšky podle velikosti psa), čísla, pes běžící po trase.
   mountCourse(canvas, spec, opts) → {length, render(d, view), resize(), dispose(), tier, at(d), pose(d) (bez kreslení), scene, hand (psovod nebo null)}
   spec = { W, H, size: {jump, tire, lj, ljn} (m),
            obs: [{type, x, y, rot (°), nums: [1, 5], tunnel: [[x, y], ...]}],   // souřadnice plánu: y dolů = z v 3D
            signs: [{t: '3·9', x, y, dx, dy}],   // čísla agility na stejném místě jako v Plánu (dx, dy = směr nájezdu); bez nich vlevo před vstupem
            path: [[x, y, h, idx], ...],   // dráha psa (h = výška nad zemí na zónových překážkách, idx = pořadí překážky)
            seesaw: [{x, y, rot, idx, sign}], jumps: [[x, y, h]] }
   view: 'orbit' (volná kamera, táhnutí otáčí, dva prsty/kolečko přibližují) | 'chase' (za psem) | 'dog' (očima psa) | 'top' (shora)
   Hoopers: typy hoop, barrel, gate, chute a ha (prostor psovoda); s prostorem psovoda v něm stojí psovod a otáčí se za psem.
   buildCourse(…, {ar: true}) přidá sloupky v rozích kolbiště a na startu (podle nich se parkur v AR srovná se skutečným kolbištěm). */
import * as THREE from 'three';
import { makeDog, poseDog } from './dog.js';
import { makeHandler, poseHandler } from './handler.js';
import { makeWorld, autoTier, TIERS, M, shadowAll } from './world.js';
import * as ob from './obstacles.js';

const DOG_STRIDE = 1.35, DOG_MS = 4.5;   // DOG_MS: rychlost průletu v aplikaci (m/s při 1×)
const HOOPT = { hoop: 1, barrel: 1, gate: 1, chute: 1, ha: 1 };

/* plochý pruh na zemi podél lomené čáry pts [[x, z], ...] (obrysy překážek v půdorysu): kvádříky 4 mm vysoké, přesahují se v rozích */
function strip(pts, w, closed, m, y = .012) {
  const g = new THREE.Group(), n = pts.length;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const a = pts[i], b = pts[(i + 1) % n], dx = b[0] - a[0], dz = b[1] - a[1], l = Math.hypot(dx, dz);
    if (l < 1e-4) continue;
    const s = new THREE.Mesh(new THREE.BoxGeometry(l + w, .004, w), m);
    s.position.set((a[0] + b[0]) / 2, y, (a[1] + b[1]) / 2); s.rotation.y = -Math.atan2(dz, dx); g.add(s);
  }
  return g;
}
/* obdélník sítí skupiny g v jejích vlastních souřadnicích (pes bere překážku ve směru osy x) */
function localBox(g) {
  g.updateMatrixWorld(true);
  const inv = g.matrixWorld.clone().invert(), b = new THREE.Box3(), t = new THREE.Box3(), m = new THREE.Matrix4();
  g.traverse(o => { if (!o.isMesh || !o.geometry) return; if (!o.geometry.boundingBox) o.geometry.computeBoundingBox(); t.copy(o.geometry.boundingBox).applyMatrix4(m.multiplyMatrices(inv, o.matrixWorld)); b.union(t); });
  return b;
}
/* půdorys překážky: bílý obrys na zemi, laťka napříč, tyčky slalomu, žluté hranice zón; tunel dvěma čarami podél oblouku */
function footprint(g, o, wm, zm) {
  const f = new THREE.Group(), w = .05;
  if (o.type === 'tunnel') {
    const { curve, r, length } = g.userData, n = Math.max(4, Math.ceil(length / .25)), L = [], R = [];
    for (let k = 0; k <= n; k++) { const p = curve.getPointAt(k / n), t = curve.getTangentAt(k / n), l = Math.hypot(t.x, t.z) || 1, nx = -t.z / l, nz = t.x / l; L.push([p.x + nx * r, p.z + nz * r]); R.push([p.x - nx * r, p.z - nz * r]); }
    f.add(strip(L, w, false, wm), strip(R, w, false, wm), strip([L[0], R[0]], w, false, wm), strip([L[n], R[n]], w, false, wm));
    return f;
  }
  const b = localBox(g), x0 = b.min.x, x1 = b.max.x, z0 = b.min.z, z1 = b.max.z;
  if (!isFinite(x0)) return f;
  f.add(strip([[x0, z0], [x1, z0], [x1, z1], [x0, z1]], w, true, wm));
  const across = x => f.add(strip([[x, z0], [x, z1]], w, false, wm)), zone = x => f.add(strip([[x, z0], [x, z1]], w, false, zm));
  const u = g.userData || {};
  if (o.type === 'jump' || o.type === 'tire') { across(0); if (o.type === 'jump' && o.v === 'oxer') across(.35); }
  else if (o.type === 'weave') for (let k = 0; k < 12; k++) f.add(strip([[-3.3 + k * .6, -.15], [-3.3 + k * .6, .15]], .04, false, wm));
  else if (o.type === 'aframe' && u.half) [-1, 1].forEach(s => zone(s * (u.half - u.zone)));
  else if (o.type === 'dogwalk' && u.total) [-1, 1].forEach(s => zone(s * (u.total - u.zone)));
  else if (o.type === 'seesaw' && u.L) [-1, 1].forEach(s => zone(s * (u.L / 2 - .9)));
  f.position.copy(g.position); f.rotation.copy(g.rotation);
  return f;
}

/* plocha, překážky, trasa a pes do skupiny parent (sdílí 3D v aplikaci i AR na place) */
export function buildCourse(scene, spec, Q, opts = {}) {
  const W = spec.W, H = spec.H, size = spec.size || {};

  /* kolbiště: světlejší tráva, bílé lajny po obvodu, značky po 5 m */
  const ring = new THREE.Group();
  const turf = new THREE.Mesh(new THREE.PlaneGeometry(W, H).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#7fb35a', roughness: 1, transparent: true, opacity: .35 }));
  turf.position.set(W / 2, .003, H / 2); turf.receiveShadow = true; ring.add(turf);
  const lm = M('#ffffff', .8);
  [[W / 2, 0, W, .08], [W / 2, H, W, .08], [0, H / 2, .08, H], [W, H / 2, .08, H]].forEach(([x, z, w, d]) => {
    const l = new THREE.Mesh(new THREE.BoxGeometry(w, .01, d), lm); l.position.set(x, .006, z); ring.add(l);
  });
  const tick = new THREE.BoxGeometry(.05, .01, .5);
  for (let x = 5; x < W; x += 5) for (const z of [.25, H - .25]) { const t = new THREE.Mesh(tick, lm); t.position.set(x, .006, z); ring.add(t); }
  scene.add(ring);

  /* překážky */
  const saws = [], tubes = [], obsG = [], useSigns = Array.isArray(spec.signs);
  (spec.obs || []).forEach(o => {
    const a = o.rot * Math.PI / 180, fx = Math.cos(a), fz = Math.sin(a);
    let g = null;
    if (o.type === 'tunnel') {
      g = ob.tunnel({ points: o.tunnel && o.tunnel.length > 1 ? o.tunnel : [[o.x - fx * 2.25, o.y - fz * 2.25], [o.x + fx * 2.25, o.y + fz * 2.25]] });
      scene.add(g);
      const { curve, length: tl } = g.userData, n = Math.max(8, Math.ceil(tl / .1));
      tubes.push({ len: tl, pts: Array.from({ length: n + 1 }, (_, k) => { const q = curve.getPointAt(k / n); return { x: q.x, z: q.z, s: tl * k / n }; }) });
    } else {
      if (o.type === 'jump') g = o.v === 'wall' ? ob.wall({ h: size.jump || .6 }) : o.v === 'oxer' ? ob.oxer({ h: size.jump || .6 }) : ob.jump({ h: size.jump || .6 });
      else if (o.type === 'tire') g = ob.tire({ h: size.tire || .8 });
      else if (o.type === 'longjump') g = ob.longjump({ len: size.lj || 1.4, n: size.ljn || 4 });
      else if (o.type === 'weave') { const w = ob.weave({}); w.position.x = -(11 * .6) / 2; g = new THREE.Group(); g.add(w); }
      else if (o.type === 'aframe') g = ob.aframe({});
      else if (o.type === 'dogwalk') g = ob.dogwalk({});
      else if (o.type === 'seesaw') { g = ob.seesaw({}); saws.push({ g, o }); }
      else if (o.type === 'hoop') g = ob.hoop({});
      else if (o.type === 'barrel') g = ob.barrel({});
      else if (o.type === 'gate') g = ob.gate({});
      else if (o.type === 'chute') g = ob.chute({});
      else if (o.type === 'ha') g = ob.handlerArea({});
      if (!g) return;
      g.position.set(o.x, 0, o.y); g.rotation.y = -a; scene.add(g);
    }
    g.name = o.type;   /* testy hledají překážky podle druhu */
    obsG.push({ g, o });
    /* číslo: cedulka vlevo před vstupem do překážky (Hoopers níž, až je známá dráha psa; s spec.signs jako v Plánu) */
    if (o.nums && o.nums.length && !HOOPT[o.type] && !useSigns) {
      const hl = o.type === 'tunnel' ? 0 : ({ weave: 3.3, aframe: 2.1, dogwalk: 5.4, seesaw: 1.85 })[o.type] || 0;
      const sx = -fz, sz = fx, back = hl + .6, side = o.type === 'jump' ? 1.15 : o.type === 'tire' || o.type === 'longjump' ? 1.05 : .75;
      let px = o.x - fx * back + sx * side, pz = o.y - fz * back + sz * side;
      if (o.type === 'tunnel' && o.tunnel) { const p = o.tunnel[0], q = o.tunnel[1]; const dx = q[0] - p[0], dz = q[1] - p[1], l = Math.hypot(dx, dz) || 1; px = p[0] - dx / l * .6 - dz / l * .8; pz = p[1] - dz / l * .6 + dx / l * .8; }
      const s = ob.numSign(o.nums.join('·')); s.scale.setScalar(o.nums.length > 1 ? 1.6 : 1.4);
      s.position.set(px, 0, pz); s.rotation.y = -a + Math.PI / 2; scene.add(s);
    }
  });

  /* čísla agility na straně nájezdu jako v Plánu (3.5.3: dřív vždy vlevo před vstupem podle natočení překážky, i když ji pes bral
     z druhé strany; „Číslo na druhou stranu“ se do 3D a AR nepromítlo); cedulka čelem proti nájezdu psa */
  if (useSigns) spec.signs.forEach(q => {
    const s = ob.numSign(q.t); s.scale.setScalar(String(q.t).length > 2 ? 1.6 : 1.4);
    s.position.set(q.x, 0, q.y); s.rotation.y = Math.atan2(q.dx == null ? 1 : q.dx, q.dy == null ? 0 : q.dy); s.name = 'sign'; scene.add(s);
  });

  /* dráha psa */
  const P = (spec.path || []).map(p => ({ x: p[0], z: p[1], h: p[2] || 0, i: p[3] }));
  const cum = [0]; for (let i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i].x - P[i - 1].x, P[i].z - P[i - 1].z));
  const length = cum[cum.length - 1] || 0;
  const jumps = spec.jumps || [], weaves = (spec.weaves || []).map(w => ({ x: w.x, y: w.y, a: w.rot * Math.PI / 180, dir: w.dir || 1, idx: w.idx, n: 12, len: 6.6 }));
  function at(d) {
    d = Math.max(0, Math.min(length, d)); let i = 1; while (i < cum.length - 1 && cum[i] < d) i++;
    const a = P[i - 1] || { x: 0, z: 0, h: 0, i: 0 }, b = P[i] || a, f = (d - cum[i - 1]) / ((cum[i] - cum[i - 1]) || 1);
    const x = a.x + (b.x - a.x) * f, z = a.z + (b.z - a.z) * f; let h = a.h + (b.h - a.h) * f, air = 0;
    jumps.forEach(j => { const dd = Math.hypot(x - j[0], z - j[1]), r = j[3] || 1.4; if (dd < r) { const k = 1 - dd * dd / (r * r); h += (j[2] + .12) * k; air = Math.max(air, Math.min(1, k * 1.6)); } });
    const idx = Math.max(a.i, b.i);
    /* slalom: pes kličkuje mezi tyčkami, první tyčka mu zůstane po levém rameni (FCI) */
    let wx = 0, wz = 0;
    weaves.forEach(w => {
      if (idx !== w.idx && idx !== w.idx - 1) return;
      const ca = Math.cos(w.a), sa = Math.sin(w.a), u = (x - w.x) * ca + (z - w.y) * sa, v = -(x - w.x) * sa + (z - w.y) * ca;
      if (Math.abs(v) > .8) return;
      const sp = w.n > 1 ? w.len / (w.n - 1) : .6, st = w.dir > 0 ? u + w.len / 2 : w.len / 2 - u;   // vzdálenost od 1. tyčky
      const env = st < 0 ? Math.max(0, 1 + st / .45) : st > w.len ? Math.max(0, 1 - (st - w.len) / .45) : 1;
      if (env <= 0) return;
      const fx = ca * w.dir, fz = sa * w.dir, off = -.17 * Math.cos(Math.PI * st / sp) * env;   // + = vlevo od směru běhu
      wx += fz * off; wz += -fx * off;
    });
    return { x: x + wx, z: z + wz, h, air, idx };
  }
  /* trasa na zemi: tečkovaná čára */
  if (P.length > 1) {
    const dots = new THREE.Group(), dg = new THREE.CircleGeometry(.05, 8).rotateX(-Math.PI / 2), dm = new THREE.MeshBasicMaterial({ color: '#f2c230', transparent: true, opacity: .85 });
    const im = new THREE.InstancedMesh(dg, dm, Math.ceil(length / .5) + 1), o3 = new THREE.Object3D(); let n = 0;
    for (let d = 0; d <= length; d += .5) { const p = at(d); if (p.h > .05) continue; o3.position.set(p.x, .012, p.z); o3.updateMatrix(); im.setMatrixAt(n++, o3.matrix); }
    im.count = n; dots.add(im); scene.add(dots);
  }

  /* Hoopers: čísla natočená k prostoru psovoda (FCI: dobře vidět z prostoru psovoda, mimo dráhu psa). Sud a plůtek mají číslo
     připnuté nahoře (stranu pak volí psovod), oblouk a krátký tunel na zemi kousek před vstupem, na straně prostoru psovoda. */
  const ha = (spec.obs || []).find(o => o.type === 'ha') || null;
  (spec.obs || []).forEach(o => {
    if (!HOOPT[o.type] || !o.nums || !o.nums.length) return;
    const s = ob.numSign(o.nums.join('·')), big = o.nums.length > 1, a = o.rot * Math.PI / 180;
    s.rotation.y = ha ? Math.atan2(ha.x - o.x, ha.y - o.y) : -a + Math.PI / 2;
    if (o.type === 'barrel' || o.type === 'gate') {
      const sc = big ? 1.2 : 1; s.scale.setScalar(sc); s.position.set(o.x, (o.type === 'barrel' ? .85 : .95) - .15 * sc, o.y);
    } else {
      /* směr prvního průchodu podle dráhy psa (bez trasy podle natočení překážky) */
      const k = P.findIndex(q => q.i === o.nums[0] - 1); let fx = Math.cos(a), fz = Math.sin(a);
      if (k >= 0 && P.length > 1) { const q0 = P[Math.max(0, k - 1)], q1 = P[Math.min(P.length - 1, k + 1)], l = Math.hypot(q1.x - q0.x, q1.z - q0.z); if (l > 1e-6) { fx = (q1.x - q0.x) / l; fz = (q1.z - q0.z) / l; } }
      const side = ha && ((ha.x - o.x) * -fz + (ha.y - o.y) * fx) < 0 ? -1 : 1, back = (o.type === 'chute' ? .5 : 0) + .6;
      s.scale.setScalar(big ? 1.6 : 1.4); s.position.set(o.x - fx * back - fz * side * .8, 0, o.y - fz * back + fx * side * .8);
    }
    scene.add(s);
  });

  const dog = makeDog({ shells: Q.shells, shortShells: Q.shortShells }); scene.add(dog);
  dog.traverse(o => { if (o.isMesh && o.userData.shell === 0) o.castShadow = true; });
  /* Hoopers: psovod stojí celý běh v prostoru psovoda, otáčí se za psem a ukazuje mu, kam dál */
  let hand = null, HT = null;
  if (ha) { hand = makeHandler({}); scene.add(hand); hand.traverse(m => { if (m.isMesh) m.castShadow = true; }); HT = handTrack(ha, at, P.length > 1 ? length : 0); }

  /* krátký tunel (Hoopers) je vysoký jen 80 cm: v něm se pes trochu přikrčí, jinak by mu uši prošly látkou */
  const chutes = (spec.obs || []).filter(o => o.type === 'chute').map(o => ({ x: o.x, y: o.y, c: Math.cos(o.rot * Math.PI / 180), s: Math.sin(o.rot * Math.PI / 180) }));
  const duck = p => chutes.reduce((m, c) => { const u = (p.x - c.x) * c.c + (p.z - c.y) * c.s, v = -(p.x - c.x) * c.s + (p.z - c.y) * c.c;
    return Math.abs(v) < .4 ? Math.max(m, Math.min(1, Math.max(0, (1.2 - Math.abs(u)) / .3))) : m; }, 0);
  /* pes a houpačky ve vzdálenosti d po trase */
  /* pes uvnitř tunelu (dál než 30 cm od vstupu i výstupu): látka je neprůhledná, pes se schová. Dřív mu hlava (74 cm)
     trčela ven z tunelu ⌀ 60 cm */
  const inTube = p => tubes.some(t => { let best = 1e9, s = 0; t.pts.forEach(q => { const dd = (q.x - p.x) ** 2 + (q.z - p.z) ** 2; if (dd < best) { best = dd; s = q.s; } });
    return best < .25 * .25 && s > .3 && s < t.len - .3; });
  function pose(d) {
    const p = at(d), ah = at(d + .8), ny = at(d + .25);
    p.tun = tubes.length > 0 && inTube(p); dog.visible = !p.tun;
    const yaw = Math.atan2(-(ny.z - p.z), ny.x - p.x);
    const slope = Math.atan2(ah.h - p.h, Math.max(.2, Math.hypot(ah.x - p.x, ah.z - p.z))) * (p.air ? 0 : 1);
    dog.position.set(p.x, p.h - (chutes.length ? .1 * duck(p) : 0), p.z); dog.rotation.y = yaw; dog.rotation.z = Math.max(-.6, Math.min(.6, slope));
    poseDog(dog, (d / DOG_STRIDE) % 1, p.air, p.air ? .15 * (ah.h < p.h ? 1 : -1) : 0, d <= 0 || d >= length ? 1 : 0, 0, { time: d / 4.5 });
    /* houpačka: překlopí se, když pes přejde osu */
    saws.forEach(({ g, o }) => {
      const a = o.rot * Math.PI / 180, ax = (p.x - o.x) * Math.cos(a) + (p.z - o.y) * Math.sin(a);
      const passed = o.idx >= 0 && (p.idx > o.idx || (p.idx === o.idx && ax * o.sign < 0));
      const want = (passed ? -o.sign : o.sign) * -g.userData.maxT, cur = g.userData.tilt;
      g.setTilt(cur + (want - cur) * .2);
    });
    if (hand) {
      if (!HT.n) { hand.position.set(ha.x, 0, ha.y); hand.rotation.y = Math.atan2(-(H / 2 - ha.y), W / 2 - ha.x); poseHandler(hand, { still: true }); }
      else {
        const f = Math.max(0, Math.min(HT.n - 1.0001, d / HT.step)), k = Math.floor(f), t = f - k, L = A => A[k] + (A[k + 1] - A[k]) * t;
        const hx = L(HT.x), hz = L(HT.z), v = (HT.dist[k + 1] - HT.dist[k]) / HT.step * DOG_MS, hy = Math.atan2(-(p.z - hz), p.x - hx);
        hand.position.set(hx, 0, hz); hand.rotation.y = hy;
        /* paže ukazuje na stranu, kam pes míří (z pohledu psovoda: + = doprava); když běží přímo k němu nebo od něj, paže klesne */
        const q = at(d + 1.5), mx = q.x - p.x, mz = q.z - p.z, ml = Math.hypot(mx, mz), rt = ml > 1e-3 ? (mx * Math.sin(hy) + mz * Math.cos(hy)) / ml : 0;
        const pt = d > 0 && d < length ? Math.min(1, Math.max(0, (Math.abs(rt) - .2) / .35)) * .9 : 0;
        poseHandler(hand, { phase: L(HT.ph) % 1, speed: Math.min(1, v / 4), point: pt, pointSide: rt > 0 ? -1 : 1, still: v < .05 });
      }
    }
    return p;
  }
  const start = P.length ? { x: P[0].x, z: P[0].z } : { x: W / 2, z: H / 2 };

  /* AR: sloupky 1,2 m v rozích kolbiště (bílé s oranžovou hlavičkou) a na startu (zelená hlavička), vidět jsou i zdálky a přes překážky */
  let posts = null;
  if (opts.ar) {
    posts = new THREE.Group(); const pm = M('#ffffff', .5), om = M('#ff8a3d', .5), gm = M('#5fb487', .5), pg = new THREE.CylinderGeometry(.02, .02, 1.2, 8), kg = new THREE.SphereGeometry(.06, 12, 8);
    [[0, 0, om], [W, 0, om], [0, H, om], [W, H, om], [start.x, start.z, gm]].forEach(([x, z, m]) => {
      const p = new THREE.Mesh(pg, pm); p.position.set(x, .6, z); posts.add(p);
      const k = new THREE.Mesh(kg, m); k.position.set(x, 1.22, z); posts.add(k);
    });
    posts.name = 'posts'; scene.add(posts);
  }
  /* půdorys: místo překážek obrysy na zemi (čísla, trasa a pes zůstávají); obrysy se vyrobí až při prvním zapnutí */
  let feet = null;
  function foot(on) {
    if (on && !feet) {
      feet = new THREE.Group(); feet.name = 'feet'; const wm = new THREE.MeshBasicMaterial({ color: '#ffffff' }), zm = new THREE.MeshBasicMaterial({ color: '#f2c230' });
      obsG.forEach(({ g, o }) => feet.add(footprint(g, o, wm, zm))); scene.add(feet);
    }
    obsG.forEach(({ g }) => { g.visible = !on; }); if (feet) feet.visible = !!on;
    return feet;
  }
  return { length, at, pose, dog, hand, start, turf, posts, foot, obstacles: obsG.map(e => e.g) };
}

/* dráha psovoda v prostoru psovoda: krok ke psovi (střed těla nejvýš 0,4 m od středu čtverce 2 × 2 m, chodidla zůstanou uvnitř),
   vyhlazená přes ±3 m dráhy psa, ať jen klidně přešlapuje; ph = fáze kroku (pomalu kratší kroky) */
function handTrack(ha, at, length) {
  if (!(length > 0)) return { n: 0 };
  const step = .25, n = Math.ceil(length / step) + 1, rx = [], rz = [];
  for (let k = 0; k < n; k++) { const p = at(k * step), dx = p.x - ha.x, dz = p.z - ha.y, l = Math.hypot(dx, dz) || 1; rx.push(ha.x + dx / l * .4); rz.push(ha.y + dz / l * .4); }
  const R = 12, x = [], z = [], dist = [0], ph = [0];
  for (let k = 0; k < n; k++) {
    let sx = 0, sz = 0, c = 0;
    for (let j = Math.max(0, k - R); j <= Math.min(n - 1, k + R); j++) { sx += rx[j]; sz += rz[j]; c++; }
    x.push(sx / c); z.push(sz / c);
    if (k) { const dd = Math.hypot(x[k] - x[k - 1], z[k] - z[k - 1]), v = dd / step * DOG_MS; dist.push(dist[k - 1] + dd); ph.push(ph[k - 1] + dd / (.6 + 1.5 * Math.min(1, v / 1.8))); }
  }
  return { n, step, x, z, dist, ph };
}

export function mountCourse(canvas, spec, opts = {}) {
  const tier = TIERS[opts.quality] ? opts.quality : autoTier();
  const W = spec.W, H = spec.H;
  const world = makeWorld(canvas, tier, { x0: 0, x1: W, z0: 0, z1: H }), scene = world.scene, Q = world.Q;
  const C = buildCourse(scene, spec, Q), { length, at, dog } = C, P = spec.path || [];

  const camera = new THREE.PerspectiveCamera(42, 2, .05, 500);
  /* volná kamera: orbit kolem středu plochy */
  const orb = { az: .55, el: .72, dist: Math.max(W, H) * 1.2, tx: W / 2, tz: H / 2 };
  const ptr = new Map(); let pinch0 = 0, dist0 = 0;
  canvas.style.touchAction = 'none';
  const onDown = e => { ptr.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (ptr.size === 2) { const [p, q] = [...ptr.values()]; pinch0 = Math.hypot(p.x - q.x, p.y - q.y); dist0 = orb.dist; } try { canvas.setPointerCapture(e.pointerId); } catch (_) { } };
  const onMove = e => {
    const prev = ptr.get(e.pointerId); if (!prev) return;
    if (ptr.size === 1) { orb.az -= (e.clientX - prev.x) * .006; orb.el = Math.max(.12, Math.min(1.45, orb.el + (e.clientY - prev.y) * .005)); }
    ptr.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptr.size === 2) { const [p, q] = [...ptr.values()], dd = Math.hypot(p.x - q.x, p.y - q.y); if (pinch0) orb.dist = Math.max(4, Math.min(Math.max(W, H) * 4, dist0 * pinch0 / dd)); }
    api.onCamera && api.onCamera();
  };
  const onUp = e => { ptr.delete(e.pointerId); pinch0 = 0; };
  const onWheel = e => { e.preventDefault(); orb.dist = Math.max(4, Math.min(Math.max(W, H) * 4, orb.dist * (1 + Math.sign(e.deltaY) * .1))); api.onCamera && api.onCamera(); };
  canvas.addEventListener('pointerdown', onDown); canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp); canvas.addEventListener('pointercancel', onUp); canvas.addEventListener('wheel', onWheel, { passive: false });

  /* vzdálenost kamery, při které se celá plocha (s okrajem 1 m) vejde do záběru */
  const corners = [[-1, -1], [W + 1, -1], [W + 1, H + 1], [-1, H + 1]].map(c => new THREE.Vector3(c[0], 0, c[1]));
  const tmp = new THREE.Vector3();
  function fitDist(place) {
    let lo = 3, hi = Math.max(W, H) * 4;
    for (let k = 0; k < 22; k++) {
      const mid = (lo + hi) / 2; place(mid); camera.updateMatrixWorld(); camera.updateProjectionMatrix();
      const ok = corners.every(c => { tmp.copy(c).project(camera); return Math.abs(tmp.x) < .96 && Math.abs(tmp.y) < .94 && tmp.z < 1; });
      if (ok) hi = mid; else lo = mid;
    }
    return hi;
  }
  const portrait = () => camera.aspect < 1;
  function placeOrbit(dist) {
    camera.fov = 42; camera.up.set(0, 1, 0);
    camera.position.set(orb.tx + dist * Math.cos(orb.el) * Math.sin(orb.az), dist * Math.sin(orb.el), orb.tz + dist * Math.cos(orb.el) * Math.cos(orb.az));
    camera.lookAt(orb.tx, 0, orb.tz);
  }
  function placeTop(hh) {
    camera.fov = 40; camera.position.set(W / 2, hh, H / 2);
    /* na výšku telefonu delší strana plochy svisle */
    if (portrait() === (W > H)) camera.up.set(1, 0, 0); else camera.up.set(0, 0, -1);
    camera.lookAt(W / 2, 0, H / 2);
  }
  let topH = Math.max(W, H);
  function fitAll() {
    /* volná kamera: na výšku se díváme podél delší strany */
    orb.az = portrait() === (W > H) ? Math.PI / 2 + .12 : .12; orb.el = .95;
    orb.dist = fitDist(placeOrbit); topH = fitDist(placeTop);
  }
  function resize() {
    const w = canvas.clientWidth || 300, h = canvas.clientHeight || 200;
    world.R.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    fitAll();
  }
  resize();

  const look = new THREE.Vector3();
  /* průměrný směr běhu kolem vzdálenosti d (0,8 m zpátky až 0,8 m dopředu), jednotkový vektor v rovině x–z */
  function heading(d) {
    let sx = 0, sz = 0;
    for (let k = -2; k <= 1; k++) { const a = at(d + k * .4), b = at(d + k * .4 + .4), dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz); if (l > 1e-4) { sx += dx / l; sz += dz / l; } }
    const l = Math.hypot(sx, sz); if (l > 1e-3) return { x: sx / l, z: sz / l };
    const a = at(d), b = at(d + .5), m = Math.hypot(b.x - a.x, b.z - a.z); return m > 1e-4 ? { x: (b.x - a.x) / m, z: (b.z - a.z) / m } : { x: 1, z: 0 };
  }
  function render(d, view) {
    const p = C.pose(d), ah = at(d + .8);
    /* kamera */
    dog.visible = view !== 'dog' && P.length > 1 && !p.tun;
    if (view === 'dog') { camera.fov = 75; camera.up.set(0, 1, 0); const f = at(d + .35); camera.position.set(f.x, f.h + .55, f.z); look.set(ah.x + (ah.x - p.x) * 4, ah.h + .3, ah.z + (ah.z - p.z) * 4); camera.lookAt(look); }
    else if (view === 'chase') {
      /* za psem šikmo ze strany (asi 45°) a nízko jako televizní kamera: přímo zezadu a shora (dřív 4 m po trase zpátky
         a 2,4 m nad zemí) se tělo běžícího psa zkrátilo do svislé čárky, jako by stál na zadních, a po otočce kolem křídla
         byl bod po trase zpátky před psem. Směr je průměr směru trasy kolem psa, kamera v zatáčkách plynule obkrouží. */
      const hd = heading(d), sx = -hd.z, sz = hd.x;
      camera.fov = 52; camera.up.set(0, 1, 0);
      camera.position.set(p.x - hd.x * 2.6 + sx * 2.8, Math.max(p.h, 0) + 1.25, p.z - hd.z * 2.6 + sz * 2.8);
      look.set(p.x + hd.x * .5, p.h + .45, p.z + hd.z * .5); camera.lookAt(look);
    }
    else if (view === 'top') placeTop(topH);
    else placeOrbit(orb.dist);
    camera.updateProjectionMatrix();
    world.R.render(scene, camera);
    return p;
  }
  let disposed = false;
  function dispose() {
    if (disposed) return; disposed = true;
    canvas.removeEventListener('pointerdown', onDown); canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerup', onUp); canvas.removeEventListener('pointercancel', onUp); canvas.removeEventListener('wheel', onWheel);
    const done = new Set();
    scene.traverse(o => {
      if (o.geometry && !done.has(o.geometry)) { done.add(o.geometry); o.geometry.dispose(); }
      (o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []).forEach(m => { if (done.has(m)) return; done.add(m); Object.keys(m).forEach(k => { const v = m[k]; if (v && v.isTexture && !done.has(v)) { done.add(v); v.dispose(); } }); m.dispose(); });
    });
    world.R.dispose(); try { world.R.forceContextLoss(); } catch (e) { }
  }
  const api = { length, render, resize, dispose, at, pose: C.pose, scene, hand: C.hand, dog: C.dog, camera, get tier() { return world.tier; }, get pixelRatio() { return world.R.getPixelRatio(); }, onCamera: null };
  return api;
}
