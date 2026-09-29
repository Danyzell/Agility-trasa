/* Psovod (sportovní žena, 1,70 m) pro 3D animace techniky.
   makeHandler(opts) → THREE.Group čelem do +x, nahoru +y, chodidla na y = 0 (pozici a rotation.y nastavuje engine).
   poseHandler(h, {phase 0..1 (běžecký cyklus = 2 kroky), speed (0 = stojí … 1 ≈ 4 m/s; plný krok od ~0,45),
                   point 0..1, pointSide 1 = levá paže / −1 = pravá, still, look (rad, natočení hlavy, volitelné)})
   Tělo = hladké „lofty“ (prstence podél kostry) přepočítávané každý snímek; hlava, ruce a boty jsou pevné sítě
   posazené na kostru. Lokální osy: x dopředu, y nahoru, z doprava (levá strana těla je −z). */
import * as THREE from 'three';

const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const mix = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const rgb = hex => { const c = new THREE.Color(hex); return [c.r, c.g, c.b]; };
const Y = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3(0, 0, 1), X = new THREE.Vector3(1, 0, 0);
const qa = (axis, a) => new THREE.Quaternion().setFromAxisAngle(axis, a);
const qmul = (...qs) => qs.reduce((a, b) => a.multiply(b), new THREE.Quaternion());
const v3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

/* ---------- periodická interpolace klíčových snímků [[t, v], ...], t ∈ [0,1) ---------- */
function cyc(keys, p) {
  p = ((p % 1) + 1) % 1;
  const n = keys.length; let i = n - 1;
  for (let k = 0; k < n; k++) if (keys[k][0] > p) { i = k - 1; break; }
  const g = j => { const jj = ((j % n) + n) % n; return [keys[jj][0] + Math.floor(j / n), keys[jj][1]]; };
  const a = g(i - 1), b = g(i), c = g(i + 1), d = g(i + 2), t = (p - b[0]) / (c[0] - b[0]);
  return .5 * (2 * b[1] + (-a[1] + c[1]) * t + (2 * a[1] - 5 * b[1] + 4 * c[1] - d[1]) * t * t + (-a[1] + 3 * b[1] - 3 * c[1] + d[1]) * t * t * t);
}

/* ---------- Tube: trubka s (super)eliptickým průřezem, různá hloubka vpředu/vzadu ----------
   řídicí body {p: Vector3, a: Vector3 (boční osa), rw, rf, rb, e (exponent průřezu)}; přední osa = tečna × boční */
