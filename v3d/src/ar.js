/* Parkur v rozšířené realitě (WebXR, Chrome na Androidu s ARCore): kamera najde zem a klepnutím se parkur položí.
   Ve skutečné velikosti klepnutí položí start a parkur se natočí tak, aby překážka 1 byla od startu dál od telefonu (nebo podle
   kompasu, když je kolbiště zaměřené). Přesněji se parkur položí podle dvou překážek (klepnutí pod jejich středy), podle dvou rohů
   kolbiště nebo podle GPS (poloha telefonu na kolbišti a kompas, bez chození). Model 1 : 20 na stůl se položí středem.
   Položený parkur drží kotva WebXR (když ji telefon umí): ARCore ji po zpřesnění mapy nebo po ztrátě polohy vrátí na místo.
   arSupported() → Promise<bool>
   startAR(overlay, spec, ui) → Promise<api>; overlay = prvek s ovládáním (dom-overlay), ui = {onState(s, info), onEnd(), heading()}
   spec.az (nepovinné): magnetický kurz dlouhé strany kolbiště (plán doprava); ui.heading() = magnetický kurz, kam míří kamera
   api: {place(), replace(), corners(), pair(), gps(u), rotate(deg), nudge(right, away), setScale(model), foot(on), play(on), hint(s, info, ms),
         end(), placed, mode, length, pairNums}; u = {x, y, acc}: poloha telefonu v souřadnicích plánu (m) a přesnost GPS (m) */
import * as THREE from 'three';
import { buildCourse } from './course.js';
import { TIERS } from './world.js';

/* Výpočty položení bez WebXR (kvůli testům). Ve scéně je osa x plánu doprava a osa y plánu jde po ose z;
   úhel ve scéně atan2(-z, x) roste proti směru hodin, kurz po směru hodin. Otočení kolem svislé osy jako v three.js. */
export const arMath = {
  rot(x, z, yaw) { const c = Math.cos(yaw), s = Math.sin(yaw); return { x: x * c + z * s, z: -x * s + z * c }; },
  /* úhel vektoru ve scéně */
  ang(v) { return Math.atan2(-v.z, v.x); },
  /* kam dát počátek parkuru (start), aby bod local (souřadnice kolem startu, zmenšené k) ležel na pivot */
  rootAt(pivot, local, yaw, k) { const r = arMath.rot(local.x * k, local.z * k, yaw); return { x: pivot.x - r.x, y: pivot.y, z: pivot.z - r.z }; },
  /* osa x plánu míří z rohu A (vlevo nahoře) do rohu B (vpravo nahoře) */
  cornerYaw(a, b) { return Math.atan2(-(b.z - a.z), b.x - a.x); },
  /* dvě překážky: body plánu va → A a vb → B (směr z A do B ve světě = směr z va do vb v plánu) */
  pairYaw(A, B, va, vb) { return arMath.ang({ x: B.x - A.x, z: B.z - A.z }) - arMath.ang({ x: vb.x - va.x, z: vb.z - va.z }); },
  /* model na stole jako mapa: osa x plánu doprava, osa y plánu k telefonu */
  modelYaw(fw) { return Math.atan2(-fw.x, -fw.z); },
  /* kolbiště se známým kurzem dlouhé strany az a kurz kamery h (oba magnetické, ve stupních) */
  azYaw(fw, az, h) { return Math.atan2(-fw.z, fw.x) - (az - h) * Math.PI / 180; },
  /* bez kurzu: vektor plánu v (od startu k překážce 1) míří od telefonu ve směru pohledu po zemi */
  awayYaw(fw, v) { return Math.atan2(-fw.z, fw.x) - (Math.hypot(v.x, v.z) > .5 ? Math.atan2(-v.z, v.x) : 0); },
  /* posun vůči telefonu po zemi: right > 0 doprava, away > 0 dál od telefonu */
  nudge(fw, right, away, step) { return { x: step * (right * -fw.z + away * fw.x), z: step * (right * fw.x + away * fw.z) }; },
  /* které dvě překážky zaměřit: s nejnižším číslem (obvykle 1) a druhou co nejdál, ale co nejdřív na trase (z těch aspoň
     v 70 % největší vzdálenosti), ať se při obchůzce nechodí zbytečně. Skoky, kruh, skok daleký a slalom mají jasný střed na zemi,
     zóny jen když jiné chybí nebo jsou blíž než 10 m, tunel nikdy (střed oblouku na zemi nejde zaměřit). Pod 3 m se natočení
     zaměřit nedá (klepnutí blíž než 2 m se odmítá). → {a, b, na, nb, d} nebo null */
  pickPair(obs) {
    const rank = { jump: 2, tire: 2, longjump: 2, weave: 2, seesaw: 1, dogwalk: 1, aframe: 1 }, n0 = o => Math.min.apply(null, o.nums);
    const pick = L => {
      if (L.length < 2) return null;
      const a = L.reduce((m, o) => n0(o) < n0(m) ? o : m), dist = o => Math.hypot(o.x - a.x, o.y - a.y);
      const far = Math.max.apply(null, L.filter(o => o !== a).map(dist));
      const b = L.filter(o => o !== a && dist(o) >= Math.min(far, Math.max(10, far * .7))).reduce((m, o) => !m || n0(o) < n0(m) ? o : m, null);
      return { a, b, na: n0(a), nb: n0(b), d: dist(b) };
    };
    const all = (obs || []).filter(o => o.nums && o.nums.length && rank[o.type]);
    let p = pick(all.filter(o => rank[o.type] === 2));
    if (!p || p.d < 10) { const q = pick(all); if (q && (!p || q.d > p.d)) p = q; }
    return p && p.d >= 3 ? p : null;
  }
};

