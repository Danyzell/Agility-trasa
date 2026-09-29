/* Pes (border kolie): hladké tělo z loftů, srst ve vrstvách, cval řízený fází.
   makeDog({shells, shortShells}) → THREE.Group;  poseDog(dog, ph, air, pitch, still, land, opt)
   Souřadnice psa: čumák míří do +x, nahoru +y, levý bok do −z; počátek = zem pod středem těla. */
import * as THREE from 'three';
import { V, pos, mix, sampleCR, Loft, furMats, addLoft, rot, chain } from './loft.js';
export { Loft, furMats, addLoft, sampleCR, rot, chain, mix, pos, V } from './loft.js';

const BLK = [.035, .032, .034], WHT = [.93, .91, .86];
export function makeDog(q = {}) {
  const dog = new THREE.Group(), fm = furMats(q.shells || 7), fmShort = furMats(q.shortShells || 3);
  const body = new Loft(60, 26), legs = new Loft(26, 14, 4), tail = new Loft(18, 10), ears = [new Loft(8, 8), new Loft(8, 8)];
  ears[0].side = V(1, 0, 0); ears[1].side = V(1, 0, 0);
  addLoft(dog, body, fm); addLoft(dog, legs, fm);   /* stejná srst jako tělo: bez švu na stehně a lopatce */ addLoft(dog, tail, fm); ears.forEach(l => addLoft(dog, l, fmShort, false));
  const eyeM = new THREE.MeshStandardMaterial({ color: '#2a1608', roughness: .12, metalness: .1 }), noseM = new THREE.MeshStandardMaterial({ color: '#111', roughness: .35 });
  const eyes = [0, 1].map(() => { const e = new THREE.Mesh(new THREE.SphereGeometry(.013, 12, 8), eyeM); dog.add(e); return e; });
  const nose = new THREE.Mesh(new THREE.SphereGeometry(.021, 12, 8), noseM); nose.scale.set(.9, .8, 1.15); dog.add(nose);
  dog.userData = { body, legs, tail, ears, eyes, nose, feet: [] };
  poseDog(dog, 0, 0, 0);
  return dog;
}
/* klidová kostra těla: x, y, rw (do boku), rh (nahoru/dolů).
   Hrudník hluboký a úzký, bedra štíhlá, záď zaoblená; krk vystupuje z lopatek. */
const BODY = [
  [-.37, .50, .02, .02], [-.35, .49, .075, .08], [-.29, .475, .1, .108], [-.18, .46, .088, .092], [-.04, .452, .094, .112], [.1, .44, .108, .142],
  [.22, .45, .104, .138], [.31, .5, .082, .1], [.38, .585, .066, .075], [.425, .66, .06, .066], [.46, .72, .072, .07], [.52, .74, .078, .068],
  [.565, .722, .058, .054], [.605, .705, .044, .04], [.64, .698, .03, .028], [.652, .697, .004, .004]
];
const NECK = V(.33, .52), HIPC = V(-.26, .46), CEN = V(0, .45), SITC = { x: -.34, y: .1 };

