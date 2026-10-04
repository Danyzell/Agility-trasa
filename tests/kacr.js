/* Výsledky ze závodů z kacr.info: odkaz na psa, stažení přes serverovou funkci (tady nahrazenou), statistiky a odhad času na parkuru. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  /* odpověď serverové funkce kacr: tři závody, agility i jumping, jedna diskvalifikace */
  const calls = []; let mode = 'ok';
  const DATA = { id: 14756, name: 'Wampi', breed: 'Border kolie', size: 'I', born: '2023-08-10', at: 1790000000000, comps: [
    { id: 3, name: 'Praha <b>Open</b>', date: '2026-09-12', runs: [
      { id: 31, name: 'Jumping I', handler: 'H', handlerId: 1, place: 2, of: 10, t: 30, pen: 0, v: 5 },
      { id: 32, name: 'Zkouška IA1', handler: 'H', handlerId: 1, place: 1, of: 5, t: 36, pen: 0, v: 4 },
      { id: 33, name: 'Agility Open I', handler: 'H', handlerId: 1, dis: 1 }] },
    { id: 2, name: 'Brno', date: '2026-05-01', runs: [
      { id: 21, name: 'Zkouška IA1', handler: 'H', handlerId: 1, place: 4, of: 8, t: 40, pen: 5, v: 3.6 },
      { id: 22, name: 'Zkouška IJ1', handler: 'H', handlerId: 1, place: 3, of: 8, t: 33, pen: 0, v: 4.6 }] },
    { id: 1, name: 'Plzeň', date: '2025-04-13', runs: [
      { id: 11, name: 'Zkouška I IA1', handler: 'H', handlerId: 1, place: 1, of: 3, t: 38, pen: 0, v: 3.8 }] }] };
  await page.route('**/functions/v1/kacr', async r => {
    const body = JSON.parse(r.request().postData() || '{}'); calls.push(body.dog);
    if (mode === 'err') return r.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'Pes s tímhle číslem na kacr.info není.' }) });
    return r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(DATA) });
  });
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash || '#more')); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };

  await step('odkaz na psa', async () => {
    await fresh();
    const r = await ev(() => [kacrId('https://kacr.info/dogs/14756'), kacrId('14756'), kacrId('http://www.kacr.info/dogs/12/?locale=cz'), kacrId('https://evil.com/dogs/1'), kacrId('kacr.info/handlers/5'), kacrId('')]);
    ok(JSON.stringify(r) === JSON.stringify(['14756', '14756', '12', null, null, null]), 'rozpoznání odkazu: ' + JSON.stringify(r));
  });

  await step('profil psa: uložení odkazu a stažení výsledků', async () => {
    await fresh();
    await ev(() => { DOGS = [{ id: 'dog-w', name: 'Wiky', size: 'I', cls: 'A1' }]; DOGC = 'dog-w'; saveDogs(); KACR = {}; lsSet(KACRK, KACR); moreTab = 'dogs'; moreRender(); });
    await page.click('[data-dedit="dog-w"]');
    await page.fill('#dKacr', 'https://example.com/dogs/1'); await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(200);
    ok(await page.isVisible('#dKacr') && await ev(() => !DOGS[0].kacr && /kacr\.info\/dogs/.test($('toast').textContent)), 'špatný odkaz se uložil nebo chybí upozornění');
    await page.fill('#dKacr', 'https://kacr.info/dogs/14756'); await page.click('#sheet [data-a="ok"]');
    await page.waitForFunction(() => KACR['dog-w'], null, { timeout: 5000 });
    ok(await ev(() => DOGS[0].kacr === '14756' && lsGet(KACRK, {})['dog-w'].name === 'Wampi'), 'odkaz nebo výsledky se neuložily');
    ok(calls[calls.length - 1] === '14756', 'serverová funkce dostala ' + calls[calls.length - 1]);
    ok(await ev(() => /6 běhů/.test($('toast').textContent)), 'chybí oznámení o načtení');
    ok(await ev(() => !!backupData().data['agility-kacr-v1']), 'výsledky nejsou v záloze');
  });

  await step('statistiky a rychlost', async () => {
    const r = await ev(() => { const d = KACR['dog-w']; return { s: kacrStats(d), a: kacrSpeed(d, 'A'), j: kacrSpeed(d, 'J'), disc: ['Jumping 2 I', 'Zkouška IJ1', 'II.zkouška IJ1', 'Zkouška IA1', 'Agility Open I', 'J0'].map(kacrDisc) }; });
    ok(r.s.n === 6 && r.s.dis === 1 && r.s.clean === 4 && r.s.podium === 4 && r.s.wins === 2, 'statistiky: ' + JSON.stringify(r.s));
    ok(Math.abs(r.s.vA - 3.8) < 1e-9 && Math.abs(r.s.vJ - 4.8) < 1e-9, 'medián rychlosti: ' + r.s.vA + ' / ' + r.s.vJ);
    ok(r.a && Math.abs(r.a.v - 3.8) < 1e-9 && !r.a.all, 'rychlost agility pro odhad: ' + JSON.stringify(r.a));
    ok(r.j && r.j.all, 'jumping má jen 2 běhy, odhad má vzít obě disciplíny: ' + JSON.stringify(r.j));
    ok(r.disc.join('') === 'JJJAAJ', 'agility / jumping podle názvu: ' + r.disc.join(''));
  });

  await step('okno Závody', async () => {
    await ev(() => moreRender());
    await page.click('[data-dkacr="dog-w"]'); await page.waitForTimeout(200);
    ok(await page.locator('#kcBody .kc-tiles > div').count() === 6, 'chybí dlaždice se statistikami');
    ok(await page.isVisible('#kcBody .kc-chart') && await page.locator('#kcBody .kc-chart circle').count() === 5, 'graf rychlosti nemá 5 bodů');
    ok(await page.locator('#kcBody .kc-runs li').count() === 6, 'seznam běhů');
    ok(await ev(() => !document.querySelector('#kcBody b b') && /Praha <b>Open<\/b>/.test($('kcBody').textContent)), 'název závodu se nezobrazil jako text');
    /* chyba serveru: oznámení s důvodem, uložené výsledky zůstanou */
    mode = 'err'; await page.click('#sheet [data-a="re"]'); await page.waitForTimeout(300);
    ok(await ev(() => /není/.test($('toast').textContent) && KACR['dog-w'].name === 'Wampi'), 'chyba serveru se neohlásila nebo smazala výsledky');
    mode = 'ok'; await ev(() => closeSheet());
  });

  await step('odhad času na parkuru', async () => {
    await fresh('#plan');
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('A1')[0], true); });
    const r = await ev(() => { const m = curM(), el = document.querySelector('#specs .spec.est'); return { has: !!el, txt: el ? el.textContent : '', len: m.len, sct: m.sct }; });
    const t = Math.round(r.len / 3.8 * 10) / 10;
    ok(r.has && r.txt.indexOf(String(t).replace('.', ',')) >= 0, `odhad ${t} s chybí v „${r.txt}“`);
    ok(r.txt.indexOf('pod SČP') >= 0 || r.txt.indexOf('nad SČP') >= 0, 'chybí rezerva vůči SČP');
    /* pes bez výsledků: žádný odhad */
    await ev(() => { DOGS.push({ id: 'dog-x', name: 'X', size: 'L', cls: 'A1' }); DOGC = 'dog-x'; saveDogs(); render(); });
    ok(await ev(() => !document.querySelector('#specs .spec.est')), 'odhad se ukázal psovi bez výsledků');
  });

  await step('angličtina', async () => {
    ok(await ev(() => trLookup('Závody') === 'Competitions' && trLookup('Načteno z kacr.info: 45 běhů') === 'Loaded from kacr.info: 45 runs' && /^12[.,]9 s under SCT · 4[.,]1 m\/s$/.test(trLookup('12,9 s pod SČP · 4,1 m/s')) && trLookup('Obnovit') === 'Restore'), 'chybí překlad nebo se přepsal překlad Obnovit');
  });

  await T.ctx.close();
  return T.errs;
};
