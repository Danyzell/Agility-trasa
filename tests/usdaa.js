/* Pravidla USA podle USDAA (3.5): volba v Nastavení vedle AKC (výchozí v Americe zůstává AKC), úrovně Starters, Advanced, Masters
   a Performance I–III, výškové kategorie podle kohoutku, SČP z rozsahů USDAA (kap. 5 § 5.3.2, kap. 7 § 7.3.2), bodování a Q/NQ
   (kap. 4 § 4.1, kap. 5 § 5.3.1, kap. 7 § 7.3.1), yardy a americké termíny USDAA, bez kontroly FCI, postup v Deníku (kap. 2 § 2.1.1),
   kalkulačka SČP a výšky překážek; česky, polsky a německy bez českých zbytků. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const errs = [];
  /* nový telefon s jazykem, časovým pásmem a pravidly; localStorage jen z prvního načtení (průvodce hotový, jazyk, pravidla) */
  const open = async (lang, o) => {
    o = o || {};
    const T = await phone(browser, { timezoneId: o.tz || 'America/Chicago' });
    await offline(T.ctx, { get_catalog: { version: 0 } });
    await T.ctx.addInitScript((a) => { try { if (!sessionStorage.getItem('usdaa1')) { sessionStorage.setItem('usdaa1', '1');
      localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-lang-v1', JSON.stringify(a.lang));
      if (a.rules) localStorage.setItem('agility-rules-v1', JSON.stringify(a.rules)); } } catch (e) {} }, { lang, rules: o.rules || null });
    await T.page.goto(base + '/#home'); await T.page.waitForTimeout(400); await T.ev(() => { closeSheet(); $('toast').hidden = true; });
    return T;
  };
  const run = async (T, label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const done = async (T) => { errs.push(...T.errs); await T.ctx.close(); };
  const txt = (T, sel) => T.ev((s) => document.querySelector(s).innerText.replace(/\s+/g, ' '), sel);
  /* psa nastaví jako vybraného, parkur A2 z knihovny (se zónami: Standard) a Plán s rozbalenými čísly */
  const dogPlan = (T, size, cls) => T.ev((a) => { DOGS = [{ id: 'd1', name: 'Rex', size: a[0], cls: a[1] }]; DOGC = 'd1'; saveDogs(); loadCourse(listFor('A2')[0], true); PLANUI.specs = 1; show('plan'); render(); ui(); $('toast').hidden = true; }, [size, cls]);
  /* SČP, jak ho počítá rozhodčí: délka v celých yardech / rychlost, dolů na celé sekundy (aplikace bere délku na desetiny metru) */
  const sctOf = (len, rate, add) => Math.floor(Math.round(Math.round(len * 10) / 10 / 0.9144) / rate + 1e-9) + (add || 0);

  /* rozsahy rychlostí přepsané z pravidel po řádcích (kategorie: Starters, Advanced, Masters), nezávisle na tabulce v aplikaci;
     Standard kap. 5 § 5.3.2, Jumpers kap. 7 § 7.3.2 (USDAA Official Rules & Regulations, vydání k 5. 3. 2026) */
  const RULEBOOK = {
    L: { A: ['2.15-2.35', '2.75-3.15', '3.15-3.65'], J: ['3.25-3.75', '3.35-3.85', '3.80-4.30'] }, /* Extra Large > 22" */
    I: { A: ['2.15-2.35', '2.95-3.35', '3.25-3.75'], J: ['3.25-3.75', '3.50-4.00', '4.00-4.50'] }, /* Large > 18" do 22" */
    M: { A: ['2.15-2.35', '2.75-3.15', '3.15-3.65'], J: ['3.25-3.75', '3.35-3.85', '3.80-4.30'] }, /* Medium > 15" do 18" */
    S: { A: ['2.00-2.25', '2.60-3.00', '3.10-3.50'], J: ['3.15-3.65', '3.25-3.75', '3.75-4.25'] }, /* Small > 12" do 15" */
    XS: { A: ['2.00-2.25', '2.50-2.75', '2.75-3.15'], J: ['3.00-3.30', '3.00-3.50', '3.40-3.90'] } /* Extra Small do 12" */
  };

  {
    const T = await open('en'); const { ok, ev, page } = T;
    await run(T, 'USDAA: volba v Nastavení, výchozí v Americe zůstává AKC', async () => {
      ok(await ev(() => RCC) === 'US', 'v časovém pásmu USA má být výchozí AKC, ne ' + await ev(() => RCC));
      await ev(() => moreOpen('set')); await page.waitForTimeout(200);
      const opts = await ev(() => [...$('rulesSel').options].map(o => o.value + '=' + o.textContent));
      ok(opts.indexOf('USDAA=USA (USDAA)') === opts.indexOf('US=USA (AKC)') + 1 && opts[opts.length - 1] === 'FCI=FCI only (no national rules)', 'USDAA v seznamu pravidel hned za AKC: ' + JSON.stringify(opts));
      await Promise.all([page.waitForNavigation({ timeout: 10000 }), page.selectOption('#rulesSel', 'USDAA')]); await page.waitForTimeout(600);
      await ev(() => { closeSheet(); $('toast').hidden = true; });
      const r = await ev(() => ({ cc: RCC, us: !!RU.us, da: !!RU.usdaa, akc: !!RU.akc, unit: UNIT(), loc: LOC, kacr: KACR_OK, saved: lsGet(RULESK, null),
        cls: RU.cls.map(clsL).join(), codes: RU.cls.join(), sz: Object.keys(RU.heights).join() }));
      ok(r.cc === 'USDAA' && r.us && r.da && !r.akc && r.saved === 'USDAA' && r.unit === 'yd' && r.loc === 'en-US' && !r.kacr, 'po volbě USDAA: ' + JSON.stringify(r));
      ok(r.cls === 'Starters,Advanced,Masters,Performance I,Performance II,Performance III' && r.codes === 'D1,D2,D3,D4,D5,D6' && r.sz === 'XS,S,M,I,L', 'úrovně a kategorie USDAA: ' + JSON.stringify(r));
      await ev(() => moreOpen('set')); await page.waitForTimeout(150);
      const s = await ev(() => ({ sel: $('rulesSel').value, yd: document.querySelector('#moreBody [data-unit="yd"]').textContent, on: document.querySelector('#moreBody [data-unit="yd"]').classList.contains('on'), hint: $('moreBody').innerText }));
      ok(s.sel === 'USDAA' && s.yd === 'Yards (USDAA)' && s.on && /or as in USDAA: course length in yards and distances in feet/.test(s.hint), 'Nastavení s USDAA: ' + JSON.stringify(s).slice(0, 300));
    });
    await run(T, 'USDAA: úrovně a kategorie v okně psa, kódy tříd a parkury z knihovny', async () => {
      await ev(() => { DOGS = []; saveDogs(); moreOpen('dogs'); dogSheet(null); }); await page.waitForTimeout(150);
      const d = await ev(() => ({ cls: [...document.querySelectorAll('#sheet #dCls option')].map(o => o.textContent).join(), sz: [...document.querySelectorAll('#sheet #dSize option')].map(o => o.textContent),
        def: $('dSize').value, defc: $('dCls').value, lab: ['dSize', 'dCls'].map(id => document.querySelector('#sheet label[for="' + id + '"]').firstChild.textContent.trim()) }));
      ok(d.cls === 'Starters,Advanced,Masters,Performance I,Performance II,Performance III' && d.def === 'I' && d.defc === 'D1', 'okno psa: úrovně USDAA: ' + JSON.stringify(d));
      ok(JSON.stringify(d.sz) === JSON.stringify(['Extra Small – 12" and under at the withers', 'Small – over 12" to 15" at the withers', 'Medium – over 15" to 18" at the withers', 'Large – over 18" to 22" at the withers', 'Extra Large – over 22" at the withers']), 'kategorie podle kohoutku (kap. 1 § 1.3): ' + JSON.stringify(d.sz));
      ok(d.lab.join() === 'Size,Class', 'popisky: velikost a třída (ne „Performance class“, které by splývalo s programem Performance): ' + d.lab.join());
      await ev(() => closeSheet());
      const c = await ev(() => ({ lib: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'U3', 'G4', 'A2'].map(courseClsOf).join(), re: ['D1', 'D6', 'U4', 'G7', 'A0'].every(x => CLS_RE.test(x)) && !['D0', 'D7', 'P1'].some(x => CLS_RE.test(x)) }));
      ok(c.lib === 'A1,A2,A3,A1,A2,A3,A3,A2,A2' && c.re, 'třídy psa → parkury A1–A3 a CLS_RE: ' + JSON.stringify(c));
      await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'M', cls: 'D5' }]; DOGC = 'd1'; saveDogs(); });
      ok(await ev(() => homeCls()) === 'A2', 'pes v Performance II má v Parkurech třídu A2');
    });
    await run(T, 'USDAA: rychlosti a SČP přesně podle tabulek', async () => {
      const bad = await ev((B) => { const out = []; Object.keys(B).forEach(z => ['A', 'J'].forEach(dc => B[z][dc].forEach((s, i) => {
        const r = daRng('D' + (i + 1), z, dc), p = daRng('D' + (i + 4), z, dc), w = s.split('-').map(Number); /* Performance má stejný rozsah jako Championship */
        if (r[0] !== w[0] || r[1] !== w[1] || p[0] !== w[0] || p[1] !== w[1]) out.push(z + dc + (i + 1) + ': ' + r.join('–')); }))); return out; }, RULEBOOK);
      ok(!bad.length, 'rozsahy rychlostí nesedí s pravidly: ' + bad.join(', '));
      /* přídavek Performance: Standard + 3, + 3, + 5 s; Jumpers + 3, + 3, + 4 s; Championship nic */
      const add = await ev(() => ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'].map(c => daAdd(c, 'A') + '/' + daAdd(c, 'J')).join());
      ok(add === '0/0,0/0,0/0,3/3,3/3,5/4', 'přídavek Performance: ' + add);
      const t = await ev(() => { const Y = 0.9144; return [
        courseTimes(150, 'D1', 'A', 'XS'), /* 164 yd / 2,00 = 82 s */
        courseTimes(150, 'D3', 'A', 'I'), /* 164 / 3,25 = 50,5 → 50 s */
        courseTimes(150, 'D6', 'J', 'L'), /* 164 / 3,80 = 43,2 → 43 + 4 = 47 s */
        courseTimes(165 * Y, 'D2', 'A', 'M'), /* 165 / 2,75 = 60 s přesně */
        courseTimes(165 * Y, 'D5', 'A', 'M'), /* 60 + 3 = 63 s */
        courseTimes(200 * Y, 'D4', 'J', 'S'), /* 200 / 3,15 = 63,5 → 63 + 3 = 66 s */
        courseTimes(180 * Y, 'D3', 'J', 'XS'), /* 180 / 3,40 = 52,9 → 52 s */
        courseTimes(180 * Y, 'D6', 'A', 'I'), /* 180 / 3,25 = 55,4 → 55 + 5 = 60 s */
        courseTimes(165 * Y, 'D3', 'A', 'I', 3.5 * Y), /* vlastní rychlost 3,50 yd/s: 165 / 3,5 = 47,1 → 47 s */
        courseTimes(150, 'A2', 'J', 'I') /* bez psa: parkur A2 → Advanced, Large: 164 / 3,50 = 46,9 → 46 s */
      ].map(c => [c.sct, c.mct]); });
      ok(JSON.stringify(t) === JSON.stringify([[82, 0], [50, 0], [47, 0], [60, 0], [63, 0], [66, 0], [52, 0], [60, 0], [47, 0], [46, 0]]), 'SČP podle USDAA (bez MČP): ' + JSON.stringify(t));
      const x = await ev(() => { const c = courseTimes(150, 'D6', 'J', 'L'); return { rng: c.rng.join('-'), add: c.add, lvl: c.lvl, hgt: c.hgt, spd: spdU(c.spd), da: !!c.usdaa }; });
      ok(x.rng === '3.8-4.3' && x.add === 4 && x.lvl === 'D6' && x.hgt === 'L' && x.spd === '3.80 yd/s' && x.da, 'Performance III Jumpers Extra Large: ' + JSON.stringify(x));
    });
    await run(T, 'USDAA: Plán v yardech, čas podle psa, bez MČP a bez kontroly FCI', async () => {
      await dogPlan(T, 'I', 'D3'); await page.waitForTimeout(200);
      const m = await ev(() => { const m = curM(); return { sct: m.sct, mct: m.mct, len: m.len, lvl: m.lvl, hgt: m.hgt, us: m.us, da: m.usdaa, disc: m.disc, add: m.add, specs: $('specs').innerText.replace(/\s+/g, ' ') }; });
      const yd = Math.round(Math.round(m.len * 10) / 10 / 0.9144);
      ok(m.us && m.da && m.disc === 'Agility' && m.lvl === 'D3' && m.hgt === 'I' && m.mct === 0 && m.add === 0 && m.sct === sctOf(m.len, 3.25), 'čas parkuru podle psa (Masters, Large): ' + JSON.stringify(m));
      ok(new RegExp('Course length ' + yd + ' yd').test(m.specs) && /Discipline Standard Masters · 20"/.test(m.specs) && new RegExp('SCT ' + m.sct + ' s 3\\.25 yd/s').test(m.specs) &&
        /USDAA range 3\.25–3\.75 yd\/s SCT at the lowest speed/.test(m.specs) && !/MCT/.test(m.specs), 'dlaždice Plánu podle USDAA: ' + m.specs);
      ok(await ev(() => T(headerLines().spec)) === 'Length ' + yd + ' yd · ' + await ev(() => T(nPrek(curM().n))) + ' · Standard · Masters · 20" · SCT ' + m.sct + ' s (3.25 yd/s)', 'hlavička obrázku a PDF anglicky a bez MČP: ' + await ev(() => T(headerLines().spec)));
      await ev(() => { PLANUI.specs = 0; render(); ui(); }); await page.waitForTimeout(100);
      const mini = await txt(T, '#specs');
      ok(new RegExp('SCT ' + m.sct + ' s').test(mini) && !/MCT/.test(mini), 'sbalená čísla bez MČP: ' + mini);
      /* Performance III, Large: skok 16", SČP + 5 s */
      await dogPlan(T, 'I', 'D6'); await page.waitForTimeout(200);
      const p = await ev(() => { const m = curM(); return { sct: m.sct, len: m.len, add: m.add, specs: $('specs').innerText.replace(/\s+/g, ' ') }; });
      ok(p.add === 5 && p.sct === sctOf(p.len, 3.25, 5) && /Standard Performance III · 16"/.test(p.specs) && /3\.25 yd\/s \+ 5 s/.test(p.specs), 'Performance III v Plánu: ' + JSON.stringify(p));
      const f = await ev(() => ({ fci: $('fciBar').hidden, marks: document.querySelectorAll('#obs .ob.bad').length, opts: [...$('sizeSelect').options].map(o => o.textContent) }));
      ok(f.fci && f.marks === 0, 'kontrola FCI nemá být s pravidly USDAA vidět: ' + JSON.stringify(f));
      ok(f.opts.includes('Field 100 × 100 ft') && f.opts.includes('Field 100 × 80 ft') && !f.opts.some(o => / m$/.test(o)), 'velikosti plochy ve stopách: ' + JSON.stringify(f.opts));
    });
    await run(T, 'USDAA: americké termíny USDAA a jednotky', async () => {
      const w = await ev(() => ({ w: ['Houpačka', 'Kruh', 'Skok daleký', 'Dvojitý skok', 'Kladina', 'A-rampa', 'Slalom', 'Metry'].map(T).join(), len: lenU(150), spd: spdU(3.25 * YD),
        rng: spdRngU([3.25, 3.75]), disc: [discL('A'), discL('J'), discL('J', 1), discL('Jumping')].join() }));
      ok(w.w === 'Seesaw,Tire,Long jump,Spread hurdle,Dog walk,A-frame,Weave poles,Meters', 'názvy překážek podle pravidel USDAA (See-Saw, Tire, Long Jump, Spread Hurdle): ' + w.w);
      ok(w.len === '164 yd' && w.spd === '3.25 yd/s' && w.rng === '3.25–3.75 yd/s' && w.disc === 'Standard,Jumpers,Jumpers,Jumpers', 'yardy a disciplíny USDAA: ' + JSON.stringify(w));
      await ev(() => moreOpen('set')); await page.waitForTimeout(150);
      await page.click('#moreBody [data-unit="m"]');
      ok(await ev(() => SET.unit === 'm' && lenU(150) === '150.0 m' && spdRngU([3.25, 3.75]) === '3.0–3.4 m/s'), 'metry s pravidly USDAA');
      await page.click('#moreBody [data-unit="yd"]');
      ok(await ev(() => SET.unit == null && lenU(150) === '164 yd'), 'zpět na yardy (výchozí se neukládá)');
    });
    await run(T, 'USDAA: bodování a Q / NQ podle úrovně', async () => {
      await dogPlan(T, 'I', 'D3'); await page.waitForTimeout(150);
      const e = await ev(() => { const m = curM(), E = (dt, f, r, lvl, disc, dis) => { const x = evalRun(m.sct + dt, f, r, !!dis, Object.assign({}, m, { lvl, disc: disc || 'Agility' })); return x.g + ':' + x.cf + '+' + x.tp; };
        return [E(-1, 0, 0, 'D3'), E(0, 0, 0, 'D3'), E(0.01, 0, 0, 'D3'), E(2.3, 0, 0, 'D3'), E(-1, 0, 1, 'D3'), E(-1, 0, 3, 'D3'), E(-1, 0, 1, 'D2'), E(-1, 0, 2, 'D2', 'Jumping'),
          E(-1, 0, 2, 'D1'), E(-1, 1, 0, 'D1'), E(-1, 0, 1, 'D6', 'Jumping'), E(-1, 0, 0, 'D1', 'Agility', 1), E(-1, 0, 4, 'D4', 'Jumping'), E(1.5, 1, 1, 'D5')]; });
      /* Q jen s nulou; časová chyba za sekundu i započatou; odmítnutí: Masters 5 a třetí E, Advanced Standard 5, Advanced Jumpers a Starters 0 */
      ok(e.join() === 'V:0+0,V:0+0,BO:0+1,BO:0+3,BO:5+0,DIS:15+0,BO:5+0,V:0+0,V:0+0,BO:5+0,BO:5+0,DIS:0+0,V:0+0,BO:10+2', 'Q a NQ podle USDAA: ' + e.join());
      ok(await ev(() => evalRun(10, 0, 3, false, Object.assign({}, curM(), { lvl: 'D3' })).why === '3 odmítnutí'), 'Masters: třetí odmítnutí vyřazuje');
    });
    await run(T, 'USDAA: výsledek ve stopkách, lišta, rychlost a uložení běhu', async () => {
      await dogPlan(T, 'I', 'D3'); await ev(() => { show('run'); PLANUI.speed = 1; RUN.f = 0; RUN.r = 0; $('manT').value = String(curM().sct - 1.5).replace('.', ','); runRender(); }); await page.waitForTimeout(250);
      const q = await ev(() => ({ g: document.querySelector('#result .grade').textContent, t: $('result').innerText.replace(/\s+/g, ' '), bar: $('rbG').innerText, sub: $('clockSub').innerText.replace(/\s+/g, ' '), sct: curM().sct,
        sp: $('speedRow').innerText.replace(/\s+/g, ' '), btn: !!document.querySelector('#speedRow [data-sp]'), rs: $('runSpecs').innerText.replace(/\s+/g, ' ') }));
      ok(q.g === 'Q' && /^Q Qualifying \(Q\) · clean run/.test(q.t) && /faults and refusals 0 · time faults 0/.test(q.t) && /Total penalty points 0/.test(q.t) && q.bar === 'Qualifying (Q) · clean run', 'Q ve stopkách: ' + JSON.stringify(q));
      ok(q.sub === 'SCT ' + q.sct + ' s' && /Standard Masters/.test(q.rs) && /3\.25 yd\/s/.test(q.rs), 'pod stopkami jen SČP (USDAA nemá MČP): ' + JSON.stringify(q));
      ok(/SCT speed per USDAA \(Standard, Masters · 20"\)/.test(q.sp) && /USDAA range 3\.25–3\.75 yd\/s · the lowest is used/.test(q.sp) && /Set the class and size for the dog in More → Dogs/.test(q.sp) && !q.btn, 'rychlost pro SČP z tabulek USDAA, ručně se nemění: ' + q.sp);
      await ev(() => { $('manT').value = String(curM().sct + 2.25).replace('.', ','); RUN.f = 1; RUN.r = 0; resultRender(); }); await page.waitForTimeout(100);
      const n = await ev(() => ({ g: document.querySelector('#result .grade').textContent, t: $('result').innerText.replace(/\s+/g, ' '), bar: $('rbG').innerText }));
      ok(n.g === 'NQ' && /Non-qualifying \(NQ\)/.test(n.t) && /faults and refusals 5 · time faults 3/.test(n.t) && /Total penalty points 8/.test(n.t) && n.bar === 'Non-qualifying (NQ) · penalty points 8', 'NQ s chybou a časem: ' + JSON.stringify(n));
      await ev(() => { $('manT').value = '10'; RUN.f = 0; RUN.r = 3; resultRender(); }); await page.waitForTimeout(100);
      ok(/^NQ Eliminated \(NQ\) \(3 refusals\)/.test(await txt(T, '#result')), 'Masters: 3 odmítnutí = vyřazení: ' + await txt(T, '#result'));
      /* Starters: odmítnutí bez trestu; Advanced Standard: jen na zónové překážce */
      await dogPlan(T, 'I', 'D1'); await ev(() => { show('run'); RUN.f = 0; RUN.r = 2; $('manT').value = String(curM().sct - 1).replace('.', ','); resultRender(); }); await page.waitForTimeout(150);
      const s = await txt(T, '#result');
      ok(/^Q Qualifying \(Q\)/.test(s) && /faults and refusals 0/.test(s) && /Refusals carry no penalty in this class\./.test(s), 'Starters: odmítnutí se netrestá: ' + s);
      await dogPlan(T, 'I', 'D2'); await ev(() => { show('run'); RUN.f = 0; RUN.r = 1; $('manT').value = String(curM().sct - 1).replace('.', ','); resultRender(); }); await page.waitForTimeout(150);
      const a = await txt(T, '#result');
      ok(/^NQ Non-qualifying \(NQ\)/.test(a) && /faults and refusals 5/.test(a) && /In Advanced Standard only refusals at a contact obstacle are faulted\./.test(a), 'Advanced Standard: odmítnutí 5 bodů: ' + a);
      /* uložený běh Starters (2 odmítnutí bez trestu, 2 časové chyby): listina vezme časové chyby z běhu, ne jako zbytek trestných bodů */
      await dogPlan(T, 'I', 'D1'); await ev(() => { show('run'); RUN.f = 0; RUN.r = 2; $('manT').value = String(curM().sct + 1.5).replace('.', ','); resultRender(); $('saveRun').click(); closeSheet(); $('toast').hidden = true; }); await page.waitForTimeout(200);
      const sv = await ev(() => { const rs = getMark(S.meta.id).runs || [], x = rs[rs.length - 1], L = listinaRows(true), row = L[0] && L[0].rows.find(r => r.d === x.d); return { g: x.g, tot: x.tot, tp: x.tp, mct: x.mct, lt: row && row.tp, ltot: row && row.tot }; });
      ok(sv.g === 'BO' && sv.tot === 2 && sv.tp === 2 && sv.mct === 0 && sv.lt === 2 && sv.ltot === 2, 'uložený běh a listina podle USDAA: ' + JSON.stringify(sv));
      ok(!/MCT/.test(await ev(() => listinaText())), 'listina bez MČP');
    });
    await run(T, 'USDAA: kalkulačka SČP s rozsahem', async () => {
      await ev(() => { localStorage.setItem('agility-sctcalc-v1', JSON.stringify({ len: 165 * 0.9144, disc: 'A', cls: 'D3', size: 'I' })); show('plan'); sctCalcSheet(); });
      await page.waitForTimeout(200);
      const c = await ev(() => ({ len: $('scLen').value, spd: $('scSpd').value, t: $('scOut').innerText.replace(/\s+/g, ' '), intro: $('sheet').querySelector('.hint').innerText,
        lab: ['scLen', 'scSpd', 'scSize'].map(id => $('sheet').querySelector('label[for="' + id + '"]').firstChild.textContent.trim()).join() }));
      ok(c.len === '165' && c.spd === '3.25' && /^SCT 50 s Speed 3\.25 yd\/s/.test(c.t) && !/MCT/.test(c.t) && c.lab === 'Course length (yd),Speed (yd/s),Size', 'kalkulačka USDAA: ' + JSON.stringify(c));
      ok(/Starters 2\.15–2\.35 yd\/s 70–76 s/.test(c.t) && /Advanced 2\.95–3\.35 yd\/s 49–55 s/.test(c.t) && /Masters 3\.25–3\.75 yd\/s 44–50 s/.test(c.t) &&
        /Performance I 2\.15–2\.35 yd\/s 73–79 s/.test(c.t) && /Performance II 2\.95–3\.35 yd\/s 52–58 s/.test(c.t) && /Performance III 3\.25–3\.75 yd\/s 49–55 s/.test(c.t), 'tabulka všech tříd: rozsah rychlosti a SČP: ' + c.t);
      ok(/USDAA standard course time/.test(c.intro) && /Performance gets a 3 s longer SCT, 5 s in Masters Standard and 4 s in Masters Jumpers/.test(c.intro) && /USDAA sets no maximum course time/.test(c.intro), 'úvod kalkulačky: ' + c.intro);
      await page.fill('#scSpd', '3'); await page.waitForTimeout(100);
      const lo = await txt(T, '#scOut');
      ok(/^SCT 55 s/.test(lo) && /The speed is below the USDAA minimum\. A judge may go above the range, never below it\./.test(lo), 'rychlost pod minimem: ' + lo);
      await page.selectOption('#scCls', 'D6'); await page.selectOption('#scDisc', 'J'); await page.waitForTimeout(100);
      const j = await ev(() => ({ spd: $('scSpd').value, t: $('scOut').innerText.replace(/\s+/g, ' ') }));
      ok(j.spd === '4' && /^SCT 45 s Speed 4\.00 yd\/s/.test(j.t) && !/below the USDAA minimum/.test(j.t), 'Performance III Jumpers Large: 165 / 4,00 = 41 + 4 s: ' + JSON.stringify(j));
      await ev(() => closeSheet());
    });
    await run(T, 'USDAA: výšky překážek podle kategorie a programu', async () => {
      const H = async (size, cls) => { await ev((a) => { DOGS = [{ id: 'd1', name: 'Rex', size: a[0], cls: a[1] }]; DOGC = 'd1'; saveDogs(); moreOpen('dogs'); }, [size, cls]); await page.waitForTimeout(150); return txt(T, '#moreBody'); };
      const xs = await H('XS', 'D5');
      ok(/4" · Performance II/.test(xs) && /Obstacle heights for Rex Obstacle Per USDAA Jump 4" Wall 4" Tire \(bottom of the opening\) 4" Long jump 8" \(1 board\) Table \(Starters and Advanced only\) 8" A-frame 5' \(112\.5°\) Dog walk 48–54" Seesaw 24–27" at the pivot Weave poles 12 poles, Standard only/.test(xs),
        'Extra Small v Performance (skok 4"): ' + xs.slice(0, 420));
      const xl = await H('L', 'D1');
      ok(/24" · Starters/.test(xl) && /Jump 24" Wall 24" Tire \(bottom of the opening\) 24" Long jump 48" \(5 boards\) Table \(Starters and Advanced only\) 20" A-frame 5' 6" \(104°\)/.test(xl), 'Extra Large v Championship (skok 24"): ' + xl.slice(0, 420));
      const lg = await H('I', 'D3');
      ok(/Jump 20" .* Long jump 40" \(4 boards\) Table \(Starters and Advanced only\) 20" A-frame 5' 6" \(104°\)/.test(lg) && /Masters title: 5 Qs under 2 judges, Champion 10 Qs\./.test(lg) && /There is no maximum course time\./.test(lg), 'Large v Masters a poznámka k pravidlům: ' + lg.slice(0, 300));
    });
    await run(T, 'USDAA: postup v Deníku (3 Q od 2 rozhodčích)', async () => {
      const D = async (cls, judges, g) => { await ev((a) => { DOGS = [{ id: 'd1', name: 'Rex', size: 'I', cls: a[0] }]; DOGC = 'd1'; saveDogs();
        lsSet(DIARYK, a[1].map((j, i) => ({ id: 'y' + i, kind: 'zavod', date: '2026-0' + (i + 1) + '-01', dog: 'd1', cls: a[0], g: (a[2] || [])[i] || 'V', tot: '0', place: '', judge: j }))); moreOpen('diary'); }, [cls, judges, g]);
        await page.waitForTimeout(200); return txt(T, '#moreBody'); };
      const p1 = await D('D1', ['Smith', 'Smith', 'Smith']);
      ok(/Promotion Starters → Advanced: 3 qualifying scores \(Q\) under 2 judges: SSA title in Standard, SJ in Jumpers/.test(p1) && /3 of 3 trials · judges: 1 \(at least 2 needed\)/.test(p1) && !/requirement met/.test(p1), 'Starters: 3 Q od jednoho rozhodčího nestačí: ' + p1.slice(0, 400));
      ok(/Promotion Advanced → Masters: 3 qualifying scores \(Q\) under 2 judges: ASA title in Standard, AJ in Jumpers/.test(p1) && !/Performance I →/.test(p1), 'v Deníku jen postup v programu psa (Championship): ' + p1.slice(0, 600));
      ok(/According to the USDAA Official Rules & Regulations \(chapters 1 to 5 and 7\) \(the wording may be newer, check at usdaa\.com\)/.test(p1) && !/[ěščřžůťďň]/.test(p1.replace(/Čeština/g, '')), 'odkaz na pravidla USDAA anglicky: ' + p1.slice(0, 900));
      const p2 = await D('D1', ['Smith', 'Jones', 'Smith', 'Brown'], ['V', 'V', 'V', 'BO']);
      ok(/3 of 3 trials · judges: 2 \(at least 2 needed\)/.test(p2) && /requirement met/.test(p2) && await ev(() => promoState(curDog()).cur.done), 'Starters: 3 Q od 2 rozhodčích = postup, NQ se nepočítá: ' + p2.slice(0, 400));
      const p3 = await D('D4', ['Smith', 'Jones']);
      ok(/Promotion Performance I → Performance II: 3 qualifying scores \(Q\) under 2 judges: SPS title in Standard, SPJ in Jumpers/.test(p3) && /2 of 3 trials/.test(p3) && !/Promotion Starters/.test(p3), 'Performance: vlastní postup: ' + p3.slice(0, 400));
      const p4 = await D('D3', ['Smith']);
      ok(/Promotion Starters → Advanced/.test(p4) && !/Promotion Performance/.test(p4) && await ev(() => promoState(curDog()).text === '' && !promoState(curDog()).cur), 'Masters je nejvyšší úroveň (titul, ne postup): ' + p4.slice(0, 300));
      /* závod v Deníku: jen Q a NQ */
      await ev(() => diarySheet('zavod')); await page.waitForTimeout(150);
      ok(await ev(() => [...$('yG').options].map(o => o.textContent).join() === 'Q,NQ' && [...$('yCls').options].map(o => o.textContent).join() === 'Starters,Advanced,Masters,Performance I,Performance II,Performance III,Jumpers'), 'závod v Deníku: úrovně a Q / NQ');
      await ev(() => closeSheet());
    });
    await done(T);
  }
  {
    /* česky s pravidly USDAA: české texty, desetinná čárka, české plurály */
    const T = await open('cs', { rules: 'USDAA' }); const { ok, ev, page } = T;
    await run(T, 'USDAA česky', async () => {
      ok(await ev(() => RCC === 'USDAA' && UNIT() === 'yd' && !US_EN && LOC === 'cs-CZ'), 'česky s USDAA: ' + await ev(() => RCC + ' ' + UNIT()));
      await dogPlan(T, 'S', 'D6'); await page.waitForTimeout(200);
      const s = await txt(T, '#specs');
      ok(/Disciplína Standard Performance III · 8"/.test(s) && /Rozsah USDAA 3,10–3,50 yd\/s SČP pro nejnižší rychlost/.test(s) && /3,10 yd\/s \+ 5 s/.test(s), 'Plán česky: ' + s);
      await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'XS', cls: 'D4' }, { id: 'd2', name: 'Bix', size: 'L', cls: 'D2' }]; DOGC = 'd1'; saveDogs(); moreOpen('dogs'); }); await page.waitForTimeout(200);
      const h = await txt(T, '#moreBody');
      ok(/Skok daleký 8" \(1 díl\)/.test(h) && /A-rampa 5' \(112,5°\)/.test(h) && /Houpačka 24–27" u osy/.test(h) && /24" · Advanced/.test(h) && /Podle USDAA/.test(h), 'výšky česky: ' + h.slice(0, 500));
      await ev(() => { DOGC = 'd2'; saveDogs(); moreOpen('dogs'); }); await page.waitForTimeout(150);
      ok(/Skok daleký 48" \(5 dílů\)/.test(await txt(T, '#moreBody')), 'skok daleký o 5 dílech česky');
      await ev(() => { moreOpen('dogs'); dogSheet(null); }); await page.waitForTimeout(150);
      ok(await ev(() => ['dSize', 'dCls'].map(id => document.querySelector('#sheet label[for="' + id + '"]').firstChild.textContent.trim()).join()) === 'Velikost,Třída', 'okno psa česky: Velikost a Třída');
      await ev(() => closeSheet());
      await ev(() => moreOpen('set')); await page.waitForTimeout(150);
      ok(await ev(() => document.querySelector('#moreBody [data-unit="yd"]').textContent === 'Yardy (USDAA)' && [...$('rulesSel').options].some(o => o.value === 'USDAA' && o.selected && o.textContent === 'USA (USDAA)')), 'Nastavení česky');
    });
    await done(T);
  }
  /* polsky a německy s pravidly USDAA: na obrazovkách USDAA žádné české zbytky (texty uživatele s translate="no" se nepočítají) */
  const CZ = /[ěščřžůťďňáíéúýĚŠČŘŽŮŤĎŇÁÍÉÚÝ]/;
  const leftovers = (page) => page.evaluate((czs) => {
    const cz = new RegExp(czs), out = [], w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n;
    while ((n = w.nextNode())) {
      const t = n.nodeValue.replace(/\s+/g, ' ').trim(); if (!t || !cz.test(t)) continue;
      const el = n.parentElement; if (!el || el.closest('[translate="no"],[data-nt],script,style,noscript,[hidden]')) continue;
      if (!el.getClientRects().length) continue;
      out.push(t.slice(0, 90));
    }
    return [...new Set(out)];
  }, CZ.source);
  for (const [lang, tz] of [['pl', 'Europe/Warsaw'], ['de', 'Europe/Berlin']]) {
    const T = await open(lang, { tz, rules: 'USDAA' }); const { ok, ev, page } = T;
    const left = async (where) => { const l = await leftovers(page); ok(!l.length, lang + ' ' + where + ': české texty bez překladu: ' + JSON.stringify(l.slice(0, 12))); };
    await run(T, lang + ': USDAA bez českých zbytků', async () => {
      ok(await ev(() => RCC === 'USDAA' && !!I18NP && !US_EN), lang + ': slovník a pravidla');
      await dogPlan(T, 'I', 'D5'); await page.waitForTimeout(250); await left('Plán');
      await ev(() => { show('run'); PLANUI.speed = 1; RUN.f = 0; RUN.r = 1; $('manT').value = String(curM().sct + 1.2).replace('.', ','); runRender(); $('toast').hidden = true; }); await page.waitForTimeout(250); await left('Běh');
      await ev(() => { RUN.r = 0; DOGS[0].cls = 'D1'; saveDogs(); RUN.r = 2; resultRender(); }); await page.waitForTimeout(100); await left('Běh Starters');
      await ev(() => { DOGS[0].cls = 'D2'; saveDogs(); RUN.r = 1; resultRender(); }); await page.waitForTimeout(100); await left('Běh Advanced');
      await ev(() => moreOpen('dogs')); await page.waitForTimeout(200); await left('Psi a výšky');
      await ev(() => dogSheet(curDog())); await page.waitForTimeout(150); await left('Okno psa'); await ev(() => closeSheet());
      await ev(() => { DOGS[0].cls = 'D1'; saveDogs(); lsSet(DIARYK, [{ id: 'y1', kind: 'zavod', date: '2026-03-01', dog: 'd1', cls: 'D1', g: 'V', tot: '0', place: '', judge: 'Smith' }]); moreOpen('diary'); }); await page.waitForTimeout(200); await left('Deník');
      await ev(() => { show('plan'); sctCalcSheet(); }); await page.waitForTimeout(200); await left('Kalkulačka SČP');
      await page.fill('#scSpd', '1,5'); await page.waitForTimeout(100); await left('Kalkulačka pod minimem'); await ev(() => closeSheet());
      await ev(() => moreOpen('set')); await page.waitForTimeout(150); await left('Nastavení');
      const w = await ev(() => [T('Kruh'), T('Skok'), T('Kvalifikace (Q)')].join());
      ok(lang === 'pl' ? w === 'Opona,Stacjonata,Kwalifikacja (Q)' : w === 'Reifen,Sprung,Qualifikation (Q)', lang + ': termíny: ' + w);
    });
    await done(T);
  }
  {
    /* AKC beze změny: vlastní příznak akc, termíny, popisky a jednotky AKC (zbytek kontroluje sada usa) */
    const T = await open('en', { rules: 'US' }); const { ok, ev, page } = T;
    await run(T, 'AKC zůstává beze změny', async () => {
      const r = await ev(() => ({ cc: RCC, akc: !!RU.akc, da: !!RU.usdaa, w: ['Houpačka', 'Skok daleký', 'Dvojitý skok'].map(T).join(), j: discL('J', 1), t: courseTimes(150, 'U2', 'J', 'M').sct }));
      ok(r.cc === 'US' && r.akc && !r.da && r.w === 'Teeter,Broad jump,Double bar jump' && r.j === 'Jumpers With Weaves' && r.t === 50, 'AKC: ' + JSON.stringify(r));
      await ev(() => { moreOpen('dogs'); dogSheet(null); }); await page.waitForTimeout(150);
      ok(await ev(() => ['dSize', 'dCls'].map(id => document.querySelector('#sheet label[for="' + id + '"]').firstChild.textContent.trim()).join()) === 'Jump height,Performance class', 'okno psa u AKC beze změny');
      await ev(() => closeSheet()); await ev(() => moreOpen('set')); await page.waitForTimeout(150);
      ok(await ev(() => document.querySelector('#moreBody [data-unit="yd"]').textContent === 'Yards (AKC)'), 'jednotky u AKC beze změny');
    });
    await done(T);
  }
  return errs;
};
