/* Přesun na novou adresu pawkur.cz: pruh na staré adrese (?oldhost) zazálohuje data do cloudu a otevře novou adresu s ?obnova=KLÍČ,
   nová adresa zálohu načte a obnoví. Obě adresy běží dál. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  let put = null;
  await page.route(/\/rest\/v1\/rpc\/backup_put/, r => { put = JSON.parse(r.request().postData() || '{}'); r.fulfill({ status: 200, contentType: 'application/json', body: 'null' }); });

  await step('stará adresa: pruh a přenos', async () => {
    await page.goto(base + '/?oldhost#home'); await page.waitForTimeout(500);
    await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'L', cls: 'A2' }]; DOGC = 'd1'; saveDogs(); window.MOVE_OPEN = u => { window.__moved = u; }; });
    await page.waitForSelector('#moveBar', { timeout: 3000 }).catch(() => {});
    ok(await page.isVisible('#moveBar') && /novou adresu pawkur\.cz/.test(await page.textContent('#moveBar')), 'pruh o nové adrese chybí: ' + JSON.stringify(await ev(() => ({ bar: !!document.getElementById('moveBar'), t: (document.getElementById('moveBar') || {}).textContent, vis: document.getElementById('moveBar') && document.getElementById('moveBar').getBoundingClientRect().height, href: location.href }))));
    await page.click('#moveGo'); await page.waitForTimeout(300);
    const r = await ev(() => ({ u: window.__moved, k: lsGet('agility-cloudkey-v1', ''), since: lsGet('agility-move-v1', 0) }));
    ok(put && put.p_key === r.k && put.p_data && put.p_data.app === 'agility-trasa' && put.p_data.data[DOGK_NAME()] !== undefined, 'záloha před přenosem: ' + JSON.stringify(put || {}).slice(0, 200));
    ok(r.u === 'https://pawkur.cz/?obnova=' + r.k && r.since > 0, 'otevření nové adresy: ' + JSON.stringify(r));
    /* bez ?oldhost (běžná adresa) pruh není */
    await page.goto(base + '/#home'); await page.waitForTimeout(300);
    ok(!(await page.isVisible('#moveBar')), 'pruh se ukazuje i na nové adrese');
  });
  function DOGK_NAME() { return put && Object.keys(put.p_data.data).find(k => /dog/.test(k)) || 'agility-dogs-v1'; }

  await step('nová adresa: ?obnova načte zálohu', async () => {
    const dogsKey = await ev(() => DOGK);
    const bk = { app: 'agility-trasa', v: 3, at: new Date().toISOString(), data: {} };
    bk.data[dogsKey] = JSON.stringify([{ id: 'd9', name: 'Přenesený', size: 'M', cls: 'A3' }]);
    let asked = 0;
    await page.route(/\/rest\/v1\/rpc\/backup_get/, r => { asked++; const b = JSON.parse(r.request().postData() || '{}'); r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(b.p_key === 'abcdefghjkmn' ? bk : null) }); });
    await page.goto(base + '/#home'); await ev(() => { localStorage.clear(); localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); });
    await page.goto('about:blank'); await page.goto(base + '/?obnova=abcdefghjkmn#home'); await page.waitForTimeout(2000);
    const r = await ev(() => ({ dogs: DOGS.map(d => d.name).join(), key: lsGet('agility-cloudkey-v1', ''), q: location.search, toast: $('toast').textContent }));
    ok(asked >= 1 && r.dogs === 'Přenesený' && r.key === 'abcdefghjkmn' && r.q === '', 'obnova z klíče: ' + JSON.stringify(r) + ' asked=' + asked);
    ok(/přenesená na novou adresu/.test(r.toast), 'chybí potvrzení po přenosu: ' + r.toast);
    /* neznámý klíč */
    await page.goto('about:blank'); await page.goto(base + '/?obnova=zzzzzzzzzzzz#home'); await page.waitForTimeout(800);
    ok(/nenašel/.test(await ev(() => $('toast').textContent)), 'neznámý klíč bez hlášky');
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Pawkur má novou adresu pawkur.cz. Přenes si data jedním klepnutím a používej aplikaci tam.', 'Přenést', 'Přenáším…',
      'Zálohu pod tímhle klíčem jsem nenašel.', 'Data jsou přenesená na novou adresu. Nainstaluj si Pawkur odsud a starou ikonu smaž.'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
