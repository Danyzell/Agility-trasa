/* Deník a postup (výsledky z kacr.info se počítají do postupu, čas, rychlost a video u závodu) a jednotky metry / stopy */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#plan')); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  const dog = () => ev(() => {
    DOGS = [{ id: 'd1', name: 'Rex', size: 'L', cls: 'A1', kacr: '1' }]; DOGC = 'd1'; saveDogs();
    const run = (id, name, pen, place, dis) => ({ id, name, pen, place, of: 20, t: 35, v: 4.2, dis: !!dis });
    KACR = { d1: { name: 'Rex', comps: [
      { id: 1, name: 'Jarní cena', date: '2026-04-11', runs: [run(11, 'Zkouška IA1', 0, 1), run(12, 'Jumping IJ1', 0, 2)] },
      { id: 2, name: 'Letní pohár', date: '2026-06-20', runs: [run(21, 'Zkouška IA1', 5, 3), run(22, 'Zkouška IA1', 10, 5)] },
      { id: 3, name: 'Podzim', date: '2026-09-05', runs: [run(31, 'A2 L', 0, 2), run(32, 'Zkouška IA1', 0, null, true)] }] } };
    lsSet(KACRK, KACR); localStorage.removeItem(DIARYK);
  });

  await step('hodnocení z trestných bodů', async () => {
    await fresh();
    const r = await ev(() => [gOfPen(0), gOfPen(5.99), gOfPen(6), gOfPen(15.99), gOfPen(16), gOfPen(26), gOfPen(0, true)].join());
    ok(r === 'V,V,VD,VD,D,BO,DIS', 'hodnocení: ' + r);
  });

  await step('postup počítá výsledky z kacr.info', async () => {
    await fresh(); await dog();
    let r = await ev(() => { const k = kacrDiary(curDog()); return { n: k.length, cls: k.map(x => x.cls + x.g).sort().join() }; });
    ok(r.n === 5 && r.cls === 'A1DIS,A1V,A1V,A1VD,A2V', 'běhy agility z kacr.info (bez jumpingu a DIS jako DIS): ' + JSON.stringify(r));
    await ev(() => { moreTab = 'diary'; show('more'); });
    let t = await page.textContent('#moreBody .prog');
    ok(/^Postup A1 → A2/.test(t) && /2 z 3 zkoušek/.test(t) && /Z toho z kacr\.info: 2/.test(t), 'postup A1 → A2 z kacr.info: ' + t);
    /* ručně zapsaný stejný běh se nepočítá dvakrát, třetí V s rozhodčím doplní */
    await ev(() => lsSet(DIARYK, [{ id: 'y1', kind: 'zavod', date: '2026-04-11', dog: 'd1', cls: 'A1', g: 'V', tot: '0', place: '1', judge: 'Novák' },
      { id: 'y2', kind: 'zavod', date: '2026-10-01', dog: 'd1', cls: 'A1', g: 'V', tot: '2', place: '4', judge: 'Svoboda' }]));
    await ev(() => moreRender()); await page.waitForTimeout(100);
    t = await page.textContent('#moreBody .prog');
    ok(/3 z 3 zkoušek/.test(t) && /rozhodčích: 2/.test(t) && /podmínka splněna/.test(t) && /Z toho z kacr\.info: 1/.test(t), 'bez dvojího počítání a se 2 rozhodčími: ' + t);
  });

  await step('závod s časem, délkou a videem', async () => {
    await page.click('[data-dy="zavod"]');
    await page.fill('#yEv', 'Test'); await page.fill('#yT', '40,5'); await page.fill('#yLen', '162'); await page.fill('#yVid', 'https://youtu.be/abc');
    await T.sheet('ok');
    const x = await ev(() => diary().find(e => e.event === 'Test'));
    ok(x && x.t === 40.5 && x.len === 162 && x.video === 'https://youtu.be/abc', 'uložený závod: ' + JSON.stringify(x));
    const li = await page.textContent('#moreBody .list');
    ok(/40,5 s/.test(li) && /4,0 m\/s/.test(li) && await page.isVisible('#moreBody a.dy-vid[href="https://youtu.be/abc"]'), 'v deníku čas, rychlost a video: ' + li.slice(0, 200));
    await page.click('[data-dy="zavod"]'); await page.fill('#yVid', 'javascript:alert(1)'); await T.sheet('ok');
    ok(!(await ev(() => diary().some(e => /javascript/.test(e.video || '')))), 'nebezpečný odkaz se nesmí uložit');
  });

  await step('kde ztrácíš body a rozhodčí z kacr.info', async () => {
    /* serverová funkce vrátí podrobnosti běhů: rozhodčí, povrch, chyby a odmítnutí psa */
    const N = 'Novák, Jan (CZ)', S = 'Svoboda, Eva (CZ)', me = (chb, odm, t) => ({ chb, odm, tbt: 0, tb: 5 * (chb + odm), t, v: 4.5, place: 2, dis: false });
    const det = { 11: [N, 'Tráva', false, me(0, 0, 35)], 21: [S, 'Tráva', false, me(0, 1, 36)], 22: [S, 'Umělá tráva', true, me(0, 2, 38)],
      31: [S, 'Umělá tráva', true, me(1, 0, 34)], 32: [N, 'Tráva', false, { dis: true }], 12: [N, 'Tráva', false, me(0, 0, 30)] };
    let asked = [];
    await page.route(/\/functions\/v1\/kacr/, r => { const b = JSON.parse(r.request().postData() || '{}'); asked.push(b);
      r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ runs: (b.runs || []).filter(id => det[id]).map(id => {
        const d = det[id]; return { id, judge: d[0], terrain: d[1], indoor: d[2], sct: 40, len: 160, n: 12, best: 31, me: d[3] }; }) }) }); });
    await fresh(); await dog(); await ev(() => { localStorage.removeItem('agility-kacrx-v1'); KX = {}; moreTab = 'diary'; show('more'); });
    await page.waitForTimeout(600);
    ok(asked.length === 1 && asked[0].dog === '1' && asked[0].runs.length === 6, 'dotaz na podrobnosti běhů: ' + JSON.stringify(asked));
    const t = await page.textContent('#lossBox');
    ok(/Posledních 6 závodních běhů/.test(t) && /Diskvalifikace\s*17 %/.test(t) && /S odmítnutím\s*33 %/.test(t) && /Nejvíc bodů ztrácíš odmítnutím/.test(t), 'rozbor ztrát: ' + t);
    ok(await page.isVisible('#lossBox [data-gpre="weave"]'), 'chybí doporučená sekvence na slalom');
    const j = await page.textContent('#moreBody .kx-tab');
    ok(/Jan Novák/.test(j) && /Eva Svoboda/.test(j), 'tabulka rozhodčích: ' + j);
    ok(/rozhodčích: 2/.test(await page.textContent('#moreBody .prog')), 'rozhodčí z kacr.info se počítají do postupu');
    /* podruhé už se neptá (podrobnosti jsou uložené) */
    asked = []; await ev(() => moreRender()); await page.waitForTimeout(300); ok(asked.length === 0, 'podrobnosti se stahují znovu');
    /* typ chyby zapsaný ručně */
    await page.click('[data-dy="zavod"]'); await page.click('#sheet [data-yf="zone"]'); await T.sheet('ok');
    const x = await ev(() => diary().find(e => e.faults));
    ok(x && x.faults.join() === 'zone', 'typ chyby se neuložil: ' + JSON.stringify(x));
    ok(/Zapsané chyby u 1 závodů: Zóna 1×/.test(await page.textContent('#lossBox')) && await page.isVisible('#lossBox [data-gpre="contacts"]'), 'zapsané chyby v rozboru');
    await page.unroute(/\/functions\/v1\/kacr/);
  });

  await step('jednotky metry a stopy', async () => {
    await fresh();
    const m = await ev(() => ({ s: $('specs').textContent, g: $('grid').textContent }));
    ok(/ m\b/.test(m.s) && /10 m/.test(m.g) && !/ft/.test(m.s), 'výchozí metry: ' + m.s);
    await ev(() => { moreTab = 'set'; show('more'); }); await page.click('[data-unit="ft"]');
    ok((await ev(() => SET.unit)) === 'ft', 'přepnutí na stopy');
    await page.click('.nav [data-v="plan"]'); await page.waitForTimeout(150);
    const f = await ev(() => ({ s: $('specs').textContent, g: $('grid').textContent, seg: $('pth').textContent, len: calc().total }));
    ok(/ ft/.test(f.s) && /33 ft/.test(f.g) && / ft/.test(f.seg) && !/\d m\b/.test(f.seg), 've stopách: ' + f.s + ' | ' + f.g.slice(0, 30));
    ok(new RegExp(String(Math.round(f.len * 3.28084)).slice(0, 3)).test(f.s.replace(/[,.]/g, '')), 'délka trati přepočtená na stopy: ' + f.s + ' / ' + f.len);
    await ev(() => { moreTab = 'set'; show('more'); }); await page.click('[data-unit="m"]');
    ok(!(await ev(() => SET.unit)), 'zpět na metry');
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Jednotky', 'Metry', 'Stopy (ft, yd/s)', 'Čas (s)', 'Délka trati (ft)', 'Odkaz na video (nepovinné)', '413,1 ft', '4,4 yd/s', '4,4 yd/s dle FCI',
      'Z toho z kacr.info: 2.', 'Z toho z kacr.info: 2. U některých ještě chybí rozhodčí, doplní se po načtení podrobností.', 'Novinky v AgiPlan 2.5',
      'Kde ztrácíš body', 'Posledních 5 závodních běhů z kacr.info', 'Na vítěze běhu ztrácíš v průměru 12 % času.', 'Nejvíc bodů ztrácíš odmítnutím.', 'Podle rozhodčího a povrchu',
      'Co se stalo (nepovinné)', 'Shozená tyčka', 'Špatná překážka', 'Zapsané chyby u 1 závodů: Zóna 1×', 'hala · umělá tráva', 'Sekvence: Vstupy do slalomu',
      ...[...new DOMParser().parseFromString(newsCheck.toString().match(/<ul class="news">.*?<\/ul>/)[0], 'text/html').querySelectorAll('li')].map(l => l.textContent)].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
