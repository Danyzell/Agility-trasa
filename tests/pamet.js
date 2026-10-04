/* Trénink paměti: úseky parkuru podle výrazných překážek a obratů, režimy celý parkur / po kouscích / odzadu. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  await page.goto(base + '/#plan'); await page.waitForTimeout(400);
  const open = async (id) => { await ev(id => { S.meta.dirty = false; loadCourse(findCourse(id), true); $('toast').hidden = true; setPanel('quiz'); }, id); await page.waitForTimeout(100); };
  /* projde aktuální krok testu správnými klepnutími */
  const solveStep = () => ev(() => { while (QZ && QZ.phase === 'test') quizTap(S.route[QZ.pos]); return QZ && QZ.phase; });

  await step('úseky parkuru', async () => {
    const bad = await ev(() => listFor('A1').concat(listFor('A2'), listFor('A3')).map(c => {
      const ch = memChunks(c.obs, c.route, c.turns), n = c.route.length, err = [];
      if (ch[0][0] !== 0 || ch[ch.length - 1][1] !== n - 1) err.push('nepokrývá');
      ch.forEach((x, k) => { if (k && x[0] !== ch[k - 1][1] + 1) err.push('díra'); if (x[1] - x[0] + 1 < 2 || x[1] - x[0] + 1 > 5) err.push('délka ' + (x[1] - x[0] + 1)); });
      if (ch.length < 3 || ch.length > 7) err.push('počet ' + ch.length);
      return err.length ? c.id + ':' + err.join(',') : null; }).filter(Boolean));
    ok(!bad.length, 'úseky: ' + bad.slice(0, 5).join(' | '));
    /* hranice úseků přednostně u výrazných překážek: konec úseku na ne-skoku aspoň u poloviny úseků v katalogu */
    const share = await ev(() => { let lm = 0, all = 0; listFor('A2').concat(listFor('A3')).forEach(c => { const by = {}; c.obs.forEach(o => by[o.id] = o);
      memChunks(c.obs, c.route, c.turns).slice(0, -1).forEach(x => { all++; if (by[c.route[x[1]]].type !== 'jump') lm++; }); }); return lm / all; });
    ok(share > 0.4, 'úseky nekončí u výrazných překážek: ' + share.toFixed(2));
  });

  await step('po kouscích', async () => {
    await open('A2-02-v5');
    ok(await page.isVisible('#quizBar .qz-chunks') && await page.locator('#quizBar .qz-chunks li').count() === await ev(() => QZ.chunks.length), 'chybí seznam úseků');
    await page.click('#quizBar [data-qm="chunk"]'); await page.click('#quizBar [data-ql="30"]');
    ok(await ev(() => SET.qzMode === 'chunk' && SET.qzLook === 30), 'volba způsobu a délky se neuložila');
    await page.click('#quizBar [data-q="go"]');
    const r1 = await ev(() => ({ ph: QZ.phase, f: QZ.from, t: QZ.to, c0: QZ.chunks[0], left: Math.round((QZ.lookEnd - Date.now()) / 1000) }));
    ok(r1.ph === 'look' && r1.f === 0 && r1.t === r1.c0[1] && r1.left <= 15 && r1.left >= 14, 'první krok: ' + JSON.stringify(r1));
    await page.click('#quizBar [data-q="test"]');
    /* chyba se zapíše k úseku */
    await ev(() => quizTap(S.route[QZ.pos + 1] === S.route[QZ.pos] ? -1 : S.route[QZ.pos + 1]));
    ok(await ev(() => QZ.miss === 1 && QZ.missBy[0] === 1), 'chyba se nezapsala k úseku');
    let ph = await solveStep();
    ok(ph === 'next' && await page.isVisible('#quizBar [data-q="next"]'), 'po úseku má přijít další: ' + ph);
    await page.click('#quizBar [data-q="next"]'); await page.click('#quizBar [data-q="test"]');
    ok(await ev(() => QZ.from === 0 && QZ.to === QZ.chunks[1][1] && QZ.pos === 0), 'druhý krok má zkoušet od začátku po konec 2. úseku');
    for (let k = 0; k < 10 && ph !== 'done'; k++) { ph = await solveStep(); if (ph === 'next') await ev(() => { QZ.step++; quizLook(); quizTest(); }); }
    ok(ph === 'done' && /Nejvíc chyb v úseku 1–/.test(await page.textContent('#quizBar')), 'konec: ' + ph + ' ' + await page.textContent('#quizBar'));
    await ev(() => setPanel(null));
  });

  await step('odzadu', async () => {
    await open('A1-01-v5');
    await page.click('#quizBar [data-qm="back"]'); await page.click('#quizBar [data-q="go"]');
    const r = await ev(() => ({ f: QZ.from, t: QZ.to, last: QZ.chunks[QZ.chunks.length - 1], n: S.route.length }));
    ok(r.f === r.last[0] && r.t === r.n - 1, 'odzadu má začít posledním úsekem: ' + JSON.stringify(r));
    /* mimo zkoušený úsek je dráha tlumená */
    ok(await ev(() => document.querySelectorAll('#pth path[opacity]').length > 0), 'dráha mimo úsek není tlumená');
    await page.click('#quizBar [data-q="test"]'); let ph = await solveStep();
    await page.click('#quizBar [data-q="next"]');
    const r2 = await ev(() => ({ f: QZ.from, prev: QZ.chunks[QZ.chunks.length - 2][0] }));
    ok(ph === 'next' && r2.f === r2.prev, 'druhý krok odzadu: ' + JSON.stringify(r2));
    await ev(() => setPanel(null));
  });

  await step('celý parkur a angličtina', async () => {
    await ev(() => { SET.qzMode = 'all'; lsSet(SETK, SET); });
    await open('A1-01-v5'); await page.click('#quizBar [data-q="go"]');
    ok(await ev(() => QZ.mode === 'all' && QZ.from === 0 && QZ.to === S.route.length - 1 && Math.round((QZ.lookEnd - Date.now()) / 1000) >= 29), 'celý parkur: rozsah nebo délka prohlídky');
    await page.click('#quizBar [data-q="test"]'); ok(await solveStep() === 'done', 'celý parkur se nedokončil');
    await ev(() => setPanel(null));
    ok(await ev(() => trLookup('Po kouscích') === 'In chunks' && trLookup('Krok 2 z 5') === 'Step 2 of 5' && /^serpentine · tunnel$/i.test(trLookup('had · tunel'))), 'chybí překlad: ' + await ev(() => trLookup('had · tunel')));
  });

  await T.ctx.close();
  return T.errs;
};
