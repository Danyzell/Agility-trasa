/* Pasti: místa, kde pes za překážkou běží rovně na jinou překážku, zatímco trasa zatáčí. Výpočet, Rozbor a vrstva na plánu. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  await page.goto(base + '/#plan'); await page.waitForTimeout(400);
  /* uměle: 1 → 2 rovně, za 2 trasa zatáčí nahoru na 3; skok 4 stojí rovně za 2 a je natočený k psovi */
  const course = (withTrap) => ev(w => {
    const obs = [{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }, { id: 2, type: 'jump', x: 10, y: 10, rot: 0 }, { id: 3, type: 'jump', x: 13, y: 4, rot: 270 }];
    if (w) obs.push({ id: 4, type: 'jump', x: 14.5, y: 10, rot: 0 });
    S.meta.dirty = false; loadCourse({ id: null, name: 'Past', cls: 'A1', author: '', W: 20, H: 15, obs, route: [1, 2, 3], turns: [] }, true);
    const fs = flowStats(S.obs, S.route, S.turns); return { n: fs.traps, L: fs.trapL.map(t => ({ i: t.i, id: t.id, d: Math.round(t.d * 10) / 10, turn: Math.round(t.turn) })) };
  }, withTrap);

  await step('výpočet pasti', async () => {
    const a = await course(true), b = await course(false);
    ok(a.n === 1 && a.L.length === 1 && a.L[0].i === 1 && a.L[0].id === 4 && Math.abs(a.L[0].d - 4.5) < 0.6, 'past za č. 2 na skok 4: ' + JSON.stringify(a));
    ok(a.L[0].turn < 0, 'trasa za č. 2 zatáčí doleva (nahoru na plánu): ' + a.L[0].turn);
    ok(b.n === 0 && b.L.length === 0, 'bez skoku 4 není past: ' + JSON.stringify(b));
    /* katalog: seznam pastí odpovídá počtu v náročnosti, past není právě skákaná ani další překážka */
    const bad = await ev(() => listFor('A1').concat(listFor('A2'), listFor('A3')).filter(c => { const f = flowStats(c.obs, c.route, c.turns);
      return f.trapL.length !== f.traps || f.trapL.some(t => t.id === c.route[t.i] || t.id === c.route[t.i + 1]); }).map(c => c.id));
    ok(!bad.length, 'nesedí pasti u parkurů: ' + bad.join(', '));
  });

  await step('plán a Rozbor', async () => {
    await course(true);
    await ev(() => { PLANUI.traps = false; render(); ui(); $('toast').hidden = true; });
    ok(await ev(() => !document.querySelector('#marks .trap')), 'pasti se ukazují, i když jsou vypnuté');
    await T.tool('traps'); await page.waitForTimeout(150);
    ok(await ev(() => document.querySelectorAll('#marks .trap').length === 1 && PLANUI.traps === true && lsGet('agility-planui-v1', {}).traps === true), 'nástroj Pasti nezobrazil past na plánu');
    ok(await ev(() => /Pasti na plánu: 1/.test($('toast').textContent)), 'chybí oznámení s počtem pastí');
    ok(await ev(() => document.querySelector('#planTools [data-t="traps"]').classList.contains('on')), 'tlačítko Pasti není zapnuté');
    await ev(() => anaSheet()); await page.waitForTimeout(150);
    ok(await page.locator('#sheet .traps li').count() === 1 && /Po č\. 2/.test(await page.textContent('#sheet .traps')) && /mimo trasu/.test(await page.textContent('#sheet .traps')), 'Rozbor nevypsal past');
    await page.click('#sheet [data-a="traps"]'); await page.waitForTimeout(150);
    ok(await ev(() => !document.querySelector('#marks .trap') && PLANUI.traps === false), 'tlačítko v Rozboru pasti neschovalo');
    await ev(() => closeSheet());
    /* parkur bez pastí: Rozbor sekci nemá */
    await course(false); await ev(() => anaSheet()); await page.waitForTimeout(100);
    ok(await page.locator('#sheet .traps').count() === 0, 'Rozbor ukazuje pasti u parkuru bez pastí');
    await ev(() => closeSheet());
  });

  await step('angličtina', async () => {
    ok(await ev(() => trLookup('Po č. 7') === 'After no. 7' && trLookup('trasa zatáčí doleva o 74°') === 'the course turns left 74°' && /^straight ahead 4[.,]5 m$/.test(trLookup('rovně 4,5 m')) && trLookup('Pasti') === 'Traps'), 'chybí překlad');
  });

  await T.ctx.close();
  return T.errs;
};