export function arSupported() {
  try { return navigator.xr && navigator.xr.isSessionSupported ? navigator.xr.isSessionSupported('immersive-ar').catch(() => false) : Promise.resolve(false); }
  catch (e) { return Promise.resolve(false); }
}

export function startAR(overlay, spec, ui = {}) {
  /* hlášku po chybě (třeba „zem se nenašla“) nechá chvíli viset, jinak by ji hned přepsala nápověda ze smyčky;
     poslední trvalou hlášku si pamatuje, po návratu ztracené polohy se vrátí */
  let hold = 0, last = { s: 'scan', info: null };
  /* re = vrácená hláška (po ztrátě polohy nebo po dočasné hlášce), aplikace ji nepočítá jako nové položení */
  const say = (s, info, ms, re) => { hold = ms ? performance.now() + ms : 0; if (!ms && s !== 'lost') last = { s, info }; try { ui.onState && ui.onState(s, info, !!re); } catch (e) { } };
  return navigator.xr.requestSession('immersive-ar', {
    requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay', 'anchors'], domOverlay: { root: overlay }
  }).then(session => {
    const canvas = document.createElement('canvas');
    const R = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    R.setPixelRatio(1); R.xr.enabled = true; R.shadowMap.enabled = true; R.shadowMap.type = THREE.PCFSoftShadowMap;
    R.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera();
    scene.add(new THREE.HemisphereLight('#ffffff', '#6f7f5a', 1.6));
    const sun = new THREE.DirectionalLight('#fff8ec', 1.9); sun.position.set(6, 14, 4); sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024); const sc = sun.shadow.camera; sc.left = -30; sc.right = 30; sc.top = 30; sc.bottom = -30; sc.far = 80;
    scene.add(sun); scene.add(sun.target);

    /* parkur: root = umístění na zemi (start v počátku), inner = souřadnice plánu posunuté tak, aby start byl v nule */
    const root = new THREE.Group(), inner = new THREE.Group(); root.add(inner); root.visible = false; scene.add(root);
    const Q = TIERS.low, C = buildCourse(inner, spec, Q, { ar: true });
    inner.position.set(-C.start.x, 0, -C.start.z);
    /* stín překážek na skutečné zemi */
    const catcher = new THREE.Mesh(new THREE.PlaneGeometry(spec.W + 20, spec.H + 20).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: .28 }));
    catcher.position.set(spec.W / 2, .001, spec.H / 2); catcher.receiveShadow = true; inner.add(catcher);
    inner.traverse(o => { if (o.isMesh && o !== catcher) o.castShadow = true; });
    /* ve skutečné velikosti bez trávy (zakrývala skutečnou zem), se sloupky v rozích a na startu; model na stole naopak */
    const sizeLook = () => { C.turf.visible = st.scale !== 1; if (C.posts) C.posts.visible = st.scale === 1; };

    /* zaměřovač na zemi */
    const reticle = new THREE.Mesh(new THREE.RingGeometry(.12, .16, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#c6f432' }));
    reticle.matrixAutoUpdate = false; reticle.visible = false; scene.add(reticle);
    /* první bod při položení podle rohů nebo překážek: kroužek a tyčka, aby byl vidět i z druhého konce kolbiště */
    const marker = new THREE.Group(), mm = new THREE.MeshBasicMaterial({ color: '#ff8a3d' });
    marker.add(new THREE.Mesh(new THREE.RingGeometry(.14, .22, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffffff' })));
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, 1.2, 8), mm); pole.position.y = .6; marker.add(pole);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 8), mm); knob.position.y = 1.2; marker.add(knob);
    marker.visible = false; scene.add(marker);

    /* mode: 'start' = klepnutí položí start (model středem), 'corners' = dva rohy kolbiště, 'pair' = dvě překážky.
       Položení = pivot (bod na zemi) + local (který bod plánu na něm leží, kolem startu) + yaw; otáčí se kolem pivotu.
       Kotva: anc drží pivot; D = posun a pootočení kotvy od položení (zpřesněná mapa), parkur = D · položení. */
    const st = { placed: false, scale: 1, yaw: 0, d: 0, on: false, last: 0, ended: false, hit: false, mode: 'start', A: null,
      pivot: new THREE.Vector3(), local: new THREE.Vector3(), gen: 0, anc: null, ancA: null, want: null, wantA: null, lost: false, lostT: 0, seen: false };
    const pair = arMath.pickPair(spec.obs), anc0 = new THREE.Matrix4(), D = new THREE.Matrix4(), AM = new THREE.Matrix4(), TM = new THREE.Matrix4(), base = new THREE.Matrix4();
    let hitSrc = null, refSpace = null;
    session.requestReferenceSpace('viewer').then(vs => session.requestHitTestSource({ space: vs })).then(h => { hitSrc = h; }).catch(() => { });
    /* 'local' má každé AR zařízení; výška země se bere z nalezené plochy */
    R.xr.setReferenceSpaceType('local');
    const ready = R.xr.setSession(session).then(() => { refSpace = R.xr.getReferenceSpace(); });

    const pos = new THREE.Vector3(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), fw = new THREE.Vector3(), cp = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), yq = new THREE.Quaternion(), yAx = new THREE.Vector3(0, 1, 0);
    /* směr pohledu po zemi, v souřadnicích položení (bez posunu kotvy) */
    function camFw() {
      R.xr.getCamera().getWorldDirection(fw);
      if (st.anc) { TM.extractRotation(D).transpose(); fw.transformDirection(TM); }
      fw.y = 0; if (fw.lengthSq() < 1e-6) fw.set(0, 0, -1); return fw.normalize();
    }
    function show() { TM.multiplyMatrices(D, base).decompose(root.position, root.quaternion, root.scale); root.visible = true; }
    function apply() {
      const p = arMath.rootAt(st.pivot, st.local, st.yaw, st.scale);
      base.compose(cp.set(p.x, p.y, p.z), yq.setFromAxisAngle(yAx, st.yaw), sv.copy(one).multiplyScalar(st.scale)); show();
    }
    /* nové položení: stará kotva pryč, nová v pivotu (vytvoří se v nejbližším snímku) */
    function dropAnchors() { st.gen++; [st.anc, st.ancA].forEach(a => { try { a && a.delete(); } catch (e) { } }); st.anc = st.ancA = null; st.want = st.wantA = null; D.identity(); }
    function placed() { dropAnchors(); apply(); st.placed = true; st.want = st.pivot.clone(); }
    const idle = () => st.mode === 'corners' ? (st.A ? 'cornerB' : 'cornerA') : st.mode === 'pair' ? (st.A ? 'pairB' : 'pairA') : !st.hit ? 'scan' : st.scale !== 1 ? 'readyModel' : spec.az != null && ui.heading && ui.heading() != null ? 'readyAz' : 'ready';
    const idleInfo = () => st.mode === 'pair' && pair ? { a: pair.na, b: pair.nb } : null;
    function place() {
      if (!st.hit) { say('noground', null, 2500); return false; }
      reticle.matrix.decompose(pos, q, sv); dropAnchors(); const f = camFw();
      st.pivot.copy(pos);
      let s = 'placed';
      if (st.scale !== 1) { st.yaw = arMath.modelYaw(f); st.local.set(spec.W / 2 - C.start.x, 0, spec.H / 2 - C.start.z); s = 'placedModel'; }
      else {
        /* kolbiště se známým natočením (spec.az) a kompas kamery: osa x plánu míří na az; jinak překážka 1 od telefonu */
        const h = spec.az != null && ui.heading ? ui.heading() : null, o1 = (spec.obs || []).find(o => o.nums && o.nums.indexOf(1) >= 0);
        const v = o1 && Math.hypot(o1.x - C.start.x, o1.y - C.start.z) >= 1 ? { x: o1.x - C.start.x, z: o1.y - C.start.z } : { x: spec.W / 2 - C.start.x, z: spec.H / 2 - C.start.z };
        st.yaw = h != null ? arMath.azYaw(f, spec.az, h) : arMath.awayYaw(f, v);
        st.local.set(0, 0, 0); if (h != null) s = 'placedAz';
      }
      placed(); say(s); return true;
    }
    /* první bod (roh A nebo překážka A) si podrží vlastní kotva, než se dojde k druhému */
    function first() { st.A = pos.clone(); marker.position.copy(pos); marker.visible = true; st.wantA = pos.clone(); }
    /* první klepnutí = roh vlevo nahoře, druhé = roh vpravo nahoře (konec dlouhé strany) */
    function corner() {
      if (!st.hit) { say('noground', null, 2500); return false; }
      reticle.matrix.decompose(pos, q, sv);
      if (!st.A) { first(); say('cornerB'); return true; }
      const d = Math.hypot(pos.x - st.A.x, pos.z - st.A.z);
      if (d < 2) { say('cornerNear', null, 3500); return false; }
      st.yaw = arMath.cornerYaw(st.A, pos);
      st.pivot.set(st.A.x, (st.A.y + pos.y) / 2, st.A.z); st.local.set(-C.start.x, 0, -C.start.z);
      st.A = null; marker.visible = false; placed();
      const w = spec.W, info = { d: Math.round(d * 10) / 10, w };
      say(Math.abs(d - w) > w * .15 ? 'placedCornersOff' : 'placedCorners', info); return true;
    }
    /* podle dvou překážek: klepnutí na zem pod středem překážky na (obvykle 1), pak pod středem překážky nb */
    function pairTap() {
      if (!st.hit) { say('noground', null, 2500); return false; }
      reticle.matrix.decompose(pos, q, sv);
      const ab = { a: pair.na, b: pair.nb };
      if (!st.A) { first(); say('pairB', ab); return true; }
      const d = Math.hypot(pos.x - st.A.x, pos.z - st.A.z);
      if (d < 2) { say('pairNear', ab, 3500); return false; }
      const va = { x: pair.a.x, z: pair.a.y }, vb = { x: pair.b.x, z: pair.b.y };
      st.yaw = arMath.pairYaw(st.A, pos, va, vb);
      st.pivot.set(st.A.x, (st.A.y + pos.y) / 2, st.A.z); st.local.set(va.x - C.start.x, 0, va.z - C.start.z);
      st.A = null; marker.visible = false; placed();
      const w = Math.round(pair.d * 10) / 10, info = { a: pair.na, b: pair.nb, d: Math.round(d * 10) / 10, w };
      say(Math.abs(d - pair.d) > pair.d * .15 ? 'placedPairOff' : 'placedPair', info); return true;
    }
    /* podle GPS: bod plánu u = poloha telefonu (z GPS) leží pod telefonem, osa x plánu na kurzu az podle kompasu */
    function gps(u) {
      if (st.scale !== 1 || spec.az == null) return false;
      const h = ui.heading ? ui.heading() : null;
      if (h == null) { say('gpsCompass', null, 3500); return false; }
      if (!u) { say('gpsWait', null, 3500); return false; }
      if (!st.hit) { say('noground', null, 2500); return false; }
      reticle.matrix.decompose(pos, q, sv); dropAnchors();
      R.xr.getCamera().getWorldPosition(cp);
      st.mode = 'start'; st.A = null; marker.visible = false;
      st.pivot.set(cp.x, pos.y, cp.z); st.local.set(u.x - C.start.x, 0, u.y - C.start.z); st.yaw = arMath.azYaw(camFw(), spec.az, h);
      placed(); say('placedGps', { acc: Math.max(1, Math.round(u.acc || 0)) }); return true;
    }
    function reset(mode) { st.placed = false; root.visible = false; dropAnchors(); st.A = null; marker.visible = false; st.mode = mode; say(idle(), idleInfo()); }
    function replace() { reset('start'); }
    function corners() { if (st.scale !== 1) return false; reset('corners'); return true; }
    function pairs() { if (st.scale !== 1 || !pair) return false; reset('pair'); return true; }
    function rotate(deg) { if (!st.placed) return; st.yaw += deg * Math.PI / 180; apply(); }
    function nudge(right, away) {
      if (!st.placed) return; const m = arMath.nudge(camFw(), right, away, .25 * st.scale);
      st.pivot.x += m.x; st.pivot.z += m.z; apply();
    }
    /* model se pokládá středem a parkur 1 : 1 startem, po přepnutí se tedy pokládá znovu */
    function setScale(model) { const k = model ? 1 / 20 : 1; if (k === st.scale) return; st.scale = k; sizeLook(); reset('start'); }
    function play(on) { st.on = on == null ? !st.on : !!on; if (st.on && st.d >= C.length) st.d = 0; st.last = 0; return st.on; }
    sizeLook();
    session.addEventListener('select', () => { if (!st.placed && !st.lost) (st.mode === 'corners' ? corner : st.mode === 'pair' ? pairTap : place)(); });

    function anchors(frame) {
      if (!frame.createAnchor || !refSpace) return;
      /* nová kotva v bodě p (bez natočení); po odpovědi platí, jen když mezitím nebylo nové položení */
      /* Chrome kotvu odmítne, když v tu chvíli nezná polohu telefonu (odpověď do 3 s): zkusí se znovu, nejvýš pětkrát */
      const make = (p, set, again) => { const g = st.gen, retry = () => { if (g === st.gen && !st.ended && (p.n = (p.n || 0) + 1) < 5) again(p); }; try {
        frame.createAnchor(new XRRigidTransform({ x: p.x, y: p.y, z: p.z }), refSpace).then(a => { if (st.ended) return; if (g !== st.gen) { try { a.delete(); } catch (e) { } return; } set(a); }, retry);
      } catch (e) { retry(); } };
      if (st.want) { const p = st.want; st.want = null; make(p, a => { st.anc = a; anc0.makeTranslation(-p.x, -p.y, -p.z); }, q => { st.want = q; }); }
      if (st.wantA) { const p = st.wantA; st.wantA = null; make(p, a => { st.ancA = a; }, q => { st.wantA = q; }); }
      const tr = frame.trackedAnchors;
      if (!tr) return;
      /* posun kotvy od chvíle položení (pozice v době položení → teď); bez sledování zůstává poslední */
      if (st.anc && st.placed && tr.has(st.anc)) { const p = frame.getPose(st.anc.anchorSpace, refSpace); if (p) { AM.fromArray(p.transform.matrix); D.multiplyMatrices(AM, anc0); show(); } }
      /* první roh nebo překážka zůstává na zemi, i když se mapa mezitím zpřesní */
      if (st.ancA && st.A && tr.has(st.ancA)) { const p = frame.getPose(st.ancA.anchorSpace, refSpace); if (p) { const t = p.transform.position; st.A.set(t.x, t.y, t.z); marker.position.copy(st.A); } }
    }

    R.setAnimationLoop((t, frame) => {
      if (!frame) return;
      /* ztracená poloha (zakrytá kamera, rychlý pohyb, tma): telefon neví, kde je; po vteřině hláška, po návratu ta předchozí */
      const vp = refSpace ? frame.getViewerPose(refSpace) : null, bad = !vp || vp.emulatedPosition;
      if (vp && !vp.emulatedPosition) st.seen = true;
      if (bad && st.seen) { if (!st.lostT) st.lostT = t; if (!st.lost && t - st.lostT > 1000) { st.lost = true; say('lost'); } }
      else if (!bad) { st.lostT = 0; if (st.lost) { st.lost = false; say(last.s, last.info, 0, true); } }
      if (hitSrc && refSpace) {
        const hits = st.lost ? [] : frame.getHitTestResults(hitSrc), p = hits.length ? hits[0].getPose(refSpace) : null;
        if (p) reticle.matrix.fromArray(p.transform.matrix);
        st.hit = !!p;
      }
      anchors(frame);
      reticle.visible = st.hit && !st.placed;
      /* po položení se po dočasné hlášce (třeba „čekám na GPS“) vrátí poslední trvalá */
      if (!st.lost && performance.now() > hold) { if (!st.placed) say(idle(), idleInfo()); else if (hold) say(last.s, last.info, 0, true); }
      if (st.on) { if (st.last) st.d += Math.min(.1, (t - st.last) / 1000) * 4.5; st.last = t; if (st.d >= C.length) { st.d = C.length; st.on = false; if (st.placed) say('done'); } }
      C.pose(st.d);
      R.render(scene, camera);
    });

    function cleanup() {
      if (st.ended) return; st.ended = true;
      R.setAnimationLoop(null);
      try { hitSrc && hitSrc.cancel(); } catch (e) { }
      /* kotvy skončí se sezením; anchor.delete() po konci sezení Chrome na Androidu shodí (spojení s ARCore už není) */
      st.anc = st.ancA = null;
      const done = new Set();
      scene.traverse(o => {
        if (o.geometry && !done.has(o.geometry)) { done.add(o.geometry); o.geometry.dispose(); }
        (o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []).forEach(m => { if (!done.has(m)) { done.add(m); m.dispose(); } });
      });
      R.dispose();
      try { ui.onEnd && ui.onEnd(); } catch (e) { }
    }
    session.addEventListener('end', cleanup);
    say('scan');
    const api = {
      place() { return st.placed || st.lost ? false : st.mode === 'corners' ? corner() : st.mode === 'pair' ? pairTap() : place(); },
      replace, corners, pair: pairs, gps, rotate, nudge, setScale, play,
      /* hláška od aplikace na pár vteřin (běžná hláška aplikace v AR vidět není), pak se vrátí ta předchozí */
      hint(s, info, ms) { say(s, info, ms || 4000); },
      foot(on) { C.foot(!!on); return !!on; },
      end() { session.end().catch(cleanup); }, get placed() { return st.placed; }, get mode() { return st.mode; }, get length() { return C.length; },
      get pairNums() { return pair ? { a: pair.na, b: pair.nb } : null; }
    };
    return ready.then(() => api);
  });
}
