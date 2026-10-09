/* Zjednodušení: 5 záložek, Více ve 3 skupinách (statistiky v Deníku, záloha v Nastavení, Napsat autorovi a Podpořit
   v O aplikaci), Videa z Více, Domů se sbalenými výzvami, žebříčky a závody, Nástroje ve 3 skupinách. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await page.waitForTimeout(400); await ev(() => { $('toast').hidden = true; }); };

  await step('spodní lišta a Videa', async () => {
    await fresh();
    const nav = await ev(() => [...document.querySelectorAll('.nav button')].map(b => b.getAttribute('data-v')).join());
    ok(nav === 'home,lib,plan,run,more', 'spodní lišta: ' + nav);
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="learn"]'); await page.click('#moreTabs [data-m="video"]'); await page.waitForTimeout(200);
    ok(await page.isVisible('#v-video') && await page.locator('#vidList button').count() > 3, 'Videa z Více se neotevřela');
  });

  await step('spodní lišta: schovaná ve Stavbě a Trase, čas běhu, tečka na Domů', async () => {
    await fresh('#lib');
    const cur = () => ev(() => [...document.querySelectorAll('.nav button')].filter(b => b.getAttribute('aria-current') === 'page').map(b => b.getAttribute('data-v')).join());
    const vis = () => ev(() => getComputedStyle(document.querySelector('.nav')).display !== 'none');
    ok(await cur() === 'lib', 'aria-current má mít jen Parkury: ' + await cur());
    /* parkur s překážkami: ve Stavbě a Trase je lišta schovaná, v Prohlížet zpátky */
    await ev(() => { loadCourse(listFor('A2')[0], true); show('plan'); });
    await page.click('#mView'); ok(await vis() && await cur() === 'plan', 'v Prohlížet má být lišta vidět');
    await page.click('#mBuild'); ok(!(await vis()), 've Stavbě má být lišta schovaná');
    await page.click('#mRoute'); ok(!(await vis()), 'v Trase má být lišta schovaná');
    await page.click('#mView'); ok(await vis(), 'po návratu do Prohlížet má být lišta zpátky');
    /* nový prázdný parkur: Prohlížet tam nejde, lišta zůstane jako cesta jinam; po první překážce se schová */
    await page.click('#newBtn'); await page.waitForTimeout(150); if (await page.isVisible('#scrim')) await T.sheet('ok');
    ok(await ev(() => S.obs.length === 0 && mode === 'build') && await vis(), 'na prázdné ploše ve Stavbě má lišta zůstat');
    await T.tapField(10, 10);
    ok(await ev(() => S.obs.length === 1) && !(await vis()), 'po první překážce se má lišta schovat');
    await page.keyboard.press('Control+z'); await page.waitForTimeout(100);
    ok(await ev(() => S.obs.length === 0) && await vis(), 'po vrácení poslední překážky má být lišta zpátky');
    /* stopky běží a člověk odejde jinam: na záložce Běh je čas; po STOP tečka, dokud se běh neuloží nebo nesmaže */
    await ev(() => { loadCourse(listFor('A2')[0], true); show('run'); $('toast').hidden = true; });
    await page.click('#startBtn'); await page.click('.nav [data-v="lib"]'); await page.waitForTimeout(1300);
    const run = () => ev(() => { const b = document.querySelector('.nav [data-v="run"]'); return { live: b.classList.contains('live'), t: b.querySelector('.nlbl').textContent, dot: !b.querySelector('.ndot').hidden }; });
    let r = await run();
    ok(r.live && /^[1-9] s$/.test(r.t) && !r.dot, 'běžící stopky na záložce Běh: ' + JSON.stringify(r));
    await page.click('.nav [data-v="run"]'); r = await run();
    ok(!r.live && r.t === 'Běh', 'v Běhu má být záložka zase Běh: ' + JSON.stringify(r));
    await page.click('#startBtn'); await page.click('.nav [data-v="home"]'); r = await run();
    ok(!r.live && r.t === 'Běh' && r.dot, 'zastavený neuložený běh má mít na záložce tečku: ' + JSON.stringify(r));
    await page.click('.nav [data-v="run"]'); await page.click('#resetClock'); await page.click('.nav [data-v="lib"]'); r = await run();
    ok(!r.dot, 'po smazání času tečka zmizí: ' + JSON.stringify(r));
    /* tečka na Domů: dnes nebo zítra parkur od trenéra, který ještě není zaběhnutý */
    const home = await ev(() => { AUTH = { uid: 'u-test' }; GTODAY = { at: Date.now(), uid: 'u-test', rows: [{ id: 1, day: localDate(), ran: false }] }; navHomeDot(); const d = document.querySelector('.nav [data-v="home"] .ndot'), a = !d.hidden;
      GTODAY.rows[0].ran = true; navHomeDot(); const b = !d.hidden; GTODAY.rows[0].ran = false; navHomeDot(); return { a, b }; });
    ok(home.a && !home.b, 'tečka na Domů: ' + JSON.stringify(home));
    await page.click('.nav [data-v="home"]');
    ok(await ev(() => document.querySelector('.nav [data-v="home"] .ndot').hidden), 'na Domů tečka nesvítí');
    await ev(() => { AUTH = null; GTODAY = null; navHomeDot(); });
    /* anglicky: záložka Běh je Run */
    ok(await ev(() => trLookup('Běh') === 'Run'), 'chybí anglický překlad záložky Běh');
  });

  await step('více ve třech skupinách', async () => {
    await page.click('.nav [data-v="more"]');
    /* 3.1: 8 řádků; Učení a Pro rozhodčí a pořadatele jsou skupiny, Plus je v Účtu */
    const r = await ev(() => ({ g: [...document.querySelectorAll('#moreTabs .mgrp')].map(x => x.textContent).join(), rows: [...document.querySelectorAll('#moreTabs .mrow')].filter(x => x.offsetParent !== null).map(x => x.getAttribute('data-m')).join() }));
    ok(r.g === 'Můj tým,Učení a nástroje,Aplikace' && r.rows === 'acct,dogs,groups,diary,learn,tools,set,about', 'Více: ' + JSON.stringify(r));
    await page.click('#moreTabs [data-m="diary"]');
    ok(/Postup A1/.test(await page.textContent('#moreBody')) && /Statistiky/.test(await page.textContent('#moreBody h2')), 'Deník bez statistik');
    await page.click('#moreBack'); await page.click('#moreTabs [data-m="set"]');
    ok(await page.isVisible('#moreBody [data-unit]') && await page.isVisible('#moreBody [data-bk="save"]'), 'Nastavení bez zálohy');
    await page.click('#moreBack'); await page.click('#moreTabs [data-m="about"]');
    await page.click('#moreBody .morego [data-mgo="fb"]');
    ok(await ev(() => moreTab === 'fb' && $('moreTitle').textContent === 'Napsat autorovi'), 'Napsat autorovi z O aplikaci');
    /* přímý odkaz na sloučenou sekci dál funguje (Domů → Deník, srdíčko → Podpořit) */
    await ev(() => { moreTab = 'stats'; show('more'); });
    ok(await ev(() => $('moreTitle').textContent === 'Statistiky' && !!$('moreBody').querySelector('.tiles, .hint')), 'přímý odkaz na Statistiky');
  });

  await step('domů se sbalenými výzvami', async () => {
    await ev(() => localStorage.setItem('agility-hmmore-v1', '0')); await fresh();
    const r = await ev(() => ({ open: $('hmMore').open, sum: $('hmMore').querySelector('summary').textContent, wk: !!$('hmMore').querySelector('.hm-sec'), h: $('v-home').scrollHeight }));
    ok(r.open === false && /Výzvy, žebříčky a závody/.test(r.sum) && r.wk, 'výzvy mají být sbalené: ' + JSON.stringify(r));
    await page.click('#hmMore summary'); await page.waitForTimeout(100);
    ok(await ev(() => $('hmMore').open && localStorage.getItem('agility-hmmore-v1') === '1'), 'rozbalení se nepamatuje');
    await fresh(); ok(await ev(() => $('hmMore').open), 'po návratu má zůstat rozbalené');
  });

  await step('nástroje ve skupinách', async () => {
    await fresh('#plan'); await page.click('#toolsBtn');
    const g = await ev(() => [...document.querySelectorAll('#planTools .tgrp')].map(x => x.textContent + ':' + (x.getBoundingClientRect().width > 300)).join());
    ok(g === 'Rozbor a trénink:true,Venku:true,Celý parkur:true,Fotka a sdílení:true', 'skupiny nástrojů přes celou šířku: ' + g);
    ok(await page.locator('#planTools .tool').count() === 15, 'nástrojů má být 15 (12 + celý parkur, porovnání, plánek rozhodčího)');
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Můj tým', 'Učení', 'Aplikace', 'Deník a statistiky', 'Videa a technika', 'Plánky rozhodčích a knihy', 'Učení a nástroje', 'Pro rozhodčí a pořadatele', 'Nastavení a záloha', 'O aplikaci a podpora',
      'Rozbor a trénink', 'Venku', 'Fotka a sdílení', 'Výzvy, žebříčky a závody', 'Parkur týdne, Zahrada týdne, závody poblíž, výzva dne'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
