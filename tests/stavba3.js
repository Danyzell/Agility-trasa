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

  await T.ctx.close();
  return T.errs;
};
