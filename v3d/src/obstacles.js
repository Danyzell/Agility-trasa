/* Překážky agility v rozměrech podle pravidel FCI (metry). Každá továrna vrací THREE.Group.
   Orientace: pes překážku bere ve směru osy x (laťka, kruh a díly skoku dalekého leží napříč, podél z).
   Otočení/posun si scéna nastaví sama (g.position, g.rotation.y). */
import * as THREE from 'three';
import { M, shadowAll, canvasTex, mergeByMaterial } from './world.js';

const YEL = '#f2c230';
const matCache = {};
const mat = (c, r = .6, m = 0) => matCache[c + r + m] || (matCache[c + r + m] = M(c, r, m));

/* pruhovaná tyč (laťka, tyčka slalomu); osa podél x */
const stripeCache = {};
export function stripedBar(len, r, a, b, n = 8) {
  const key = a + b + n;
  const t = stripeCache[key] || (stripeCache[key] = canvasTex(512, 8, x => { for (let i = 0; i < n; i++) { x.fillStyle = i % 2 ? b : a; x.fillRect(i * 512 / n, 0, 512 / n, 8); } }));
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 16), stripeCache[key + 'm'] || (stripeCache[key + 'm'] = new THREE.MeshStandardMaterial({ map: t, roughness: .35 })));
  m.geometry.rotateZ(Math.PI / 2); return m;
}
/* protiskluzový povrch zón a desek (pryžová drť) */
function rubberTex(col) {
  const t = canvasTex(128, 128, (x, W) => {
    x.fillStyle = col; x.fillRect(0, 0, W, W);
    for (let i = 0; i < 1400; i++) { const v = Math.random(); x.fillStyle = v < .5 ? 'rgba(0,0,0,.14)' : 'rgba(255,255,255,.12)'; x.fillRect(Math.random() * W, Math.random() * W, 1.5, 1.5); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
function board(len, w, th, col, zone, zoneEnds) {
  /* deska podél x od 0 do len (spodní hrana v y=0), zóny na koncích zoneEnds: [od začátku, od konce] */
  const g = new THREE.Group();
  const tb = rubberTex(col); tb.repeat.set(len * 2, w * 2);
  const b = new THREE.Mesh(new THREE.BoxGeometry(len, th, w), new THREE.MeshStandardMaterial({ map: tb, roughness: .9 }));
  b.position.set(len / 2, -th / 2, 0); g.add(b);
  const ty = rubberTex(YEL);
  (zoneEnds || []).forEach((zl, i) => {
    if (!zl) return;
    const tz = ty.clone(); tz.needsUpdate = true; tz.repeat.set(zl * 2, w * 2);
    const z = new THREE.Mesh(new THREE.BoxGeometry(zl, th + .004, w + .004), new THREE.MeshStandardMaterial({ map: tz, roughness: .9 }));
    z.position.set(i ? len - zl / 2 : zl / 2, -th / 2, 0); g.add(z);
  });
  return g;
}

/* ---------- skok: soutěžní křídla a pruhovaná laťka ---------- */
export function jump(o = {}) {
  const h = o.h != null ? o.h : .55, W = o.width || 1.3, g = new THREE.Group();
  const wm = mat('#f5f5f2', .45), gr = mat(o.c1 || '#1f6b45', .55), ye = mat(o.c2 || '#c6f432', .55);
  for (const s of [-1, 1]) {
    const w = new THREE.Group();
    const post = (x, hh) => { const p = new THREE.Mesh(new THREE.BoxGeometry(.055, hh, .055), wm); p.position.set(x, hh / 2, 0); w.add(p); };
    post(0, 1.2); post(s * .55, .85);
    const top = new THREE.Mesh(new THREE.BoxGeometry(.66, .05, .05), wm); top.position.set(s * .28, 1.03, 0); top.rotation.z = s * -.6; w.add(top);
    for (let k = 0; k < 4; k++) { const sl = new THREE.Mesh(new THREE.BoxGeometry(.5, .075, .03), k % 2 ? ye : gr); sl.position.set(s * .275, .16 + k * .18, 0); w.add(sl); }
    const foot = new THREE.Mesh(new THREE.BoxGeometry(.06, .05, .55), wm); foot.position.y = .025; w.add(foot);
    const foot2 = foot.clone(); foot2.position.x = s * .55; w.add(foot2);
    const cup = new THREE.Mesh(new THREE.BoxGeometry(.06, .03, .06), mat('#333', .5)); cup.position.set(-s * .045, h - .035, 0); w.add(cup);
    w.position.x = s * (W / 2 + .03); g.add(w);
  }
  g.rotation.y = Math.PI / 2; shadowAll(g);
  const out = new THREE.Group(); out.add(mergeByMaterial(g));
  const bar = stripedBar(W - .02, .02, '#ffffff', '#d23a2e', 10); bar.position.y = h; bar.rotation.y = Math.PI / 2; out.add(bar); shadowAll(bar);
  out.userData = { h, bar, width: W };
  return out;
}

/* ---------- zeď: cihlová stěna mezi dvěma věžičkami, nahoře snímatelné kostky (FCI) ---------- */
export function wall(o = {}) {
  const h = o.h != null ? o.h : .55, W = o.width || 1.3, g = new THREE.Group();
  const brick = mat(o.color || '#b0533c', .8), wm = mat('#f5f5f2', .45), top = mat('#e8e3d6', .6);
  const body = new THREE.Mesh(new THREE.BoxGeometry(.22, h - .08, W), brick); body.position.y = (h - .08) / 2; g.add(body);
  for (let k = 0; k < 4; k++) { const c = new THREE.Mesh(new THREE.BoxGeometry(.24, .08, W / 4 - .01), top); c.position.set(0, h - .04, -W / 2 + W / 8 + k * W / 4); g.add(c); }
  for (const s of [-1, 1]) { const t = new THREE.Mesh(new THREE.BoxGeometry(.3, 1.0, .3), wm); t.position.set(0, .5, s * (W / 2 + .15)); g.add(t); }
  shadowAll(g); const out = mergeByMaterial(g); out.userData = { h, width: W }; return out;
}

/* ---------- dvojitý skok (oxer): dvě laťky za sebou, zadní výš ---------- */
export function oxer(o = {}) {
  const h = o.h != null ? o.h : .55, d = o.depth || .35, out = jump(Object.assign({}, o, { h: Math.max(.1, h - .1) }));
  const W = out.userData.width, bar = stripedBar(W - .02, .02, '#ffffff', '#1f6b45', 10); bar.position.set(d, h, 0); bar.rotation.y = Math.PI / 2; out.add(bar); shadowAll(bar);
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(.055, 1.0, .055), mat('#f5f5f2', .45)); p.position.set(d, .5, s * (W / 2 + .03)); out.add(p); shadowAll(p); }
  return out;
}

/* ---------- tunel: trubice ⌀ 60 cm po křivce [[x,z],...] (min. 3 m) ---------- */
export function tunnel(o = {}) {
  const r = o.r || .3, pts = (o.points || [[-2, 0], [2, 0]]).map(p => new THREE.Vector3(p[0], r, p[1]));
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal'), g = new THREE.Group();
  const len = curve.getLength(), segs = Math.max(40, Math.round(len * 16));
  const col = o.color || '#2f6fd0';
  /* látka s mírným zvlněním mezi obručemi */
  const geo = new THREE.TubeGeometry(curve, segs, r, 28, false), pa = geo.attributes.position;
  for (let i = 0; i <= segs; i++) {
    const u = i / segs, p = curve.getPointAt(u), wav = 1 - .045 * Math.pow(Math.abs(Math.sin(u * len / .25 * Math.PI)), .6);
    for (let j = 0; j <= 28; j++) {
      const k = i * 29 + j, x = pa.getX(k) - p.x, y = pa.getY(k) - p.y, z = pa.getZ(k) - p.z;
      pa.setXYZ(k, p.x + x * wav, Math.max(0.005, p.y + y * wav), p.z + z * wav);
    }
  }
  geo.computeVertexNormals();
  const cloth = new THREE.MeshStandardMaterial({ color: col, roughness: .6, side: THREE.DoubleSide });
  g.add(new THREE.Mesh(geo, cloth));
  /* obruče */
  const rib = mat(o.rib || '#1c4fa0', .5), n = Math.round(len / .25);
  const tg = new THREE.TorusGeometry(r + .004, .01, 5, 28);
  const ribs = new THREE.Group();
  for (let i = 0; i <= n; i++) { const u = i / n, p = curve.getPointAt(u), t = curve.getTangentAt(u); const m = new THREE.Mesh(tg, rib); m.position.copy(p); m.lookAt(p.clone().add(t)); ribs.add(m); }
  g.add(mergeByMaterial(ribs));
  /* pytle se zátěží (zajištění tunelu) */
  const bag = new THREE.CapsuleGeometry(.09, .5, 4, 8).rotateZ(Math.PI / 2), bm = mat('#303a44', .9);
  [.25, .75].forEach(u => { const p = curve.getPointAt(u), t = curve.getTangentAt(u); const b = new THREE.Mesh(bag, bm); b.position.set(p.x, r * 2 + .05, p.z); b.rotation.y = Math.atan2(-t.z, t.x) + Math.PI / 2; b.scale.set(1, .7, 1); g.add(b); });
  shadowAll(g);
  g.userData = { curve, r, length: len };
  return g;
}

/* ---------- slalom: 12 tyček po 60 cm od x=0 ve směru +x ---------- */
export function weave(o = {}) {
  const n = o.n || 12, sp = o.spacing || .6; let g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry((n - 1) * sp + .3, .025, .06), mat('#c9ced3', .35, .6)); base.position.set((n - 1) * sp / 2, .0125, 0); g.add(base);
  for (let k = 0; k < n; k++) {
    const p = stripedBar(1.1, .024, '#ffffff', k % 2 ? '#e0392b' : '#1f8a55', 8); p.rotation.z = Math.PI / 2; p.position.set(k * sp, .56, 0); g.add(p);
    const f = new THREE.Mesh(new THREE.BoxGeometry(.05, .025, .5), mat('#c9ced3', .35, .6)); f.position.set(k * sp, .0125, 0); if (k % 3 === 0) g.add(f);
  }
  shadowAll(g); g = mergeByMaterial(g); g.userData = { n, spacing: sp, poles: [...Array(n).keys()].map(k => k * sp) };
  return g;
}

/* ---------- A-rampa: 2 desky 2,7 m, vrchol 1,70 m, zóny 1,06 m ---------- */
export function aframe(o = {}) {
  const L = 2.7, top = 1.7, ang = Math.asin(top / L), half = L * Math.cos(ang), W = .95, th = .05, zl = 1.06; let g = new THREE.Group();
  for (const s of [-1, 1]) {
    const b = board(L, W, th, o.color || '#2d5fa8', true, [zl, 0]);
    /* deska od paty (x = s·half) k vrcholu */
    b.position.set(s * half, 0, 0); b.rotation.set(0, s < 0 ? 0 : Math.PI, ang); g.add(b);
  }
  const hinge = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, W, 10).rotateX(Math.PI / 2), mat('#8a9097', .4, .6)); hinge.position.y = top - .01; g.add(hinge);
  const chain = new THREE.Mesh(new THREE.BoxGeometry(half * 1.6, .015, .015), mat('#555', .5, .6)); chain.position.set(0, .45, -.42); g.add(chain);
  const chain2 = chain.clone(); chain2.position.z = .42; g.add(chain2);
  shadowAll(g); g = mergeByMaterial(g);
  /* výška povrchu nad x (pro nohy psa) */
  const surf = x => Math.abs(x) >= half ? 0 : top * (1 - Math.abs(x) / half);
  g.userData = { L, top, ang, half, zone: zl * Math.cos(ang), surf };
  return g;
}

