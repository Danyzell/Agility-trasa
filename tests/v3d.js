/* 3D animace techniky ve Videích: každé téma s animací připojí plátno WebGL (nebo zůstane 2D, když scéna ve 3D není),
   po odchodu se 3D uvolní; bez WebGL, při chybě stažení nebo ztrátě kontextu grafiky zůstane 2D animace (SVG). */
const { phone, offline } = require('./helpers');

const wait3 = page => page.waitForFunction(() => V3D.api || V3D.fail || !V3D.gl, null, { timeout: 30000 });

module.exports = async function ({ browser, base }) {
  const errs = [];
  /* 1) s WebGL: všechna témata */
  {
    const T = await phone(browser); const { page } = T; page.setDefaultTimeout(30000);
    await offline(T.ctx, { get_catalog: { version: 0 } });
    try {
      T.step('start'); await page.goto(base + '/'); await page.waitForTimeout(300);
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="learn"]'); await page.click('#moreTabs [data-m="video"]');
      const ids = await T.ev(() => TOPICS.filter(t => SC[t.id]).map(t => t.id));
      T.ok(await T.ev(() => V3D.gl), 'prohlížeč v testu nemá WebGL (SwiftShader)');
      T.ok(await page.locator('#vidList .b3d').count() === ids.length, 'u témat s animací chybí štítek 3D');
      let n3 = 0;
      for (const id of ids) {
        T.step('téma ' + id);
        await page.click(`#vidList [data-top="${id}"]`); await wait3(page);
        await page.waitForTimeout(250);
        const st = await T.ev(() => ({ api: !!V3D.api, fail: V3D.fail, cv: !!$('vStage3') && !$('vStage3').hidden, svg: $('vStage').style.display !== 'none', w: $('vStage3') && $('vStage3').width }));
        T.ok(!st.fail, 'přepnulo se na 2D (chyba 3D)');
        if (st.api) {
          n3++; T.ok(st.cv && !st.svg, 'plátno 3D není vidět nebo je vidět i 2D');
          T.ok(st.w > 300, 'plátno 3D nemá velikost');
          /* pauza, posun, rychlost a znovu přehrát – bez chyb */
          await page.click('#vPlay'); await T.ev(() => { VID.pos = .5; frameVid(); }); await page.click('#vSpd [data-s=".5"]'); await page.click('#vRe');
          await page.waitForTimeout(200);
        } else T.ok(st.svg, 'není vidět ani 2D animace');
        const lost = await T.ev(() => { window.__cv = $('vStage3'); return 1; });
        await page.click('[data-vback]'); await page.waitForTimeout(100);
        T.ok(await T.ev(() => V3D.api === null && !$('vStage3') && !VID.on), 'po odchodu z tématu zůstala 3D animace');
        if (st.api) T.ok(await T.ev(() => { const g = __cv.getContext('webgl2') || __cv.getContext('webgl'); return !g || g.isContextLost(); }), 'kontext WebGL se po odchodu neuvolnil');
      }
      T.step('souhrn'); T.ok(n3 >= 8, `3D se připojilo jen u ${n3} témat (čekám aspoň 8 překážek)`);
      /* odchod na jinou záložku uvolní 3D */
      T.step('jiná záložka');
      await page.click(`#vidList [data-top="jump"]`); await wait3(page);
      await page.click('.nav [data-v="plan"]'); await page.waitForTimeout(100);
      T.ok(await T.ev(() => V3D.api === null), 'po přepnutí záložky zůstala 3D animace');
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="learn"]'); await page.click('#moreTabs [data-m="video"]'); await wait3(page);
      T.ok(await T.ev(() => !!V3D.api), 'po návratu do Videí se 3D znovu nepřipojilo');
      /* skrytá stránka zastaví přehrávání */
      T.step('skrytá stránka');
      await T.ev(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' }); document.dispatchEvent(new Event('visibilitychange')); });
      T.ok(await T.ev(() => !VID.on), 'animace běží i ve skryté stránce');
      await T.ev(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' }); document.dispatchEvent(new Event('visibilitychange')); });
      T.ok(await T.ev(() => VID.on), 'po návratu se animace nerozběhla');
      /* ztráta kontextu grafiky → 2D */
      T.step('ztráta kontextu');
      await T.ev(() => { const c = $('vStage3'), g = c.getContext('webgl2') || c.getContext('webgl'); g.getExtension('WEBGL_lose_context').loseContext(); });
      await page.waitForTimeout(200);
      T.ok(await T.ev(() => V3D.api === null && V3D.fail && $('vStage').style.display !== 'none' && $('vStage').innerHTML.length > 0), 'po ztrátě kontextu se neukázala 2D animace');
    } catch (e) { T.fail(e); }
    errs.push(...T.errs); await T.ctx.close();
  }
  /* 2) bez WebGL: 2D animace, bez štítku 3D */
  {
    const T = await phone(browser); const { page } = T;
    await offline(T.ctx, { get_catalog: { version: 0 } });
    await T.ctx.addInitScript(() => { const g = HTMLCanvasElement.prototype.getContext; HTMLCanvasElement.prototype.getContext = function (k) { return /webgl/i.test(k) ? null : g.apply(this, arguments); }; });
    let asked = false; page.on('request', r => { if (/v3d\.js/.test(r.url())) asked = true; });
    try {
      T.step('bez WebGL'); await page.goto(base + '/'); await page.waitForTimeout(300);
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="learn"]'); await page.click('#moreTabs [data-m="video"]');
      T.ok(await page.locator('#vidList .b3d').count() === 0, 'štítek 3D bez WebGL');
      await page.click('#vidList [data-top="jump"]'); await page.waitForTimeout(400);
      T.ok(await T.ev(() => !V3D.api && !$('vStage3') && /<g/.test($('vStage').innerHTML)), '2D animace se neukázala');
      T.ok(!asked, 'bez WebGL se zbytečně stahuje v3d.js');
    } catch (e) { T.fail(e); }
    errs.push(...T.errs); await T.ctx.close();
  }
  /* 3) v3d.js se nestáhne (offline bez uložené verze) → 2D */
  {
    const T = await phone(browser); const { page } = T;
    await offline(T.ctx, { get_catalog: { version: 0 } });
    await T.ctx.route(/v3d\/v3d\.js/, r => r.abort());
    try {
      T.step('chyba stažení'); await page.goto(base + '/'); await page.waitForTimeout(300);
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="learn"]'); await page.click('#moreTabs [data-m="video"]'); await page.click('#vidList [data-top="tunnel"]'); await wait3(page); await page.waitForTimeout(200);
      T.ok(await T.ev(() => !V3D.api && V3D.fail && $('vStage').style.display !== 'none' && /<path/.test($('vStage').innerHTML)), '2D animace se po chybě nestažení neukázala');
    } catch (e) { T.fail(e); }
    errs.push(...T.errs.filter(e => !/v3d\.js|Failed to fetch dynamically imported module|net::ERR_FAILED/.test(e))); await T.ctx.close();
  }
  return errs;
};
