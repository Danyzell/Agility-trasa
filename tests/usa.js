/* Anglicky mluvící uživatelé (3.4): řádek čísel na Domů nezalomí číslo od jednotky („SCT 43 / s“), vysvětlení Hoopers a Jumpers
   u přepínačů Agility | Hoopers (jen v cizím jazyce, jen při zapnutém Hoopers, × ho zavře natrvalo). */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const errs = [];
  /* nový telefon s jazykem, časovým pásmem a šířkou; localStorage z prvního načtení (průvodce hotový, jazyk) */
  const open = async (lang, o) => {
    o = o || {};
    const T = await phone(browser, Object.assign({ timezoneId: o.tz || 'Europe/London' }, o.w ? { viewport: { width: o.w, height: 800 } } : {}));
    await offline(T.ctx, Object.assign({ get_catalog: { version: 0 } }, o.rpc || {}));
    await T.ctx.addInitScript((a) => { try { if (!sessionStorage.getItem('usa1')) { sessionStorage.setItem('usa1', '1');
      localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-lang-v1', JSON.stringify(a.lang));
      if (a.rules) localStorage.setItem('agility-rules-v1', JSON.stringify(a.rules)); } } catch (e) {} }, { lang, rules: o.rules || null });
    await T.page.goto(base + '/#home'); await T.page.waitForTimeout(400); await T.ev(() => { closeSheet(); $('toast').hidden = true; });
    return T;
  };
  const run = async (T, label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const done = async (T) => { errs.push(...T.errs); await T.ctx.close(); };

  /* 1c: anglicky se dřív „SCT 43 s“ zalomilo mezi číslem a jednotkou; každá položka je teď nezalomitelný celek */
  for (const w of [390, 360]) {
    const T = await open('en', { w }); const { ok, ev } = T;
    await run(T, 'řádek čísel na Domů (' + w + ' px)', async () => {
      await ev(() => { loadCourse(listFor('A2')[1], true); S.meta.name = 'Saturday Jumpers course with a long name'; show('home'); $('toast').hidden = true; });
      await T.page.waitForTimeout(250);
      const r = await ev(() => { const L = [...document.querySelectorAll('#v-home .hm-cur .hm-curtx span.nw')];
        return { t: L.map(e => e.textContent), lines: L.map(e => e.getClientRects().length), ws: L.map(e => getComputedStyle(e).whiteSpace) }; });
      ok(r.t.length === 4 && r.t[0] === 'A2' && /^\d+\.\d m$/.test(r.t[1]) && /^\d+ obstacles$/.test(r.t[2]) && /^SCT \d+ s$/.test(r.t[3]), 'položky řádku: ' + JSON.stringify(r.t));
      ok(r.lines.every(n => n === 1) && r.ws.every(x => x === 'nowrap'), 'položka se nesmí zalomit: ' + JSON.stringify(r));
    });
    await done(T);
  }

  /* 1a: Hoopers a Jumpers */
  {
    const T = await open('en'); const { ok, ev, page } = T;
    await run(T, 'Hoopers: vysvětlení na Domů jen při zapnutém Hoopers', async () => {
      ok(!(await ev(() => !!document.querySelector('#v-home .hoophint'))), 'v Agility se vysvětlení nemá ukazovat');
      await page.click('#v-home .hm-sport [data-sp="hoopers"]'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; });
      const t = await ev(() => { const e = document.querySelector('#v-home .hoophint'); return e && e.offsetParent ? e.textContent.trim() : ''; });
      ok(t === 'Hoopers: hoops, barrels and tunnels, no jumps. Jumpers courses go under Agility.', 'vysvětlení na Domů: ' + t);
    });
    await run(T, 'Hoopers: vysvětlení ve Stavbě u parkuru Hoopers', async () => {
      await ev(() => { newCourse('H2', 30, 20, ''); show('plan'); $('toast').hidden = true; }); await page.waitForTimeout(200);
      ok(await page.isVisible('#pSportHint .hoophint'), 've Stavbě u parkuru Hoopers chybí vysvětlení');
      await ev(() => { newCourse('A2', 40, 20, ''); $('toast').hidden = true; }); await page.waitForTimeout(150);
      ok(!(await page.isVisible('#pSportHint .hoophint')), 'u parkuru agility se vysvětlení nemá ukazovat');
      await ev(() => { newCourse('H1', 30, 20, ''); $('toast').hidden = true; }); await page.waitForTimeout(150);
      await page.click('#pSportHint .hoophint [data-hh]'); await page.waitForTimeout(100);
      ok(!(await ev(() => !!document.querySelector('.hoophint'))) && (await ev(() => lsGet('agility-hoophint-v1', 0))) === 1, 'po × má vysvětlení zmizet a zapamatovat se');
      await page.reload(); await page.waitForTimeout(400); await ev(() => { closeSheet(); show('home'); $('toast').hidden = true; }); await page.waitForTimeout(150);
      ok(await ev(() => SPORT === 'hoopers' && !document.querySelector('.hoophint')), 'zavřené vysvětlení se po novém spuštění nevrací');
    });
    await done(T);
  }
  {
    const T = await open('cs'); const { ok, ev, page } = T;
    await run(T, 'Hoopers: česky bez vysvětlení', async () => {
      await page.click('#v-home .hm-sport [data-sp="hoopers"]'); await page.waitForTimeout(300);
      await ev(() => { newCourse('H2', 30, 20, ''); show('plan'); $('toast').hidden = true; }); await page.waitForTimeout(150);
      ok(!(await ev(() => !!document.querySelector('.hoophint'))), 'česky se vysvětlení Hoopers a Jumpers nemá ukazovat');
    });
    await done(T);
  }

  /* 1b: pravidla USA podle AKC Regulations for Agility Trials (kap. 6 a 7: yardy za sekundu; kap. 5 § 3: časové chyby a SČP + 20 s) */
  const AKC = { A: { U1: [1.85, 2.0, 2.15, 2.25, 2.2], U2: [2.25, 2.35, 2.5, 2.65, 2.55], U3: [2.5, 2.7, 2.85, 3.1, 2.9], U4: [2.5, 2.7, 2.85, 3.1, 2.9] },
    J: { U1: [2.3, 2.5, 2.75, 3.0, 2.8], U2: [2.8, 3.0, 3.25, 3.5, 3.3], U3: [3.05, 3.25, 3.5, 3.75, 3.55], U4: [3.05, 3.25, 3.5, 3.75, 3.55] } };
  {
    const T = await open('en', { tz: 'America/Chicago' }); const { ok, ev, page } = T;
    await run(T, 'USA: výchozí v Americe, třídy, výšky a yardy', async () => {
      const r = await ev(() => ({ cc: RCC, unit: UNIT(), cls: RU.cls.map(clsL).join(), kacr: KACR_OK, sz: Object.keys(RU.heights).join() }));
      ok(r.cc === 'US' && r.unit === 'yd' && r.cls === 'Novice,Open,Excellent,Master' && !r.kacr && r.sz === 'XS,S,M,I,L', 'časové pásmo America/* má dát pravidla AKC: ' + JSON.stringify(r));
      await ev(() => { moreOpen('dogs'); dogSheet(null); }); await page.waitForTimeout(150);
      const d = await ev(() => ({ cls: [...document.querySelectorAll('#sheet #dCls option')].map(o => o.textContent).join(), sz: [...document.querySelectorAll('#sheet #dSize option')].map(o => o.textContent), def: $('dSize').value }));
      ok(d.cls === 'Novice,Open,Excellent,Master' && d.sz.length === 5 && /^20" – 22" and under at the withers \(also 24" Choice\)$/.test(d.sz[3]) && d.def === 'I', 'okno psa: třídy a výšky AKC: ' + JSON.stringify(d));
      await ev(() => closeSheet());
      /* rychlosti přesně podle tabulek AKC */
      const sp = await ev((A) => { const bad = []; ['A', 'J'].forEach(dc => ['U1', 'U2', 'U3', 'U4'].forEach(lv => USZ.forEach((z, i) => { if (usSpd(lv, z, dc) !== A[dc][lv][i]) bad.push(dc + lv + z); }))); return bad; }, AKC);
      ok(!sp.length, 'rychlosti AKC nesedí: ' + sp.join());
      /* SČP: yardy / rychlost (na celé s), Novice a Open Standard + 5 s za stůl, Excellent a Master nejvýš limit; MČP = SČP + 20 s */
      const t = await ev(() => [courseTimes(150, 'U1', 'A', 'XS'), courseTimes(150, 'U2', 'J', 'M'), courseTimes(150, 'U3', 'A', 'I'), courseTimes(200, 'U4', 'A', 'I'), courseTimes(190, 'U3', 'J', 'L')].map(c => [c.sct, c.mct]));
      ok(JSON.stringify(t) === JSON.stringify([[94, 114], [50, 70], [53, 73], [63, 83], [52, 72]]), 'SČP a MČP podle AKC: ' + JSON.stringify(t));
      await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'I', cls: 'U2' }]; DOGC = 'd1'; saveDogs(); loadCourse(listFor('A2')[0], true); PLANUI.specs = 1; show('plan'); render(); ui(); $('toast').hidden = true; });
      await page.waitForTimeout(200);
      const m = await ev(() => { const m = curM(); return { sct: m.sct, mct: m.mct, len: m.len, lvl: m.lvl, us: m.us, specs: $('specs').innerText.replace(/\s+/g, ' '), seg: [...document.querySelectorAll('#field text')].map(e => e.textContent).filter(x => /\d (ft|m)$|^\d+(,\d)?$/.test(x)).slice(0, 3) }; });
      ok(m.us && m.lvl === 'U2' && m.sct === Math.round(Math.round(m.len * 10) / 10 / 0.9144 / 2.65) + 5 && m.mct === m.sct + 20, 'parkur v Plánu: čas podle psa (Open, 20"): ' + JSON.stringify(m));
      ok(/Course length \d+ yd/.test(m.specs) && /Standard Open · 20"/.test(m.specs) && /2\.65 yd\/s/.test(m.specs) && /SCT \+ 20 s \(AKC\)/.test(m.specs), 'Plán v yardech a podle AKC: ' + m.specs);
      ok(m.seg.length && m.seg.every(x => / ft$/.test(x)), 'vzdálenosti na plánu ve stopách: ' + JSON.stringify(m.seg));
      /* 3.5: kontrola FCI se s pravidly AKC neukazuje; plocha ve stopách (kruhy AKC), parkur z knihovny má vlastní položku */
      const f = await ev(() => ({ fci: $('fciBar').hidden, marks: document.querySelectorAll('#obs .ob.bad').length,
        opts: [...$('sizeSelect').options].map(o => o.value + '=' + o.textContent), val: $('sizeSelect').value }));
      ok(f.fci && f.marks === 0, 'kontrola FCI nemá být s pravidly AKC vidět: ' + JSON.stringify(f));
      ok(f.opts.some(o => o === '30.48x30.48=Field 100 × 100 ft') && f.opts.some(o => o === '30.48x24.38=Field 100 × 80 ft') && f.opts.some(o => /^40x24=Field 131 × 79 ft$/.test(o)) && !f.opts.some(o => / m$/.test(o)), 'velikosti plochy ve stopách: ' + JSON.stringify(f.opts));
      await ev(() => { $('sizeSelect').value = '30.48x30.48'; $('sizeSelect').dispatchEvent(new Event('change')); }); await page.waitForTimeout(200);
      const sz = await ev(() => ({ open: !$('scrim').hidden, txt: $('sheet').innerText.replace(/\s+/g, ' ') }));
      ok(sz.open && /On a 100 × 100 ft field/.test(sz.txt), 'okno při změně plochy ve stopách: ' + sz.txt.slice(0, 160));
      await page.click('#sheet [data-a="scale"]'); await page.waitForTimeout(200);
      ok(await ev(() => S.W === 30.48 && S.H === 30.48 && $('sizeSelect').value === '30.48x30.48'), 'plocha 100 × 100 ft se nepoužila: ' + await ev(() => S.W + 'x' + S.H));
    });
    await run(T, 'USA: americké termíny a bodování AKC ve stopkách', async () => {
      const w = await ev(() => ['Houpačka', 'Kruh', 'Skok daleký', 'Dvojitý skok', 'Kladina', 'A-rampa', 'Slalom', 'Metry'].map(T));
      ok(w.join() === 'Teeter,Tire,Broad jump,Double bar jump,Dog walk,A-frame,Weave poles,Meters', 'americké názvy překážek: ' + w.join());
      const e = await ev(() => { const m = curM(), E = (t, f, r, lvl) => { const x = evalRun(m.sct + t, f, r, false, Object.assign({}, m, { lvl })); return x.g + ':' + x.score; };
        return [E(2.5, 0, 1, 'U2'), E(0, 0, 3, 'U1'), E(-1, 0, 2, 'U1'), E(-1, 0, 1, 'U3'), E(1.2, 0, 0, 'U3'), E(1, 0, 0, 'U4'), E(-1, 0, 0, 'U4'), E(-5, 1, 0, 'U1'), E(20.5, 0, 0, 'U1')]; });
      ok(e.join() === 'V:91,BO:85,V:90,BO:95,V:97,BO:97,V:100,DIS:0,DIS:0', 'Q a NQ podle AKC: ' + e.join());
      await ev(() => { show('run'); $('manT').value = String(curM().sct + 2.5).replace('.', ','); RUN.f = 0; RUN.r = 1; resultRender(); }); await page.waitForTimeout(250);
      const res = await ev(() => ({ g: document.querySelector('#result .grade').textContent, t: $('result').innerText.replace(/\s+/g, ' '), bar: $('rbG').innerText }));
      ok(res.g === 'Q' && /Qualifying \(Q\)/.test(res.t) && /refusals 1 · time faults 4/.test(res.t) && /Score 91 of 100 \(Q from 85\)/.test(res.t) && res.bar === 'Qualifying (Q) · score 91', 'výsledek běhu podle AKC: ' + JSON.stringify(res));
      ok(await ev(() => !document.querySelector('#speedRow [data-sp]') && /SCT speed per AKC/.test($('speedRow').innerText)), 'rychlost pro SČP je z tabulek AKC, ručně se nemění');
    });
    await run(T, 'USA: kalkulačka, výšky překážek, jednotky a postup', async () => {
      await ev(() => { localStorage.setItem('agility-sctcalc-v1', JSON.stringify({ len: 165 * 0.9144, disc: 'A', cls: 'U3', size: 'I' })); show('plan'); sctCalcSheet(); });
      await page.waitForTimeout(200);
      const c = await ev(() => ({ len: $('scLen').value, spd: $('scSpd').value, t: $('scOut').innerText.replace(/\s+/g, ' '), lab: $('sheet').querySelector('label[for="scLen"]').innerText }));
      ok(c.len === '165' && c.spd === '3.1' && /SCT 53 s MCT 73 s Speed 3\.10 yd\/s/.test(c.t) && /Novice 2\.25 yd\/s 78 s 98 s/.test(c.t) && /Course length \(yd\)/.test(c.lab), 'kalkulačka AKC: ' + JSON.stringify(c));
      await page.fill('#scLen', '200'); await page.waitForTimeout(100);
      ok(/SCT 63 s/.test(await ev(() => $('scOut').innerText.replace(/\s+/g, ' '))), 'Excellent Standard 20": nejvýš 63 s');
      await ev(() => closeSheet());
      await ev(() => moreOpen('dogs')); await page.waitForTimeout(200);
      const h = await ev(() => $('moreBody').innerText.replace(/\s+/g, ' '));
      ok(/Per AKC/.test(h) && /Tire \(bottom of the opening\) 16"/.test(h) && /Broad jump 40" \(4 boards\)/.test(h) && /5' 6" \/ 4' \/ 2' at the pivot/.test(h) && /20" · Open/.test(h), 'výšky překážek podle AKC: ' + h.slice(0, 400));
      /* jednotky: výchozí yardy se neukládají; metry jde zvolit */
      await ev(() => moreOpen('set')); await page.waitForTimeout(150);
      ok(await ev(() => document.querySelector('#moreBody [data-unit="yd"]').classList.contains('on') && SET.unit == null), 'v Nastavení mají být zvolené yardy');
      await page.click('#moreBody [data-unit="m"]');
      ok(await ev(() => SET.unit === 'm' && lenU(150) === '150.0 m'), 'metry s pravidly USA');
      await page.click('#moreBody [data-unit="yd"]');
      ok(await ev(() => SET.unit == null && lenU(150) === '164 yd'), 'zpět na yardy');
      /* postup: 3 Q v Novice → Open */
      await ev(() => { DOGS = [{ id: 'd1', name: 'Rex', size: 'I', cls: 'U1' }]; DOGC = 'd1'; saveDogs();
        lsSet(DIARYK, [1, 2, 3].map(i => ({ id: 'y' + i, kind: 'zavod', date: '2026-0' + i + '-01', dog: 'd1', cls: 'U1', g: i < 3 ? 'V' : 'BO', tot: '0', place: '', judge: '' }))); moreOpen('diary'); });
      await page.waitForTimeout(200);
      const p = await ev(() => $('moreBody').innerText.replace(/\s+/g, ' '));
      ok(/Promotion Novice → Open: 3 qualifying scores \(Q\): NA title in Standard, NAJ in JWW/.test(p) && /2 of 3 qualifying runs/.test(p) && /According to the AKC Regulations for Agility Trials/.test(p) && !/[ěščřžůťďň]/.test(p.replace(/Čeština/g, '')), 'postup podle AKC v Deníku: ' + p.slice(0, 500));
    });
    await done(T);
  }
  {
    /* Británie a čeština beze změny: britská angličtina, metry */
    const T = await open('en', { tz: 'Europe/London', rules: 'UK' }); const { ok, ev } = T;
    await run(T, 'Británie zůstává: seesaw, tyre, metry', async () => {
      const r = await ev(() => ({ cc: RCC, unit: UNIT(), w: ['Houpačka', 'Kruh', 'Skok daleký', 'Metry'].map(T).join(), len: lenU(150) }));
      ok(r.cc === 'UK' && r.unit === 'm' && r.w === 'Seesaw,Tyre,Long jump,Metres' && r.len === '150.0 m', 'britská pravidla a angličtina beze změny: ' + JSON.stringify(r));
      await ev(() => { loadCourse(listFor('A2')[0], true); show('plan'); render(); ui(); }); await T.page.waitForTimeout(200);
      const u = await ev(() => ({ fci: !$('fciBar').hidden, opt: [...$('sizeSelect').options].map(o => o.textContent) }));
      ok(u.fci && u.opt.includes('Field 40 × 20 m'), 'v Británii zůstává kontrola a plocha v metrech: ' + JSON.stringify(u));
    });
    await done(T);
  }
  for (const [tz, cc] of [['America/Mexico_City', 'FCI'], ['America/Toronto', 'FCI'], ['America/Sao_Paulo', 'FCI'], ['America/Indiana/Indianapolis', 'US'], ['Pacific/Honolulu', 'US']]) {
    const T = await open('en', { tz }); const { ok, ev } = T;
    await run(T, 'výchozí pravidla v pásmu ' + tz, async () => {
      ok(await ev(() => RCC) === cc, tz + ' má dát ' + cc + ', ne ' + await ev(() => RCC));
    });
    await done(T);
  }
  {
    const T = await open('cs', { tz: 'America/New_York' }); const { ok, ev } = T;
    await run(T, 'česky v Americe: česká pravidla', async () => {
      ok(await ev(() => RCC === 'CZ' && UNIT() === 'm' && !US_EN), 'čeština má dál česká pravidla: ' + await ev(() => RCC));
    });
    await done(T);
  }
  return errs;
};
