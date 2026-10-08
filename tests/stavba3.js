/* Stavba na telefonu 3: okno Nový parkur (plocha, třída, název, celá šířka plochy), přiblížení drží střed a výšku plochy,
   paleta ve dvou řádcích, kontrola FCI na ploše i bez trasy (a nová pravidla), uložení bez trasy, Zpět a Znovu, úpravy trasy uprostřed,
   změna plochy s překážkami mimo, natočení u Hoopers, drobnosti (natočení podle posledního, kopírování, strana psovoda),
   přesná čísla vybrané překážky, vodítka při tažení, celý parkur (zrcadlo, 180°, posun, výběr víc překážek),
   sdílení odkazem a porovnání s jiným parkurem. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  let shared = null;
  const T = await phone(browser, { isMobile: true }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 }, share_course: () => 'ABC123', get_course: () => shared });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash == null ? '#plan' : hash)); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  const cdp = await T.ctx.newCDPSession(page);
  const touches = async (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts });
  const px = (x, y) => ev(([x, y]) => { const b = $('field').getBoundingClientRect(); return { x: b.left + x / S.W * b.width, y: b.top + y / S.H * b.height }; }, [x, y]);
  const cz = /[ěščřžýáíéůúňťď]/;
  const missEn = (list) => ev(l => l.filter(t => { const v = trLookup(t); return v == null || /[ěščřžýáíéůúňťď]/.test(v); }), list);

  await step('Nový parkur: okno s plochou, třídou a názvem', async () => {
    await fresh();
    /* rozpracovaný parkur: okno upozorní, že se plocha vyčistí */
    await ev(() => { S.meta.dirty = true; S.meta.id = null; zoom = 2; ui(); });
    await page.click('#newBtn'); await page.waitForTimeout(150);
    let r = await ev(() => ({ open: !$('scrim').hidden, warn: /neuložené změny/.test($('sheet').textContent), size: $('nSize').value, cls: $('nCls').value, name: $('nName').value, ph: $('nName').placeholder,
      opts: [...$('nSize').options].map(o => o.value).join() }));
    ok(r.open && r.warn && r.size === '40x20' && r.name === '' && r.ph === 'Nový parkur' && /^40x20,40x24,30x20,25x15,20x15,15x10,own$/.test(r.opts), 'okno Nový parkur: ' + JSON.stringify(r));
    /* Hoopers: plochy podle třídy */
    await page.selectOption('#nCls', 'H3');
    r = await ev(() => ({ size: $('nSize').value, opts: [...$('nSize').options].map(o => o.textContent).slice(0, 3).join('|') }));
    ok(r.size === '40x32' && r.opts === 'Hoopers H1 30 × 30 m|Hoopers H2 36 × 30 m|Hoopers H3 40 × 32 m', 'plochy Hoopers podle třídy: ' + JSON.stringify(r));
    /* vlastní rozměr: mimo 10–60 × 10–40 m nejde */
    await page.selectOption('#nCls', 'A2'); await page.selectOption('#nSize', 'own');
    ok(await page.isVisible('#nW') && await page.isVisible('#nH'), 'vlastní rozměr nemá pole');
    await page.fill('#nW', '70'); await page.fill('#nH', '20'); await T.sheet('ok');
    ok(await ev(() => !$('scrim').hidden && /10–60/.test($('toast').textContent) && S.W === 40), 'plocha 70 m se přijala');
    await page.fill('#nW', '33'); await page.fill('#nH', '17'); await page.fill('#nName', 'Úterní trénink'); await T.sheet('ok');
    r = await ev(() => ({ W: S.W, H: S.H, cls: S.meta.cls, name: S.meta.name, n: S.obs.length, zoom, mode, sel: $('sizeSelect').value, und: UNDO.length, dirty: S.meta.dirty,
      fit: $('field').getBoundingClientRect().width <= $('wrap').clientWidth + .5, sl: $('wrap').scrollLeft }));
    ok(r.W === 33 && r.H === 17 && r.cls === 'A2' && r.name === 'Úterní trénink' && r.n === 0 && r.mode === 'build' && r.sel === '33x17' && !r.und && !r.dirty, 'nový parkur podle okna: ' + JSON.stringify(r));
    ok(r.zoom === 1 && r.fit && r.sl === 0, 'nový parkur není přiblížený na celou šířku plochy: ' + JSON.stringify(r));
    /* Hoopers z okna: prostor psovoda uprostřed, paleta Hoopers */
    await page.click('#newBtn'); await page.selectOption('#nCls', 'H1'); await T.sheet('ok');
    r = await ev(() => ({ cls: S.meta.cls, W: S.W, H: S.H, obs: S.obs.map(o => o.type).join(), sport: SPORT, pal: [...document.querySelectorAll('#palette .ob-btn')].map(b => b.getAttribute('data-type')).join(),
      sizes: [...$('sizeSelect').options].map(o => o.value).slice(0, 3).join() }));
    ok(r.cls === 'H1' && r.W === 30 && r.H === 30 && r.obs === 'ha' && r.sport === 'hoopers' && r.pal === 'hoop,barrel,gate,chute,ha' && r.sizes === '30x30,36x30,40x32', 'nový parkur Hoopers: ' + JSON.stringify(r));
    await ev(() => setSport('agility', true));
    /* Domů → Nový parkur otevře stejné okno jedním klepnutím */
    await page.click('.nav [data-v="home"]'); await page.waitForTimeout(150);
    await page.click('#v-home [data-h="new"]'); await page.waitForTimeout(150);
    ok(await ev(() => view === 'plan' && !$('scrim').hidden && !!$('nSize')), 'Nový parkur z Domů neotevřel okno');
    await T.sheet('x');
    const miss = await missEn(['Nový parkur', 'Plocha', 'Šířka (m)', 'Výška (m)', 'Název (nepovinný)', 'Začít', 'Vlastní šířka × výška', 'Plocha může mít 10–60 × 10–40 m.', 'Hoopers H2 36 × 30 m']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await step('přiblížení drží střed a výšku plochy', async () => {
    await fresh();
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('A1')[0], true); mode = 'build'; zoom = 1; ui(); render(); $('wrap').scrollIntoView({ block: 'center' }); });
    await page.waitForTimeout(100);
    const mid = () => ev(() => { const w = $('wrap'), s = $('field'); return { x: (w.scrollLeft + w.clientWidth / 2) / s.clientWidth * S.W, y: (w.scrollTop + w.clientHeight / 2) / s.clientHeight * S.H }; });
    await ev(() => { zoom = 2; ui(); const w = $('wrap'); w.scrollLeft = w.scrollWidth / 2 - w.clientWidth / 2 + 60; w.scrollTop = 40; });
    const m0 = await mid();
    await page.click('#zIn'); const m1 = await mid();
    await page.click('#zOut'); await page.click('#zOut'); const m2 = await mid(), z2 = await ev(() => zoom);
    ok(Math.abs(m1.x - m0.x) < .6 && Math.abs(m1.y - m0.y) < .6, 'tlačítko + neudrželo střed: ' + JSON.stringify([m0, m1]));
    ok(z2 === 1.5 && Math.abs(m2.x - m0.x) < .6, 'tlačítko − neudrželo střed: ' + JSON.stringify([m0, m2, z2]));
    /* dva prsty: výška plochy se během přibližování nemění, lišta pod plochou neposkočí */
    await ev(() => { zoom = 1; ui(); $('wrap').scrollIntoView({ block: 'center' }); }); await page.waitForTimeout(80);
    const c = await px(20, 10), h0 = await ev(() => $('wrap').getBoundingClientRect().height), fb0 = await ev(() => document.querySelector('.fieldbar').getBoundingClientRect().top);
    const pts = d => [{ x: c.x - d / 2, y: c.y, id: 1 }, { x: c.x + d / 2, y: c.y, id: 2 }];
    await touches('touchStart', pts(60)); const hs = [], fbs = [];
    for (let i = 1; i <= 8; i++) { await touches('touchMove', pts(60 + 20 * i)); await page.waitForTimeout(16); hs.push(await ev(() => Math.round($('wrap').getBoundingClientRect().height))); fbs.push(await ev(() => Math.round(document.querySelector('.fieldbar').getBoundingClientRect().top))); }
    const zp = await ev(() => zoom);
    await touches('touchEnd', []); await page.waitForTimeout(120);
    ok(zp > 1.8 && hs.every(h => Math.abs(h - h0) < 1) && fbs.every(t => Math.abs(t - fb0) < 1), 'plocha při přibližování mění výšku: ' + JSON.stringify({ h0, hs, fb0, fbs, zp }));
    ok(await ev(() => $('wrap').style.height === ''), 'po zvednutí prstů zůstala pevná výška plochy');
  });

  await step('paleta: všechny překážky bez posouvání do strany', async () => {
    for (const [w, h] of [[390, 844], [360, 740]]) {
      await page.setViewportSize({ width: w, height: h });
      await fresh(); await ev(() => { mode = 'build'; ui(); render(); });
      const r = await ev(() => { const p = $('palette'), bs = [...p.querySelectorAll('.ob-btn')], tops = [...new Set(bs.map(b => Math.round(b.getBoundingClientRect().top)))];
        return { n: bs.length, rows: tops.length, sw: p.scrollWidth, cw: p.clientWidth, inView: bs.every(b => { const q = b.getBoundingClientRect(); return q.left >= 0 && q.right <= innerWidth && q.width >= 44 && q.height >= 44; }),
          doc: document.documentElement.scrollWidth <= document.documentElement.clientWidth, wall: !!p.querySelector('[data-type="jump:wall"]') && !!p.querySelector('[data-type="jump:oxer"]') }; });
      ok(r.n === 10 && r.rows === 2 && r.sw <= r.cw + 1 && r.inView && r.doc && r.wall, `${w} px: paleta má být ve dvou řádcích bez posouvání: ` + JSON.stringify(r));
    }
    await page.setViewportSize({ width: 390, height: 844 });
    /* Hoopers: pět překážek v jednom řádku */
    await ev(() => { hoopNew(); });
    const hp = await ev(() => { const bs = [...document.querySelectorAll('#palette .ob-btn')]; return { n: bs.length, rows: new Set(bs.map(b => Math.round(b.getBoundingClientRect().top))).size }; });
    ok(hp.n === 5 && hp.rows === 1, 'paleta Hoopers: ' + JSON.stringify(hp));
    await ev(() => setSport('agility', true));
  });

  /* parkur bez historie: překážky, trasa, třída, plocha 40 × 20 m */
  const setCourse = (obs, route, cls) => ev(([obs, route, cls]) => {
    S.meta.dirty = false; planReset(); S.W = 40; S.H = 20; S.meta.cls = cls || 'A2';
    S.obs = obs; S.route = route; S.sides = []; S.turns = []; S.hp = []; S.marks = []; syncSides(); mode = 'build'; tool = 'jump'; sel = null; zoom = 1;
    setSizeSel(); drawGrid(); save(); render(); ui(); undoReset(); $('toast').hidden = true;
  }, [obs, route, cls]);
  const items = (cls) => ev(c => fciCheck(S.obs, S.route, S.turns, S.sides, c || S.meta.cls), cls);

  await step('kontrola FCI na ploše i bez trasy', async () => {
    await fresh();
    /* bez trasy: dva skoky přes sebe, skok 0,8 m od otvoru tunelu, kladina přes kraj plochy */
    await setCourse([{ id: 1, type: 'jump', x: 35, y: 15, rot: 0 }, { id: 2, type: 'jump', x: 35.2, y: 15, rot: 0 }, { id: 3, type: 'jump', x: 10, y: 10, rot: 0 },
      { id: 4, type: 'tunnel', x: 12.7, y: 10, rot: 0, len: 3 }, { id: 5, type: 'dogwalk', x: 3, y: 18, rot: 0 }, { id: 6, type: 'jump', x: 25, y: 5, rot: 90 }], []);
    let r = await ev(() => ({ bar: $('fciBar').querySelector('.grow').textContent, warn: $('fciBar').classList.contains('warn'), bad: [...document.querySelectorAll('#obs .ob.bad')].map(g => +g.getAttribute('data-id')).sort().join(),
      rect: document.querySelectorAll('#obs .ob.bad .obbad').length, spec: $('specs').textContent, n: fciCheck(S.obs, S.route, S.turns, S.sides, S.meta.cls).filter(x => x.ok === false).length }));
    ok(r.warn && r.bar === 'FCI · ' + r.n && r.n === 3 && r.bad === '1,2,3,4,5' && r.rect === 5, 'problémy bez trasy na ploše: ' + JSON.stringify(r));
    ok(/6 na ploše · trasa 0/.test(r.spec) && !/0 překážek/.test(r.spec), 'souhrn bez trasy: ' + r.spec);
    /* položka v kontrole jde ťuknout: plocha se přiblíží k překážkám přes sebe */
    await page.click('#fciBar'); await page.waitForTimeout(150);
    const li = await ev(() => [...document.querySelectorAll('#sheet .fcilist li')].map(l => ({ t: l.textContent, fi: l.getAttribute('data-fi') })));
    ok(li.length === 3 && li.every(x => x.fi != null) && /rozmístění překážek/.test(await page.textContent('#sheet')), 'kontrola bez trasy: ' + JSON.stringify(li));
    await page.click('#sheet .fcilist li:has-text("přes sebe")'); await page.waitForTimeout(150);
    r = await ev(() => { const w = $('wrap').getBoundingClientRect(), g = document.querySelector('#obs .ob[data-id="1"]').getBoundingClientRect();
      return { open: !$('scrim').hidden, zoom, inView: g.left >= w.left && g.right <= w.right && g.top >= w.top && g.bottom <= w.bottom && w.top >= 0 && w.bottom <= innerHeight,
        blink: !!document.querySelector('#obs .ob[data-id="1"].fcifocus') && !!document.querySelector('#obs .ob[data-id="2"].fcifocus') }; });
    ok(!r.open && r.zoom > 2 && r.inView && r.blink, 'položka nepřiblížila plochu k překážkám: ' + JSON.stringify(r));
    /* s trasou: popisek úseku mimo rozestupy má data-bad */
    await setCourse([{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }, { id: 2, type: 'jump', x: 11, y: 10, rot: 0 }, { id: 3, type: 'jump', x: 17, y: 10, rot: 0 }, { id: 4, type: 'jump', x: 30, y: 10, rot: 0 }], [1, 2, 3, 4]);
    r = await ev(() => ({ legs: [...document.querySelectorAll('#pth [data-leg]')].map(g => g.getAttribute('data-leg') + ':' + (g.getAttribute('data-bad') || '')).join(),
      bar: $('fciBar').querySelector('.grow').textContent, n: fciCheck(S.obs, S.route, S.turns, S.sides, S.meta.cls).filter(x => x.ok === false).length,
      it: fciCheck(S.obs, S.route, S.turns, S.sides, S.meta.cls).find(x => /^Rozestupy/.test(x.t)) }));
    ok(r.legs === '0:,1:,2:1' && r.bar === 'FCI · ' + r.n && r.it && r.it.ok === false && JSON.stringify(r.it.legs) === '[2]', 'úsek mimo rozestupy: ' + JSON.stringify(r));
    /* položka s úsekem jde ťuknout */
    await page.click('#fciBar'); await page.waitForTimeout(150);
    ok(await ev(() => [...document.querySelectorAll('#sheet .fcilist li[data-fi]')].some(l => /Rozestupy/.test(l.textContent))), 'položka Rozestupy nejde ťuknout');
    await T.sheet('x');
    /* bez trasy a bez problémů: tlačítko FCI zůstane neutrální a jen poradí trasu */
    await setCourse([{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }, { id: 2, type: 'jump', x: 15, y: 10, rot: 0 }], []);
    r = await ev(() => ({ bar: $('fciBar').textContent, cls: $('fciBar').className, bad: document.querySelectorAll('#obs .ob.bad').length }));
    ok(r.bar === '•FCI' && r.cls === 'fcibar' && !r.bad, 'bez trasy a bez problémů: ' + JSON.stringify(r));
    await page.click('#fciBar'); ok(/potřebuje trasu/.test(await page.textContent('#toast')) && await ev(() => $('scrim').hidden), 'bez trasy a problémů má FCI jen poradit');
  });

  await step('nová pravidla FCI', async () => {
    await fresh();
    const J = (id, x, y, rot, v) => Object.assign({ id, type: 'jump', x, y, rot: rot || 0 }, v ? { v } : {});
    /* 1 m mezi překážkami (i otvor tunelu); tunel pod kladinou smí */
    await setCourse([J(1, 10, 10), { id: 2, type: 'tunnel', x: 12.7, y: 10, rot: 0, len: 3 }, { id: 3, type: 'dogwalk', x: 25, y: 5, rot: 0 }, { id: 4, type: 'tunnel', x: 25, y: 5, rot: 90, len: 4 }], [1, 2, 3]);
    let it = await items();
    let x = it.find(i => /^Překážky blíž než 1 m/.test(i.t));
    ok(x && x.ok === false && /skok č\. 1 a tunel č\. 2/.test(x.t) && !/kladina/.test(x.t) && JSON.stringify(x.ids) === '[1,2]', '1 m mezi překážkami: ' + JSON.stringify(x));
    await ev(() => { getO(2).x = 13.5; render(); }); it = await items();
    ok(!it.some(i => /blíž než 1 m/.test(i.t)), '1,6 m mezi skokem a tunelem hlásí problém');
    /* zeď jen jednou */
    await setCourse([J(1, 5, 10, 0, 'wall'), J(2, 11, 10), J(3, 17, 10, 0, 'wall')], [1, 2, 3]);
    x = (await items()).find(i => /^Zeď/.test(i.t));
    ok(x && x.ok === false && x.t === 'Zeď 2× (FCI: jen jednou)' && JSON.stringify(x.ids) === '[1,3]', 'zeď dvakrát: ' + JSON.stringify(x));
    await ev(() => { S.route = [1, 2]; syncSides(); }); x = (await items()).find(i => /^Zeď/.test(i.t));
    ok(x && x.ok === true, 'zeď jednou: ' + JSON.stringify(x));
    /* dvojitý skok v A1 ne, v A2 jednou ano, dvakrát doporučení */
    await setCourse([J(1, 5, 10), J(2, 11, 10, 0, 'oxer'), J(3, 17, 10), J(4, 23, 10, 0, 'oxer')], [1, 2, 3], 'A1');
    x = (await items('A1')).find(i => /^Dvojitý skok/.test(i.t));
    ok(x && x.ok === false && x.t === 'Dvojitý skok v A1 (FCI: v A1 a J1 se nepoužívá)', 'dvojitý skok v A1: ' + JSON.stringify(x));
    ok(!(await items('A2')).some(i => /^Dvojitý skok/.test(i.t)), 'jeden dvojitý skok v A2 hlásí problém');
    await ev(() => { S.route = [1, 2, 3, 4]; syncSides(); }); x = (await items('A2')).find(i => /^Dvojitý skok/.test(i.t));
    ok(x && x.ok === null && /2×/.test(x.t), 'dva dvojité skoky v A2 mají být doporučení: ' + JSON.stringify(x));
    /* rovný nájezd: kruh v ose (0°), šikmo (38° = doporučení), napříč (90° = problém); skok daleký napříč */
    const appr = async (rot, type) => { await setCourse([J(1, 5, 10), { id: 2, type: type || 'tire', x: 11, y: 10, rot }, J(3, 17, 10)], [1, 2, 3]); const L = await items();
      return { ok: (L.find(i => /^Rovný nájezd/.test(i.t)) || {}).ok, t: (L.find(i => /^Rovný nájezd/.test(i.t)) || {}).t, w: (L.find(i => /^Nájezd pod úhlem/.test(i.t)) || {}).t, ids: (L.find(i => /^Rovný nájezd/.test(i.t)) || {}).ids }; };
    let a = await appr(0); ok(a.ok === true && !a.w, 'kruh v ose: ' + JSON.stringify(a));
    a = await appr(38); ok(a.ok === true && /kruh č\. 2 pod úhlem 38°/.test(a.w || ''), 'kruh pod úhlem 38° má být doporučení: ' + JSON.stringify(a));
    a = await appr(90); ok(a.ok === false && /kruh č\. 2 pod úhlem 90°/.test(a.t) && JSON.stringify(a.ids) === '[2]', 'kruh napříč: ' + JSON.stringify(a));
    a = await appr(70, 'longjump'); ok(a.ok === false && /skok daleký č\. 2 pod úhlem 70°/.test(a.t), 'skok daleký šikmo: ' + JSON.stringify(a));
    /* rozběh a doběh 6 m: první skok 2 m od kraje plochy = doporučení; uprostřed plochy v pořádku */
    await setCourse([J(1, 2, 10), J(2, 8, 10), J(3, 14, 10)], [1, 2, 3]); it = await items();
    x = it.find(i => /^Rozběh před první/.test(i.t));
    ok(x && x.ok === null && /jen 2,0 m \(FCI: aspoň 6 m\)/.test(x.t) && JSON.stringify(x.ids) === '[1]' && !it.some(i => /^Doběh/.test(i.t)), 'rozběh u kraje: ' + JSON.stringify(x));
    await ev(() => { S.obs.forEach(o => { o.x += 12; }); render(); }); it = await items();
    ok(it.some(i => i.t === 'Rozběh a doběh aspoň 6 m' && i.ok === true), 'rozběh a doběh uprostřed plochy');
    await ev(() => { S.obs.push({ id: 4, type: 'tunnel', x: 30, y: 10, rot: 90, len: 4 }); render(); }); it = await items();
    ok(it.some(i => /^Doběh za poslední překážkou jen/.test(i.t) && i.ok === null), 'tunel 4 m za cílem neubral doběh: ' + JSON.stringify(it.map(i => i.t)));
    /* tunel kratší než 5 m nejvýš o 90° */
    await setCourse([J(1, 5, 10), { id: 2, type: 'tunnel', x: 15, y: 10, rot: 0, len: 4, bend: 135 }, { id: 3, type: 'tunnel', x: 28, y: 10, rot: 0, len: 5, bend: 135 }, { id: 4, type: 'tunnel', x: 15, y: 16, rot: 0, len: 4, bend: 90 }], []);
    x = (await items()).find(i => /ohnutý/.test(i.t));
    ok(x && x.ok === false && /^Tunel kratší než 5 m ohnutý víc než o 90°: tunel \(4,0 m, 135°\) \(FCI: nejvýš 90°\)$/.test(x.t) && JSON.stringify(x.ids) === '[2]', 'ohnutý krátký tunel: ' + JSON.stringify(x));
    /* počet na tlačítku FCI = počet problémů v okně kontroly */
    await setCourse([J(1, 2, 10), J(2, 8, 10, 0, 'oxer'), { id: 3, type: 'tire', x: 14, y: 10, rot: 90 }, J(4, 14.6, 12)], [1, 2, 3, 4], 'A1');
    await page.click('#fciBar'); await page.waitForTimeout(150);
    const bc = await ev(() => ({ bar: $('fciBar').querySelector('.grow').textContent, sheet: document.querySelectorAll('#sheet .fcilist li.bad').length }));
    ok(bc.bar === 'FCI · ' + bc.sheet && bc.sheet >= 4, 'počet na tlačítku FCI nesedí s oknem: ' + JSON.stringify(bc));
    await T.sheet('x');
    /* katalog: nová pravidla nepřidala žádný problém (6 m a šikmý nájezd do 45° jsou jen doporučení) */
    const cat = await ev(() => ['A1', 'A2', 'A3'].flatMap(k => listFor(k)).filter(c => { const sw = S.W, sh = S.H; S.W = c.W || 40; S.H = c.H || 20;
      const b = fciCheck(c.obs, c.route, c.turns || [], c.sides || [], c.cls).some(i => i.ok === false && /blíž než 1 m|Zeď|Dvojitý skok|Rovný nájezd|Rozběh|Doběh|ohnutý/.test(i.t)); S.W = sw; S.H = sh; return b; }).map(c => c.id));
    ok(!cat.length, 'parkury z katalogu porušují nová pravidla: ' + cat.slice(0, 8).join(', '));
    const miss = await missEn(['Překážky blíž než 1 m: skok č. 1 a tunel č. 2; skok a zeď (FCI: aspoň 1 m mezi překážkami)', 'Zeď 2× (FCI: jen jednou)', 'Dvojitý skok v A1 (FCI: v A1 a J1 se nepoužívá)',
      'Dvojitý skok 2× (FCI doporučuje nejvýš jednou)', 'Skok daleký 2× (FCI doporučuje nejvýš jednou)', 'Rovný nájezd na dvojitý skok, kruh a skok daleký', 'Rovný nájezd na dvojitý skok, kruh a skok daleký: kruh č. 2 pod úhlem 90°; dvojitý skok č. 5 ze zadní strany',
      'Nájezd pod úhlem (FCI doporučuje rovně, do 30°): kruh č. 2 pod úhlem 38°', 'Rozběh před první překážkou jen 2,0 m (FCI: aspoň 6 m)', 'Doběh za poslední překážkou jen 3,5 m (FCI: aspoň 6 m)', 'Rozběh a doběh aspoň 6 m',
      'Tunel kratší než 5 m ohnutý víc než o 90°: tunel č. 3 (4,0 m, 135°); tunel (4,5 m, 180°) (FCI: nejvýš 90°)', '6 na ploše · trasa 0', 'Ukázat na ploše',
      'Bez trasy se kontroluje jen rozmístění překážek. Ostatní pravidla přibydou, až vyznačíš trasu v režimu Trasa.',
      'Klepnutím na položku se plocha přiblíží k překážkám, kterých se týká. Rozestupy se měří po dráze psa, jak ji ukazuje plán, i se smyčkami otoček. Pravidla platí pro závody, na trénink si můžeš postavit cokoli.']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    ok(await ev(() => trLookup('Rovný nájezd na dvojitý skok, kruh a skok daleký: kruh č. 2 pod úhlem 90°; dvojitý skok č. 5 ze zadní strany') === 'Straight approach to the spread jump, tyre and long jump: tyre no. 2 at 90°; spread jump no. 5 from the back side'), 'překlad rovného nájezdu: ' + await ev(() => trLookup('Rovný nájezd na dvojitý skok, kruh a skok daleký: kruh č. 2 pod úhlem 90°; dvojitý skok č. 5 ze zadní strany')));
  });

  await step('uložení a přejmenování bez trasy', async () => {
    await fresh(); await ev(() => { mySave([]); });
    await page.click('#newBtn'); await T.sheet('ok');
    /* prázdná plocha: Uložit jen poradí */
    await page.click('#saveBtn'); ok(await ev(() => $('scrim').hidden && /nic není/.test($('toast').textContent)), 'Uložit na prázdné ploše');
    await ev(() => { S.obs = [{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }, { id: 2, type: 'tunnel', x: 15, y: 10, rot: 0, len: 5 }]; touch(); render(); ui(); });
    /* název nahoře jde upravit i bez trasy */
    await page.click('#titleBtn'); await page.waitForTimeout(150);
    let r = await ev(() => ({ open: !$('scrim').hidden, h: $('sheet').querySelector('h3').textContent, name: $('fName').value, ph: $('fName').placeholder, acts: [...document.querySelectorAll('#sheet [data-a]')].map(b => b.getAttribute('data-a')).join() }));
    ok(r.open && r.name === '' && r.ph === 'Název parkuru' && r.acts === 'x,meta,new', 'název bez trasy: ' + JSON.stringify(r));
    await page.fill('#fName', 'Kruhy u lesa'); await page.selectOption('#fCls', 'A3'); await T.sheet('meta');
    r = await ev(() => ({ name: S.meta.name, cls: S.meta.cls, top: $('cName').textContent, sub: $('cSub').textContent, my: myDB().length }));
    ok(r.name === 'Kruhy u lesa' && r.cls === 'A3' && /Kruhy u lesa/.test(r.top) && /^A3/.test(r.sub) && r.my === 0, 'přejmenování bez uložení: ' + JSON.stringify(r));
    /* Uložit bez trasy: otázka, pak okno a uložení rozmístění */
    await page.click('#saveBtn'); await page.waitForTimeout(150);
    ok(/Uložit jen rozmístění\?/.test(await page.textContent('#sheet')), 'chybí otázka Uložit jen rozmístění?');
    await T.sheet('ok');
    r = await ev(() => ({ name: $('fName').value, sel: [$('fName').selectionStart, $('fName').selectionEnd], hint: /jen rozmístění/.test($('sheet').textContent) }));
    ok(r.name === 'Kruhy u lesa' && r.sel[0] === 0 && r.sel[1] === r.name.length && r.hint, 'předvyplněný název se má označit: ' + JSON.stringify(r));
    await T.sheet('new');
    r = await ev(() => { const c = myDB()[0]; return c && { n: myDB().length, name: c.name, cls: c.cls, obs: c.obs.length, route: c.route.length, id: S.meta.id === c.id, dirty: S.meta.dirty, toast: $('toast').textContent }; });
    ok(r && r.n === 1 && r.name === 'Kruhy u lesa' && r.cls === 'A3' && r.obs === 2 && r.route === 0 && r.id && !r.dirty && /Rozmístění uloženo/.test(r.toast), 'rozmístění se neuložilo: ' + JSON.stringify(r));
    /* nový parkur s výchozím názvem: pole prázdné, uloží se jako Můj parkur */
    await page.click('#newBtn'); await T.sheet('ok');
    await ev(() => { S.obs = [{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }]; touch(); render(); });
    await page.click('#saveBtn'); await T.sheet('ok');
    ok(await ev(() => $('fName').value === ''), 'výchozí název Nový parkur se předvyplnil');
    await T.sheet('new');
    ok(await ev(() => myDB().length === 2 && myDB()[1].name === 'Můj parkur'), 'prázdný název se neuložil jako Můj parkur');
    /* uložený parkur bez trasy jde znovu otevřít */
    await ev(() => { loadCourse(findCourse(myDB()[0].id), true); });
    ok(await ev(() => S.meta.name === 'Kruhy u lesa' && S.obs.length === 2 && S.route.length === 0 && /2 na ploše · trasa 0/.test($('specs').textContent)), 'parkur bez trasy se neotevřel');
    await ev(() => { mySave([]); });
    const miss = await missEn(['Uložit jen rozmístění?', 'Parkur zatím nemá trasu. Uložíš rozmístění překážek a trasu doplníš později v režimu Trasa.', 'Uložit rozmístění', 'Na ploše zatím nic není. Polož překážky v režimu Stavba.',
      'Název, třída a autor', 'Parkur zatím nemá trasu, uloží se jen rozmístění překážek.', 'Název parkuru', 'Použít', 'Název, třída a autor upraveny', 'Rozmístění uloženo do Moje']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await step('Zpět a Znovu', async () => {
    await fresh();
    await setCourse([{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }, { id: 2, type: 'tunnel', x: 15, y: 10, rot: 0, len: 5 }], [1, 2]);
    const snap = () => ev(() => JSON.stringify([S.obs, S.route]));
    const s0 = await snap();
    ok(await ev(() => $('undoAll').disabled && $('redoAll').disabled), 'Zpět a Znovu mají být po načtení neaktivní');
    await T.tapField(25, 15); const s1 = await snap();               /* položení skoku */
    await ev(() => { const o = getO(1); o.x = 7; touch(); render(); }); const s2 = await snap();   /* přesun */
    await ev(() => { sel = 2; rotBy(15); }); const s3 = await snap();  /* otočení tunelu */
    await page.click('#undoAll');
    ok((await snap()) === s2 && /^Vráceno: otočení tunelu$/.test(await page.textContent('#toast')) && !(await ev(() => $('redoAll').disabled)), 'Zpět: ' + await page.textContent('#toast'));
    await page.click('#undoAll');
    ok((await snap()) === s1 && /^Vráceno: přesun skoku$/.test(await page.textContent('#toast')), 'Zpět přesunu: ' + await page.textContent('#toast'));
    await page.click('#redoAll');
    ok((await snap()) === s2 && /^Znovu: přesun skoku$/.test(await page.textContent('#toast')), 'Znovu: ' + await page.textContent('#toast'));
    await page.keyboard.press('Control+Shift+Z');
    ok((await snap()) === s3 && await ev(() => $('redoAll').disabled), 'Ctrl+Shift+Z neprovedl znovu');
    await page.keyboard.press('Control+z'); await page.keyboard.press('Control+z'); await page.keyboard.press('Control+z');
    ok((await snap()) === s0 && /^Vráceno: položení skoku$/.test(await page.textContent('#toast')) && await ev(() => $('undoAll').disabled && !S.meta.dirty), 'Ctrl+Z třikrát nevrátil vše');
    await page.keyboard.press('Control+y');
    ok((await snap()) === s1, 'Ctrl+Y neprovedl znovu');
    /* nová změna po Zpět: Znovu už nejde */
    await page.click('#undoAll'); await ev(() => { getO(1).y = 12; touch(); render(); });
    ok(await ev(() => $('redoAll').disabled && REDO.length === 0), 'po nové změně jde pořád Znovu');
    /* Trasa: Odebrat poslední z trasy */
    await page.click('#mRoute');
    ok((await page.textContent('#undoBtn')).trim() === 'Odebrat poslední z trasy', 'popisek Odebrat poslední z trasy');
    await page.click('#undoBtn'); ok(await ev(() => S.route.join() === '1'), 'Odebrat poslední z trasy');
    /* řádek s režimy a Zpět/Znovu se vejde i na 360 px (popisky režimů nejsou oříznuté) */
    for (const [w, h] of [[360, 740], [390, 844]]) {
      await page.setViewportSize({ width: w, height: h }); await page.waitForTimeout(60);
      const r = await ev(() => { const row = $('modeRow').getBoundingClientRect(), seg = document.querySelector('#modeRow .seg'), els = ['undoAll', 'redoAll', 'toolsBtn'].map(id => $(id).getBoundingClientRect());
        return { inRow: els.every(q => q.left >= row.left - .5 && q.right <= row.right + .5 && q.height >= 44), seg: seg.scrollWidth <= seg.clientWidth + 1, btns: [...seg.querySelectorAll('button')].every(b => b.scrollWidth <= b.clientWidth + 1), order: els[0].right <= els[1].left + 1 }; });
      ok(r.inRow && r.seg && r.btns && r.order, `${w} px: řádek režimů s Zpět a Znovu přetéká: ` + JSON.stringify(r));
    }
    await page.setViewportSize({ width: 390, height: 844 });
    const miss = await missEn(['Odebrat poslední z trasy', 'Znovu provést', 'Zpět a Znovu', 'Vráceno: přesun skoku', 'Znovu: otočení tunelu', 'Vráceno: položení dvojitého skoku', 'Vráceno: smazání překážek', 'Vráceno: velikost plochy', 'Vráceno: přidání do trasy', 'Vráceno: úprava celého parkuru']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    ok(await ev(() => trLookup('Vráceno: přesun skoku') === 'Undone: moving the jump' && trLookup('Znovu: otočení tunelu') === 'Redone: rotating the tunnel'), 'překlad hlášky Zpět: ' + await ev(() => trLookup('Vráceno: přesun skoku')));
  });

  await step('úpravy trasy uprostřed', async () => {
    await fresh();
    const J = (id, x, y) => ({ id, type: 'jump', x, y, rot: 0 });
    await setCourse([J(1, 5, 5), J(2, 12, 5), { id: 3, type: 'tunnel', x: 20, y: 5, rot: 0, len: 5 }, J(4, 30, 5), J(5, 8, 14), J(6, 18, 14), J(7, 28, 14)], [1, 2, 3, 4]);
    await ev(() => { S.turns = [null, 'wL', null, null]; S.sides = ['L', 'P', 'L', 'P']; mode = 'route'; render(); ui(); undoReset(); });
    const st = () => ev(() => ({ r: S.route.join(), t: S.turns.map(t => t || '-').join(), s: S.sides.map(s => s || '-').join() }));
    ok(await ev(() => document.querySelectorAll('#routeList [data-rm]').length === 4), 'u kroků chybí ⋯');
    /* Odebrat z trasy: otočka i strana odejdou s krokem */
    await page.click('#routeList [data-rm="1"]'); await page.waitForTimeout(100);
    ok(/Krok č\. 2: skok/.test(await page.textContent('#sheet h3')), 'okno kroku: ' + await page.textContent('#sheet h3'));
    await page.click('#sheet [data-ra="del"]'); await page.waitForTimeout(80);
    let r = await st(); ok(r.r === '1,3,4' && r.t === '-,-,-' && r.s === 'L,L,P', 'odebrání kroku: ' + JSON.stringify(r));
    /* Vložit za krok 1: dvě klepnutí na plochu se vloží za něj */
    await page.click('#routeList [data-rm="0"]'); await page.click('#sheet [data-ra="ins"]'); await page.waitForTimeout(80);
    ok(await ev(() => mode === 'route' && RTE && RTE.k === 'ins' && $('undoBtn').textContent === 'Ukončit vkládání' && /Vkládáš za krok č\. 1/.test($('hint').textContent)), 'vkládání nezačalo');
    await T.tapField(8, 14); await page.waitForTimeout(420); await T.tapField(18, 14);
    r = await st(); ok(r.r === '1,5,6,3,4' && r.t === '-,-,-,-,-' && r.s === 'L,-,-,L,P', 'vložení za krok 1: ' + JSON.stringify(r));
    ok(await ev(() => /Vkládáš za krok č\. 3/.test($('hint').textContent) && document.querySelectorAll('#routeList li.rte').length === 1 && [...document.querySelectorAll('#routeList li')].indexOf(document.querySelector('#routeList li.rte')) === 2), 'zvýraznění kroku, za který se vkládá');
    await page.click('#undoBtn');
    ok(await ev(() => !RTE && $('undoBtn').textContent === 'Odebrat poslední z trasy' && S.route.join() === '1,5,6,3,4'), 'Ukončit vkládání');
    /* Nahradit krok 3 (skok č. 6) skokem 7 */
    await page.click('#routeList [data-rm="2"]'); await page.click('#sheet [data-ra="rep"]'); await page.waitForTimeout(80);
    await T.tapField(28, 14);
    r = await st(); ok(r.r === '1,5,7,3,4' && await ev(() => !RTE && /Krok č\. 3 nahrazen: skok/.test($('toast').textContent)), 'nahrazení kroku: ' + JSON.stringify(r));
    /* nahrazení skoku s otočkou tunelem: otočka u tunelu neplatí */
    await ev(() => { S.turns[1] = 'wL'; render(); });
    await page.click('#routeList [data-rm="1"]'); await page.click('#sheet [data-ra="rep"]'); await page.waitForTimeout(80);
    await T.tapField(20, 5);
    r = await st(); ok(r.r === '1,3,7,3,4' && r.t === '-,-,-,-,-', 'otočka zůstala u tunelu: ' + JSON.stringify(r));
    /* zadní strana nesmí zůstat u prvního kroku */
    await ev(() => { S.turns[2] = 'bL'; render(); });
    await page.click('#routeList [data-rm="1"]'); await page.click('#sheet [data-ra="del"]'); await page.click('#routeList [data-rm="0"]'); await page.click('#sheet [data-ra="del"]'); await page.waitForTimeout(80);
    r = await st(); ok(r.r === '7,3,4' && r.t === '-,-,-', 'zadní strana u prvního kroku: ' + JSON.stringify(r));
    /* dvojité ťuknutí na stejnou překážku přidá jen jeden krok, další ťuknutí po 0,4 s ano */
    await ev(() => { $('toast').hidden = true; $('wrap').scrollIntoView({ block: 'center' }); });
    const p = await px(5, 5);
    await page.mouse.click(p.x, p.y); await page.mouse.click(p.x, p.y);
    ok(await ev(() => S.route.join()) === '7,3,4,1', 'dvojité ťuknutí přidalo krok dvakrát: ' + await ev(() => S.route.join()));
    await page.waitForTimeout(450); await page.mouse.click(p.x, p.y);
    ok(await ev(() => S.route.join()) === '7,3,4,1,1', 'ťuknutí po 0,45 s se nepřidalo');
    /* Zpět vrátí poslední úpravu; v Prohlížet ⋯ nejsou */
    await page.click('#undoAll'); ok(await ev(() => S.route.join()) === '7,3,4,1', 'Zpět po úpravě trasy');
    await page.click('#mView'); ok(await ev(() => !document.querySelector('#routeList [data-rm]')), 'v Prohlížet má trasa ⋯');
    const miss = await missEn(['Odebrat z trasy', 'Vložit za', 'Nahradit', 'Ukončit vkládání', 'Zrušit nahrazení', 'Krok č. 2: skok', 'Krok č. 2: upravit', 'Krok č. 3 nahrazen: tunel', 'Krok č. 5 odebrán z trasy',
      'Překážka zůstane na ploše, z pořadí zmizí. Další kroky se přečíslují.', 'Další klepnutí na překážky na ploše je vloží za tento krok.', 'Další klepnutí na překážku nahradí tento krok.', 'Klepnutí na plochu zase přidávají na konec trasy.',
      'Vkládáš za krok č. 3: klepej na překážky, přidají se za něj. Vkládání ukončíš tlačítkem Ukončit vkládání.', 'Vkládáš na začátek trasy: klepej na překážky. Vkládání ukončíš tlačítkem Ukončit vkládání.',
      'Klepni na překážku, která nahradí krok č. 4. Nahrazení zrušíš tlačítkem Zrušit nahrazení.', 'Klepej na překážky, vloží se za krok č. 2', 'Klepni na překážku, která nahradí krok č. 2']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await step('změna plochy s překážkami mimo', async () => {
    await fresh();
    await setCourse([{ id: 1, type: 'jump', x: 5, y: 5, rot: 0 }, { id: 2, type: 'jump', x: 11, y: 5, rot: 0 }, { id: 3, type: 'dogwalk', x: 30, y: 15, rot: 0 }, { id: 4, type: 'jump', x: 36, y: 3, rot: 90 }], [1, 2, 3, 4]);
    await ev(() => { S.marks = [{ t: 'warn', x: 35, y: 18 }]; S.hp = [[2, 2], [38, 18]]; touch(); undoReset(); });
    const snap = () => ev(() => JSON.stringify({ W: S.W, H: S.H, obs: S.obs, hp: S.hp, marks: S.marks }));
    const s0 = await snap();
    const inside = () => ev(() => S.obs.every(o => opoly(o).every(q => q.x >= -.05 && q.y >= -.05 && q.x <= S.W + .05 && q.y <= S.H + .05)) && S.marks.every(m => m.x <= S.W && m.y <= S.H) && S.hp.every(p => p[0] <= S.W && p[1] <= S.H));
    /* zmenšení: otázka, nabídka zůstane na původní ploše; Zrušit nic nezmění */
    await page.selectOption('#sizeSelect', '20x15'); await page.waitForTimeout(100);
    let r = await ev(() => ({ open: !$('scrim').hidden, t: $('sheet').textContent, sel: $('sizeSelect').value, acts: [...document.querySelectorAll('#sheet [data-a]')].map(b => b.getAttribute('data-a')).join() }));
    ok(r.open && /Na ploše 20 × 15 m by byly mimo: 2 překážky\./.test(r.t) && r.sel === '40x20' && r.acts === 'in,scale,x', 'otázka při zmenšení plochy: ' + JSON.stringify(r));
    await T.sheet('x'); ok((await snap()) === s0, 'Zrušit změnilo plochu');
    /* Posunout dovnitř: překážky uvnitř zůstanou, kde jsou; Zpět vrátí plochu i polohy */
    await page.selectOption('#sizeSelect', '20x15'); await T.sheet('in');
    r = await ev(() => ({ W: S.W, H: S.H, sel: $('sizeSelect').value, p1: [getO(1).x, getO(1).y], p2: [getO(2).x, getO(2).y], und: UNDO.length }));
    ok(r.W === 20 && r.H === 15 && r.sel === '20x15' && r.p1.join() === '5,5' && r.p2.join() === '11,5' && await inside(), 'Posunout dovnitř: ' + JSON.stringify(r));
    await page.click('#undoAll');
    ok((await snap()) === s0 && await ev(() => $('sizeSelect').value === '40x20'), 'Zpět po posunutí dovnitř nevrátil plochu a polohy');
    /* Zmenšit poměrně: vzdálenosti se zkrátí stejným poměrem (min(20/40, 15/20) = 0,5) */
    await page.selectOption('#sizeSelect', '20x15'); await T.sheet('scale');
    r = await ev(() => ({ W: S.W, d12: Math.hypot(getO(1).x - getO(2).x, getO(1).y - getO(2).y) }));
    ok(r.W === 20 && Math.abs(r.d12 - 3) < .15 && await inside(), 'Zmenšit poměrně: ' + JSON.stringify(r));
    await page.click('#undoAll'); ok((await snap()) === s0, 'Zpět po zmenšení');
    /* zvětšení bez otázky */
    await page.selectOption('#sizeSelect', '40x24'); await page.waitForTimeout(80);
    ok(await ev(() => $('scrim').hidden && S.W === 40 && S.H === 24 && getO(1).x === 5), 'zvětšení plochy se ptá nebo mění polohy');
    const miss = await missEn(['Překážky by byly mimo plochu', 'Na ploše 20 × 15 m by byly mimo: 2 překážky.', 'Na ploše 15 × 10 m by byly mimo: 1 překážka.', 'Posunout dovnitř', 'Zmenšit poměrně',
      'Překážky mimo plochu se posunou ke kraji, ostatní zůstanou, kde jsou.', 'Celý parkur se zmenší, aby se vešel. Rozestupy se úměrně zkrátí, překážky zůstanou stejně velké.']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await step('Hoopers: natočení podle trasy a plochy podle třídy', async () => {
    await fresh();
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('H1')[0], true); mode = 'route'; ui(); render(); $('toast').hidden = true; });
    const gen = await ev(() => S.obs.map(o => o.id + ':' + o.rot).join());
    ok((await page.textContent('#orientAll')).trim() === '⟂ Natočit překážky podle trasy', 'popisek Natočit překážky podle trasy');
    /* parkur z generátoru už je natočený stejně */
    await page.click('#orientAll'); await page.waitForTimeout(80);
    ok(/Překážky už jsou natočené podle trasy/.test(await page.textContent('#toast')) && (await ev(() => S.obs.map(o => o.id + ':' + o.rot).join())) === gen, 'parkur Hoopers z generátoru se natočil jinak');
    /* pootočený oblouk, plůtek a krátký tunel se vrátí čelem k trase, sud se nenatáčí */
    const turned = await ev(() => { const pick = t => S.obs.find(o => o.type === t && S.route.indexOf(o.id) >= 0); const L = ['hoop', 'gate', 'chute', 'barrel'].map(pick).filter(Boolean);
      L.forEach(o => { o.rot = (o.rot + 40) % 360; }); touch(); render(); return L.map(o => o.type); });
    await page.click('#orientAll'); await page.waitForTimeout(80);
    const nTurn = turned.filter(t => t !== 'barrel').length, barrel = turned.indexOf('barrel') >= 0;
    const after = await ev(() => S.obs.map(o => o.id + ':' + o.rot).join()), tt = await page.textContent('#toast');
    const back = await ev(g => { const want = {}; g.split(',').forEach(x => { const p = x.split(':'); want[p[0]] = +p[1]; });
      return S.obs.filter(o => o.type !== 'barrel').every(o => { const d = ((o.rot - want[o.id]) % 360 + 360) % 360; return d <= 1.5 || d >= 358.5; }); }, gen);
    ok(nTurn >= 2 && back && new RegExp('Natočeno překážek: ' + nTurn + '$').test(tt), 'natočení Hoopers podle trasy: ' + JSON.stringify({ turned, tt, after, gen }));
    if (barrel) ok(await ev(g => { const b = S.obs.find(o => o.type === 'barrel' && S.route.indexOf(o.id) >= 0); const w = +g.split(',').find(x => x.split(':')[0] === String(b.id)).split(':')[1]; return b.rot === (w + 40) % 360; }, gen), 'sud se natočil');
    /* jedna překážka (⟂ trasa) ve Stavbě: plůtek napříč jako v generátoru */
    const gate = await ev(() => { const g = S.obs.find(o => o.type === 'gate' && S.route.indexOf(o.id) >= 0); if (!g) return null; const r0 = g.rot; g.rot = (g.rot + 70) % 360; mode = 'build'; sel = g.id; SELNEW = false; render(); ui(); return { id: g.id, r0 }; });
    if (gate) { await page.click('#rotP'); ok(await ev(gt => { const d = ((getO(gt.id).rot - gt.r0) % 360 + 360) % 360; return d <= 1.5 || d >= 358.5; }, gate), 'plůtek ⟂ trasa: ' + await ev(gt => getO(gt.id).rot, gate) + ' / ' + gate.r0); }
    /* plochy podle třídy v nabídce velikosti */
    ok(await ev(() => [...$('sizeSelect').options].slice(0, 3).map(o => o.textContent).join('|') === 'Hoopers H1 30 × 30 m|Hoopers H2 36 × 30 m|Hoopers H3 40 × 32 m'), 'plochy Hoopers v nabídce velikosti');
    await ev(() => setSport('agility', true));
    ok(!(await missEn(['⟂ Natočit překážky podle trasy', 'Překážky už jsou natočené podle trasy'])).length, 'chybí anglický překlad natočení');
  });

  await T.ctx.close();
  return T.errs;
};
