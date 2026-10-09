/* Stavba na telefonu 2: panel vybrané překážky plave dole nad lištou (plocha se při výběru nehýbe, nápověda i souhrn drží výšku,
   pojistka proti „click“ téhož klepnutí), tažení prstem překážku přesune a uloží (jde vrátit), přiblížení a 3D nepřekrývají plochu,
   angličtina rozestupů v kontrole FCI a okna otočky se stranou psovoda. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async () => { await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  /* tři skoky a tunel, režim Stavba, nástroj skok */
  const course = () => ev(() => {
    S.meta.dirty = false; planReset();
    S.W = 40; S.H = 20; S.obs = [{ id: 1, type: 'jump', x: 6, y: 6, rot: 0 }, { id: 2, type: 'jump', x: 16, y: 6, rot: 90 }, { id: 3, type: 'jump', x: 26, y: 12, rot: 0 }, { id: 4, type: 'tunnel', x: 14, y: 15, rot: 0, len: 5 }];
    S.route = [1, 2, 3, 4]; S.sides = []; S.turns = []; syncSides(); mode = 'build'; tool = 'jump'; sel = null; zoom = 1; setSizeSel(); drawGrid(); save(); render(); ui(); topbar(); undoReset(); $('toast').hidden = true;
  });
  const rect = (id) => ev(id => { const r = $(id).getBoundingClientRect(); return { x: Math.round(r.left * 10) / 10, y: Math.round(r.top * 10) / 10, w: Math.round(r.width), h: Math.round(r.height), b: Math.round(r.bottom) }; }, id);
  const select = async (id) => { await ev(id => { sel = id; SELNEW = false; ui(); render(); }, id); await page.waitForTimeout(40); };

  await step('výběr nehýbe plochou', async () => {
    await fresh(); await course();
    for (const vw of [390, 360]) {
      await page.setViewportSize({ width: vw, height: vw === 360 ? 740 : 844 });
      for (const sc of [0, 200]) {
        await ev(sc => { sel = null; ui(); render(); window.scrollTo(0, sc); }, sc); await page.waitForTimeout(60);
        const f0 = await rect('field'), hint0 = (await rect('hint')).h, spec0 = (await rect('specs')).h, moves = [];
        for (const id of [1, null, 4, 2, null]) { await select(id); const f = await rect('field'); moves.push([id, f.x - f0.x, f.y - f0.y, (await rect('hint')).h - hint0, (await rect('specs')).h - spec0]); }
        ok(moves.every(m => m[1] === 0 && m[2] === 0), `${vw} px, posun stránky ${sc}: plocha se při výběru hýbe: ` + JSON.stringify(moves));
        ok(moves.every(m => m[3] === 0 && m[4] === 0), `${vw} px: nápověda nebo souhrn mění výšku: ` + JSON.stringify(moves));
      }
      /* nápověda bez nástroje má stejnou výšku jako s nástrojem a s výběrem */
      const h1 = (await rect('hint')).h; await ev(() => { sel = null; tool = null; ui(); }); const h2 = (await rect('hint')).h; await ev(() => { tool = 'jump'; ui(); });
      ok(h1 === h2 && h1 > 30, `${vw} px: nápověda bez nástroje má jinou výšku: ${h1} / ${h2}`);
      /* souhrn drží výšku, i když tlačítko FCI změní šířku („FCI · 5“ → bez trasy jen „FCI“) */
      const s1 = await ev(() => ({ h: Math.round($('specs').getBoundingClientRect().height), f: $('fciBar').textContent, w: Math.round($('fciBar').getBoundingClientRect().width) }));
      await ev(() => { S.route = []; syncSides(); render(); });
      const s2 = await ev(() => { const t = [...document.querySelectorAll('#specs .smini > *')].map(e => e.getBoundingClientRect().top);
        return { h: Math.round($('specs').getBoundingClientRect().height), f: $('fciBar').textContent, w: Math.round($('fciBar').getBoundingClientRect().width), rows2: Math.abs(t[0] - t[1]) < 6 && Math.abs(t[2] - t[3]) < 6 && t[2] - t[0] > 12, txt: $('specs').textContent }; });
      await ev(() => { S.route = [1, 2, 3, 4]; syncSides(); render(); });
      ok(s1.h === s2.h && s1.w !== s2.w && /·/.test(s1.f) && s2.rows2 && /SČP/.test(s2.txt) && /MČP/.test(s2.txt), `${vw} px: souhrn mění výšku podle šířky FCI nebo nemá dva řádky: ` + JSON.stringify([s1, s2]));
      /* skutečné klepnutí na skok: plocha zůstane, panel je dole u okraje (spodní lišta je ve Stavbě schovaná), celý na obrazovce */
      await ev(() => { sel = null; ui(); render(); });
      await T.tapField(16, 6); const f1 = await rect('field'); await page.waitForTimeout(60); const f2 = await rect('field');
      const r = await ev(() => { const s = $('selRow').getBoundingClientRect(), nv = document.querySelector('.nav'); return { sel, hidden: $('selRow').hidden, pos: getComputedStyle($('selRow')).position, top: Math.round(s.top), bottom: Math.round(s.bottom), nav: getComputedStyle(nv).display, inner: innerHeight, pad: getComputedStyle($('v-plan')).paddingBottom }; });
      ok(r.sel === 2 && !r.hidden && r.pos === 'fixed' && r.nav === 'none' && r.bottom <= r.inner && r.bottom >= r.inner - 24 && r.top > 0 && f1.y === f2.y, `${vw} px: panel výběru není plovoucí dole u okraje: ` + JSON.stringify(r));
      ok(parseInt(r.pad) >= 150, `${vw} px: stránka nemá dole místo pro panel: ` + r.pad);
      ok(/zrušíš výběr/.test(await page.textContent('#hint')), 'nápověda s vybranou překážkou');
    }
    await page.setViewportSize({ width: 390, height: 844 });
  });

  await step('panel výběru: otočení, kopie, smazání, tunel', async () => {
    await fresh(); await course();
    await T.tapField(16, 6); ok((await ev(() => sel)) === 2, 'skok č. 2 se nevybral');
    await page.click('#rotR'); ok((await ev(() => getO(2).rot)) === 105, '↻15° z plovoucího panelu');
    await page.click('#rotL'); ok((await ev(() => getO(2).rot)) === 90, '↺15°');
    await ev(() => { const r = $('rot'); r.value = 45; r.dispatchEvent(new Event('input')); r.dispatchEvent(new Event('change')); });
    ok((await ev(() => getO(2).rot)) === 45 && (await page.textContent('#rotLbl')) === '45°', 'posuvník otočení');
    await page.click('#dupBtn'); let r = await ev(() => ({ n: S.obs.length, sel, same: getO(sel).rot === 45 }));
    ok(r.n === 5 && r.sel !== 2 && r.same, 'kopie z panelu: ' + JSON.stringify(r));
    await page.click('#delBtn'); r = await ev(() => ({ n: S.obs.length, sel, hidden: $('selRow').hidden }));
    ok(r.n === 4 && r.sel === null && r.hidden, 'smazání z panelu: ' + JSON.stringify(r));
    ok(await ev(() => !!$('dupBtn').querySelector('svg') && !!$('delBtn').querySelector('svg') && $('delBtn').classList.contains('danger') && $('delBtn').getAttribute('aria-label') === 'Smazat' && $('dupBtn').getAttribute('aria-label') === 'Kopírovat'), 'kopie a koš mají být ikony s popiskem');
    /* tunel: tvar a délka v jednom řádku, u skoku schované */
    await T.tapField(14, 15); ok((await ev(() => sel)) === 4, 'tunel se nevybral');
    ok(await page.isVisible('#tunRow') && await page.isVisible('#bendSel') && await page.isVisible('#lenSel') && await ev(() => $('lenSel').value === '5'), 'u tunelu chybí tvar a délka');
    ok(await ev(() => Math.abs($('bendSel').getBoundingClientRect().top - $('lenSel').getBoundingClientRect().top) < 2), 'tvar a délka tunelu nejsou v jednom řádku');
    await select(1); ok(await page.isHidden('#tunRow') && await page.isHidden('#lenSel'), 'u skoku se tvar tunelu neschoval');
    /* panel je schovaný v Trase a v Prohlížet */
    await page.click('#mRoute'); ok(await page.isHidden('#selRow'), 'panel výběru v režimu Trasa');
    await page.click('#mBuild'); await select(1); ok(await page.isVisible('#selRow'), 'panel po návratu do Stavby');
    ok(await ev(() => trLookup('Vybraná překážka') === 'Selected obstacle'), 'chybí překlad popisku panelu');
  });

  await step('pojistka: click téhož klepnutí netrefí panel', async () => {
    await fresh(); await course();
    /* kde se tlačítka panelu objeví (panel na chvíli ukázat u č. 2) */
    await select(2);
    const spots = await ev(() => ['rotL', 'rotR', 'rotP', 'dupBtn', 'delBtn', 'rot'].map(id => { const r = $(id).getBoundingClientRect(); return { id, x: r.left + r.width / 2, y: r.top + r.height / 2 }; }));
    await ev(() => { sel = null; ui(); render(); });
    /* na 400 % sahá plocha (70 % výšky okna) až pod místo panelu */
    await ev(() => { zoom = 4; ui(); render(); window.scrollTo(0, 0); const w = $('wrap'); w.scrollLeft = 0; w.scrollTop = 0; }); await page.waitForTimeout(100);
    const out = [];
    for (const s of spots) {
      /* výběr překážky pod panelem teď stránku posune, ať překážka není zakrytá (3.2.1); pro další místo se stránka vrátí nahoru */
      const okPos = await ev(({ x, y }) => { window.scrollTo(0, 0); const svg = $('field'), m = svg.getScreenCTM(); if (!m) return false; const p = new DOMPoint(x, y).matrixTransform(m.inverse());
        if (p.x < 1 || p.y < 1 || p.x > S.W - 1 || p.y > S.H - 1) return false; const o = getO(1); o.x = p.x; o.y = p.y; o.rot = 0; sel = null; ui(); render();
        const e = document.elementFromPoint(x, y); return !!(e && e.closest('.ob[data-id="1"]')); }, s);
      if (!okPos) { out.push(s.id + ':mimo'); continue; }
      await page.touchscreen.tap(s.x, s.y); await page.waitForTimeout(150);
      const st = await ev(() => ({ n: S.obs.length, rot: getO(1) ? getO(1).rot : null, sel }));
      out.push(s.id + ':' + (st.n !== 4 ? 'KOPIE/SMAZÁNÍ' : st.rot !== 0 ? 'OTOČENO' : st.sel !== 1 ? 'nevybráno' : 'ok'));
      await page.waitForTimeout(500);
    }
    ok(out.filter(x => !/:(mimo|ok)$/.test(x)).length === 0 && out.filter(x => /:ok$/.test(x)).length >= 3, 'klepnutí na překážku pod místem panelu provedlo akci panelu: ' + out.join(' '));
    /* po pojistce panel klepnutí přijímá */
    ok(await ev(() => getComputedStyle($('delBtn')).pointerEvents === 'auto'), 'panel po 0,45 s nepřijímá klepnutí');
  });

  await step('tažení prstem', async () => {
    await fresh(); await course();
    const cdp = await T.ctx.newCDPSession(page);
    const drag = async (from, to, steps) => {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: from.x, y: from.y, id: 1 }] });
      for (let i = 1; i <= steps; i++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: from.x + (to.x - from.x) * i / steps, y: from.y + (to.y - from.y) * i / steps, id: 1 }] }); await page.waitForTimeout(16); }
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await page.waitForTimeout(150);
    };
    const px = (x, y) => ev(([x, y]) => { const b = $('field').getBoundingClientRect(); return { x: b.left + x / S.W * b.width, y: b.top + y / S.H * b.height }; }, [x, y]);
    await ev(() => { zoom = 2; ui(); render(); const w = $('wrap'); w.scrollLeft = 0; w.scrollTop = w.scrollHeight; w.scrollIntoView({ block: 'center' }); }); await page.waitForTimeout(80);
    const sy0 = await ev(() => scrollY), p = await px(6, 12), q = await px(6, 6);
    /* skok č. 1 postavit na (6,12) (jako uložený, bez historie) a táhnout 6 m nahoru */
    await ev(() => { getO(1).y = 12; render(); S.meta.dirty = false; save(); undoReset(); });
    await drag(p, q, 16);
    const r = await ev(() => ({ o: [getO(1).x, getO(1).y], undo: UNDO.length, btn: !$('undoAll').disabled, stored: JSON.parse(localStorage.getItem('agility-plan-v2')).obs[0].y, sy: scrollY, sel, dirty: S.meta.dirty }));
    ok(Math.abs(r.o[1] - 6) < .6 && Math.abs(r.o[0] - 6) < .6, 'překážka nepřistála, kde prst skončil: ' + JSON.stringify(r));
    ok(r.undo === 1 && r.btn && Math.abs(r.stored - 6) < .6 && r.sy === sy0 && r.sel === 1, 'posun prstem se neuložil, nejde vrátit nebo se posunula stránka: ' + JSON.stringify(r));
    await page.click('#undoAll'); ok((await ev(() => getO(1).y)) === 12, 'Zpět nevrátil posun prstem');
    /* dva prsty: přiblížení, překážka se nehne a nic se nepoloží */
    await ev(() => { zoom = 1; sel = null; ui(); render(); $('wrap').scrollIntoView({ block: 'center' }); }); await page.waitForTimeout(60);
    const c = await px(16, 6), n0 = await ev(() => S.obs.length);
    const pts = d => [{ x: c.x - d / 2, y: c.y, id: 1 }, { x: c.x + d / 2, y: c.y, id: 2 }];
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pts(60) });
    for (let i = 1; i <= 10; i++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pts(60 + 12 * i) }); await page.waitForTimeout(16); }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await page.waitForTimeout(150);
    const z = await ev(() => ({ zoom, n: S.obs.length, o: [getO(2).x, getO(2).y], pinch: PINCH }));
    ok(z.zoom > 1.5 && z.n === n0 && z.o[0] === 16 && z.o[1] === 6 && z.pinch === null, 'dva prsty na překážce mají přiblížit a nic nepohnout: ' + JSON.stringify(z));
    /* jeden prst na volné ploše posouvá plochu (200 %, plocha odrolovaná doprava, prst táhne doprava) */
    await ev(() => { zoom = 2; ui(); render(); const w = $('wrap'); w.scrollLeft = w.scrollWidth; w.scrollTop = 0; w.scrollIntoView({ block: 'center' }); }); await page.waitForTimeout(60);
    const e0 = await px(32, 3), sl0 = await ev(() => $('wrap').scrollLeft);
    await drag(e0, { x: e0.x + 150, y: e0.y }, 12);
    const pan = await ev(() => ({ sl: $('wrap').scrollLeft, n: S.obs.length }));
    ok(sl0 - pan.sl > 60 && pan.n === n0, 'prst na volné ploše má plochu posunout: ' + JSON.stringify([sl0, pan]));
    await cdp.detach();
  });

  await step('přiblížení a 3D mimo plochu', async () => {
    await fresh(); await course();
    await ev(() => { mode = 'view'; zoom = 1; ui(); render(); window.scrollTo(0, 0); });
    const r = await ev(() => { const f = $('field').getBoundingClientRect(), ix = el => { const r = el.getBoundingClientRect(); return Math.max(0, Math.min(f.right, r.right) - Math.max(f.left, r.left)) * Math.max(0, Math.min(f.bottom, r.bottom) - Math.max(f.top, r.top)); };
      const z = document.querySelector('.fieldbox .zoom'), d = $('dimBtn'); return { zoomOv: ix(z), dimOv: ix(d), zoomVis: !!z.offsetParent, dimVis: !d.hidden && !!d.offsetParent, below: z.getBoundingClientRect().top >= f.bottom && d.getBoundingClientRect().top >= f.bottom, dimRight: d.getBoundingClientRect().left > z.getBoundingClientRect().right, lbl: $('zLbl').textContent }; });
    ok(r.zoomOv === 0 && r.dimOv === 0 && r.zoomVis && r.dimVis && r.below && r.dimRight && r.lbl === '100 %', 'přiblížení nebo 3D překrývá plochu: ' + JSON.stringify(r));
    /* čísla trasy v rozích nejsou pod ničím */
    ok(await ev(() => { const cov = ['.fieldbox .zoom', '#dimBtn'].map(s => document.querySelector(s).getBoundingClientRect()); return ![...document.querySelectorAll('#bdg g')].some(g => { const r = g.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2; return cov.some(c => x >= c.left && x <= c.right && y >= c.top && y <= c.bottom); }); }), 'číslo překážky schované pod přiblížením nebo 3D');
    /* klepnutí do pravého horního rohu položí překážku (dřív trefilo +) */
    await page.click('#mBuild');
    for (const z of [1, 2]) {
      await ev(z => { zoom = z; sel = null; tool = 'jump'; ui(); render(); const w = $('wrap'); w.scrollLeft = w.scrollWidth; w.scrollTop = 0; }, z);
      const n0 = await ev(() => S.obs.length); await T.tapField(38.5, 1);
      const s = await ev(() => ({ n: S.obs.length, zoom, last: S.obs[S.obs.length - 1] }));
      ok(s.n === n0 + 1 && s.zoom === z && Math.abs(s.last.x - 38.5) < .6 && Math.abs(s.last.y - 1) < .6, `roh plochy na ${z * 100} %: ` + JSON.stringify(s));
      await ev(n => { S.obs.length = n; sel = null; render(); ui(); }, n0); /* roh zase volný pro další přiblížení */
    }
    /* zoom tlačítky funguje dál a na 360 px má lišta celé popisky */
    await page.click('#zIn'); ok((await ev(() => zoom)) === 2.5 && (await page.textContent('#zLbl')) === '250 %', 'tlačítko + v liště');
    await page.setViewportSize({ width: 360, height: 740 });
    ok(await ev(() => $('zLbl').offsetParent !== null && document.documentElement.scrollWidth <= document.documentElement.clientWidth), 'na 360 px chybí procenta nebo stránka přetéká');
    await page.setViewportSize({ width: 390, height: 844 });
  });

  await step('Sdílet pod plochou', async () => {
    /* v Nástrojích (⋯) Sdílet lidé nenašli: tlačítko je v liště pod plochou vedle 3D, na telefonu v jednom řádku s přiblížením */
    await ev(() => { mode = 'view'; sel = null; ui(); render(); });
    for (const w of [390, 360]) {
      await page.setViewportSize({ width: w, height: w === 360 ? 740 : 844 }); await page.waitForTimeout(100);
      const r = await ev(() => { const t = el => Math.round(el.getBoundingClientRect().top), z = document.querySelector('.fieldbox .zoom'), s = $('shareBtn'), d = $('dimBtn');
        /* s písmem aplikace (Barlow) jeden řádek s přiblížením; tady bez stažených písem se smí Sdílet a 3D spolu zalomit doprava */
        const sr = s.getBoundingClientRect(), dr = d.getBoundingClientRect(), br = document.querySelector('.fieldbox .fieldbar').getBoundingClientRect();
        return { vis: !s.hidden && !!s.offsetParent, pair: t(s) === t(d) && sr.right <= dr.left, right: br.right - dr.right < 2, over: document.documentElement.scrollWidth > document.documentElement.clientWidth }; });
      ok(r.vis && r.pair && r.right && !r.over, `Sdílet na ${w} px není vidět, není u 3D, nebo lišta přetéká: ` + JSON.stringify(r));
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.click('#shareBtn'); await page.waitForTimeout(150);
    ok(/Sdílet parkur/.test(await page.textContent('#sheet')) && await page.isVisible('#shIn'), 'Sdílet pod plochou neotevřelo sdílení s Načíst z kódu');
    await ev(() => closeSheet());
    await page.click('#mBuild'); ok(await ev(() => $('shareBtn').hidden), 've Stavbě má Sdílet pod plochou zmizet jako 3D');
    await ev(() => { mode = 'view'; ui(); });
  });

  await step('angličtina: rozestupy a okno otočky', async () => {
    await fresh();
    const r = await ev(() => {
      const c = listFor('A1')[0]; S.meta.dirty = false; loadCourse(c, true);
      S.sides = S.route.map((_, i) => i % 3 === 0 ? 'L' : 'P'); syncSides();
      /* dva rozestupy mimo pravidla, ať je v položce seznam */
      const by = {}; S.obs.forEach(o => by[o.id] = o); const a = by[S.route[0]], b = by[S.route[1]], d = by[S.route[2]];
      b.x = a.x + 2; b.y = a.y + 1; d.x = Math.min(S.W - 1, b.x + 12); d.y = b.y; render();
      const items = fciCheck(S.obs, S.route, S.turns, S.sides, S.meta.cls).map(x => x.t), dist = items.find(t => /^Rozestupy/.test(t));
      const ji = S.route.findIndex(id => by[id].type === 'jump'); turnSheet(ji);
      const opts = [...document.querySelectorAll('#sheet .opt b')].map(e => e.textContent); closeSheet();
      const cz = /[ěščřžýáíéůúňťď]/;
      return { id: c.id, dist, distEn: trLookup(dist), gaps: (dist.split('): ')[1] || '').split('; ').length, opts, optsBad: opts.filter(t => { const v = trLookup(t); return v == null || cz.test(v); }),
        wrap: [trLookup('Otočka doleva · venkem'), trLookup('Otočka doprava · vnitřkem')], path: trLookup('Dráha psa nevede přes jinou překážku: 1→2 přes tunel č. 3; 4→5 přes skok č. 6') };
    });
    ok(/^A1-01/.test(r.id), 'první parkur A1 není A1-01: ' + r.id);
    const enGaps = ((r.distEn || '').split('): ')[1] || '').split('; ');
    ok(r.gaps >= 2 && r.distEn != null && !/[ěščřžýáíéůúňťď]/.test(r.distEn) && enGaps.length === r.gaps && enGaps.every(g => /^\d+→\d+ (only )?[\d.,]+ m (along the path|in a straight line)$/.test(g)), 'rozestupy v angličtině (každý rozestup zvlášť): ' + JSON.stringify([r.dist, r.distEn]));
    ok(await ev(() => trLookup('Překážky přes sebe: skok č. 1 a kladina č. 2; skok a zeď') === 'Obstacles overlapping: jump no. 1 and dog walk no. 2; jump and wall'), 'překážky přes sebe v angličtině: ' + await ev(() => trLookup('Překážky přes sebe: skok č. 1 a kladina č. 2; skok a zeď')));
    ok(r.opts.some(t => / · (vnitřkem|venkem)$/.test(t)) && !r.optsBad.length, 'okno otočky v angličtině: ' + JSON.stringify([r.opts, r.optsBad]));
    ok(r.wrap[0] === 'Wrap left · outside' && r.wrap[1] === 'Wrap right · inside', 'překlad otočky se stranou: ' + JSON.stringify(r.wrap));
    ok(r.path === "The dog's path doesn't cross another obstacle: 1→2 over tunnel no. 3; 4→5 over jump no. 6", 'seznam v položce kontroly FCI: ' + r.path);
  });

  await T.ctx.close();
  return T.errs;
};