/* ---------- kladina: 3 desky 3,7 m, výška 1,25 m, šířka 30 cm, zóny 90 cm ---------- */
export function dogwalk(o = {}) {
  const L = 3.7, H = 1.25, W = .3, th = .05, ang = Math.asin(H / L), half = L * Math.cos(ang), zl = .9; let g = new THREE.Group();
  const col = o.color || '#b8342c';
  const mid = board(L, W, th, col, true, []); mid.position.set(-L / 2, H, 0); g.add(mid);
  for (const s of [-1, 1]) {
    const b = board(L, W, th, col, true, [zl, 0]);
    b.position.set(s * (L / 2 + half), 0, 0); b.rotation.set(0, s < 0 ? 0 : Math.PI, ang); g.add(b);
    /* podpěry (kozy) pod koncem střední desky */
    const st = new THREE.Group(), lm = mat('#8a9097', .45, .5);
    for (const z of [-.28, .28]) { const l = new THREE.Mesh(new THREE.BoxGeometry(.04, H, .04), lm); l.position.set(0, H / 2 - .03, z); l.rotation.x = z > 0 ? -.2 : .2; st.add(l); }
    const cb = new THREE.Mesh(new THREE.BoxGeometry(.05, .05, .42), lm); cb.position.y = H - .08; st.add(cb);
    const cb2 = new THREE.Mesh(new THREE.BoxGeometry(.03, .03, .6), lm); cb2.position.y = .3; st.add(cb2);
    st.position.x = s * (L / 2 - .12); g.add(st);
  }
  shadowAll(g); g = mergeByMaterial(g);
  const surf = x => { const a = Math.abs(x); return a <= L / 2 ? H : a >= L / 2 + half ? 0 : H * (1 - (a - L / 2) / half); };
  g.userData = { L, H, ang, half, zone: zl * Math.cos(ang), total: L / 2 + half, surf };
  return g;
}

