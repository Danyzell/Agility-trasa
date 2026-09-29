/* Prostředí: renderer, obloha, světla, tráva, ohrada, stromy, kopce; stupně kvality. */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/* stupně kvality: tráva (počet stébel), vrstvy srsti, stínová mapa, max. hustota pixelů */
export const TIERS = {
  low: { grass: 0, shells: 3, shortShells: 2, shadow: 1024, dpr: 1, soft: false, trees: 22 },
  mid: { grass: 25000, shells: 6, shortShells: 3, shadow: 2048, dpr: 1.5, soft: true, trees: 40 },
  high: { grass: 70000, shells: 10, shortShells: 4, shadow: 2048, dpr: 2, soft: true, trees: 60 }
};
/* odhad stupně podle zařízení (bez měření) */
export function autoTier() {
  const dpr = window.devicePixelRatio || 1, cores = navigator.hardwareConcurrency || 4, mem = navigator.deviceMemory || 4;
  const px = dpr * dpr * (screen.width || 400) * (screen.height || 800);
  if (cores <= 4 || mem <= 2) return 'low';
  if (px > 3.2e6 && cores <= 6) return 'low';
  if (cores >= 8 && mem >= 8 && dpr <= 2 && !/Android|iPhone|iPad/i.test(navigator.userAgent)) return 'high';
  return 'mid';
}

let seed = 7;
export const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
export const M = (c, r = .6, m = 0) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
export const shadowAll = (o, cast = true) => o.traverse(m => { if (m.isMesh) { m.castShadow = cast; m.receiveShadow = true; } });
/* Sloučí všechny sítě skupiny do jedné sítě na materiál (méně volání kreslení); vrací novou skupinu. */
export function mergeByMaterial(grp) {
  grp.updateMatrixWorld(true);
  const by = new Map();
  grp.traverse(o => {
    if (!o.isMesh || o.isInstancedMesh) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    Object.keys(g.attributes).forEach(k => { if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k); });
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(o.matrixWorld);
    if (!by.has(o.material)) by.set(o.material, { gs: [], cast: false, recv: false });
    const e = by.get(o.material); e.gs.push(g); e.cast = e.cast || o.castShadow; e.recv = e.recv || o.receiveShadow;
  });
  const out = new THREE.Group();
  by.forEach((e, m) => { const me = new THREE.Mesh(mergeGeometries(e.gs), m); me.castShadow = e.cast; me.receiveShadow = e.recv; out.add(me); e.gs.forEach(g => g.dispose()); });
  return out;
}
export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function grassTex(size) {
  const t = canvasTex(size, size, (x, W) => {
    x.fillStyle = '#4b7a33'; x.fillRect(0, 0, W, W);
    const n = size * size / 11;
    for (let i = 0; i < n; i++) { const g = 95 + rnd() * 70 | 0; x.fillStyle = `rgba(${45 + rnd() * 40 | 0},${g + 25},${28 + rnd() * 25 | 0},${.2 + rnd() * .35})`; x.fillRect(rnd() * W, rnd() * W, 1.3, 3 + rnd() * 5); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(55, 55); t.anisotropy = 8; return t;
}
/* tráva: stébla jako instancované trojúhelníky; w×d metrů kolem středu (cx, cz) */
function makeGrass(cx, cz, w, d, n) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-.0035, 0, 0, .0035, 0, 0, .001, 1, 0, -.001, 1, 0, 0, 1.25, 0]), 3));
  g.setIndex([0, 1, 2, 0, 2, 3, 3, 2, 4]); g.computeVertexNormals();
  const m = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: .95, side: THREE.DoubleSide });
  m.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vH;').replace('#include <begin_vertex>', '#include <begin_vertex>\n float hh = position.y; transformed.x += hh * hh * .006 * sin(instanceMatrix[3].x * 1.7 + instanceMatrix[3].z * 2.3); vH = hh;')
      .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0., 1., 0.);');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vH;')
      .replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n normal = normalize(vNormal);').replace('#include <color_fragment>', '#include <color_fragment>\n diffuseColor.rgb *= mix(.7, 1.05, clamp(vH, 0., 1.));');
  };
  const im = new THREE.InstancedMesh(g, m, n), o = new THREE.Object3D(), c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    /* hustší blíž ke kameře (kladné z) */
    const u = rnd(), zz = cz - d / 2 + d * Math.sqrt(u);
    o.position.set(cx + (rnd() - .5) * w, 0, zz); o.rotation.y = rnd() * Math.PI;
    const s = .045 + rnd() * .06; o.scale.set(1 + rnd(), s, 1); o.updateMatrix(); im.setMatrixAt(i, o.matrix);
    c.setHSL(.25 + rnd() * .05, .45 + rnd() * .15, .2 + rnd() * .1); im.setColorAt(i, c);
  }
  im.receiveShadow = true; im.frustumCulled = false; return im;
}

