/* Stavba na telefonu: klepnutí do volného místa nejdřív zruší výběr, otáčení po 15°, natočení kolmo na trasu
   (jedna překážka i všechny skoky) a přiblížení dvěma prsty. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async () => { await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  /* prázdná plocha se třemi skoky v řadě do L: (5,5) → (15,5) → (15,15) */
  const lCourse = () => ev(() => {
    S.meta.dirty = false; planReset();
    S.obs = [{ id: 1, type: 'jump', x: 5, y: 5, rot: 90 }, { id: 2, type: 'jump', x: 15, y: 5, rot: 90 }, { id: 3, type: 'jump', x: 15, y: 15, rot: 0 }, { id: 4, type: 'tunnel', x: 25, y: 15, rot: 0, len: 5 }];
    S.route = [1, 2, 3, 4]; S.sides = []; S.turns = []; syncSides(); save(); drawGrid(); render(); ui(); undoReset();
  });

  await step('klepnutí do volného místa', async () => {
    await fresh(); await lCourse(); await page.click('#mBuild');
    await T.tapField(9, 13);
    let r = await ev(() => ({ n: S.obs.length, sel }));
    ok(r.n === 5 && r.sel != null, 'první klepnutí má položit skok: ' + JSON.stringify(r));
    ok(/zrušíš výběr/.test(await page.textContent('#hint')), 'nápověda s vybranou překážkou');
    await T.tapField(3, 16);
    r = await ev(() => ({ n: S.obs.length, sel }));
    ok(r.n === 5 && r.sel === null, 'klepnutí do volného místa s vybranou překážkou má jen zrušit výběr: ' + JSON.stringify(r));
    await T.tapField(3, 16);
    ok((await ev(() => S.obs.length)) === 6, 'další klepnutí už pokládá');
  });

  await step('otáčení po 15° a kolmo na trasu', async () => {
    await fresh(); await lCourse(); await page.click('#mBuild');
    await T.tapField(15, 5); /* vybrat skok č. 2 */
    ok((await ev(() => sel)) === 2, 'skok č. 2 se nevybral');
    await page.click('#rotR'); ok((await ev(() => getO(2).rot)) === 105, '↻15°');
    await page.click('#rotL'); await page.click('#rotL'); ok((await ev(() => getO(2).rot)) === 75, '↺15° dvakrát');
    /* č. 2: přiběh zleva (0°), odběh dolů (90°) → průměr 45° */
    await page.click('#rotP'); ok((await ev(() => getO(2).rot)) === 45, 'kolmo na trasu v rohu L: ' + await ev(() => getO(2).rot));
    ok(await ev(() => UNDO.length) > 0, 'natočení jde vrátit');
  });

  await step('natočit všechny skoky podle trasy', async () => {
    await fresh(); await lCourse();
    await ev(() => { S.turns[2] = 'wL'; }); /* otočka u č. 3: ten zůstane, jak je */
    const hadTurn = await ev(() => !!tuValid(S.turns[2], 'jump'));
    await page.click('#mRoute'); await page.click('#orientAll'); await page.waitForTimeout(100);
    const r = await ev(() => S.obs.map(o => o.rot));
    ok(r[0] === 0 && r[1] === 45 && r[3] === 0, 'skoky natočené podle trasy (tunel beze změny): ' + JSON.stringify(r));
    ok(hadTurn && r[2] === 0, 'skok s otočkou se nemá natáčet: ' + JSON.stringify(r) + ' otočka ' + hadTurn);
    ok(/Natočeno překážek: \d/.test(await page.textContent('#toast')), 'hláška o počtu');
    await page.click('#orientAll'); ok(/už jsou natočené/.test(await page.textContent('#toast')), 'podruhé nic');
  });

  await step('přiblížení dvěma prsty', async () => {
    await fresh(); await lCourse(); await page.click('#mBuild');
    const z0 = await ev(() => zoom);
    const r = await ev(() => {
      const wr = $('wrap'), b = wr.getBoundingClientRect(), cx = b.left + b.width / 2, cy = b.top + b.height / 2, n0 = S.obs.length;
      const mk = (id, x, y) => new Touch({ identifier: id, target: wr, clientX: x, clientY: y });
      const fire = (type, ts) => wr.dispatchEvent(new TouchEvent(type, { touches: ts, targetTouches: ts, changedTouches: ts, bubbles: true, cancelable: true }));
      fire('touchstart', [mk(1, cx - 40, cy), mk(2, cx + 40, cy)]);
      let prevented = false;
      for (let i = 1; i <= 5; i++) { const ts = [mk(1, cx - 40 - i * 12, cy), mk(2, cx + 40 + i * 12, cy)]; const e = new TouchEvent('touchmove', { touches: ts, targetTouches: ts, changedTouches: ts, bubbles: true, cancelable: true }); wr.dispatchEvent(e); prevented = prevented || e.defaultPrevented; }
      fire('touchend', []);
      return { z: zoom, lbl: $('zLbl').textContent, prevented, n: S.obs.length - n0, pinch: PINCH };
    });
    ok(r.z > z0 + .5 && r.z <= 4 && r.lbl === Math.round(r.z * 100) + ' %', 'roztažení prstů přiblíží: ' + z0 + ' → ' + JSON.stringify(r));
    ok(r.prevented && r.n === 0 && r.pinch === null, 'stránka se nemá posunout ani přiblížit a nic se nepoloží: ' + JSON.stringify(r));
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['⟂ trasa', '⟂ Natočit skoky podle trasy', 'Natočeno překážek: 3', 'Klepnutím polož skok na plochu. Překážku přesuneš tažením, plochu přiblížíš dvěma prsty.',
      'Klepnutím do volného místa zrušíš výběr. Tažením překážku přesuneš, tlačítky otočíš, dvěma prsty přiblížíš.', 'Otočit o 15° doleva', 'Skoky už jsou natočené podle trasy']
      .filter(t => { const v = trLookup(t); return v == null || /[ěščřžýáíéůú]/.test(v); }));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
