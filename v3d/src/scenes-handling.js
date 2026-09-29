/* Scény vedení psa (čelo, blind, záda, otočky, zadní strana skoku, start).
   Časování odpovídá titulkům v TOPICS (index.html), t ∈ [0,1) je poměrná část smyčky.
   Souřadnice v metrech (x doprava, z ke kameře); 2D předlohy (1 jednotka SVG ≈ 0,15 m) jsou zvětšené tak,
   aby se psovod vešel mezi skutečně široké skoky (laťka 1,3 m + křídla).
   Strany: psovod čelem do +x má levou ruku na −z. pointSide 1 = levá paže, −1 = pravá. */
import * as THREE from 'three';
import { lookHandler } from './handler.js';

const PI = Math.PI;

/* monotónní kubická interpolace klíčů [[t, v], ...] (bez překmitů, stejné hodnoty = stání) */
function mono(keys) {
  const n = keys.length, T = keys.map(k => k[0]), Y = keys.map(k => k[1]), d = [], m = [];
  for (let i = 0; i < n - 1; i++) d.push((Y[i + 1] - Y[i]) / (T[i + 1] - T[i]));
  for (let i = 0; i < n; i++) {
    if (i === 0) m.push(d[0]); else if (i === n - 1) m.push(d[n - 2]);
    else { const h0 = T[i] - T[i - 1], h1 = T[i + 1] - T[i]; m.push(d[i - 1] * d[i] <= 0 ? 0 : 3 * (h0 + h1) / ((2 * h1 + h0) / d[i - 1] + (h1 + 2 * h0) / d[i])); }
  }
  for (let i = 0; i < n - 1; i++) if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; }
  return t => {
    if (t <= T[0]) return Y[0]; if (t >= T[n - 1]) return Y[n - 1];
    let i = 0; while (t > T[i + 1]) i++;
    const h = T[i + 1] - T[i], u = (t - T[i]) / h, u2 = u * u, u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * Y[i] + (u3 - 2 * u2 + u) * h * m[i] + (-2 * u3 + 3 * u2) * Y[i + 1] + (u3 - u2) * h * m[i + 1];
  };
}
/* choreografie skoku podle uražené dráhy x vůči laťce: odraz TO, doskok LD, výška oblouku TOP */
function flight(x, TO, LD, TOP, ctx) {
  const { sm, bump } = ctx, XC = (TO + LD) / 2, HW = (LD - TO) / 2;
  const inAir = x > TO && x < LD, y = inAir ? TOP * (1 - ((x - XC) / HW) ** 2) : 0;
  const crouch = -.05 * bump(x, TO - .35, .35);
  const air = sm(TO - .5, TO + .1, x) * (1 - sm(LD - .9, LD - .2, x)), land = sm(LD - 1.1, LD - .4, x) * (1 - sm(LD - .05, LD + .55, x));
  const pitch = .36 * bump(x, TO + .15, .45) - .32 * bump(x, LD - .3, .45) + .05 * bump(x, TO - .75, .3);
  return { y: Math.max(0, y) + crouch, air, land, pitch };
}
/* poměrná poloha (0..1) bodu dráhy nejbližšího k [x, z] */
function frac(P, x, z) {
  let best = 1e9, bi = 0, acc = 0, at = 0;
  for (let i = 0; i < P.pts.length; i++) {
    if (i) acc += Math.hypot(P.pts[i].x - P.pts[i - 1].x, P.pts[i].z - P.pts[i - 1].z);
    const d = Math.hypot(P.pts[i].x - x, P.pts[i].z - z); if (d < best) { best = d; bi = i; at = acc; }
  }
  return at / P.length;
}
/* skok s číslem; yaw = směr, kterým ho pes bere (0 = +x, π/2 = −z, π = −x) */
function jumpAt(ctx, x, z, yaw, n, sx = -.9, sz = -1.55) {
  const j = ctx.ob.jump({ h: .55 }); j.position.set(x, 0, z); j.rotation.y = yaw; ctx.scene.add(j);
  if (n) { const s = ctx.ob.numSign(n), c = Math.cos(yaw), si = Math.sin(yaw);
    s.position.set(x + sx * c + sz * si, 0, z - sx * si + sz * c); s.rotation.y = yaw + .4; ctx.scene.add(s); }
  return { x, z };
}
/* pes po dráze: body [[x,z],...], skoky [{x,z}], časování [[t, [x,z] | u], ...] */
function dogTrack(ctx, pts, jumps, keys) {
  const P = ctx.path(pts), L = P.length;
  const U = mono(keys.map(([t, w]) => [t, Array.isArray(w) ? frac(P, w[0], w[1]) : w]));
  const S = jumps.map(j => frac(P, j.x, j.z) * L);
  return t => {
    const u = U(t), p = P.at(u), s = u * L;
    let f = { y: 0, air: 0, land: 0, pitch: 0 }, bd = 1e9;
    S.forEach(sj => { if (Math.abs(s - sj) < bd) { bd = Math.abs(s - sj); f = flight(s - sj, -1.45, 1.35, .47, ctx); } });
    return { x: p.x, z: p.z, y: f.y, air: f.air, land: f.land, pitch: f.pitch };
  };
}
/* psovod po dráze: body, časování [[t, [x,z] | u]] */
function handTrack(ctx, pts, keys) {
  const P = ctx.path(pts), U = mono(keys.map(([t, w]) => [t, Array.isArray(w) ? frac(P, w[0], w[1]) : w]));
  return t => { const p = P.at(U(t)); return { x: p.x, z: p.z }; };
}
/* hladký průběh mezi úrovněmi: [[t, v], ...] s lineárními přechody vyhlazenými smoothstepem */
function steps(keys, ctx) {
  return t => {
    if (t <= keys[0][0]) return keys[0][1];
    for (let i = 1; i < keys.length; i++) if (t <= keys[i][0]) return ctx.lerp(keys[i - 1][1], keys[i][1], ctx.sm(keys[i - 1][0], keys[i][0], t));
    return keys[keys.length - 1][1];
  };
}
const mid = (d, h, k = .5) => ({ x: d.x + (h.x - d.x) * k, z: d.z + (h.z - d.z) * k, y: 0 });
const HIGH = (o = {}) => ({ mode: 'high', dist: 6.8, height: 5.6, fov: 40, lookY: 0, smooth: .1, followY: 0, lookAhead: 0, ...o });

