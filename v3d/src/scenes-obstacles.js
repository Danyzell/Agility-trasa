/* Scény překážek: skok, tunel, slalom, A-rampa, kladina, houpačka, kruh, skok daleký.
   Časování odpovídá titulkům v TOPICS (index.html): t ∈ [0,1) je poměrná část smyčky. */

/* monotónní kubická interpolace klíčů [[t, v], ...] (bez překmitů; stejné hodnoty = stání) */
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
/* poloha x(t) s rovnoměrným během a zpomalením (zpomalený záběr) kolem tc */
function slowmo(x0, x1, tc, w, amount) {
  const K = 400, acc = [0];
  for (let i = 1; i <= K; i++) { const t = (i - .5) / K; acc.push(acc[i - 1] + 1 - amount * Math.exp(-(((t - tc) / w) ** 2))); }
  const tot = acc[K];
  return t => { const f = Math.max(0, Math.min(1, t)) * K, i = Math.min(K - 1, Math.floor(f)); return x0 + (x1 - x0) * (acc[i] + (acc[i + 1] - acc[i]) * (f - i)) / tot; };
}
/* pes na povrchu (rampa, deska): výška a sklon podle bodu pod předníma a zadníma nohama */
function onSurf(surf, x, half = .27) {
  const a = surf(x - half), b = surf(x + half);
  return { y: (a + b) / 2, pitch: Math.atan2(b - a, 2 * half) };
}
/* choreografie skoku (z videa): x vůči překážce, odraz TO, doskok LD, výška oblouku TOP */
function flight(x, TO, LD, TOP, ctx) {
  const { sm, bump } = ctx, XC = (TO + LD) / 2, HW = (LD - TO) / 2;
  const inAir = x > TO && x < LD, y = inAir ? TOP * (1 - ((x - XC) / HW) ** 2) : 0;
  const crouch = -.05 * bump(x, TO - .35, .35);
  const air = sm(TO - .5, TO + .1, x) * (1 - sm(LD - .9, LD - .2, x)), land = sm(LD - 1.1, LD - .4, x) * (1 - sm(LD - .05, LD + .55, x));
  const k = TOP / .5;
  const pitch = (.36 * bump(x, TO + .15, .45) - .32 * bump(x, LD - .3, .45)) * Math.min(1, k * 1.2) + .05 * bump(x, TO - .75, .3);
  return { y: Math.max(0, y) + crouch, air, land, pitch };
}
const sign = (ctx, n, x, z, ry = 0) => { const s = ctx.ob.numSign(n); s.position.set(x, 0, z); s.rotation.y = ry; ctx.scene.add(s); };

