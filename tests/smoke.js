/* Projde všechny obrazovky a nástroje; každý krok na čerstvě načtené stránce. Hlídá chyby v konzoli. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  /* zámek obrazovky: náhrada, která si pamatuje, co aplikace chtěla */
  await T.ctx.addInitScript(() => { window.__wl = []; Object.defineProperty(navigator, 'wakeLock', { configurable: true, value: { request: () => {
    const l = new EventTarget(); l.released = false; l.release = () => { l.released = true; l.dispatchEvent(new Event('release')); return Promise.resolve(); }; window.__wl.push(l); return Promise.resolve(l); } } }); });
  const step = async (label, fn) => {
    T.step(label);
    try {
      await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300); await fn(); await page.waitForTimeout(250);
      const w = await T.ev(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
      T.ok(w[0] <= w[1], `stránka přetéká do strany (${w[0]} > ${w[1]} px)`);
    }
    catch (e) { T.errs.push(`[${label}] krok selhal: ${e.message.split('\n')[0]}`); }
  };
  await step('plán', async () => T.ok(await T.ev(() => S.obs.length > 0 && S.route.length > 1), 'výchozí parkur se nenačetl'));
  await step('přehledný běh', async () => {
    await page.click('.nav [data-v="run"]'); await page.waitForTimeout(200);
    T.ok(await page.isHidden('#speedRow') && await page.isVisible('#runSpecs .smini'), 'Běh: souhrn má být v řádku a rychlost schovaná');
    await page.click('#runSpecs [data-rs]'); T.ok(await page.isVisible('#speedRow [data-sp="1"]'), 'rychlost pro SČP se neukázala');
    await page.click('#runSpecs [data-rs]'); T.ok(await page.isHidden('#speedRow'), 'rychlost pro SČP se neschovala');
    T.ok(await T.ev(() => new Set([...document.querySelectorAll('.spbtns .btn')].map(b => Math.round(b.getBoundingClientRect().top))).size === 1), 'Mezičasy a Vynulovat nejsou v jednom řádku');
  });
  await step('přehledný plán', async () => {
    T.ok(await T.ev(() => mode === 'view' && !!document.querySelector('#specs.mini .smini') && $('planTools').hidden), 'plán se má otevřít v režimu Prohlížet, se souhrnem v řádku a schovanými nástroji');
    await page.click('#specs [data-sp="1"]');
    T.ok(await T.ev(() => document.querySelectorAll('#specs .spec').length >= 4 && lsGet('agility-planui-v1', {}).specs === true), 'souhrn se nerozbalil nebo se volba neuložila');
    await page.click('#specs [data-sp="0"]');
    T.ok(await T.ev(() => !!document.querySelector('#specs .smini') && lsGet('agility-planui-v1', {}).specs === false), 'souhrn se nesbalil');
    await page.click('#toolsBtn'); T.ok(await page.isVisible('#planTools [data-t="3d"]'), 'nabídka Nástroje se neotevřela');
    await page.click('#toolsBtn'); T.ok(await page.isHidden('#planTools'), 'nabídka Nástroje se nezavřela');
    T.ok(await T.ev(() => trLookup('Prohlížet') === 'View' && trLookup('Nástroje') === 'Tools'), 'chybí anglický překlad');
  });
  for (const t of ['ana', 'say', 'quiz', 'side', 'imp', 'bg', 'fld', 'export', 'share', '3d'])
    await step('nástroj ' + t, async () => { await T.tool(t); await page.waitForTimeout(t === '3d' ? 1200 : 400); });
  await step('režim trasa', async () => { await page.click('#mRoute'); });
  await page.setViewportSize({ width: 360, height: 780 });
  for (const t of ['tunnel', 'jump'])
    await step('vybraná překážka ' + t + ' na 360 px', async () => { await T.ev(t => { mode = 'build'; sel = S.obs.find(o => o.type === t).id; ui(); render(); }, t); T.ok(await page.isVisible('#delBtn'), 'chybí Smazat'); });
  await page.setViewportSize({ width: 390, height: 844 });
  await step('kontrola FCI', async () => { await page.click('#fciBar'); T.ok(await page.isVisible('#sheet .fcilist'), 'kontrola FCI se neotevřela'); });
  for (const v of ['lib', 'run', 'more'])
    await step('záložka ' + v, async () => { await page.click(`.nav [data-v="${v}"]`); T.ok(await page.isVisible('#v-' + v), 'záložka se neukázala'); });
  await step('domů po spuštění', async () => {
    await page.goto(base + '/'); await page.waitForTimeout(300);
    T.ok(await page.isVisible('#v-home .hm-cta'), 'aplikace nezačíná na Domů');
    T.ok(!(await page.isVisible('.top')), 'na Domů je vidět horní lišta plánu');
    T.ok(await page.locator('#v-home .hm-cc').count() > 0, 'chybí Parkury pro tebe');
    T.ok(await page.locator('#v-home .hm-week > div').count() === 7, 'týden nemá 7 dní');
  });
  await step('domů: parkur z nabídky', async () => {
    await page.click('.nav [data-v="home"]'); const id = await T.ev(() => HOME_C[1].id);
    await page.click('#v-home .hm-cc >> nth=1'); await page.waitForTimeout(200);
    T.ok(await T.ev(id => S.meta.id === id && view === 'plan', id), 'parkur z nabídky se neotevřel');
  });
  await step('domů: pokračovat a výzva dne', async () => {
    await page.click('.nav [data-v="home"]'); await page.click('#v-home .hm-cta');
    T.ok(await T.ev(() => view === 'plan'), 'Pokračovat neotevřelo plán');
    await page.click('.nav [data-v="home"]'); const id = await T.ev(() => homeChallenge().c.id);
    await page.click('#v-home [data-h="ch"]'); await page.waitForTimeout(200);
    T.ok(await T.ev(id => S.meta.id === id && view === 'plan', id), 'výzva dne neotevřela parkur');
  });
  await step('domů: série a čistý běh', async () => {
    const r = await T.ev(() => {
      const day = n => { const t = new Date(); t.setHours(12, 0, 0, 0); t.setDate(t.getDate() - n); return localDate(t); };
      const a = streak({ [day(0)]: 1, [day(1)]: 1, [day(2)]: 1, [day(4)]: 1 }), b = streak({ [day(1)]: 1, [day(2)]: 1 }), c = streak({ [day(2)]: 1 });
      const ch = homeChallenge(); setMark(ch.c.id, { runs: [{ d: Date.now(), t: 30, tot: 0, g: 'V', len: 100 }], done: true });
      show('home'); return [a, b, c, homeChallenge().c.id === ch.c.id && homeChallenge().ok, !!document.querySelector('#v-home .hm-go.ok'), document.querySelector('.hm-big small').textContent];
    });
    T.ok(r[0] === 3 && r[1] === 2 && r[2] === 0, 'špatně spočítaná série: ' + r.slice(0, 3));
    T.ok(r[3] && r[4], 'výzva dne se po čistém běhu neoznačila jako splněná');
    T.ok(/série \d+ d/.test(r[5]), 'chybí série v hlavičce: ' + r[5]);
  });
  for (const c of ['A1', 'A2', 'A3', 'tr', 'my'])
    await step('parkury ' + c, async () => { await page.click('.nav [data-v="lib"]'); await page.click(`#libTabs [data-c="${c}"]`); if (c !== 'my') T.ok(await page.locator('#cards .card').count() > 0, 'žádné parkury'); });
  for (const f of ['fav', 'todo', 'done', 'flow', 'tech'])
    await step('filtr ' + f, async () => { await page.click('.nav [data-v="lib"]'); await page.click(`#libFilters [data-f="${f}"]`); });
  for (const s of ['easy', 'hard', 'flow', 'short'])
    await step('řazení ' + s, async () => { await page.click('.nav [data-v="lib"]'); await page.selectOption('#libSort', s); });
  await step('generátor', async () => { await page.click('.nav [data-v="lib"]'); await page.click('#genBtn'); await page.waitForTimeout(400); });
  await step('náhodný', async () => { await page.click('.nav [data-v="lib"]'); await page.click('#randBtn'); });
  await step('otevřít parkur', async () => { await page.click('.nav [data-v="lib"]'); await page.click('#cards .pick >> nth=3'); T.ok(await T.ev(() => S.meta.id === listFor('A1')[3].id), 'parkur se neotevřel'); });
  for (const m of ['acct', 'dogs', 'diary', 'start', 'warm', 'coach', 'set', 'about'])
    await step('více ' + m, async () => { await page.click('.nav [data-v="more"]'); await page.click(`#moreTabs [data-m="${m}"]`); });
  /* karta parkuru jen na dva řádky: délka a překážky, pod tím barevná náročnost a SČP */
  await step('krátké karty parkurů', async () => {
    await page.click('.nav [data-v="lib"]'); await page.click('#libTabs [data-c="A3"]');
    const c = await T.ev(() => [...document.querySelectorAll('#cards .card')].map(k => ({ ch: k.querySelector('.meta').children.length, ln: [...k.querySelectorAll('.meta .ln')].map(l => Math.round(l.getBoundingClientRect().height)), pill: (k.querySelector('.meta .dpill') || {}).textContent, star: !!k.querySelector('.st .fav') })));
    T.ok(c.length > 0 && c.every(k => k.ch <= 3 && k.ln.length <= 2 && k.ln.every(h => h > 0 && h < 30) && k.star), 'karta má víc než 2 řádky údajů nebo chybí hvězdička: ' + JSON.stringify(c[0]));
    T.ok(c.every(k => ['lehký', 'střední', 'těžký', 'velmi těžký'].includes(k.pill)), 'chybí barevný štítek náročnosti: ' + JSON.stringify(c[0]));
    T.ok(await T.ev(() => trLookup('lehký') === 'easy' && trLookup('velmi těžký') === 'very hard'), 'chybí anglický překlad náročnosti');
  });
  /* Více: svislá nabídka, sekce se Zpět; přímý odkaz otevře sekci rovnou, klepnutí na Více v liště vrátí nabídku */
  await step('více jako seznam', async () => {
    await page.click('.nav [data-v="more"]');
    T.ok(await page.isVisible('#moreTabs') && await page.isHidden('#moreHead') && await T.ev(() => moreTab === '' && $('moreBody').innerHTML === ''), 'Více nezačíná nabídkou');
    const hs = await T.ev(() => [...document.querySelectorAll('#moreTabs [data-m]:not([hidden])')].map(b => b.getBoundingClientRect().height));
    T.ok(hs.length === 12 && await T.ev(() => document.querySelectorAll('#moreTabs .mgrp').length === 4) && hs.every(h => h >= 52), 'řádky nabídky nemají 52 px: ' + hs);
    await page.click('#moreTabs [data-m="diary"]');
    T.ok(await page.isHidden('#moreTabs') && await page.isVisible('#moreBack') && await T.ev(() => $('moreTitle').textContent === 'Deník a statistiky' && moreTab === 'diary' && /Statistiky/.test($('moreBody').textContent)), 'sekce se neotevřela se Zpět a názvem');
    await page.click('#moreBack');
    T.ok(await page.isVisible('#moreTabs') && await page.isHidden('#moreHead') && await T.ev(() => moreTab === ''), 'Zpět nevrátil nabídku');
    await T.ev(() => { show('home'); moreTab = 'dogs'; show('more'); });
    T.ok(await page.isHidden('#moreTabs') && await T.ev(() => $('moreTitle').textContent === 'Psi' && !!document.querySelector('#moreBody [data-dadd]')), 'přímý odkaz neotevřel sekci Psi');
    await page.click('.nav [data-v="more"]'); T.ok(await page.isVisible('#moreTabs'), 'Více v liště nevrátilo nabídku');
  });
  /* cíle pro palec aspoň 44 px i na 360 px; přepínač Prohlížet/Stavba/Trasa zůstane v jednom řádku */
  await step('cíle pro palec 44 px na 360 px', async () => {
    await page.setViewportSize({ width: 360, height: 780 });
    const hit = async sel => T.ev(s => [...document.querySelectorAll(s)].filter(e => e.offsetParent).map(e => { const r = e.getBoundingClientRect(); return [Math.round(r.width), Math.round(r.height)]; }), sel);
    const small = (a, w) => !a.length || a.some(r => r[1] < 44 || (w && r[0] < 44));
    let a = await hit('#modeRow .seg button'); T.ok(!small(a), 'Prohlížet/Stavba/Trasa pod 44 px: ' + JSON.stringify(a));
    T.ok(await T.ev(() => new Set([...document.querySelectorAll('#modeRow > :not(.grow)')].map(e => Math.round(e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2))).size === 1 && $('modeRow').scrollWidth <= $('modeRow').clientWidth), 'řádek režimů se nevejde na jeden řádek');
    a = await hit('.fieldbox .zoom .btn'); T.ok(!small(a, true), 'tlačítka zoomu pod 44 px: ' + JSON.stringify(a));
    await page.click('.nav [data-v="lib"]'); a = await hit('#libFilters .chip'); T.ok(!small(a), 'filtry v Parkurech pod 44 px: ' + JSON.stringify(a));
    await page.click('.nav [data-v="run"]'); a = await hit('.field-row .check'); T.ok(!small(a, true) && await T.ev(() => $('disChk').closest('label').classList.contains('check')), 'Diskvalifikace má malý cíl: ' + JSON.stringify(a));
    await T.ev(() => { DOGS = [{ id: 'p1', name: 'Rex', size: 'L', cls: 'A1' }, { id: 'p2', name: 'Max', size: 'S', cls: 'A2' }]; DOGC = 'p1'; saveDogs(); moreTab = 'stats'; show('more'); });
    a = await hit('#v-more .filters .chip'); T.ok(!small(a), 'filtry ve Více pod 44 px: ' + JSON.stringify(a));
    /* spodní lišta: všech šest položek uvnitř plovoucího panelu */
    T.ok(await T.ev(() => { const n = document.querySelector('.nav').getBoundingClientRect(); return [...document.querySelectorAll('.nav button')].every(b => { const r = b.getBoundingClientRect(); return r.left >= n.left - 1 && r.right <= n.right + 1; }); }), 'položky spodní lišty vyčnívají z panelu');
    /* psi s odkazem na kacr.info: čtyři tlačítka (Vybrat, Závody, Upravit, ×) se zalomí, × zůstane na obrazovce */
    await T.ev(() => { DOGS.forEach((d, i) => { d.kacr = String(777 + i); }); saveDogs(); moreTab = 'dogs'; show('more'); });
    T.ok(await T.ev(() => [...document.querySelectorAll('#moreBody [data-ddel]')].every(b => b.getBoundingClientRect().right <= document.documentElement.clientWidth) && document.documentElement.scrollWidth <= document.documentElement.clientWidth), 'tlačítka psa přetékají z obrazovky');
    await page.setViewportSize({ width: 390, height: 844 });
  });
  await step('video', async () => {
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="video"]'); await page.click('#vidList button >> nth=0');
    await page.waitForFunction(() => V3D.api || V3D.fail || !V3D.gl, null, { timeout: 20000 }); await page.waitForTimeout(300);
    T.ok(await T.ev(() => V3D.api ? !$('vStage3').hidden : $('vStage').innerHTML.length > 0), 'animace se neukázala');
  });
  await step('stopky', async () => {
    await page.click('.nav [data-v="run"]');
    T.ok(await T.ev(() => $('spLive').getBoundingClientRect().top - $('startBtn').getBoundingClientRect().bottom >= 12), 'STOP se dotýká tlačítka Mezičasy');
    T.ok(await T.ev(() => [...document.querySelectorAll('.counter')].every(c => c.getBoundingClientRect().right <= document.documentElement.clientWidth - 8)), 'počítadla chyb přetékají z obrazovky');
    await page.click('#startBtn'); await page.waitForTimeout(400);
    T.ok(await T.ev(() => __wl.length === 1 && !__wl[0].released), 'při běhu stopek může obrazovka zhasnout');
    await page.click('#startBtn');
    T.ok(await T.ev(() => parseFloat($('manT').value.replace(',', '.')) > 0.2), 'stopky neměří');
    T.ok(await T.ev(() => __wl.every(l => l.released)), 'po zastavení stopek zůstal zámek obrazovky');
  });
  /* angličtina na 360 px: Domů nepřetéká (dlouhé nadpisy se zalomí), texty poskládané z víc částí se přeloží celé */
  await step('angličtina na 360 px', async () => {
    await page.setViewportSize({ width: 360, height: 780 });
    await T.ev(() => localStorage.setItem('agility-lang-v1', '"en"'));
    await page.goto('about:blank'); await page.goto(base + '/#home'); await page.waitForTimeout(400);
    const w = await T.ev(() => [LANG, document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    T.ok(w[0] === 'en' && w[1] <= w[2], `Domů v angličtině přetéká (${w[1]} > ${w[2]} px)`);
    await T.ev(() => { show('plan'); anaSheet(); }); await page.waitForTimeout(100);
    const why = await T.ev(() => (document.querySelector('#sheet .dmeter p') || {}).textContent || '');
    T.ok(/^(Adds the most|A course without)/.test(why) && !/[ěščřžůú]/.test(why), 'rozbor: důvody náročnosti zůstaly česky: ' + why);
    await T.ev(() => closeSheet());
    const miss = await T.ev(() => ['Upravit', 'Způsob', 'Délka prohlídky', '(překročen MČP)', '0 tb', '30.00 s · 0 tb', 'L – od 48 cm · A2 · 5 let', 'S – do 35 cm · A1', '3D animace: Skok',
      'A2-17 · A2 · zbývá 7 dní', 'Zahrada týdne 41 · 20 × 15 m · zbývá 3 dny', 'Otočky kolem křídla (vnitřkem, venkem) 3', 'Čtverec (box) · 2', 'Závod: Hranické hrátky', 'Trénink · tráva'].filter(s => trLookup(s) == null));
    T.ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    T.ok(await T.ev(() => trLookup('4,5 m') === '4.5 m' && trLookup('A1 · 20 × 15 m · 6 skoků, tunel, slalom') === 'A1 · 20 × 15 m · 6 jumps, tunnel, weaves'), 'desetinná čárka nebo podtitul Zahrady týdne v angličtině');
    /* nápověda v textovém poli a předvyplněný název parkuru (hodnota pole) se slovníkem samy nepřeloží */
    await T.ev(() => { moreTab = 'fb'; show('more'); }); await page.waitForTimeout(100);
    T.ok(await T.ev(() => $('fbMsg').placeholder === "Tell me what's on your mind"), 'nápověda ve zprávě autorovi zůstala česky: ' + await T.ev(() => $('fbMsg').placeholder));
    T.ok(await T.ev(() => { loadCourse(listFor('A1')[0], true); show('plan'); saveSheet(); const v = $('fName').value; closeSheet(); return / \(mine\)$/.test(v); }), 'předvyplněný název parkuru má české (moje)');
    /* vygenerovaný název v liště Plánu, zkratky hodnocení, data závodů a počty */
    T.ok(await T.ev(() => { const m0 = S.meta; S.meta = Object.assign({}, m0, { gen: true, name: 'Zahrada týdne 41', dirty: false }); topbar(); const a = $('cName').textContent; S.meta = m0; topbar(); return a === 'Garden of the week 41' && crsName({ name: 'Klub A2 3' }) === 'Klub A2 3'; }), 'vygenerovaný název parkuru zůstal česky (nebo se přeložil vlastní název)');
    T.ok(await T.ev(() => ['V', 'VD', 'D', 'BO', 'DIS'].map(gTxt).join() === 'EXC,VG,G,NC,DIS'), 'zkratky hodnocení v angličtině');
    T.ok(await T.ev(() => /8–9 Oct/.test(compDate({ from: '2026-10-08', to: '2026-10-09' })) && /30 Sep – 1 Oct/.test(compDate({ from: '2026-09-30', to: '2026-10-01' }))), 'datum závodů v angličtině');
    T.ok(await T.ev(() => T('312 m · 4 překážky · SČP 40 s') === '312 m · 4 obstacles · SCT 40 s' && T('1 překážka') === '1 obstacle' && T('4 kusy vybavení') === '4 pieces of equipment' && T('Zahrada 20×15 3') === 'Garden 20×15 3'), 'počty překážek nebo název ze generátoru v angličtině');
    T.ok(await T.ev(() => [nPrek(1), nPrek(3), nPrek(5), nPrek(0), nKus(2), nKus(12)].join('|') === '1 překážka|3 překážky|5 překážek|0 překážek|2 kusy vybavení|12 kusů vybavení'), 'skloňování počtu překážek');
    await T.ev(() => localStorage.removeItem('agility-lang-v1'));
    await page.setViewportSize({ width: 390, height: 844 });
  });
  await T.ctx.close();
  return T.errs;
};
