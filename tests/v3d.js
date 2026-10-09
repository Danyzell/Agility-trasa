/* 3D animace techniky ve Videích: každé téma s animací připojí plátno WebGL (nebo zůstane 2D, když scéna ve 3D není),
   po odchodu se 3D uvolní; bez WebGL, při chybě stažení nebo ztrátě kontextu grafiky zůstane 2D animace (SVG).
   3D parkur Hoopers: překážky, dráha psa a psovod v prostoru psovoda; bez WebGL jednoduchý průlet. */
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
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="video"]');
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
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="video"]'); await wait3(page);
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
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="video"]');
      T.ok(await page.locator('#vidList .b3d').count() === 0, 'štítek 3D bez WebGL');
      await page.click('#vidList [data-top="jump"]'); await page.waitForTimeout(400);
      T.ok(await T.ev(() => !V3D.api && !$('vStage3') && /<g/.test($('vStage').innerHTML)), '2D animace se neukázala');
      T.ok(!asked, 'bez WebGL se zbytečně stahuje v3d.js');
      /* Hoopers bez WebGL: jednoduchý průlet (oblouky čarami, sud, plůtek, krátký tunel a prostor psovoda plochami) nespadne */
      T.step('Hoopers bez WebGL');
      await T.ev(() => { stopVid(); closeSheet(); setSport('hoopers', true); S.meta.dirty = false; loadCourse(listFor('H2')[0], true); show('plan'); mode = 'view'; ui(); render(); $('toast').hidden = true; open3d(true); });
      await page.waitForTimeout(700);
      const h = await T.ev(() => { const n = t => S.obs.filter(o => o.type === t).length;
        return { ov: !$('ov3d').hidden, gl: !!C3.api, c2d: !$('c3d').hidden, d: V3.d, prims: V3.prims.length, want: 2 + 11 * n('barrel') + n('gate') + 8 * n('chute') + n('ha'), len: V3.path.len, n: S.route.length, info: $('p3info').textContent }; });
      T.ok(h.ov && !h.gl && h.c2d && h.d > 0 && h.prims === h.want && h.len > 50 && h.info.indexOf('Překážka ') === 0 && h.info.indexOf(' z ' + h.n + ' · ') > 0, 'Hoopers bez WebGL: ' + JSON.stringify(h));
      await T.ev(() => close3d());
      T.ok(!asked, 'bez WebGL se u Hoopers stahuje v3d.js');
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
      await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="video"]'); await page.click('#vidList [data-top="tunnel"]'); await wait3(page); await page.waitForTimeout(200);
      T.ok(await T.ev(() => !V3D.api && V3D.fail && $('vStage').style.display !== 'none' && /<path/.test($('vStage').innerHTML)), '2D animace se po chybě nestažení neukázala');
    } catch (e) { T.fail(e); }
    errs.push(...T.errs.filter(e => !/v3d\.js|Failed to fetch dynamically imported module|net::ERR_FAILED/.test(e))); await T.ctx.close();
  }
  /* 4) Hoopers ve 3D: oblouk, sud, plůtek, krátký tunel a prostor psovoda s psovodem. Pes bez skoků proběhne oblouky a krátkým tunelem
     středem ve směru překážky, sud oběhne, plůtek mine podél sítě (ne skrz); psovod zůstane v prostoru psovoda čelem ke psovi. */
  {
    const T = await phone(browser); const { page } = T; page.setDefaultTimeout(30000);
    await offline(T.ctx, { get_catalog: { version: 0 } });
    try {
      T.step('Hoopers 3D'); await page.goto(base + '/#plan'); await page.waitForTimeout(300);
      const id = await T.ev(() => { closeSheet(); setSport('hoopers', true); S.meta.dirty = false;
        const c = ['H1', 'H2', 'H3'].map(listFor).flat().find(c => ['hoop', 'barrel', 'gate', 'chute'].every(t => c.route.some(id => c.obs.find(o => o.id === id).type === t)) && c.obs.some(o => o.type === 'ha'));
        if (c) { loadCourse(c, true); mode = 'view'; ui(); render(); } $('toast').hidden = true; return c && c.id; });
      T.ok(!!id, 'v knihovně Hoopers chybí parkur se všemi pěti druhy');
      await T.ev(() => open3d(false));
      await page.waitForFunction(() => C3.api, null, { timeout: 30000 }); await page.waitForTimeout(200);
      const r = await T.ev(() => {
        const a = C3.api, by = {}, want = {}, bad = [];
        a.scene.children.forEach(o => { if (/^(hoop|barrel|gate|chute|ha)$/.test(o.name)) { let n = 0; o.traverse(m => { if (m.isMesh) n++; }); (by[o.name] = by[o.name] || []).push(n); } });
        S.obs.forEach(o => { want[o.type] = (want[o.type] || 0) + 1; });
        const meshes = Object.keys(want).length === 5 && Object.keys(want).every(t => by[t] && by[t].length === want[t] && by[t].every(n => n > 0));
        /* dráha psa po 5 cm; u každé překážky v trase nejbližší bod a směr běhu v něm vůči natočení překážky */
        const pts = []; for (let d = 0; d <= a.length; d += .05) { const p = a.at(d), q = a.at(d + .05); pts.push({ x: p.x, z: p.z, h: p.h, air: p.air, dx: q.x - p.x, dz: q.z - p.z }); }
        S.route.forEach((rid, i) => {
          const o = getO(rid), A = o.rot * Math.PI / 180, ux = Math.cos(A), uz = Math.sin(A); let best = null;
          pts.forEach(p => { const dd = Math.hypot(p.x - o.x, p.z - o.y); if (!best || dd < best.d) best = { d: dd, p }; });
          const along = Math.abs((best.p.dx * ux + best.p.dz * uz) / (Math.hypot(best.p.dx, best.p.dz) || 1));
          if ((o.type === 'hoop' || o.type === 'chute') && (best.d > .15 || along < .9)) bad.push(`${i + 1} ${o.type}: ${best.d.toFixed(2)} m od středu, směr ${along.toFixed(2)}`);
          if (o.type === 'barrel' && best.d < .6) bad.push(`${i + 1} sud: pes ${best.d.toFixed(2)} m od středu`);
          /* plůtek: síť leží napříč natočení (±0,55 m po ose y plánu) */
          if (o.type === 'gate') {
            let mg = 9; pts.forEach(p => { const lx = (p.x - o.x) * ux + (p.z - o.y) * uz, ly = -(p.x - o.x) * uz + (p.z - o.y) * ux; mg = Math.min(mg, Math.abs(ly) <= .55 ? Math.abs(lx) : Math.hypot(lx, Math.abs(ly) - .55)); });
            if (mg < .35 || along > .5) bad.push(`${i + 1} plůtek: ${mg.toFixed(2)} m od sítě, směr napříč ${along.toFixed(2)}`);
          }
        });
        const jumps = pts.some(p => p.h > .001 || p.air > 0);
        /* psovod: celý běh v prostoru psovoda 2 × 2 m (střed těla nejvýš 0,75 m od středu) a čelem ke psovi */
        const ha = S.obs.find(o => o.type === 'ha'), H = a.hand, B = (ha.rot || 0) * Math.PI / 180; let out = 0, back = 0, n = 0;
        if (H) for (let d = 0; d <= a.length; d += 1) {
          const p = a.pose(d), dx = H.position.x - ha.x, dz = H.position.z - ha.y; n++;
          if (Math.abs(dx * Math.cos(B) + dz * Math.sin(B)) > .75 || Math.abs(-dx * Math.sin(B) + dz * Math.cos(B)) > .75) out++;
          const tx = p.x - H.position.x, tz = p.z - H.position.z;
          if ((Math.cos(H.rotation.y) * tx - Math.sin(H.rotation.y) * tz) / (Math.hypot(tx, tz) || 1) < .97) back++;
        }
        return { meshes, by, want, len: a.length, course: calc().total, bad, jumps, hand: !!H, n, out, back };
      });
      T.ok(r.meshes, 've 3D chybí sítě překážek Hoopers: ' + JSON.stringify({ by: r.by, want: r.want }));
      T.ok(r.len > r.course * .9 && r.len < r.course * 1.6, `délka dráhy psa ${r.len.toFixed(1)} m nesedí k délce parkuru ${r.course.toFixed(1)} m`);
      T.ok(!r.bad.length, 'dráha psa u překážek: ' + r.bad.join('; '));
      T.ok(!r.jumps, 'pes v Hoopers skáče nebo leze');
      T.ok(r.hand && r.n > 20 && !r.out && !r.back, 'psovod: ' + JSON.stringify({ hand: r.hand, n: r.n, mimo: r.out, zady: r.back }));
      /* všechny pohledy se vykreslí bez chyb; bez prostoru psovoda žádný psovod (jako u agility) */
      for (const v of ['orbit', 'dog', 'chase', 'top']) await T.ev(v => { p3setView(v); V3.d = C3.api.length / 3; render3d(); }, v);
      await T.ev(() => close3d());
      await T.ev(() => { delIds(S.obs.filter(o => o.type === 'ha').map(o => o.id)); open3d(false); });
      await page.waitForFunction(() => C3.api, null, { timeout: 30000 });
      T.ok(await T.ev(() => C3.api.hand === null && C3.api.length > 50), 'bez prostoru psovoda se ukázal psovod');
      await T.ev(() => close3d());
    } catch (e) { T.fail(e); }
    errs.push(...T.errs); await T.ctx.close();
  }
  return errs;
};
