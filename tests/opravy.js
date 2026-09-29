/* Regresní testy oprav z kontroly kódu (1.10): každý krok hlídá jednu dřívější chybu */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  let shareResp = 'K7P2QX', getDelay = 0, gets = 0, backup = null;
  const T = await phone(browser, { timezoneId: 'Europe/Prague' }); const { page, ok, ev } = T;
  await offline(T.ctx, {
    get_catalog: { version: 0 },
    share_course: () => shareResp,
    backup_get: () => backup,
  });
  /* get_course se zpožděním (dvojité klepnutí na Načíst) */
  await T.ctx.route('**/rpc/get_course', async r => { gets++; await new Promise(res => setTimeout(res, getDelay));
    r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify([{ code: 'QQQQQQ', name: 'Z kódu', cls: 'A1', data: { W: 40, H: 20, obs: [{ id: 1, type: 'jump', x: 5, y: 5, rot: 0 }, { id: 2, type: 'jump', x: 11, y: 5, rot: 0 }], route: [1, 2] } }]) }); });
  await T.ctx.addInitScript(() => { window.__wl = []; Object.defineProperty(navigator, 'wakeLock', { configurable: true, value: { request: () => {
    const l = new EventTarget(); l.released = false; l.release = () => { l.released = true; l.dispatchEvent(new Event('release')); return Promise.resolve(); }; window.__wl.push(l); return Promise.resolve(l); } } }); });
  const fresh = async () => { await page.goto(base + '/'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  /* čistý start kroku: vestavěný parkur bez úprav */
  const clean = async (i) => { await fresh(); await ev(i => { S.meta.dirty = false; loadCourse(listFor('A1')[i || 0], true); $('toast').hidden = true; }, i); };
  try {
    T.step('první spuštění');
    await fresh();
    ok(await ev(() => !Object.keys(NEWC).length && document.querySelector('.nav .ndot').hidden), 'nová instalace hlásí „Nový parkur“');

    T.step('export v tréninku paměti');
    const q = await ev(() => { setPanel('quiz'); quizTest(); const n = (fieldSvgString().match(/marker-end/g) || []).length, still = panel === 'quiz' && QZ.phase === 'test'; setPanel(null); return { n, route: S.route.length, still }; });
    ok(q.n === q.route - 1 && q.still, 'export během tréninku paměti nemá celou trasu: ' + JSON.stringify(q));

    T.step('animace ve Videích');
    await page.click('.nav [data-v="video"]'); await page.click('#vidList button >> nth=0'); await page.waitForTimeout(150);
    await page.click('.nav [data-v="plan"]');
    ok(await ev(() => !VID.on), 'animace běží i po odchodu ze záložky Videa');

    T.step('sdílení kódem');
    shareResp = '<img src=x onerror=alert(1)>';
    await page.click('#planTools [data-t="share"]'); await page.click('#sheet [data-a="mk"]'); await page.waitForTimeout(250);
    ok(await ev(() => !$('shOut').innerHTML && /neplatný kód/.test($('toast').textContent)), 'neplatný kód ze serveru se vložil do stránky');
    shareResp = 'K7P2QX'; await page.click('#sheet [data-a="mk"]'); await page.waitForTimeout(250);
    ok(await ev(() => $('shOut').querySelector('.code').textContent === 'K7P2QX'), 'platný kód se neukázal');
    await ev(() => closeSheet());
    getDelay = 600; gets = 0; const n0 = await ev(() => myDB().length);
    await page.click('#planTools [data-t="share"]'); await page.fill('#shIn', 'qqqqqq');
    await ev(() => { const b = document.querySelector('#sheet [data-a="get"]'); b.click(); b.click(); b.click(); });
    await page.waitForTimeout(1000); if (await page.isVisible('#scrim')) await T.sheet('ok');
    ok(gets === 1 && await ev(() => myDB().length) === n0 + 1, 'opakované klepnutí na Načíst uložilo parkur víckrát (' + gets + ' požadavků)');

    T.step('3D průlet');
    await fresh();
    await ev(() => open3d()); await page.waitForTimeout(200);
    await page.setViewportSize({ width: 390, height: 700 }); await page.waitForTimeout(250);
    ok(await ev(() => { const c = $('c3d'), d = Math.min(2, devicePixelRatio || 1); return c.width === Math.round(c.clientWidth * d) && c.height === Math.round(c.clientHeight * d); }), '3D plátno po změně výšky zkreslené');
    const o3 = await ev(() => JSON.stringify(S.obs)); await page.keyboard.press('Control+z');
    ok(await ev(b => JSON.stringify(S.obs) === b, o3), 'Ctrl+Z měnil plán pod 3D průletem');
    await page.keyboard.press('Escape'); ok(await ev(() => $('ov3d').hidden), 'Escape nezavřel 3D průlet');
    await page.setViewportSize({ width: 390, height: 844 });

    T.step('uložení při plné paměti');
    await clean(); const nMy = await ev(() => myDB().length);
    await ev(() => { S.obs[0].x += 1; touch(); render(); window.__set = Storage.prototype.setItem; Storage.prototype.setItem = function (k, v) { if (k === 'agility-my-v1') { const e = new Error('full'); e.name = 'QuotaExceededError'; throw e; } return window.__set.call(this, k, v); }; });
    await page.click('#saveBtn'); await T.sheet('new');
    ok(await ev(n => S.meta.dirty && myDB().length === n && !myDB().some(c => c.id === S.meta.id), nMy), 'plán se tvářil uložený, i když se do Moje nezapsal');
    await ev(() => { Storage.prototype.setItem = window.__set; closeSheet(); });

    T.step('Zpět po uložení');
    await clean();
    await ev(() => { S.obs[0].rot = (S.obs[0].rot + 45) % 360; touch(); render(); });
    await page.click('#saveBtn'); await T.sheet('new');
    ok(await ev(() => !S.meta.dirty), 'po uložení je plán označený jako upravený');
    await page.click('#undoAll');
    ok(await ev(() => S.meta.dirty), 'po Zpět za uložením se plán netváří upravený');
    await page.click('#undoAll').catch(() => {});

    T.step('změna bez změny');
    await clean();
    await ev(() => { S.turns[0] = S.turns[0]; touch(); });
    ok(await ev(() => !S.meta.dirty && !UNDO.length), 'dotyk bez změny označil parkur jako upravený');

    T.step('čas ručně m:ss');
    await clean(); await page.click('.nav [data-v="run"]');
    await page.fill('#manT', '1:05,30');
    ok(await ev(() => Math.abs(runTime() - 65.3) < 1e-9), 'čas 1:05,30 není 65,3 s');
    await page.fill('#manT', '41,52');
    ok(await ev(() => Math.abs(runTime() - 41.52) < 1e-9), 'čas 41,52 se špatně přečetl');

    T.step('běh bez trasy');
    await ev(() => { S.route = []; S.sides = []; S.turns = []; touch(); render(); runRender(); });
    await page.fill('#manT', '30'); await page.click('#saveRun');
    ok(await ev(() => !(getMark(S.meta.id).runs || []).length && !/BO/.test($('result').textContent)), 'běh bez trasy se ohodnotil a uložil');

    T.step('otazníky z plánku');
    await clean();
    await ev(() => { S.chk = S.route.map((_, i) => i === 2 ? 1 : 0); render(); loadCourse(listFor('A1')[1], true); });
    ok(await ev(() => !S.chk && !document.querySelector('#routeList .chk')), 'otazníky z plánku zůstaly u jiného parkuru');

    T.step('přehrávání psa a psovoda');
    await clean();
    await page.click('#zOut'); await page.click('#zOut');
    const nObs = await ev(() => S.obs.length);
    await ev(() => { tool = 'jump'; mode = 'build'; ui(); anaSheet(); }); await page.waitForTimeout(200);
    await ev(() => ANA_ACT.play ? ANA_ACT.play() : document.querySelector('#sheet [data-an="play"], #sheet [data-a="play"]').click()).catch(() => {});
    await page.waitForTimeout(200);
    if (await ev(() => !!$('simG'))) {
      await T.tapField(1, 1);
      ok(await ev(n => S.obs.length === n && !$('simG'), nObs), 'klepnutí na plochu při přehrávání změnilo plán');
    } else T.errs.push('[přehrávání psa a psovoda] přehrávání se nespustilo');

    T.step('obnova z cloudu zrušená');
    await fresh();
    const k0 = await ev(() => cloudKey());
    backup = { app: 'agility-trasa', v: 3, at: new Date().toISOString(), data: {} };
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="backup"]'); await page.click('[data-bk="cget"]');
    await page.fill('#ckIn', 'jinytelefon1'); await T.sheet('ok'); await page.waitForTimeout(250); await T.sheet('x');
    ok(await ev(k => cloudKey() === k, k0), 'zrušená obnova z cloudu přepnula klíč zálohy');

    T.step('postup A2 → A3');
    await ev(() => { const L = []; for (let i = 0; i < 5; i++) L.push({ id: 'y' + i, kind: 'zavod', date: '2026-0' + (i + 1) + '-10', dog: null, cls: 'A2', g: 'VD', tot: '', place: '2', judge: i % 2 ? 'A' : 'B' }); localStorage.setItem('agility-diary-v1', JSON.stringify(L)); });
    await page.click('#moreTabs [data-m="diary"]');
    ok(await ev(() => !/5 z 5 zkoušek/.test($('moreBody').textContent)), 'VD bez trestných bodů se počítá do postupu do A3');

    T.step('datum v noci');
    await page.clock.setFixedTime(new Date('2026-10-01T00:30:00+02:00'));
    ok(await ev(() => localDate() === '2026-10-01'), 'datum po půlnoci je včerejší: ' + await ev(() => localDate()));
    await page.click('[data-dy="trenink"]');
    ok(await ev(() => $('yDate').value === '2026-10-01'), 'deník nabízí včerejší datum');
    await T.sheet('x');

    T.step('pravidla FCI a časy');
    const fc = await ev(() => {
      const c = JSON.parse(JSON.stringify(listFor('A1')[0])), by = {}; c.obs.forEach(o => by[o.id] = o);
      const jumps = c.route.map(id => by[id]).filter(o => o.type === 'jump');
      /* dva skoky → kruh a skok daleký: skoků podle FCI je pořád stejně */
      jumps[1].type = 'tire'; jumps[2].type = 'longjump';
      const want = c.route.filter(id => ['jump', 'tire', 'longjump'].includes(by[id].type)).length;
      const nJ = fciCheck(c.obs, c.route, c.turns, [], 'A1').find(x => new RegExp('^Skoků ' + want + ' ').test(x.t));
      /* 6 tunelů v trase */
      const c2 = JSON.parse(JSON.stringify(listFor('A3')[0])), by2 = {}; c2.obs.forEach(o => by2[o.id] = o);
      let nt = c2.route.filter(id => by2[id].type === 'tunnel').length; c2.route.forEach(id => { if (nt < 6 && by2[id].type === 'jump') { by2[id].type = 'tunnel'; nt++; } });
      const tu = fciCheck(c2.obs, c2.route, [], [], 'A3').find(x => /^Tunel/.test(x.t));
      const c7 = listFor('A1')[6], m = metrics(c7.obs, c7.route, 'A1', c7.turns);
      const L1 = Math.round(m.len * 10) / 10;
      return { nJ: nJ && nJ.ok, tu: tu && tu.ok, mct: m.mct === Math.ceil(L1 / m.mcs - 1e-9) };
    });
    ok(fc.nJ === true, 'kruh a skok daleký se nepočítají do skoků FCI');
    ok(fc.tu === false, 'chybí kontrola nejvýš 5 průběhů tunelem');
    ok(fc.mct, 'MČP se nepočítá z ukázané délky');
    const fl = await ev(() => { const c = listFor('A1')[0], t = c.route.map(() => null); t[t.length - 1] = 'wL'; return flowStats(c.obs, c.route, t).wraps; });
    ok(fl === 0, 'otočka po posledním skoku se počítá do rozboru');

    T.step('rozcvička');
    await fresh();
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="warm"]');
    await page.click('[data-wu="toggle"]'); const b1 = await page.$('[data-wu="toggle"]');
    await page.waitForTimeout(1300);
    ok(await ev(b => b.isConnected, b1), 'tlačítka rozcvičky se každou sekundu přestavují');
    ok(await ev(() => __wl.length === 1 && !__wl[0].released), 'při rozcvičce může obrazovka zhasnout');
    await page.click('[data-wu="toggle"]');
    ok(await ev(() => __wl.every(l => l.released)), 'po pauze rozcvičky zůstal zámek obrazovky');
    /* první cvik skončil před 5 s (telefon byl v pozadí): běží druhý a zbývá mu o 5 s méně */
    await ev(() => { WU.i = 0; WU.on = true; WU.end = Date.now() - 5000; warmTick(); });
    ok(await ev(() => WU.i === 1 && WU.left === WARM[1][1] - 5), 'odpočet rozcvičky nejde podle hodin: ' + await ev(() => WU.i + '/' + WU.left));
    await ev(() => warmAct('reset'));
  } catch (e) { T.fail(e); }
  await T.ctx.close();
  return T.errs;
};
