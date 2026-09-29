/* Engine 3D animací techniky.

   API (stabilní, scény proti němu píše i agent B):
     mount(canvas, sceneId, opts) → {render(t), resize(), dispose(), tier}
       opts: {quality:'low'|'mid'|'high' (jinak automaticky), D: délka smyčky v s (pro rychlost psovoda a vrtění ocasem)}
     Scéna (soubory scén exportují mapu id → def):
       def = { build(ctx), at(t, ctx) → state, cam?: {dist, height, lookAhead, mode:'side'|'high', fov?, az?, lookY?, smooth?} }
       ctx = { THREE (výběr tříd, viz T3 níže), scene, ob (obstacles.js), lerp, ss, sm, bump, path, dog, hand }
         ss(x) = smoothstep na 0..1 (x se ořízne), sm(a,b,x) = smoothstep z a do b, bump(x,c,w) = exp(-((x-c)/w)²)
         path([[x,z],...], closed?) → {at(u) → {x,z,yaw}, length}  (Catmull-Rom, u∈[0,1] podle délky)
       state = { dog: {x, z, y?, yaw?, air?, land?, pitch?, slope?, still?, hidden?, sit?},
                   // pitch = náklon těla ve skoku (nohy zůstávají svislé), slope = sklon celého psa na rampě (rad, + = čumák nahoru), sit 0..1 = sed
                 hand: {x, z, yaw?, point?:0..1, pointSide?:1|-1, still?} | null,   // psovod skrytý, když null
                 focus?: {x, z, y?}, extra?: fn(ctx) }
     Souřadnice: metry, zem y=0, x doprava, z ke kameře. yaw = otočení kolem svislé osy jako rotation.y
     v three.js: 0 = čelem do +x, π/2 = čelem do −z, −π/2 = čelem do +z (ke kameře). Když yaw chybí,
     spočítá se z pohybu. Fáze cvalu se počítá z uražené dráhy (deterministicky, i při pauze a přetáčení). */
import * as THREE from 'three';
import { makeDog, poseDog } from './dog.js';
import { makeHandler, poseHandler } from './handler.js';
import { makeWorld, autoTier, TIERS } from './world.js';
import * as ob from './obstacles.js';

const SCENES = {};
export function register(map) { Object.keys(map || {}).forEach(k => { SCENES[k] = map[k]; }); }
export function hasScene(id) { return !!SCENES[id]; }

export const lerp = (a, b, t) => a + (b - a) * t;
export const ss = x => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t); };
export const sm = (a, b, x) => ss((x - a) / (b - a));
export const bump = (x, c, w) => Math.exp(-(((x - c) / w) ** 2));

/* Catmull-Rom přes body [[x,z],...], parametrizace podle délky */
export function path(points, closed) {
  const P = points.map(p => ({ x: p[0], z: p[1] })), n = P.length, S = [];
  const get = i => closed ? P[(i + n) % n] : P[Math.max(0, Math.min(n - 1, i))];
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
    for (let k = 0; k < 24; k++) {
      const t = k / 24, t2 = t * t, t3 = t2 * t, f = (a, b, c, d) => .5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      S.push({ x: f(p0.x, p1.x, p2.x, p3.x), z: f(p0.z, p1.z, p2.z, p3.z) });
    }
  }
  S.push(closed ? { ...S[0] } : { ...P[n - 1] });
  const L = [0]; for (let i = 1; i < S.length; i++) L.push(L[i - 1] + Math.hypot(S[i].x - S[i - 1].x, S[i].z - S[i - 1].z));
  const tot = L[L.length - 1] || 1;
  return {
    length: tot, pts: S,
    at(u) {
      u = closed ? ((u % 1) + 1) % 1 : Math.max(0, Math.min(1, u));
      const d = u * tot; let lo = 0, hi = L.length - 1;
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if (L[m] < d) lo = m; else hi = m; }
      const a = S[lo], b = S[hi], f = (d - L[lo]) / ((L[hi] - L[lo]) || 1);
      return { x: a.x + (b.x - a.x) * f, z: a.z + (b.z - a.z) * f, yaw: Math.atan2(-(b.z - a.z), b.x - a.x) };
    }
  };
}