/* ---------- houpačka: deska 3,7 m, osa ve výšce 60 cm; setTilt(úhel): + = pravý konec (+x) nahoře ---------- */
export function seesaw(o = {}) {
  const L = 3.7, H = .6, W = .3, th = .05, g = new THREE.Group(), maxT = Math.asin((H - th / 2) / (L / 2));
  const piv = new THREE.Group(); piv.position.y = H; g.add(piv);
  const b = board(L, W, th, o.color || '#2d5fa8', true, [.9, .9]); b.position.set(-L / 2, th, 0); piv.add(b);
  /* stojan osy */
  const lm = mat('#8a9097', .45, .5);
  for (const z of [-.24, .24]) for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.BoxGeometry(.045, .68, .045), lm); l.position.set(s * .16, .3, z); l.rotation.z = s * .5; g.add(l); }
  const ax = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, .55, 10).rotateX(Math.PI / 2), lm); ax.position.y = H; g.add(ax);
  const base = new THREE.Mesh(new THREE.BoxGeometry(.6, .03, .6), lm); base.position.y = .015; g.add(base);
  shadowAll(g);
  let tilt = maxT;
  const api = {
    L, H, th, maxT,
    setTilt(a) { tilt = Math.max(-maxT, Math.min(maxT, a)); piv.rotation.z = tilt; },
    get tilt() { return tilt; },
    /* bod na povrchu desky ve vzdálenosti s od středu (kladně k +x): {x, y} */
    point(s) { return { x: s * Math.cos(tilt) - th * Math.sin(tilt), y: H + s * Math.sin(tilt) + th * Math.cos(tilt) }; }
  };
  api.setTilt(maxT * (o.start || -1));
  g.userData = api; g.setTilt = api.setTilt;
  return g;
}