class Tube {
  constructor(nPath, nRing, paint) {
    this.n = nPath; this.r = nRing; this.paint = paint;
    const N = nPath * (nRing + 1), g = new THREE.BufferGeometry();
    this.P = new Float32Array(N * 3); this.Nn = new Float32Array(N * 3); this.C = new Float32Array(N * 3); this.Ce = new Float32Array(nPath * 3);
    g.setAttribute('position', new THREE.BufferAttribute(this.P, 3)); g.setAttribute('normal', new THREE.BufferAttribute(this.Nn, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.C, 3));
    const idx = [];
    for (let i = 0; i < nPath - 1; i++) for (let j = 0; j < nRing; j++) {
      const a = i * (nRing + 1) + j, b = a + nRing + 1; idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    g.setIndex(idx); this.g = g; this.painted = false;
    this.cs = []; for (let j = 0; j <= nRing; j++) { const t = j / nRing * TAU; this.cs.push([Math.cos(t), Math.sin(t)]); }
  }
  update(ctrl) {
    const n = this.n, r = this.r, P = this.P, m = ctrl.length - 1, T = v3(), A = v3(), B = v3(), q = v3();
    const S = [];
    for (let i = 0; i < n; i++) {
      const f = i / (n - 1) * m, k = Math.min(m - 1, Math.floor(f)), t = f - k;
      const p0 = ctrl[Math.max(0, k - 1)], p1 = ctrl[k], p2 = ctrl[k + 1], p3 = ctrl[Math.min(m, k + 2)];
      const cr = (a, b, c, d) => .5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
      const s = t * t * (3 - 2 * t);
      S.push({ x: cr(p0.p.x, p1.p.x, p2.p.x, p3.p.x), y: cr(p0.p.y, p1.p.y, p2.p.y, p3.p.y), z: cr(p0.p.z, p1.p.z, p2.p.z, p3.p.z),
        a: p1.a.clone().lerp(p2.a, s), rw: mix(p1.rw, p2.rw, s), rf: mix(p1.rf, p2.rf, s), rb: mix(p1.rb, p2.rb, s), e: mix(p1.e || 2, p2.e || 2, s), k: f });
    }
    for (let i = 0; i < n; i++) {
      const a = S[Math.max(0, i - 1)], b = S[Math.min(n - 1, i + 1)], p = S[i];
      T.set(b.x - a.x, b.y - a.y, b.z - a.z).normalize();
      A.copy(p.a).addScaledVector(T, -p.a.dot(T)).normalize(); B.crossVectors(T, A).normalize();
      this.Ce[i * 3] = p.x; this.Ce[i * 3 + 1] = p.y; this.Ce[i * 3 + 2] = p.z;
      const ex = 2 / p.e;
      for (let j = 0; j <= r; j++) {
        const [c, s] = this.cs[j], cc = Math.sign(c) * Math.pow(Math.abs(c), ex), ss = Math.sign(s) * Math.pow(Math.abs(s), ex);
        q.set(p.x, p.y, p.z).addScaledVector(B, cc * (c > 0 ? p.rf : p.rb)).addScaledVector(A, ss * p.rw);
        const o = (i * (r + 1) + j) * 3; P[o] = q.x; P[o + 1] = q.y; P[o + 2] = q.z;
        if (!this.painted) { const col = this.paint(p.k, c, s, i); this.C[o] = col[0]; this.C[o + 1] = col[1]; this.C[o + 2] = col[2]; }
      }
    }
    /* normály z mřížky (správně i pro zúžení a nesouměrný průřez) */
    const Nn = this.Nn, du = v3(), dv = v3(), nn = v3(), ce = v3(), P3 = (i, j) => (i * (r + 1) + j) * 3;
    for (let i = 0; i < n; i++) for (let j = 0; j <= r; j++) {
      const i0 = Math.max(0, i - 1), i1 = Math.min(n - 1, i + 1), jm = (j + r - 1) % r, jp = (j + 1) % r;
      let a0 = P3(i0, j), a1 = P3(i1, j), b0 = P3(i, jm), b1 = P3(i, jp);
      du.set(P[a1] - P[a0], P[a1 + 1] - P[a0 + 1], P[a1 + 2] - P[a0 + 2]);
      dv.set(P[b1] - P[b0], P[b1 + 1] - P[b0 + 1], P[b1 + 2] - P[b0 + 2]);
      nn.crossVectors(dv, du);
      const o = P3(i, j);
      ce.set(P[o] - this.Ce[i * 3], P[o + 1] - this.Ce[i * 3 + 1], P[o + 2] - this.Ce[i * 3 + 2]);
      if (nn.lengthSq() < 1e-14) nn.copy(ce);
      if (i === 0 || i === n - 1) { T.set(this.Ce[i1 * 3] - this.Ce[i0 * 3], this.Ce[i1 * 3 + 1] - this.Ce[i0 * 3 + 1], this.Ce[i1 * 3 + 2] - this.Ce[i0 * 3 + 2]).normalize(); nn.copy(T).multiplyScalar(i ? 1 : -1); }
      else if (nn.dot(ce) < 0) nn.negate();
      nn.normalize(); Nn[o] = nn.x; Nn[o + 1] = nn.y; Nn[o + 2] = nn.z;
    }
    if (!this.painted) { this.painted = true; this.g.attributes.color.needsUpdate = true; }
    this.g.attributes.position.needsUpdate = true; this.g.attributes.normal.needsUpdate = true;
    this.g.computeBoundingSphere();
  }
}
const cp = (p, a, rw, rf = rw, rb = rf, e = 2) => ({ p, a, rw, rf, rb, e });

/* ---------- barvy ---------- */
const PAL = {
  skin: rgb('#d9a07f'), skinD: rgb('#c48466'), shirt: rgb('#2f7fd0'), shirtD: rgb('#2468ad'), trim: rgb('#c6f432'),
  legs: rgb('#23262e'), legsS: rgb('#3a3f4a'), shoe: rgb('#f2f2ee'), shoeC: rgb('#ff6a3d'), sole: rgb('#3a3a3c'), hair: '#5a3620', band: '#c6f432'
};

/* ---------- pevné sítě: hlava, vlasy, ruce, boty ---------- */
function deform(geo, fn) {
  const a = geo.attributes.position, v = v3();
  for (let i = 0; i < a.count; i++) { v.fromBufferAttribute(a, i); fn(v); a.setXYZ(i, v.x, v.y, v.z); }
  geo.computeVertexNormals(); return geo;
}
const g2 = (x, y, sx, sy) => Math.exp(-(x * x) / (sx * sx) - (y * y) / (sy * sy));
/* tvar lebky v jednotkových souřadnicích koule (x dopředu = obličej) */
function skull(v) {
  let { x, y, z } = v;
  if (y < 0) { const rh = Math.hypot(x, z) || 1, rs = Math.pow(1 - Math.pow(-y, 2.6), 1 / 2.6); x *= rs / rh; z *= rs / rh; }   // hranatější dolní půlka (čelist)
  const low = sstep(-.05, -.95, y), back = x < 0;
  let X = x * .1, Yy = y * (y > 0 ? .118 : .112), Zz = z * .079;
  if (back) X *= 1 + .08 * (1 - Math.abs(y)) - .45 * low;      // zátylek plnější, pod ním nic
  else X *= 1 - .1 * low;
  Zz *= 1 - .3 * Math.pow(low, 1.3);                           // čelist užší než lebka, brada zaoblená
  if (x > 0) X = Math.min(X, .09 + .006 * y);                  // plošší obličej
  for (const s of [-1, 1]) X -= .007 * g2(y - .1, z - s * .36, .13, .15) * sstep(.4, .8, x);   // oční důlky
  X += .004 * g2(y - .27, z, .08, .5) * sstep(.5, .8, x);       // nadočnicový oblouk
  X += .006 * g2(y + .62, z, .18, .3) * sstep(.3, .7, x);       // brada
  Yy -= .012 * low * low;                                      // kratší obličej, oblá brada
  Zz *= 1 + .06 * g2(y + .15, x - .45, .25, .3);                 // lícní kosti
  v.set(X, Yy, Zz);
}
/* sloučí statické díly [geometrie, barva, poloha, měřítko, rotace] do jedné sítě s barvami ve vrcholech (1 draw call) */
function merged(parts) {
  const P = [], N = [], Cc = [], I = [], m = new THREE.Matrix4(), nm = new THREE.Matrix3(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = v3();
  let off = 0;
  for (const [g, col, p, sc, r] of parts) {
    m.compose(v3(...p), q.setFromEuler(e.set(...(r || [0, 0, 0]))), v3(...sc)); nm.getNormalMatrix(m);
    const pa = g.attributes.position, na = g.attributes.normal, c = rgb(col);
    for (let i = 0; i < pa.count; i++) {
      v.fromBufferAttribute(pa, i).applyMatrix4(m); P.push(v.x, v.y, v.z);
      v.fromBufferAttribute(na, i).applyMatrix3(nm).normalize(); N.push(v.x, v.y, v.z); Cc.push(c[0], c[1], c[2]);
    }
    const ix = g.index.array; for (let i = 0; i < ix.length; i++) I.push(ix[i] + off); off += pa.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(Cc, 3)); g.setIndex(I); return g;
}
const SKIN = '#d9a07f';
function makeHead() {
  const C = [.02, .088, 0]; /* střed lebky vůči kořeni krku */
  const sk = deform(new THREE.SphereGeometry(1, 24, 18), skull);
  /* vlasy: kopie lebky o kousek větší; pod linií vlasů se slupka zanoří pod kůži → hladká linie bez zubů */
  const hg = deform(new THREE.SphereGeometry(1, 24, 18), v => { const x = v.x, y = v.y; skull(v);
    const hl = x > 0 ? mix(.05, .5, sstep(.1, .6, x)) : mix(.05, -.55, sstep(-.05, -.6, x));
    v.multiplyScalar(mix(.9, 1.065 + .045 * sstep(.3, 1, y) - .02 * sstep(.2, .9, x), sstep(hl - .2, hl + .06, y))); });
  const sph = new THREE.SphereGeometry(1, 8, 6), sphS = new THREE.SphereGeometry(1, 7, 5);
  const at = (x, y, z) => [C[0] + x, C[1] + y, C[2] + z];
  const parts = [[sk, SKIN, C, [1, 1, 1]], [hg, PAL.hair, C, [1, 1, 1]]];
  for (const s of [-1, 1]) parts.push(
    [sphS, '#f4efe8', at(.079, .012, s * .031), [.008, .0095, .014]],                 // bělmo
    [sphS, '#2a1a12', at(.0865, .012, s * .031), [.003, .0085, .0085]],               // duhovka
    [sphS, PAL.hair, at(.087, .036, s * .033), [.005, .005, .018], [s * .15, 0, 0]],   // obočí
    [sph, SKIN, at(-.004, -.004, s * .079), [.016, .032, .01], [0, 0, .15]]);         // ucho
  parts.push([sph, SKIN, at(.088, -.008, 0), [.016, .03, .011], [0, 0, -.3]],          // nos
    [sphS, '#b8615a', at(.083, -.052, 0), [.008, .005, .019]],                         // rty
    [new THREE.TorusGeometry(.017, .007, 5, 10), PAL.band, at(-.1, .045, 0), [1, 1, 1], [0, Math.PI / 2, -.9]]);   // gumička culíku
  const mesh = new THREE.Mesh(merged(parts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .62 }));
  const head = new THREE.Group(); head.add(mesh); return head;
}
/* ruka: pěst (běh) a otevřená dlaň s nataženými prsty (ukazování); osa −y = podél předloktí, dlaň ve svislé rovině xy */
function makeHands() {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .6 }), sph = new THREE.SphereGeometry(1, 7, 6);
  const mk = parts => { const m = new THREE.Mesh(merged(parts.map(([x, y, z, sx, sy, sz, rz]) => [sph, SKIN, [x, y, z], [sx, sy, sz], [0, 0, rz || 0]])), mat); m.castShadow = true; return m; };
  const fist = () => mk([[.004, -.045, 0, .036, .045, .026], [.022, -.06, 0, .022, .03, .027], [.018, -.03, 0, .012, .022, .012, .5]]);
  const open = () => mk([[.0, -.045, 0, .036, .05, .014], [.002, -.11, 0, .03, .05, .011], [.03, -.04, 0, .01, .03, .01, -.6]]);
  return [0, 1].map(() => ({ fist: fist(), open: open() }));
}
function makeShoe() {
  /* podél +x od paty ke špičce; boční osa −z → přední osa průřezu míří nahoru */
  const t = new Tube(11, 10, (k, c) => c < -.35 ? PAL.sole : c < -.1 ? PAL.shoe : (k > 1.4 && k < 3.5 && c > .2 && c < .75) ? PAL.shoeC : PAL.shoe);
  const a = v3(0, 0, -1);
  t.update([cp(v3(-.07, -.035, 0), a, .012, .012, .012), cp(v3(-.058, -.035, 0), a, .036, .035, .04, 2.6), cp(v3(-.01, -.035, 0), a, .043, .042, .042, 2.8),
    cp(v3(.06, -.047, 0), a, .048, .03, .03, 2.8), cp(v3(.12, -.052, 0), a, .049, .023, .025, 2.8), cp(v3(.17, -.052, 0), a, .04, .018, .023, 2.4),
    cp(v3(.196, -.05, 0), a, .02, .01, .018), cp(v3(.203, -.049, 0), a, .004, .004, .005)]);
  return t.g;
}