/* ---------- čelo a blind: stejná trasa 1 → 2 → obrat → 3, liší se jen otočením psovoda ---------- */
function crossScene(blind) {
  return {
    cam: HIGH({ az: PI - .25, dist: 5.4, height: 5.4, fov: 42 }),
    build(ctx) {
      const J1 = jumpAt(ctx, -3.4, 1.2, 0, 1, -.9, 1.5), J2 = jumpAt(ctx, 1.0, 1.2, 0, 2, -.9, 1.5), J3 = jumpAt(ctx, 0, -2.4, PI, 3, -.9, 1.5);
      this.dog = dogTrack(ctx, [[-7.4, 1.2], [-3.4, 1.2], [1.0, 1.2], [2.8, 1.2], blind ? [4.8, 1.1] : [4.1, .95], blind ? [6.1, .3] : [5.0, .2], blind ? [6.2, -1.1] : [5.2, -1.0], blind ? [5.2, -2.15] : [4.5, -2.1], [2.8, -2.4], [0, -2.4], [-2.6, -2.4], [-4.6, -2.4]],
        [J1, J2, J3], [[0, 0], [.42, [1.0, 1.2]], [.82, [0, -2.4]], [1, 1]]);
      /* čelo: zpomalí, natočí se čelem k psovi a bokem přejde jeho dráhu; blind: přeběhne šikmo vpřed zády k psovi */
      const hp = blind ? [[-4.6, 3.0], [-1.5, 3.0], [1.8, 2.95], [3.0, 2.25], [3.9, 1.2], [4.3, .3], [3.9, -.4], [2.6, -.7], [-1.5, -.65], [-5, -.65]]
        : [[-4.6, 3.0], [-1.5, 3.0], [2.0, 2.95], [2.75, 2.4], [3.0, 1.2], [2.9, .1], [2.2, -.55], [-1.5, -.65], [-5, -.65]];
      this.hand = handTrack(ctx, hp, blind ? [[0, 0], [.24, [1.8, 2.95]], [.37, [3.9, 1.2]], [.43, [4.3, .3]], [.54, [2.6, -.7]], [1, 1]]
        : [[0, 0], [.24, [2.0, 2.95]], [.35, [3.0, 1.2]], [.41, [2.9, .1]], [.48, [2.2, -.55]], [1, 1]]);
      /* čelo: obrat doleva (k psovi) – od t≈0,29 je čelem k přibíhajícímu psovi, pak běží k 3 */
      this.yaw = blind ? null : mono([[0, 0], [.25, .05], [.31, 1.9], [.36, 2.7], [.44, 3.0], [.5, PI], [1, PI]]);
      this.look = steps(blind ? [[0, .35], [.28, .35], [.33, 0], [.42, 0], [.48, -.9], [.62, -.6], [.7, 0]] : [[0, .35], [.25, .35], [.3, 0]], ctx);
      this.pt = steps([[0, .15], [.08, .75], [.26, .75], [.31, 0], [.46, 0], [.53, .9], [.8, .9], [.88, .15]], ctx);
    },
    at(t, ctx) {
      const d = this.dog(t), h = this.hand(t), look = this.look(t);
      const hand = { x: h.x, z: h.z, point: this.pt(t), pointSide: t < .42 ? 1 : -1 };
      if (this.yaw) hand.yaw = this.yaw(t);
      return { dog: d, hand, focus: mid(d, h, .45), extra: c => lookHandler(c.hand, look) };
    }
  };
}

