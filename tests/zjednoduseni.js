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
    ok(nav === 'home,plan,lib,run,more', 'spodní lišta: ' + nav);
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="video"]'); await page.waitForTimeout(200);
    ok(await page.isVisible('#v-video') && await page.locator('#vidList button').count() > 3, 'Videa z Více se neotevřela');
  });

  await step('více ve třech skupinách', async () => {
    await page.click('.nav [data-v="more"]');
    const r = await ev(() => ({ g: [...document.querySelectorAll('#moreTabs .mgrp')].map(x => x.textContent).join(), rows: [...document.querySelectorAll('#moreTabs .mrow:not([hidden])')].map(x => x.getAttribute('data-m')).join() }));
    ok(r.g === 'Můj tým,Učení,Nástroje,Aplikace' && r.rows === 'acct,dogs,diary,video,start,warm,coach,listina,set,about', 'Více: ' + JSON.stringify(r));
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
    ok(g === 'Rozbor a trénink:true,Venku:true,Fotka a sdílení:true', 'skupiny nástrojů přes celou šířku: ' + g);
    ok(await page.locator('#planTools .tool').count() === 12, 'nástrojů má být dál 12');
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Můj tým', 'Učení', 'Aplikace', 'Deník a statistiky', 'Videa a technika', 'Trenéři a plánky', 'Nastavení a záloha', 'O aplikaci a podpora',
      'Rozbor a trénink', 'Venku', 'Fotka a sdílení', 'Výzvy, žebříčky a závody', 'Parkur týdne, Zahrada týdne, závody poblíž, výzva dne'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
