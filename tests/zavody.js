/* Závody poblíž: kalendář z kacr.info (serverová funkce nahrazená), karta na Domů, vzdálenost podle polohy, přihlášení psi. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { timezoneId: 'Europe/Prague', geolocation: { latitude: 50.08, longitude: 14.43 }, permissions: ['geolocation'] }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const day = (n) => { const d = new Date(Date.now() + n * 86400000); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const C = (id, name, from, to, lat, lng, entries, extra) => Object.assign({ id, name, from, to, lat, lng, terrain: 'Tráva', indoor: false, judges: ['Novák, Jan (CZ)'], deadline: null, open: null, n: Object.keys(entries).length, entries }, extra || {});
  const DATA = { at: Date.now(), days: 60, comps: [
    C(1, 'Včera skončený', day(-3), day(-1), 50.1, 14.4, {}),
    C(2, 'Daleko <b>Ostrava</b>', day(3), day(4), 49.83, 18.28, { 777: 'IA2' }, { open: true, deadline: day(1) + 'T20:00' }),
    C(3, 'Blízko Praha', day(10), day(10), 50.05, 14.3, {}),
    C(4, 'Středně Kolín', day(5), day(5), 50.03, 15.2, {}, { open: false }),
    C(5, 'Brno', day(2), day(2), 49.19, 16.6, {}),
  ] };
  let mode = 'ok'; const calls = [];
  await page.route('**/functions/v1/kacr', async r => { const b = JSON.parse(r.request().postData() || '{}'); calls.push(b);
    if (mode === 'err') return r.fulfill({ status: 502, contentType: 'application/json', body: JSON.stringify({ error: 'Kalendář závodů se nepodařilo načíst.' }) });
    return r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(DATA) }); });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const home = async () => { await page.goto('about:blank'); await page.goto(base + '/#home'); await page.waitForTimeout(500); };

  await step('karta na Domů', async () => {
    await page.goto(base + '/#home'); await page.waitForTimeout(200);
    await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'I', cls: 'A2', kacr: '777' }]; DOGC = 'd1'; saveDogs(); localStorage.removeItem('agility-comps-v1'); localStorage.removeItem('agility-loc-v1'); }); calls.length = 0;
    await home(); await page.waitForSelector('#hmComps .cp-row', { timeout: 5000 });
    const rows = await page.$$eval('#hmComps .cp-row b', b => b.map(x => x.textContent));
    ok(rows.length === 3 && rows[0] === 'Daleko <b>Ostrava</b>', 'karta: přihlášený pes napřed, jméno jako text: ' + JSON.stringify(rows));
    ok(rows.indexOf('Včera skončený') < 0, 'karta ukazuje proběhlý závod');
    ok(rows[1] === 'Brno' && rows[2] === 'Středně Kolín', 'bez polohy podle data: ' + JSON.stringify(rows));
    ok(/Rex IA2/.test(await page.textContent('#hmComps .cp-row.mine')), 'chybí přihlášený pes');
    ok(calls.filter(c => c.comps).length === 1, 'kalendář se má stáhnout jednou: ' + calls.filter(c => c.comps).length);
    /* mezipaměť: nové načtení stránky do 6 hodin server nevolá */
    await home(); await page.waitForTimeout(300);
    ok(calls.filter(c => c.comps).length === 1, 'kalendář se stahuje znovu, i když je v mezipaměti');
  });

  await step('poloha a vzdálenost', async () => {
    await page.click('#hmComps [data-h="comploc"]'); await page.waitForTimeout(500);
    const loc = await ev(() => lsGet('agility-loc-v1', null));
    ok(loc && loc.lat === 50.08 && loc.lng === 14.43, 'poloha se neuložila: ' + JSON.stringify(loc));
    const rows = await page.$$eval('#hmComps .cp-row b', b => b.map(x => x.textContent));
    ok(rows[0] === 'Daleko <b>Ostrava</b>' && rows.indexOf('Brno') < 0 && rows.indexOf('Blízko Praha') >= 0, 'po poloze: přihlášený napřed, pak do 150 km: ' + JSON.stringify(rows));
    ok(/\b\d+ km\b/.test(await page.textContent('#hmComps')), 'chybí vzdálenost');
  });

  await step('přehled závodů', async () => {
    await page.click('#v-home [data-h="comps"]'); await page.waitForSelector('#cpList .cp-row', { timeout: 5000 });
    ok(await page.locator('#cpList .cp-row').count() === 4, 'Vše: 4 nadcházející závody');
    ok(await ev(() => !!document.querySelector('#cpList a[href="https://kacr.info/competitions/3"]') && !!document.querySelector('#cpList a[href*="mapy.cz"]')), 'chybí odkaz na kacr.info nebo mapu');
    ok(/přihlášky uzavřené/.test(await page.textContent('#cpList')) && /přihlášky do/.test(await page.textContent('#cpList')), 'chybí stav přihlášek');
    await page.click('[data-cf2="100"]'); await page.waitForTimeout(150);
    const near = await page.$$eval('#cpList .cp-row b', b => b.map(x => x.textContent));
    ok(near.length === 2 && near.indexOf('Blízko Praha') >= 0 && near.indexOf('Středně Kolín') >= 0, 'do 100 km: ' + JSON.stringify(near));
    await page.click('[data-cf2="mine"]'); await page.waitForTimeout(150);
    ok(await page.locator('#cpList .cp-row').count() === 1, 'Moji psi');
    await ev(() => closeSheet());
  });

  await step('chyba serveru', async () => {
    await ev(() => { localStorage.removeItem('agility-comps-v1'); COMPS = null; }); mode = 'err';
    await ev(() => compsSheet()); await page.waitForSelector('#cpList [data-a="retry"]', { timeout: 5000 });
    ok(/nepodařilo načíst/.test(await page.textContent('#cpList')), 'chyba se neukázala');
    mode = 'ok'; await page.click('#cpList [data-a="retry"]'); await page.waitForSelector('#cpList .cp-row', { timeout: 5000 });
    ok(true, ''); await ev(() => closeSheet());
  });

  await step('den závodů', async () => {
    /* závod zítra s přihlášeným psem: karta nad ostatním obsahem Domů */
    DATA.comps.push(C(6, 'Zítra Čerčany', day(1), day(2), 49.85, 14.7, { 777: 'IA2', 1: 'IA2', 2: 'IA2', 3: 'LA1' }));
    await ev(() => { localStorage.removeItem('agility-comps-v1'); localStorage.removeItem('agility-compday-v1'); localStorage.removeItem('agility-compck-v1'); });
    await home(); await page.waitForSelector('#hmDay .hm-day', { timeout: 5000 });
    let t = await page.textContent('#hmDay');
    ok(/Zítra závodíš/.test(t) && /Zítra Čerčany/.test(t) && /IA2/.test(t) && /v kategorii 3 týmů/.test(t) && /Jan Novák/.test(t), 'karta den závodů: ' + t);
    ok(await page.getAttribute('#hmDay a.hm-go', 'href') === 'https://mapy.cz/zakladni?source=coor&id=14.7%2C49.85', 'navigace');
    /* co s sebou: zaškrtnutí se pamatuje */
    await page.click('#hmDay [data-h="cdcheck"]'); await page.click('#sheet [data-ck="0"]'); await page.click('#sheet [data-ck="4"]'); await page.click('#sheet [data-a="x"]');
    ok(/Co s sebou 2\/11/.test(await page.textContent('#hmDay')), 'počet zabalených věcí');
    await page.click('#hmDay [data-h="cdcheck"]'); ok(await page.isChecked('#sheet [data-ck="4"]'), 'zaškrtnutí se nepamatuje'); await ev(() => closeSheet());
    /* zapsat výsledek: deník s předvyplněným závodem a rozhodčím */
    await page.click('#hmDay [data-h="cdnote"]'); await page.waitForTimeout(150);
    ok(await page.inputValue('#yEv') === 'Zítra Čerčany' && await page.inputValue('#yJudge') === 'Jan Novák', 'předvyplněný zápis do deníku');
    await ev(() => closeSheet());
    /* po závodu: karta s výsledky (závod už v kalendáři není) */
    await ev(() => { const st = lsGet(CDK, null); st.c.from = st.c.to = localDate(new Date(Date.now() - 86400000)); lsSet(CDK, st); });
    DATA.comps.pop(); await ev(() => localStorage.removeItem('agility-comps-v1'));
    await home(); await page.waitForSelector('#hmDay .hm-day', { timeout: 5000 });
    ok(/Výsledky ze závodu/.test(await page.textContent('#hmDay')), 'karta po závodu');
    /* zavření křížkem */
    await page.click('#hmDay [data-h="cdx"]'); ok(!(await page.isVisible('#hmDay .hm-day')), 'kartu nejde zavřít');
  });

  await step('angličtina', async () => {
    ok(await ev(() => trLookup('Závody') === 'Competitions' && trLookup('Do 100 km') === 'Within 100 km' && trLookup('přihlášky uzavřené') === 'entries closed'), 'chybí překlad');
    const miss = await ev(() => ['Zítra závodíš', 'Závodíš, 2. den', '· v kategorii 3 týmů', 'Co s sebou 2/11', 'Navigovat', 'Zapsat výsledek', 'Výsledky ze závodu', 'Načíst z kacr.info',
      'Pořadí na startu najdeš u pořadatele, kacr.info ho nezveřejňuje.', ...CHECK].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
