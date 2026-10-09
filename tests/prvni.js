/* Pawkur 3.1: měření první návštěvy (anonymní počty akcí za den, odeslání přes app_act, souhrn pro autora v Návštěvnosti)
   a první zážitek po průvodci (parkur týdne pro třídu psa rovnou ve 3D nebo v Běhu), tlačítko Zaběhnout v Plánu.
   Plánek z fotky s naklepáním trasy testuje sada ctecka. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true }); const { page, ok, ev } = T;
  const acts = [];
  await offline(T.ctx, { get_catalog: { version: 0 }, app_act: (a) => { acts.push(a); return null; } });
  /* bez průvodce, kromě kroků, které si ho vyžádají přes ?onb */
  await T.ctx.addInitScript(() => { try {
    if (!/onb/.test(location.search) && localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 }));
    if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('3.0'));
    localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 }));
  } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await w(400); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const missEn = (list) => ev(l => l.filter(t => { const v = trLookup(t); return v == null || /[ěščřžýáíéůúňťď]/.test(v); }), list);
  /* průvodce od začátku: jméno psa, třída A2, poslední krok */
  const onbToLast = async () => {
    await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await ev(() => localStorage.clear()); await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await w(600);
    await page.fill('#oName', 'Fany'); await page.click('#onb [data-o="next"]'); await w(150);
    await page.selectOption('#oCls', 'A2'); await page.click('#onb [data-o="dog"]'); await w(150);
  };

  await step('počty akcí: obrazovky, parkur, úprava, běh; spuštění se nepočítá', async () => {
    await fresh(); await w(2400); /* ACT_BOOT: obrazovka a parkur při spuštění nejsou akce */
    let a = await ev(() => (ACT && ACT.a) || {});
    ok(!a.v_home && !a.course, 'spuštění aplikace se počítá jako akce: ' + JSON.stringify(a));
    await ev(() => { ACT = { day: localDate(), a: {} }; actStore(); });
    await page.click('.nav [data-v="lib"]'); await w(100);
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('A1')[1], true); mode = 'build'; ui(); });
    await ev(() => { const o = S.obs[0]; o.x = Math.min(S.W, o.x + 1); touch(); render(); });
    await ev(() => { show('run'); $('manT').value = '40'; RUN.f = 0; RUN.r = 0; }); await page.click('#saveRun'); await w(250);
    if (await ev(() => !!$('sheet').querySelector('.cele'))) { await page.click('#sheet .cele [data-a="x"]'); await w(150); }
    a = await ev(() => ACT.a);
    ok(a.v_lib === 1 && a.v_plan >= 1 && a.v_run >= 1 && a.course === 1 && a.edit === 1 && a.runsave === 1, 'počty akcí: ' + JSON.stringify(a));
    ok(await ev(() => JSON.parse(localStorage.getItem('agility-act-v1')).a.runsave === 1 && !!SYNC_OWN['agility-act-v1']), 'počty se ukládají v zařízení a nesynchronizují se s účtem');
    /* jen krátké kódy; nový den začíná od nuly */
    await ev(() => { act('Bad Key'); act('x'.repeat(17)); act('<b>'); });
    ok(await ev(() => !Object.keys(ACT.a).some(k => !/^[a-z0-9_]{1,16}$/.test(k))), 'počítadlo vzalo neplatný klíč: ' + JSON.stringify(await ev(() => Object.keys(ACT.a))));
    await ev(() => { ACT.day = '2000-01-01'; act('gen'); });
    ok(await ev(() => ACT.day === localDate() && JSON.stringify(ACT.a) === '{"gen":1}'), 'nový den nezačal od nuly: ' + JSON.stringify(await ev(() => ACT)));
  });

  await step('odeslání přes app_act: součty dne, obrazovka, bez opakování, 404 vypne', async () => {
    await ev(() => { ACT = { day: localDate(), a: { v_plan: 2, course: 1, sec: 45 } }; actStore(); show('plan'); ACT_SENT = ''; ACT_OFF = false; });
    /* v testu (navigator.webdriver) se bez PING_TEST nic neposílá */
    const n0 = acts.length; await ev(() => actSend(false)); await w(200);
    ok(acts.length === n0, 'v testu se počty odeslaly bez PING_TEST');
    await ev(() => { window.PING_TEST = 1; actSend(false); }); await w(300);
    const last = acts[acts.length - 1] || {}, dev = await ev(() => devId());
    ok(acts.length === n0 + 1 && last.p_dev === dev && last.p_act && last.p_act.course === 1 && last.p_act.sec === 45 && last.p_act.last === 'plan' && last.p_act.v_plan >= 2, 'odeslané počty: ' + JSON.stringify(last));
    await ev(() => actSend(false)); await w(200);
    ok(acts.length === n0 + 1, 'stejné součty se poslaly znovu');
    /* při odchodu z aplikace (keepalive) */
    await ev(() => { act('gen'); clearTimeout(ACT_T); ACT_T = 0; actSend(true); }); await w(300);
    ok(acts.length === n0 + 2 && acts[acts.length - 1].p_act.gen === 1, 'odeslání při odchodu: ' + JSON.stringify(acts[acts.length - 1]));
    /* další akce se pošle nejdřív za 20 s, ne hned */
    ok(await ev(() => { act('ana'); return !!ACT_T; }), 'po akci se odeslání nenaplánovalo');
    await ev(() => { clearTimeout(ACT_T); ACT_T = 0; });
    /* server bez funkce app_act: odesílání se do konce návštěvy vypne */
    await page.route('**/rpc/app_act', r => r.fulfill({ status: 404, contentType: 'application/json', body: '{}' }));
    await ev(() => { act('quiz'); clearTimeout(ACT_T); ACT_T = 0; actSend(false); }); await w(300);
    ok(await ev(() => ACT_OFF === true), 'po 404 se odesílání nevyplo');
    await page.unroute('**/rpc/app_act');
    await ev(() => { ACT_OFF = false; window.PING_TEST = 0; clearTimeout(ACT_T); ACT_T = 0; });
  });

  await step('souhrn první návštěvy pro autora', async () => {
    const h = await ev(() => { const d = document.createElement('div'); d.innerHTML = statsActHTML({ n: 10, m: 8, back: 2, k: { onb: 6, course: 4, v3d: 2, fx_3d: 2, runsave: 1 }, sec: 95, last: { home: 3, plan: 2, onb: 1 } }); return d.textContent; });
    ok(/noví za 14 dní: 10, z toho s počty akcí 8/.test(h) && /průvodce 75 %/.test(h) && /parkur 50 %/.test(h) && /3D 25 %/.test(h) && /uložený běh 13 %/.test(h) && /po průvodci 3D 25 %/.test(h) &&
      /Medián času na obrazovce: 1,6 min/.test(h) && /Vrátili se jiný den: 20 %/.test(h) && /Kde skončili ti, kdo se nevrátili: home 3 · plan 2 · onb 1/.test(h), 'souhrn: ' + h);
    ok(await ev(() => statsActHTML(null) === '' && statsActHTML({ n: 0 }) === ''), 'bez dat má být souhrn prázdný');
  });

  await step('první zážitek: parkur týdne pro třídu psa ve 3D', async () => {
    await onbToLast();
    const r = await ev(() => ({ h1: document.querySelector('#onb h1').textContent, map: document.querySelectorAll('#onb .onb-wk svg path').length, title: document.querySelector('#onb .onb-wkt b').textContent, line: document.querySelector('#onb .onb-wkt span').textContent,
      two: [...document.querySelectorAll('#onb .onb-two [data-v]')].map(b => b.getAttribute('data-v')).join(), pri: document.querySelector('#onb .onb-two .pri').getAttribute('data-v'), sub: document.querySelector('#onb .onb-two .pri span').textContent,
      more: [...document.querySelectorAll('#onb .onb-more [data-v]')].map(b => b.getAttribute('data-v')).join(), home: !!document.querySelector('#onb .onb-foot [data-v="home"]'), wide: document.documentElement.scrollWidth <= innerWidth }));
    ok(r.h1 === 'Čím začneš?' && r.map > 0 && r.title === 'Parkur týdne A2' && /^\d+(,\d)? m · \d+ překáž(ka|ky|ek) · SČP \d+ s$/.test(r.line) && r.two === '3d,run' && r.pri === '3d' && r.sub === 'Jak ho poběží Fany' && r.more === 'imp,lib,new' && r.home && r.wide, 'poslední krok průvodce: ' + JSON.stringify(r));
    await page.click('#onb .onb-two [data-v="3d"]');
    await page.waitForFunction(() => !$('ov3d').hidden, null, { timeout: 20000 });
    const o = await ev(() => ({ onb: !!$('onb'), id: S.meta.id, wk: weekCourse('A2').id, a: ACT.a }));
    ok(!o.onb && o.id === o.wk && o.a.onb === 1 && o.a.fx_3d === 1 && o.a.v3d >= 1, 'po průvodci parkur týdne ve 3D: ' + JSON.stringify(o));
    await page.click('#p3dim [data-d="2"]'); await w(300);
    const c = await ev(() => ({ ov: $('ov3d').hidden, view, toast: $('toast').textContent }));
    ok(c.ov && c.view === 'plan' && c.toast === 'Parkur týdne máš v Plánu. Zaběhni ho v Běhu a pošli čas do žebříčku.', 'po zavření 3D rada, co dál: ' + JSON.stringify(c));
    /* rada jen po prvním 3D z průvodce */
    await ev(() => { $('toast').hidden = true; $('toast').textContent = ''; open3d(false); }); await page.waitForFunction(() => !$('ov3d').hidden, null, { timeout: 20000 });
    await page.click('#p3dim [data-d="2"]'); await w(300);
    ok(await ev(() => !/Parkur týdne máš v Plánu/.test($('toast').textContent)), 'rada po 3D se ukázala znovu');
  });

  await step('první zážitek: Zaběhnout', async () => {
    await onbToLast();
    await page.click('#onb .onb-two [data-v="run"]'); await w(600);
    const o = await ev(() => ({ onb: !!$('onb'), view, id: S.meta.id, wk: weekCourse('A2').id, toast: $('toast').textContent, a: ACT.a, ov: $('ov3d').hidden }));
    ok(!o.onb && o.view === 'run' && o.id === o.wk && o.ov && /^Na place zmáčkni START, když pes vyběhne, a STOP v cíli\./.test(o.toast) && o.a.onb === 1 && o.a.fx_run === 1, 'po průvodci Běh s parkurem týdne: ' + JSON.stringify(o));
    /* Přeskočit se počítá zvlášť */
    await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await ev(() => localStorage.clear()); await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await w(600);
    await page.click('#onb [data-o="skip"]'); await w(150);
    ok(await ev(() => !$('onb') && ACT.a.onb_skip === 1 && !ACT.a.onb), 'přeskočený průvodce: ' + JSON.stringify(await ev(() => ACT.a)));
  });

  await step('Hoopers bez parkuru týdne, 360 px a angličtina', async () => {
    await fresh(); await ev(() => { setSport('hoopers', true); onbOpen(3); }); await w(150);
    ok(await ev(() => !document.querySelector('#onb .onb-wk') && !document.querySelector('#onb .onb-two') && /Všechno najdeš i později/.test(document.querySelector('#onb .onb-or').textContent) && document.querySelectorAll('#onb .onb-more [data-v]').length === 3), 'Hoopers: poslední krok bez parkuru týdne a 3D');
    await ev(() => { onbClose(false); setSport('agility', true); });
    await page.setViewportSize({ width: 360, height: 640 }); await ev(() => { DOGS = [{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }]; DOGC = 'd1'; saveDogs(); onbOpen(3); }); await w(150);
    const r = await ev(() => { const b = [...document.querySelectorAll('#onb .onb-two .opt')].map(x => x.getBoundingClientRect()); return { wide: document.documentElement.scrollWidth <= innerWidth, row: b.length === 2 && Math.abs(b[0].top - b[1].top) < 2, h: b.map(x => Math.round(x.height)) }; });
    ok(r.wide && r.row && r.h.every(x => x >= 44), '360 px: ' + JSON.stringify(r));
    await ev(() => onbClose(false)); await page.setViewportSize({ width: 390, height: 844 });
    const miss = await missEn(['Proletět ve 3D', 'Zaběhnout', 'Stopky a hodnocení', 'Z pohledu psa i shora', 'Jak ho poběží Fany', 'Nebo:', 'Parkur týdne A2', '151,2 m · 19 překážek · SČP 44 s',
      'Parkur týdne máš v Plánu. Zaběhni ho v Běhu a pošli čas do žebříčku.', 'Na place zmáčkni START, když pes vyběhne, a STOP v cíli. Čas jde zadat i ručně.',
      'Použít a naklepat trasu', 'Použít i s trasou', 'Trasa 1–12 přečtená z čísel na plánku.', 'Nejspolehlivější je použít překážky a trasu naklepat podle čísel na podkladu. Přečtenou trasu můžeš použít i rovnou.',
      'Překážky z obrázku: 12. Teď na ně klepej v pořadí podle čísel na podkladu. Chybějící doplníš v režimu Stavba.']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    ok(await ev(() => trLookup('Jak ho poběží Fany') === 'How Fany will run it'), 'překlad Jak ho poběží: ' + await ev(() => trLookup('Jak ho poběží Fany')));
  });

  /* Zaběhnout: z vybraného parkuru jedním klepnutím na stopky (dřív jen přes Běh ve spodní liště) */
  await step('tlačítko Zaběhnout v Plánu', async () => {
    await fresh('#lib'); await ev(() => { localStorage.removeItem('agility-runhint-v1'); ACT = { day: localDate(), a: {} }; libTab = 'A2'; libRender(); window.scrollTo(0, 0); }); await w(150);
    await page.click('#cards .pick >> nth=2'); await w(400);
    const fab = () => ev(() => !$('runFab').hidden && getComputedStyle($('runFab')).display !== 'none');
    const r = await ev(() => { const f = $('runFab').getBoundingClientRect(), n = document.querySelector('.nav').getBoundingClientRect();
      return { view, mode, toast: $('toast').hidden ? '' : $('toast').textContent, above: f.bottom <= n.top, right: f.right <= innerWidth, h: f.height, txt: $('runFab').textContent.trim() }; });
    ok(await fab() && r.view === 'plan' && r.mode === 'view' && !r.toast && r.above && r.right && r.h >= 44 && r.txt === 'Zaběhnout', 'po výběru parkuru: ' + JSON.stringify(r));
    /* u seznamu překážek, ve Stavbě a Trase a na celou obrazovku se schová */
    await ev(() => $('routeList').scrollIntoView({ block: 'start' })); await w(300); ok(!await fab(), 'u seznamu překážek má být schované');
    await ev(() => window.scrollTo(0, 0)); await w(300); ok(await fab(), 'nahoře u plochy má být zase vidět');
    await page.click('#mBuild'); await w(100); ok(!await fab(), 've Stavbě má být schované');
    await page.click('#mRoute'); await w(100); ok(!await fab(), 'v Trase má být schované');
    await page.click('#mView'); await w(100); ok(await fab(), 'v Prohlížet zase vidět');
    await ev(() => $('fullBtn').click()); await w(250); ok(!await fab(), 'na celou obrazovku má být schované');
    await ev(() => { $('fullBtn').click(); $('toast').hidden = true; window.scrollTo(0, 0); }); await w(300);
    /* klepnutí: Běh pro tenhle parkur, rada jen napoprvé */
    await page.click('#runFab'); await w(500);
    const k = await ev(() => ({ view, name: $('cName').textContent, code: S.meta.code, toast: $('toast').hidden ? '' : $('toast').textContent, n: ACT.a.run_fab }));
    ok(k.view === 'run' && k.name === 'Altair' && k.code === 'A2-03' && /^Na place zmáčkni START/.test(k.toast) && k.n === 1, 'klepnutí na Zaběhnout: ' + JSON.stringify(k));
    await ev(() => { $('toast').hidden = true; show('plan'); window.scrollTo(0, 0); }); await w(300); await page.click('#runFab'); await w(500);
    ok(await ev(() => view === 'run' && $('toast').hidden), 'rada se má ukázat jen napoprvé');
    /* parkur bez trasy: není co běžet */
    await ev(() => { show('plan'); newCourse('A1', 40, 20, ''); S.obs.push({ id: 1, type: 'jump', x: 5, y: 5, rot: 0 }); mode = 'view'; ui(); render(); window.scrollTo(0, 0); }); await w(200);
    ok(!await fab(), 'u parkuru bez trasy má být schované');
    ok(!(await missEn(['Zaběhnout tenhle parkur na stopkách'])).length, 'chybí anglický popisek tlačítka');
  });

  await step('Běh: po STOP lišta s Uložit běh', async () => {
    await fresh('#lib'); await ev(() => { ACT = { day: localDate(), a: {} }; libTab = 'A1'; libRender(); window.scrollTo(0, 0); }); await w(150);
    await page.click('#cards .pick >> nth=0'); await w(300); await ev(() => { closeSheet(); show('run'); }); await w(200);
    ok(await ev(() => $('runBar').hidden), 'před startem je lišta schovaná');
    await page.click('#startBtn'); await w(350); ok(await ev(() => $('runBar').hidden), 'při běžících stopkách je schovaná');
    await page.click('#startBtn'); await w(200);
    const r = await ev(() => { const b = $('runBar').getBoundingClientRect(), n = document.querySelector('.nav').getBoundingClientRect();
      return { hid: $('runBar').hidden, t: $('rbT').textContent, g: $('rbG').textContent, above: b.bottom <= n.top, inside: b.left >= 0 && b.right <= innerWidth, h: b.height, saveBelow: $('saveRun').getBoundingClientRect().top > innerHeight }; });
    ok(!r.hid && /^\d+,\d\d s$/.test(r.t) && /Výborně|Velmi dobře|Dobře|Bez ohodnocení|Diskvalifikace/.test(r.g) && r.above && r.inside && r.h >= 56, 'po STOP lišta s časem a hodnocením nad spodní navigací: ' + JSON.stringify(r));
    ok(r.saveBelow, 'tlačítko Uložit běh ve formuláři je pod okrajem obrazovky, proto lišta');
    await ev(() => { RUN.f = 1; resultRender(); }); ok(/trestné body 5,00|Dobře|Velmi dobře|Výborně/.test(await ev(() => $('rbG').textContent)), 'lišta se přepočítá po přidání chyby: ' + await ev(() => $('rbG').textContent));
    await page.click('#rbSave'); await w(300);
    ok(await ev(() => $('runBar').hidden && document.querySelectorAll('#hist li').length === 1 && ACT.a.run_bar === 1 && ACT.a.runsave === 1 && !$('v-run').classList.contains('hasbar')), 'uložení z lišty: běh v historii, lišta schovaná');
  });

  await step('Domů napoprvé: pozdrav, parkur týdne, dlaždice a Dnes, nic víc', async () => {
    await ev(() => { localStorage.removeItem('agility-marks-v1'); localStorage.removeItem('agility-my-v1'); localStorage.removeItem('agility-acctask-v1'); localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 1, at: Date.now() })); });
    await fresh('#home');
    const look = () => ev(() => ({ lite: homeLite(), wk: !!document.querySelector('#v-home .hm-wkc'), wkTxt: ((document.querySelector('#v-home .hm-wkc') || {}).textContent || '').replace(/\s+/g, ' '), cur: !!document.querySelector('#v-home .hm-cur[data-h="plan"]'), sup: !!document.querySelector('#v-home .hm-sup'),
      plan: !!document.querySelector('#v-home [data-plck]'), nums: !!document.querySelector('#v-home .wk-nums'), more: !!$('hmMore'), skills: !!document.querySelector('#v-home .hm-skills'), cut: !!document.querySelector('#v-home .hm-cut, #v-home .hm-cutcar'), car: !!document.querySelector('#v-home .hm-car'), acct: !!document.querySelector('#v-home .hm-acct'),
      h: document.documentElement.scrollHeight, blocks: [...document.querySelectorAll('#v-home > *')].filter(e => e.getBoundingClientRect().height > 0).length }));
    let r = await look();
    ok(r.lite && r.wk && /Parkur týdne/.test(r.wkTxt) && /Proletět ve 3D/.test(r.wkTxt) && /Zaběhnout/.test(r.wkTxt) && !r.cur && !r.sup && !r.plan && !r.nums && !r.more && !r.skills && !r.cut && r.car && !r.acct && r.h < 1400 && r.blocks <= 6, 'první návštěva: ' + JSON.stringify(r));
    await page.click('#v-home [data-h="wkrun"]'); await w(300);
    ok(await ev(() => view === 'run' && S.meta.id === weekCourse(homeCls()).id && ACT.a.home_run === 1), 'Zaběhnout z karty Parkur týdne otevře stopky s parkurem týdne');
    /* po prvním uloženém běhu je Domů celé a nabídne přihlášení */
    await ev(() => { $('manT').value = '41'; RUN.f = 0; RUN.r = 0; }); await page.click('#saveRun'); await w(250); await ev(() => { closeSheet(); show('home'); }); await w(200);
    r = await look();
    ok(!r.lite && !r.wk && r.cur && r.nums && r.acct, 'po prvním běhu celé Domů s kartou přihlášení: ' + JSON.stringify(r));
    await page.click('#v-home [data-h="acctx"]'); await w(100);
    ok(await ev(() => !document.querySelector('#v-home .hm-acct') && lsGet('agility-acctask-v1', 0) === 1), 'zavřená karta přihlášení se nevrací');
    /* bez běhu, ale od třetí návštěvy je Domů celé */
    await ev(() => { localStorage.removeItem('agility-marks-v1'); localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 3, at: Date.now() })); }); await fresh('#home');
    r = await look(); ok(!r.lite && !r.wk && r.nums, 'třetí návštěva bez běhu: celé Domů: ' + JSON.stringify(r));
    await ev(() => { localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 1, at: Date.now() })); });
  });

  await step('průvodce: Google jen jako odkaz pro ty, kdo už účet mají', async () => {
    await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await ev(() => localStorage.clear()); await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await w(600);
    const r = await ev(() => ({ onb: !!$('onb'), big: !!document.querySelector('#onb .gbtn'), link: !!document.querySelector('#onb .onb-acct .linkbtn[data-acct="in"]'), txt: ((document.querySelector('#onb .onb-acct') || {}).textContent || '').replace(/\s+/g, ' ') }));
    ok(r.onb && !r.big && r.link && /^Už máš Pawkur na jiném telefonu\? Přihlásit se přes Google a data se přenesou\.$/.test(r.txt.trim()), 'krok 1 průvodce bez velkého tlačítka Google: ' + JSON.stringify(r));
    await ev(() => onbClose(true));
  });

  await step('iPhone ve Facebooku: karta na Domů a přenos dat do Safari', async () => {
    const F = await phone(browser, { isMobile: true, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/480.0]' });
    const puts = [];
    await offline(F.ctx, { get_catalog: { version: 0 }, app_act: null, backup_put: (a) => { puts.push(a); return true; } });
    await F.ctx.addInitScript(() => { try { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-news-v1', JSON.stringify('3.0')); localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 })); localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }])); } catch (e) {} });
    const p = F.page; await p.goto(base + '/#home'); await p.waitForTimeout(600);
    const r = await p.evaluate(() => { const c = document.querySelector('#hmIab .hm-iab'); return { bar: !!document.querySelector('.iabbar'), card: !!c, txt: c ? c.textContent.replace(/\s+/g, ' ') : '', move: !!document.querySelector('#hmIab [data-iabmove]'), go: !!document.getElementById('iabGo'), acct: !!document.querySelector('#v-home .hm-acct'), below: c ? c.getBoundingClientRect().top > document.querySelector('#v-home .hm-top').getBoundingClientRect().top : false }; });
    ok(!r.bar && r.card && /Otevřeno ve Facebooku/.test(r.txt) && /Otevřít v Safari/.test(r.txt) && r.move && !r.go && !r.acct && r.below, 'karta pro Facebook na iPhonu: ' + JSON.stringify(r));
    await p.click('#hmIab [data-iabmove]'); await p.waitForTimeout(500);
    const s = await p.evaluate(() => ({ h3: ($('sheet').querySelector('h3') || {}).textContent, link: ($('sheet').querySelector('p[translate="no"]') || {}).textContent, url: location.search }));
    ok(puts.length === 1 && /^[a-z0-9]{12}$/.test(puts[0].p_key) && puts[0].p_data && s.h3 === 'Data jsou připravená' && s.link === 'https://pawkur.cz/?obnova=' + puts[0].p_key && s.url === '?obnova=' + puts[0].p_key, 'přenos do Safari: záloha pod klíčem a adresa s ?obnova=: ' + JSON.stringify({ puts: puts.length, s }));
    await p.click('#sheet [data-a="x"]'); await p.click('#hmIab [data-iabx]'); await p.waitForTimeout(100);
    ok(await p.evaluate(() => !document.querySelector('#hmIab .hm-iab')), 'karta jde zavřít');
    F.errs.forEach(x => T.errs.push(x)); await F.ctx.close();
  });

  await step('Plán na telefonu: Prohlížet 150 %, Stavba a Trasa 200 %, vlastní přiblížení zůstává', async () => {
    await fresh('#lib'); await ev(() => { libTab = 'A2'; libRender(); }); await w(100);
    await page.click('#cards .pick >> nth=1'); await w(300);
    const z = () => ev(() => ({ mode, zoom, lbl: $('zLbl').textContent }));
    let r = await z(); ok(r.mode === 'view' && r.zoom === 1.5 && r.lbl === '150 %', 'po otevření parkuru Prohlížet na 150 %: ' + JSON.stringify(r));
    await page.click('#mBuild'); await w(100); r = await z(); ok(r.mode === 'build' && r.zoom === 2, 'Stavba na 200 %: ' + JSON.stringify(r));
    await page.click('#mView'); await w(100); r = await z(); ok(r.mode === 'view' && r.zoom === 1.5, 'zpět v Prohlížet 150 %: ' + JSON.stringify(r));
    await page.click('#mBuild'); await page.click('#zIn'); await w(100); r = await z(); ok(r.zoom === 2.5, 'přiblížení ve Stavbě: ' + JSON.stringify(r));
    await page.click('#mRoute'); await w(100); r = await z(); ok(r.mode === 'route' && r.zoom === 2.5, 'vlastní přiblížení zůstává i v Trase: ' + JSON.stringify(r));
    await page.click('#mView'); await w(100); r = await z(); ok(r.mode === 'view' && r.zoom === 2.5, 'vlastní přiblížení zůstává i v Prohlížet: ' + JSON.stringify(r));
    await page.click('#zOut'); await page.click('#zOut'); await page.click('#zOut'); await page.click('#mBuild'); await w(100); r = await z(); ok(r.mode === 'build' && r.zoom === 1, 'oddálení v Prohlížet (100 %) zůstane i ve Stavbě: ' + JSON.stringify(r));
    await ev(() => { zoom = 2; ui(); }); await page.click('#mView'); await w(100); r = await z(); ok(r.zoom === 1.5, 'z výchozích 200 % ve Stavbě zpět na výchozích 150 %: ' + JSON.stringify(r));
  });

  await step('upozornění: nabídka po prvním uloženém běhu a karta na Domů', async () => {
    const P = await phone(browser, { isMobile: true }); const calls = [];
    await offline(P.ctx, { get_catalog: { version: 0 }, app_act: null, push_pubkey: 'B' + 'A'.repeat(86), push_sub_set: (a) => { calls.push(a); return true; }, push_comp_set: true, push_watch_set: 0 });
    await P.ctx.addInitScript(() => { try { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-news-v1', JSON.stringify('3.0')); localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 }));
      if (!sessionStorage.getItem('v1')) { sessionStorage.setItem('v1', '1'); localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 1, at: Date.now() })); localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }])); }
      window.PUSH_TEST = { pushManager: { getSubscription: () => Promise.resolve(window.PUSH_SUB || null), subscribe: () => { window.PUSH_SUB = { endpoint: 'https://push.example/abc', options: {}, unsubscribe() { window.PUSH_SUB = null; return Promise.resolve(true); }, toJSON() { return { endpoint: this.endpoint, keys: { p256dh: 'p'.repeat(40), auth: 'a'.repeat(22) } }; } }; return Promise.resolve(window.PUSH_SUB); } } };
    } catch (e) {} });
    const p = P.page; await p.goto(base + '/?pushnudge#home'); await p.waitForTimeout(600);
    ok(await p.evaluate(() => !$('hmPush') && pushHomeHTML() === ''), 'první návštěva bez běhu: karta upozornění ještě ne');
    await p.click('#v-home [data-h="wkrun"]'); await p.waitForTimeout(300);
    await p.evaluate(() => { $('manT').value = '41'; RUN.f = 0; RUN.r = 1; }); await p.click('#saveRun'); await p.waitForTimeout(600);
    /* běh na parkuru týdne nabídne žebříček; nabídka upozornění počká, až se okno zavře */
    if (await p.evaluate(() => !!$('sheet').querySelector('.wksend'))) { await p.waitForTimeout(2500); ok(await p.evaluate(() => !/Upozornit tě/.test($('sheet').textContent)), 'nabídka upozornění nemá přebít okno žebříčku'); await p.click('#sheet [data-a="x"]'); }
    await p.waitForFunction(() => !$('scrim').hidden && /Upozornit tě na nový parkur\?/.test($('sheet').textContent), null, { timeout: 6000 });
    await p.click('#sheet [data-a="on"]'); await p.waitForTimeout(500);
    const r = await p.evaluate(() => ({ on: PUSH.on, toast: $('toast').textContent, n: ACT.a.push_nudge, k: !!lsGet('agility-pushnudge-v1', 0) }));
    ok(calls.length === 1 && r.on && r.toast === 'Upozornění jsou zapnutá.' && r.n === 1 && r.k, 'po prvním běhu nabídka a zapnutí: ' + JSON.stringify({ calls: calls.length, r }));
    /* karta na Domů se ukáže po prvním běhu i na první návštěvě, když upozornění nejsou zapnutá */
    ok(await p.evaluate(() => { PUSH.on = false; PUSH.x = 0; VISITS = { n: 1, at: Date.now() }; return pushHomeHTML() !== ''; }), 'karta upozornění po prvním běhu i na první návštěvě');
    /* druhý běh už nabídku neotevře */
    await p.evaluate(() => { $('manT').value = '40'; }); await p.click('#saveRun'); await p.waitForTimeout(3000);
    ok(await p.evaluate(() => !/Upozornit tě/.test($('sheet').textContent) || $('scrim').hidden), 'nabídka jen jednou');
    P.errs.forEach(x => T.errs.push(x)); await P.ctx.close();
  });

  await step('jména parkurů: hvězdy a měsíce místo kódu, id beze změny', async () => {
    await fresh('#lib');
    const r = await ev(() => { const all = ['A1', 'A2', 'A3', 'H1', 'H2', 'H3'].map(c => listFor(c)).reduce((a, l) => a.concat(l), []), a2 = listFor('A2')[2], h1 = listFor('H1')[0];
      return { n: all.length, uniq: new Set(all.map(c => c.name)).size, codes: all.every(c => /^[AH][1-3]-\d\d$/.test(c.code)), a2: [a2.name, a2.code, a2.id], h1: [h1.name, h1.code] }; });
    ok(r.n === 114 && r.uniq === 114 && r.codes && r.a2.join() === 'Altair,A2-03,A2-03-v5' && r.h1.join() === 'Io,H1-01', 'jména v knihovně: ' + JSON.stringify(r));
    await ev(() => { libTab = 'A2'; libRender(); window.scrollTo(0, 0); }); await w(100);
    const card = await ev(() => { const b = document.querySelectorAll('#cards .card .meta b')[2]; return { t: b.childNodes[0].textContent, nk: (b.querySelector('.nk') || {}).textContent }; });
    ok(card.t === 'Altair' && card.nk === 'A2-03', 'karta: jméno a malý kód: ' + JSON.stringify(card));
    await page.click('#cards .pick >> nth=2'); await w(300);
    const h = await ev(() => ({ name: $('cName').textContent, k: ($('cSub').querySelector('.k') || {}).textContent, pill: !!$('cSub').querySelector('.dpill'), r: ($('cSub').querySelector('.r') || {}).textContent }));
    ok(h.name === 'Altair' && h.k === 'A2' && h.pill && /^\d+,\d m$/.test(h.r), 'hlavička Plánu: ' + JSON.stringify(h));
    /* po úpravě autor a „upraveno“ místo náročnosti */
    await ev(() => { S.meta.dirty = true; topbar(); });
    const h2 = await ev(() => ({ name: $('cName').textContent, t: $('cSub').textContent }));
    ok(h2.name === 'Altair *' && /^A2Generátor podle pravidel FCIupraveno$/.test(h2.t), 'hlavička upraveného parkuru: ' + JSON.stringify(h2));
    await ev(() => { S.meta.dirty = false; topbar(); });
  });

  await step('skupina z odkazu bez přihlášení: náhled a otevření parkuru', async () => {
    const G = await phone(browser, { isMobile: true }); const calls = [];
    const src = await ev(() => { const c = listFor('A1')[0]; return { W: c.W, H: c.H, obs: c.obs, route: c.route, sides: [], turns: c.turns || [], hp: [], marks: [] }; });
    await offline(G.ctx, { get_catalog: { version: 0 }, app_act: null,
      group_peek: (a) => { calls.push(['peek', a.p_code]); return { code: 'XK4P2M', name: 'Agility Brno – středa', members: 12, courses: [{ id: 11, name: 'Středeční parkur 8', cls: 'A2', day: '2026-10-08', thumb: null }, { id: 12, name: 'Kruhy u lesa', cls: 'A1', day: '2026-10-01', thumb: null }] }; },
      group_peek_course: (a) => { calls.push(['course', a.p_code, a.p_cid]); return { id: a.p_cid, name: 'Středeční parkur 8', cls: 'A2', data: src, day: '2026-10-08' }; } });
    await G.ctx.addInitScript(() => { try { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-news-v1', JSON.stringify('3.0')); localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 })); } catch (e) {} });
    const p = G.page; await p.goto(base + '/?skupina=xk4p2m#home');
    await p.waitForFunction(() => !$('scrim').hidden && /Agility Brno/.test($('sheet').textContent), null, { timeout: 8000 });
    const s = await p.evaluate(() => ({ h: $('sheet').querySelector('h3').textContent, n: $('sheet').querySelectorAll('[data-gpc]').length, g: !!$('sheet').querySelector('.gbtn[data-acct="in"]'), txt: $('sheet').textContent.replace(/\s+/g, ' ') }));
    ok(calls[0] && calls[0][1] === 'XK4P2M' && s.h === 'Skupina Agility Brno – středa' && s.n === 2 && s.g && /12 členů · 2 parkury/.test(s.txt) && /bez přihlášení/.test(s.txt), 'náhled skupiny: ' + JSON.stringify(s));
    ok(await p.evaluate(() => trLookup('12 členů') === '12 members' && trLookup('2 parkury') === '2 courses' && trLookup('1 parkur') === '1 course' && trLookup('5 parkurů') === '5 courses'), 'chybí anglický překlad počtu členů a parkurů');
    await p.click('#sheet [data-gpc="11"]'); await p.waitForTimeout(500);
    const o = await p.evaluate(() => ({ view, name: S.meta.name, cls: S.meta.cls, my: myDB().filter(x => x.gpeek === 'XK4P2M~11').length, pend: lsGet('agility-gjoin-v1', ''), act: ACT.a.gpeek, scrim: $('scrim').hidden }));
    ok(o.view === 'plan' && o.name === 'Středeční parkur 8' && o.cls === 'A2' && o.my === 1 && o.pend === 'XK4P2M' && o.act === 1 && o.scrim, 'otevření parkuru z náhledu: ' + JSON.stringify(o));
    /* druhé otevření stejného parkuru ho nezdvojí; v téže návštěvě se náhled znovu neotevře */
    await p.evaluate(() => groupPeekOpen('XK4P2M', 11)); await p.waitForTimeout(400);
    ok(await p.evaluate(() => myDB().filter(x => x.gpeek === 'XK4P2M~11').length === 1 && groupPendAsk() === true && $('scrim').hidden), 'parkur z náhledu jen jednou a náhled jen jednou za návštěvu');
    G.errs.forEach(x => T.errs.push(x)); await G.ctx.close();
    /* bez SQL na serveru: původní okno jen s kódem */
    const H = await phone(browser, { isMobile: true });
    await offline(H.ctx, { get_catalog: { version: 0 }, app_act: null });
    await H.ctx.addInitScript(() => { try { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-news-v1', JSON.stringify('3.0')); localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 })); } catch (e) {} });
    await H.page.goto(base + '/?skupina=XK4P2M#home');
    await H.page.waitForFunction(() => !$('scrim').hidden && /Přidat se do skupiny/.test($('sheet').textContent), null, { timeout: 8000 });
    ok(await H.page.evaluate(() => /XK4P2M/.test($('sheet').textContent) && !$('sheet').querySelector('[data-gpc]')), 'bez náhledu ze serveru původní okno s kódem');
    H.errs.filter(x => !/Failed to load|net::ERR/.test(x)).forEach(x => T.errs.push(x)); await H.ctx.close();
  });

  await T.ctx.close();
  return T.errs;
};