/* ---------- kruh: otvor ⌀ 55 cm, střed ve výšce 80 cm (L), rám max. 1,5 m ---------- */
export function tire(o = {}) {
  const h = o.h || .8, R = .335, tr = .065; let g = new THREE.Group();
  /* pneumatika z barevných segmentů (rozpadací kruh má dvě poloviny) */
  const segs = 8;
  for (let i = 0; i < segs; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(R, tr, 12, 10, Math.PI * 2 / segs), mat(i % 2 ? '#1d1d1f' : '#f2c230', .55));
    t.rotation.set(0, Math.PI / 2, i * Math.PI * 2 / segs); t.position.y = h; g.add(t);
  }
  const fm = mat('#e8e8e8', .4, .3), W = .78, top = h + R + .5;
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(.06, top, .06), fm); p.position.set(0, top / 2, s * W); g.add(p);
    const f = new THREE.Mesh(new THREE.BoxGeometry(.9, .05, .07), fm); f.position.set(0, .025, s * W); g.add(f);
    /* úchyty kruhu k rámu */
    const c = new THREE.Mesh(new THREE.CylinderGeometry(.008, .008, W - R - tr), mat('#333', .6)); c.rotation.x = Math.PI / 2; c.position.set(0, h, s * (W + R + tr) / 2); g.add(c);
    const c2 = new THREE.Mesh(new THREE.CylinderGeometry(.008, .008, top - h - R - tr), mat('#333', .6)); c2.position.set(0, (top + h + R + tr) / 2, s * .2); c2.rotation.x = s * -.35; g.add(c2);
  }
  const bar = new THREE.Mesh(new THREE.BoxGeometry(.06, .06, W * 2 + .06), fm); bar.position.y = top; g.add(bar);
  shadowAll(g); g = mergeByMaterial(g); g.userData = { h, inner: R - tr };
  return g;
}