export const HANDLING = {
  front: crossScene(false),
  blind: crossScene(true),

  /* ---------- záda: psovod pošle psa na 2 a přeběhne za ním na druhou stranu ---------- */
  rear: {
    cam: HIGH({ az: PI, dist: 7, height: 6.2 }),
    build(ctx) {
      const J1 = jumpAt(ctx, -3.6, 1.2, 0, 1, -.9, 1.5), J2 = jumpAt(ctx, 1.0, 1.2, 0, 2, -.9, 1.5), J3 = jumpAt(ctx, 4.6, -2.4, PI / 2, 3, -.9, 1.5);
      this.dog = dogTrack(ctx, [[-6.6, 1.2], [-3.6, 1.2], [1.0, 1.2], [2.8, 1.15], [4.1, .6], [4.6, -.6], [4.6, -2.4], [4.6, -4.4]],
        [J1, J2, J3], [[0, 0], [.46, [1.0, 1.2]], [.84, [4.6, -2.4]], [1, 1]]);
      /* psovod zůstává za psem; dráhu psa přetne až za ním (pes je v tu chvíli nad laťkou 2) */
      this.hand = handTrack(ctx, [[-7.8, 3.0], [-3.4, 2.9], [-1.4, 2.5], [-.7, 1.2], [-.3, -.4], [1.2, -1.0], [2.5, -1.7], [2.8, -2.9], [2.8, -4.2]],
        [[0, 0], [.3, [-3.4, 2.9]], [.42, [-1.4, 2.5]], [.51, [-.7, 1.2]], [.58, [-.3, -.4]], [.66, [1.2, -1.0]], [1, 1]]);
      this.pt = steps([[0, .3], [.12, .8], [.36, 1], [.46, .3], [.52, 0], [.6, .2], [.68, .9], [.86, .9], [.93, .2]], ctx);
      this.look = steps([[0, .3], [.4, .3], [.5, 0], [.58, -.5], [.7, 0]], ctx);
    },
    at(t, ctx) {
      const d = this.dog(t), h = this.hand(t), look = this.look(t);
      return { dog: d, hand: { x: h.x, z: h.z, point: this.pt(t), pointSide: t < .52 ? 1 : -1 }, focus: mid(d, h, .45), extra: c => lookHandler(c.hand, look) };
    }
  },

  /* ---------- otočka vnitřkem: za laťkou kolem křídla k psovodovi ---------- */
  wrap: {
    cam: HIGH({ az: 0, dist: 6.6, height: 5.4 }),
    build(ctx) {
      const J = jumpAt(ctx, 0, 0, 0, 0);
      /* psovod vpravo (+z, blíž ke kameře), pes se za laťkou stočí doprava kolem křídla na straně psovoda */
      this.dog = dogTrack(ctx, [[-6.4, 0], [-3, 0], [0, 0], [1.5, .05], [2.25, .75], [2.15, 1.65], [1.2, 2.05], [-.4, 2.05], [-2.4, 1.95], [-5.2, 1.8]],
        [J], [[0, 0], [.4, [0, 0]], [.6, [2.15, 1.65]], [1, 1]]);
      this.hand = handTrack(ctx, [[-4.6, 3.3], [-1.4, 3.3], [-.5, 3.3], [-.8, 3.28], [-2.4, 3.2], [-5.4, 3.0]],
        [[0, 0], [.36, [-1.4, 3.3]], [.47, [-.5, 3.3]], [.58, [-.8, 3.28]], [1, 1]]);
      this.yaw = mono([[0, 0], [.38, 0], [.48, 1.2], [.58, 2.2], [.68, 2.9], [.74, PI], [1, PI]]);
      this.pt = steps([[0, .2], [.1, .7], [.36, .7], [.45, 0], [.52, .6], [.56, .6], [.66, .1], [.74, .6], [.9, .6], [.96, .2]], ctx);
    },
    at(t, ctx) {
      const d = this.dog(t), h = this.hand(t);
      return { dog: d, hand: { x: h.x, z: h.z, yaw: this.yaw(t), point: this.pt(t), pointSide: t < .45 ? 1 : -1 }, focus: mid(d, h, .4) };
    }
  },

  /* ---------- otočka venkem: za laťkou kolem druhého křídla, od psovoda ---------- */
  spin: {
    cam: HIGH({ az: 0, dist: 6.6, height: 5.6 }),
    build(ctx) {
      const J = jumpAt(ctx, 0, 0, 0, 0);
      this.dog = dogTrack(ctx, [[-6.4, 0], [-3, 0], [0, 0], [1.5, -.05], [2.25, -.8], [2.1, -1.75], [1.0, -2.2], [-.5, -2.0], [-1.7, -1.1], [-2.5, .05], [-3.6, .45], [-5.6, .55]],
        [J], [[0, 0], [.42, [0, 0]], [.62, [2.1, -1.75]], [1, 1]]);
      this.hand = handTrack(ctx, [[-4.4, 1.95], [-1.3, 1.95], [-.5, 1.95], [-.7, 1.95], [-2.4, 1.9], [-5.6, 1.8]],
        [[0, 0], [.38, [-1.3, 1.95]], [.5, [-.5, 1.95]], [.62, [-.7, 1.95]], [1, 1]]);
      this.yaw = mono([[0, 0], [.42, 0], [.52, 1.3], [.62, 2.2], [.72, 2.9], [.78, PI], [1, PI]]);
      this.pt = steps([[0, .2], [.1, .7], [.4, .7], [.47, 0], [.53, .8], [.56, .8], [.68, .2], [.8, .5], [.92, .5], [.97, .2]], ctx);
    },
    at(t, ctx) {
      const d = this.dog(t), h = this.hand(t);
      return { dog: d, hand: { x: h.x, z: h.z, yaw: this.yaw(t), point: this.pt(t), pointSide: t < .47 ? 1 : -1 }, focus: mid(d, h, .4) };
    }
  },

  /* ---------- zadní strana: pes mine laťku, oběhne křídlo a skočí zezadu k psovodovi ---------- */
  backside: {
    cam: HIGH({ az: 0, dist: 5.8, height: 6.0, fov: 42 }),
    build(ctx) {
      const J = jumpAt(ctx, 0, 0, PI, 0);
      this.dog = dogTrack(ctx, [[-7.2, 2.2], [-3.6, 2.2], [-.4, 2.1], [1.4, 1.95], [2.7, 1.3], [3.0, .4], [2.4, .02], [1.4, 0], [0, 0], [-2, 0], [-4.4, 0], [-6.4, 0]],
        [J], [[0, 0], [.45, [1.4, 1.95]], [.64, [0, 0]], [1, 1]]);
      this.hand = handTrack(ctx, [[-6.4, 4.0], [-2.8, 3.9], [-1.2, 3.55], [-1.35, 2.9], [-2.8, 2.3], [-6.2, 2.0]],
        [[0, 0], [.38, [-2.8, 3.9]], [.5, [-1.2, 3.55]], [.62, [-1.35, 2.9]], [1, 1]]);
      this.yaw = mono([[0, 0], [.42, .15], [.52, 1.3], [.62, 2.4], [.7, 3.0], [.76, PI], [1, PI]]);
      this.pt = steps([[0, .2], [.12, .5], [.3, .9], [.46, .9], [.52, .3], [.58, .8], [.72, .8], [.8, .3], [.9, .5]], ctx);
    },
    at(t, ctx) {
      const d = this.dog(t), h = this.hand(t);
      const f = mid(d, h, .4); f.z = Math.min(f.z, 2.2) - .4;
      return { dog: d, hand: { x: h.x, z: h.z, yaw: this.yaw(t), point: this.pt(t), pointSide: t < .55 ? 1 : -1 }, focus: f };
    }
  },

  /* ---------- start: pes sedí za 1, psovod odejde, otočí se, „Hop!“, pes vyběhne ---------- */
  start: {
    cam: { mode: 'high', dist: 7.4, height: 4.2, fov: 40, az: .15, lookY: .2, smooth: .14, followY: 0, lookAhead: 0 },
    build(ctx) {
      const J = [jumpAt(ctx, -3, 0, 0, 1, -.9, -1.5), jumpAt(ctx, .9, 0, 0, 2, -.9, -1.5), jumpAt(ctx, 4.8, 0, 0, 3, -.9, -1.5)];
      this.dog = dogTrack(ctx, [[-5.6, 0], [-3, 0], [.9, 0], [4.8, 0], [7.6, 0]], J, [[0, 0], [.4, 0], [.43, .012], [1, 1]]);
      this.hand = handTrack(ctx, [[-4.95, 1.2], [-3.9, 1.65], [-2.2, 1.85], [-.8, 1.85], [3, 1.85], [7.2, 1.8]], [[0, 0], [.06, 0], [.3, [-.8, 1.85]], [.43, [-.8, 1.85]], [.55, [.2, 1.85]], [1, 1]]);
      this.yaw = mono([[0, 0], [.28, 0], [.33, 2.6], [.36, 2.8], [.42, 2.8], [.47, .2], [.5, 0], [1, 0]]);
      /* bublina „Hop!“ nad psovodem */
      const c = document.createElement('canvas'); c.width = 256; c.height = 128;
      const x = c.getContext('2d'); x.fillStyle = 'rgba(255,255,255,.94)'; x.beginPath(); x.roundRect ? x.roundRect(8, 8, 240, 96, 40) : x.rect(8, 8, 240, 96); x.fill();
      x.beginPath(); x.moveTo(110, 100); x.lineTo(128, 124); x.lineTo(146, 100); x.fill();
      x.fillStyle = '#1f6b45'; x.font = '800 64px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('Hop!', 128, 58);
      const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace;
      this.bub = new THREE.Sprite(new THREE.SpriteMaterial({ map: tx, depthTest: false, transparent: true })); this.bub.scale.set(.9, .45, 1); this.bub.renderOrder = 10;
      this.bub.visible = false; ctx.scene.add(this.bub);
      this.pt = steps([[0, 0], [.34, 0], [.37, 1], [.42, 1], [.46, 0], [.5, 0], [.56, .6], [.9, .6], [.96, 0]], ctx);
    },
    at(t, ctx) {
      const d = this.dog(t), h = this.hand(t), wait = t < .4, sit = 1 - ctx.sm(.38, .41, t);
      const bub = this.bub, show = t > .36 && t < .47, hx = h.x, hz = h.z;
      return {
        dog: { ...d, still: wait, sit },
        hand: { x: h.x, z: h.z, yaw: this.yaw(t), still: t < .06 || (t > .33 && t < .43), point: this.pt(t), pointSide: t < .5 ? -1 : 1 },
        focus: { x: ctx.lerp(-2.2, 1.6, ctx.sm(.2, .9, t)) + .15 * d.x, z: .3, y: 0 },
        extra: () => { bub.visible = show; bub.position.set(hx, 2.15, hz); }
      };
    }
  }
};