/* ctx.THREE: výběr tříd three.js pro scény (celý jmenný prostor by vyřadil tree-shaking a balík by byl o ~400 kB větší).
   Chybí-li scéně něco, stačí to sem přidat. */
const T3 = {
  Group: THREE.Group, Object3D: THREE.Object3D, Mesh: THREE.Mesh, InstancedMesh: THREE.InstancedMesh, Line: THREE.Line, LineSegments: THREE.LineSegments, Points: THREE.Points,
  Sprite: THREE.Sprite, SpriteMaterial: THREE.SpriteMaterial,
  Vector2: THREE.Vector2, Vector3: THREE.Vector3, Quaternion: THREE.Quaternion, Euler: THREE.Euler, Matrix4: THREE.Matrix4, Color: THREE.Color, Box3: THREE.Box3, MathUtils: THREE.MathUtils,
  BufferGeometry: THREE.BufferGeometry, BufferAttribute: THREE.BufferAttribute, Float32BufferAttribute: THREE.Float32BufferAttribute,
  BoxGeometry: THREE.BoxGeometry, CylinderGeometry: THREE.CylinderGeometry, SphereGeometry: THREE.SphereGeometry, TorusGeometry: THREE.TorusGeometry,
  PlaneGeometry: THREE.PlaneGeometry, CircleGeometry: THREE.CircleGeometry, RingGeometry: THREE.RingGeometry, ConeGeometry: THREE.ConeGeometry,
  CapsuleGeometry: THREE.CapsuleGeometry, TubeGeometry: THREE.TubeGeometry, CatmullRomCurve3: THREE.CatmullRomCurve3,
  MeshStandardMaterial: THREE.MeshStandardMaterial, MeshBasicMaterial: THREE.MeshBasicMaterial, MeshLambertMaterial: THREE.MeshLambertMaterial,
  LineBasicMaterial: THREE.LineBasicMaterial, LineDashedMaterial: THREE.LineDashedMaterial, CanvasTexture: THREE.CanvasTexture,
  DoubleSide: THREE.DoubleSide, FrontSide: THREE.FrontSide, BackSide: THREE.BackSide, SRGBColorSpace: THREE.SRGBColorSpace, RepeatWrapping: THREE.RepeatWrapping
};

const N = 480, DOG_STRIDE = 1.35, HAND_STRIDE = 2.1;
const unwrap = (a, ref) => { while (a - ref > Math.PI) a -= 2 * Math.PI; while (a - ref < -Math.PI) a += 2 * Math.PI; return a; };

/* tabulka pohybu: poloha, směr (yaw), uražená dráha; slouží pro fázi kroku a vyhlazený směr/kameru */
function track(samples, key) {
  const x = [], z = [], yaw = [], dist = [0], has = [];
  samples.forEach(s => { const o = s[key]; has.push(!!o); x.push(o ? o.x : NaN); z.push(o ? o.z : NaN); });
  for (let i = 0; i <= N; i++) {
    const o = samples[i][key];
    if (i) { const d = has[i] && has[i - 1] ? Math.hypot(x[i] - x[i - 1], z[i] - z[i - 1]) : 0; dist.push(dist[i - 1] + d * (o && o.still ? 1 - Math.min(1, +o.still) : 1)); }
  }
  /* směr z pohybu (střední diference), v klidu drží poslední směr */
  let last = null;
  const raw = [];
  for (let i = 0; i <= N; i++) {
    const a = Math.max(0, i - 2), b = Math.min(N, i + 2);
    const dx = x[b] - x[a], dz = z[b] - z[a];
    raw.push(has[a] && has[b] && Math.hypot(dx, dz) > 2e-3 ? Math.atan2(-dz, dx) : null);
  }
  const first = raw.find(v => v != null);
  for (let i = 0; i <= N; i++) { let v = raw[i] != null ? raw[i] : (last != null ? last : (first != null ? first : 0)); if (last != null) v = unwrap(v, last); yaw.push(v); last = v; }
  /* jemné vyhlazení směru (±3 vzorky) */
  const sy = yaw.map((v, i) => { let s = 0, c = 0; for (let k = -3; k <= 3; k++) { const j = i + k; if (j >= 0 && j <= N) { s += unwrap(yaw[j], v); c++; } } return s / c; });
  return { x, z, yaw: sy, dist, has };
}
const tab = (arr, t) => { const f = Math.max(0, Math.min(1, t)) * N, i = Math.min(N - 1, Math.floor(f)), u = f - i; return arr[i] + (arr[i + 1] - arr[i]) * u; };

