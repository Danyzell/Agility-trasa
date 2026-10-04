/* Parkur týdne a žebříček: týden podle ISO 8601, výběr parkuru, karta na Domů, žebříček ze serveru, odeslání výsledku po běhu. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { timezoneId: 'Europe/Prague' }); const { page, ok, ev } = T;
  /* všechna volání RPC se zapisují; odpovědi žebříčku a odeslání si kroky mění */
  const calls = [];
  let board = { week: '2026-W40', total: 0, rows: [], me: [] };
  let submit = { week: '2026-W40', rank: 3, rank_size: 2, total: 12, total_size: 5 };
  await offline(T.ctx, {
    get_catalog: { version: 0 },
    week_board: a => { calls.push(['week_board', a]); return board; },
    week_submit: a => { calls.push(['week_submit', a]); return submit; },
  });
  const of = fn => calls.filter(c => c[0] === fn).map(c => c[1]);
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash == null ? '#plan' : hash)); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const row = (rank, handler, dog, size, t, pen, mine) => ({ rank, handler, dog, size, t, pen, mine: !!mine });
  /* uloží běh na aktuálním parkuru: čas pod SČP (bez DIS), případně diskvalifikace */
  const saveRun = async (dis) => {
    await page.click('.nav [data-v="run"]');
    const t = await ev(() => Math.max(5, Math.round(curM().sct * 0.9 * 100) / 100));
    await page.fill('#manT', String(t).replace('.', ','));
    if (dis) await ev(() => { $('disChk').checked = true; $('disChk').dispatchEvent(new Event('change')); });
    await page.evaluate(() => $('saveRun').scrollIntoView({ block: 'center' })); await page.click('#saveRun'); await page.waitForTimeout(250);
    return t;
  };
  const wkLoad = async () => ev(() => { S.meta.dirty = false; const c = weekCourse(homeCls()); loadCourse(c, true); return c.id; });

  await step('týden podle ISO 8601', async () => {
    await fresh();
    const r = await ev(() => [[2026, 0, 1], [2027, 0, 1], [2026, 11, 28], [2024, 11, 30], [2021, 0, 3], [2020, 11, 31], [2026, 8, 27], [2026, 8, 28], [2026, 8, 29], [2026, 0, 4, 23, 59]]
      .map(a => weekKey(new Date(a[0], a[1], a[2], a[3] || 12, a[4] || 0))));
    const want = ['2026-W01', '2026-W53', '2026-W53', '2025-W01', '2020-W53', '2020-W53', '2026-W39', '2026-W40', '2026-W40', '2026-W01'];
    want.forEach((w, i) => ok(r[i] === w, `weekKey č. ${i + 1}: čekáno ${w}, vyšlo ${r[i]}`));
    /* pondělí po půlnoci už je nový týden (místní čas, ne UTC) */
    const mid = await ev(() => [weekKey(new Date(2026, 9, 4, 23, 59)), weekKey(new Date(2026, 9, 5, 0, 1))]);
    ok(mid[0] === '2026-W40' && mid[1] === '2026-W41', 'přelom neděle a pondělí o půlnoci: ' + mid);
  });

  await step('zařízení a přezdívka', async () => {
    await fresh();
    const a = await ev(() => [devId(), devId(), localStorage.getItem('agility-dev-v1') || '']);
    ok(a[0] && a[0].length >= 8 && a[0] === a[1], 'devId není stálé: ' + a.slice(0, 2));
    ok(a[2].indexOf(a[0]) >= 0, 'devId není uložené v agility-dev-v1');
    await page.reload(); await page.waitForTimeout(300);
    ok(await ev(id => devId() === id, a[0]), 'devId se po restartu změnilo');
  });

  await step('výběr parkuru týdne', async () => {
    const r = await ev(() => ['A1', 'A2', 'A3'].map(cls => { const a = weekCourse(cls), b = weekCourse(cls); return { same: !!a && a === b || (a && b && a.id === b.id), inList: !!a && listFor(cls).some(c => c.id === a.id), cls: a && a.cls, route: a && a.route.length }; }));
    r.forEach((x, i) => {
      const cls = ['A1', 'A2', 'A3'][i];
      ok(x.same, `weekCourse(${cls}) vrací pokaždé jiný parkur`);
      ok(x.inList, `weekCourse(${cls}) není z listFor(${cls})`);
      ok(x.cls === cls && x.route > 1, `weekCourse(${cls}) má špatnou třídu nebo trasu: ` + JSON.stringify(x));
    });
  });

  await step('karta na Domů a otevření parkuru', async () => {
    await fresh('');
    ok(await page.isVisible('#v-home [data-h="wkboard"]'), 'na Domů chybí tlačítko žebříčku');
    ok(await page.isVisible('#v-home .hm-wk [data-h="wkopen"]'), 'na Domů chybí karta parkuru týdne');
    const id = await ev(() => weekCourse(homeCls()).id);
    await page.click('#v-home .hm-wk [data-h="wkopen"]'); await page.waitForTimeout(200);
    if (await page.isVisible('#scrim')) await T.sheet('ok');
    ok(await ev(id => S.meta.id === id && view === 'plan', id), 'karta neotevřela parkur týdne: ' + await ev(() => S.meta.id + ' / ' + view));
  });

  await step('Domů na 360 px', async () => {
    await page.setViewportSize({ width: 360, height: 780 });
    await fresh('');
    const w = await ev(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    ok(w[0] <= w[1], `Domů přetéká do strany (${w[0]} > ${w[1]} px)`);
    const card = await ev(() => { const r = document.querySelector('#v-home .hm-wk').getBoundingClientRect(); return [r.left, r.right, document.documentElement.clientWidth]; });
    ok(card[0] >= 0 && card[1] <= card[2], 'karta týdne přetéká: ' + card);
    await page.setViewportSize({ width: 390, height: 844 });
  });

  await step('žebříček s výsledky', async () => {
    await fresh('');
    board = { week: '2026-W40', total: 3, rows: [row(1, 'Jana', 'Bety', 'M', 31.2, 0), row(2, 'Petr', 'Ája', 'S', 33.05, 5, true), row(3, 'Eva', 'Rony', 'L', 30.1, 10)], me: [] };
    /* Domů si může žebříček načíst i sama (náhled na kartě); počítají se jen volání od klepnutí */
    await page.waitForTimeout(300); const n0 = of('week_board').length;
    await page.click('#v-home [data-h="wkboard"]');
    await page.waitForSelector('#sheet .wkboard .wkrow'); await page.waitForTimeout(150);
    ok(await page.locator('#sheet .wkboard .wkrow').count() === 3, 'žebříček nemá 3 řádky: ' + await page.locator('#sheet .wkboard .wkrow').count());
    ok(await page.locator('#sheet .wkboard .wkrow.mine').count() === 1, 'vlastní výsledek není zvýrazněný');
    ok(/Petr/.test(await page.locator('#sheet .wkrow.mine').textContent()), 'zvýrazněný je cizí řádek');
    const a = of('week_board')[n0], exp = await ev(() => ({ cls: homeCls(), dev: devId(), wk: weekKey(new Date()) }));
    /* p_week smí být null (týden určí server) nebo aktuální týden */
    ok(a && a.p_cls === exp.cls && a.p_device === exp.dev && 'p_week' in a && (a.p_week == null || a.p_week === exp.wk) && !a.p_size, 'week_board má špatné argumenty: ' + JSON.stringify(a) + ' čekáno ' + JSON.stringify(exp));
    const chips = await ev(() => [...document.querySelectorAll('#sheet [data-wsz]')].map(b => b.getAttribute('data-wsz')));
    ok(JSON.stringify(chips) === '["","XS","S","M","I","L"]', 'volby velikosti: ' + JSON.stringify(chips));
    board = { week: '2026-W40', total: 1, rows: [row(1, 'Jana', 'Bety', 'M', 31.2, 0)], me: [] };
    await page.click('#sheet [data-wsz="M"]'); await page.waitForTimeout(300);
    const b = of('week_board');
    ok(b.length === n0 + 2 && b[n0 + 1].p_size === 'M', 'volba velikosti M nezavolala žebříček s p_size=M: ' + JSON.stringify(b.slice(n0)));
    ok(await page.locator('#sheet .wkboard .wkrow').count() === 1, 'po volbě velikosti se žebříček nepřekreslil');
    await page.click('#sheet [data-wsz=""]'); await page.waitForTimeout(300);
    const c = of('week_board');
    ok(c.length === n0 + 3 && !c[n0 + 2].p_size, 'volba Vše nezrušila filtr velikosti: ' + JSON.stringify(c.slice(n0)));
  });

  await step('vlastní umístění mimo první řádky', async () => {
    await fresh('');
    board = { week: '2026-W40', total: 80, rows: [row(1, 'Jana', 'Bety', 'M', 31.2, 0), row(2, 'Eva', 'Rony', 'L', 30.1, 5)], me: [row(57, 'Já', 'Rex', 'L', 44.4, 15, true)] };
    await ev(() => wkBoard()); await page.waitForSelector('#sheet .wkboard .wkrow'); await page.waitForTimeout(150);
    const mine = await ev(() => [...document.querySelectorAll('#sheet .wkrow.mine')].map(r => r.textContent).join('|'));
    ok(/57/.test(mine), 'vlastní umístění z „me“ (57.) chybí nebo není zvýrazněné: ' + mine);
  });

  await step('žebříček: chyba a znovu', async () => {
    await fresh('');
    board = { week: '2026-W40', total: 1, rows: [row(1, 'Jana', 'Bety', 'M', 31.2, 0)], me: [] };
    let n500 = 0;
    await page.route('**/rpc/week_board', r => { n500++; r.fulfill({ status: 500, contentType: 'application/json', body: '{"message":"x"}' }); });
    await ev(() => wkBoard()); await page.waitForTimeout(400);
    ok(n500 === 1, 'žebříček se nezeptal serveru');
    ok(await page.isVisible('#sheet .wkboard [data-a="retry"]'), 'při chybě serveru chybí Zkusit znovu');
    ok(await page.locator('#sheet .wkrow').count() === 0, 'při chybě se ukazují řádky');
    await page.unroute('**/rpc/week_board');
    await page.click('#sheet [data-a="retry"]'); await page.waitForTimeout(400);
    ok(await page.locator('#sheet .wkboard .wkrow').count() === 1, 'Zkusit znovu nenačetlo žebříček');
  });

  await step('prázdný žebříček', async () => {
    await fresh('');
    board = { week: '2026-W40', total: 0, rows: [], me: [] };
    await ev(() => wkBoard()); await page.waitForTimeout(400);
    ok(/Buď první/.test(await page.locator('#sheet .wkboard').textContent()), 'prázdný žebříček nemá „Buď první“');
    ok(await page.locator('#sheet .wkrow').count() === 0, 'prázdný žebříček má řádky');
  });

  await step('jména ze serveru jako text', async () => {
    await fresh('');
    const bad = '<img src=x onerror=alert(1)>';
    board = { week: '<img src=x onerror=alert(2)>', total: 2, rows: [row(1, bad, '<b id="xx">Pes</b>', 'M', 31.2, 0), row(2, 'Petr', '"><img src=x onerror=alert(3)>', 'S', 33, 0, true)],
      me: [row(2, 'Petr', '"><img src=x onerror=alert(3)>', 'S', 33, 0, true)] };
    await ev(() => wkBoard()); await page.waitForSelector('#sheet .wkboard .wkrow'); await page.waitForTimeout(400);
    const r = await ev(() => ({ img: document.querySelectorAll('#sheet img').length, b: !!document.getElementById('xx'), txt: $('sheet').textContent }));
    ok(!r.img && !r.b, 'jméno ze serveru se vložilo jako HTML');
    ok(r.txt.indexOf(bad) >= 0, 'jméno psovoda se neukázalo jako text');
  });

  await step('karta na Domů: jména ze serveru jako text', async () => {
    await fresh();
    await ev(() => localStorage.removeItem('agility-week-v1'));
    board = { week: '2026-W40', total: 5, rows: [row(1, 'x', '<img src=x onerror=alert(4)>', '<b id="yy">M</b>', 31.2, 0), row(2, 'y', 'Ája', 'S', 33, 5, true)], me: [] };
    await page.click('.nav [data-v="home"]'); await page.waitForTimeout(500);
    const r = await ev(() => ({ img: document.querySelectorAll('#v-home img').length, b: !!document.getElementById('yy'), top: ($('hmWkTop') || {}).textContent || '' }));
    ok(!r.img && !r.b, 'jméno psa ze serveru se na kartě vložilo jako HTML');
    ok(r.top.indexOf('<img') >= 0 && /Ája/.test(r.top), 'karta neukazuje první z žebříčku: ' + r.top);
  });

  await step('odeslání výsledku (bez psa)', async () => {
    await fresh();
    await ev(() => { localStorage.removeItem('agility-nick-v1'); });
    const id = await wkLoad();
    board = { week: '2026-W40', total: 1, rows: [row(1, 'Pavla', 'Rex', 'M', 20, 0, true)], me: [] };
    calls.length = 0;
    const t = await saveRun();
    ok(await page.isVisible('#sheet .wksend'), 'po běhu na parkuru týdne se nenabídlo odeslání');
    ok(await page.isVisible('#wkNick') && await page.isVisible('#wkDog') && await page.isVisible('#wkSize'), 'bez psa chybí pole přezdívka / pes / velikost');
    ok(await page.inputValue('#wkSize') === 'L', 'velikost bez psa nemá výchozí L');
    /* bez jména psa se nic neodešle */
    await page.fill('#wkNick', 'Pavla'); await page.click('#sheet .wksend [data-a="send"]'); await page.waitForTimeout(300);
    ok(!of('week_submit').length && await page.isVisible('#sheet .wksend'), 'odeslalo se bez jména psa');
    await page.fill('#wkDog', 'Rex'); await page.selectOption('#wkSize', 'M');
    /* chyba serveru: dialog zůstane a jde odeslat znovu */
    await page.route('**/rpc/week_submit', r => r.fulfill({ status: 500, contentType: 'application/json', body: '{}' }));
    await page.click('#sheet .wksend [data-a="send"]'); await page.waitForTimeout(400);
    ok(await page.isVisible('#sheet .wksend') && await ev(() => !document.querySelector('#sheet [data-a="send"]').disabled), 'po chybě odeslání nejde zkusit znovu');
    ok(/nepodařilo/.test(await ev(() => $('toast').textContent)), 'chyba odeslání se neohlásila');
    await page.unroute('**/rpc/week_submit');
    /* odmítnutí serverem: ukáže se česká zpráva ze serveru */
    await page.route('**/rpc/week_submit', r => r.fulfill({ status: 400, contentType: 'application/json', body: JSON.stringify({ code: 'P0001', message: 'neplatný čas' }) }));
    await page.click('#sheet .wksend [data-a="send"]'); await page.waitForTimeout(400);
    ok(/neplatný čas/.test(await ev(() => $('toast').textContent)), 'chybí zpráva serveru: ' + await ev(() => $('toast').textContent));
    await page.unroute('**/rpc/week_submit');
    /* dvojité klepnutí pošle výsledek jen jednou */
    await page.route('**/rpc/week_submit', async r => { await new Promise(res => setTimeout(res, 300)); await r.fallback(); });
    await ev(() => { const b = document.querySelector('#sheet .wksend [data-a="send"]'); b.click(); b.click(); });
    await page.waitForTimeout(500); await page.unroute('**/rpc/week_submit');
    await page.waitForSelector('#sheet .wkboard', { timeout: 3000 }).catch(() => {}); await page.waitForTimeout(200);
    const s = of('week_submit'), a = s[0] || {}, exp = await ev(id => ({ dev: devId(), cls: listFor(homeCls()).find(c => c.id === id).cls, run: getMark(id).runs.slice(-1)[0] }), id);
    ok(s.length === 1, 'week_submit zavoláno ' + s.length + '×');
    ok(a.p_course === id, 'p_course není id parkuru týdne: ' + a.p_course);
    ok(a.p_device === exp.dev, 'p_device není devId()');
    ok(a.p_cls === exp.cls, 'p_cls: ' + a.p_cls);
    ok(a.p_handler === 'Pavla' && a.p_dog === 'Rex' && a.p_size === 'M', 'přezdívka / pes / velikost: ' + JSON.stringify([a.p_handler, a.p_dog, a.p_size]));
    ok(a.p_t > 0 && Math.abs(a.p_t - t) < 0.01, `p_t ${a.p_t}, čekáno ${t}`);
    ok(a.p_pen >= 0 && exp.run && a.p_pen === exp.run.tot, 'p_pen: ' + a.p_pen);
    ok(a.p_len > 0, 'p_len: ' + a.p_len);
    ok(await page.isVisible('#sheet .wkboard'), 'po odeslání se neotevřel žebříček');
    ok((await ev(() => localStorage.getItem('agility-nick-v1') || '')).indexOf('Pavla') >= 0, 'přezdívka se neuložila');
    await ev(() => closeSheet());

    T.step('přezdívka zůstává');
    await page.reload(); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; });
    await saveRun();
    ok(await page.isVisible('#sheet .wksend'), 'druhý běh nenabídl odeslání');
    ok(await page.inputValue('#wkNick') === 'Pavla', 'přezdívka se nepředvyplnila: ' + await page.inputValue('#wkNick').catch(() => '?'));

    T.step('prázdná přezdívka');
    const n0 = of('week_submit').length;
    await page.fill('#wkNick', '   ');
    await page.click('#sheet .wksend [data-a="send"]'); await page.waitForTimeout(400);
    ok(of('week_submit').length === n0, 'odeslalo se bez přezdívky');
    ok(await page.isVisible('#sheet .wksend'), 'bez přezdívky se dialog zavřel');

    T.step('zrušit');
    await page.click('#sheet .wksend [data-a="x"]'); await page.waitForTimeout(200);
    ok(of('week_submit').length === n0 && !(await page.isVisible('#sheet .wksend')), 'Zrušit nezavřelo dialog nebo odeslalo');
  });

  await step('odeslání se psem', async () => {
    await fresh();
    await ev(() => { localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'd1', name: 'Bára', size: 'S', cls: 'A2' }])); localStorage.setItem('agility-dogcur-v1', JSON.stringify('d1')); });
    await page.reload(); await page.waitForTimeout(300);
    const id = await wkLoad();
    ok(await ev(id => weekCourse('A2').id === id, id), 'parkur týdne není ze třídy psa (A2)');
    calls.length = 0;
    await saveRun();
    ok(await page.isVisible('#sheet .wksend'), 'se psem se nenabídlo odeslání');
    ok(!(await page.isVisible('#wkDog')) && !(await page.isVisible('#wkSize')), 'se psem se znovu ptá na psa a velikost');
    await page.fill('#wkNick', 'Pavla');
    await page.click('#sheet .wksend [data-a="send"]'); await page.waitForTimeout(400);
    const a = of('week_submit')[0] || {};
    ok(a.p_dog === 'Bára' && a.p_size === 'S' && a.p_cls === 'A2' && a.p_course === id, 'se psem špatné argumenty: ' + JSON.stringify(a));
    await page.waitForTimeout(200); const wb = of('week_board').slice(-1)[0] || {};
    ok(wb.p_size === 'S' && wb.p_cls === 'A2', 'žebříček po odeslání není pro velikost a třídu psa: ' + JSON.stringify(wb));
    await ev(() => { closeSheet(); wkBoard(); }); await page.waitForTimeout(300);
    ok((of('week_board').slice(-1)[0] || {}).p_size === 'S', 'žebříček se psem nezačíná jeho velikostí');
    await ev(() => { closeSheet(); localStorage.removeItem('agility-dogs-v1'); localStorage.removeItem('agility-dogcur-v1'); });
  });

  await step('jiný parkur a diskvalifikace', async () => {
    await fresh();
    const id = await ev(() => { S.meta.dirty = false; const w = weekCourse(homeCls()), c = listFor(homeCls()).find(x => x.id !== w.id); loadCourse(c, true); return c.id; });
    await saveRun();
    ok(await ev(id => getMark(id).runs.length > 0, id), 'běh na jiném parkuru se neuložil');
    ok(!(await page.isVisible('#sheet .wksend')), 'odeslání se nabídlo u jiného parkuru než týdne');
    await ev(() => closeSheet());
    await wkLoad();
    await saveRun(true);
    ok(await ev(() => getMark(S.meta.id).runs.slice(-1)[0].g === 'DIS'), 'běh se neuložil jako DIS');
    ok(!(await page.isVisible('#sheet .wksend')), 'odeslání se nabídlo po diskvalifikaci');
  });

  /* nakonec: pevné hodiny (zůstanou pevné do konce kontextu) */
  await step('parkur týdne podle data', async () => {
    const at = async (iso) => { await page.clock.setFixedTime(new Date(iso)); return ev(() => [weekKey(new Date()), weekCourse('A1').id, weekCourse('A3').id]); };
    const mon = await at('2026-09-28T00:30:00+02:00'), sun = await at('2026-10-04T23:30:00+02:00');
    ok(mon[0] === '2026-W40' && sun[0] === '2026-W40', 'weekKey(new Date()) v týdnu: ' + mon[0] + ' / ' + sun[0]);
    ok(mon[1] === sun[1] && mon[2] === sun[2], 'parkur týdne se během týdne změnil');
    const ids = new Set([mon[1]]);
    for (const d of ['2026-10-05', '2026-10-12', '2026-10-19', '2026-10-26', '2026-11-02', '2026-11-09']) ids.add((await at(d + 'T12:00:00+01:00'))[1]);
    ok(ids.size >= 3, 'parkur týdne se v 7 týdnech skoro nemění (' + ids.size + ' různých)');
  });

  await T.ctx.close();
  return T.errs;
};