export const OBSTACLES = {
  /* ---------- skok ---------- */
  jump: {
    cam: { dist: 4.8, height: 1.3, lookAhead: .5, az: .16, smooth: .06 },
    build(ctx) { ctx.scene.add(ctx.ob.jump({ h: .55 })); sign(ctx, 3, -.5, -1.35, .5); this.X = slowmo(-8.5, 7.5, .5, .1, .55); },
    at(t, ctx) {
      const x = this.X(t), f = flight(x, -1.45, 1.35, .47, ctx);
      return {
        dog: { x, z: 0, y: f.y, air: f.air, land: f.land, pitch: f.pitch },
        hand: { x: ctx.lerp(-6.2, 3.4, t) + .5 * Math.sin(t * 3), z: -2.6, point: ctx.sm(.4, .48, t) * (1 - ctx.sm(.85, .95, t)), pointSide: -1 }
      };
    }
  },

  /* ---------- tunel do oblouku (U), psovod přebíhá k výstupu ---------- */
  tunnel: {
    cam: { mode: 'high', dist: 6.6, height: 4.1, fov: 38, lookY: .1, smooth: .12, followY: 0 },
    build(ctx) {
      const R = 1.6, tp = [[-R, .7], [-R, .2]];
      for (let i = 0; i <= 12; i++) { const a = Math.PI - i / 12 * Math.PI; tp.push([R * Math.cos(a), -R * Math.sin(a) * 1.05 + .0]); }
      tp.push([R, .2], [R, .7]);
      const tu = ctx.ob.tunnel({ points: tp, color: '#2f6fd0' }); ctx.scene.add(tu);
      sign(ctx, 5, -2.35, .75, .3);
      /* dráha psa: náběh → tunel → výběh k psovodovi → dál */
      const pre = [[-3.6, 4.2], [-2.6, 2.6], [-1.75, 1.3], [-R, .7]], post = [[R, 1.3], [1.95, 2.15], [2.9, 2.65], [4.6, 2.95], [6.8, 3.0]];
      const all = pre.concat(tp.slice(1, -1)).concat([[R, .7]]).concat(post);
      this.P = ctx.path(all);
      /* délky úseků: vstup a výstup tunelu */
      const L = this.P.length; let acc = 0, s0 = 0, s1 = 0;
      for (let i = 1; i < this.P.pts.length; i++) {
        const a = this.P.pts[i - 1], b = this.P.pts[i]; acc += Math.hypot(b.x - a.x, b.z - a.z);
        if (!s0 && Math.hypot(b.x + R, b.z - .7) < .03) s0 = acc;
        if (Math.hypot(b.x - R, b.z - .7) < .03) s1 = acc;
      }
      this.in0 = s0 / L; this.in1 = s1 / L; this.len = L;
      /* dráha psa: v tunelu rychle, po výběhu zpomalí k psovodovi */
      this.U = mono([[0, 0], [.14, this.in0], [.68, this.in1], [.78, this.in1 + 1.3 / L], [1, 1]]);
      this.H = ctx.path([[-2.8, 2.6], [-2.2, 1.9], [-.8, 1.6], [.9, 1.7], [2.5, 1.3], [3.1, 1.1], [4.1, 1.7], [6.8, 2.3]]);
      let fw = 0, bd = 1e9, ha = 0; this.H.pts.forEach((q, i) => { if (i) ha += Math.hypot(q.x - this.H.pts[i - 1].x, q.z - this.H.pts[i - 1].z); const d = Math.hypot(q.x - 3.1, q.z - 1.1); if (d < bd) { bd = d; fw = ha / this.H.length; } });
      this.HU = mono([[0, 0], [.12, .06], [.5, fw - .03], [.58, fw], [.72, fw + .004], [.8, fw + .07], [1, 1]]);
    },
    at(t, ctx) {
      const u = this.U(t), p = this.P.at(u), s = u * this.len, a = this.in0 * this.len, b = this.in1 * this.len;
      /* v tunelu pes skloní hlavu (ponoří se), úplně uvnitř je skrytý */
      const depth = Math.min(s - a, b - s), inside = depth > 0;
      const dog = { x: p.x, z: p.z, y: inside ? -.13 * ctx.ss(depth / .35 + .3) : 0, hidden: depth > .9 };
      const hu = this.HU(t), h = this.H.at(hu);
      /* psovod u výstupu čeká čelem k otvoru, ukazuje psovi kudy */
      const wait = ctx.sm(.5, .56, t) * (1 - ctx.sm(.7, .76, t));
      const hand = { x: h.x, z: h.z, point: .8 * (1 - ctx.sm(.12, .2, t)) + .8 * ctx.sm(.64, .7, t) * (1 - ctx.sm(.84, .9, t)), pointSide: t < .3 ? 1 : 1 };
      if (wait > .5) hand.yaw = 2.88;   // čelem k výstupu tunelu
      /* ohnisko: celý oblouk tunelu, na konci se posune za dvojicí */
      const fk = ctx.sm(.72, .95, t);
      return { dog, hand, focus: { x: ctx.lerp(.2, 3.8, fk) + p.x * .1, z: ctx.lerp(.3, 2.2, fk), y: 0 } };
    }
  },

  /* ---------- slalom: vstup první tyčkou vlevo, 12 tyček ---------- */
  weave: {
    cam: { dist: 5.2, height: 2.3, lookAhead: .5, az: .12, lookY: .3, fov: 36, smooth: .07 },
    build(ctx) {
      const w = ctx.ob.weave(); w.position.x = -3.3; ctx.scene.add(w); sign(ctx, 7, -4.1, -.6, .4);
      this.x0 = -3.3; this.sp = .6;
      this.X = mono([[0, -8.2], [.2, -3.75], [.23, -3.3 - .02], [.75, 3.3 + .02], [.79, 3.8], [1, 7.4]]);
    },
    at(t, ctx) {
      const x = this.X(t), a = .21, x0 = this.x0, x1 = x0 + 11 * this.sp;
      /* sinusovka kolem tyček: u tyčky 1 je pes na straně kamery (+z) → tyčka je mu po levé straně */
      const wv = a * Math.cos(Math.PI * (x - x0) / this.sp);
      const k = ctx.sm(x0 - .75, x0 - .05, x) * (1 - ctx.sm(x1 + .05, x1 + .75, x));
      const appr = x < x0 ? ctx.lerp(.55, a, ctx.sm(x0 - 3.5, x0 - .3, x)) : ctx.lerp(-a, .1, ctx.sm(x1, x1 + 1.2, x));
      const z = ctx.lerp(appr, wv, k);
      return {
        dog: { x, z },
        hand: { x: ctx.lerp(-7.2, 5, t) + .3 * Math.sin(t * 5), z: -1.45, point: .5 * (1 - ctx.sm(.3, .4, t)) + .5 * ctx.sm(.72, .8, t), pointSide: -1 }
      };
    }
  },

  /* ---------- A-rampa ---------- */
  aframe: {
    cam: { dist: 6, height: 2.1, lookAhead: .4, az: .2, lookY: .5, fov: 36, smooth: .08, followY: .5 },
    build(ctx) {
      const a = ctx.ob.aframe(); ctx.scene.add(a); this.A = a.userData; sign(ctx, 4, -3.2, -1, .4);
      const h = this.A.half, stopX = h + .12 - .28;   // přední tlapky 12 cm za koncem rampy
      this.stopX = stopX;
      this.X = mono([[0, -7.4], [.2, -h - .2], [.44, 0], [.62, h - 1.0], [.7, stopX], [.9, stopX], [.93, stopX + .4], [1, stopX + 3.4]]);
    },
    at(t, ctx) {
      const x = this.X(t), s = onSurf(this.A.surf, x), still = ctx.sm(.69, .71, t) * (1 - ctx.sm(.89, .91, t));
      /* 2on2off: záď v zóně, přední tlapky na zemi, hlava dolů */
      return {
        dog: { x, z: 0, y: s.y + .03 * still, slope: s.pitch * (1 - .5 * still), pitch: s.pitch * .5 * still, still },   // v postoji 2on2off přední nohy svisleji
        hand: { x: ctx.lerp(-6.5, 1.2, ctx.sm(0, .7, t)) + ctx.lerp(0, 4.5, ctx.sm(.9, 1, t)), z: -1.9, still: t > .72 && t < .9 ? 1 : 0, point: .6 * (1 - ctx.sm(.66, .7, t)) + .7 * ctx.sm(.9, .93, t), pointSide: -1 }
      };
    }
  },

  /* ---------- kladina ---------- */
  dogwalk: {
    cam: { dist: 6.4, height: 1.4, lookAhead: .5, az: .22, lookY: .55, fov: 36, smooth: .08, followY: .6 },
    build(ctx) {
      const d = ctx.ob.dogwalk(); ctx.scene.add(d); this.W = d.userData; sign(ctx, 6, -6, -.8, .4);
      const T = this.W.total, h = this.W.L / 2, stopX = T + .12 - .28;
      this.X = mono([[0, -T - 3.2], [.08, -T + .1], [.3, -h], [.52, h], [.62, T - .8], [.67, stopX], [.84, stopX], [.87, stopX + .4], [1, stopX + 4]]);
    },
    at(t, ctx) {
      const x = this.X(t), s = onSurf(this.W.surf, x), still = ctx.sm(.66, .68, t) * (1 - ctx.sm(.83, .85, t));
      return {
        dog: { x, z: 0, y: s.y + .03 * still, slope: s.pitch * (1 - .5 * still), pitch: s.pitch * .5 * still, still },   // v postoji 2on2off přední nohy svisleji
        hand: { x: ctx.lerp(-8.4, 4.3, ctx.sm(0, .68, t)) + ctx.lerp(0, 4, ctx.sm(.84, 1, t)), z: -1.25, still: t > .7 && t < .84 ? 1 : 0, point: .5 * (1 - ctx.sm(.62, .68, t)) + .8 * ctx.sm(.84, .87, t), pointSide: -1 }
      };
    }
  },

  /* ---------- houpačka: překlopení za osou, čekání na dotyk se zemí ---------- */
  seesaw: {
    cam: { dist: 5.6, height: 1.3, lookAhead: .3, az: .2, lookY: .5, fov: 36, smooth: .08, followY: .5 },
    build(ctx) {
      const g = ctx.ob.seesaw(); ctx.scene.add(g); this.S = g.userData; sign(ctx, 8, -2.6, -.8, .4);
      const L = this.S.L;
      /* poloha psa podél desky (od středu) */
      this.Sd = mono([[0, -L / 2 - 4.2], [.12, -L / 2 + .05], [.36, .2], [.52, .55], [.61, L / 2 - .3], [.8, L / 2 - .3], [.84, L / 2 + .35], [1, L / 2 + 4.2]]);
      /* sklon desky: + = pravý konec nahoře; překlopí se za osou, dosedne kolem t = 0,62 a trochu pruží */
      const m = this.S.maxT;
      this.Tl = t => t < .36 ? m : t < .62 ? m - 2 * m * ctx.ss((t - .36) / .26) ** 1.4 : -m + .06 * m * Math.sin((t - .62) / .05 * Math.PI) * Math.exp(-(t - .62) / .02) * (t < .68 ? 1 : 0);
    },
    at(t, ctx) {
      const tl = this.Tl(t); this.S.setTilt(tl);
      const s = this.Sd(t), S = this.S, c = Math.cos(tl), half = S.L / 2 * c;
      /* povrch: deska (kde je), jinak zem */
      const surf = x => Math.abs(x) <= half ? Math.max(0, S.H + x * Math.tan(tl) + S.th / c) : 0;
      const x = Math.abs(s) <= S.L / 2 ? s * c : (s < 0 ? -half + (s + S.L / 2) : half + (s - S.L / 2));
      const o = onSurf(surf, x);
      /* seskok z konce po dotyku desky */
      const hop = ctx.sm(.8, .83, t) * (1 - ctx.sm(.84, .87, t));
      const still = ctx.sm(.6, .62, t) * (1 - ctx.sm(.79, .8, t)) + ctx.sm(.36, .4, t) * (1 - ctx.sm(.48, .52, t)) * .6;
      return {
        dog: { x, z: 0, y: o.y + hop * .12, slope: o.pitch * (1 - hop), still, air: hop * .6 },
        hand: { x: ctx.lerp(-5.6, 2.3, ctx.sm(0, .62, t)) + ctx.lerp(0, 3.6, ctx.sm(.82, 1, t)), z: -1.3, still: t > .64 && t < .82 ? 1 : 0, point: .6 * ctx.sm(.8, .84, t), pointSide: -1 }
      };
    }
  },

  /* ---------- kruh ---------- */
  tire: {
    cam: { dist: 4.8, height: 1.35, lookAhead: .4, az: .55, lookY: .6, smooth: .06 },
    build(ctx) { const g = ctx.ob.tire({ h: .8 }); ctx.scene.add(g); sign(ctx, 2, -.5, -1.25, .5); this.X = slowmo(-8.5, 7.5, .5, .1, .5); },
    at(t, ctx) {
      const x = this.X(t), f = flight(x, -1.35, 1.35, .38, ctx);
      return {
        dog: { x, z: 0, y: f.y, air: f.air, land: f.land, pitch: f.pitch },
        hand: { x: ctx.lerp(-6, 3.6, t), z: -2.2, point: ctx.sm(.35, .45, t) * (1 - ctx.sm(.85, .95, t)), pointSide: -1 }
      };
    }
  },

  /* ---------- skok daleký ---------- */
  longjump: {
    cam: { dist: 4.8, height: 1.6, lookAhead: .5, az: .22, smooth: .06 },
    build(ctx) { const g = ctx.ob.longjump({ n: 4, len: 1.4 }); ctx.scene.add(g); sign(ctx, 9, -1, -1.2, .5); this.X = slowmo(-8.5, 7.5, .5, .1, .5); },
    at(t, ctx) {
      const x = this.X(t), f = flight(x, -1.45, 1.55, .36, ctx);
      return {
        dog: { x, z: 0, y: f.y, air: f.air, land: f.land, pitch: f.pitch * .8 },
        hand: { x: ctx.lerp(-6, 3.6, t), z: -2.1, point: ctx.sm(.35, .45, t) * (1 - ctx.sm(.85, .95, t)), pointSide: -1 }
      };
    }
  }
};
