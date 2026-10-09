/* Postup se hlídá sám (karta na Domů z promoState) a Kalkulačka SČP a MČP (Více): stejné časy jako Plán (courseTimes), Česko i Británie, překlady. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  /* čistý start s pravidly země (jako tests/pravidla.js) */
  const open = async (cc) => { await page.goto('about:blank'); await page.goto(base + '/#home'); await w(200);
    await ev((c) => { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-rules-v1', JSON.stringify(c)); localStorage.removeItem('agility-sctcalc-v1'); }, cc);
    await page.goto('about:blank'); await page.goto(base + '/#home'); await w(400); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  /* pes a závody v deníku; běhy z kacr.info se nepodstrkují, postup počítá z deníku (DIARYK) */
  const dog = (cls, runs) => ev(([cls, runs]) => { DOGS = [{ id: 'd1', name: 'Rex', size: 'L', cls }]; DOGC = 'd1'; saveDogs();
    lsSet(DIARYK, runs.map((r, i) => ({ id: 'y' + i, kind: 'zavod', date: r[0], dog: 'd1', cls: r[1], g: r[2], tot: r[3], place: r[4], judge: r[5] || '' })));
    show('home'); homeRender(); }, [cls, runs]);
  const card = () => ev(() => { const c = document.querySelector('#v-home .hm-promo'); return c ? { b: c.querySelector('b').textContent, s: c.querySelector('.tx > span').textContent, bar: c.querySelector('.bar i').style.width } : null; });

  await step('Česko: kolik zbývá do A2', async () => {
    await open('CZ');
    await dog('A1', [['2026-03-01', 'A1', 'V', '0', '1', 'Novák'], ['2026-04-01', 'A1', 'V', '5', '3', 'Novák']]);
    let c = await card();
    ok(c && c.b === 'Ještě 1 zkouška u jiného rozhodčího a můžeš do A2' && c.s === 'Postup A1 → A2: 3× hodnocení Výborně' && c.bar === '67%', 'karta postupu: ' + JSON.stringify(c));
    const ps = await ev(() => { const p = promoState(curDog()); return { n: p.cur.n, jn: p.cur.jn, done: p.cur.done, steps: p.steps.length, text: p.text }; });
    ok(ps.n === 2 && ps.jn === 1 && !ps.done && ps.steps === 2, 'promoState: ' + JSON.stringify(ps));
    /* třetí Výborně u stejného rozhodčího nestačí, u jiného ano */
    await dog('A1', [['2026-03-01', 'A1', 'V', '0', '1', 'Novák'], ['2026-04-01', 'A1', 'V', '5', '3', 'Novák'], ['2026-05-01', 'A1', 'V', '0', '2', 'Novák']]);
    c = await card(); ok(c && c.b === 'Ještě 1 zkouška u jiného rozhodčího a můžeš do A2', 'tři Výborně u jednoho rozhodčího: ' + JSON.stringify(c));
    await dog('A1', [['2026-03-01', 'A1', 'V', '0', '1', 'Novák'], ['2026-04-01', 'A1', 'V', '5', '3', 'Novák'], ['2026-05-01', 'A1', 'V', '0', '2', 'Svobodová']]);
    c = await card(); ok(c && c.b === 'Máš splněno: můžeš postoupit do A2' && c.bar === '100%', 'splněno: ' + JSON.stringify(c));
    /* Deník ukazuje totéž (jeden výpočet) */
    await page.click('#v-home .hm-promo .hm-go'); await w(200);
    const r = await ev(() => ({ view, tab: moreTab, t: ($('moreBody').querySelector('.prog') || {}).textContent || '' }));
    ok(r.view === 'more' && r.tab === 'diary' && /3 z 3 zkoušek · rozhodčích: 2/.test(r.t) && /podmínka splněna/.test(r.t), 'klepnutí na kartu má otevřít Deník s postupem: ' + JSON.stringify(r));
    /* A2 → A3: 5× čistě do 3. místa; dva takové běhy */
    await dog('A2', [['2026-03-01', 'A2', 'V', '0', '1', 'Novák'], ['2026-04-01', 'A2', 'V', '0', '3', 'Svobodová'], ['2026-05-01', 'A2', 'V', '0', '7', 'Novák']]);
    c = await card(); ok(c && c.b === 'Ještě 3 zkoušky a můžeš do A3' && /^Postup A2 → A3: 5× bez trestných bodů do 3. místa/.test(c.s), 'A2 → A3: ' + JSON.stringify(c));
  });

  await step('skryto bez běhů, v nejvyšší třídě a v Hoopers', async () => {
    await dog('A1', []); ok(!(await card()) && !(await ev(() => allRuns('d1').length)), 'bez běhů nemá být karta');
    await dog('A3', [['2026-03-01', 'A3', 'V', '0', '1', 'Novák']]); ok(!(await card()), 'v A3 (Česko) nemá být karta');
    await dog('A1', [['2026-03-01', 'A1', 'V', '0', '1', 'Novák']]); ok(!!(await card()), 'v A1 s během má být karta');
    await ev(() => setSport('hoopers')); await w(150); await ev(() => { $('toast').hidden = true; });
    ok(!(await card()) && await ev(() => isHoopS()), 'v Hoopers nemá být karta postupu');
    await ev(() => setSport('agility')); await w(150); await ev(() => { $('toast').hidden = true; });
    ok(!!(await card()), 'po návratu k agility se karta má vrátit');
  });

  await step('Německo: udržení v A3; Rakousko: jumping', async () => {
    await open('DE');
    const y = new Date().getFullYear();
    await dog('A3', [[y + '-03-01', 'A3', 'V', '0', '2', 'Müller'], [y + '-04-01', 'A3', 'V', '5', '1', 'Schmidt']]);
    let c = await card(); ok(c && c.b === 'Udržení v A3: do konce roku ještě 2 čisté běhy' && /^Udržení v A3: každý kalendářní rok/.test(c.s), 'udržení VDH: ' + JSON.stringify(c));
    await dog('A3', [[y + '-03-01', 'A3', 'V', '0', '2', 'Müller'], [y + '-04-01', 'A3', 'V', '0', '1', 'Schmidt'], [y + '-05-01', 'A3', 'V', '0', '4', 'Müller']]);
    c = await card(); ok(c && c.b === 'Udržení v A3: letos splněno', 'udržení splněno: ' + JSON.stringify(c));
    await open('AT');
    await dog('A1', [['2026-03-01', 'A1', 'V', '0', '4', 'Huber'], ['2026-04-01', 'A1', 'V', '0', '7', 'Gruber']]);
    c = await card(); ok(c && c.b === 'Ještě 1 zkouška a 1× Jumping a můžeš do LK 2' && /^Postup LK 1 → LK 2/.test(c.s), 'ÖKV s jumpingem: ' + JSON.stringify(c));
  });

  await step('kalkulačka SČP a MČP (Česko) počítá jako Plán', async () => {
    await open('CZ');
    /* parkur z knihovny: Plán → stejné časy musí dát kalkulačka pro stejnou délku, třídu a disciplínu */
    const m = await ev(() => { const c = listFor('A2')[0], m = metrics(c.obs, c.route, 'A2', c.turns); return { len: Math.round(m.len * 10) / 10, sct: m.sct, mct: m.mct, spd: m.spd, disc: m.disc }; });
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="tools"]'); await page.click('#moreTabs [data-m="sct"]'); await w(200);
    ok(await page.isVisible('#sheet #scLen') && await ev(() => moreTab === 'tools' && !!$('scDisc') && !$('scSize')), 'kalkulačka se má otevřít jako list, bez velikosti (ta hraje roli jen v Británii)');
    ok(/Zadej délku trati/.test(await page.textContent('#scOut')), 'bez délky výzva');
    await page.selectOption('#scCls', 'A2'); await page.selectOption('#scDisc', m.disc === 'Agility' ? 'A' : 'J');
    await page.fill('#scLen', String(m.len)); await w(100);
    const o = await ev(() => ({ t: $('scOut').textContent, rows: [...document.querySelectorAll('#scOut .sc-tab tr')].slice(1).map(r => r.cells[0].textContent).join(), cur: (document.querySelector('#scOut tr.cur td') || {}).textContent, spd: $('scSpd').value }));
    ok(new RegExp('SČP' + m.sct + 's').test(o.t.replace(/\s+/g, '')) && new RegExp('MČP' + m.mct + 's').test(o.t.replace(/\s+/g, '')), 'SČP/MČP kalkulačky ≠ Plán: ' + JSON.stringify([m, o.t.slice(0, 80)]));
    ok(o.rows === 'A0,A1,A2,A3' && o.cur === 'A2' && +String(o.spd).replace(',', '.') === m.spd /* pole ukazuje číslo česky (3,5) */ && /MČP 2,5 m\/s \(Agility\) a 3,0 m\/s \(Jumping\)/.test(o.t), 'tabulka všech tříd: ' + JSON.stringify(o));
    /* vlastní rychlost přepíše třídu: 160 m / 4 m/s = 40 s, MČP 160 / 2,5 = 64 s (agility) */
    await page.fill('#scLen', '160'); await page.selectOption('#scDisc', 'A'); await page.fill('#scSpd', '4'); await w(100);
    const t2 = (await page.textContent('#scOut')).replace(/\s+/g, '');
    ok(/SČP40s/.test(t2) && /MČP64s/.test(t2), 'vlastní rychlost: ' + t2.slice(0, 60));
    ok(await ev(() => courseTimes(160, 'A1', 'J').mct === 54 && courseTimes(130, 'A1', 'A').sct === 44 && courseTimes(0, 'A1', 'A').sct === 0), 'courseTimes: 160 m jumping MČP 54 s, 130 m / 3 m/s = 44 s');
    /* poslední zadání se pamatuje */
    await T.sheet('x'); await page.click('#moreTabs [data-m="sct"]'); await w(150);
    const sv = await ev(() => ({ len: $('scLen').value, spd: $('scSpd').value, disc: $('scDisc').value, cls: $('scCls').value, ls: lsGet('agility-sctcalc-v1', null) }));
    ok(sv.len === '160' && sv.spd === '4' && sv.disc === 'A' && sv.cls === 'A2' && sv.ls && +sv.ls.len === 160, 'zapamatované zadání: ' + JSON.stringify(sv));
    await ev(() => closeSheet());
  });

  await step('kalkulačka v Británii: matice, bez MČP', async () => {
    await open('UK');
    await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'M', cls: 'G5' }]; DOGC = 'd1'; saveDogs(); loadCourse(listFor('A2')[0], true); }); if (await page.isVisible('#scrim')) await T.sheet('ok');
    const m = await ev(() => { const m = curM(); return { len: Math.round(m.len * 10) / 10, sct: m.sct, mct: m.mct, uk: m.uk, spd: m.spd, disc: m.disc, mx: Math.round(ukSpd('G5', 'M', m.disc === 'Agility' ? 'A' : 'J') * 100) / 100 }; });
    ok(m.uk && m.mct === 0 && m.spd === m.mx && m.sct === Math.ceil(m.len / m.mx - 1e-9) + 10, 'Plán v Británii: rychlost z matice pro Medium a Grade 5: ' + JSON.stringify(m));
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="tools"]'); await page.click('#moreTabs [data-m="sct"]'); await w(200);
    const d0 = await ev(() => ({ cls: $('scCls').value, size: $('scSize').value, disc: !!$('scDisc') }));
    ok(d0.cls === 'G5' && d0.size === 'M' && d0.disc, 'výchozí třída a velikost podle psa: ' + JSON.stringify(d0));
    await page.selectOption('#scDisc', m.disc === 'Agility' ? 'A' : 'J'); await page.fill('#scLen', String(m.len)); await w(100);
    const o = await ev(() => ({ t: $('scOut').textContent.replace(/\s+/g, ''), rows: [...document.querySelectorAll('#scOut .sc-tab tr')].slice(1).map(r => r.cells[0].textContent).join(), cols: document.querySelector('#scOut .sc-tab tr').cells.length, spd: $('scSpd').value, hint: $('sheet').querySelector('p.hint').textContent }));
    ok(new RegExp('SČP' + m.sct + 's').test(o.t) && !/MČP/.test(o.t) && +String(o.spd).replace(',', '.') === m.spd /* pole ukazuje číslo česky (3,5) */, 'britský SČP kalkulačky ≠ Plán: ' + JSON.stringify([m, o]));
    ok(o.rows === 'Grade1,Grade2,Grade3,Grade4,Grade5,Grade6,Grade7'.replace(/Grade/g, 'Grade ') && o.cols === 3 && /rychlostpodlematice/.test(o.t) && /Course Time Matrix/.test(o.hint), 'tabulka gradeů bez MČP: ' + JSON.stringify(o));
    await ev(() => closeSheet());
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Ještě 1 zkouška u jiného rozhodčího a můžeš do A2', 'Ještě 3 zkoušky a můžeš do A3', 'Ještě 5 zkoušek a můžeš do Grade 7', 'Ještě 1 zkouška a 1× Jumping a můžeš do LK 2', 'Ještě 2 zkoušky u jiného rozhodčího a 1× Jumping a můžeš do LK 3',
      'Máš splněno: můžeš postoupit do A2', 'Udržení v A3: do konce roku ještě 1 čistý běh', 'Udržení v A3: do konce roku ještě 2 čisté běhy', 'Udržení v A3: letos splněno', 'Postup A1 → A2: 3× hodnocení Výborně', 'Deník',
      'Kalkulačka SČP a MČP', 'Délka trati (m)', 'Rychlost (m/s)', 'Třída', 'Velikost', 'Disciplína', 'Všechny třídy', 'Rychlost', 'SČP', 'MČP', '3,5 m/s', '3,97 m/s', '52 s', 'Zadej délku trati.', 'Zavřít',
      'Rychlosti podle nastavení v Běhu.', 'MČP 1,5× SČP', 'MČP 2,5 m/s (Agility) a 3,0 m/s (Jumping) podle FCI', 'Pro zvolenou velikost a disciplínu, rychlost podle matice.',
      'Standardní a maximální čas parkuru z délky trati, bez kreslení parkuru. Rychlost je z nastavení v Běhu (Rychlost pro SČP), můžeš ji přepsat.',
      'Standardní čas podle Course Time Matrix: průměrná rychlost pro velikost psa a grade + 10 s. Maximální čas se v Británii neurčuje.'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    const en = await ev(() => [trLookup('Ještě 1 zkouška u jiného rozhodčího a můžeš do A2'), trLookup('Udržení v A3: do konce roku ještě 2 čisté běhy')]);
    ok(en[0] === 'To move up to A2 you still need 1 qualifying run under another judge' && en[1] === 'Staying in A3: 2 more clean runs by the end of the year', 'anglické znění: ' + JSON.stringify(en));
  });

  await T.ctx.close();
  return T.errs;
};
