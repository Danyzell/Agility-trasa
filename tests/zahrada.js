/* Zahrada týdne a Zahradní liga: parkur 20 × 15 m z čísla týdne (stejný pro všechny), karta na Domů,
   odeslání výsledku do žebříčku (třída Z) a liga s body za umístění. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { timezoneId: 'Europe/Prague' }); const { page, ok, ev } = T;
  const calls = [];
  let league = { year: '2026', total: 0, rows: [], me: [] };
  const submit = { week: '2026-W40', rank: 1, rank_size: 1, total: 4, total_size: 2 };
  await offline(T.ctx, {
    get_catalog: { version: 0 },
    week_board: a => { calls.push(['week_board', a]); return { week: '2026-W40', total: 0, rows: [], me: [] }; },
    week_submit: a => { calls.push(['week_submit', a]); return submit; },
    league_board: a => { calls.push(['league_board', a]); return league; },
  });
  const of = fn => calls.filter(c => c[0] === fn).map(c => c[1]);
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash == null ? '#plan' : hash)); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const saveRun = async () => {
    await page.click('.nav [data-v="run"]');
    const t = await ev(() => Math.max(5, Math.round(curM().sct * 0.9 * 100) / 100));
    await page.fill('#manT', String(t).replace('.', ','));
    await page.evaluate(() => $('saveRun').scrollIntoView({ block: 'center' })); await page.click('#saveRun'); await page.waitForTimeout(250);
    return t;
  };

  await step('parkur z čísla týdne', async () => {
    await fresh();
    const r = await ev(() => {
      const a = gardenCourse('2026-W40'); ZGC = {}; const b = gardenCourse('2026-W40'), c = gardenCourse('2026-W41');
      const inv = {}; a.obs.forEach(o => { inv[o.type] = (inv[o.type] || 0) + 1; });
      const m = metrics(a.obs, a.route, a.cls, a.turns);
      const P = cutPts(a.obs, a.route, a.turns).P.slice(0, -2), inside = P.every(p => p.x >= -0.01 && p.y >= -0.01 && p.x <= 20.01 && p.y <= 15.01);
      return { same: JSON.stringify([a.obs, a.route, a.turns]) === JSON.stringify([b.obs, b.route, b.turns]), diff: JSON.stringify(a.obs) !== JSON.stringify(c.obs),
        id: a.id, W: a.W, H: a.H, n: a.route.length, inv, len: m.len, inside, find: (findCourse('zahrada-2026-W40') || {}).id, bad: findCourse('zahrada-xx') };
    });
    ok(r.same, 'stejný týden musí dát stejný parkur (i po smazání mezipaměti)');
    ok(r.diff, 'jiný týden má dát jiný parkur');
    ok(r.id === 'zahrada-2026-W40' && r.W === 20 && r.H === 15 && r.n === 9, 'id, plocha nebo počet překážek v pořadí: ' + JSON.stringify(r));
    ok((r.inv.jump || 0) <= 6 && (r.inv.tunnel || 0) <= 1 && (r.inv.weave || 0) <= 1 && Object.keys(r.inv).every(t => ['jump', 'tunnel', 'weave'].indexOf(t) >= 0), 'vybavení nad 6 skoků, tunel a slalom: ' + JSON.stringify(r.inv));
    ok(r.inside, 'překážky nebo dráha psa jsou mimo plochu 20 × 15 m');
    ok(r.len >= 20 && r.len < 120, 'délka trati mimo rozsah serveru: ' + r.len);
    ok(r.find === 'zahrada-2026-W40' && r.bad === null, 'findCourse pro zahradu nefunguje');
    /* stejný parkur i v novém načtení stránky (jiný telefon) */
    /* vybavení a plocha platí pro každý týden, ne jen pro jeden */
    const bad = await ev(() => { const out = []; for (let w = 40; w <= 52; w++) { const g = gardenCourse('2026-W' + w); if (!g) { out.push(w + ':none'); continue; }
      const inv = {}; g.obs.forEach(o => { inv[o.type] = (inv[o.type] || 0) + 1; });
      const P = cutPts(g.obs, g.route, g.turns).P.slice(0, -2); /* bez pomyslného rozběhu a doběhu 2 m */
      if ((inv.jump || 0) > 6 || (inv.tunnel || 0) > 1 || (inv.weave || 0) > 1 || Object.keys(inv).some(t => ['jump', 'tunnel', 'weave'].indexOf(t) < 0) || g.route.length !== 9 ||
        !P.every(p => p.x >= -0.01 && p.y >= -0.01 && p.x <= 20.01 && p.y <= 15.01)) out.push(w + ':' + JSON.stringify(inv) + ' n' + g.route.length); }
      return out; });
    ok(!bad.length, 'týdny mimo vybavení nebo plochu: ' + bad.join(' '));
    const one = await ev(() => JSON.stringify(gardenCourse('2026-W45').obs));
    await fresh();
    ok(await ev(() => JSON.stringify(gardenCourse('2026-W45').obs)) === one, 'po novém načtení vyšel jiný parkur');
  });

  await step('karta na Domů a otevření', async () => {
    await fresh('#home');
    ok(await page.isVisible('#v-home .hm-wk.zg') && /Zahrada týdne/.test(await page.textContent('#v-home')), 'na Domů chybí Zahrada týdne');
    ok(await page.isVisible('#v-home .hm-wk.zg .lg-line'), 'na kartě chybí Zahradní liga');
    await page.click('#v-home [data-h="wkopen"][data-wc="Z"]'); await page.waitForTimeout(300);
    ok(await ev(() => view === 'plan' && S.meta.id === 'zahrada-' + weekKey() && S.W === 20 && S.H === 15), 'Zaběhnout neotevřel zahradu týdne: ' + await ev(() => S.meta.id));
  });

  await step('odeslání výsledku', async () => {
    await ev(() => { localStorage.setItem('agility-nick-v1', 'Pavla'); DOGS = [{ id: 'dog-z', name: 'Rex', size: 'M', cls: 'A1' }]; DOGC = 'dog-z'; saveDogs(); });
    calls.length = 0;
    const t = await saveRun();
    ok(await page.isVisible('#sheet .wksend') && /Zahrada týdne/.test(await page.textContent('#sheet h3')), 'po běhu na zahradě se nenabídlo odeslání');
    await T.sheet('send'); await page.waitForTimeout(300);
    const s = of('week_submit')[0] || {};
    ok(s.p_cls === 'Z' && s.p_course === await ev(() => 'zahrada-' + weekKey()) && s.p_size === 'M' && s.p_dog === 'Rex' && Math.abs(s.p_t - t) < 0.01 && s.p_len >= 20, 'odeslání: ' + JSON.stringify(s));
    ok(await page.isVisible('#sheet .wkboard') && of('week_board').some(a => a.p_cls === 'Z'), 'po odeslání se neukázal žebříček zahrady');
    await ev(() => closeSheet());
    /* upravená zahrada už se do žebříčku neposílá */
    await ev(() => { S.meta.dirty = true; }); calls.length = 0;
    await saveRun();
    ok(!(await page.isVisible('#sheet .wksend')), 'upravená zahrada nabídla odeslání');
    await ev(() => { if (!$('scrim').hidden) closeSheet(); S.meta.dirty = false; });
  });

  await step('Zahradní liga', async () => {
    league = { year: '2026', total: 60, rows: [
      { rank: 1, handler: 'Bob', dog: 'Max <b>X</b>', size: 'M', pts: 28, weeks: 3, wins: 2, pod: 3, mine: false },
      { rank: 2, handler: 'Ana', dog: 'Bea', size: 'M', pts: 18, weeks: 2, wins: 1, pod: 2, mine: false }],
      me: [{ rank: 14, handler: 'Pavla', dog: 'Rex', size: 'M', pts: 6, weeks: 3, wins: 0, pod: 0, mine: true }] };
    await ev(() => lgBoard()); await page.waitForSelector('#lgList .lgrow', { timeout: 5000 });
    ok(await page.locator('#lgList .lgrow').count() === 3 && await page.isVisible('#lgList .wk-sep'), 'liga: řádky nebo oddělený vlastní řádek');
    ok(await ev(() => !document.querySelector('#lgList .who b b') && /Max <b>X<\/b>/.test($('lgList').textContent)), 'jméno psa se nezobrazilo jako text');
    ok(/28 b/.test(await page.textContent('#lgList')) && /V lize je celkem 60/.test(await page.textContent('#lgList')), 'body nebo počet týmů');
    ok(of('league_board').slice(-1)[0].p_size === 'M', 'liga se má otevřít ve velikosti psa');
    await page.click('#sheet [data-lsz=""]'); await page.waitForTimeout(250);
    ok(of('league_board').slice(-1)[0].p_size === null, 'filtr Vše');
    await ev(() => closeSheet());
    /* pořadí na kartě Domů z ligy */
    await ev(() => { localStorage.removeItem('agility-league-v1'); LG_TRY = 0; });
    await fresh('#home'); await page.waitForTimeout(400);
    ok(/14\. místo · 6 b · 3 týdnů/.test(await page.textContent('#v-home .lg-line')), 'karta neukazuje pořadí v lize: ' + await page.textContent('#v-home .lg-line'));
  });

  await step('obrázek ke sdílení', async () => {
    await ev(() => { window.__del = null; window.deliverFile = function (b, m, n, sh, t) { window.__del = { size: b.size, m, n, sh, t }; return Promise.resolve(); }; });
    /* výsledek ze zahrady je odeslaný z kroku výše: žebříček nabízí sdílení */
    await ev(() => wkBoard('M', 'Z')); await page.waitForTimeout(200);
    ok(await page.isVisible('#sheet [data-a="share"]'), 'v žebříčku zahrady chybí Sdílet výsledek');
    await page.click('#sheet [data-a="share"]'); await page.waitForFunction(() => window.__del, null, { timeout: 5000 });
    const d = await ev(() => window.__del);
    ok(d.m === 'image/png' && d.size > 20000 && d.sh === true && d.n === 'zahrada-' + await ev(() => weekKey()) + '.png' && /Zahrada týdne \d+: [\d,]+ s/.test(d.t) && /pawkur\.cz/.test(d.t), 'sdílený obrázek: ' + JSON.stringify(d));
    const dim = await ev(() => { const c = shareCanvas(wkShareData('Z')); return [c.width, c.height]; });
    ok(dim[0] === 1080 && dim[1] === 1350, 'rozměr obrázku ' + dim);
    ok(await ev(() => wkShareData('A3') === null), 'bez výsledku nemá být co sdílet');
    await ev(() => closeSheet());
    /* liga: tlačítko až když jsem v lize */
    await ev(() => { window.__del = null; lgBoard('M'); }); await page.waitForSelector('#lgList .lgrow', { timeout: 5000 });
    ok(await page.isVisible('#lgShare'), 'v lize chybí Sdílet pořadí');
    await page.click('#lgShare'); await page.waitForFunction(() => window.__del, null, { timeout: 5000 });
    ok(await ev(() => window.__del.n === 'zahradni-liga-' + lgYear() + '.png' && /14\. místo/.test(window.__del.t)), 'sdílení ligy: ' + JSON.stringify(await ev(() => window.__del)));
    await ev(() => closeSheet());
  });

  await step('angličtina', async () => {
    ok(await ev(() => trLookup('Zahrada týdne') === 'Garden of the week' && trLookup('Zahrada týdne 41') === 'Garden of the week 41' &&
      /^place 14 · 6 pts · 3 weeks$/.test(trLookup('14. místo · 6 b · 3 týdnů')) && trLookup('20 × 15 m · zbývá 3 dny') === '20 × 15 m · 3 days left' &&
      trLookup('20 × 15 m · zbývá poslední den') === '20 × 15 m · last day left'), 'chybí překlad');
  });

  await T.ctx.close();
  return T.errs;
};