/* opt: {time (s, pro vrtění ocasem v klidu), sit (0..1)} */
export function poseDog(dog, ph, air = 0, pitch = 0, still = false, land = 0, opt = {}) {
  /* still: 0..1 (1 = stojí); plynulý přechod z cvalu do postoje */
  const U = dog.userData, T = Math.PI * 2, stl = Math.max(0, Math.min(1, +still || 0)), gal = 1 - stl, sit = opt.sit || 0, time = opt.time || 0;
  still = stl > .5;
  const flex = Math.sin(ph * T + 1.3) * .035 * gal * (1 - air), bob = Math.abs(Math.sin(ph * T)) * .03 * (1 - air) * gal;
  const neckA = mix(mix(-.25, Math.sin(ph * T + 2) * .07 - .05, 1 - air) * gal + .08 * stl, -.35, sit);
  const sitA = .62 * sit, tot = pitch + sitA;
  const G = p => { let q = rot(p, CEN, pitch); q.y += bob - .25 * sit - .018; if (sit) q = rot(q, SITC, sitA); return q; };
  /* tělo */
  const ctrl = BODY.map(([x, y, rw, rh], i) => {
    let p = { x, y, z: 0, rw, rh };
    if (i <= 3) { p.x += flex * (1 - i / 4) * 1.2; p.y += flex * .25; }
    if (i >= 8) p = rot(p, NECK, neckA * Math.min(1, (i - 7) / 3));
    return G(p);
  });
  const pts = sampleCR(ctrl, U.body.n);
  U.body.update(pts, (i, up, side, p) => {
    const f = p.k;
    let c = BLK, fur = .022;
    if (f >= 7.6 && f <= 8.6) { c = WHT; fur = .04; }                                              // límec
    if (f > 5.6 && f < 7.6 && up < -.35 + (f - 5.6) * .25) { c = WHT; fur = .035; }                // hruď
    if (f > 6.5 && f < 8 && up < .2 && Math.abs(side) < .75) { c = WHT; fur = .04; }
    if (f > 1.5 && f < 5 && up < -.8) fur = .03;                                                    // „kalhotky“ na břiše
    if (f >= 11.9) { c = WHT; fur = .004; } else if (f >= 11.3) { c = up < .2 || Math.abs(side) < .25 ? WHT : BLK; fur = .005; } // čenich
    if (f >= 9.8 && f < 11.3) { fur = .008; if (up > .45 && Math.abs(side) < .14 + (f - 9.8) * .06) c = WHT; if (up < -.5 && f > 10.6) c = WHT; } // lysina
    return [...c, fur];
  });
  /* hlava: oči, nos, uši podle bodů hlavy */
  const H = k => pts[Math.round(k / (BODY.length - 1) * (U.body.n - 1))];
  const hs = H(10.5), hs2 = H(12), dir = V(hs2.x - hs.x, hs2.y - hs.y, 0).normalize(), upv = V(-dir.y, dir.x, 0);
  U.eyes.forEach((e, i) => { const s = i ? -1 : 1; e.position.set(hs.x + dir.x * .045 + upv.x * .028, hs.y + dir.y * .045 + upv.y * .028, s * .052); });
  const nt = H(14.4); U.nose.position.set(nt.x + dir.x * .006, nt.y + dir.y * .006 + .004, 0);
  U.ears.forEach((l, i) => {
    const s = i ? -1 : 1, b = H(10.2), flop = air ? .6 : .2 + Math.sin(ph * T) * .1 * gal;
    const base = { x: b.x - dir.x * .01 + upv.x * .05, y: b.y + upv.y * .05 };
    const e = [[0, -.01, .034, .009], [-.01, .02, .032, .008], [-.01, .045, .022, .006], [.008 + flop * .02, .058, .012, .004], [.026 + flop * .03, .05 - flop * .02, .002, .002]]
      .map(([dx, dy, rw, rh]) => ({ x: base.x + dir.x * dx + upv.x * dy, y: base.y + dir.y * dx + upv.y * dy, z: s * (.045 + dy * .25), rw, rh }));
    l.update(sampleCR(e, l.n), () => [...BLK, .008]);
  });
  /* nohy: 0,1 přední (levá z<0 … pravá), 2,3 zadní */
  const offs = [.42, .52, 0, .1], Lf = [.16, .205, .075], Lh = [.19, .2, .13];
  for (let i = 0; i < 4; i++) {
    const l = U.legs;
    const front = i < 2, z = (i % 2 ? -1 : 1) * (front ? .05 : .06), p = (ph + offs[i]) * T, sw = Math.sin(p), lift = pos(Math.cos(p));
    let a;
    if (front) {
      let s = .08 + .6 * sw * gal, e = -(.08 + 1.3 * lift * gal), c = .18 - .9 * lift * gal;
      s = mix(s, 1.25, air); e = mix(e, -2.3, air); c = mix(c, -.9, air);
      s = mix(s, .95, land); e = mix(e, -.12, land); c = mix(c, .3, land);
      a = [s, s + e, s + e + c];
      if (stl) a = a.map((v, k) => mix(v, [.05, -.05, .15][k], stl));
      if (sit) a = a.map((v, k) => mix(v, [.12, .06, .3][k], sit));
    } else {
      let t = .28 + .55 * sw * gal, kb = 1.0 + .6 * lift * gal, hb = .82 + .25 * lift * gal;
      t = mix(t, -1.0, air); kb = mix(kb, .35, air); hb = mix(hb, .35, air);
      t = mix(t, .1, land); kb = mix(kb, 1.5, land); hb = mix(hb, 1.2, land);
      a = [t, t - kb, t - kb + hb];
      if (stl) a = a.map((v, k) => mix(v, [.3, -.72, .1][k], stl));
      if (sit) a = a.map((v, k) => mix(v, [1.2, -1.75, 1.45][k], sit));
    }
    const root = front ? { x: .25, y: .47 } : { x: -.26, y: .47 };
    const J = chain(root, front ? Lf : Lh, a.map(v => v - tot));
    const toe = J[3], pd = a[2] - tot;
    let c;
    if (front) {
      /* lopatka zapuštěná v hrudníku, nadloktí svalnaté, předloktí štíhlé */
      const sh = { x: root.x + .03, y: root.y + .12, z: z * .3, rw: .05, rh: .06 };
      c = [sh,
        { x: mix(J[0].x, sh.x, .45), y: mix(J[0].y, sh.y, .45), z: z * .6, rw: .058, rh: .068 },
        { x: J[0].x, y: J[0].y, z: z * .85, rw: .046, rh: .058 },
        { x: mix(J[0].x, J[1].x, .5), y: mix(J[0].y, J[1].y, .5), z, rw: .032, rh: .042 },
        { x: J[1].x, y: J[1].y, z, rw: .025, rh: .03 },
        { x: mix(J[1].x, J[2].x, .45), y: mix(J[1].y, J[2].y, .45), z, rw: .021, rh: .024 },
        { x: J[2].x, y: J[2].y, z, rw: .019, rh: .021 },
        { x: mix(J[2].x, J[3].x, .5), y: mix(J[2].y, J[3].y, .5), z, rw: .018, rh: .018 }];
    } else {
      /* stehno: ploché a hluboké (ze strany široké, z profilu úzké), plynule vyrůstá ze zádě */
      const hip = { x: root.x + .02, y: root.y + .08, z: z * .3, rw: .06, rh: .085 };
      c = [hip,
        { x: mix(J[0].x, J[1].x, .1), y: mix(J[0].y, J[1].y, .1), z: z * .72, rw: .062, rh: .1 },
        { x: mix(J[0].x, J[1].x, .45), y: mix(J[0].y, J[1].y, .45), z: z * .9, rw: .046, rh: .075 },
        { x: J[1].x, y: J[1].y, z, rw: .03, rh: .038 },
        { x: mix(J[1].x, J[2].x, .4), y: mix(J[1].y, J[2].y, .4), z, rw: .026, rh: .036 },
        { x: J[2].x, y: J[2].y, z, rw: .019, rh: .024 },
        { x: mix(J[2].x, J[3].x, .5), y: mix(J[2].y, J[3].y, .5), z, rw: .017, rh: .018 }];
    }
    c.push({ x: toe.x, y: toe.y, z, rw: .019, rh: .018 },
      { x: toe.x + Math.cos(pd) * .03, y: toe.y + Math.sin(pd) * .03 - .005, z, rw: .025, rh: .019 },
      { x: toe.x + Math.cos(pd) * .052, y: toe.y + Math.sin(pd) * .052 - .008, z, rw: .006, rh: .006 });
    const cc = c.map(G);
    U.feet[i] = G({ x: toe.x + Math.cos(pd) * .03, y: toe.y + Math.sin(pd) * .03 - .024, z });
    const loK = front ? 4.6 : 4.4;
    l.update(sampleCR(cc, l.n), (k, up, side, pp) => { const lo = pp.k > loK; return [...(lo ? WHT : BLK), lo ? .005 : pp.k < 1.5 ? .022 : pp.k < 3 ? .016 : .009]; }, i);
  }
  /* ocas */
  const wag = still ? Math.sin(time * 8) * .15 : Math.sin(ph * T) * .12, lift = air ? .9 : mix(.25, -.2, sit);
  const tc = [[-.35, .5, .035, .035], [-.43, .47, .03, .03], [-.5, .42, .024, .024], [-.55, .36, .018, .018], [-.57, .3, .013, .013], [-.565, .26, .004, .004]]
    .map(([x, y, rw, rh], i) => { let p = rot({ x, y, z: 0, rw, rh }, { x: -.35, y: .5 }, lift * (i / 5)); p.z = Math.sin(i * .6) * wag * i * .02; return G(p); });
  U.tail.update(sampleCR(tc, U.tail.n), (k, up, s, p) => [...(p.k > 4.1 ? WHT : BLK), .03 + (up < 0 ? .02 : 0)]);
}
