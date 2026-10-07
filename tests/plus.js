/* Pawkur Plus: 14 dní zkušební doby (všechno zdarma), pak základ zdarma a Plus za 99 Kč/rok. Nabídka Plus u 3D, rozboru, pastí,
   stavby v terénu, kalkulačky, listiny, rozboru kacr a šestého vlastního parkuru; stav z plus_get; návrat ze Stripe ?plus=ok. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  let plusUntil = null;
  await page.route(/\/rest\/v1\/rpc\/plus_get/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ until: plusUntil, src: plusUntil ? 'stripe' : '' }) }));
  const prep = async (daysAgo) => { await page.goto(base + '/#plan'); await ev((d) => { localStorage.clear(); localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-first-v1', String(Date.now() - d * 864e5)); }, daysAgo); await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(400); await ev(() => { $('toast').hidden = true; }); };

  await step('zkušební doba: všechno jde', async () => {
    await prep(3);
    const r = await ev(() => ({ ok: plusOK(), trial: plusTrial(), days: plusDays(), st: plusStatus() }));
    ok(r.ok && r.trial && r.days === 11 && /zbývá 11 dní/.test(r.st), 'zkušební doba: ' + JSON.stringify(r));
    await ev(() => { loadCourse(listFor('A1')[0], true); show('plan'); }); await page.click('#toolsBtn'); await page.click('#planTools [data-t="ana"]'); await page.waitForTimeout(200);
    ok(!/Pawkur Plus/.test(await page.textContent('#sheet')), 've zkušební době se nabídka Plus nemá ukazovat');
    await ev(() => closeSheet());
  });

  await step('po zkušební době: nabídka Plus u placených funkcí', async () => {
    await prep(20);
    const r = await ev(() => ({ ok: plusOK(), st: plusStatus() }));
    ok(!r.ok && /Zkušební doba skončila/.test(r.st), 'po 20 dnech: ' + JSON.stringify(r));
    await ev(() => { loadCourse(listFor('A1')[0], true); show('plan'); });
    for (const t of ['ana', '3d', 'fld', 'traps']) {
      await page.click('#toolsBtn'); await page.click('#planTools [data-t="' + t + '"]'); await page.waitForTimeout(200);
      const txt = await page.textContent('#sheet').catch(() => '');
      ok(/Pawkur Plus/.test(txt) && /Zkušební doba skončila/.test(txt) && /Přihlásit přes Google/.test(txt), 'nabídka Plus u ' + t + ': ' + txt.slice(0, 120));
      await ev(() => closeSheet());
    }
    ok(await ev(() => !PLANUI.traps), 'pasti se bez Plus zapnuly');
    /* kalkulačka a listina ve Více */
    await ev(() => { moreTab = ''; show('more'); }); await page.click('#moreTabs [data-m="sct"]'); await page.waitForTimeout(150);
    ok(/Pawkur Plus/.test(await page.textContent('#sheet')), 'kalkulačka bez Plus'); await ev(() => closeSheet());
    await page.click('#moreTabs [data-m="listina"]'); await page.waitForTimeout(150);
    ok(/Pawkur Plus/.test(await page.textContent('#sheet')) && await ev(() => moreTab !== 'listina'), 'listina bez Plus'); await ev(() => closeSheet());
    /* šestý vlastní parkur */
    await ev(() => { mySave([1, 2, 3, 4, 5].map(i => ({ id: 'my-' + i, name: 'P' + i, cls: 'A1', W: 40, H: 20, obs: [], route: [], turns: [], sides: [] }))); loadCourse(listFor('A1')[1], true); show('plan'); });
    await page.click('#saveBtn'); await page.waitForTimeout(150); await page.click('#sheet [data-a="new"]'); await page.waitForTimeout(400);
    ok(/Pawkur Plus/.test(await page.textContent('#sheet').catch(() => '')) && await ev(() => myDB().length === 5), 'šestý vlastní parkur bez Plus: ' + await ev(() => myDB().length));
    await ev(() => closeSheet());
    /* stránka Více → Pawkur Plus */
    await ev(() => { moreTab = 'plus'; show('more'); }); await page.waitForTimeout(150);
    const pg = await page.textContent('#moreBody');
    ok(/Zkušební doba skončila/.test(pg) && /99 Kč \/ rok/.test(pg) && /Přihlásit přes Google/.test(pg) && /Obchodní podmínky/.test(pg), 'stránka Plus: ' + pg.slice(0, 160));
  });

  await step('přihlášený: koupě a stav ze serveru', async () => {
    await ev(() => { AUTH = { at: 'x', rt: 'y', exp: Math.floor(Date.now() / 1000) + 3600, uid: '11111111-1111-1111-1111-111111111111', email: 'test@example.com', name: 'Test' }; lsSet('agility-auth-v1', AUTH); window.PLUS_OPEN = u => { window.__buy = u; }; });
    await ev(() => { PLUS_LINK = 'https://buy.stripe.com/test_abc'; moreTab = 'plus'; moreRender(); }); await page.waitForTimeout(200);
    await page.click('#moreBody [data-plus="buy"]'); await page.waitForTimeout(100);
    const u = await ev(() => window.__buy);
    ok(u === 'https://buy.stripe.com/test_abc?client_reference_id=11111111-1111-1111-1111-111111111111&prefilled_email=test%40example.com', 'odkaz na platbu: ' + u);
    /* server potvrdí Plus */
    plusUntil = new Date(Date.now() + 300 * 864e5).toISOString();
    await page.click('#moreBody [data-plus="refresh"]'); await page.waitForTimeout(400);
    const r = await ev(() => ({ ok: plusOK(), act: plusActive(), st: plusStatus(), saved: lsGet('agility-plus-v1', {}).until > Date.now() }));
    ok(r.ok && r.act && /Máš Pawkur Plus do/.test(r.st) && r.saved, 'stav po obnovení: ' + JSON.stringify(r));
    await ev(() => { loadCourse(listFor('A1')[0], true); show('plan'); }); await page.click('#toolsBtn'); await page.click('#planTools [data-t="ana"]'); await page.waitForTimeout(200);
    ok(!/Pawkur Plus/.test(await page.textContent('#sheet')), 's Plus se rozbor otevře'); await ev(() => closeSheet());
    /* návrat ze Stripe */
    await page.goto('about:blank'); await page.goto(base + '/?plus=ok#home'); await page.waitForTimeout(1600);
    ok(await ev(() => location.search === '' && /Plus je aktivní/.test($('toast').textContent)), 'návrat ze Stripe: ' + await ev(() => $('toast').textContent));
  });

  await step('aplikace z Google Play nekupuje', async () => {
    plusUntil = null;
    await ev(() => { PLUS = { until: 0, at: 0 }; lsSet('agility-plus-v1', PLUS); window.IS_APK = true; IS_APK = true; moreTab = 'plus'; show('more'); }); await page.waitForTimeout(400);
    const pg = await page.textContent('#moreBody');
    ok(/spravuje na/.test(pg) && !(await page.isVisible('#moreBody [data-plus="buy"]')), 'Play verze: ' + pg.slice(0, 160));
    await ev(() => { IS_APK = false; window.IS_APK = false; });
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Pawkur Plus', '99 Kč / rok', 'Zkoušíš všechno zdarma, zbývá 11 dní.', 'Zkoušíš všechno zdarma, zbývá 1 den.', 'Zkušební doba skončila. Základ zůstává zdarma, Plus je za 99 Kč / rok.',
      'Koupit Plus za 99 Kč / rok', 'Už mám Plus', 'Spravovat předplatné', 'Obchodní podmínky', 'je součást Pawkur Plus.', 'Rozbor', '3D průlet', 'Pasti', 'Stavba v terénu', 'Kalkulačka SČP a MČP', 'Výsledková listina', 'Neomezené vlastní parkury',
      ...PLUS_FEATS.map(f => f[0]), 'Základ aplikace je zdarma napořád: parkury, plán, stopky, trénink doma a deník. Plus přidává:', 'Pawkur Plus je aktivní. Díky za podporu!'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