/* strom: kmen a shluk listnatých koulí s hladce zvlněným povrchem */
function makeTree(h, leafM, trunkM) {
  const tree = new THREE.Group();
  const tr = new THREE.Mesh(new THREE.CylinderGeometry(.18, .3, h * .55, 7), trunkM); tr.position.y = h * .27; tree.add(tr);
  for (let k = 0; k < 6; k++) {
    const geo = new THREE.IcosahedronGeometry(h * (.18 + rnd() * .12), 2), pa = geo.attributes.position, ph = rnd() * 10;
    for (let v = 0; v < pa.count; v++) {
      const X = pa.getX(v), Y = pa.getY(v), Z = pa.getZ(v), r = Math.hypot(X, Y, Z) || 1;
      const f = 1 + .1 * Math.sin(X / r * 5 + ph) * Math.sin(Y / r * 4 + ph * 1.3) + .06 * Math.sin(Z / r * 7 + ph);
      pa.setXYZ(v, X * f, Y * f, Z * f);
    }
    geo.computeVertexNormals();
    const b = new THREE.Mesh(geo, leafM[k % leafM.length]); b.position.set((rnd() - .5) * h * .35, h * (.55 + rnd() * .35), (rnd() - .5) * h * .3); tree.add(b);
  }
  return tree;
}