/* ---------- rozměry ---------- */
const PELV = .885;                 // výška kyčelních kloubů ve stoji (počátek pánve)
const THIGH = .42, SHIN = .41, UARM = .29, FARM = .25;
const HIPZ = .085, SHZ = .158, SHY = 1.39;
/* trup: y (klidová výška), dx (posun dopředu), rw (půlšířka), rf (hloubka vpředu), rb (vzadu), e (hranatost) */
const TORSO = [
  [.775, .0, .03, .03, .03, 2], [.795, .0, .105, .07, .085, 2.2], [.835, -.004, .152, .09, .112, 2.4], [.895, -.006, .168, .092, .122, 2.6],
  [.965, .0, .16, .09, .105, 2.6], [1.03, .006, .138, .084, .086, 2.5], [1.085, .01, .124, .078, .078, 2.4], [1.15, .012, .13, .082, .082, 2.4],
  [1.22, .014, .142, .1, .086, 2.5], [1.285, .01, .152, .098, .09, 2.6], [1.345, .002, .16, .082, .09, 2.7], [1.39, -.008, .15, .066, .078, 2.8],
  [1.425, -.01, .09, .056, .064, 2.3], [1.455, .0, .052, .05, .052, 2], [1.51, .012, .047, .047, .047, 2], [1.56, .02, .04, .04, .04, 2]];
