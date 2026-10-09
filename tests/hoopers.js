/* Hoopers: parkury H1–H3 z generátoru podle FCI Hoopers Regulations, vlastní stavba (paleta, prostor psovoda mimo trasu),
   kontrola pravidel, hodnocení běhu podle chyb a skryté 3D. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  await page.goto(base + '/#lib'); await page.waitForTimeout(400); await ev(() => { $('toast').hidden = true; });

  await step('parkury z generátoru splní pravidla', async () => {
    const r = await ev(() => ['H1', 'H2', 'H3'].map(c => { const L = getC(c);
      return { c, n: L.length, bad: L.map(x => hoopCheck(x.obs, x.route, c, x.W, x.H, false).filter(k => k.ok === false).map(k => x.id + ': ' + k.t)).flat(),
        ha: L.every(x => x.obs.filter(o => o.type === 'ha').length === 1 && x.route.every(id => x.obs.find(o => o.id === id).type !== 'ha')) }; }));
    r.forEach(x => ok(x.n === 8 && !x.bad.length && x.ha, x.c + ': ' + JSON.stringify(x)));
    /* stejné parkury při každém otevření (pevné semínko) */
    const same = await ev(() => { const a = JSON.stringify(hoopGen('H2', 1398, 'x')); return a === JSON.stringify(hoopGen('H2', 1398, 'x')); });
    ok(same, 'generátor není opakovatelný');
  });

  await step('přepínač Agility | Hoopers v horní liště', async () => {
    const t0 = await ev(() => ({ seg: getComputedStyle($('sportSeg')).display, tabs: [...document.querySelectorAll('#libTabs button')].map(b => b.getAttribute('data-c')).join(), sp: SPORT, gen: $('genBtn').hidden }));
    ok(t0.seg !== 'none' && t0.tabs === 'A1,A2,A3,tr,my,gal' && t0.sp === 'agility' && !t0.gen, 'výchozí stav Agility: ' + JSON.stringify(t0));
    await page.click('#sportSeg [data-sp="hoopers"]'); await page.waitForTimeout(250); await ev(() => { $('toast').hidden = true; });
    const t1 = await ev(() => ({ tabs: [...document.querySelectorAll('#libTabs button')].map(b => b.getAttribute('data-c')).join(), on: $('sportSeg').querySelector('.on').getAttribute('data-sp'), sp: SPORT, saved: lsGet('agility-sport-v1', ''), gen: $('genBtn').hidden, info: $('catInfo').textContent, n: document.querySelectorAll('#cards .card').length }));
    ok(t1.tabs === 'H1,H2,H3,my,gal' && t1.on === 'hoopers' && t1.sp === 'hoopers' && t1.saved === 'hoopers' && t1.gen && /24 parkurů/.test(t1.info) && t1.n === 8, 'po přepnutí na Hoopers: ' + JSON.stringify(t1));
    /* Moje ukazuje jen parkury dané disciplíny */
    await ev(() => { mySave([{ id: 'my-a', name: 'moje A', cls: 'A2', W: 30, H: 20, obs: [], route: [], turns: {}, sides: {} }, { id: 'my-h', name: 'moje H', cls: 'H1', W: 30, H: 30, obs: [], route: [], turns: {}, sides: {} }]); });
    const my = await ev(() => { const a = listFor('my').map(c => c.id).join(); setSport('agility', true); const b = listFor('my').map(c => c.id).join(); setSport('hoopers', true); return a + ' / ' + b; });
    ok(my === 'my-h / my-a', 'Moje podle disciplíny: ' + my); await ev(() => { mySave([]); });
    /* Domů: přepínač v tmavé hlavičce, karty H1 */
    await page.click('.nav [data-v="home"]'); await page.waitForTimeout(300);
    const h = await ev(() => ({ seg: !!document.querySelector('#v-home .hm-sport .on[data-sp="hoopers"]'), tags: [...document.querySelectorAll('#v-home .hm-cc .hm-tag')].map(e => e.textContent).join(), drill: !!document.querySelector('#v-home [data-hdrill]') }));
    ok(h.seg && /^H1/.test(h.tags) && !h.drill, 'Domů v režimu Hoopers: ' + JSON.stringify(h));
    await page.click('#v-home .hm-sport [data-sp="agility"]'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; });
    const h2 = await ev(() => ({ sp: SPORT, tags: [...document.querySelectorAll('#v-home .hm-cc .hm-tag')].map(e => e.textContent).join() }));
    ok(h2.sp === 'agility' && /^A[123]/.test(h2.tags), 'Domů zpět na Agility: ' + JSON.stringify(h2));
    /* v Plánu přepínač není (hlavička patří parkuru) */
    await page.click('.nav [data-v="plan"]'); await page.waitForTimeout(200);
    ok(await ev(() => getComputedStyle($('sportSeg')).display) === 'none', 'přepínač se ukazuje i v Plánu');
  });

  await step('záložka Hoopers a otevření parkuru', async () => {
    await page.click('.nav [data-v="lib"]'); await page.click('#sportSeg [data-sp="hoopers"]'); await page.waitForTimeout(250); await ev(() => { $('toast').hidden = true; });
    ok(await page.locator('#cards .card').count() === 8 && /Hoopers H1/.test(await page.textContent('#cards .card')), 'záložka H1');
    await page.click('#cards .pick'); await page.waitForTimeout(300);
    const r = await ev(() => ({ cls: S.meta.cls, sub: $('cSub').textContent, spec: $('specs').textContent, fci: $('fciBar').className,
      dim: { hidden: $('dimBtn').hidden, soon: $('dimBtn').classList.contains('soon'), txt: $('dimBtn').innerText.replace(/\s+/g, ' ').trim(), lbl: $('dimBtn').getAttribute('aria-label') },
      tools: [...document.querySelectorAll('#planTools .tool')].filter(b => b.hidden).map(b => b.getAttribute('data-t')).join() }));
    ok(r.cls === 'H1' && /^Hoopers H1/.test(r.sub) && /Max\. čas\s*3 min/.test(r.spec) && /ok/.test(r.fci), 'plán Hoopers: ' + JSON.stringify(r));
    ok(r.tools === 'ana,traps,3d,fld', 'rozbor, pasti, 3D a stavba v terénu mají být v Nástrojích skryté: ' + JSON.stringify(r));
    /* tlačítko 3D pod plochou: vidět šedé s popiskem „jen agility“ (schované ho uživatel hledal), klepnutí vysvětlí proč a 3D neotevře */
    ok(!r.dim.hidden && r.dim.soon && r.dim.txt === '3D jen agility' && r.dim.lbl === '3D zatím jen pro agility', 'tlačítko 3D u Hoopers: ' + JSON.stringify(r.dim));
    await ev(() => { $('toast').hidden = true; $('dimBtn').scrollIntoView({ block: 'center' }); }); await page.click('#dimBtn'); await page.waitForTimeout(150);
    const t = await ev(() => ({ ov: $('ov3d').hidden, toast: $('toast').textContent, sheet: $('scrim').hidden }));
    ok(t.ov && t.sheet && /^3D zatím umí jen parkury agility\. Oblouk, sud a plůtek ve 3D teprve chystáme\.$/.test(t.toast), 'klepnutí na šedé 3D u Hoopers: ' + JSON.stringify(t));
    ok(await ev(() => trLookup('jen agility') === 'agility only' && trLookup('3D zatím jen pro agility') != null && trLookup('3D zatím umí jen parkury agility. Oblouk, sud a plůtek ve 3D teprve chystáme.') != null), 'chybí anglický překlad tlačítka 3D u Hoopers');
  });

  await step('vlastní stavba', async () => {
    await page.click('.nav [data-v="lib"]'); await page.click('[data-hnew]'); await page.waitForTimeout(200);
    const r = await ev(() => ({ cls: S.meta.cls, W: S.W, H: S.H, obs: S.obs.map(o => o.type).join(), pal: [...document.querySelectorAll('#palette .ob-btn')].map(b => b.getAttribute('data-type')).join() }));
    ok(r.cls === 'H1' && r.W === 30 && r.H === 30 && r.obs === 'ha' && r.pal === 'hoop,barrel,gate,chute,ha', 'nový parkur Hoopers: ' + JSON.stringify(r));
    /* prostor psovoda nejde přidat do trasy */
    await ev(() => { S.obs.push({ id: 2, type: 'hoop', x: 10, y: 15, rot: 0 }, { id: 3, type: 'barrel', x: 16, y: 15, rot: 0 }); mode = 'route'; render(); ui(); });
    await page.click('#field .ob[data-id="1"]'); await page.click('#field .ob[data-id="2"]'); await page.click('#field .ob[data-id="3"]');
    ok(await ev(() => S.route.join()) === '2,3', 'trasa: ' + await ev(() => S.route.join()));
    const c = await ev(() => fciCheck(S.obs, S.route, S.turns, S.sides, S.meta.cls).filter(x => x.ok === false).map(x => x.t));
    ok(c.some(t => /Počet překážek 2/.test(t)) && c.some(t => /Start i cíl obloukem/.test(t)), 'kontrola pravidel: ' + JSON.stringify(c));
    /* zpět na agility: paleta agility */
    await ev(() => loadCourse(listFor('A1')[0], true)); if (await page.isVisible('#scrim')) await T.sheet('ok');
    ok(/^jump,/.test(await ev(() => [...document.querySelectorAll('#palette .ob-btn')].map(b => b.getAttribute('data-type')).join())), 'paleta agility se nevrátila');
    ok(await ev(() => !$('dimBtn').classList.contains('soon') && $('dimBtn').getAttribute('aria-label') === 'Zobrazit parkur ve 3D' && $('dimBtn').innerText.trim() === '3D'), 'tlačítko 3D u agility zůstalo šedé: ' + await ev(() => $('dimBtn').className + ' ' + $('dimBtn').innerText));
  });

  /* 3.1: Parkur: Agility | Hoopers přímo ve Stavbě (uživatel nevěděl, jak disciplínu v Plánu změnit) a v okně Nový parkur */
  await step('přepínač Agility | Hoopers ve Stavbě', async () => {
    const pal = () => ev(() => [...document.querySelectorAll('#palette .ob-btn')].map(b => b.getAttribute('data-type')).join());
    const seg = () => ev(() => [...document.querySelectorAll('#pSport button')].map(b => b.getAttribute('data-ps') + (b.classList.contains('on') ? '*' : '') + (b.getAttribute('aria-pressed') === 'true' ? '+' : '')).join());
    await ev(() => { closeSheet(); $('toast').hidden = true; S.meta.dirty = false; loadCourse(listFor('A2')[2], true); mode = 'build'; ui(); render(); ACT = { day: localDate(), a: {} }; });
    ok(await seg() === 'agility*+,hoopers' && await ev(() => !$('pSportRow').closest('[hidden]') && $('pSportRow').offsetHeight > 0), 'přepínač u parkuru agility: ' + await seg());
    /* rozestavěný parkur: okno se dvěma volbami, Tenhle parkur jako Hoopers H2 */
    const n0 = await ev(() => S.obs.length);
    await page.click('#pSport [data-ps="hoopers"]'); await page.waitForTimeout(200);
    const sh = await ev(() => ({ open: !$('scrim').hidden, h: $('sheet').querySelector('h3').textContent, o: [...$('sheet').querySelectorAll('[data-sw]')].map(b => b.querySelector('b').textContent) }));
    ok(sh.open && sh.h === 'Přepnout parkur na Hoopers?' && sh.o.join('|') === 'Nový prázdný parkur Hoopers|Tenhle parkur jako Hoopers H2', 'okno přepnutí: ' + JSON.stringify(sh));
    await page.click('#sheet [data-sw="conv"]'); await page.waitForTimeout(200);
    const c = await ev(() => ({ cls: S.meta.cls, gen: S.meta.gen, dirty: S.meta.dirty, n: S.obs.length, sport: SPORT, sub: $('cSub').textContent, toast: $('toast').textContent }));
    ok(c.cls === 'H2' && !c.gen && c.dirty && c.n === n0 && c.sport === 'hoopers' && /^Hoopers H2/.test(c.sub) && c.toast === 'Parkur je teď Hoopers H2. Překážky na ploše zůstaly.', 'převod na Hoopers: ' + JSON.stringify(c));
    ok(await pal() === 'hoop,barrel,gate,chute,ha' && await seg() === 'agility,hoopers*+', 'po převodu paleta a přepínač Hoopers: ' + await pal() + ' / ' + await seg());
    /* zpět na agility: Nový prázdný parkur agility (neuložené změny se ztratí, okno to říká) */
    await ev(() => { $('toast').hidden = true; }); await page.click('#pSport [data-ps="agility"]'); await page.waitForTimeout(200);
    ok(/Neuložené změny tohoto parkuru se ztratí\./.test(await page.textContent('#sheet')), 'okno nevaruje před ztrátou změn');
    await page.click('#sheet [data-sw="new"]'); await page.waitForTimeout(200);
    const a = await ev(() => ({ cls: S.meta.cls, W: S.W, H: S.H, n: S.obs.length, mode, sport: SPORT, toast: $('toast').textContent }));
    ok(a.cls === 'A2' && a.W === 40 && a.H === 20 && a.n === 0 && a.mode === 'build' && a.sport === 'agility' && a.toast === 'Nový parkur agility A2.', 'nový prázdný parkur agility: ' + JSON.stringify(a));
    /* prázdná plocha: přepne se hned, bez okna, úroveň zůstane (A2 → H2) */
    await ev(() => { $('toast').hidden = true; }); await page.click('#pSport [data-ps="hoopers"]'); await page.waitForTimeout(200);
    const e = await ev(() => ({ sheet: !$('scrim').hidden, cls: S.meta.cls, W: S.W, H: S.H, obs: S.obs.map(o => o.type).join(), name: S.meta.name }));
    ok(!e.sheet && e.cls === 'H2' && e.W === 36 && e.H === 30 && e.obs === 'ha' && e.name === 'Nový parkur Hoopers', 'prázdná plocha na Hoopers: ' + JSON.stringify(e));
    await page.click('#pSport [data-ps="agility"]'); await page.waitForTimeout(200);
    ok(await ev(() => $('scrim').hidden && S.meta.cls === 'A2' && S.obs.length === 0 && SPORT === 'agility'), 'prázdná plocha zpět na agility');
    const k = await ev(() => ACT.a);
    ok(k.sport === 2 && k.sport_conv === 1 && k.sport_new === 1, 'počty akcí přepínače: ' + JSON.stringify(k));
    /* okno Nový parkur: nahoře Agility | Hoopers, ve třídě jen třídy zvolené disciplíny */
    await ev(() => { $('toast').hidden = true; loadCourse(listFor('A3')[0], true); newCourseSheet(); }); await page.waitForTimeout(150);
    const n1 = await ev(() => ({ on: $('nSp').querySelector('.on').getAttribute('data-ns'), cls: [...$('nCls').options].map(o => o.value).join(), v: $('nCls').value, size: $('nSize').value }));
    ok(n1.on === 'agility' && n1.cls === 'A1,A2,A3' && n1.v === 'A3' && n1.size === '40x20', 'Nový parkur u agility: ' + JSON.stringify(n1));
    await page.click('#nSp [data-ns="hoopers"]'); await page.waitForTimeout(100);
    const n2 = await ev(() => ({ on: $('nSp').querySelector('.on').getAttribute('data-ns'), cls: [...$('nCls').options].map(o => o.value).join(), v: $('nCls').value, size: $('nSize').value }));
    ok(n2.on === 'hoopers' && n2.cls === 'H1,H2,H3' && n2.v === 'H3' && n2.size === '40x32', 'Nový parkur po přepnutí na Hoopers: ' + JSON.stringify(n2));
    await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(200);
    ok(await ev(() => S.meta.cls === 'H3' && S.W === 40 && S.H === 32 && S.obs.map(o => o.type).join() === 'ha' && SPORT === 'hoopers'), 'Nový parkur Hoopers H3: ' + await ev(() => S.meta.cls + ' ' + S.W + '×' + S.H));
    const miss = await ev(() => ['Parkur', 'Disciplína parkuru', 'Přepnout parkur na Hoopers?', 'Přepnout parkur na agility?', 'Na ploše jsou překážky agility. Co s nimi?', 'Na ploše jsou překážky Hoopers. Co s nimi?',
      'Nový prázdný parkur Hoopers', 'Nový prázdný parkur agility', 'Plocha 36 × 30 m a prostor psovoda uprostřed, třída H2.', 'Plocha 40 × 20 m, třída A2.', 'Neuložené změny tohoto parkuru se ztratí.',
      'Tenhle parkur zůstane, jak je uložený.', 'Tenhle parkur jako Hoopers H2', 'Tenhle parkur jako agility A3',
      'Překážky zůstanou na místě a v nabídce budou oblouk, sud, plůtek, krátký tunel a prostor psovoda. Hodí se pro plánek z fotky.',
      'Překážky zůstanou na místě a v nabídce budou skoky, tunel, slalom, zóny a další překážky agility.', 'Parkur je teď Hoopers H2. Překážky na ploše zůstaly.', 'Parkur je teď agility A1. Překážky na ploše zůstaly.',
      'Nový parkur Hoopers H2. V nabídce jsou oblouk, sud, plůtek, krátký tunel a prostor psovoda.', 'Nový parkur agility A2.'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad přepínače: ' + miss.join(' | '));
  });

  await step('běh podle chyb', async () => {
    const r = await ev(() => { const m = metrics(listFor('H2')[0].obs, listFor('H2')[0].route, 'H2');
      return [evalRun(95, 0, 0, false, m), evalRun(95, 1, 1, false, m), evalRun(181, 0, 0, false, m)].map(e => e.g + ':' + e.tot); });
    ok(r.join() === 'V:0,BO:10,DIS:0', 'hodnocení Hoopers: ' + r.join());
    await ev(() => { loadCourse(listFor('H2')[0], true); show('run'); $('manT').value = '95'; RUN.f = 1; RUN.r = 0; runRender(); });
    const t = await page.textContent('#result');
    ok(/1 chyba/.test(t) && /trestné body 5/.test(t) && /Max\. čas/.test(await page.textContent('#clockSub')), 'Běh: ' + t);
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Oblouk', 'Sud', 'Plůtek', 'Krátký tunel', 'Prostor psovoda', '＋ Nový parkur Hoopers', 'Start i cíl obloukem', 'Počet překážek 14 (FCI H1: 12–18)',
      'Oblouků 10 z 14 (FCI: aspoň polovina)', 'Vzdálenosti mezi překážkami 5–8 m', 'Nejvzdálenější překážka 13,7 m od prostoru psovoda (FCI H1: nejvýš 15 m pro velké psy)',
      'Plocha 30 × 30 m (FCI: aspoň 800 m², kratší strana aspoň 20 m)', 'Vzdálenost mimo 5–8 m: 1→2 9,1 m', 'Hoopers H1', '1 chyba', 'Čistý běh',
      'Hoopers: rozhoduje čistý běh, čas jen pro tebe.', 'Od psovoda nejdál', 'FCI nejvýš 15 m', $('libNote').textContent, 'Disciplína',
      'Hoopers: parkury H1–H3, oblouky, sudy a plůtky. Pes běží sám, ty ho vedeš z prostoru 2 × 2 m.', 'Agility: parkury A1–A3 podle FCI.', '24 parkurů Hoopers H1–H3 podle FCI, nebo si postav vlastní'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
