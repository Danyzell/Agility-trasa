/* Plánovač 3.2.1 (druhé kolo kontroly plánu): panel výběru a lišta Vybrat víc na malém telefonu nezakryjí plochu (posun stránky až po
   „click“ téhož klepnutí), Zaběhnout neschová tlačítka otoček v Pořadí překážek, výběr víc po Zpět bez smazaných překážek, anglický export
   (Hoopers, vlastní název, poznámka „z druhé strany“), kontrola hlásí překážky druhé disciplíny, plůtek se v plánu míjí podél sítě
   (FCI Hoopers 4.3) a podklad z fotky zůstane u parkuru v Moje (jen v zařízení, zmenšený, při plné paměti se neuloží). */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true, viewport: { width: 375, height: 667 } }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  await T.ctx.addInitScript(() => { try { if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('3.0')); if (localStorage.getItem('agility-rules-v1') == null) localStorage.setItem('agility-rules-v1', JSON.stringify('CZ')); if (localStorage.getItem('agility-runhint-v1') == null) localStorage.setItem('agility-runhint-v1', '1'); } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const fresh = async () => { await page.goto('about:blank'); await page.goto(base + '/#plan'); await w(300); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const lib = (cls, i) => ev(([cls, i]) => { closeSheet(); S.meta.dirty = false; loadCourse(listFor(cls)[i || 0], true); window.scrollTo(0, 0); $('toast').hidden = true; }, [cls, i]);
  const tapEl = async (sel) => { const b = await page.locator(sel).boundingBox(); await page.touchscreen.tap(b.x + b.width / 2, b.y + b.height / 2); await w(120); };

  await step('B8: výběr překážky a Vybrat víc na malém telefonu posunou plochu nad panel', async () => {
    await fresh();
    for (const [W, H] of [[375, 667], [360, 640]]) {
      await page.setViewportSize({ width: W, height: H });
      await lib('A1'); await tapEl('#mBuild'); await w(150);
      /* jako člověk: stránka posunutá tak, že je vidět horních 200 px plochy */
      await ev(() => window.scrollBy(0, Math.max(0, $('wrap').getBoundingClientRect().top - (innerHeight - 200)))); await w(80);
      /* klepnutí prstem na překážku, která je vidět (plocha je skoro celá pod okrajem obrazovky) */
      const t = await ev(() => { const wr = $('wrap').getBoundingClientRect(); const q = [...document.querySelectorAll('#obs .ob')].map(g => ({ id: +g.getAttribute('data-id'), r: g.getBoundingClientRect() }))
        .filter(q => q.r.top > Math.max(wr.top, 70) && q.r.bottom < innerHeight - 12 && q.r.left > wr.left && q.r.right < wr.right && getO(q.id).type === 'jump').sort((a, b) => b.r.bottom - a.r.bottom)[0];
        if (!q) return null; const o = getO(q.id), m = $('field').getScreenCTM(), p = new DOMPoint(o.x, o.y).matrixTransform(m); /* střed překážky, ne obdélníku kolem ní */
        return { id: q.id, x: p.x, y: p.y, z: zoom, n: S.obs.length }; });
      ok(!!t, `${W}×${H}: žádná překážka k klepnutí`); if (!t) continue;
      await page.touchscreen.tap(t.x, t.y); await w(500);
      const r = await ev(() => { const p = $('selRow').getBoundingClientRect(), wr = $('wrap').getBoundingClientRect(), g = document.querySelector('#obs .ob[data-id="' + sel + '"]').getBoundingClientRect();
        return { sel, full: !$('selRow').classList.contains('compact'), pTop: Math.round(p.top), gBot: Math.round(g.bottom), wTop: Math.round(wr.top), wBot: Math.round(wr.bottom), head: Math.round(document.querySelector('header.top').getBoundingClientRect().bottom),
          sheet: !$('scrim').hidden, zoom, full2: document.body.classList.contains('fullfield'), n: S.obs.length }; });
      ok(r.sel === t.id && r.full && r.gBot <= r.pTop && r.wBot <= r.pTop && r.wTop >= r.head, `${W}×${H}: vybraná překážka nebo plocha je pod panelem: ` + JSON.stringify(r));
      /* click téhož klepnutí po posunu nic nespustil (Nový, Uložit, přiblížení, celá obrazovka) */
      ok(!r.sheet && r.zoom === t.z && !r.full2 && r.n === t.n, `${W}×${H}: klepnutí na překážku spustilo něco dalšího: ` + JSON.stringify(r));
      /* Vybrat víc překážek: lišta výběru nezakryje plochu */
      await ev(() => { sel = null; ui(); render(); window.scrollTo(0, 0); }); await w(80);
      await ev(() => $('mselBtn').scrollIntoView({ block: 'center' })); await w(80); await tapEl('#mselBtn'); await w(200);
      const m = await ev(() => { const p = $('mselRow').getBoundingClientRect(), wr = $('wrap').getBoundingClientRect(); return { on: MSEL.on, pTop: Math.round(p.top), wTop: Math.round(wr.top), wBot: Math.round(wr.bottom) }; });
      ok(m.on && m.wBot <= m.pTop && m.wTop >= 0, `${W}×${H}: lišta Vybrat víc zakrývá plochu: ` + JSON.stringify(m));
      await ev(() => mselOn(false));
    }
    /* velký telefon a plocha uprostřed: panel nic nezakrývá, stránka se nehýbe (jako dřív) */
    await page.setViewportSize({ width: 390, height: 844 });
    await lib('A1'); await ev(() => { mode = 'build'; zoom = 1; ui(); render(); $('wrap').scrollIntoView({ block: 'center' }); }); await w(100);
    const sy0 = await ev(() => scrollY), o = await ev(() => { const g = document.querySelector('#obs .ob').getBoundingClientRect(); return { x: g.left + g.width / 2, y: g.top + g.height / 2 }; });
    await page.touchscreen.tap(o.x, o.y); await w(500);
    ok(await ev(() => sel != null) && await ev(() => scrollY) === sy0, '390 px: výběr posunul stránku, i když panel nic nezakrýval');
  });

  await step('klepnutí na překážku pod popiskem Start nebo značkou křížení ji vybere (dřív položilo novou)', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await fresh();
    /* Start je 2 m před první překážkou: skok č. 3 leží přesně pod ním, skok č. 4 pod značkou křížení */
    await ev(() => { S.meta.dirty = false; planReset(); S.W = 40; S.H = 20; S.meta.cls = 'A1'; S.meta.name = 'Popisky'; S.meta.id = null;
      S.obs = [{ id: 1, type: 'jump', x: 10, y: 10, rot: 0 }, { id: 2, type: 'jump', x: 16, y: 10, rot: 0 }, { id: 3, type: 'jump', x: 8, y: 9.5, rot: 90 }, { id: 4, type: 'jump', x: 22, y: 6, rot: 0 }];
      S.route = [1, 2]; S.sides = []; S.turns = []; S.hp = []; S.marks = [{ t: 'warn', x: 22, y: 6 }]; syncSides(); mode = 'build'; tool = 'jump'; sel = null; zoom = 1;
      setSizeSel(); drawGrid(); save(); render(); ui(); topbar(); undoReset(); $('wrap').scrollIntoView({ block: 'center' }); });
    const under = await ev(() => [3, 4].map(id => { const o = getO(id), m = $('field').getScreenCTM(), p = new DOMPoint(o.x, o.y).matrixTransform(m);
      const cover = [...document.querySelectorAll('#marks text, #marks line, #hmk circle')].some(e => { const r = e.getBoundingClientRect(); return p.x >= r.left && p.x <= r.right && p.y >= r.top && p.y <= r.bottom; });
      return { id, x: p.x, y: p.y, cover }; }));
    ok(under.every(u => u.cover), 'test: popisek nebo značka nad překážkou chybí: ' + JSON.stringify(under));
    for (const u of under) {
      await ev(() => { sel = null; ui(); }); await page.touchscreen.tap(u.x, u.y); await w(450);
      const r = await ev(() => ({ sel, n: S.obs.length }));
      ok(r.sel === u.id && r.n === 4, `Stavba: klepnutí na skok č. ${u.id} pod popiskem: ` + JSON.stringify(r));
    }
    await ev(() => { sel = null; mode = 'route'; ui(); render(); $('wrap').scrollIntoView({ block: 'center' }); }); await w(80);
    for (const u of await ev(() => [3, 4].map(id => { const o = getO(id), p = new DOMPoint(o.x, o.y).matrixTransform($('field').getScreenCTM()); return { id, x: p.x, y: p.y }; }))) { await page.touchscreen.tap(u.x, u.y); await w(450); }
    ok(await ev(() => S.route.join()) === '1,2,3,4', 'Trasa: klepnutí na skok pod popiskem nepřidalo krok: ' + await ev(() => S.route.join()));
  });

  await step('B10: Zaběhnout nezakryje tlačítka v Pořadí překážek', async () => {
    for (const [W, H] of [[360, 640], [375, 667], [390, 844]]) {
      await page.setViewportSize({ width: W, height: H });
      await fresh(); await lib('A1'); await ev(() => { mode = 'view'; ui(); render(); });
      const maxY = await ev(() => document.documentElement.scrollHeight - innerHeight), bad = [];
      for (let y = 0; y <= maxY; y += 20) {
        await ev(y => window.scrollTo(0, y), y); await w(50);
        const hit = await ev(() => { const b = $('runFab'); if (b.hidden || b.classList.contains('dodge')) return null; const f = b.getBoundingClientRect();
          return [...document.querySelectorAll('#routeList button')].filter(e => { const q = e.getBoundingClientRect(); return Math.min(q.right, f.right) - Math.max(q.left, f.left) > 6 && Math.min(q.bottom, f.bottom) - Math.max(q.top, f.top) > 6; }).map(e => e.textContent).join(','); });
        if (hit) bad.push(y + ':' + hit);
      }
      ok(!bad.length, `${W}×${H}: Zaběhnout zakrývá ` + bad.join(' | '));
    }
    await page.setViewportSize({ width: 390, height: 844 });
  });

  await step('výběr víc: po Zpět ve výběru nezůstanou smazané kopie', async () => {
    await fresh(); await lib('A2');
    await ev(() => { mode = 'build'; mselOn(true); MSEL.ids = S.obs.slice(0, 3).map(o => o.id); ui(); });
    await page.click('#mselDup'); await w(80);
    const a = await ev(() => ({ n: S.obs.length, ids: MSEL.ids.length }));
    await ev(() => undo()); await w(80);
    const b = await ev(() => ({ n: S.obs.length, ids: MSEL.ids.filter(id => !getO(id)).length, info: $('mselInfo').textContent, del: $('mselDel').disabled }));
    ok(a.ids === 3 && b.ids === 0 && b.n === a.n - 3 && /Klepej/.test(b.info) && b.del, 'výběr po Zpět: ' + JSON.stringify([a, b]));
    await ev(() => mselOn(false));
  });

  await step('anglický export: Hoopers, vlastní název, poznámka stavitele', async () => {
    await fresh();
    const r = await ev(() => ({ h: trLookup('Hoopers H1 · Generátor podle pravidel FCI Hoopers'), t: trLookup('Stavební plán: Trénink'), f: trLookup('3: z druhé strany'), j: trLookup('Plánek rozhodčího: Skok') }));
    ok(r.h === 'Hoopers H1 · Generator following FCI Hoopers rules' && r.t === 'Build plan: Trénink' && r.f === '3: from the other side' && r.j === "Judge's plan: Skok", 'anglické texty exportu: ' + JSON.stringify(r));
    /* titulek: vlastní název zůstane, vygenerovaný se přeloží jako nahoře v liště */
    const t = await ev(() => { S.meta.name = 'Trénink'; S.meta.gen = false; const a = headerLines().title; S.meta.gen = true; const b = headerLines().title; S.meta.gen = false; return [a, b]; });
    ok(t[0] === 'Trénink' && t[1] === 'Trénink', 'název v hlavičce: ' + JSON.stringify(t));
  });

  await step('kontrola hlásí překážky druhé disciplíny (po převodu Agility ↔ Hoopers)', async () => {
    await fresh(); await lib('A1'); await ev(() => { mode = 'build'; ui(); render(); });
    await ev(() => { $('pSport').querySelector('[data-ps="hoopers"]').click(); }); await w(150);
    await ev(() => document.querySelector('#sheet [data-sw="conv"]').click()); await w(150);
    const a = await ev(() => { const L = fciCheck(S.obs, S.route, S.turns, S.sides, S.meta.cls); const x = L.find(q => /^Do Hoopers nepatří: /.test(q.t)); return { cls: S.meta.cls, t: x && x.t, ok: x && x.ok, n: x && (x.ids || []).length, all: S.obs.length, bar: $('fciBar').className, en: x && trLookup(x.t) }; });
    ok(a.cls === 'H1' && a.ok === false && a.n === a.all && /skok/.test(a.t) && /kladina/.test(a.t) && /slalom/.test(a.t) && /warn/.test(a.bar), 'Hoopers s překážkami agility: ' + JSON.stringify(a));
    ok(/^Not allowed in Hoopers: .*jump.*dog walk/.test(a.en || ''), 'anglicky: ' + a.en);
    /* bez trasy taky (kontrola rozmístění) */
    ok(await ev(() => { const r = S.route; S.route = []; const x = fciCheck(S.obs, [], [], [], S.meta.cls).some(q => /^Do Hoopers nepatří/.test(q.t)); S.route = r; return x; }), 'bez trasy kontrola překážky agility nehlásí');
    /* Hoopers → agility */
    const b = await ev(() => { const c = listFor('H1')[0]; const L = fciCheck(c.obs, c.route, [], [], 'A1'); const x = L.find(q => /^Do agility nepatří: /.test(q.t)); return { t: x && x.t, n: x && x.ids.length, all: c.obs.length, en: x && trLookup(x.t) }; });
    ok(b.n === b.all && /oblouk/.test(b.t) && /prostor psovoda/.test(b.t) && /^Not allowed in agility: hoop/.test(b.en || ''), 'agility s překážkami Hoopers: ' + JSON.stringify(b));
    /* anglicky i dvojice blíž než 2 m a překážky mimo plochu (dřív zůstaly česky) */
    const e = await ev(() => [trLookup('Blíž než 2 m: oblouk a sud; sud a plůtek'), trLookup('Překážka přesahuje plochu: oblouk č. 4; krátký tunel č. 5')]);
    ok(e[0] === 'Closer than 2 m: hoop and barrel; barrel and gate' && e[1] === 'Obstacle sticks out of the field: hoop no. 4; chute no. 5', 'anglicky kontrola Hoopers: ' + JSON.stringify(e));
    await ev(() => setSport('agility', true));
  });

  await step('plůtek: trasa podél sítě (FCI Hoopers 4.3), plán a 3D na stejné straně', async () => {
    await fresh();
    const r = await ev(() => {
      const out = { n: 0, bad: [] };
      ['H1', 'H2', 'H3'].forEach(cls => listFor(cls).forEach(c => {
        const g = calc(c.obs, c.route, []);
        c.route.forEach((id, i) => { const o = c.obs.find(q => q.id === id); if (o.type !== 'gate') return; out.n++;
          const a = o.rot * D2R, nx = -Math.sin(a), ny = Math.cos(a), P = g.P[i], along = Math.abs(P.dir.x * nx + P.dir.y * ny), off = Math.hypot(P.en.x - o.x, P.en.y - o.y);
          const A = { x: o.x - nx * .55, y: o.y - ny * .55 }, B = { x: o.x + nx * .55, y: o.y + ny * .55 }; let cross = false;
          [g.segs[i - 1], g.segs[i]].forEach(s => { if (!s) return; const Q = []; s.pcs.forEach(cc => { for (let t = 0; t <= 24; t++) Q.push(bz(cc[0], cc[1], cc[2], cc[3], t / 24)); });
            for (let k = 1; k < Q.length; k++) if (cr(Q[k - 1], Q[k], A) * cr(Q[k - 1], Q[k], B) < 0 && cr(A, B, Q[k - 1]) * cr(A, B, Q[k]) < 0) cross = true; });
          if (along < .999 || Math.abs(off - .45) > .01 || cross) out.bad.push(c.id + ' č. ' + (i + 1) + ': ' + JSON.stringify({ along, off, cross }));
        });
      }));
      return out;
    });
    ok(r.n > 20 && !r.bad.length, `plůtky v knihovně (${r.n}): ` + r.bad.slice(0, 4).join('; '));
    /* rovná řada oblouk – plůtek – oblouk: délka skoro jako vzdušnou čarou (dřív esíčko napříč sítí), plůtek mezi psem a psovodem */
    const s = await ev(() => { const obs = [{ id: 1, type: 'hoop', x: 5, y: 10, rot: 0 }, { id: 2, type: 'gate', x: 11, y: 10, rot: 90 }, { id: 3, type: 'hoop', x: 17, y: 10, rot: 0 }, { id: 4, type: 'ha', x: 11, y: 4, rot: 0 }];
      const g = calc(obs, [1, 2, 3], []); return { len: g.total, y: g.P[1].en.y }; });
    ok(s.len > 12 && s.len < 12.2 && s.y > 10.4, 'rovná řada přes plůtek: ' + JSON.stringify(s));
    /* 3D bere stranu a směr z plánu */
    const d = await ev(() => { S.meta.dirty = false; const c = listFor('H1').find(c => c.route.some(id => c.obs.find(o => o.id === id).type === 'gate')); loadCourse(c, true);
      const g = calc(), pts = hoop3dPts(g), out = []; S.route.forEach((id, i) => { if (getO(id).type !== 'gate') return; const own = pts.filter(p => p[3] === i).slice(0, 2); /* průchod: první dva body s pořadím i (úsek k další překážce má taky i) */ const m = { x: (own[0][0] + own[1][0]) / 2, y: (own[0][1] + own[1][1]) / 2 }; out.push(Math.hypot(m.x - g.P[i].en.x, m.y - g.P[i].en.y)); }); return out; });
    ok(d.length && d.every(v => v < .05), '3D míjí plůtek jinde než plán: ' + JSON.stringify(d));
  });

  await step('podklad z fotky zůstane u parkuru v Moje', async () => {
    await fresh();
    /* fotka plánku 1600 × 1000 se šumem (velký JPEG, ať se musí zmenšit) */
    const jpg = await ev(() => { const c = document.createElement('canvas'); c.width = 1600; c.height = 1000; const x = c.getContext('2d'); const d = x.createImageData(c.width, c.height);
      for (let i = 0; i < d.data.length; i += 4) { const v = (i * 7919) % 255; d.data[i] = v; d.data[i + 1] = (v * 3) % 255; d.data[i + 2] = (v * 7) % 255; d.data[i + 3] = 255; } x.putImageData(d, 0, 0); return c.toDataURL('image/jpeg', .95).split(',')[1]; });
    await ev(() => { closeSheet(); S.meta.dirty = false; const c = JSON.parse(JSON.stringify(listFor('A1')[0])); c.id = null; c.gen = false; c.name = 'S podkladem'; loadCourse(c, true); setPanel('bg'); });
    await page.setInputFiles('#bgFile', { name: 'plan.jpg', mimeType: 'image/jpeg', buffer: Buffer.from(jpg, 'base64') }); await w(800);
    ok(await ev(() => !!BG && !!document.querySelector('#bgimg image')), 'podklad se nevložil');
    await ev(() => { setPanel(null); saveSheet(); }); await w(100); await page.click('#sheet [data-a="new"]'); await w(800);
    const id = await ev(() => S.meta.id);
    let r = await ev((id) => { const a = lsGet('agility-bgs-v1', {}); return { has: !!a[id], len: a[id] ? a[id].src.length : 0, max: BGS_MAX, bk: Object.keys(backupData().data).indexOf('agility-bgs-v1'), own: !!SYNC_OWN['agility-bgs-v1'] }; }, id);
    ok(r.has && r.len > 1000 && r.len <= r.max && r.bk < 0 && r.own, 'podklad u uloženého parkuru (zmenšený, mimo zálohu a synchronizaci): ' + JSON.stringify(r));
    /* jiný parkur a zpět */
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('A2')[0], true); });
    ok(await ev(() => !BG && !document.querySelector('#bgimg image')), 'u jiného parkuru zůstal podklad');
    await ev((id) => { loadCourse(findCourse(id), true); }, id);
    r = await ev(() => ({ bg: !!BG, img: !!document.querySelector('#bgimg image'), name: S.meta.name }));
    ok(r.bg && r.img && r.name === 'S podkladem', 'po znovuotevření parkuru podklad chybí: ' + JSON.stringify(r));
    /* Odebrat smaže podklad i u uloženého parkuru */
    await ev(() => { setPanel('bg'); }); await page.click('#bgDel'); await w(100);
    await ev((id) => { S.meta.dirty = false; loadCourse(listFor('A2')[0], true); loadCourse(findCourse(id), true); }, id);
    ok(await ev((id) => !BG && !lsGet('agility-bgs-v1', {})[id], id), 'odebraný podklad se vrátil');
    /* plná paměť: parkur se uloží, podklad ne, s hláškou */
    await ev(() => { setPanel('bg'); }); await page.setInputFiles('#bgFile', { name: 'plan.jpg', mimeType: 'image/jpeg', buffer: Buffer.from(jpg, 'base64') }); await w(800);
    await ev(() => { localStorage.removeItem('agility-bgs-v1'); const ch = 'x'.repeat(100000); try { for (let n = 0; n < 400; n++) localStorage.setItem('qa-fill-' + n, ch); } catch (e) {} try { for (let n = 0; n < 2000; n++) localStorage.setItem('qa-fill-s' + n, 'y'.repeat(500)); } catch (e) {} });
    await ev(() => { setPanel(null); S.obs[0].x = r1(S.obs[0].x + .5); touch(); saveSheet(); }); await w(100); await page.click('#sheet [data-a="upd"]'); await w(800);
    r = await ev((id) => ({ toast: $('toast').textContent, stored: !!lsGet('agility-bgs-v1', {})[id], dirty: S.meta.dirty, en: trLookup($('toast').textContent) }), id);
    await ev(() => { Object.keys(localStorage).filter(k => /^qa-fill/.test(k)).forEach(k => localStorage.removeItem(k)); });
    ok(!r.stored && !r.dirty && r.toast === 'Podklad se k parkuru neuložil, v telefonu je málo místa.' && !!r.en, 'plná paměť: ' + JSON.stringify(r));
    /* smazání parkuru v Moje smaže i podklad */
    await ev((id) => bgKeep(id), id); await w(800);
    ok(await ev((id) => !!lsGet('agility-bgs-v1', {})[id], id), 'podklad se po uvolnění paměti neuložil');
    await ev(() => { S.meta.dirty = false; show('lib'); libTab = 'my'; libRender(); }); await w(150);
    await page.click(`#cards [data-del="${id}"]`); await w(150); await page.click('#sheet [data-a="ok"]'); await w(200);
    ok(await ev((id) => !lsGet('agility-bgs-v1', {})[id], id), 'podklad smazaného parkuru zůstal v paměti');
    /* do obrázku na ploše jde jen data URL obrázku */
    ok(await ev(() => { BG = { src: 'x" onload="alert(1)', op: .5, fit: 'meet' }; drawBg(); const ok = !document.querySelector('#bgimg image'); BG = null; drawBg(); return ok; }), 'podklad s jiným obsahem než obrázkem se vykreslil');
    ok(await ev(() => trLookup('Podklad je moc velký, k parkuru se neuložil.') != null && trLookup('Vyfoť nebo vyber plánek parkuru. Zobrazí se pod mřížkou a překážky na něj jen položíš. S parkurem uloženým v Moje zůstane jen v tomhle telefonu.') != null), 'chybí anglický překlad u podkladu');
  });

  await step('počítač: pole ° ukáže celé 315 (šipky čísla sebraly místo)', async () => {
    const D = await phone(browser, { viewport: { width: 1280, height: 800 }, hasTouch: false });
    await offline(D.ctx, { get_catalog: { version: 0 } });
    await D.page.goto(base + '/#plan'); await D.page.waitForTimeout(300);
    const r = await D.ev(() => { closeSheet(); S.meta.dirty = false; loadCourse(listFor('A1')[0], true); mode = 'build'; const o = S.obs[3]; o.rot = 315; sel = o.id; SELNEW = false; SELFULL = true; ui(); render();
      const e = $('posR'); return { v: e.value, cw: e.clientWidth, sw: e.scrollWidth }; });
    ok(r.v === '315' && r.sw <= r.cw + 1, 'pole ° na počítači: ' + JSON.stringify(r));
    T.errs.push(...D.errs); await D.ctx.close();
  });

  await T.ctx.close();
  return T.errs;
};
