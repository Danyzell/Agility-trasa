/* Přívětivý vzhled (2.9): pes jako hlavní postava (pozdrav na Domů, obrázek psa kreslený nebo fotka jen v telefonu, profil psa
   s kroužkem postupu, čipy psů s tváří), teplé barvy světlého vzhledu, nadpisy bez verzálek, prázdná místa s obrázkem
   (Deník, Moje, Psi) a průvodce, který začíná jménem psa. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  /* bez průvodce, kromě kroku, který si ho vyžádá přes ?onb */
  await T.ctx.addInitScript(() => { try { if (!/onb/.test(location.search) && localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await w(400); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const dog = (o) => ev((o) => { DOGS = [Object.assign({ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }, o || {})]; DOGC = 'd1'; saveDogs(); }, o);
  /* tři dny po sobě běh psa d1 (série 3) */
  const runs = () => ev(() => { const L = listFor('A2'); for (let i = 0; i < 3; i++) setMark(L[i].id, { done: true, runs: [{ d: Date.now() - i * 864e5, t: 40, f: 0, r: 0, tot: i === 1 ? 5 : 0, g: i === 1 ? 'VD' : 'V', sct: 45, mct: 63, len: 150, dog: 'd1', cls: 'A2' }] }); });
  const png = async () => Buffer.from((await ev(() => { const c = document.createElement('canvas'); c.width = 300; c.height = 200; const g = c.getContext('2d'); g.fillStyle = '#c0392b'; g.fillRect(0, 0, 300, 200); g.fillStyle = '#fff'; g.fillRect(120, 40, 60, 60); return c.toDataURL('image/png'); })).split(',')[1], 'base64');

  await step('Domů: pozdrav psa a věta podle tréninku', async () => {
    await fresh(); await ev(() => { localStorage.removeItem(DIARYK); }); await dog({ look: 0 }); await ev(() => show('home'));
    let r = await ev(() => { const g = document.querySelector('#v-home .hm-greet'); return g && { b: g.querySelector('b').textContent, s: g.querySelector('.tx > span').textContent, svg: !!g.querySelector('.dava svg'), mini: document.querySelector('#v-home .hm-mini').textContent, chip: document.querySelectorAll('#v-home .hm-tb .hm-dog').length }; });
    ok(r && r.b === 'Ahoj, Fany!' && r.svg && r.chip === 0, 'pozdrav se jménem a obrázkem psa místo čipu v liště: ' + JSON.stringify(r));
    ok(/^(Pondělí|Úterý|Středa|Čtvrtek|Pátek|Sobota|Neděle) (ráno|dopoledne|odpoledne)\. Dáme dnes trénink\?$|večer\. Co si naplánovat na zítra\?$|^Psi už spí/.test(r.s), 'věta pod pozdravem podle denní doby: ' + r.s);
    ok(r.mini === 'Fany čeká na první měřený běh. Stopky ukážou rychlost i čisté běhy.', 'čísla bez běhů mluví o psovi: ' + r.mini);
    await runs(); await ev(() => homeRender());
    r = await ev(() => document.querySelector('#v-home .hm-greet .tx > span').textContent);
    ok(r === 'Trénujete 3 dny v řadě. Jen tak dál!', 'série v pozdravu: ' + r);
    ok(/série 3 dny/.test(await ev(() => document.querySelector('#v-home .hm-mini').textContent)), 'řádek s čísly zůstává');
    await page.click('#v-home .hm-greet'); await w(150);
    ok(await ev(() => view === 'more' && moreTab === 'dogs' && !!document.querySelector('#moreBody .dprof')), 'klepnutí na pozdrav otevře profil psa');
    /* bez psa: obecný pozdrav s plusem, klepnutí otevře Nový pes */
    await ev(() => { DOGS = []; DOGC = null; saveDogs(); show('home'); });
    r = await ev(() => { const g = document.querySelector('#v-home .hm-greet'); return { b: g.querySelector('b').textContent, plus: !!g.querySelector('.gplus'), mini: document.querySelector('#v-home .hm-mini') && document.querySelector('#v-home .hm-mini').textContent }; });
    ok(r.b === 'Ahoj!' && r.plus, 'bez psa obecný pozdrav s plusem: ' + JSON.stringify(r));
    await page.click('#v-home .hm-greet'); await w(200);
    ok(await page.isVisible('#sheet #dName'), 'pozdrav bez psa otevře okno Nový pes');
    await ev(() => closeSheet());
  });

  await step('teplé barvy, barevné dlaždice a nadpisy bez verzálek', async () => {
    await fresh(); await dog(); await ev(() => show('home'));
    const r = await ev(() => { const cs = s => getComputedStyle(document.querySelector(s)); return { bg: getComputedStyle(document.body).backgroundColor, top: cs('.hm-top').backgroundColor, rad: cs('.hm-top').borderBottomLeftRadius,
      imp: cs('.hm-acts [data-h="imp"]').backgroundColor, lib: cs('.hm-acts [data-h="lib"]').backgroundColor, pri: cs('.hm-acts .pri').backgroundColor,
      h3: [cs('.hm-sec h3').textTransform, cs('.hm-sec h3').fontFamily], small: cs('.hm-curtx small').textTransform }; });
    ok(r.bg === 'rgb(251, 246, 238)' && r.top === 'rgb(255, 250, 243)' && r.rad === '28px', 'krémové pozadí a teplý horní blok se zaoblením: ' + JSON.stringify(r));
    ok(r.imp === 'rgb(255, 233, 214)' && r.lib === 'rgb(226, 239, 255)' && r.pri === 'rgb(31, 107, 69)', 'dlaždice: Plánek z fotky oranžová, Knihovna modrá, Nový parkur zelená: ' + JSON.stringify(r));
    ok(r.h3[0] === 'none' && /^Barlow,/.test(r.h3[1]) && r.small === 'none', 'nadpisy sekcí normálním písmem bez verzálek: ' + JSON.stringify(r));
    await ev(() => { moreTab = ''; show('more'); });
    ok(await ev(() => [...document.querySelectorAll('#moreTabs .mgrp')].every(e => getComputedStyle(e).textTransform === 'none')), 'skupiny ve Více bez verzálek');
    /* tmavý vzhled se nemění */
    await ev(() => localStorage.setItem('agility-theme-v1', JSON.stringify('dark'))); await fresh(); await dog(); await ev(() => show('home'));
    const d = await ev(() => ({ bg: getComputedStyle(document.body).backgroundColor, imp: getComputedStyle(document.querySelector('.hm-acts [data-h="imp"]')).color }));
    ok(d.bg === 'rgb(13, 18, 16)' && d.imp === 'rgb(255, 183, 132)', 'tmavý vzhled: tmavé pozadí, světlé písmo dlaždic: ' + JSON.stringify(d));
    await ev(() => localStorage.removeItem('agility-theme-v1'));
  });

  await step('obrázek psa: kreslený vzhled a fotka jen v telefonu', async () => {
    await fresh(); await dog(); await ev(() => { moreTab = 'dogs'; show('more'); dogSheet(curDog()); }); await w(150);
    ok((await ev(() => document.querySelectorAll('#dLooks [data-dl]').length)) === 6 && await page.isVisible('#dLooks [data-dpic]'), 'v okně psa je 6 kreslených psů a tlačítko fotky');
    await page.click('#dLooks [data-dl="3"]');
    ok(await ev(() => $('dLooks').querySelector('[data-dl="3"]').getAttribute('aria-pressed') === 'true' && /#AEB6BE/i.test($('dPrev').innerHTML)), 'výběr vzhledu se ukáže v náhledu');
    await T.sheet('ok');
    ok(await ev(() => DOGS[0].look === 3 && /#AEB6BE/i.test(document.querySelector('#moreBody .dprof .dava').innerHTML)), 'vzhled se uloží ke psovi a ukáže v profilu');
    /* vlastní fotka: zmenšená, jen v tomhle zařízení (není v záloze ani v synchronizaci) */
    await ev(() => dogSheet(curDog())); await w(150);
    await page.setInputFiles('#dPic', { name: 'pes.png', mimeType: 'image/png', buffer: await png() });
    await page.waitForFunction(() => !!document.querySelector('#dPrev img'), null, { timeout: 3000 }).catch(() => {});
    ok(await ev(() => /^data:image\/jpeg;base64,/.test(($('dPrev').querySelector('img') || {}).src || '') && $('dLooks').querySelector('[data-dpic]').getAttribute('aria-pressed') === 'true'), 'fotka se ukáže v náhledu');
    await T.sheet('ok');
    const r = await ev(() => { const p = lsGet('agility-dogpic-v1', {}); const im = new Image(); im.src = p.d1; return { has: !!p.d1, kb: Math.round((p.d1 || '').length / 1024), backup: Object.keys(backupData().data).some(k => /dogpic/.test(k)), sync: SYNC_KEYS.some(k => /dogpic/.test(k)) || !SYNC_OWN['agility-dogpic-v1'], prof: !!document.querySelector('#moreBody .dprof .dava img') }; });
    ok(r.has && r.kb < 60 && !r.backup && !r.sync && r.prof, 'fotka uložená jen v zařízení, malá, mimo zálohu a synchronizaci: ' + JSON.stringify(r));
    await ev(() => show('home'));
    ok(await ev(() => !!document.querySelector('#v-home .hm-greet .dava img')), 'fotka v pozdravu na Domů');
    /* kreslený pes fotku nahradí; smazání psa smaže i fotku */
    await ev(() => { moreTab = 'dogs'; show('more'); dogSheet(curDog()); }); await w(100); await page.click('#dLooks [data-dl="1"]'); await T.sheet('ok');
    ok(await ev(() => !lsGet('agility-dogpic-v1', {}).d1 && DOGS[0].look === 1), 'výběr kresleného psa fotku odebere');
    await ev(() => { dogPicSave('d1', 'data:image/jpeg;base64,AAAA'); });
    await page.click('#moreBody [data-ddel="d1"]'); await w(100); await page.click('#sheet [data-a="ok"]'); await w(150);
    ok(await ev(() => !DOGS.length && !lsGet('agility-dogpic-v1', {}).d1), 'smazání psa smaže i jeho fotku');
    /* poškozený záznam fotky se neukáže jako obrázek */
    ok(await ev(() => { DOGPIC.x = 'javascript:alert(1)'; return !/<img/.test(dogAva({ id: 'x' })); }), 'neplatná fotka se nesmí vložit do stránky');
  });

  await step('Psi: profil s kroužkem postupu, ostatní psi v řádcích', async () => {
    await fresh(); await ev(() => { DOGS = [{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2', look: 0 }, { id: 'd2', name: 'Bart', size: 'L', cls: 'A1', look: 1 }]; DOGC = 'd1'; saveDogs();
      lsSet(DIARYK, [{ id: 'y1', kind: 'zavod', date: '2026-05-01', dog: 'd1', cls: 'A2', g: 'V', tot: '0', place: '2', judge: 'Novák' }, { id: 'y2', kind: 'zavod', date: '2026-06-01', dog: 'd1', cls: 'A2', g: 'V', tot: '0', place: '1', judge: 'Svobodová' }]); });
    await runs(); await ev(() => { moreTab = 'dogs'; show('more'); }); await w(100);
    const r = await ev(() => { const p = document.querySelector('#moreBody .dprof'), ps = promoState(curDog()); return p && { name: p.querySelector('h3').textContent, chips: [...p.querySelectorAll('.dchips span')].map(s => s.textContent), goal: (p.querySelector('.dgoal') || {}).textContent, ps: [ps.n, ps.need, ps.text],
      arc: (p.querySelector('.ring .rg-v') || { getAttribute: () => '' }).getAttribute('stroke-dasharray'), rows: [...document.querySelectorAll('#moreBody .item.dog')].map(i => i.querySelector('b').textContent + (i.querySelector('.dava svg') ? '+svg' : '')),
      btn: ['data-dedit', 'data-ddel', 'data-dtrain'].map(a => !!p.querySelector('[' + a + ']')) }; });
    ok(r && r.name === 'Fany' && r.chips.join('|') === '3 běhy|2 čisté|2 z 5 do A3' && r.goal === r.ps[2], 'profil psa: jméno, běhy, čisté, postup: ' + JSON.stringify(r));
    const arc = r && parseFloat(r.arc), full = 2 * Math.PI * 58;
    ok(Math.abs(arc - full * 2 / 5) < 1, 'kroužek ukazuje 2 z 5: ' + r.arc);
    ok(r.rows.join() === 'Bart+svg' && r.btn.every(Boolean), 'ostatní psi v řádku s obrázkem, v profilu Upravit, × a Trénovat: ' + JSON.stringify(r));
    await page.click('#moreBody [data-dtrain]'); await w(150);
    ok(await ev(() => view === 'run' && !!document.querySelector('#runDogs .chip.on .dava')), 'Trénovat otevře Běh, čip psa má obrázek');
    const ch = await ev(() => [...document.querySelectorAll('#runDogs .chip')].map(c => [Math.round(c.getBoundingClientRect().height), c.textContent]));
    ok(ch.length === 2 && ch.every(c => c[0] >= 44) && ch[0][1] === 'Fany · M', 'čipy psů v Běhu: 44 px a stejný text: ' + JSON.stringify(ch));
    /* v Hoopers je kroužek jen rámeček bez postupu */
    await ev(() => { setSport('hoopers'); moreTab = 'dogs'; show('more'); }); await w(100);
    ok(await ev(() => { const p = document.querySelector('#moreBody .dprof'); return !!p && !p.querySelector('.rg-b') && !p.querySelector('.dgoal') && p.querySelectorAll('.dchips span').length === 2; }), 'Hoopers: profil bez postupu');
    await ev(() => setSport('agility'));
  });

  await step('prázdná místa s obrázkem: Deník, Moje, Psi', async () => {
    await fresh(); await dog(); await ev(() => { localStorage.removeItem(DIARYK); moreTab = 'diary'; show('more'); }); await w(100);
    let r = await ev(() => { const e = document.querySelector('#moreBody .es-ill'); return e && { ill: !!e.querySelector('.ill .dava svg') && !!e.querySelector('.ill-ball'), b: e.querySelector('b').textContent, p: e.querySelector('p').textContent, row: document.querySelectorAll('#moreBody > .row [data-dy]').length }; });
    ok(r && r.ill && r.b === 'Deník je zatím prázdný' && r.p === 'Zapiš první trénink a uvidíš, jak se Fany zlepšuje.' && r.row === 0, 'prázdný Deník s obrázkem psa: ' + JSON.stringify(r));
    await page.click('#moreBody .es-ill [data-dy="trenink"]'); await w(150);
    ok(await page.isVisible('#sheet #ySurf'), 'Zapsat trénink z prázdného Deníku otevře zápis');
    await T.sheet('ok');
    ok(await ev(() => !document.querySelector('#moreBody .es-ill') && document.querySelectorAll('#moreBody > .row [data-dy]').length === 2), 'po zápisu zmizí prázdný stav a vrátí se Trénink | Závod');
    await ev(() => { localStorage.removeItem(MYK); libTab = 'my'; libF = 'all'; show('lib'); }); await w(100);
    r = await ev(() => { const e = document.querySelector('#cards .empty-state.lib-none.es-ill'); return e && { ill: !!e.querySelector('.ill'), b: e.querySelector('b').textContent, btns: !!e.querySelector('[data-lnew]') && !!e.querySelector('[data-limp]') }; });
    ok(r && r.ill && r.b === 'Tvoje parkury budou tady' && r.btns, 'prázdné Moje s obrázkem a tlačítky: ' + JSON.stringify(r));
    await ev(() => { DOGS = []; DOGC = null; saveDogs(); moreTab = 'dogs'; show('more'); }); await w(100);
    r = await ev(() => { const e = document.querySelector('#moreBody .es-ill'); return e && { ill: !!e.querySelector('.ill'), b: e.querySelector('b').textContent, add: document.querySelectorAll('#moreBody [data-dadd]').length }; });
    ok(r && r.ill && r.b === 'Kdo s tebou běhá?' && r.add === 1, 'prázdní Psi s obrázkem a jedním Přidat psa: ' + JSON.stringify(r));
  });

  await step('průvodce začíná psem', async () => {
    await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await ev(() => localStorage.clear()); await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await w(600);
    let r = await ev(() => ({ hero: !!document.querySelector('#onb .onb-hero .dava'), name: !!$('oName'), lang: document.querySelectorAll('#onb .onb-top [data-o="lang"]').length, theme: document.querySelectorAll('#onb [data-o="theme"]').length, h1: document.querySelector('#onb h1').textContent }));
    ok(r.hero && r.name && r.lang === 2 && r.theme === 0 && r.h1 === 'Vítej v Pawkuru', 'první krok: obrázek psa, jméno, malý přepínač jazyka, bez přepínače vzhledu: ' + JSON.stringify(r));
    /* rozepsané jméno přežije přepnutí jazyka (stránka se načte znovu) */
    await page.fill('#oName', 'Fany'); await page.click('#onb [data-o="lang"][data-v="en"]'); await w(800);
    r = await ev(() => ({ lang: LANG, step: ONB.step, v: $('oName') && $('oName').value, h1: document.querySelector('#onb h1').textContent }));
    ok(r.lang === 'en' && r.step === 1 && r.v === 'Fany' && r.h1 === 'Welcome to Pawkur', 'po přepnutí na angličtinu zůstane první krok i jméno: ' + JSON.stringify(r));
    await page.click('#onb [data-o="lang"][data-v="cs"]'); await w(800);
    await page.click('#onb [data-o="next"]'); await w(150);
    r = await ev(() => ({ h1: document.querySelector('#onb h1').textContent, looks: document.querySelectorAll('#oLooks [data-o="look"]').length, cam: !!document.querySelector('#oLooks [data-o="pic"]') }));
    ok(r.h1 === 'Fany' && r.looks === 6 && r.cam, 'druhý krok se jménem psa a výběrem obrázku: ' + JSON.stringify(r));
    await page.click('#oLooks [data-v="4"]'); await page.selectOption('#oSize', 'S'); await page.click('#onb [data-o="dog"]'); await w(150);
    r = await ev(() => DOGS.map(d => [d.name, d.size, d.look].join()));
    ok(r.join('|') === 'Fany,S,4', 'pes z průvodce se jménem, velikostí a obrázkem: ' + r.join('|'));
    await page.click('#onb [data-o="go"][data-v="home"]'); await w(200);
    ok(await ev(() => !$('onb') && document.querySelector('#v-home .hm-greet b').textContent === 'Ahoj, Fany!'), 'po průvodci Domů pozdraví psa');
  });

  await step('360 px a angličtina', async () => {
    await page.setViewportSize({ width: 360, height: 740 }); await fresh(); await dog({ look: 2 }); await runs();
    for (const [v, t] of [['home', ''], ['more', 'dogs'], ['more', 'diary']]) {
      await ev(([v, t]) => { moreTab = t; show(v); }, [v, t]); await w(100);
      ok(await ev(() => document.documentElement.scrollWidth <= innerWidth), v + ' ' + t + ': na 360 px přetéká do strany');
    }
    await page.setViewportSize({ width: 390, height: 844 });
    const miss = await ev(() => ['Ahoj!', 'Ahoj, Fany!', 'Čtvrtek odpoledne. Dáme dnes trénink?', 'Pondělí ráno. Dáme dnes trénink?', 'Sobota večer. Co si naplánovat na zítra?', 'Psi už spí. Parkur si ale naplánuješ kdykoli.',
      'Trénujete 3 dny v řadě. Jen tak dál!', 'Trénujete 6 dní v řadě. Jen tak dál!', 'Dnešní trénink máte za sebou. Pěkná práce!', 'Přidej svého psa a Pawkur mu bude počítat běhy i postup.',
      'Fany čeká na první měřený běh. Stopky ukážou rychlost i čisté běhy.', 'Vyber kreslený obrázek, nebo vlastní fotku. Fotka zůstane jen v tomhle telefonu.', 'Obrázek psa', 'Vlastní fotka', 'Kreslený pes: Bílý s hnědou',
      'Kreslený pes: Mramorovaný', 'Vyber fotku psa', 'Fotku se nepodařilo načíst', 'Přidat dalšího psa', 'Kdo s tebou běhá?', 'Trénovat', '1 běh', '3 běhy', '12 běhů', '1 čistý', '2 čisté', '5 čistých', '2 z 5 do A3', '1 z 3 letos', '2 z 3 do LK 2',
      'Deník je zatím prázdný', 'Zapiš první trénink a uvidíš, jak se Fany zlepšuje.', 'Zapiš první trénink nebo výsledek ze závodů a uvidíš, jak se tvůj pes zlepšuje.', '＋ Zapsat trénink', '＋ Výsledek ze závodů',
      'Tvoje parkury budou tady', 'Parkury, stopky a deník pro tebe a tvého psa. Jak se jmenuje?', 'Jméno psa', 'např. Fany', 'Fotka zůstane jen v tomhle telefonu.', 'Novinky v Pawkuru 2.9'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    const en = await ev(() => [trLookup('Ahoj, Fany!'), trLookup('Čtvrtek odpoledne. Dáme dnes trénink?'), trLookup('2 z 5 do A3')]);
    ok(en.join('|') === 'Hi, Fany!|Thursday afternoon. Shall we train today?|2 of 5 to A3', 'anglické znění: ' + en.join('|'));
  });

  await T.ctx.close();
  return T.errs;
};
