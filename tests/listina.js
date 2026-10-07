/* Křížení na dráze psovoda (značky P / Z / S / ! na plánku: pokládání, mazání, uložení, kontrola dat, export, legenda)
   a výsledková listina pro pořadatele (kategorie, pořadí podle FCI, poslední běh psa, text pro Excel, tisk). */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  await page.goto(base + '/#plan'); await page.waitForTimeout(400);
  await ev(() => { $('toast').hidden = true; loadCourse(listFor('A1')[0], true); }); await page.waitForTimeout(200);
  if (await page.isVisible('#scrim')) await T.sheet('ok');

  await step('položení a smazání značek', async () => {
    await T.tool('side'); await page.waitForTimeout(150);
    ok(await ev(() => panel === 'side' && !$('sideBar').hidden && !$('mkSeg').hidden && $('mkLegend').hidden), 'lišta Dráha psovoda s volbou značek');
    await page.click('#mkSeg [data-mk="front"]');
    ok(await ev(() => MKT === 'front' && document.querySelector('#mkSeg [data-mk="front"]').classList.contains('on') && svg.classList.contains('mk')), 'volba Přední křížení');
    await T.tapField(10, 10);
    await page.click('#mkSeg [data-mk="warn"]'); await T.tapField(15, 10); /* plocha je na telefonu přiblížená, klepat jde jen do levé poloviny */
    const r = await ev(() => ({ m: S.marks.map(m => m.t + ':' + m.x + ',' + m.y).join(' '), svg: [...document.querySelectorAll('#hmk .hmk')].map(g => g.className.baseVal + '=' + g.querySelector('text').textContent).join(' '),
      lg: !$('mkLegend').hidden && $('mkLegend').textContent, dirty: S.meta.dirty, hp: S.hp.length }));
    ok(r.m === 'front:10,10 warn:15,10', 'značky v datech: ' + r.m);
    ok(r.svg === 'hmk hmk-front=P hmk hmk-warn=!', 'značky na ploše: ' + r.svg);
    ok(/P přední, Z zadní, S slepé křížení, ! pozor/.test(r.lg) && r.dirty && r.hp === 0, 'legenda a stav: ' + JSON.stringify(r));
    /* klepnutí na značku ji smaže (i bez vybraného druhu), čára se při tom nekreslí */
    await ev(() => { MKT = null; ui(); });
    await T.tapField(10.3, 9.8);
    ok(await ev(() => S.marks.length === 1 && S.marks[0].t === 'warn' && S.hp.length === 0), 'klepnutí na značku ji nesmazalo: ' + await ev(() => JSON.stringify(S.marks)));
    /* Zpět vrátí smazanou značku */
    await ev(() => undo());
    ok(await ev(() => S.marks.length === 2 && S.marks[0].t === 'front'), 'Zpět nevrátil značku');
    /* kreslení čáry dál funguje, když není vybraný druh */
    const b = await page.locator('#field').boundingBox(), W = await ev(() => S.W), H = await ev(() => S.H);
    await page.mouse.move(b.x + 4 / W * b.width, b.y + 15 / H * b.height); await page.mouse.down();
    for (let i = 1; i <= 6; i++) await page.mouse.move(b.x + (4 + i) / W * b.width, b.y + (15 + i * .5) / H * b.height);
    await page.mouse.up(); await page.waitForTimeout(100);
    ok(await ev(() => S.hp.length > 3 && S.marks.length === 2), 'čára psovoda se značkami: hp=' + await ev(() => S.hp.length));
    /* nejvýš 40 značek */
    await ev(() => { MKT = 'blind'; S.marks = []; for (let i = 0; i < 40; i++) S.marks.push({ t: 'blind', x: 1 + i * .9, y: 18 }); render(); });
    await T.tapField(15, 5);
    ok(await ev(() => S.marks.length === 40 && !$('toast').hidden), '41. značka se neměla položit');
    await ev(() => { S.marks = [{ t: 'front', x: 10, y: 10 }, { t: 'warn', x: 15, y: 10 }]; touch(); render(); MKT = null; ui(); });
    /* Smazat značky */
    await page.click('#mkClear');
    ok(await ev(() => S.marks.length === 0 && $('mkLegend').hidden && !document.querySelector('#hmk .hmk')), 'Smazat značky');
    await ev(() => undo());
    ok(await ev(() => S.marks.length === 2 && !$('mkLegend').hidden), 'Zpět po Smazat značky');
    await page.click('#sideDone');
    ok(await ev(() => panel === null && MKT === null && document.querySelectorAll('#hmk .hmk').length === 2), 'značky zůstávají i mimo Dráhu psovoda');
  });

  await step('uložení: rozpracovaný plán, Moje, sdílení, export', async () => {
    await page.reload(); await page.waitForTimeout(500);
    ok(await ev(() => S.marks.length === 2 && S.marks[1].t === 'warn' && document.querySelectorAll('#hmk .hmk').length === 2), 'značky nepřežily nové otevření: ' + await ev(() => JSON.stringify(S.marks)));
    /* Moje: uložit a znovu načíst */
    await page.click('#saveBtn'); await page.waitForTimeout(150); await page.fill('#fName', 'Parkur se značkami'); await T.sheet('new');
    const my = await ev(() => { const c = myDB()[myDB().length - 1]; return { id: c.id, n: (c.marks || []).length, cur: S.meta.id }; });
    ok(my.n === 2 && my.cur === my.id, 'Moje: značky se neuložily: ' + JSON.stringify(my));
    await ev(() => loadCourse(listFor('A1')[1], true)); await page.waitForTimeout(100);
    ok(await ev(() => S.marks.length === 0 && !document.querySelector('#hmk .hmk') && $('mkLegend').hidden), 'jiný parkur má mít plochu bez značek');
    await ev(id => loadCourse(findCourse(id), true), my.id); await page.waitForTimeout(100);
    ok(await ev(() => S.marks.length === 2 && S.marks[0].t === 'front' && S.marks[0].x === 10), 'Moje: značky se nenačetly');
    /* data pro sdílení kódem a snímek plánu obsahují značky */
    ok(await ev(() => JSON.parse(planSnap()).marks.length === 2 && listFor('my').some(c => (c.marks || []).length === 2)), 'planSnap / listFor bez značek');
    /* obrázek pro export vzniká z plochy: značky jsou v něm */
    const s = await ev(() => fieldSvgString());
    ok(/hmk-front/.test(s) && /hmk-warn/.test(s) && !/var\(--/.test(s), 'export SVG bez značek');
    /* v tréninku paměti se značky schovají */
    await ev(() => setPanel('quiz'));
    ok(await ev(() => !document.querySelector('#hmk .hmk') && $('mkLegend').hidden), 'trénink paměti ukazuje značky');
    await ev(() => setPanel(null));
    /* Nový parkur značky vyčistí */
    await ev(() => { S.meta.dirty = false; $('newBtn').click(); }); await page.waitForTimeout(100);
    if (await page.isVisible('#scrim')) await T.sheet('ok');
    ok(await ev(() => S.marks.length === 0), 'Nový parkur nechal značky');
    await ev(id => loadCourse(findCourse(id), true), my.id); await page.waitForTimeout(100);
  });

  await step('kontrola dat odmítne špatné značky', async () => {
    const r = await ev(() => {
      const c = courseClean({ W: 40, H: 20, obs: [], route: [], marks: [{ t: 'front', x: 5, y: 5.26 }, { t: 'xx', x: 5, y: 5 }, { t: 'rear', x: -1, y: 5 }, { t: 'blind', x: 5, y: 'a' }, { t: 'warn', x: 50, y: 5 }, null, 'text', { t: 'warn' }] });
      const many = []; for (let i = 0; i < 45; i++) many.push({ t: 'rear', x: 1, y: 1 });
      return { a: JSON.stringify(c.marks), n: courseClean({ marks: many }).marks.length, none: JSON.stringify(courseClean({ W: 40, H: 20 }).marks), str: courseClean({ marks: 'x' }).marks.length };
    });
    ok(r.a === '[{"t":"front","x":5,"y":5.3}]', 'špatné značky prošly: ' + r.a);
    ok(r.n === 40 && r.none === '[]' && r.str === 0, 'limit 40 / chybějící značky: ' + JSON.stringify(r));
  });

  await step('výsledková listina: kategorie, pořadí, poslední běh', async () => {
    const id = await ev(() => S.meta.id);
    await ev(id => {
      DOGS.length = 0; DOGS.push({ id: 'd1', name: 'Ajka', size: 'L', cls: 'A1' }, { id: 'd2', name: 'Bety', size: 'L', cls: 'A1', handler: 'Jana' }, { id: 'd3', name: 'Cira', size: 'M', cls: 'A1' }, { id: 'd4', name: 'Dyna', size: 'L', cls: 'A1' }); DOGC = 'd1'; saveDogs();
      const b = { sct: 45, mct: 90, len: 150, cls: 'A1' };
      setMark(id, { runs: [
        Object.assign({ d: 1000, t: 38, f: 0, r: 0, tot: 0, g: 'V', dog: 'd1' }, b),      /* starší běh Ajky: čistý a rychlý, ale nepočítá se */
        Object.assign({ d: 2000, t: 40, f: 1, r: 0, tot: 5, g: 'V', dog: 'd1' }, b),
        Object.assign({ d: 3000, t: 42, f: 0, r: 0, tot: 0, g: 'V', dog: 'd2' }, b),
        Object.assign({ d: 4000, t: 50, f: 1, r: 1, tot: 15, g: 'VD', dog: 'd3' }, b),
        Object.assign({ d: 5000, t: 30, f: 0, r: 0, tot: 0, g: 'DIS', dog: 'd4' }, b),
        Object.assign({ d: 6000, t: 47.5, f: 0, r: 0, tot: 2.5, g: 'V', dog: null }, b)   /* běh bez psa */
      ] });
      moreOpen('listina');
    }, id); await page.waitForTimeout(200);
    const r = await ev(() => ({ tab: moreTab, view, title: $('moreTitle').textContent, cats: [...document.querySelectorAll('#listinaBox h3')].map(h => h.textContent.replace(/\s+/g, ' ').trim()),
      rows: [...document.querySelectorAll('#listinaBox table')].map(t => [...t.querySelectorAll('tr')].slice(1).map(tr => [...tr.children].map(td => td.textContent.trim()).join('|')).join(' ; ')) }));
    ok(r.tab === 'listina' && r.view === 'more' && r.title === 'Výsledková listina', 'otevření listiny: ' + JSON.stringify(r));
    ok(r.cats.join(' / ') === 'A1 · Velikost M / A1 · Velikost L / A1 · Bez psa', 'kategorie: ' + r.cats.join(' / '));
    ok(r.rows[0] === '1.|Cira|M|50,00|1|1|5,00|15,00|VD', 'kategorie M: ' + r.rows[0]);
    ok(r.rows[1] === '1.|BetyJana|L|42,00|0|0|0,00|0,00|V ; 2.|Ajka|L|40,00|1|0|0,00|5,00|V ; –|Dyna|L|30,00|0|0|0,00|0,00|DIS', 'kategorie L (pořadí, DIS na konci, poslední běh Ajky): ' + r.rows[1]);
    ok(r.rows[2] === '1.|Bez psa|–|47,50|0|0|2,50|2,50|V', 'běh bez psa: ' + r.rows[2]);
    /* všechny běhy: Ajka dvakrát, její starší čistý běh vyhrává */
    await page.click('#moreBody [data-ls="all"]'); await page.waitForTimeout(150);
    const all = await ev(() => [...document.querySelectorAll('#listinaBox table')][1].querySelectorAll('tr').length - 1 + ':' + [...document.querySelectorAll('#listinaBox table')][1].querySelectorAll('td.dog')[0].textContent + ':' + LST.all + ':' + document.querySelector('#moreBody [data-ls="all"]').className);
    ok(all === '4:Ajka:true:on', 'všechny běhy: ' + all);
    await page.click('#moreBody [data-ls="last"]'); await page.waitForTimeout(150);
    /* shodný výsledek (body i čas) = stejné místo, další místo se přeskočí */
    const tie = await ev(id => { const runs = getMark(id).runs.slice(); runs.push({ d: 7000, t: 42, f: 0, r: 0, tot: 0, g: 'V', dog: 'd4', cls: 'A1' }); setMark(id, { runs });
      const L = listinaRows(true).filter(x => x.size === 'L')[0].rows; setMark(id, { runs: runs.slice(0, -1) }); return L.map(x => x.dog + ':' + x.place).join(); }, id);
    ok(tie === 'Ajka:1,Bety:2,Dyna:2,Ajka:4,Dyna:0', 'místa při shodě: ' + tie);
  });

  await step('listina: text pro Excel, sdílení, tisk, vstupy', async () => {
    const t = await ev(() => listinaText().split('\n'));
    ok(/^Výsledková listina: Parkur se značkami \(A1\)/.test(t[0]) && /^Délka 1\d\d,\d m · SČP \d+ s · MČP \d+ s$/.test(t[1]), 'hlavička textu: ' + t.slice(0, 2).join(' | '));
    ok(t[3] === 'A1 · Velikost M' && t[4] === 'Místo\tPes\tPsovod\tVelikost\tČas\tChyby\tOdmítnutí\tZa čas\tCelkem\tHodnocení' && t[5] === '1\tCira\t\tM\t50,00\t1\t1\t5,00\t15,00\tVD', 'tabulka M v textu: ' + t.slice(3, 6).join(' | '));
    ok(t.indexOf('1\tBety\tJana\tL\t42,00\t0\t0\t0,00\t0,00\tV') > 0 && t.indexOf('–\tDyna\t\tL\t30,00\t0\t0\t0,00\t0,00\tDIS') > 0, 'řádky L v textu: ' + t.join(' | '));
    /* Kopírovat: schránka (nebo označení) */
    await ev(() => { window.__cp = null; navigator.clipboard.writeText = s => { window.__cp = s; return Promise.resolve(); }; });
    await page.click('#moreBody [data-ls="copy"]'); await page.waitForTimeout(100);
    ok(await ev(() => typeof window.__cp === 'string' && /\tBety\tJana\t/.test(window.__cp)), 'Kopírovat jako text');
    /* Sdílet: Web Share, jinak schránka */
    await ev(() => { window.__sh = null; navigator.share = o => { window.__sh = o; return Promise.resolve(); }; });
    await page.click('#moreBody [data-ls="share"]'); await page.waitForTimeout(100);
    ok(await ev(() => window.__sh && /Výsledková listina/.test(window.__sh.title) && /\tDyna\t/.test(window.__sh.text)), 'Sdílet přes Web Share');
    /* Tisk: při tisku je vidět jen listina, po tisku se uklidí */
    await ev(() => { window.__pr = null; window.print = () => { window.__pr = document.body.classList.contains('pr-listina') && document.querySelectorAll('#prListina .listina table').length === 3 && getComputedStyle($('prListina')).display; }; });
    await page.click('#moreBody [data-ls="print"]'); await page.waitForTimeout(100);
    ok(await ev(() => window.__pr === 'none'), 'tisk: listina připravená, na obrazovce skrytá: ' + await ev(() => window.__pr));
    await ev(() => window.dispatchEvent(new Event('afterprint')));
    ok(await ev(() => !document.body.classList.contains('pr-listina') && $('prListina').hidden && !$('prListina').innerHTML), 'po tisku se listina neuklidila');
    /* vstupy: Více → Nástroje a tlačítko v Běhu */
    ok(await ev(() => { const b = document.querySelector('#moreTabs [data-m="listina"]'); return b && /Výsledková listina/.test(b.textContent) && b.previousElementSibling.textContent === 'Nástroje'; }), 'Více → Nástroje → Výsledková listina');
    await ev(() => show('run')); await page.waitForTimeout(100);
    ok(await page.isVisible('#listinaBtn'), 'tlačítko v Běhu');
    await page.click('#listinaBtn'); await page.waitForTimeout(150);
    ok(await ev(() => view === 'more' && moreTab === 'listina' && !!$('listinaBox')), 'tlačítko v Běhu neotevřelo listinu');
    /* bez uloženého parkuru a bez běhů */
    const e = await ev(() => { const a = S.meta.id; S.meta.id = null; const h1 = listinaHTML(); S.meta.id = a; setMark(a, { runs: [] }); const h2 = listinaHTML(); return (/Nejdřív parkur ulož/.test(h1) ? 'A' : '') + (/zatím nejsou uložené běhy/.test(h2) ? 'B' : ''); });
    ok(e === 'AB', 'hlášky bez parkuru / bez běhů: ' + e);
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Značky křížení', 'Přední křížení', 'Zadní křížení', 'Slepé křížení', 'Pozor', 'přední', 'zadní', 'slepé', 'pozor', 'Smazat značky', 'P přední, Z zadní, S slepé křížení, ! pozor',
      'Vyber druh značky a klepni na plochu, kam ji chceš dát. Klepnutím na značku ji smažeš.', 'Víc značek se na plánek nevejde.', 'Na plánku nejsou žádné značky.', 'Nástroje', 'Výsledková listina',
      'Které běhy', 'Poslední běh psa', 'Všechny běhy', 'Tisk / PDF', 'Kopírovat jako text', 'Sdílet', 'Stavěl/a:', 'Délka', 'SČP', 'MČP', 'Hoopers · max. čas', 'Velikost', 'Bez psa', 'Místo', 'Pes', 'Vel.', 'Čas', 'Ch.', 'Odm.', 'Za čas', 'Celkem', 'Hodnocení', 'Hodn.', 'Psovod',
      'Všechny uložené běhy.', 'Počítá se poslední uložený běh každého psa.', 'Řazení podle FCI: méně trestných bodů, pak rychlejší čas, diskvalifikace na konci.',
      'Listina se dělá z běhů uložených k parkuru. Nejdřív parkur ulož nebo načti z Parkurů.', 'K tomuhle parkuru zatím nejsou uložené běhy. Změř je v Běhu a ulož ke psům.',
      'Listina z běhů uložených k načtenému parkuru: všichni psi, kategorie podle třídy parkuru a velikosti psa, pořadí podle FCI. Hodí se na klubové závody a zkoušky.', 'Tisk tady nejde otevřít. Zkopíruj listinu jako text.'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    ok(await ev(() => trLookup('P přední, Z zadní, S slepé křížení, ! pozor') === 'P front, Z rear, S blind cross, ! watch out' && trLookup('Hodnocení') === 'Grade'), 'překlad legendy / hodnocení');
  });

  await T.ctx.close();
  return T.errs;
};
