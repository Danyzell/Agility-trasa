/* Projde všechny obrazovky a nástroje; každý krok na čerstvě načtené stránce. Hlídá chyby v konzoli. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => {
    T.step(label);
    try {
      await page.goto(base + '/'); await page.waitForTimeout(300); await fn(); await page.waitForTimeout(250);
      const w = await T.ev(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
      T.ok(w[0] <= w[1], `stránka přetéká do strany (${w[0]} > ${w[1]} px)`);
    }
    catch (e) { T.errs.push(`[${label}] krok selhal: ${e.message.split('\n')[0]}`); }
  };
  await step('plán', async () => T.ok(await T.ev(() => S.obs.length > 0 && S.route.length > 1), 'výchozí parkur se nenačetl'));
  for (const t of ['ana', 'say', 'quiz', 'side', 'imp', 'bg', 'fld', 'export', 'share', '3d'])
    await step('nástroj ' + t, async () => { await page.click(`#planTools [data-t="${t}"]`); await page.waitForTimeout(t === '3d' ? 1200 : 400); });
  await step('režim trasa', async () => { await page.click('#mRoute'); });
  await page.setViewportSize({ width: 360, height: 780 });
  for (const t of ['tunnel', 'jump'])
    await step('vybraná překážka ' + t + ' na 360 px', async () => { await T.ev(t => { sel = S.obs.find(o => o.type === t).id; ui(); render(); }, t); T.ok(await page.isVisible('#delBtn'), 'chybí Smazat'); });
  await page.setViewportSize({ width: 390, height: 844 });
  await step('kontrola FCI', async () => { await page.click('#fciBar'); T.ok(await page.isVisible('#sheet .fcilist'), 'kontrola FCI se neotevřela'); });
  for (const v of ['lib', 'run', 'video', 'more'])
    await step('záložka ' + v, async () => { await page.click(`.nav [data-v="${v}"]`); T.ok(await page.isVisible('#v-' + v), 'záložka se neukázala'); });
  for (const c of ['A1', 'A2', 'A3', 'tr', 'my'])
    await step('parkury ' + c, async () => { await page.click('.nav [data-v="lib"]'); await page.click(`#libTabs [data-c="${c}"]`); if (c !== 'my') T.ok(await page.locator('#cards .card').count() > 0, 'žádné parkury'); });
  for (const f of ['fav', 'todo', 'done', 'flow', 'tech'])
    await step('filtr ' + f, async () => { await page.click('.nav [data-v="lib"]'); await page.click(`#libFilters [data-f="${f}"]`); });
  for (const s of ['easy', 'hard', 'flow', 'short'])
    await step('řazení ' + s, async () => { await page.click('.nav [data-v="lib"]'); await page.selectOption('#libSort', s); });
  await step('generátor', async () => { await page.click('.nav [data-v="lib"]'); await page.click('#genBtn'); await page.waitForTimeout(400); });
  await step('náhodný', async () => { await page.click('.nav [data-v="lib"]'); await page.click('#randBtn'); });
  await step('otevřít parkur', async () => { await page.click('.nav [data-v="lib"]'); await page.click('#cards .pick >> nth=3'); T.ok(await T.ev(() => S.meta.id === listFor('A1')[3].id), 'parkur se neotevřel'); });
  for (const m of ['dogs', 'start', 'stats', 'diary', 'warm', 'coach', 'backup', 'about'])
    await step('více ' + m, async () => { await page.click('.nav [data-v="more"]'); await page.click(`#moreTabs [data-m="${m}"]`); });
  await step('video', async () => { await page.click('.nav [data-v="video"]'); await page.click('#vidList button >> nth=0'); await page.waitForTimeout(300); });
  await step('stopky', async () => {
    await page.click('.nav [data-v="run"]'); await page.click('#startBtn'); await page.waitForTimeout(400); await page.click('#startBtn');
    T.ok(await T.ev(() => parseFloat($('manT').value.replace(',', '.')) > 0.2), 'stopky neměří');
  });
  await T.ctx.close();
  return T.errs;
};
