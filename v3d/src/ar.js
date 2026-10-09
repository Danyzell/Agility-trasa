/* Parkur v rozšířené realitě (WebXR, Chrome na Androidu s ARCore): kamera najde zem a klepnutím se parkur položí.
   Ve skutečné velikosti klepnutí položí start a plocha se natočí od telefonu (nebo podle kompasu, když je kolbiště
   zaměřené); přesněji se parkur položí podle dvou rohů kolbiště. Model 1 : 20 na stůl se položí středem.
   arSupported() → Promise<bool>
   startAR(overlay, spec, ui) → Promise<api>; overlay = prvek s ovládáním (dom-overlay), ui = {onState(s, info), onEnd(), heading()}
   spec.az (nepovinné): magnetický kurz dlouhé strany kolbiště (plán doprava); ui.heading() = magnetický kurz, kam míří kamera
   api: {place(), replace(), corners(), rotate(deg), nudge(right, away), setScale(model), play(on), end(), placed, mode, length} */
import * as THREE from 'three';
import { buildCourse } from './course.js';
import { TIERS } from './world.js';

/* Výpočty položení bez WebXR (kvůli testům). Ve scéně je osa x plánu doprava a osa y plánu jde po ose z;
   úhel ve scéně atan2(-z, x) roste proti směru hodin, kurz po směru hodin. Otočení kolem svislé osy jako v three.js. */
export const arMath = {
  rot(x, z, yaw) { const c = Math.cos(yaw), s = Math.sin(yaw); return { x: x * c + z * s, z: -x * s + z * c }; },
  /* kam dát počátek parkuru (start), aby bod local (souřadnice kolem startu, zmenšené k) ležel na pivot */
  rootAt(pivot, local, yaw, k) { const r = arMath.rot(local.x * k, local.z * k, yaw); return { x: pivot.x - r.x, y: pivot.y, z: pivot.z - r.z }; },
  /* osa x plánu míří z rohu A (vlevo nahoře) do rohu B (vpravo nahoře) */
  cornerYaw(a, b) { return Math.atan2(-(b.z - a.z), b.x - a.x); },
  /* model na stole jako mapa: osa x plánu doprava, osa y plánu k telefonu */
  modelYaw(fw) { return Math.atan2(-fw.x, -fw.z); },
  /* kolbiště se známým kurzem dlouhé strany az a kurz kamery h (oba magnetické, ve stupních) */
  azYaw(fw, az, h) { return Math.atan2(-fw.z, fw.x) - (az - h) * Math.PI / 180; },
  /* bez kurzu: plocha od startu dál od telefonu (směr start → střed plochy v = směr pohledu po zemi) */
  awayYaw(fw, v) { return Math.atan2(-fw.z, fw.x) - (Math.hypot(v.x, v.z) > .5 ? Math.atan2(-v.z, v.x) : 0); },
  /* posun vůči telefonu po zemi: right > 0 doprava, away > 0 dál od telefonu */
  nudge(fw, right, away, step) { return { x: step * (right * -fw.z + away * fw.x), z: step * (right * fw.x + away * fw.z) }; }
};

export function arSupported() {
  try { return navigator.xr && navigator.xr.isSessionSupported ? navigator.xr.isSessionSupported('immersive-ar').catch(() => false) : Promise.resolve(false); }
  catch (e) { return Promise.resolve(false); }
}