/* ---------- skok daleký: 4 díly (L 1,2–1,5 m), šířka 1,2 m, rohové tyče 1,2 m ---------- */
export function longjump(o = {}) {
  let g = new THREE.Group();
  const n = o.n || 4, len = o.len || 1.4, W = 1.2, el = mat('#e8e8e8', .5), st = mat('#1f6b45', .55);
  for (let i = 0; i < n; i++) {
    /* díl: nízká šikmá lavička (vpředu nižší), bílá s pruhem */
    const hh = .15 + (.13 * i) / (n - 1), x = -len / 2 + .08 + i * (len - .16) / (n - 1), w = W - i * .07, D = .16;
    const geo = new THREE.BoxGeometry(D, hh, w), pa = geo.attributes.position;
    for (let v = 0; v < pa.count; v++) { const y = pa.getY(v) + hh / 2; pa.setY(v, pa.getX(v) < 0 && y > hh / 2 ? hh - .06 : y); }
    geo.computeVertexNormals();
    const b = new THREE.Mesh(geo, el); b.position.set(x, 0, 0); g.add(b);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(D + .004, .035, w * .5), st); stripe.position.set(x, hh * .45, 0); g.add(stripe);
  }
  const pm = mat('#f5f5f2', .4);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(.018, .018, 1.2, 10), pm); p.position.set(sx * (len / 2 + .05), .6, sz * (W / 2 + .05)); g.add(p);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(.03, 10, 8), mat('#d23a2e', .4)); cap.position.set(sx * (len / 2 + .05), 1.21, sz * (W / 2 + .05)); g.add(cap);
  }
  shadowAll(g); g = mergeByMaterial(g); g.userData = { len, W };
  return g;
}

/* ---------- Hoopers (FCI Hoopers Regulations): oblouk, sud, plůtek, krátký tunel a prostor psovoda ----------
   Pes je bere ve směru osy x jako ostatní překážky; nohy oblouku a síť plůtku leží podél z (jako v plánu). */
