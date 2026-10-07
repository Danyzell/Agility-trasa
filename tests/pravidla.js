/* Pravidla podle země (Více → Nastavení → Pravidla): třídy, postup do vyšší třídy, maximální čas, kacr.info jen pro ČR a SR. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const open = async (cc) => { await page.goto('about:blank'); await ev(() => 1).catch(() => {}); await page.goto(base + '/#home'); await w(200);
    await ev((c) => { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-rules-v1', JSON.stringify(c)); }, cc);
    await page.goto('about:blank'); await page.goto(base + '/#home'); await w(400); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const diaryDE = () => ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'L', cls: 'A3' }]; DOGC = 'd1'; saveDogs();
    const z = (date, cls, g, tot, place, judge) => ({ id: 'y' + Math.random(), kind: 'zavod', date, dog: 'd1', cls, g, tot, place, judge });
    const y = new Date().getFullYear();
    lsSet(DIARYK, [z(y + '-03-01', 'A3', 'V', '0', '2', 'Müller'), z(y + '-04-01', 'A3', 'V', '0', '5', 'Schmidt'), z(y + '-05-01', 'A3', 'V', '5', '1', 'Müller'),
      z(y + '-02-01', 'A0', 'V', '0', '', ''), z(y + '-02-02', 'A0', 'V', '0', '', ''), z(y + '-02-03', 'A0', 'V', '3', '', ''), z(y + '-02-04', 'A0', 'VD', '5', '', '')]);
    moreTab = 'diary'; show('more'); });

  await step('výchozí Česko', async () => {
    await open('CZ');
    const r = await ev(() => ({ cc: RU.cc, kacr: KACR_OK, comps: !!$('hmComps'), sel: $('rulesSel') ? 1 : 0 }));
    ok(r.cc === 'CZ' && r.kacr && r.comps, 'Česko: ' + JSON.stringify(r));
    await ev(() => { moreTab = 'set'; show('more'); });
    ok(await page.isVisible('#rulesSel') && (await page.inputValue('#rulesSel')) === 'CZ', 'v Nastavení chybí volba Pravidla');
  });

  await step('Německo: třídy A0–A3, postup, udržení v A3, bez kacr.info', async () => {
    await open('DE');
    const r = await ev(() => ({ cc: RU.cc, kacr: KACR_OK, comps: !!$('hmComps'), day: $('hmDay').innerHTML.length }));
    ok(r.cc === 'DE' && !r.kacr && !r.comps && r.day === 0, 'Německo bez závodů z kacr.info: ' + JSON.stringify(r));
    await diaryDE(); await w(150);
    const t = await page.textContent('#moreBody');
    ok(/Postup A0 → A1: 3× bez trestných bodů/.test(t) && /Nebo: 2× bez trestných bodů a 2× do 5,00 \(4 z 4\)/.test(t), 'postup A0 → A1 podle VDH: ' + t.slice(0, 300));
    ok(/2 z 3 zkoušek/.test(t), 'A0: 2 čisté ze 3');
    ok(/Udržení v A3/.test(t) && /Letos 2 z 3/.test(t), 'udržení v A3 (VDH): ' + (t.match(/Udržení[^.]*Letos \d z \d/) || [''])[0]);
    ok(/VDH Prüfungsordnung/.test(t) && /vdh\.de/.test(t), 'odkaz na pravidla VDH');
    await ev(() => { moreTab = 'dogs'; show('more'); dogSheet(null); }); await w(100);
    ok((await ev(() => [...document.querySelectorAll('#sheet #dCls option')].map(o => o.value).join())) === 'A0,A1,A2,A3' && !(await page.isVisible('#sheet .kc-find')), 'třídy psa VDH a bez kacr.info');
    await ev(() => closeSheet());
    /* maximální čas 1,5× SČP */
    await ev(() => loadCourse(listFor('A2')[0], true)); if (await page.isVisible('#scrim')) await T.sheet('ok');
    const m = await ev(() => curM());
    ok(m.mct === Math.ceil(m.sct * 1.5 - 1e-9) && /1,5× SČP/.test(await ev(() => specsHTML(curM()))), 'MČP = 1,5× SČP: ' + JSON.stringify([m.sct, m.mct]));
  });

  await step('Rakousko: LK 1–3 a jumping v postupu', async () => {
    await open('AT');
    await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'L', cls: 'A1' }]; DOGC = 'd1'; saveDogs();
      const z = (date, cls, g, tot, place, judge) => ({ id: 'y' + Math.random(), kind: 'zavod', date, dog: 'd1', cls, g, tot, place, judge });
      lsSet(DIARYK, [z('2026-03-01', 'A1', 'V', '0', '4', 'Huber'), z('2026-04-01', 'A1', 'V', '0', '7', 'Gruber'), z('2026-05-01', 'A1', 'V', '0', '2', 'Huber'), z('2026-05-02', 'Jumping', 'V', '0', '3', 'Huber')]);
      moreTab = 'diary'; show('more'); }); await w(150);
    const t = await page.textContent('#moreBody');
    ok(/Postup LK 1 → LK 2: 3× Agility Výborně s 0,00 u 2 rozhodčích a 1× Jumping s 0,00/.test(t) && /3 z 3 zkoušek · rozhodčích: 2/.test(t) && /Jumping: 1 z 1/.test(t) && /podmínka splněna/.test(t), 'postup ÖKV: ' + t.slice(0, 400));
    await ev(() => { moreTab = 'dogs'; show('more'); dogSheet(null); }); await w(100);
    ok((await ev(() => [...document.querySelectorAll('#sheet #dCls option')].map(o => o.textContent).join())) === 'LK 1,LK 2,LK 3', 'rakouské názvy tříd');
    await ev(() => closeSheet());
    ok(/Oldies/.test(await ev(() => { moreTab = 'dogs'; show('more'); return $('moreBody').textContent; })), 'poznámka o Oldies u výšek');
  });

  await step('Slovensko: kacr.info zůstává, povinný postup po 6× Výborně', async () => {
    await open('SK');
    ok(await ev(() => KACR_OK && !!$('hmComps')), 'Slovensko má mít závody z kacr.info');
    await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'L', cls: 'A1' }]; DOGC = 'd1'; saveDogs();
      lsSet(DIARYK, [1, 2, 3, 4, 5, 6].map(i => ({ id: 'y' + i, kind: 'zavod', date: '2026-0' + Math.min(9, i) + '-01', dog: 'd1', cls: 'A1', g: 'V', tot: '0', place: '', judge: 'Novák' })));
      moreTab = 'diary'; show('more'); }); await w(150);
    const t = await page.textContent('#moreBody');
    ok(/Postup A1 → A2: 3× Výborně u 2 rozhodčích/.test(t) && /rozhodčích: 1/.test(t) && /Nebo: 6× Výborně bez trestných bodů.*\(6 z 6\)/.test(t) && /podmínka splněna/.test(t), 'postup ASKA přes 6× Výborně: ' + t.slice(0, 400));
    ok(/Veteráni/.test(await ev(() => { moreTab = 'dogs'; show('more'); return $('moreBody').textContent; })), 'poznámka o veteránech');
  });

  await step('angličtina', async () => {
    const miss = await ev(() => { const out = []; Object.keys(RULES).forEach(k => { const R = RULES[k]; [R.l, R.body, R.note].concat(R.promo.map(p => p.l), R.promo.filter(p => p.alt).map(p => p.alt.l), R.keep ? [R.keep.l] : []).filter(Boolean).forEach(t => { if (trLookup(t) == null) out.push(t); }); });
      ['Postup LK 1 → LK 2: 3× bez trestných bodů', 'Nebo: 2× bez trestných bodů a 2× do 5,00 (4 z 4)', '2 z 3 zkoušek', '2 z 3 zkoušek · rozhodčích: 1 (potřeba aspoň 2)', 'Jumping: 1 z 1', 'Letos 2 z 3', '1,5× SČP', 'podmínka splněna',
        'Podle VDH Prüfungsordnung Agility 2026 (znění může být novější, ověř na vdh.de). Počítají se závody zapsané v deníku u vybraného psa. Pravidla jiné země přepneš ve Více → Nastavení.'].forEach(t => { if (trLookup(t) == null) out.push(t); }); return out; });
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
