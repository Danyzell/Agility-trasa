/* Vzhled 5–8 (3.0): oslava čistého běhu (okno s konfetami, tváří psa, časem pod SČP a Sdílet; po ní nabídka žebříčku parkuru týdne;
   menší oslava za novou sérii dní jen hláškou), cesta k postupu v Deníku jako kroužky s cílem, Tento týden s velkými čísly
   a sloupci běhů po dnech, tlačítka se spodní hranou a zavibrování při START. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 }, week_board: { rows: [], total: 0 }, league_board: { rows: [] } });
  await T.ctx.addInitScript(() => { try {
    if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 }));
    if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('3.0'));
    localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 }));
    window.VIB = []; navigator.vibrate = (p) => { window.VIB.push(p); return true; };
  } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await w(400); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const dog = () => ev(() => { DOGS = [{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2', look: 1 }]; DOGC = 'd1'; saveDogs(); });
  /* běh v Běhu: parkur v Plánu, čas ručně, Uložit běh */
  const run = async (c, t) => { await ev(([c, t]) => { S.meta.dirty = false; loadCourse(c, true); show('run'); $('manT').value = String(t).replace('.', ','); RUN.f = 0; RUN.r = 0; }, [c, t]); await page.click('#saveRun'); await w(250); };
  await fresh(); await dog();

  await step('čistý běh: okno s oslavou, čas pod SČP, Sdílet, vibrace', async () => {
    const c = await ev(() => listFor('A2')[0]);
    const sct = await ev((c) => { loadCourse(c, true); return curM().sct; }, c);
    await ev(() => { window.VIB = []; });
    await run(c, sct - 3);
    const r = await ev(() => { const s = $('sheet').querySelector('.cele'); return s && { h: s.querySelector('h3').textContent, nums: [...s.querySelectorAll('.cele-nums b')].map(b => b.textContent), lbl: [...s.querySelectorAll('.cele-nums span')].map(b => b.textContent), dog: !!s.querySelector('.cele-dog .dava'), cv: !!s.querySelector('canvas'), sub: s.querySelector('.cele-sub').textContent, share: !!s.querySelector('[data-a="share"]'), vib: window.VIB.length }; });
    ok(r && r.h === 'Čistý běh!' && r.nums.length === 2 && /^−3,00 s$/.test(r.nums[1]) && r.lbl.join() === 'čas,pod SČP' && r.dog && r.cv && /Fany · /.test(r.sub) && r.share && r.vib > 0, 'oslava čistého běhu: ' + JSON.stringify(r));
    await page.click('#sheet [data-a="x"]'); await w(100);
    ok(await ev(() => $('scrim').hidden), 'Zavřít zavře oslavu');
    /* běh s chybou: žádná oslava */
    await ev(() => { RUN.f = 1; }); await ev(([c, t]) => { loadCourse(c, true); show('run'); $('manT').value = String(t).replace('.', ','); RUN.f = 1; RUN.r = 0; }, [c, sct - 3]); await page.click('#saveRun'); await w(200);
    ok(await ev(() => $('scrim').hidden && !$('sheet').querySelector('.cele')), 'běh s chybou nemá oslavu');
    const n = await ev(() => $('sheet').querySelector('.cele') ? 0 : (getMark(S.meta.id).runs || []).length);
    ok(n === 2, 'oba běhy jsou uložené: ' + n);
  });

  await step('parkur týdne: oslava první, nabídka žebříčku po ní (i po zavření klepnutím vedle)', async () => {
    const c = await ev(() => weekCourse('A2'));
    const sct = await ev((c) => { loadCourse(c, true); return curM().sct; }, c);
    await run(c, sct - 2);
    ok(await ev(() => !!$('sheet').querySelector('.cele') && !$('sheet').querySelector('.wksend')), 'nejdřív oslava');
    await page.click('#sheet [data-a="x"]'); await w(150);
    ok(await ev(() => !!$('sheet').querySelector('.wksend')), 'po oslavě nabídka odeslání do žebříčku');
    await ev(() => closeSheet());
    await run(c, sct - 2);
    await page.mouse.click(10, 10); await w(150); /* klepnutí vedle okna */
    ok(await ev(() => !!$('sheet').querySelector('.wksend')), 'nabídka žebříčku i po zavření klepnutím vedle okna');
    await ev(() => closeSheet());
  });

  await step('menší oslava za sérii dní: hláška, bez okna', async () => {
    const c = await ev(() => listFor('A2')[1]);
    await ev((c) => { const d = Date.now(); setMark(c.id, { done: true, runs: [{ d: d - 864e5, t: 40, f: 1, r: 0, tot: 5, g: 'VD', sct: 45, mct: 63, len: 150, dog: 'd1', cls: 'A2' }, { d: d - 2 * 864e5, t: 40, f: 1, r: 0, tot: 5, g: 'VD', sct: 45, mct: 63, len: 150, dog: 'd1', cls: 'A2' }] });
      Object.keys(MK).forEach(id => { if (id !== c.id) { MK[id].runs = (MK[id].runs || []).filter(x => localDate(new Date(x.d)) !== localDate()); } }); lsSet(MKK, MK); }, c);
    const sct = await ev((c) => { loadCourse(c, true); return curM().sct; }, c);
    await ev(() => { $('toast').hidden = true; });
    await ev(([c, t]) => { loadCourse(c, true); show('run'); $('manT').value = String(t).replace('.', ','); RUN.f = 1; RUN.r = 0; }, [c, sct - 2]); await page.click('#saveRun'); await w(200);
    const r = await ev(() => ({ cele: !!$('sheet').querySelector('.cele'), toast: $('toast').textContent, st: streak(activeDays()) }));
    ok(!r.cele && r.st === 3 && /🔥 Trénujete 3 dny v řadě/.test(r.toast), 'série 3 dny jako hláška: ' + JSON.stringify(r));
  });

  await step('cesta k postupu v Deníku: kroužky a cíl', async () => {
    await ev(() => { DOGS[0].cls = 'A1'; saveDogs(); lsSet(DIARYK, [{ id: 'y1', kind: 'zavod', date: '2026-04-11', dog: 'd1', cls: 'A1', g: 'V', tot: '0', place: '1', judge: 'Novák' }, { id: 'y2', kind: 'zavod', date: '2026-05-01', dog: 'd1', cls: 'A1', g: 'V', tot: '0', place: '2', judge: 'Svobodová' }]); moreTab = 'diary'; show('more'); }); await w(200);
    const r = await ev(() => { const p = document.querySelector('#moreBody .prog'); return { n: p.querySelectorAll('.ppath i').length, on: p.querySelectorAll('.ppath i.on').length, goal: p.querySelector('.ppath b').textContent, t: p.textContent }; });
    ok(r.n === 3 && r.on === 2 && r.goal === 'A2' && /2 z 3 zkoušek/.test(r.t), 'kroužky postupu: ' + JSON.stringify(r));
    await ev(() => { DOGS[0].cls = 'A2'; saveDogs(); lsSet(DIARYK, []); });
  });

  await step('Tento týden: velká čísla a sloupce po dnech', async () => {
    await ev(() => { MK = {}; lsSet(MKK, MK); lsSet(DIARYK, []); const L = listFor('A2'), d = Date.now();
      setMark(L[0].id, { done: true, runs: [{ d, t: 40, f: 0, r: 0, tot: 0, g: 'V', sct: 45, mct: 63, len: 150, dog: 'd1', cls: 'A2' }, { d: d - 60000, t: 44, f: 1, r: 0, tot: 5, g: 'VD', sct: 45, mct: 63, len: 150, dog: 'd1', cls: 'A2' }] });
      setMark(L[1].id, { done: true, runs: [{ d: d - 864e5, t: 40, f: 1, r: 0, tot: 5, g: 'VD', sct: 45, mct: 63, len: 150, dog: 'd1', cls: 'A2' }] }); show('home'); }); await w(200);
    const r = await ev(() => ({ nums: [...document.querySelectorAll('#v-home .wk-nums b')].map(b => b.textContent), lbl: [...document.querySelectorAll('#v-home .wk-nums small')].map(b => b.textContent), days: document.querySelectorAll('#v-home .hm-week > div').length,
      on: document.querySelectorAll('#v-home .hm-week i.on').length, today: document.querySelector('#v-home .hm-week .today i').style.height, hs: [...document.querySelectorAll('#v-home .hm-week i')].map(i => parseInt(i.style.height, 10)) }));
    const mon = new Date(); const dow = (mon.getDay() + 6) % 7; /* pondělí: včerejšek patří do minulého týdne */
    const yest = dow >= 1;
    ok(r.nums.join() === (yest ? '3,1,2' : '2,1,1') && r.lbl.join() === (yest ? 'běhy,čistý,dny s tréninkem' : 'běhy,čistý,den s tréninkem') && r.days === 7 && r.on === (yest ? 2 : 1) && r.today === '100%' && r.hs.length === 7 && r.hs.every(h => h >= 12), 'čísla a sloupce týdne: ' + JSON.stringify(r));
  });

  await step('tlačítka se spodní hranou, vibrace při START', async () => {
    const r = await ev(() => ({ pri: getComputedStyle(document.querySelector('#v-home .hm-acts .pri')).boxShadow, go: getComputedStyle(document.querySelector('#v-home .hm-go:not(.sec):not(.ok)') || document.querySelector('#v-home .hm-go')).boxShadow }));
    ok(/0px 3px 0px/.test(r.pri) && /0px 3px 0px/.test(r.go), 'dlaždice a tlačítka na Domů mají spodní hranu: ' + JSON.stringify(r));
    await ev(() => { show('run'); window.VIB = []; });
    const st = await ev(() => getComputedStyle($('startBtn')).boxShadow);
    ok(/0px 6px 0px/.test(st), 'START má spodní hranu: ' + st);
    await page.click('#startBtn'); await w(80); await page.click('#startBtn'); await w(80);
    const v = await ev(() => ({ vib: window.VIB.slice(), on: RUN.on }));
    ok(v.vib.length === 2 && v.vib[0] === 35 && Array.isArray(v.vib[1]) && !v.on, 'START a STOP zavibrují: ' + JSON.stringify(v));
    await ev(() => resetRun());
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Čistý běh!', 'pod SČP', 'nad SČP', 'čas', '12. čistý běh', 'Čistý běh na parkuru A2-07: 41,52 s', 'běhy', 'čistých', 'dny s tréninkem', 'den s tréninkem', 'Trénujete 3 dny v řadě. Jen tak dál!', 'Sdílet', 'Zavřít', 'Tento týden'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
