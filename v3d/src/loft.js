/* Společné stavební kameny postav: hladká těla z „loftů“ (prstence podél kostry) a srst ve vrstvách.
   Používá pes (dog.js) i psovod (handler.js). */
import * as THREE from 'three';

export const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);
export const pos = v => Math.max(0, v);
export const mix = (a, b, t) => a + (b - a) * t;

/* Catmull-Rom přes řídicí body {x,y,z,rw,rh}; vrací n vzorků (k = poloha mezi řídicími body) */
export function sampleCR(c, n) {
  const out = [], m = c.length - 1;
  for (let i = 0; i < n; i++) {
    const f = i / (n - 1) * m, k = Math.min(m - 1, Math.floor(f)), t = f - k;
    const p0 = c[Math.max(0, k - 1)], p1 = c[k], p2 = c[k + 1], p3 = c[Math.min(m, k + 2)];
    const cr = (a, b, cc, d) => .5 * (2 * b + (-a + cc) * t + (2 * a - 5 * b + 4 * cc - d) * t * t + (-a + 3 * b - 3 * cc + d) * t * t * t);
    /* poloměry: Catmull-Rom (hladké boule svalů), ale nikdy pod nulu */
    const rr = (key) => Math.max(1e-4, cr(p0[key], p1[key], p2[key], p3[key]));
    out.push({ x: cr(p0.x, p1.x, p2.x, p3.x), y: cr(p0.y, p1.y, p2.y, p3.y), z: cr(p0.z || 0, p1.z || 0, p2.z || 0, p3.z || 0),
      rw: rr('rw'), rh: rr('rh'), k: f });
  }
  return out;
}

/* Loft: trubice s eliptickým průřezem podél křivky. Boční osa S je pevná (0,0,1) nebo daná. */
export class Loft {
  /* count > 1: víc stejných trubic v jedné geometrii (jedno volání kreslení), update(pts, paint, b) plní trubici b */
  constructor(nPath, nRing, count = 1) {
    this.n = nPath; this.r = nRing; this.count = count; this.painted = [];
    const N1 = nPath * (nRing + 1), N = N1 * count, g = new THREE.BufferGeometry(); this.N1 = N1;
    this.P = new Float32Array(N * 3); this.Nn = new Float32Array(N * 3); this.U = new Float32Array(N * 2);
    g.setAttribute('position', new THREE.BufferAttribute(this.P, 3)); g.setAttribute('normal', new THREE.BufferAttribute(this.Nn, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(this.U, 2));
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(N * 3), 3)); g.setAttribute('fl', new THREE.BufferAttribute(new Float32Array(N), 1));
    g.attributes.position.setUsage(THREE.DynamicDrawUsage); g.attributes.normal.setUsage(THREE.DynamicDrawUsage);
    const idx = [];
    for (let c = 0; c < count; c++) for (let i = 0; i < nPath - 1; i++) for (let j = 0; j < nRing; j++) {
      const a = c * N1 + i * (nRing + 1) + j, b = a + nRing + 1; idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    g.setIndex(idx); this.g = g;
    this.side = V(0, 0, 1);
    /* volitelně: šířka elipsy se otáčí (twist) – nepoužito */
  }
  /* pts: vzorky {x,y,z,rw,rh}; paint(i, up, side, p) → [r,g,b,fur] (barví se jen poprvé) */
  update(pts, paint, blk = 0) {
    const off = blk * this.N1, fresh = paint && !this.painted[blk];
    const { P, Nn, U, r } = this, S = this.side, T = V(), Nv = V(), Sv = V(), q = V();
    let arc = 0;
    const col = this.g.attributes.color.array, fl = this.g.attributes.fl.array;
    for (let i = 0; i < this.n; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(this.n - 1, i + 1)], p = pts[i];
      T.set(b.x - a.x, b.y - a.y, b.z - a.z).normalize();
      Sv.copy(S).addScaledVector(T, -S.dot(T)).normalize(); Nv.crossVectors(Sv, T).normalize();
      if (i) arc += Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y, p.z - pts[i - 1].z);
      const per = Math.PI * (p.rw + p.rh);
      for (let j = 0; j <= r; j++) {
        const ang = j / r * Math.PI * 2, c = Math.cos(ang), s = Math.sin(ang), k = off + (i * (r + 1) + j);
        q.set(p.x, p.y, p.z).addScaledVector(Nv, c * p.rh).addScaledVector(Sv, s * p.rw);
        P[k * 3] = q.x; P[k * 3 + 1] = q.y; P[k * 3 + 2] = q.z;
        q.set(0, 0, 0).addScaledVector(Nv, c / Math.max(p.rh, 1e-4)).addScaledVector(Sv, s / Math.max(p.rw, 1e-4)).normalize();
        Nn[k * 3] = q.x; Nn[k * 3 + 1] = q.y; Nn[k * 3 + 2] = q.z;
        U[k * 2] = arc; U[k * 2 + 1] = j / r * per;
        if (fresh) { const v = paint(i, c, s, p); col[k * 3] = v[0]; col[k * 3 + 1] = v[1]; col[k * 3 + 2] = v[2]; fl[k] = v[3]; }
      }
    }
    if (fresh) { this.painted[blk] = true; this.g.attributes.color.needsUpdate = true; this.g.attributes.fl.needsUpdate = true; this.g.attributes.uv.needsUpdate = true; }
    this.g.attributes.position.needsUpdate = true; this.g.attributes.normal.needsUpdate = true;
    if (!this.g.boundingSphere) this.g.computeBoundingSphere();
  }
}

