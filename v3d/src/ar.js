/* Parkur v rozšířené realitě (WebXR, Chrome na Androidu s ARCore): kamera najde zem, klepnutím se parkur
   položí start na zaměřené místo a plocha se natočí směrem od telefonu. Ve skutečné velikosti, nebo jako model 1 : 20 na stůl.
   arSupported() → Promise<bool>
   startAR(overlay, spec, ui) → Promise<api>; overlay = prvek s ovládáním (dom-overlay), ui = {onState(s), onEnd()}
   api: {place(), rotate(deg), setScale(model), play(on), end()} */
import * as THREE from 'three';
import { buildCourse } from './course.js';
import { TIERS } from './world.js';

export function arSupported() {
  try { return navigator.xr && navigator.xr.isSessionSupported ? navigator.xr.isSessionSupported('immersive-ar').catch(() => false) : Promise.resolve(false); }
  catch (e) { return Promise.resolve(false); }
}

export function startAR(overlay, spec, ui = {}) {
  const say = s => { try { ui.onState && ui.onState(s); } catch (e) { } };
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

    const st = { placed: false, scale: 1, yaw: 0, d: 0, on: false, last: 0, ended: false };
    let hitSrc = null, refSpace = null;
    session.requestReferenceSpace('viewer').then(vs => session.requestHitTestSource({ space: vs })).then(h => { hitSrc = h; }).catch(() => { });
    /* 'local' má každé AR zařízení; výška země se bere z nalezené plochy */
    R.xr.setReferenceSpaceType('local');
    const ready = R.xr.setSession(session).then(() => { refSpace = R.xr.getReferenceSpace(); });

    const pos = new THREE.Vector3(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), fw = new THREE.Vector3();
    function place() {
      if (!reticle.visible) { say('noground'); return false; }
      reticle.matrix.decompose(pos, q, sv);
      /* plocha od startu dál od telefonu: směr start → střed plochy = směr pohledu po zemi */
      const xc = R.xr.getCamera(); xc.getWorldDirection(fw); fw.y = 0; if (fw.lengthSq() < 1e-6) fw.set(0, 0, -1); fw.normalize();
      const vx = spec.W / 2 - C.start.x, vz = spec.H / 2 - C.start.z;
      st.yaw = Math.atan2(-fw.z, fw.x) - (Math.hypot(vx, vz) > .5 ? Math.atan2(-vz, vx) : 0);
      root.position.copy(pos); root.rotation.set(0, st.yaw, 0); root.scale.setScalar(st.scale); root.visible = true;
      st.placed = true; say('placed'); return true;
    }
    function rotate(deg) { if (!st.placed) return; st.yaw += deg * Math.PI / 180; root.rotation.y = st.yaw; }
    function setScale(model) { st.scale = model ? 1 / 20 : 1; root.scale.setScalar(st.scale); say(st.placed ? 'placed' : 'scan'); }
    function play(on) { st.on = on == null ? !st.on : !!on; if (st.on && st.d >= C.length) st.d = 0; st.last = 0; return st.on; }
    session.addEventListener('select', () => { if (!st.placed) place(); });

    R.setAnimationLoop((t, frame) => {
      if (!frame) return;
      if (hitSrc && refSpace) {
        const hits = frame.getHitTestResults(hitSrc);
        if (hits.length) { const p = hits[0].getPose(refSpace); if (p) { reticle.matrix.fromArray(p.transform.matrix); reticle.visible = !st.placed; if (!st.placed) say('ready'); } }
        else { reticle.visible = false; if (!st.placed) say('scan'); }
      }
      if (st.on) { if (st.last) st.d += Math.min(.1, (t - st.last) / 1000) * 4.5; st.last = t; if (st.d >= C.length) { st.d = C.length; st.on = false; say('done'); } }
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
    const api = { place, rotate, setScale, play, end() { session.end().catch(cleanup); }, get placed() { return st.placed; }, get length() { return C.length; } };
    return ready.then(() => api);
  });
}