export function startAR(overlay, spec, ui = {}) {
  /* hlášku po chybě (třeba „zem se nenašla“) nechá chvíli viset, jinak by ji hned přepsala nápověda ze smyčky */
  let hold = 0;
  const say = (s, info, ms) => { hold = ms ? performance.now() + ms : 0; try { ui.onState && ui.onState(s, info); } catch (e) { } };
  return navigator.xr.requestSession('immersive-ar', {
    requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'], domOverlay: { root: overlay }
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
    const Q = TIERS.low, C = buildCourse(inner, spec, Q);
    inner.position.set(-C.start.x, 0, -C.start.z);
    /* stín překážek na skutečné zemi */
    const catcher = new THREE.Mesh(new THREE.PlaneGeometry(spec.W + 20, spec.H + 20).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: .28 }));
    catcher.position.set(spec.W / 2, .001, spec.H / 2); catcher.receiveShadow = true; inner.add(catcher);
    inner.traverse(o => { if (o.isMesh && o !== catcher) o.castShadow = true; });

    /* zaměřovač na zemi */
    const reticle = new THREE.Mesh(new THREE.RingGeometry(.12, .16, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#c6f432' }));
    reticle.matrixAutoUpdate = false; reticle.visible = false; scene.add(reticle);
    /* první roh při položení podle rohů: kroužek a tyčka, aby byl vidět i z druhého konce kolbiště */
    const marker = new THREE.Group(), mm = new THREE.MeshBasicMaterial({ color: '#ff8a3d' });
    marker.add(new THREE.Mesh(new THREE.RingGeometry(.14, .22, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffffff' })));
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, 1.2, 8), mm); pole.position.y = .6; marker.add(pole);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 8), mm); knob.position.y = 1.2; marker.add(knob);
    marker.visible = false; scene.add(marker);

    /* mode: 'start' = klepnutí položí start (model středem), 'corners' = dva rohy kolbiště.
       Položení = pivot (bod na zemi) + local (který bod plánu na něm leží, kolem startu) + yaw; otáčí se kolem pivotu. */
    const st = { placed: false, scale: 1, yaw: 0, d: 0, on: false, last: 0, ended: false, hit: false, mode: 'start', A: null,
      pivot: new THREE.Vector3(), local: new THREE.Vector3() };
    let hitSrc = null, refSpace = null;
    session.requestReferenceSpace('viewer').then(vs => session.requestHitTestSource({ space: vs })).then(h => { hitSrc = h; }).catch(() => { });
    /* 'local' má každé AR zařízení; výška země se bere z nalezené plochy */
    R.xr.setReferenceSpaceType('local');
    const ready = R.xr.setSession(session).then(() => { refSpace = R.xr.getReferenceSpace(); });

    const pos = new THREE.Vector3(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), fw = new THREE.Vector3();
    /* směr pohledu po zemi */
    function camFw() { R.xr.getCamera().getWorldDirection(fw); fw.y = 0; if (fw.lengthSq() < 1e-6) fw.set(0, 0, -1); return fw.normalize(); }
    function apply() {
      const p = arMath.rootAt(st.pivot, st.local, st.yaw, st.scale);
      root.position.set(p.x, p.y, p.z); root.rotation.set(0, st.yaw, 0); root.scale.setScalar(st.scale); root.visible = true;
    }
    const idle = () => st.mode === 'corners' ? (st.A ? 'cornerB' : 'cornerA') : !st.hit ? 'scan' : st.scale === 1 ? 'ready' : 'readyModel';
    function place() {
      if (!st.hit) { say('noground', null, 2500); return false; }
      reticle.matrix.decompose(pos, q, sv); const f = camFw();
      st.pivot.copy(pos);
      let s = 'placed';
      if (st.scale !== 1) { st.yaw = arMath.modelYaw(f); st.local.set(spec.W / 2 - C.start.x, 0, spec.H / 2 - C.start.z); s = 'placedModel'; }
      else {
        /* kolbiště se známým natočením (spec.az) a kompas kamery: osa x plánu míří na az */
        const h = spec.az != null && ui.heading ? ui.heading() : null;
        st.yaw = h != null ? arMath.azYaw(f, spec.az, h) : arMath.awayYaw(f, { x: spec.W / 2 - C.start.x, z: spec.H / 2 - C.start.z });
        st.local.set(0, 0, 0); if (h != null) s = 'placedAz';
      }
      apply(); st.placed = true; say(s); return true;
    }
    /* první klepnutí = roh vlevo nahoře, druhé = roh vpravo nahoře (konec dlouhé strany) */
    function corner() {
      if (!st.hit) { say('noground', null, 2500); return false; }
      reticle.matrix.decompose(pos, q, sv);
      if (!st.A) { st.A = pos.clone(); marker.position.copy(pos); marker.visible = true; say('cornerB'); return true; }
      const d = Math.hypot(pos.x - st.A.x, pos.z - st.A.z);
      if (d < 2) { say('cornerNear', null, 3500); return false; }
      st.yaw = arMath.cornerYaw(st.A, pos);
      st.pivot.set(st.A.x, (st.A.y + pos.y) / 2, st.A.z); st.local.set(-C.start.x, 0, -C.start.z);
      st.A = null; marker.visible = false; apply(); st.placed = true;
      const w = spec.W, info = { d: Math.round(d * 10) / 10, w };
      say(Math.abs(d - w) > w * .15 ? 'placedCornersOff' : 'placedCorners', info); return true;
    }
    function reset(mode) { st.placed = false; root.visible = false; st.A = null; marker.visible = false; st.mode = mode; say(idle()); }
    function replace() { reset('start'); }
    function corners() { if (st.scale !== 1) return false; reset('corners'); return true; }
    function rotate(deg) { if (!st.placed) return; st.yaw += deg * Math.PI / 180; apply(); }
    function nudge(right, away) {
      if (!st.placed) return; const m = arMath.nudge(camFw(), right, away, .25 * st.scale);
      st.pivot.x += m.x; st.pivot.z += m.z; apply();
    }
    /* model se pokládá středem a parkur 1 : 1 startem, po přepnutí se tedy pokládá znovu */
    function setScale(model) { const k = model ? 1 / 20 : 1; if (k === st.scale) return; st.scale = k; reset('start'); }
    function play(on) { st.on = on == null ? !st.on : !!on; if (st.on && st.d >= C.length) st.d = 0; st.last = 0; return st.on; }
    session.addEventListener('select', () => { if (!st.placed) (st.mode === 'corners' ? corner : place)(); });

    R.setAnimationLoop((t, frame) => {
      if (!frame) return;
      if (hitSrc && refSpace) {
        const hits = frame.getHitTestResults(hitSrc), p = hits.length ? hits[0].getPose(refSpace) : null;
        if (p) reticle.matrix.fromArray(p.transform.matrix);
        st.hit = !!p;
      }
      reticle.visible = st.hit && !st.placed;
      if (!st.placed && performance.now() > hold) say(idle());
      if (st.on) { if (st.last) st.d += Math.min(.1, (t - st.last) / 1000) * 4.5; st.last = t; if (st.d >= C.length) { st.d = C.length; st.on = false; if (st.placed) say('done'); } }
      C.pose(st.d);
      R.render(scene, camera);
    });

    function cleanup() {
      if (st.ended) return; st.ended = true;
      R.setAnimationLoop(null);
      try { hitSrc && hitSrc.cancel(); } catch (e) { }
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
      place() { return st.placed ? false : st.mode === 'corners' ? corner() : place(); }, replace, corners, rotate, nudge, setScale, play,
      end() { session.end().catch(cleanup); }, get placed() { return st.placed; }, get mode() { return st.mode; }, get length() { return C.length; }
    };
    return ready.then(() => api);
  });
}