/* běh: klíčové snímky pro nohu, fáze 0 = došlap téže nohy */
const K_TH = [[0, .42], [.12, .12], [.3, -.3], [.4, -.42], [.52, -.25], [.66, .22], [.8, .66], [.9, .62]];
const K_KN = [[0, .28], [.13, .62], [.3, .38], [.42, .7], [.56, 1.75], [.66, 2.0], [.8, 1.05], [.92, .32]];
const K_AN = [[0, .02], [.13, .45], [.3, .45], [.4, .12], [.55, -.28], [.7, -.1], [.85, .15], [.95, .1]];
const K_FL = [[0, 0], [.2, .004], [.35, .01], [.45, .045], [.5, .05], [.55, .04], [.7, .008], [.85, 0]]; // letová fáze (zvednutí pánve)

export function makeHandler(opts = {}) {
  const h = new THREE.Group();
  const cloth = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .78 });
  const shoeM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .6 });
  const hairM = new THREE.MeshStandardMaterial({ color: PAL.hair, roughness: .78 });
  const torso = new Tube(30, 18, (k, c, s) => {
    const y = TORSO[Math.min(TORSO.length - 1, Math.round(k))][0] + (k - Math.round(k)) * .05;
    if (y > 1.448 - .03 * sstep(.6, 1, c)) return PAL.skin;           // krk a výstřih
    if (y > 1.43 - .03 * sstep(.6, 1, c)) return PAL.shirtD;            // lem u krku
    if (y > .985) return Math.abs(s) > .93 ? PAL.shirtD : PAL.shirt;    // tričko s bočním švem
    if (y > .955) return PAL.trim;                                      // pas legín
    return PAL.legs;
  });
  const legs = [0, 1].map(() => new Tube(22, 12, (k, c, s) => k > 8.2 ? PAL.skin : PAL.legs));
  const arms = [0, 1].map(() => new Tube(20, 10, (k, c) => k < 2.1 ? (k > 1.8 ? PAL.shirtD : PAL.shirt) : PAL.skin));
  const pony = new Tube(10, 8, () => rgb(PAL.hair));
  const mesh = (g, m) => { const me = new THREE.Mesh(g, m); me.castShadow = true; me.receiveShadow = true; me.frustumCulled = false; h.add(me); return me; };
  mesh(torso.g, cloth); legs.forEach(l => mesh(l.g, cloth)); arms.forEach(l => mesh(l.g, cloth)); mesh(pony.g, hairM);
  const head = makeHead(); head.traverse(m => { if (m.isMesh) { m.castShadow = true; } }); h.add(head);
  const hands = makeHands(); hands.forEach(o => { h.add(o.fist); h.add(o.open); });
  const sg = makeShoe(), shoes = [0, 1].map(() => { const m = new THREE.Mesh(sg, shoeM); m.castShadow = true; h.add(m); return m; });
  h.userData.hd = { torso, legs, arms, pony, head, hands, shoes };
  poseHandler(h, { speed: 0, still: true });
  return h;
}