/* Vytvoří renderer a prostředí. bounds = {x0,x1,z0,z1} oblast děje. */
export function makeWorld(canvas, tierName, bounds) {
  const Q = TIERS[tierName] || TIERS.mid;
  seed = 7;
  const R = new THREE.WebGLRenderer({ canvas, antialias: tierName !== 'low', powerPreference: 'high-performance', preserveDrawingBuffer: false });
  R.setPixelRatio(Math.min(window.devicePixelRatio || 1, Q.dpr));
  R.shadowMap.enabled = true; R.shadowMap.type = THREE.PCFShadowMap;
  R.toneMapping = THREE.ACESFilmicToneMapping; R.toneMappingExposure = 1.1; R.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const cx = (bounds.x0 + bounds.x1) / 2, cz = (bounds.z0 + bounds.z1) / 2;

  /* obloha: teplé světlo pozdního odpoledne */
  const skyM = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color('#3f7fd0') }, mid: { value: new THREE.Color('#a9cdef') }, hor: { value: new THREE.Color('#f3e6cf') } },
    vertexShader: 'varying vec3 p; void main(){ p=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'uniform vec3 top,mid,hor; varying vec3 p; void main(){ float h=max(p.y,0.); vec3 c=mix(hor,mid,smoothstep(0.,.12,h)); c=mix(c,top,smoothstep(.12,.7,h)); float sun=pow(max(dot(normalize(p),normalize(vec3(-.55,.35,-.75))),0.),64.); c+=vec3(1.,.9,.7)*sun*.6; gl_FragColor=vec4(c,1.); }' });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(300, 32, 16), skyM); sky.position.set(cx, 0, cz); scene.add(sky);
  scene.fog = new THREE.Fog('#dfe4dc', 35, 170);
  scene.add(new THREE.HemisphereLight('#d6e9ff', '#4d6b30', 1.0));
  const sun = new THREE.DirectionalLight('#ffe9c9', 3.0); sun.castShadow = true;
  sun.shadow.mapSize.set(Q.shadow, Q.shadow); sun.shadow.bias = -.0003; sun.shadow.normalBias = .015; sun.shadow.radius = 3;
  const hw = (bounds.x1 - bounds.x0) / 2 + 2, hd = (bounds.z1 - bounds.z0) / 2 + 2;
  sun.position.set(cx - 11, 17, cz + 7);   /* slunce zleva a mírně zepředu: boky psa jsou osvětlené */ sun.target.position.set(cx, 0, cz);
  /* stínová kamera pokrývá oblast děje (otočená podle směru slunce – stačí velkorysý čtverec) */
  const ext = Math.max(hw, hd) * 1.15;
  Object.assign(sun.shadow.camera, { left: -ext, right: ext, top: ext * .8, bottom: -ext * .8, near: 1, far: 70 });
  sun.shadow.camera.updateProjectionMatrix();
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight('#bcd4ff', .6); fill.position.set(cx + 10, 5, cz - 10); scene.add(fill);

  /* zem a tráva */
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: grassTex(tierName === 'low' ? 512 : 1024), roughness: 1 }));
  ground.position.set(cx, 0, cz); ground.receiveShadow = true; scene.add(ground);
  let grass = null;
  if (Q.grass) { grass = makeGrass(cx, cz + 1, (bounds.x1 - bounds.x0) + 10, (bounds.z1 - bounds.z0) + 9, Q.grass); scene.add(grass); }

  /* ohrada kruhu s bannery, stromy, kopce */
  const fz = bounds.z0 - 7;
  const wm = M('#f4f4f0', .6), gm = M('#1f6b45', .8), bm = [M('#c6f432', .7), M('#ffffff', .7), M('#1f6b45', .7)];
  const post = new THREE.BoxGeometry(.07, 1, .07);
  const posts = new THREE.InstancedMesh(post, wm, 33), o = new THREE.Object3D();
  for (let i = 0; i < 33; i++) { o.position.set(cx - 40 + i * 2.5, .5, fz); o.updateMatrix(); posts.setMatrixAt(i, o.matrix); }
  scene.add(posts);
  const banner = new THREE.Mesh(new THREE.BoxGeometry(81, .6, .03), gm); banner.position.set(cx, .55, fz); scene.add(banner);
  const bans = new THREE.Group();
  for (let i = 0; i < 12; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(3.2, .6, .035), bm[i % 3]); b.position.set(cx - 30 + i * 5.4, .55, fz + .03); bans.add(b); }
  scene.add(mergeByMaterial(bans));
  const leafM = [M('#2f5327', 1), M('#3a6130', 1), M('#284a22', 1)], trunkM = M('#4d3a2a', 1);
  const protos = [0, 1, 2, 3].map(() => makeTree(9 + rnd() * 3, leafM, trunkM));
  const forest = new THREE.Group();
  for (let i = 0; i < Q.trees; i++) {
    const t = protos[i % 4].clone(), span = 280 / Q.trees;
    t.scale.setScalar(.75 + rnd() * .5); t.position.set(cx - 140 + i * span + (rnd() - .5) * 3, 0, fz - 26 - rnd() * 25); t.rotation.y = rnd() * 6; forest.add(t);
  }  scene.add(mergeByMaterial(forest));   /* stromy: 4 volání kreslení místo stovek */

  const hillG = new THREE.SphereGeometry(60, 20, 10), hillM = M('#6f8f5a', 1);
  for (let i = 0; i < 6; i++) { const hl = new THREE.Mesh(hillG, hillM); hl.scale.set(1.6, .22, 1); hl.position.set(cx - 200 + i * 80, -4, fz - 125 - rnd() * 30); scene.add(hl); }

  return { R, scene, sun, grass, Q, tier: tierName,
    /* snížení kvality za běhu (po měření snímků) */
    setTier(name) {
      const q = TIERS[name]; if (!q) return; this.tier = name; this.Q = q;
      R.setPixelRatio(Math.min(window.devicePixelRatio || 1, q.dpr));
      if (grass) grass.visible = q.grass > 0;
      if (sun.shadow.mapSize.x !== q.shadow) { sun.shadow.mapSize.set(q.shadow, q.shadow); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    }
  };
}