const legM = () => mat('#8a9097', .45, .5);
/* opěrka u paty (oblouk, plůtek): krátká noha podél x, FCI nejvýš 70 cm */
function foot(g, z) { const f = new THREE.Mesh(new THREE.BoxGeometry(.6, .022, .045), legM()); f.position.set(0, .011, z); g.add(f); }

/* oblouk: šířka 90 cm (jako v plánu), spodní díl 50 cm v kontrastní barvě, nahoře půlkruh – celkem 95 cm (FCI: 80–100 × 90–120 cm),
   trubka 3,2 cm, bez příčky mezi nohama */
export function hoop(o = {}) {
  const W = o.width || .9, r = W / 2, leg = o.leg || .5, t = .016; let g = new THREE.Group();
  const lm = mat(o.legColor || '#f5f5f2', .45), am = mat(o.color || '#e07b2c', .4), jm = mat('#3a3f46', .5);
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(t, t, leg, 10), lm); p.position.set(0, leg / 2, s * r); g.add(p);
    const j = new THREE.Mesh(new THREE.CylinderGeometry(t + .006, t + .006, .07, 10), jm); j.position.set(0, leg, s * r); g.add(j);   // spojka nohy a oblouku
    foot(g, s * r);
  }
  const arch = new THREE.Mesh(new THREE.TorusGeometry(r, t, 8, 36, Math.PI), am); arch.rotation.y = Math.PI / 2; arch.position.y = leg; g.add(arch);
  shadowAll(g); g = mergeByMaterial(g); g.userData = { width: W, h: leg + r };
  return g;
}

/* sud: plastový barel ⌀ 60 cm (jako v plánu), výška 85 cm (FCI: ⌀ 45–70 cm, 65–110 cm), kontrastní pruhy, obruče a víko se zátkou */
export function barrel(o = {}) {
  const r = o.r || .3, h = o.h || .85; let g = new THREE.Group();
  const bm = mat(o.color || '#4e7d34', .5), dm = mat('#3d6629', .55), wm = mat('#f2f2ee', .5);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h - .02, 32), bm); body.position.y = (h - .02) / 2; g.add(body);
  for (const y of [.3, .58]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(r + .003, r + .003, .06, 32, 1, true), wm); b.position.y = y; g.add(b); }
  for (const y of [.02, h * .44, h - .02]) { const b = new THREE.Mesh(new THREE.TorusGeometry(r, .012, 6, 32), dm); b.rotation.x = Math.PI / 2; b.position.y = y; g.add(b); }
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(r - .01, r - .01, .02, 32), dm); lid.position.y = h - .01; g.add(lid);
  const bung = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, .02, 12), wm); bung.position.set(r * .5, h + .005, 0); g.add(bung);
  shadowAll(g); g = mergeByMaterial(g); g.userData = { r, h };
  return g;
}

/* plůtek: rám 110 × 95 cm z trubek (FCI: 90–130 × 90–110 cm), uvnitř síť, přes kterou pes vidí psovoda; opěrky napříč.
   Síť leží podél z, pes ho míjí podél sítě (FCI: jen ve směru překážky, ne přes kratší stranu). */
let netTex = null;
function gateNet() {
  if (netTex) return netTex;
  netTex = canvasTex(64, 64, (x, W) => { x.clearRect(0, 0, W, W); x.fillStyle = 'rgba(60,48,90,.22)'; x.fillRect(0, 0, W, W); x.strokeStyle = 'rgba(28,24,40,.85)'; x.lineWidth = 5; x.strokeRect(0, 0, W, W); });
  netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping; return netTex;
}
export function gate(o = {}) {
  const W = o.width || 1.1, H = o.h || .95, t = .016, gap = .03; let g = new THREE.Group();
  const fm = mat(o.color || '#7b5ea7', .45);
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(t, t, H, 10), fm); p.position.set(0, H / 2, s * W / 2); g.add(p); foot(g, s * W / 2); }
  for (const y of [gap, H]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(t, t, W, 10), fm); b.rotation.x = Math.PI / 2; b.position.y = y; g.add(b); }
  shadowAll(g); g = mergeByMaterial(g);
  const tex = gateNet(); tex.repeat.set(W / .08, (H - gap) / .08);
  const net = new THREE.Mesh(new THREE.PlaneGeometry(W, H - gap), new THREE.MeshStandardMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, roughness: .8, depthWrite: false }));
  net.rotation.y = Math.PI / 2; net.position.y = (H + gap) / 2; net.receiveShadow = true; g.add(net);
  g.userData = { width: W, h: H };
  return g;
}

