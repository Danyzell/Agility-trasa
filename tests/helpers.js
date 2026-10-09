/* Společné pro testovací sady: kontext telefonu bez přístupu na internet a sběr chyb */
exports.phone = async function (browser, opts) {
  const ctx = await browser.newContext(Object.assign({ viewport: { width: 390, height: 844 }, hasTouch: true, serviceWorkers: 'block' }, opts || {}));
  const page = await ctx.newPage();
  /* Domů: sbalené Výzvy, žebříčky a závody jsou ve starších testech rozbalené (sbalení testuje sada zjednoduseni) */
  /* Domů napoprvé (3.1) je zkrácené; starší testy počítají s celým Domů, tak se tváří jako třetí návštěva (první návštěvu testuje sada prvni) */
  await ctx.addInitScript(() => { try { if (localStorage.getItem('agility-hmmore-v1') == null) localStorage.setItem('agility-hmmore-v1', '1'); if (localStorage.getItem('agility-visits-v1') == null) localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 3, at: Date.now(), test: 1 })); } catch (e) {} });
  page.setDefaultTimeout(5000);
  const errs = [], st = { step: 'start' };
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errs.push(`[${st.step}] konzole: ${m.text()}`); });
  page.on('pageerror', e => errs.push(`[${st.step}] chyba stránky: ${e.message}`));
  page.on('dialog', d => { errs.push(`[${st.step}] nečekaný dialog: ${d.message()}`); d.dismiss(); });
  return {
    ctx, page, errs,
    step(s) { st.step = s; },
    ok(c, msg) { if (!c) errs.push(`[${st.step}] ${msg}`); },
    fail(e) { errs.push(`[${st.step}] výjimka: ${String(e && e.message || e).split('\n')[0]}`); },
    ev: (f, a) => page.evaluate(f, a),
    /* klepnutí na plochu v metrech; toast a posun stránky nesmí klepnutí zakrýt */
    async tapField(x, y) {
      await page.evaluate(() => { document.getElementById('toast').hidden = true; document.getElementById('wrap').scrollIntoView({ block: 'center' }); });
      const b = await page.locator('#field').boundingBox(), W = await page.evaluate(() => S.W), H = await page.evaluate(() => S.H);
      await page.mouse.click(b.x + x / W * b.width, b.y + y / H * b.height); await page.waitForTimeout(60);
    },
    /* nástroj plánu: nabídka Nástroje se nejdřív rozbalí */
    async tool(t) { if (await page.isHidden('#planTools')) await page.click('#toolsBtn'); await page.click(`#planTools [data-t="${t}"]`); },
    async sheet(a) { await page.click(`#sheet [data-a="${a}"]`); await page.waitForTimeout(150); },
  };
};
/* server Supabase se v testech nevolá; odpovědi RPC si sada může podstrčit
   (funkce dostane argumenty volání – rozparsované tělo požadavku; může vrátit i Promise, třeba pro pomalou odpověď) */
exports.offline = async function (ctx, rpc) {
  const body = r => { try { return JSON.parse(r.request().postData() || '{}'); } catch (e) { return {}; } };
  await ctx.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), async r => {
    const m = r.request().url().match(/\/rest\/v1\/rpc\/(\w+)/), h = m && rpc && rpc[m[1]];
    if (h) { const d = await Promise.resolve(typeof h === 'function' ? h(body(r)) : h); return r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(d) }); }
    return r.abort();
  });
};
