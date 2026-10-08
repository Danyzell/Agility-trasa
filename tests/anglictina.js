/* Cizinci (angličtina): bez kacr.info, závodů v ČR, postupu KAČR a českých trenérů. Anglicky nastavený telefon v Česku nebo na Slovensku
   (časové pásmo Europe/Prague, Europe/Bratislava) ale česká specifika vidí. Hlášení chyb, cesta instalace a časové pásmo v denním pingu
   (rozšířený ping, záložní původní, dokud server nové sloupce nezná). 3D balíček se neukládá při instalaci, ale až při použití. */
const { phone } = require('./helpers');
const fs = require('fs'), path = require('path');

module.exports = async function ({ browser, base }) {
  /* pevné časové pásmo mimo Česko a Slovensko: anglický telefon v Česku má česká pravidla (krok níž), test nesmí záviset na pásmu počítače */
  const T = await phone(browser, { timezoneId: 'Europe/London' }); const { page, ok, ev } = T;
  const pings = []; let known = false;
  await T.ctx.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), r => {
    const u = r.request().url();
    if (/rpc\/app_ping/.test(u)) { const b = JSON.parse(r.request().postData() || '{}'); pings.push(b);
      if (Object.keys(b).length > 4 && !known) return r.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ message: 'Could not find the function public.app_ping(p_dev, p_err, …) in the schema cache' }) });
      return r.fulfill({ status: 200, contentType: 'application/json', body: 'null' }); }
    if (/rpc\/get_catalog/.test(u)) return r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ version: 0 }) });
    return r.abort(); });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  await page.goto(base + '/#home'); await w(300);
  await ev(() => { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-lang-v1', JSON.stringify('en')); });
  await page.goto('about:blank'); await page.goto(base + '/#home'); await w(400); await ev(() => { closeSheet(); $('toast').hidden = true; });

  await step('angličtina bez českých částí', async () => {
    const r = await ev(() => ({ lang: LANG, cz: CZONLY, comps: !!$('hmComps'), day: $('hmDay').innerHTML.length, sum: document.querySelector('#hmMore summary').innerText.replace(/\s+/g, ' ') }));
    ok(r.lang === 'en' && r.cz === true && !r.comps && r.day === 0 && /Challenges and leaderboards/.test(r.sum), 'Domů v angličtině: ' + JSON.stringify(r));
    await ev(() => { moreTab = 'diary'; show('more'); }); await w(150);
    ok(!(await page.isVisible('#moreBody .prog')) && !/kacr/.test(await page.textContent('#moreBody')), 'Deník nemá ukazovat postup KAČR ani kacr.info');
    await ev(() => { moreTab = 'coach'; show('more'); }); await w(100);
    ok(!/Czech|Česko/.test(await page.textContent('#moreBody')), 'Trenéři: česká skupina se má schovat');
    /* témata jsou ve Videích (Začínáme je nemá) */
    await ev(() => { VID.id = null; show('video'); }); await w(100);
    ok(/Jump/.test(await page.textContent('#vidList')) && !/First competitions|První závody/.test(await page.textContent('#vidList')), 'Videa: téma První závody (VP, kacr.info) jen česky');
    await ev(() => { moreTab = 'dogs'; show('more'); dogSheet(null); }); await w(100);
    ok(!(await page.isVisible('#sheet .kc-find')) && await page.isVisible('#sheet #dName'), 'okno psa bez hledání na kacr.info');
    await page.fill('#sheet #dName', 'Rex'); await T.sheet('ok');
    ok((await ev(() => DOGS.length)) === 1, 'psa jde uložit i bez pole kacr.info');
    /* pes propojený s kacr.info ho vidí dál */
    await ev(() => { DOGS[0].kacr = '1'; saveDogs(); moreTab = 'diary'; show('more'); }); await w(150);
    ok(/Where you lose points/.test(await page.textContent('#moreBody')), 'propojený pes má rozbor i v angličtině');
    await ev(() => { DOGS = []; saveDogs(); });
  });

  await step('česky zůstává všechno', async () => {
    await ev(() => localStorage.setItem('agility-lang-v1', JSON.stringify('cs'))); await page.goto('about:blank'); await page.goto(base + '/#home'); await w(400); await ev(() => closeSheet());
    const r = await ev(() => ({ cz: CZONLY, comps: !!$('hmComps'), sum: document.querySelector('#hmMore summary').innerText }));
    ok(r.cz === false && r.comps && /závody/.test(r.sum), 'česky mají závody zůstat: ' + JSON.stringify(r));
  });

  await step('hlášení chyb a cesta instalace', async () => {
    await ev(() => { localStorage.removeItem('agility-err-v1'); localStorage.removeItem('agility-ping-v1'); localStorage.removeItem('agility-instev-v1'); });
    await ev(() => { setTimeout(() => { throw new Error('Testovací chyba https://tajne.example/x'); }, 0); });
    await w(80); await ev(() => { Promise.reject(new Error('odmítnuto')); }); await w(80);
    /* schválně vyvolané chyby nejsou chyba testu */
    const keep = T.errs.filter(x => !/Testovací chyba|odmítnuto/.test(x)); T.errs.splice(0, T.errs.length, ...keep);
    const e = await ev(() => lsGet('agility-err-v1', null));
    ok(e && e.n === 2 && /Promise: odmítnuto/.test(e.last) && !/example/.test(JSON.stringify(e)), 'počítadlo chyb bez adres: ' + JSON.stringify(e));
    await ev(() => { const x = new Event('beforeinstallprompt'); x.prompt = () => {}; x.userChoice = Promise.resolve({}); window.dispatchEvent(x); });
    pings.length = 0; await ev(() => { window.PING_TEST = 1; appPing(); }); await w(500);
    ok(pings.length === 2 && Object.keys(pings[0]).length === 11 && typeof pings[0].p_tz === 'string' && pings[0].p_tz.length > 0 && pings[0].p_err === 2 && pings[0].p_inst_shown === true && /^(android|ios|desktop)$/.test(pings[0].p_plat) && pings[0].p_iab === false && Object.keys(pings[1]).length === 4,
      'rozšířený ping, pak záložní původní: ' + JSON.stringify(pings));
    ok(await ev(() => lsGet('agility-ping-v1', null) === localDate() && lsGet('agility-err-v1', null).n === 0), 'po pingu se chyby vynulují');
    /* server už nové sloupce zná: jen jeden dotaz */
    known = true; pings.length = 0; await ev(() => { localStorage.removeItem('agility-ping-v1'); appPing(); }); await w(400);
    ok(pings.length === 1 && Object.keys(pings[0]).length === 11, 'se znalým serverem jen rozšířený ping');
  });

  await step('anglický telefon v Česku a na Slovensku: česká pravidla a kacr.info', async () => {
    for (const [tz, cc] of [['Europe/Prague', 'CZ'], ['Europe/Bratislava', 'SK'], ['Europe/Berlin', 'FCI']]) {
      const C = await phone(browser, { timezoneId: tz });
      await C.ctx.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), r => /rpc\/get_catalog/.test(r.request().url()) ? r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ version: 0 }) }) : r.abort());
      await C.page.goto(base + '/#home'); await C.page.waitForTimeout(300);
      await C.ev(() => { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-lang-v1', JSON.stringify('en')); });
      await C.page.goto('about:blank'); await C.page.goto(base + '/#home'); await C.page.waitForTimeout(400); await C.ev(() => { closeSheet(); });
      const r = await C.ev(() => ({ lang: LANG, tz: TZ, rules: RU.cc, kacr: KACR_OK, cz: CZONLY, comps: !!$('hmComps') }));
      const cz = cc !== 'FCI';
      ok(r.lang === 'en' && r.tz === tz && r.rules === cc && r.kacr === cz && r.cz === !cz && r.comps === cz, tz + ': ' + JSON.stringify(r));
      await C.ev(() => { VID.id = null; show('video'); }); await C.page.waitForTimeout(100);
      ok(/First competitions/.test(await C.page.textContent('#vidList')) === cz, tz + ': téma První závody ve Videích ' + (cz ? 'má' : 'nemá') + ' být vidět');
      T.errs.push(...C.errs); await C.ctx.close();
    }
  });

  await step('3D balíček až při použití', async () => {
    const sw = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');
    const core = sw.match(/var CORE=\[([^\]]*)\]/)[1];
    ok(!/v3d/.test(core) && /LAZY=\/.*v3d/.test(sw) && /agility-trasa-2\.7/.test(sw), 'sw.js: 3D nemá být v CORE, má se ukládat při prvním použití');
  });

  await step('angličtina slovník', async () => {
    const miss = await ev(() => ['Výzvy a žebříčky', 'Parkur týdne, Zahrada týdne', 'Parkur týdne, Zahrada týdne, výzva dne', 'TECH', 'Threadle'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
