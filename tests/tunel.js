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
    await page.click('#p3dim [data-d="2"]'); await page.waitForTimeout(150);
    ok(await ev(() => $('ov3d').hidden && !C3.api), '2D nezavřelo 3D zobrazení');
    /* 3D: tunel v 3D má zvolenou délku */
    const L = await ev(() => { const o = S.obs.find(q => q.type === 'tunnel' && !q.bend); o.len = 6; const t = course3dSpec().obs.find(q => q.type === 'tunnel' && !getO(S.obs.find(z => z.type === 'tunnel' && !z.bend).id).bend && q.x === o.x && q.y === o.y).tunnel; return Math.hypot(t[0][0] - t[t.length - 1][0], t[0][1] - t[t.length - 1][1]); });
    ok(Math.abs(L - 6) < .05, '3D tunel nemá zvolenou délku: ' + L);
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['2 m (trénink)', 'Délka tunelu', 'Zobrazení', 'Tunel kratší než 3 m: 1× (FCI: délka tunelu 3–6 m)'].filter(s => trLookup(s) == null));
    ok(!miss.length, 'chybí překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