/* dodatečné natočení hlavy (rad, + = doleva) po poseHandler – např. „ohlédne se přes druhé rameno“ */
export function lookHandler(h, look) {
  const U = h.userData.hd; if (!U || !U.last || !look) return;
  poseHandler(h, { ...U.last, look: (U.last.look || 0) + look });
}

export function poseHandler(h, o = {}) {
  const U = h.userData.hd, still = !!o.still; U.last = o;
  let sp = o.speed == null ? 1 : +o.speed; if (sp > 1.2) sp = sp / 4;       // 0..1 (1 ≈ 4 m/s); větší hodnoty bere jako m/s
  sp = still ? 0 : clamp(sp, 0, 1);
  /* scény jsou zpomalené (psovod ~1,5 m/s) → plný běžecký krok už od ~1,8 m/s */
  const a = Math.pow(Math.min(1, sp / .45), .7), ph = still ? 0 : (o.phase || 0);
  const point = clamp(o.point || 0, 0, 1), pz = (o.pointSide == null ? 1 : o.pointSide) >= 0 ? -1 : 1;   // strana ukazující paže v z
  const pw = sstep(0, 1, point);

  /* --- nohy (0 = levá, z < 0; 1 = pravá) --- */
  const L = [0, 1].map(i => {
    const zs = i ? 1 : -1, p = ph + (i ? .5 : 0);
    const th = mix(.02, cyc(K_TH, p), a), kn = mix(.07, cyc(K_KN, p) * mix(.55, 1, a), a), an = mix(.05, cyc(K_AN, p), a);
    return { zs, p, th, kn, an };
  });
  const psiP = .17 * a * (L[1].th - L[0].th) / 1.1;               // natočení pánve (kyčel kroku jde dopředu)
  const lean = mix(.035, .2, a) + .04 * a * Math.sin(ph * TAU * 2);
  const turn = -pz * .22 * pw;                                     // otevření ramen k ukazující straně
  const psiS = -.9 * psiP + turn;
  const pelv = qa(Y, psiP);
  let lowest = 0;
  L.forEach(l => {
    const abd = mix(.035, -.015, a);
    l.hip = v3(0, 0, l.zs * HIPZ).applyQuaternion(pelv);
    l.qT = qmul(pelv.clone(), qa(X, -l.zs * abd), qa(Z, l.th));
    l.knee = l.hip.clone().add(v3(0, -THIGH, 0).applyQuaternion(l.qT));
    l.qS = l.qT.clone().multiply(qa(Z, -l.kn));
    l.ank = l.knee.clone().add(v3(0, -SHIN, 0).applyQuaternion(l.qS));
    l.qF = l.qS.clone().multiply(qa(Z, l.an));
    const lo = Math.min(...[[-.065, -.075], [.05, -.078], [.17, -.072], [.2, -.06]].map(([fx, fy]) => l.ank.y + v3(fx, fy, 0).applyQuaternion(l.qF).y));
    l.lo = lo;
  });
  const flight = a * (cyc(K_FL, ph) + cyc(K_FL, ph + .5)) * 1.2;
  const py = -Math.min(L[0].lo, L[1].lo) + flight;
  const O = v3(0, py, 0);

  /* --- trup --- */
  const qAt = y => qmul(qa(Y, mix(psiP, psiS, sstep(.95, 1.38, y))), qa(Z, -lean * (.35 + .65 * sstep(.9, 1.3, y))));
  const tctrl = TORSO.map(([y, dx, rw, rf, rb, e]) => {
    const q = qAt(y), br = y > 1.15 && y < 1.36 ? 1 + .012 * Math.sin(ph * TAU * 2) * a : 1;
    return cp(v3(dx, y - PELV, 0).applyQuaternion(q).add(O), Z.clone().applyQuaternion(q), rw, rf * br, rb, e);
  });
  U.torso.update(tctrl);
  const qTop = qAt(1.4);

  /* --- nohy: lofty a boty --- */
  L.forEach((l, i) => {
    const A = v3(0, 0, -1), aT = A.clone().applyQuaternion(l.qT), aS = A.clone().applyQuaternion(l.qS);
    const hp = l.hip.clone().add(O), kn = l.knee.clone().add(O), an = l.ank.clone().add(O);
    const on = (p0, p1, t) => p0.clone().lerp(p1, t);
    const top = hp.clone().add(v3(-.01, .07, -l.zs * .02));
    U.legs[i].update([
      cp(top, aT, .07, .06, .07), cp(hp, aT, .09, .085, .1), cp(on(hp, kn, .3), aT, .08, .078, .08), cp(on(hp, kn, .72), aT, .062, .064, .058),
      cp(kn.clone().add(v3(.012, 0, 0).applyQuaternion(l.qS)), aS, .05, .05, .046), cp(on(kn, an, .22), aS, .05, .042, .062), cp(on(kn, an, .45), aS, .045, .038, .052),
      cp(on(kn, an, .75), aS, .033, .032, .034), cp(an, aS, .029, .029, .03), cp(an.clone().add(v3(0, -.03, 0).applyQuaternion(l.qS)), aS, .028, .028, .028)]);
    U.shoes[i].position.copy(an); U.shoes[i].quaternion.copy(l.qF);
  });

  /* --- paže --- */
  const lf = [L[1].th, L[0].th];                                 // levá paže jde s pravou nohou
  const handPos = [];
  [0, 1].forEach(i => {
    const zs = i ? 1 : -1, isPt = zs === pz ? pw : 0, opp = lf[i];
    let f = mix(.05, .06 + .95 * (opp - .12), a), ab = mix(.1, .2, a), ir = mix(.25, .5, a), el = mix(.22, 1.35 + .45 * sstep(-.3, .6, opp), a);
    f = mix(f, 1.42, isPt); ab = mix(ab, .85, isPt); ir = mix(ir, -.1, isPt); el = mix(el, .12, isPt);
    const sh = v3(-.005, SHY - PELV + .015 * isPt, zs * SHZ).applyQuaternion(qTop).add(O);
    const qU = qmul(qTop.clone(), qa(Z, f), qa(X, -zs * ab), qa(Y, zs * ir));
    const el0 = sh.clone().add(v3(0, -UARM, 0).applyQuaternion(qU));
    const qF = qU.clone().multiply(qa(Z, el));
    const wr = el0.clone().add(v3(0, -FARM, 0).applyQuaternion(qF));
    const A = v3(0, 0, -1), aU = A.clone().applyQuaternion(qU), aF = A.clone().applyQuaternion(qF);
    const on = (p0, p1, t) => p0.clone().lerp(p1, t);
    const cap = sh.clone().add(v3(0, .03, 0).applyQuaternion(qU));
    U.arms[i].update([cp(sh.clone().add(v3(0, .055, 0).applyQuaternion(qU)), aU, .006, .006, .006), cp(cap, aU, .038, .038, .038), cp(sh, aU, .048, .046, .046), cp(on(sh, el0, .33), aU, .046, .046, .046), cp(on(sh, el0, .5), aU, .043, .044, .045),
      cp(on(sh, el0, .8), aU, .035, .036, .036), cp(el0, aU, .032, .03, .034), cp(on(el0, wr, .25), aF, .036, .035, .033), cp(on(el0, wr, .7), aF, .027, .024, .025),
      cp(wr, aF, .022, .017, .017), cp(wr.clone().add(v3(0, -.02, 0).applyQuaternion(qF)), aF, .019, .015, .015)]);
    const hq = qF.clone().multiply(qa(Z, isPt ? -.1 : .15));
    const hd = U.hands[i];
    hd.fist.visible = isPt < .5; hd.open.visible = isPt >= .5;
    for (const g of [hd.fist, hd.open]) { g.position.copy(wr); g.quaternion.copy(hq); if (zs < 0) g.scale.set(1, 1, -1); }
    handPos.push(wr);
  });

  /* --- hlava a culík --- */
  const neck = v3(.014, 1.5 - PELV, 0).applyQuaternion(qTop).add(O);
  const look = (o.look || 0) + (-pz) * .5 * pw;
  const qH = qmul(qa(Y, psiS * .4 + look - turn * .4), qa(Z, -lean * .1 + .04 * a * Math.sin(ph * TAU * 2 + 1)));
  U.head.position.copy(neck); U.head.quaternion.copy(qH);
  const root = v3(-.098, .135, 0).applyQuaternion(qH).add(neck);
  const sway = .045 * a * Math.sin(ph * TAU + .6), bounce = .035 * a * Math.sin(ph * TAU * 2 + 2.2), A = v3(0, 0, 1);
  const back = v3(-1, 0, 0).applyQuaternion(qH); back.y = 0; back.normalize();
  const side = v3(-back.z, 0, back.x);
  const pc = [];
  for (let k = 0; k <= 5; k++) {
    const t = k / 5, out = .035 * t * (1 + 1.6 * a) + .018 * Math.sin(t * 2.2), dn = .2 * t * (1 - .35 * a) - bounce * t * t;
    const p = root.clone().addScaledVector(back, out).addScaledVector(side, sway * t * t); p.y -= dn;
    pc.push(cp(p, A, [.018, .028, .031, .027, .018, .003][k], [.02, .032, .036, .03, .02, .003][k]));
  }
  U.pony.update(pc);
  return h;
}