/* Srst: vrstvy (shells) posunuté po normále; řídké chlupy přes hash, spodní vrstvy tmavší.
   n = počet vrstev (0 = jen hladký povrch, např. oblečení). */
const furCache = new Map();
export function furMats(n, rough = .85) {
  const key = n + ':' + rough;
  if (furCache.has(key)) return furCache.get(key);
  const out = [];
  for (let i = 0; i <= n; i++) {
    const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: rough, metalness: 0 }), k = n ? i / n : 0;
    m.onBeforeCompile = sh => {
      sh.uniforms.uK = { value: k };
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float fl; uniform float uK; varying vec2 vU; varying float vK;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\n transformed += objectNormal * fl * uK + vec3(-.35, -.5, 0.) * fl * uK * uK; vU = uv; vK = uK;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vU; varying float vK;\nfloat h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }')
        .replace('#include <color_fragment>', '#include <color_fragment>\n if (vK > 0.) { vec2 c = floor(vU * vec2(700., 700.)); float h = h2(c); if (h < vK * 1.05) discard; }\n diffuseColor.rgb *= mix(.55, 1.08, vK) * (.92 + .16 * h2(floor(vU * 90.)));');
    };
    m.customProgramCacheKey = () => 'fur' + n + '_' + i;
    m.userData.shell = i;
    out.push(m);
  }
  furCache.set(key, out);
  return out;
}
/* přidá loft se všemi vrstvami srsti; vrstvy se dají později skrýt (nižší kvalita) */
export function addLoft(grp, lf, mats, shadow = true) {
  lf.meshes = mats.map((m, i) => {
    const me = new THREE.Mesh(lf.g, m); me.castShadow = shadow && i === 0; me.receiveShadow = i === 0; me.frustumCulled = false;
    me.userData.shell = i; me.userData.shells = mats.length - 1; grp.add(me); return me;
  });
}
/* ukáže jen každou k-tou vrstvu srsti (k=1 všechny) */
export function thinShells(grp, k) {
  grp.traverse(o => { if (o.isMesh && o.userData.shells) o.visible = o.userData.shell % k === 0 || o.userData.shell === o.userData.shells; });
}

/* otočení bodu {x,y} kolem středu c o úhel a (v rovině xy) */
export function rot(p, c, a) { const x = p.x - c.x, y = p.y - c.y, co = Math.cos(a), si = Math.sin(a); return { ...p, x: c.x + x * co - y * si, y: c.y + x * si + y * co }; }
/* noha/paže: FK v rovině xy z kořene, úhly od svislice (kladně dopředu) */
export function chain(root, lens, angs) {
  const pts = [{ x: root.x, y: root.y }]; let x = root.x, y = root.y;
  lens.forEach((L, i) => { x += Math.sin(angs[i]) * L; y -= Math.cos(angs[i]) * L; pts.push({ x, y }); }); return pts;
}
