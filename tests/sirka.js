/* Telefon na šířku a plocha přes celou obrazovku: spodní lišta jako boční pruh, Plán s plochou přes celou výšku vlevo
   a ovládáním vpravo (plocha se při výběru nehýbe, panel výběru nezakryje paletu), Běh se stopkami a STARTem bez posouvání,
   přiblížení 100 % na šířku a zpět po otočení, tlačítko Plocha přes celou obrazovku na výšku i na šířku. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { viewport: { width: 844, height: 390 }, isMobile: true }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  await T.ctx.addInitScript(() => { try { if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('2.7')); } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await page.waitForTimeout(400); await ev(() => { $('toast').hidden = true; }); };
  const rect = s => ev(q => { const e = document.querySelector(q); if (!e) return null; const r = e.getBoundingClientRect(); return { l: r.left, t: r.top, r: r.right, b: r.bottom, w: r.width, h: r.height }; }, s);
  const plan = () => ev(() => { loadCourse(listFor('A2')[2], true); show('plan'); mode = 'build'; sel = null; ui(); render(); window.scrollTo(0, 0); $('toast').hidden = true; });

  for (const [W, H] of [[844, 390], [740, 360]]) {
    await step(`Stavba na šířku ${W}×${H}`, async () => {
      await page.setViewportSize({ width: W, height: H }); await fresh(); await plan(); await page.waitForTimeout(300);
      const nav = await rect('.nav'), wrap = await rect('#wrap'), svg = await rect('#field'), pal = await rect('#palette'), ttl = await rect('#titleBtn');
      ok(nav.w < 100 && nav.h > H * 0.8 && nav.l < 30, 'spodní lišta má být na šířku boční pruh vlevo: ' + JSON.stringify(nav));
      ok(wrap.l >= nav.r && wrap.t >= 0 && wrap.b <= H && wrap.h >= H * 0.7, 'plocha má být vedle pruhu přes skoro celou výšku: ' + JSON.stringify(wrap));
      ok(await ev(() => zoom) === 1 && svg.w <= wrap.w + 1 && svg.h <= wrap.h + 1, 'celá plocha se má vejít při 100 %: ' + JSON.stringify(svg));
      ok(pal.l >= wrap.r && pal.b <= H && ttl.l >= wrap.r && ttl.t < 60, 'paleta a název parkuru mají být v pravém sloupci nahoře: ' + JSON.stringify([pal, ttl]));
      ok(await ev(() => document.documentElement.scrollWidth <= innerWidth), 'stránka přetéká do strany');
      /* výběr překážky: panel vpravo dole, plocha se nehne a paleta zůstane vidět */
      const pt = await ev(() => { const r = document.querySelector('#obs .ob').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
      await page.touchscreen.tap(pt.x, pt.y); await page.waitForTimeout(600);
      const sr = await rect('#selRow'), wrap2 = await rect('#wrap'), pal2 = await rect('#palette');
      ok(await ev(() => sel != null && !$('selRow').hidden), 'klepnutí na překážku ji má vybrat');
      ok(sr && sr.l >= wrap.r && sr.b <= H && pal2.b <= sr.t, 'panel výběru má být vpravo dole a nezakrýt paletu: ' + JSON.stringify([sr, pal2]));
      ok(JSON.stringify(wrap) === JSON.stringify(wrap2), 'plocha se při výběru pohnula');
      /* Trasa: nástroje trasy jsou vidět bez posouvání */
      await ev(() => { mode = 'route'; sel = null; ui(); render(); window.scrollTo(0, 0); });
      const rt = await rect('#routeTools');
      ok(rt && rt.t < H && rt.l >= wrap.r, 'nástroje trasy mají být vidět vpravo: ' + JSON.stringify(rt));
      /* okno Uložit se vejde na výšku */
      await ev(() => { mode = 'build'; ui(); $('saveBtn').click(); });
      await page.waitForFunction(() => !$('scrim').hidden && getComputedStyle($('sheet')).transform === 'none', null, { timeout: 3000 }).catch(() => {});
      const sh = await rect('#sheet');
      ok(sh && sh.t >= 0 && sh.b <= H + 1, 'okno Uložit se nevejde na výšku obrazovky: ' + JSON.stringify(sh));
      await ev(() => closeSheet());
    });

    await step(`Běh na šířku ${W}×${H}`, async () => {
      await ev(() => { show('run'); window.scrollTo(0, 0); }); await page.waitForTimeout(300);
      const sb = await rect('#startBtn'), cl = await rect('#clock'), nav = await rect('.nav');
      ok(sb.t >= 0 && sb.b <= H && sb.l >= nav.r, 'START má být vidět bez posouvání: ' + JSON.stringify(sb));
      ok(cl.t >= 0 && cl.b <= H, 'stopky mají být vidět: ' + JSON.stringify(cl));
    });

    await step(`Domů, Parkury a Více na šířku ${W}×${H}`, async () => {
      for (const v of ['home', 'lib', 'more']) {
        await ev(x => { show(x); }, v); await page.waitForTimeout(250);
        const r = await ev(() => { const n = document.querySelector('.nav').getBoundingClientRect(), m = document.querySelector('main').getBoundingClientRect(); return { nav: n.right, main: m.left, sw: document.documentElement.scrollWidth, iw: innerWidth }; });
        ok(r.main >= r.nav - 1 && r.sw <= r.iw, v + ': obsah nemá zajet pod boční pruh ani přetékat do strany: ' + JSON.stringify(r));
      }
    });
  }

  await step('otočení: přiblížení na šířku 100 %, na výšku zpátky', async () => {
    await page.setViewportSize({ width: 390, height: 844 }); await fresh(); await plan();
    await ev(() => { zoom = 2; ui(); });
    await page.setViewportSize({ width: 844, height: 390 }); await page.waitForTimeout(300);
    const z1 = await ev(() => zoom);
    await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(300);
    const z2 = await ev(() => zoom);
    ok(z1 === 1 && z2 === 2, 'přiblížení po otočení: ' + z1 + ' / ' + z2);
    const nav = await rect('.nav');
    ok(nav.w > 300 && nav.b > 780, 'na výšku má být lišta zase dole: ' + JSON.stringify(nav));
  });

  await step('plocha přes celou obrazovku na výšku', async () => {
    await ev(() => { localStorage.removeItem('agility-fullhint-v1'); zoom = 2; ui(); });
    await page.click('#fullBtn'); await page.waitForTimeout(400);
    const r = await ev(() => ({ on: document.body.classList.contains('fullfield'), pr: $('fullBtn').getAttribute('aria-pressed'), nav: getComputedStyle(document.querySelector('.nav')).display, top: getComputedStyle(document.querySelector('.top')).display, zoom: zoom, toast: $('toast').hidden ? '' : $('toast').textContent }));
    const wrap = await rect('#wrap'), pal = await rect('#palette');
    ok(r.on && r.pr === 'true' && r.nav === 'none' && r.top === 'none', 'celá obrazovka má schovat horní a spodní lištu: ' + JSON.stringify(r));
    ok(wrap.b <= 844 && wrap.h > 500 && pal.t >= 0 && pal.b <= wrap.t, 'plocha má vyplnit zbytek výšky pod paletou: ' + JSON.stringify([wrap, pal]));
    ok(r.zoom > 2, 'na výšku má plocha vyplnit výšku (větší přiblížení): ' + r.zoom);
    ok(/šířku/.test(r.toast), 'chybí rada otočit telefon: ' + r.toast);
    await page.click('#fullBtn'); await page.waitForTimeout(300);
    ok(await ev(() => !document.body.classList.contains('fullfield') && zoom === 2 && getComputedStyle(document.querySelector('.nav')).display !== 'none'), 'zavření celé obrazovky má vrátit lišty i přiblížení');
    /* podruhé už bez rady, Escape a přechod jinam celou obrazovku zavřou */
    await ev(() => { $('toast').hidden = true; }); await page.click('#fullBtn'); await page.waitForTimeout(200);
    ok(await ev(() => $('toast').hidden), 'rada otočit telefon se má ukázat jen jednou');
    await page.keyboard.press('Escape'); await page.waitForTimeout(200);
    ok(await ev(() => !document.body.classList.contains('fullfield')), 'Escape má zavřít celou obrazovku');
    await page.click('#fullBtn'); await ev(() => show('lib')); await page.waitForTimeout(200);
    ok(await ev(() => !document.body.classList.contains('fullfield')), 'odchod z Plánu má zavřít celou obrazovku');
  });

  await step('plocha přes celou obrazovku na šířku', async () => {
    await page.setViewportSize({ width: 844, height: 390 }); await plan(); await page.waitForTimeout(200);
    await page.click('#fullBtn'); await page.waitForTimeout(300);
    const box = await rect('.fieldbox'), side = await rect('#modeRow');
    ok(await ev(() => getComputedStyle(document.querySelector('.nav')).display === 'none'), 'na šířku má celá obrazovka schovat boční pruh');
    ok(box.l < 30 && box.r <= side.l && side.t < 100, 'plocha má jít od kraje, ovládání zůstane vpravo: ' + JSON.stringify([box, side]));
    await page.click('#fullBtn');
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Plocha přes celou obrazovku', 'Zavřít celou obrazovku', 'Otoč telefon na šířku a uvidíš celou plochu najednou.'].filter(s => trLookup(s) == null));
    ok(!miss.length, 'chybí překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
