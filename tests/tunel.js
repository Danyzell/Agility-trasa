/* Délka tunelu 2–6 m (výpočty, uložení, kontrola FCI) a přepínač 2D / 3D v Plánu */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async () => { await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  /* parkur s rovným tunelem uprostřed trasy */
  const tunCourse = () => ev(() => {
    const L = listFor('A1'), c = L.find(x => x.route.some(id => { const o = x.obs.find(q => q.id === id); return o && o.type === 'tunnel' && !o.bend; }));
    S.meta.dirty = false; loadCourse(c, true); const t = S.obs.find(o => o.type === 'tunnel' && !o.bend && S.route.indexOf(o.id) >= 0); return t.id;
  });

  await step('délka tunelu ve výpočtech', async () => {
    await fresh(); const id = await tunCourse();
    const r = await ev(id => {
      const o = getO(id), len0 = calc().total, e0 = ends(o), d0 = Math.hypot(e0.A.x - e0.B.x, e0.A.y - e0.B.y);
      o.len = 6; const len6 = calc().total, e6 = ends(o), d6 = Math.hypot(e6.A.x - e6.B.x, e6.A.y - e6.B.y);
      o.len = 2; const e2 = ends(o), d2 = Math.hypot(e2.A.x - e2.B.x, e2.A.y - e2.B.y);
      delete o.len; return { d0, d6, d2, len0, len6 };
    }, id);
    ok(Math.abs(r.d0 - 4.5) < .01 && Math.abs(r.d6 - 6) < .01 && Math.abs(r.d2 - 2) < .01, 'konce tunelu neodpovídají délce: ' + JSON.stringify(r));
    ok(r.len6 > r.len0 - .01, 'delší tunel nezměnil trasu: ' + JSON.stringify(r));
    /* do oblouku: vlastní délka přebije výchozí */
    ok(await ev(() => Math.abs(tunLen({ type: 'tunnel', bend: 90, len: 3 }) - 3) < 1e-9 && Math.abs(tunLen({ type: 'tunnel', bend: 180 }) - 6) < 1e-9), 'délka tunelu do oblouku');
  });

  await step('výběr délky u tunelu', async () => {
    await fresh(); const id = await tunCourse();
    await page.click('#mBuild'); await ev(id => { sel = id; render(); ui(); }, id);
    await page.waitForTimeout(150);
    ok(await page.isVisible('#lenSel') && await page.inputValue('#lenSel') === '4.5', 'u tunelu chybí výběr délky (4,5 m)');
    ok(await ev(() => [...$('lenSel').options].map(o => o.value).join() === '2,3,4,4.5,5,6'), 'nabídka délek 2–6 m');
    await page.selectOption('#lenSel', '6'); await page.waitForTimeout(100);
    ok(await ev(id => getO(id).len === 6 && S.meta.dirty, id), 'výběr 6 m se neuložil do tunelu');
    /* přežije uložení a nové načtení (sanitace dat) */
    await page.reload(); await page.waitForTimeout(400);
    ok(await ev(id => getO(id) && getO(id).len === 6, id), 'délka tunelu se po načtení ztratila');
    ok(await ev(() => { const c = courseClean({ W: 40, H: 20, obs: [{ id: 1, type: 'tunnel', x: 5, y: 5, rot: 0, len: 9 }, { id: 2, type: 'tunnel', x: 15, y: 5, rot: 0, len: 2.6 }, { id: 3, type: 'jump', x: 25, y: 5, rot: 0, len: 4 }], route: [1, 2, 3] }); return !('len' in c.obs[0]) && c.obs[1].len === 2.5 && !('len' in c.obs[2]); }), 'neplatná délka tunelu prošla kontrolou dat');
  });

  await step('nový tunel má 5 m', async () => {
    await fresh(); await page.click('#mBuild'); await page.click('#zOut'); await page.click('#zOut');
    await page.click('#palette [data-type="tunnel"]');
    const n0 = await ev(() => S.obs.length);
    /* volné místo daleko od ostatních překážek */
    const spot = await ev(() => { let best = null, bd = -1; for (let x = 3; x < S.W - 2; x++) for (let y = 3; y < S.H - 2; y++) { const d = Math.min(...S.obs.map(o => Math.hypot(o.x - x, o.y - y))); if (d > bd) { bd = d; best = [x, y]; } } return best; });
    await T.tapField(spot[0], spot[1]); await page.waitForTimeout(150);
    const o = await ev(() => S.obs[S.obs.length - 1]);
    ok(await ev(() => S.obs.length) === n0 + 1 && o.type === 'tunnel' && o.len === 5, 'nový tunel nemá 5 m: ' + JSON.stringify(o));
  });

  await step('kontrola FCI: tunel 3–6 m', async () => {
    await fresh(); const id = await tunCourse();
    const has = () => ev(() => fciCheck(S.obs, S.route, S.turns).some(r => !r.ok && /kratší než 3 m/.test(r.t)));
    ok(!(await has()), 'tunel 4,5 m hlášen jako krátký');
    await ev(id => { getO(id).len = 2; }, id);
    ok(await has(), 'tunel 2 m (jen trénink) kontrola FCI neohlásila');
  });

  await step('přepínač 2D / 3D', async () => {
    await fresh(); await tunCourse();
    ok(await page.isVisible('#dimBtn'), 'v Plánu chybí tlačítko 3D');
    await page.click('#dimBtn');
    await page.waitForFunction(() => !$('ov3d').hidden, null, { timeout: 15000 });
    await page.waitForTimeout(500);
    ok(await ev(() => V3.on === false && $('p3play').textContent === 'Přehrát'), '3D z přepínače se má otevřít zastavené');
    /* na 360 px má lišta 3D tři řádky: stav trasy a 2D | 3D, Přehrát a rychlost, pohledy */
    await page.setViewportSize({ width: 360, height: 740 }); await page.waitForTimeout(150);
    const bar = await ev(() => { const r = s => document.querySelector(s).getBoundingClientRect(); return { h: r('.ov3d-bar').height, info: r('#p3info').top, dim: r('#p3dim').top, play: r('#p3play').top, sp: r('#p3speed').top, view: r('#p3view').top, sw: document.documentElement.scrollWidth }; });
    ok(bar.h <= 200 && bar.dim < bar.play && Math.abs(bar.play - bar.sp) < 8 && bar.view > bar.play && bar.sw <= 360, 'lišta 3D na 360 px: ' + JSON.stringify(bar));
    await page.setViewportSize({ width: 390, height: 844 });
    await page.click('#p3dim [data-d="2"]'); await page.waitForTimeout(150);
    ok(await ev(() => $('ov3d').hidden && !C3.api), '2D nezavřelo 3D zobrazení');
    /* při tréninku paměti 3D schované (prozradilo by čísla překážek), po ukončení zase vidět */
    await ev(() => { mode = 'view'; setPanel('quiz'); });
    ok(await page.isHidden('#dimBtn'), 'tlačítko 3D je vidět při tréninku paměti');
    await ev(() => setPanel('quiz'));
    ok(await page.isVisible('#dimBtn'), 'tlačítko 3D se po tréninku paměti neukázalo');
    /* 3D: tunel v 3D má zvolenou délku */
    const L = await ev(() => { const o = S.obs.find(q => q.type === 'tunnel' && !q.bend); o.len = 6; const t = course3dSpec().obs.find(q => q.type === 'tunnel' && !getO(S.obs.find(z => z.type === 'tunnel' && !z.bend).id).bend && q.x === o.x && q.y === o.y).tunnel; return Math.hypot(t[0][0] - t[t.length - 1][0], t[0][1] - t[t.length - 1][1]); });
    ok(Math.abs(L - 6) < .05, '3D tunel nemá zvolenou délku: ' + L);
  });

  await step('AR na place', async () => {
    await fresh(); await tunCourse();
    /* bez WebXR tlačítko AR není; s podporou (podstrčené navigator.xr) se ukáže a nezdařený start AR se uklidí */
    await ev(() => { window.__xr = []; Object.defineProperty(navigator, 'xr', { configurable: true, value: { isSessionSupported: m => Promise.resolve(m === 'immersive-ar'), requestSession: (m, o) => { window.__xr.push([m, o.requiredFeatures, !!(o.domOverlay && o.domOverlay.root)]); return Promise.reject(new Error('NotSupported')); } } }); });
    /* na plánku je tlačítko AR hned vidět (jen kde AR jde a parkur má trasu) */
    ok(!(await page.isVisible('#arBtn')), 'tlačítko AR bez podpory WebXR');
    await ev(() => { AR.ok = true; ui(); });
    ok(await page.isVisible('#arBtn'), 'na plánku chybí tlačítko AR na place');
    await ev(() => open3d(false));
    const gl = await page.waitForFunction(() => C3.api, null, { timeout: 15000 }).then(() => true, () => false);
    if (!gl) return;   /* bez WebGL se 3D (a AR) netestuje */
    await page.waitForTimeout(200);
    T.ok(await page.isVisible('#p3ar'), 's podporou WebXR chybí tlačítko AR');
    await page.click('#p3ar'); await page.waitForTimeout(300);
    const r = await ev(() => ({ calls: window.__xr, hidden: $('arUi').hidden, toast: $('toast').textContent }));
    ok(r.calls.length === 1 && r.calls[0][0] === 'immersive-ar' && r.calls[0][1].includes('hit-test') && r.calls[0][2], 'AR se nespustilo se správnými požadavky: ' + JSON.stringify(r.calls));
    ok(r.hidden && /AR se nepodařilo/.test(r.toast), 'nezdařené AR po sobě neuklidilo: ' + JSON.stringify(r));
    await ev(() => close3d());
  });

  await step('AR: položení, rohy a doladění', async () => {
    await fresh(); await tunCourse();
    /* výpočty položení (bez WebXR): rohy, model na stole, kompas, posun vůči telefonu */
    const m = await ev(() => v3dLoad().then(M => {
      const A = M.arMath, a = { x: 1, y: 0, z: 2 }, b = { x: 1 + 40 * Math.cos(.5), y: 0, z: 2 - 40 * Math.sin(.5) };
      const yaw = A.cornerYaw(a, b), st = { x: 3, z: 7 }, k = 1, root = A.rootAt(a, { x: -st.x, y: 0, z: -st.z }, yaw, k);
      /* bod plánu (px, pz) ve světě: root + otočení o yaw (souřadnice kolem startu) */
      const w = (px, pz) => { const r = A.rot((px - st.x) * k, (pz - st.z) * k, yaw); return { x: root.x + r.x, z: root.z + r.z }; };
      const c0 = w(0, 0), c1 = w(40, 0), c2 = w(0, 20);
      const my = A.modelYaw({ x: 0, z: -1 }), mx = A.rot(1, 0, my), mz = A.rot(0, 1, my);
      const ay = A.azYaw({ x: 0, z: -1 }, 90, 0), ax = A.rot(1, 0, ay);
      const n1 = A.nudge({ x: 0, z: -1 }, 1, 0, .25), n2 = A.nudge({ x: 0, z: -1 }, 0, 1, .25);
      /* 3.5.3 podle dvou překážek: plán posunutý a otočený o 0,7 rad; po položení musí překážka B ležet na zaměřeném bodě B */
      const y0 = .7, wp = p => { const r = A.rot(p.x, p.z, y0); return { x: 3 + r.x, z: -2 + r.z }; }, va = { x: 5, z: 4 }, vb = { x: 25, z: 14 }, PA = wp(va), PB = wp(vb);
      const py = A.pairYaw(PA, PB, va, vb), s0 = { x: 2, z: 10 }, pr = A.rootAt({ x: PA.x, y: 0, z: PA.z }, { x: va.x - s0.x, z: va.z - s0.z }, py, 1);
      const B2 = (() => { const r = A.rot(vb.x - s0.x, vb.z - s0.z, py); return { x: pr.x + r.x, z: pr.z + r.z }; })();
      const J = (type, x, y, nums) => ({ type, x, y, rot: 0, nums });
      const pk = A.pickPair([J('tunnel', 2, 2, [1]), J('jump', 5, 5, [2]), J('jump', 8, 5, [3]), J('weave', 20, 15, [4]), J('jump', 35, 5, [5, 9]), J('jump', 30, 6, [6]), J('aframe', 38, 18, [7])]);
      const pk2 = A.pickPair([J('aframe', 5, 5, [1]), J('dogwalk', 20, 10, [2]), J('tunnel', 30, 5, [3])]), pk3 = A.pickPair([J('jump', 5, 5, [1]), J('tunnel', 30, 5, [2])]);
      /* skoky blíž než 10 m: radši i zóny; pod 3 m (klepnutí blíž než 2 m se odmítá) vůbec */
      const pk4 = A.pickPair([J('jump', 5, 5, [1]), J('jump', 6.5, 5, [2])]), pk5 = A.pickPair([J('jump', 5, 5, [1]), J('jump', 7, 6, [2]), J('aframe', 30, 15, [3])]);
      /* od startu: překážka 1 od startu míří od telefonu (směr pohledu po zemi) */
      const aw = A.awayYaw({ x: .6, z: -.8 }, { x: 0, z: 5 }), awv = A.rot(0, 1, aw);
      return { yaw, c0, c1, c2, mx, mz, ax, n1, n2, py: py - y0, B2, PB, pk: pk && [pk.na, pk.nb, Math.round(pk.d)], pk2: pk2 && [pk2.na, pk2.nb], pk3, pk4, pk5: pk5 && [pk5.na, pk5.nb], awv };
    }));
    const near = (p, x, z) => Math.abs(p.x - x) < 1e-9 && Math.abs(p.z - z) < 1e-9;
    ok(Math.abs(m.yaw - .5) < 1e-9 && near(m.c0, 1, 2) && near(m.c1, 1 + 40 * Math.cos(.5), 2 - 40 * Math.sin(.5)), 'rohy plánu neleží na zaměřených rozích: ' + JSON.stringify(m));
    ok(Math.abs(Math.hypot(m.c2.x - 1, m.c2.z - 2) - 20) < 1e-9 && (m.c1.x - 1) * (m.c2.z - 2) - (m.c1.z - 2) * (m.c2.x - 1) > 0, 'plán je podle rohů zrcadlově: ' + JSON.stringify(m));
    ok(near(m.mx, 1, 0) && near(m.mz, 0, 1), 'model na stole není jako mapa (x doprava, y k telefonu): ' + JSON.stringify(m));
    ok(near(m.ax, 1, 0), 'kolbiště na východ při pohledu na sever nemíří doprava: ' + JSON.stringify(m));
    ok(near(m.n1, .25, 0) && near(m.n2, 0, -.25), 'posun vůči telefonu: ' + JSON.stringify(m));
    ok(Math.abs(m.py) < 1e-9 && near(m.B2, m.PB.x, m.PB.z), 'podle dvou překážek neleží druhá překážka na zaměřeném bodě: ' + JSON.stringify(m));
    ok(JSON.stringify(m.pk) === '[2,5,30]' && JSON.stringify(m.pk2) === '[1,2]' && m.pk3 === null, 'výběr dvou překážek (bez tunelu, co nejdál a co nejdřív na trase): ' + JSON.stringify([m.pk, m.pk2, m.pk3]));
    ok(m.pk4 === null && JSON.stringify(m.pk5) === '[1,3]', 'dvě překážky moc blízko u sebe: ' + JSON.stringify([m.pk4, m.pk5]));
    ok(near(m.awv, .6, -.8), 'od startu: překážka 1 nemíří od telefonu: ' + JSON.stringify(m.awv));
    /* ovládání v aplikaci s podstrčeným AR: tlačítka volají api, nápovědy a doladění */
    await ev(() => {
      window.__ar = { calls: [], placed: false };
      /* poloha: watchPosition bez odpovědi (měření test podstrčí do AR.geo.sm), ať ji prohlížeč v testu nezamítne */
      Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { watchPosition() { return 1; }, clearWatch() { }, getCurrentPosition() { } } });
      const api = { replace() { __ar.calls.push('replace'); }, corners() { __ar.calls.push('corners'); return true; }, rotate(d) { __ar.calls.push('rot' + d); },
        pair() { __ar.calls.push('pair'); return true; }, gps(u) { __ar.calls.push('gps'); __ar.u = u; return true; }, foot(on) { __ar.calls.push('foot' + on); return on; },
        hint(s, info) { __ar.calls.push('hint:' + s); __ar.cb.onState(s, info); },
        nudge(x, z) { __ar.calls.push('mv' + x + ',' + z); }, setScale(md) { __ar.calls.push('scale' + md); }, play() { return true; },
        end() { __ar.calls.push('end'); __ar.cb.onEnd(); }, get placed() { return __ar.placed; }, get length() { return 10; } };
      ringsPut([{ id: 'ra', name: 'K', lat: 50.08, lng: 14.42, acc: 3, az: 100, azErr: 2, azT: 1, W: 40, H: 20, cid: S.meta.id, at: 1 }]);
      return v3dLoad().then(M => { V3D.m = Object.assign({}, M, { startAR(ui, sp, cb) { __ar.sp = sp; __ar.cb = cb; return Promise.resolve(api); } }); AR.ql = false; });
    });
    await ev(() => arStart()); await page.waitForTimeout(100);
    const vis = a => '!' + a + ':' + !$('arUi').querySelector('[data-ar="' + a + '"]').hidden;
    const s0 = await ev(() => ({ ui: !$('arUi').hidden, hint: $('arHint').textContent, az: __ar.sp.az, mag: ringAzMag(ringFor(S.meta.id)), fine: $('arFine').hidden, cor: !$('arUi').querySelector('[data-ar="corners"]').hidden,
      pair: !$('arUi').querySelector('[data-ar="pair"]').hidden, gps: !$('arUi').querySelector('[data-ar="gps"]').hidden, foot: $('arUi').querySelector('[data-ar="foot"]').getAttribute('aria-pressed'), signs: (__ar.sp.signs || []).length }));
    ok(s0.ui && /zelený kroužek/.test(s0.hint) && Math.abs(s0.az - s0.mag) < 1e-9 && s0.az < 96 && s0.az > 94 && s0.fine && s0.cor && s0.pair && s0.gps && s0.foot === 'false' && s0.signs > 3, 'start AR: ' + JSON.stringify(s0));
    for (const sel of ['[data-ar="place"]', '[data-ar="corners"]', '[data-ar="pair"]']) await page.click('#arUi ' + sel);
    /* Podle GPS: bez polohy hláška z AR (gps(null)), s polohou souřadnice telefonu v plánu (střed kolbiště = střed plochy,
       osa x plánu na kurzu kolbiště 100°): 10 m na kurzu 100° od středu = 10 m doprava, 5 m na kurzu 190° = 5 m dolů */
    await page.click('#arUi [data-ar="gps"]');
    const g0 = await ev(() => ({ c: __ar.calls[__ar.calls.length - 1], u: __ar.u }));
    await ev(() => { const g = ringFor(S.meta.id), p = geoMove(geoMove(g, 100, 10), 190, 5); AR.geo = AR.geo || { id: null, sm: [] }; AR.geo.sm = [{ lat: p.lat, lng: p.lng, acc: 4, t: Date.now() }]; });
    await page.click('#arUi [data-ar="gps"]');
    const g1 = await ev(() => ({ u: __ar.u, W: S.W, H: S.H }));
    ok(g0.c === 'gps' && g0.u === null && g1.u && Math.abs(g1.u.x - (g1.W / 2 + 10)) < .05 && Math.abs(g1.u.y - (g1.H / 2 + 5)) < .05 && g1.u.acc === 4, 'Podle GPS (Android): ' + JSON.stringify([g0, g1]));
    /* stará měření (GPS přestala posílat, třeba pod střechou) se nepoužijí */
    await ev(() => { const g = ringFor(S.meta.id), p = geoMove(g, 100, 10); AR.geo.sm = [{ lat: p.lat, lng: p.lng, acc: 4, t: Date.now() - 60000 }]; __ar.u = 'x'; });
    await page.click('#arUi [data-ar="gps"]');
    ok(await ev(() => __ar.u === null), 'Podle GPS se starou polohou: ' + JSON.stringify(await ev(() => __ar.u)));
    /* daleko od kolbiště se nepokládá, jen hláška */
    await ev(() => { const g = ringFor(S.meta.id), p = geoMove(g, 0, 2000); AR.geo.sm = [{ lat: p.lat, lng: p.lng, acc: 4, t: Date.now() }]; __ar.calls.length = 0; $('toast').hidden = true; });
    await page.click('#arUi [data-ar="gps"]');
    /* hláška v AR (běžná hláška aplikace v AR vidět není) */
    const g2 = await ev(() => ({ calls: __ar.calls.join(' '), t: $('arHint').textContent }));
    ok(g2.calls === 'hint:gpsFar' && /^Kolbiště je 2(,0)? km od tebe/.test(g2.t), 'GPS daleko od kolbiště: ' + JSON.stringify(g2));
    /* poloha zakázaná: hláška v AR místo položení */
    await ev(() => { AR.geo.no = true; __ar.calls.length = 0; });
    await page.click('#arUi [data-ar="gps"]');
    const g3 = await ev(() => ({ calls: __ar.calls.join(' '), t: $('arHint').textContent }));
    await ev(() => { AR.geo.no = false; });
    ok(g3.calls === 'hint:gpsDenied' && /nemá povolenou polohu/.test(g3.t), 'GPS bez povolení: ' + JSON.stringify(g3));
    await ev(() => { __ar.calls.length = 0; __ar.calls.push('replace', 'corners', 'pair'); });
    /* půdorys: přepínač s aria-pressed */
    await page.click('#arUi [data-ar="foot"]');
    const f1 = await ev(() => ({ p: $('arUi').querySelector('[data-ar="foot"]').getAttribute('aria-pressed'), c: __ar.calls.slice(-1)[0] }));
    await page.click('#arUi [data-ar="foot"]');
    ok(f1.p === 'true' && f1.c === 'foottrue' && await ev(() => $('arUi').querySelector('[data-ar="foot"]').getAttribute('aria-pressed') === 'false' && __ar.calls.slice(-1)[0] === 'footfalse'), 'přepínač Půdorys: ' + JSON.stringify(f1));
    await ev(() => { __ar.calls.length = 0; __ar.calls.push('replace', 'corners'); });
    /* nápovědy podle dvou překážek a GPS */
    const ph = await ev(() => { const o = []; __ar.cb.onState('pairA', { a: 1, b: 7 }); o.push($('arHint').textContent); __ar.cb.onState('pairB', { a: 1, b: 7 }); o.push($('arHint').textContent);
      __ar.cb.onState('placedPair', { a: 1, b: 7, d: 21.4, w: 22 }); o.push($('arHint').textContent); __ar.cb.onState('placedPairOff', { a: 1, b: 7, d: 15, w: 22 }); o.push($('arHint').textContent);
      __ar.cb.onState('placedGps', { acc: 4 }); o.push($('arHint').textContent); __ar.cb.onState('lost'); o.push($('arHint').textContent); __ar.cb.onState('scan'); return o; });
    ok(ph[0] === 'Dojdi k překážce 1 a zamiř zelený kroužek na zem pod její střed. Pak klepni.' && /^Teď dojdi k překážce 7,/.test(ph[1]) && ph[2] === 'Parkur stojí podle překážek 1 a 7. Na place jsou od sebe 21,4 m, na plánu 22 m.' &&
      /^Překážky 1 a 7 jsou od sebe 15 m, ale na plánu 22 m\./.test(ph[3]) && /^Parkur stojí podle GPS \(± 4 m\)/.test(ph[4]) && /ztratil přehled/.test(ph[5]), 'nápovědy AR 3.5.3: ' + JSON.stringify(ph));
    /* počty (Návštěvnost): Podle GPS u položeného parkuru je nové položení; po návratu ztracené polohy AR zopakuje hlášku, to se nepočítá; ztráta jednou za AR */
    const ac = await ev(() => { const a = () => Object.assign({}, actRec().a), k0 = a();
      __ar.cb.onState('placedAz'); __ar.cb.onState('placedGps', { acc: 4 }); __ar.cb.onState('lost'); __ar.cb.onState('placedGps', { acc: 4 }, true); __ar.cb.onState('scan');
      const k1 = a(), d = x => (k1[x] || 0) - (k0[x] || 0); return { az: d('ar_az'), gps: d('ar_gps'), lost: k1.ar_lost, ar: k1.ar }; });
    ok(ac.az === 1 && ac.gps === 1 && ac.lost === 1 && ac.ar === 1, 'počty AR: ' + JSON.stringify(ac));
    await page.click('#arUi [data-ar="fine"]');
    const s1 = await ev(() => ({ fine: $('arFine').hidden, on: $('arUi').querySelector('[data-ar="fine"]').classList.contains('on'), ex: $('arUi').querySelector('[data-ar="fine"]').getAttribute('aria-expanded') }));
    ok(s1.fine && s1.on && s1.ex === 'true', 'doladění před položením nemá být vidět: ' + JSON.stringify(s1));
    await ev(() => { __ar.placed = true; __ar.cb.onState('placedCorners', { d: 38.6, w: 40 }); });
    const s2 = await ev(() => ({ fine: $('arFine').hidden, hint: $('arHint').textContent }));
    ok(!s2.fine && s2.hint === 'Parkur stojí podle rohů kolbiště. Rohy jsou od sebe 38,6 m, na plánu 40 m.', 'po položení podle rohů: ' + JSON.stringify(s2));
    const btns = await page.$$('#arFine button'); for (const b of btns) await b.click();
    await page.click('#arUi [data-ar="model"]');
    const s3 = await ev(() => ({ cor: $('arUi').querySelector('[data-ar="corners"]').hidden, pair: $('arUi').querySelector('[data-ar="pair"]').hidden, gps: $('arUi').querySelector('[data-ar="gps"]').hidden, calls: __ar.calls.slice() }));
    ok(s3.cor && s3.pair && s3.gps && s3.calls.join(' ') === 'replace corners rot15 rot1 rot-1 rot-15 mv-1,0 mv0,1 mv0,-1 mv1,0 scaletrue', 'tlačítka AR: ' + JSON.stringify(s3));
    await page.click('#arUi [data-ar="real"]');
    ok(await ev(() => !$('arUi').querySelector('[data-ar="pair"]').hidden && !$('arUi').querySelector('[data-ar="gps"]').hidden), 'po návratu na 1 : 1 chybí Podle překážek nebo Podle GPS');
    await ev(() => { __ar.cb.onState('placedCornersOff', { d: 30.25, w: 40 }); });
    const s4 = await ev(() => ({ cor: $('arUi').querySelector('[data-ar="corners"]').hidden, hint: $('arHint').textContent }));
    ok(!s4.cor && /^Rohy jsou od sebe 30,3 m, ale plán má 40 m\./.test(s4.hint), 'nesedící rohy: ' + JSON.stringify(s4));
    /* nové AR začíná ve skutečné velikosti a se zavřeným doladěním */
    await page.click('#arUi [data-ar="model"]'); await page.click('#arUi [data-ar="end"]');
    const s5 = await ev(() => ({ ui: $('arUi').hidden, api: AR.api }));
    ok(s5.ui && s5.api === null, 'Zavřít AR: ' + JSON.stringify(s5));
    await ev(() => arStart()); await page.waitForTimeout(100);
    const s6 = await ev(() => ({ real: $('arUi').querySelector('[data-ar="real"]').classList.contains('on'), model: $('arUi').querySelector('[data-ar="model"]').classList.contains('on'), cor: !$('arUi').querySelector('[data-ar="corners"]').hidden, fine: AR.fine }));
    ok(s6.real && !s6.model && s6.cor && !s6.fine, 'druhé AR zdědilo model nebo doladění: ' + JSON.stringify(s6));
    await ev(() => AR.api.end());
    /* bez dvou vhodných překážek (krátká sekvence) Podle překážek není a nápovědy radí rohy */
    await ev(() => { V3D.m = Object.assign({}, V3D.m, { arMath: Object.assign({}, V3D.m.arMath, { pickPair: () => null }) }); arStart(); }); await page.waitForTimeout(100);
    const np = await ev(() => { __ar.cb.onState('placedAz'); const h1 = $('arHint').textContent; __ar.cb.onState('placedGps', { acc: 3 });
      return { pair: $('arUi').querySelector('[data-ar="pair"]').hidden, h1, h2: $('arHint').textContent }; });
    ok(np.pair && /„Podle rohů“\.$/.test(np.h1) && /„Podle rohů“\.$/.test(np.h2), 'bez dvou překážek nápověda radí skryté tlačítko: ' + JSON.stringify(np));
    await ev(() => AR.api.end());
    /* angličtina nových textů */
    const miss = await ev(ph => ['Podle rohů', 'Doladit', 'Doladit polohu', 'Otočit doleva o 15°', 'Otočit doprava o 1°', 'Posunout dál o 25 cm', 'Posunout blíž o 25 cm', 'Posunout doleva o 25 cm', 'Posunout doprava o 25 cm',
      'Parkur stojí podle rohů kolbiště. Rohy jsou od sebe 38,6 m, na plánu 40 m.', 'Rohy jsou od sebe 30,3 m, ale plán má 40 m. Zkontroluj rohy a zkus to znovu „Podle rohů“, nebo dorovnej v „Doladit“.',
      'Půdorys', 'Místo překážek jen jejich obrysy na zemi', 'Položit parkur', 'Podle překážek', 'Podle GPS', 'Aktualizovat', 'Kolbiště je 2 km od tebe. Podle GPS jde parkur položit jen na kolbišti nebo u něj.',
      'Kolbiště je 350 m od tebe. Podle GPS jde parkur položit jen na kolbišti nebo u něj.', 'Překážky jsou moc blízko u sebe. Dojdi k překážce 7 a klepni pod její střed.']
      .concat(ph).concat(Object.keys(AR_TXT).map(k => AR_TXT[k])).filter(t => trLookup(t) == null), ph.concat([np.h1, np.h2]));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await step('AR na iPhonu (Quick Look)', async () => {
    await fresh(); await tunCourse();
    /* parkur jako model USDZ (zip), který iPhone položí na zem */
    const r = await ev(() => v3dLoad().then(m => { build3d(); return m.quickLookBlob(course3dSpec()); }).then(b => b.arrayBuffer().then(a => { const u = new Uint8Array(a); return { n: u.length, pk: u[0] === 0x50 && u[1] === 0x4b, type: b.type }; })), null).catch(e => ({ err: String(e) }));
    ok(r && r.pk && r.n > 20000 && r.type === 'model/vnd.usdz+zip', 'model USDZ pro iPhone se nevytvořil: ' + JSON.stringify(r));
    /* 3.5.2 (video od uživatele z UK: parkur stažený prsty a jinde než skutečný): na place start parkuru v počátku a skutečná
       velikost, na stůl střed plochy a 1 : 20; oba modely jdou vyrobit */
    const o = await ev(() => v3dLoad().then(m => { V3D.m = m; build3d(); const sp = course3dSpec(), f = m.quickLookScene(sp), t = m.quickLookScene(sp, { model: true }), p0 = sp.path[0];
      return m.quickLookBlob(sp, { model: true }).then(b => ({ fx: f.g.position.x, fz: f.g.position.z, fk: f.root.scale.x, sx: p0[0], sz: p0[1], tx: t.g.position.x, tz: t.g.position.z, tk: t.root.scale.x, W: sp.W, H: sp.H, tb: b.size > 20000 && b.type === 'model/vnd.usdz+zip' })); }));
    ok(Math.abs(o.fx + o.sx) < 1e-6 && Math.abs(o.fz + o.sz) < 1e-6 && o.fk === 1 && Math.abs(o.tx + o.W / 2) < 1e-6 && Math.abs(o.tz + o.H / 2) < 1e-6 && Math.abs(o.tk - 1 / 20) < 1e-9 && o.tb, 'počátek a velikost modelu pro iPhone: ' + JSON.stringify(o));
    /* 3.5.3 (týž uživatel: „start vpravo a špatně natočené“, zelená plocha zakrývala zem): Quick Look staví model čelem k telefonu
       (osa −z od telefonu). Od startu: překážka 1 od startu přímo od telefonu. Na place bez trávy, se sloupky; na stůl s trávou.
       Podle GPS: telefon 2 m za počátkem, osa x plánu na kurzu kolbiště. Půdorys: obrysy místo překážek. Tečky trasy jako jedna síť. */
    const q3 = await ev(() => v3dLoad().then(m => {
      build3d(); const sp = course3dSpec(), A = m.arMath, o1 = sp.obs.find(q => q.nums.indexOf(1) >= 0);
      const turf = sc => { let n = 0; sc.traverse(q => { if (q.isMesh && q.material && q.material.color && q.material.color.getHexString() === '7fb35a') n++; }); return n; };
      const f = m.quickLookScene(sp), t = m.quickLookScene(sp, { model: true }), w1 = A.rot(o1.x - f.origin.x, o1.y - f.origin.z, f.yaw);
      const G = { x: 12, y: 6, h: 30, az: 100, ahead: 2 }, g = m.quickLookScene(sp, { gps: G }), me = A.rot(G.x - g.origin.x, G.y - g.origin.z, g.yaw), ax = A.rot(1, 0, g.yaw);
      const ft = m.quickLookScene(sp, { foot: true }), fe = ft.scene.getObjectByName('feet');
      let inst = 0, dots = 0; f.scene.traverse(q => { if (q.isInstancedMesh) inst++; if (q.isMesh && q.material && q.material.color && q.material.color.getHexString() === 'f2c230' && q.material.transparent && q.geometry.attributes.position.count > 100) dots++; });
      return { w1, turfF: turf(f.scene), turfT: turf(t.scene), postsF: !!f.scene.getObjectByName('posts'), postsT: !!t.scene.getObjectByName('posts'), tYaw: t.yaw, me, ax,
        jumpF: !!ft.scene.getObjectByName('jump'), jump: !!f.scene.getObjectByName('jump'), feet: fe ? fe.children.length : 0, nObs: sp.obs.length, inst, dots };
    }));
    ok(Math.abs(q3.w1.x) < 1e-6 && q3.w1.z < -1, 'od startu: překážka 1 není od startu směrem od telefonu: ' + JSON.stringify(q3.w1));
    ok(q3.turfF === 0 && q3.turfT === 1 && q3.postsF && !q3.postsT && q3.tYaw === 0, 'na place bez trávy a se sloupky, na stůl s trávou: ' + JSON.stringify(q3));
    ok(Math.abs(q3.me.x) < 1e-6 && Math.abs(q3.me.z - 2) < 1e-6 && Math.abs(q3.ax.x - Math.sin(70 * Math.PI / 180)) < 1e-6 && Math.abs(q3.ax.z + Math.cos(70 * Math.PI / 180)) < 1e-6, 'podle GPS: telefon 2 m za počátkem a osa x plánu na kurzu kolbiště: ' + JSON.stringify(q3));
    ok(!q3.jumpF && q3.jump && q3.feet === q3.nObs, 'půdorys: obrysy místo překážek: ' + JSON.stringify(q3));
    ok(q3.inst === 0 && q3.dots === 1, 'tečky trasy v modelu pro iPhone (jedna síť bez instancí): ' + JSON.stringify(q3));
    /* před spuštěním volba, odkaz pro Quick Look: na place bez zmenšování prsty, model na stůl se zmenšováním */
    await ev(() => { window.__qlh = []; window.__qlc = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function () { if (this.rel === 'ar') { window.__qlh.push(this.getAttribute('href').replace(/^blob:[^#]*/, 'blob')); return; } return window.__qlc.call(this); };
      ringsPut([]); AR.ql = true; arStart(); });
    await page.waitForTimeout(150);
    const q = await ev(() => ({ h: ($('sheet').querySelector('h3') || {}).textContent, o: [...document.querySelectorAll('#sheet [data-ql]')].map(b => b.getAttribute('data-ql')).join() }));
    ok(q.h === 'AR na iPhonu' && q.o === 'field,model', 'volba před AR na iPhonu: ' + JSON.stringify(q));
    await ev(() => document.querySelector('#sheet [data-ql="field"]').click());
    await page.waitForFunction(() => window.__qlh.length >= 1 && !AR.busy, null, { timeout: 20000 });
    await ev(() => { arStart(); document.querySelector('#sheet [data-ql="model"]').click(); });
    await page.waitForFunction(() => window.__qlh.length >= 2, null, { timeout: 20000 });
    const hs = await ev(() => window.__qlh.slice());
    ok(JSON.stringify(hs) === JSON.stringify(['blob#allowsContentScaling=0', 'blob#allowsContentScaling=1']), 'odkazy pro Quick Look (na place bez zmenšování): ' + JSON.stringify(hs));
    /* s kolbištěm se zaměřeným natočením je první volba Podle GPS: poloha za 4 s, kompas, pak Quick Look s parkurem kolem místa 2 m
       před telefonem (podstrčené GPS 10 m na kurzu 100° od středu kolbiště a kompas 100°) */
    await ev(() => {
      ringsPut([{ id: 'rq', name: 'K', lat: 50.08, lng: 14.42, acc: 3, az: 100, azErr: 2, azT: 1, W: 40, H: 20, cid: S.meta.id, at: 1 }]);
      const g = ringFor(S.meta.id), p = geoMove(g, 100, 10);
      Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { watchPosition(ok) { const t = setInterval(() => ok({ coords: { latitude: p.lat, longitude: p.lng, accuracy: 4 } }), 300); return t; }, clearWatch(id) { clearInterval(id); }, getCurrentPosition() { } } });
      window.__qlo = []; const qb = V3D.m.quickLookBlob; V3D.m = Object.assign({}, V3D.m, { quickLookBlob(sp, o) { window.__qlo.push(o); return qb(sp, o); } });
      window.__qlh = []; HTMLAnchorElement.prototype.click = function () { if (this.rel === 'ar') { window.__qlh.push(this.getAttribute('href').replace(/^blob:[^#]*/, 'blob')); return; } return window.__qlc.call(this); };
      AR.ql = true; arStart();
    });
    await page.waitForTimeout(150);
    const q4 = await ev(() => [...document.querySelectorAll('#sheet [data-ql]')].map(b => b.getAttribute('data-ql')).join() + '|' + !!$('qlFoot'));
    ok(q4 === 'gps,field,model|true', 'volba AR na iPhonu s kolbištěm: ' + q4);
    await ev(() => { $('qlFoot').checked = true; document.querySelector('#sheet [data-ql="gps"]').click(); });
    /* kompas (Chromium: deviceorientationabsolute, telefon nastojato, kurz 100°) */
    const comp = setInterval(() => ev(() => ['deviceorientationabsolute', 'deviceorientation'].forEach(t => window.dispatchEvent(Object.assign(new Event(t), { alpha: 260, beta: 90, gamma: 0, absolute: true })))).catch(() => { }), 200);
    const gotQl = await page.waitForFunction(() => window.__qlh.length >= 1 && !AR.busy, null, { timeout: 20000 }).then(() => true, () => false);
    clearInterval(comp);
    const q5 = await ev(() => { HTMLAnchorElement.prototype.click = window.__qlc; AR.ql = false; const o = window.__qlo[0] || {}, sp = course3dSpec(), az = ringAzMag(ringFor(S.meta.id));
      return { got: window.__qlh.slice(), foot: o.foot, g: o.gps, W: sp.W, H: sp.H, az, sheet: $('scrim').hidden }; });
    ok(gotQl && q5.got[0] === 'blob#allowsContentScaling=0' && q5.foot === true && q5.g && Math.abs(q5.g.x - (q5.W / 2 + 10)) < .1 && Math.abs(q5.g.y - q5.H / 2) < .1 &&
      Math.abs(q5.g.h - 100) < 1 && Math.abs(q5.g.az - q5.az) < 1e-6 && q5.g.ahead === 2 && q5.sheet, 'AR na iPhonu podle GPS: ' + JSON.stringify(q5));
    /* v kryté hale (video od uživatele z UK) je GPS nepřesná: nejdřív varování, pak Otevřít i tak */
    await ev(() => {
      const g = ringFor(S.meta.id), p = geoMove(g, 100, 10);
      Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { watchPosition(ok) { const t = setInterval(() => ok({ coords: { latitude: p.lat, longitude: p.lng, accuracy: 30 } }), 300); return t; }, clearWatch(id) { clearInterval(id); }, getCurrentPosition() { } } });
      window.__qlo = []; window.__qlh = []; HTMLAnchorElement.prototype.click = function () { if (this.rel === 'ar') { window.__qlh.push(this.getAttribute('href').replace(/^blob:[^#]*/, 'blob')); return; } return window.__qlc.call(this); };
      AR.ql = true; arStart(); document.querySelector('#sheet [data-ql="gps"]').click();
    });
    const comp2 = setInterval(() => ev(() => ['deviceorientationabsolute', 'deviceorientation'].forEach(t => window.dispatchEvent(Object.assign(new Event(t), { alpha: 260, beta: 90, gamma: 0, absolute: true })))).catch(() => { }), 200);
    const warned = await page.waitForFunction(() => !!document.querySelector('#sheet [data-a="go"]'), null, { timeout: 15000 }).then(() => true, () => false);
    clearInterval(comp2);
    const w1 = await ev(() => ({ t: $('sheet').textContent, n: window.__qlh.length }));
    ok(warned && /GPS teď ukazuje polohu jen na ± 30 m\./.test(w1.t) && w1.n === 0, 'nepřesná GPS bez varování: ' + JSON.stringify(w1));
    if (warned) {
      await ev(() => document.querySelector('#sheet [data-a="go"]').click());
      const op = await page.waitForFunction(() => window.__qlh.length >= 1 && !AR.busy, null, { timeout: 20000 }).then(() => true, () => false);
      ok(op && await ev(() => !!(window.__qlo[0] && window.__qlo[0].gps)), 'Otevřít i tak neotevřelo AR podle GPS');
    }
    /* okno měření zavřené klepnutím vedle (ne Zrušit): měření a kompas skončí, AR se pak samo neotevře */
    await ev(() => { window.__qlh = []; let n = 0; const g0 = navigator.geolocation; window.__gw = () => n;
      Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { watchPosition(a, b, c) { n++; return g0.watchPosition(a, b, c); }, clearWatch(id) { n--; g0.clearWatch(id); }, getCurrentPosition() { } } });
      arStart(); document.querySelector('#sheet [data-ql="gps"]').click(); });
    await page.waitForTimeout(500); await page.mouse.click(5, 5); await page.waitForTimeout(1000);
    const d0 = await ev(() => ({ w: window.__gw(), scrim: $('scrim').hidden }));
    const comp3 = setInterval(() => ev(() => ['deviceorientationabsolute', 'deviceorientation'].forEach(t => window.dispatchEvent(Object.assign(new Event(t), { alpha: 260, beta: 90, gamma: 0, absolute: true })))).catch(() => { }), 200);
    await page.waitForTimeout(5000); clearInterval(comp3);
    const d1 = await ev(() => ({ ql: window.__qlh.length, scrim: $('scrim').hidden }));
    ok(d0.w === 0 && d0.scrim && d1.ql === 0 && d1.scrim, 'GPS na iPhonu po zavření okna klepnutím vedle: ' + JSON.stringify([d0, d1]));
    /* kompas jako v Safari na iPhonu: webkitCompassHeading, přesnost −1 = neplatný kurz (Safari posílá kurz 0, než Core Location směr zná) */
    const geo4 = () => ev(() => { const g = ringFor(S.meta.id), p = geoMove(g, 100, 10);
      Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { watchPosition(ok) { const t = setInterval(() => ok({ coords: { latitude: p.lat, longitude: p.lng, accuracy: 4 } }), 300); return t; }, clearWatch(id) { clearInterval(id); }, getCurrentPosition() { } } });
      window.__qlo = []; window.__qlh = []; HTMLAnchorElement.prototype.click = function () { if (this.rel === 'ar') { window.__qlh.push(1); return; } return window.__qlc.call(this); };
      AR.ql = true; $('toast').hidden = true; arStart(); document.querySelector('#sheet [data-ql="gps"]').click(); });
    const ios = (h, a, g) => setInterval(() => ev(([h, a, g]) => ['deviceorientationabsolute', 'deviceorientation'].forEach(t => window.dispatchEvent(Object.assign(new Event(t), { alpha: 0, beta: 50, gamma: g || 0, webkitCompassHeading: h, webkitCompassAccuracy: a }))), [h, a, g]).catch(() => { }), 100);
    /* kurz 0 s přesností −1 se nepočítá, platí až skutečný kurz, i když přijde po GPS; telefon na šířku (gamma 80°) se nepočítá taky */
    await geo4(); let c1 = ios(0, -1); const c2 = ios(300, 10, 80); await page.waitForTimeout(5000); clearInterval(c1); clearInterval(c2); c1 = ios(123, 10);
    const gi = await page.waitForFunction(() => window.__qlh.length >= 1 && !AR.busy, null, { timeout: 20000 }).then(() => true, () => false); clearInterval(c1);
    const gh = await ev(() => window.__qlo[0] && window.__qlo[0].gps && window.__qlo[0].gps.h);
    ok(gi && Math.abs(gh - 123) < 1, 'AR podle GPS vzalo neplatný kurz z iPhonu nebo kurz na šířku: ' + gh);
    /* jen neplatné kurzy: hláška o kalibraci, AR se neotevře */
    await geo4(); c1 = ios(0, -1); await page.waitForTimeout(9000); clearInterval(c1);
    const gb = await ev(() => ({ n: window.__qlo.length, t: $('toast').hidden ? '' : $('toast').textContent, busy: !!AR.qlg }));
    ok(gb.n === 0 && /zkalibrovat/.test(gb.t) && !gb.busy, 'jen neplatný kurz z iPhonu: ' + JSON.stringify(gb));
    /* Quick Look staví na zem nejnižší bod modelu: nic nesmí být pod zemí, jinak se zvedne celý parkur i s čarami */
    const lowY = await ev(() => { const s = V3D.m.quickLookScene(course3dSpec()), f = V3D.m.quickLookScene(course3dSpec(), { foot: true }); let m = 1e9;
      [s, f].forEach(x => { x.scene.updateMatrixWorld(true); x.scene.traverse(q => { if (!q.isMesh) return; const p = q.geometry.attributes.position, e = q.matrixWorld.elements; for (let i = 0; i < p.count; i++) m = Math.min(m, e[1] * p.getX(i) + e[5] * p.getY(i) + e[9] * p.getZ(i) + e[13]); }); }); return m; });
    ok(lowY > -1e-4, 'model pro iPhone leze pod zem: ' + lowY);
    /* látka tunelu je oboustranná, USDZ kreslí jen líc: v modelu pro iPhone musí být i rub (tunel by byl zevnitř a z konců průhledný) */
    const two = await ev(() => { const s = V3D.m.quickLookScene(course3dSpec()); let d = 0, b = 0; s.scene.traverse(q => { if (!q.isMesh) return; if (q.material.side === 2) d++; if (q.name === 'rub') b++; }); return { d, b }; });
    ok(two.d === 0 && two.b > 0, 'oboustranné materiály v modelu pro iPhone: ' + JSON.stringify(two));
    await ev(() => { HTMLAnchorElement.prototype.click = window.__qlc; AR.ql = false; });
    const miss = await ev(l => l.filter(t => { const v = trLookup(t); return v == null || /[ěščřžýáíéůúňťď]/.test(v); }), ['AR na iPhonu', 'Na place od startu', 'Na place podle GPS', 'AR podle GPS', 'Zjišťuji polohu…', 'Poloha ± 4 m', 'směr 100°',
      'Když iPhone píše, ať s ním pohneš, pomalu s ním přejeď nad zemí. V hale to trvá déle.', 'GPS teď ukazuje polohu jen na ± 30 m.', 'Kompas teď ukazuje směr jen na ± 40°.',
      'Kompas potřebuje zkalibrovat: opiš telefonem ve vzduchu osmičku.', 'Pod střechou a u kovových konstrukcí bývají obojí horší. Parkur pak může stát o kus vedle nebo pootočený.', 'Otevřít i tak',
      'Stoupni si pár kroků za start čelem k překážce 1 a miř telefonem na místo startu. Jedním prstem parkur posuneš, dvěma natočíš, velikost zůstane 1 : 1.',
      'Parkur se položí tam, kde na kolbišti opravdu je, podle uložené polohy kolbiště, GPS a kompasu (přesnost pár metrů). Stačí stát na kolbišti nebo u něj.',
      'Zmenšený parkur 1 : 20, prsty ho zvětšíš, zmenšíš i natočíš.', 'Jen půdorys: místo překážek jejich obrysy na zemi',
      'Bílé čáry jsou okraj kolbiště, oranžové sloupky jeho rohy a zelený sloupek start: podle nich parkur prsty dorovnáš. Položení podle dvou překážek umí jen Android s Chromem, iPhone používá AR od Applu.',
      'Namiř telefon nastojato na zem asi dva kroky před sebe, směrem ke kolbišti, a drž ho. Za pár vteřin iPhone nabídne AR: potvrď a miř dál stejným směrem. Když chce, ať s ním pohneš, posouvej ho do stran, neotáčej se.',
      'Kompas v telefonu nejde použít. Zkus „Na place od startu“.',
      'AR na place podle GPS kolbiště (i na iPhonu), na Androidu také podle dvou překážek', 'AR bez zelené plochy, se sloupky v rozích kolbiště a na startu, volitelně jen půdorys překážek']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await step('3D a AR: čísla na straně nájezdu jako v Plánu', async () => {
    await fresh(); await tunCourse();
    /* 3.5.3: dřív cedulka ve 3D vždy vlevo před vstupem podle natočení překážky, i když ji pes bral z druhé strany,
       a „Číslo na druhou stranu“ se do 3D nepromítlo */
    const r = await ev(() => {
      const sp = course3dSpec(), c = calc(), g2 = {};
      c.P.forEach((p, i) => { const o = getO(S.route[i]); if (HOOPT[o.type]) return; const k = numKey(p, o); (g2[k] = g2[k] || { p, o, n: [] }).n.push(i + 1); });
      const want = Object.keys(g2).map(k => { const q = numPos(g2[k].p, g2[k].o, S.W, S.H); return g2[k].n.join('·') + '@' + q.x.toFixed(2) + ',' + q.y.toFixed(2); }).sort();
      const got = sp.signs.map(q => q.t + '@' + q.x.toFixed(2) + ',' + q.y.toFixed(2)).sort();
      const has2 = q => q.t.split('·').indexOf('2') >= 0, o = getO(S.route[1]), before = sp.signs.find(has2);
      o.nf = true; const after = course3dSpec().signs.find(has2); delete o.nf;
      return { same: JSON.stringify(want) === JSON.stringify(got), n: got.length, moved: Math.hypot(before.x - after.x, before.y - after.y) };
    });
    ok(r.same && r.n > 3 && r.moved > 1, '3D čísla neodpovídají Plánu: ' + JSON.stringify(r));
    await ev(() => open3d(false));
    const gl = await page.waitForFunction(() => C3.api, null, { timeout: 15000 }).then(() => true, () => false);
    if (gl) { ok(await ev(() => { let k = 0; C3.api.scene.traverse(q => { if (q.name === 'sign') k++; }); return k === course3dSpec().signs.length && k > 3; }), 've 3D chybí cedulky s čísly');
      /* líc cedulky (+z, stojánek je vzadu) čelem k psovi a psovodovi, kteří k překážce přicházejí (proti směru nájezdu) */
      const bad = await ev(() => { const sp = course3dSpec(), out = []; C3.api.scene.traverse(q => { if (q.name !== 'sign') return;
        const s = sp.signs.find(z => Math.abs(z.x - q.position.x) < 1e-6 && Math.abs(z.y - q.position.z) < 1e-6);
        if (!s || Math.sin(q.rotation.y) * -s.dx + Math.cos(q.rotation.y) * -s.dy < .99) out.push(s ? s.t : '?'); }); return out; });
      ok(!bad.length, 'cedulka s číslem není čelem k nájezdu: ' + bad.join());
      await ev(() => close3d()); }
  });

  await step('3D: pes kličkuje slalomem', async () => {
    await fresh();
    await ev(() => { S.meta.dirty = false; const c = listFor('A1').find(x => x.route.some(id => (x.obs.find(o => o.id === id) || {}).type === 'weave')); loadCourse(c, true); });
    await ev(() => open3d(false));
    const ready = await page.waitForFunction(() => C3.api, null, { timeout: 15000 }).then(() => true, () => false);
    if (!ready) return;   /* bez WebGL se 3D netestuje */
    const r = await ev(() => {
      const sp = course3dSpec(), w = sp.weaves[0], a = w.rot * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a), out = [];
      /* u každé tyčky: na které straně je pes (vlevo = kladně vůči směru běhu) */
      for (let k = 0; k < 12; k++) {
        const u = w.dir > 0 ? -3.3 + k * .6 : 3.3 - k * .6; let best = null;
        for (let d = 0; d < C3.api.length; d += .02) { const p = C3.api.at(d); if (p.idx !== w.idx && p.idx !== w.idx - 1) continue;
          const pu = (p.x - w.x) * ca + (p.z - w.y) * sa, pv = -(p.x - w.x) * sa + (p.z - w.y) * ca;
          if (Math.abs(pv) < .8 && (!best || Math.abs(pu - u) < Math.abs(best.pu - u))) best = { pu, pv }; }
        out.push(best ? Math.sign(best.pv * w.dir * -1) : 0);   /* +1 = pes vlevo od tyčky */
      }
      return out;
    });
    ok(r.length === 12 && r[0] === -1 && r.every((v, k) => v === (k % 2 ? 1 : -1)), 'pes neobíhá tyčky střídavě s 1. tyčkou po levém rameni: ' + r.join(','));
    await ev(() => close3d());
  });

  /* 3.5.3: čtyři způsoby položení se polsky na 360 px nevešly do řádku a Według GPS bylo za okrajem obrazovky (vlastní kontext, ?lang se pamatuje) */
  await step('AR: ovládání polsky na 360 px', async () => {
    const P = await phone(browser, { viewport: { width: 360, height: 740 } }); await offline(P.ctx, { get_catalog: { version: 0 } });
    try {
      await P.page.goto(base + '/?lang=pl#plan'); await P.page.waitForTimeout(400);
      const out = await P.ev(() => { const c = listFor('A1')[0]; S.meta.dirty = false; loadCourse(c, true);
        ringsPut([{ id: 'rp', name: 'K', lat: 50.08, lng: 14.42, acc: 3, az: 100, azErr: 2, azT: 1, W: 40, H: 20, cid: S.meta.id, at: 1 }]);
        const api = { replace() { }, corners() { return true; }, pair() { return true; }, gps() { return true; }, foot(on) { return on; }, rotate() { }, nudge() { }, setScale() { }, play() { return true; }, end() { cb.onEnd(); }, get placed() { return false; }, get length() { return 10; } };
        let cb = null;
        return v3dLoad().then(M => { V3D.m = Object.assign({}, M, { startAR(ui, sp, c) { cb = c; return Promise.resolve(api); } }); AR.ql = false; arStart(); return new Promise(r => setTimeout(r, 100)); })
          .then(() => { const o = [...document.querySelectorAll('#arUi button')].filter(b => b.offsetParent).filter(b => { const r = b.getBoundingClientRect(); return r.left < 0 || r.right > innerWidth; }).map(b => b.textContent.trim());
            o.n = ['pair', 'gps', 'corners'].filter(a => !$('arUi').querySelector('[data-ar="' + a + '"]').hidden).length; AR.api.end(); return { out: o, n: o.n }; }); });
      ok(out.n === 3 && !out.out.length, 'tlačítka AR za okrajem obrazovky: ' + JSON.stringify(out));
    } finally { T.errs.push(...P.errs); await P.ctx.close(); }
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['2 m (trénink)', 'Délka tunelu', 'Zobrazení', 'Tunel kratší než 3 m: 1× (FCI: délka tunelu 3–6 m)'].filter(s => trLookup(s) == null));
    ok(!miss.length, 'chybí překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