export function mount(canvas, sceneId, opts = {}) {
  const def = SCENES[sceneId]; if (!def) throw new Error('Neznámá scéna ' + sceneId);
  let tier = TIERS[opts.quality] ? opts.quality : autoTier();
  const D = opts.D || 7;
  const stage = new THREE.Group();
  const ctx = { THREE: T3, scene: stage, ob, lerp, ss, sm, bump, path };
  def.build && def.build(ctx);
  /* předvýpočet: 0..1 v N krocích */
  const samples = []; for (let i = 0; i <= N; i++) samples.push(def.at(i / N, ctx));
  const TD = track(samples, 'dog'), TH = track(samples, 'hand');
  /* vyhlazené ohnisko kamery */
  const C = def.cam || {}, high = C.mode === 'high';
  const cam = {
    dist: C.dist != null ? C.dist : (high ? 7.5 : 5.2), height: C.height != null ? C.height : (high ? 7 : 1.5),
    lookAhead: C.lookAhead != null ? C.lookAhead : (high ? 0 : .6), fov: C.fov || (high ? 40 : 34), az: C.az != null ? C.az : (high ? 0 : .22),
    lookY: C.lookY != null ? C.lookY : (high ? 0 : .45), smooth: C.smooth != null ? C.smooth : .05, followY: C.followY != null ? C.followY : .6
  };
  const FX = [], FZ = [], FY = [];
  samples.forEach(s => { const f = s.focus || s.dog || { x: 0, z: 0 }; FX.push(f.x); FZ.push(f.z); FY.push(f.y != null ? f.y : (s.focus ? 0 : (s.dog && s.dog.y) || 0)); });
  const W = Math.max(1, Math.round(cam.smooth * N));
  const box = A => A.map((v, i) => { let s = 0, c = 0; for (let k = -W; k <= W; k++) { const j = Math.max(0, Math.min(N, i + k)); s += A[j]; c++; } return s / c; });
  const SFX = box(FX), SFZ = box(FZ), SFY = box(FY);
  /* hranice děje (tráva, stíny) */
  const bb = new THREE.Box3().setFromObject(stage);
  let x0 = isFinite(bb.min.x) ? bb.min.x : 0, x1 = isFinite(bb.max.x) ? bb.max.x : 0, z0 = isFinite(bb.min.z) ? bb.min.z : 0, z1 = isFinite(bb.max.z) ? bb.max.z : 0;
  [TD, TH].forEach(T => T.x.forEach((v, i) => { if (T.has[i]) { x0 = Math.min(x0, v); x1 = Math.max(x1, v); z0 = Math.min(z0, T.z[i]); z1 = Math.max(z1, T.z[i]); } }));
  const bounds = { x0: Math.max(x0, -30), x1: Math.min(x1, 30), z0: Math.max(z0, -20), z1: Math.min(z1, 20) };

  const world = makeWorld(canvas, tier, bounds), Q = world.Q;
  const scene = world.scene; scene.add(stage);
  const dog = makeDog({ shells: Q.shells, shortShells: Q.shortShells }); scene.add(dog);
  dog.traverse(o => { if (o.isMesh && o.userData.shell === 0) o.castShadow = true; });
  const hand = makeHandler({ quality: tier }); scene.add(hand);
  hand.traverse(o => { if (o.isMesh && !o.userData.shell) o.castShadow = true; });
  ctx.dog = dog; ctx.hand = hand; ctx.world = world;
  const camera = new THREE.PerspectiveCamera(cam.fov, 2, .05, 500);

  let disposed = false, lastNow = 0, frames = [], downgraded = 0;
  function resize() {
    const w = canvas.clientWidth || canvas.width || 300, h = canvas.clientHeight || Math.round(w / 2);
    world.R.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  resize();

  const v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
  function render(t) {
    if (disposed) return;
    t = ((t % 1) + 1) % 1;
    const st = def.at(t, ctx) || {};
    /* pes */
    const d = st.dog;
    if (d) {
      dog.visible = !d.hidden;
      dog.position.set(d.x, d.y || 0, d.z);
      dog.rotation.y = d.yaw != null ? d.yaw : tab(TD.yaw, t);
      dog.rotation.z = d.slope || 0;   // sklon celého psa kolem tlapek (rampa, deska)
      poseDog(dog, (tab(TD.dist, t) / DOG_STRIDE) % 1, d.air || 0, d.pitch || 0, +d.still || 0, d.land || 0, { time: t * D, sit: d.sit || 0 });
    } else dog.visible = false;
    /* psovod */
    const h = st.hand;
    if (h) {
      hand.visible = true; hand.position.set(h.x, h.y || 0, h.z);
      hand.rotation.y = h.yaw != null ? h.yaw : tab(TH.yaw, t);
      const i = Math.min(N - 1, Math.floor(t * N)), sp = h.still ? 0 : (TH.dist[i + 1] - TH.dist[i]) * N / D;
      /* speed: 0..1 (1 = plný běh ≈ 4 m/s) */
      poseHandler(hand, { phase: (tab(TH.dist, t) / HAND_STRIDE) % 1, speed: Math.min(1, sp / 4), point: h.point || 0, pointSide: h.pointSide || 1, still: !!h.still });
    } else hand.visible = false;
    if (st.extra) st.extra(ctx);
    /* kamera: vyhlazené ohnisko, pohled z boku (nebo shora) */
    const fx = tab(SFX, t), fz = tab(SFZ, t), fy = tab(SFY, t) * cam.followY;
    const i0 = Math.max(0, Math.floor(t * N) - 6), i1 = Math.min(N, i0 + 12);
    let vx = SFX[i1] - SFX[i0], vz = SFZ[i1] - SFZ[i0]; const vl = Math.hypot(vx, vz); if (vl > 1e-3) { vx /= vl; vz /= vl; } else { vx = 0; vz = 0; }
    const la = cam.lookAhead * Math.min(1, vl * 10);
    camera.position.set(fx - cam.dist * Math.sin(cam.az), cam.height + fy, fz + cam.dist * Math.cos(cam.az));
    camera.lookAt(v1.set(fx + vx * la, cam.lookY + fy, fz + vz * la));
    world.R.render(scene, camera);
    /* měření: prvních ~30 snímků přehrávání; pomalé → nižší kvalita */
    const now = performance.now();
    if (lastNow && now - lastNow < 250 && downgraded < 2) {
      frames.push(now - lastNow);
      if (frames.length >= 30) {
        const avg = frames.reduce((a, b) => a + b, 0) / frames.length; frames = [];
        const next = avg > 28 ? (world.tier === 'high' ? 'mid' : world.tier === 'mid' ? 'low' : null) : null;
        if (next) { world.setTier(next); applyShells(TIERS[next]); resize(); downgraded++; } else downgraded = 9;
      }
    }
    lastNow = now;
  }
  function applyShells(q) {
    /* méně vrstev srsti: skryjí se mezivrstvy */
    dog.traverse(o => { if (o.isMesh && o.userData.shells) { const n = o.userData.shells, want = n > 5 ? q.shells : q.shortShells, k = Math.max(1, Math.round(n / Math.max(1, want))); o.visible = o.userData.shell % k === 0 || o.userData.shell === n; } });
  }
  function dispose() {
    if (disposed) return; disposed = true;
    const done = new Set();
    scene.traverse(o => {
      if (o.geometry && !done.has(o.geometry)) { done.add(o.geometry); o.geometry.dispose(); }
      const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
      ms.forEach(m => { if (done.has(m)) return; done.add(m); Object.keys(m).forEach(k => { const v = m[k]; if (v && v.isTexture && !done.has(v)) { done.add(v); v.dispose(); } }); m.dispose(); });
    });
    world.R.dispose();
    try { world.R.forceContextLoss(); } catch (e) { }
  }
  /* draw(): překreslí bez změny stavu (ladění: vlastní kamera) */
  return { render, resize, dispose, draw: () => { if (!disposed) world.R.render(scene, camera); }, get tier() { return world.tier; }, renderer: world.R, scene, camera, dog, hand };
}
