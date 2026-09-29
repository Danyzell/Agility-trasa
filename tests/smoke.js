/* Projde všechny obrazovky a nástroje; každý krok na čerstvě načtené stránce. Hlídá chyby v konzoli. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  /* zámek obrazovky: náhrada, která si pamatuje, co aplikace chtěla */
  await T.ctx.addInitScript(() => { window.__wl = []; Object.defineProperty(navigator, 'wakeLock', { configurable: true, value: { request: () => {
    const l = new EventTarget(); l.released = false; l.release = () => { l.released = true; l.dispatchEvent(new Event('release')); return Promise.resolve(); }; window.__wl.push(l); return Promise.resolve(l); } } }); });
  const step = async (label, fn) => {
    T.step(label);
    try {
      await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300); await fn(); await page.waitForTimeout(250);
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
  await step('domů po spuštění', async () => {
    await page.goto(base + '/'); await page.waitForTimeout(300);
    T.ok(await page.isVisible('#v-home .hm-cta'), 'aplikace nezačíná na Domů');
    T.ok(!(await page.isVisible('.top')), 'na Domů je vidět horní lišta plánu');
    T.ok(await page.locator('#v-home .hm-cc').count() > 0, 'chybí Parkury pro tebe');
    T.ok(await page.locator('#v-home .hm-week > div').count() === 7, 'týden nemá 7 dní');
  });
  await step('domů: parkur z nabídky', async () => {
    await page.click('.nav [data-v="home"]'); const id = await T.ev(() => HOME_C[1].id);
    await page.click('#v-home .hm-cc >> nth=1'); await page.waitForTimeout(200);
    T.ok(await T.ev(id => S.meta.id === id && view === 'plan', id), 'parkur z nabídky se neotevřel');
  });
  await step('domů: pokračovat a výzva dne', async () => {
    await page.click('.nav [data-v="home"]'); await page.click('#v-home .hm-cta');
    T.ok(await T.ev(() => view === 'plan'), 'Pokračovat neotevřelo plán');
    await page.click('.nav [data-v="home"]'); const id = await T.ev(() => homeChallenge().c.id);
    await page.click('#v-home [data-h="ch"]'); await page.waitForTimeout(200);
    T.ok(await T.ev(id => S.meta.id === id && view === 'plan', id), 'výzva dne neotevřela parkur');
  });
  await step('domů: série a čistý běh', async () => {
    const r = await T.ev(() => {
      const day = n => { const t = new Date(); t.setHours(12, 0, 0, 0); t.setDate(t.getDate() - n); return localDate(t); };
      const a = streak({ [day(0)]: 1, [day(1)]: 1, [day(2)]: 1, [day(4)]: 1 }), b = streak({ [day(1)]: 1, [day(2)]: 1 }), c = streak({ [day(2)]: 1 });
      const ch = homeChallenge(); setMark(ch.c.id, { runs: [{ d: Date.now(), t: 30, tot: 0, g: 'V', len: 100 }], done: true });
      show('home'); return [a, b, c, homeChallenge().c.id === ch.c.id && homeChallenge().ok, !!document.querySelector('#v-home .hm-go.ok'), document.querySelector('.hm-big small').textContent];
    });
    T.ok(r[0] === 3 && r[1] === 2 && r[2] === 0, 'špatně spočítaná série: ' + r.slice(0, 3));
    T.ok(r[3] && r[4], 'výzva dne se po čistém běhu neoznačila jako splněná');
    T.ok(/série \d+ d/.test(r[5]), 'chybí série v hlavičce: ' + r[5]);
  });
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
  await step('video', async () => {
    await page.click('.nav [data-v="video"]'); await page.click('#vidList button >> nth=0');
    await page.waitForFunction(() => V3D.api || V3D.fail || !V3D.gl, null, { timeout: 20000 }); await page.waitForTimeout(300);
    T.ok(await T.ev(() => V3D.api ? !$('vStage3').hidden : $('vStage').innerHTML.length > 0), 'animace se neukázala');
  });
  await step('stopky', async () => {
    await page.click('.nav [data-v="run"]');
    T.ok(await T.ev(() => $('spLive').getBoundingClientRect().top - $('startBtn').getBoundingClientRect().bottom >= 12), 'STOP se dotýká tlačítka Mezičasy');
    T.ok(await T.ev(() => [...document.querySelectorAll('.counter')].every(c => c.getBoundingClientRect().right <= document.documentElement.clientWidth - 8)), 'počítadla chyb přetékají z obrazovky');
    await page.click('#startBtn'); await page.waitForTimeout(400);
    T.ok(await T.ev(() => __wl.length === 1 && !__wl[0].released), 'při běhu stopek může obrazovka zhasnout');
    await page.click('#startBtn');
    T.ok(await T.ev(() => parseFloat($('manT').value.replace(',', '.')) > 0.2), 'stopky neměří');
    T.ok(await T.ev(() => __wl.every(l => l.released)), 'po zastavení stopek zůstal zámek obrazovky');
  });
  await T.ctx.close();
  return T.errs;
};
