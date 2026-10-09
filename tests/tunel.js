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
      return { yaw, c0, c1, c2, mx, mz, ax, n1, n2 };
    }));
    const near = (p, x, z) => Math.abs(p.x - x) < 1e-9 && Math.abs(p.z - z) < 1e-9;
    ok(Math.abs(m.yaw - .5) < 1e-9 && near(m.c0, 1, 2) && near(m.c1, 1 + 40 * Math.cos(.5), 2 - 40 * Math.sin(.5)), 'rohy plánu neleží na zaměřených rozích: ' + JSON.stringify(m));
    ok(Math.abs(Math.hypot(m.c2.x - 1, m.c2.z - 2) - 20) < 1e-9 && (m.c1.x - 1) * (m.c2.z - 2) - (m.c1.z - 2) * (m.c2.x - 1) > 0, 'plán je podle rohů zrcadlově: ' + JSON.stringify(m));
    ok(near(m.mx, 1, 0) && near(m.mz, 0, 1), 'model na stole není jako mapa (x doprava, y k telefonu): ' + JSON.stringify(m));
    ok(near(m.ax, 1, 0), 'kolbiště na východ při pohledu na sever nemíří doprava: ' + JSON.stringify(m));
    ok(near(m.n1, .25, 0) && near(m.n2, 0, -.25), 'posun vůči telefonu: ' + JSON.stringify(m));
    /* ovládání v aplikaci s podstrčeným AR: tlačítka volají api, nápovědy a doladění */
    await ev(() => {
      window.__ar = { calls: [], placed: false };
      const api = { replace() { __ar.calls.push('replace'); }, corners() { __ar.calls.push('corners'); return true; }, rotate(d) { __ar.calls.push('rot' + d); },
        nudge(x, z) { __ar.calls.push('mv' + x + ',' + z); }, setScale(md) { __ar.calls.push('scale' + md); }, play() { return true; },
        end() { __ar.calls.push('end'); __ar.cb.onEnd(); }, get placed() { return __ar.placed; }, get length() { return 10; } };
      ringsPut([{ id: 'ra', name: 'K', lat: 50.08, lng: 14.42, acc: 3, az: 100, azErr: 2, azT: 1, W: 40, H: 20, cid: S.meta.id, at: 1 }]);
      return v3dLoad().then(M => { V3D.m = Object.assign({}, M, { startAR(ui, sp, cb) { __ar.sp = sp; __ar.cb = cb; return Promise.resolve(api); } }); AR.ql = false; });
    });
    await ev(() => arStart()); await page.waitForTimeout(100);
    const s0 = await ev(() => ({ ui: !$('arUi').hidden, hint: $('arHint').textContent, az: __ar.sp.az, mag: ringAzMag(ringFor(S.meta.id)), fine: $('arFine').hidden, cor: !$('arUi').querySelector('[data-ar="corners"]').hidden }));
    ok(s0.ui && /zelený kroužek/.test(s0.hint) && Math.abs(s0.az - s0.mag) < 1e-9 && s0.az < 96 && s0.az > 94 && s0.fine && s0.cor, 'start AR: ' + JSON.stringify(s0));
    for (const sel of ['[data-ar="place"]', '[data-ar="corners"]']) await page.click('#arUi ' + sel);
    await page.click('#arUi [data-ar="fine"]');
    const s1 = await ev(() => ({ fine: $('arFine').hidden, on: $('arUi').querySelector('[data-ar="fine"]').classList.contains('on'), ex: $('arUi').querySelector('[data-ar="fine"]').getAttribute('aria-expanded') }));
    ok(s1.fine && s1.on && s1.ex === 'true', 'doladění před položením nemá být vidět: ' + JSON.stringify(s1));
    await ev(() => { __ar.placed = true; __ar.cb.onState('placedCorners', { d: 38.6, w: 40 }); });
    const s2 = await ev(() => ({ fine: $('arFine').hidden, hint: $('arHint').textContent }));
    ok(!s2.fine && s2.hint === 'Parkur stojí podle rohů kolbiště. Rohy jsou od sebe 38,6 m, na plánu 40 m.', 'po položení podle rohů: ' + JSON.stringify(s2));
    const btns = await page.$$('#arFine button'); for (const b of btns) await b.click();
    await page.click('#arUi [data-ar="model"]');
    const s3 = await ev(() => ({ cor: $('arUi').querySelector('[data-ar="corners"]').hidden, calls: __ar.calls.slice() }));
    ok(s3.cor && s3.calls.join(' ') === 'replace corners rot15 rot1 rot-1 rot-15 mv-1,0 mv0,1 mv0,-1 mv1,0 scaletrue', 'tlačítka AR: ' + JSON.stringify(s3));
    await page.click('#arUi [data-ar="real"]');
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
    /* angličtina nových textů */
    const miss = await ev(() => ['Podle rohů', 'Doladit', 'Doladit polohu', 'Otočit doleva o 15°', 'Otočit doprava o 1°', 'Posunout dál o 25 cm', 'Posunout blíž o 25 cm', 'Posunout doleva o 25 cm', 'Posunout doprava o 25 cm',
      'Parkur stojí podle rohů kolbiště. Rohy jsou od sebe 38,6 m, na plánu 40 m.', 'Rohy jsou od sebe 30,3 m, ale plán má 40 m. Zkontroluj rohy a zkus to znovu „Podle rohů“, nebo dorovnej v „Doladit“.']
      .concat(Object.keys(AR_TXT).map(k => AR_TXT[k])).filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await step('AR na iPhonu (Quick Look)', async () => {
    await fresh(); await tunCourse();
    /* parkur jako model USDZ (zip), který iPhone položí na zem */
    const r = await ev(() => v3dLoad().then(m => { build3d(); return m.quickLookBlob(course3dSpec()); }).then(b => b.arrayBuffer().then(a => { const u = new Uint8Array(a); return { n: u.length, pk: u[0] === 0x50 && u[1] === 0x4b, type: b.type }; })), null).catch(e => ({ err: String(e) }));
    ok(r && r.pk && r.n > 20000 && r.type === 'model/vnd.usdz+zip', 'model USDZ pro iPhone se nevytvořil: ' + JSON.stringify(r));
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

  await step('angličtina', async () => {
    const miss = await ev(() => ['2 m (trénink)', 'Délka tunelu', 'Zobrazení', 'Tunel kratší než 3 m: 1× (FCI: délka tunelu 3–6 m)'].filter(s => trLookup(s) == null));
    ok(!miss.length, 'chybí překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
