/* Péče o psa u Běhu: připomínka rozcvičky před prvním během dne, vychladnutí po běhu; odkaz na video u běhu. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { timezoneId: 'Europe/Prague' }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async () => { await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300); await page.click('.nav [data-v="run"]'); await ev(() => { $('toast').hidden = true; }); };
  const saveRun = async (t) => { await page.fill('#manT', t); await page.evaluate(() => $('saveRun').scrollIntoView({ block: 'center' })); await page.click('#saveRun'); await page.waitForTimeout(200);
    /* čistý běh nejdřív oslaví (3.0): okno zavřít, ať jde klepnout na připomínku */
    if (await ev(() => !!$('sheet').querySelector('.cele'))) { await page.click('#sheet .cele [data-a="x"]'); await page.waitForTimeout(200); } };

  await step('rozcvička', async () => {
    await fresh();
    ok(await page.isVisible('#runCare [data-care="warm"]'), 'před prvním během chybí připomínka rozcvičky');
    await page.click('#runCare [data-care="warm"]'); await page.waitForTimeout(150);
    ok(await ev(() => view === 'more' && moreTab === 'warm'), 'tlačítko Rozcvička neotevřelo rozcvičku');
    /* dokončená rozcvička se zapíše a připomínka zmizí */
    await ev(() => { for (let i = 0; i < 20; i++) warmAct('next'); });
    ok(await ev(() => lsGet('agility-warm-v1', {}).d === localDate()), 'dokončená rozcvička se nezapsala');
    await page.click('.nav [data-v="run"]');
    ok(await ev(() => !$('runCare').innerHTML), 'po rozcvičce se připomínka ukazuje dál');
    /* ručně ✓ */
    await ev(() => localStorage.removeItem('agility-warm-v1')); await fresh();
    await page.click('#runCare [data-care="done"]');
    ok(await ev(() => !$('runCare').innerHTML && lsGet('agility-warm-v1', {}).d === localDate()), 'tlačítko ✓ připomínku neschovalo');
  });

  await step('vychladnutí po běhu', async () => {
    await saveRun('40,1');
    ok(await page.isVisible('#runCare .care.cool'), 'po běhu chybí připomínka vychladnutí');
    await page.click('#runCare [data-care="cool"]');
    await fresh();
    ok(await ev(() => !$('runCare').innerHTML), 'vychladnutí se po Hotovo ukazuje dál');
  });

  await step('odkaz na video', async () => {
    await ev(() => { if (!$('scrim').hidden) closeSheet(); $('hist').scrollIntoView({ block: 'center' }); });
    await page.click('#hist [data-vid]'); await page.waitForSelector('#vidIn');
    await page.fill('#vidIn', 'javascript:alert(1)'); await page.click('#sheet [data-a="ok"]');
    ok(await ev(() => /https/.test($('toast').textContent) && !(getMark(S.meta.id).runs.slice(-1)[0].vid)), 'neplatný odkaz se uložil');
    await page.fill('#vidIn', 'https://youtu.be/abc"<x>'); await page.click('#sheet [data-a="ok"]');
    ok(await ev(() => !(getMark(S.meta.id).runs.slice(-1)[0].vid)), 'odkaz s uvozovkami se uložil');
    await page.fill('#vidIn', 'https://youtu.be/abc123'); await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(100);
    ok(await ev(() => getMark(S.meta.id).runs.slice(-1)[0].vid === 'https://youtu.be/abc123' && !!document.querySelector('#hist a.hvid[href="https://youtu.be/abc123"][target="_blank"]')), 'odkaz se neuložil nebo se neukázal');
    await page.click('#hist [data-vid]'); await page.click('#sheet [data-a="del"]'); await page.waitForTimeout(100);
    ok(await ev(() => !getMark(S.meta.id).runs.slice(-1)[0].vid && !document.querySelector('#hist a.hvid')), 'odkaz se neodebral');
  });

  await step('angličtina', async () => {
    ok(await ev(() => trLookup('Video běhu') === 'Run video' && /warm-up/.test(trLookup('Dnes ještě bez rozcvičky. Pět minut snižuje riziko zranění.'))), 'chybí překlad');
  });

  await T.ctx.close();
  return T.errs;
};