/* krátký tunel (chute): látková trubice ⌀ 80 cm, délka 1 m (FCI 80 × 80 × 100 cm), obruče a nožky rámu mimo dráhu psa */
export function chute(o = {}) {
  const r = .4, L = o.len || 1, g = new THREE.Group();
  const cloth = new THREE.MeshStandardMaterial({ color: o.color || '#2f6fd0', roughness: .6, side: THREE.DoubleSide });
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, 32, 1, true).rotateZ(Math.PI / 2), cloth); tube.position.y = r; g.add(tube);
  const fr = new THREE.Group(), rib = mat(o.rib || '#1c4fa0', .5);
  for (let k = 0; k <= 4; k++) { const m = new THREE.Mesh(new THREE.TorusGeometry(r + .004, k % 4 ? .01 : .02, 6, 32), rib); m.rotation.y = Math.PI / 2; m.position.set(-L / 2 + k * L / 4, r, 0); fr.add(m); }
  for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.BoxGeometry(.05, .03, 2 * r + .3), legM()); f.position.set(s * L / 2, .015, 0); fr.add(f); }
  g.add(mergeByMaterial(fr)); shadowAll(g);
  g.userData = { r, length: L };
  return g;
}

/* prostor psovoda: čtverec 2 × 2 m vyznačený hadicí ⌀ 5 cm (FCI: hadice 2–7 cm nebo páska), uvnitř lehce podbarvený; není to překážka */
export function handlerArea(o = {}) {
  const S = o.size || 2, r = .025, col = o.color || '#e2b007'; let g = new THREE.Group();
  const hm = mat(col, .7);
  for (const s of [-1, 1]) {
    const a = new THREE.Mesh(new THREE.CylinderGeometry(r, r, S + 2 * r, 8), hm); a.rotation.z = Math.PI / 2; a.position.set(0, r, s * S / 2); g.add(a);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(r, r, S + 2 * r, 8), hm); b.rotation.x = Math.PI / 2; b.position.set(s * S / 2, r, 0); g.add(b);
  }
  shadowAll(g); g = mergeByMaterial(g);
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(S, S).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: col, transparent: true, opacity: .2, roughness: 1, depthWrite: false }));
  fill.position.y = .009; fill.receiveShadow = true; g.add(fill);
  g.userData = { size: S };
  return g;
}

/* ---------- číslo překážky (cedulka na stojánku) ---------- */
export function numSign(n) {
  const tx = canvasTex(128, 128, x => { x.fillStyle = '#fff'; x.fillRect(0, 0, 128, 128); x.fillStyle = '#1f6b45'; x.font = '800 92px sans-serif'; x.textAlign = 'center'; x.fillText(String(n), 64, 98); });
  const w = mat('#fff'), f = new THREE.MeshStandardMaterial({ map: tx });
  const g = new THREE.Group(), s = new THREE.Mesh(new THREE.BoxGeometry(.3, .3, .02), [w, w, w, w, f, f]); s.position.y = .3; s.rotation.x = -.35; g.add(s);
  const leg = new THREE.Mesh(new THREE.BoxGeometry(.02, .3, .02), mat('#999')); leg.position.set(0, .14, -.06); g.add(leg);
  shadowAll(g); return g;
}
