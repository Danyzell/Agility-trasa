/* Plánovač 3.2: opravy z rozboru plánu (9. 10.). B1 desetinná čárka v polích, B2 SČP a MČP u Jumpingu a „Jen FCI“,
   B3 tah výběru ke kraji, B4 zámek ve výběru víc překážek, B5 porovnání podle druhu a tunelu, B6 hlavička exportu,
   B7 zaokrouhlení souřadnic, B8 úzký panel u právě položené překážky, B9 plocha neposkočí po druhé překážce,
   B10 Zaběhnout nezakryje Nový, a drobnosti (kopie se zámkem, obrácená trasa a strany, Běh u Hoopers, délka ve 3D,
   hlášky při mazání, písmo v exportu, anglická otočka). */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  await T.ctx.addInitScript(() => { try { if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('3.0')); if (localStorage.getItem('agility-rules-v1') == null) localStorage.setItem('agility-rules-v1', JSON.stringify('CZ')); } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash == null ? '#plan' : hash)); await w(300); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const px = (x, y) => ev(([x, y]) => { const b = $('field').getBoundingClientRect(); return { x: b.left + x / S.W * b.width, y: b.top + y / S.H * b.height }; }, [x, y]);
  const J = (id, x, y, rot, v) => Object.assign({ id, type: 'jump', x, y, rot: rot || 0 }, v ? { v } : {});
  const setCourse = (obs, route, cls) => ev(([obs, route, cls]) => {
    S.meta.dirty = false; planReset(); S.W = 40; S.H = 20; S.meta.cls = cls || 'A2'; S.meta.name = 'Testovací parkur'; S.meta.id = null;
    S.obs = obs; S.route = route; S.sides = []; S.turns = []; S.hp = []; S.marks = []; syncSides(); mode = 'build'; tool = null; sel = null; zoom = 1;
    setSizeSel(); drawGrid(); save(); render(); ui(); topbar(); undoReset(); $('toast').hidden = true; $('wrap').scrollIntoView({ block: 'center' });
  }, [obs, route, cls]);
  const drag = async (x0, y0, x1, y1) => { await ev(() => $('wrap').scrollIntoView({ block: 'center' })); const a = await px(x0, y0), b = await px(x1, y1); await page.mouse.move(a.x, a.y); await page.mouse.down(); await page.mouse.move(b.x, b.y, { steps: 8 }); await page.mouse.up(); await w(80); };

  await step('B1: desetinná čárka v polích X a Y, Posunout o metry a v kalkulačce', async () => {
    await fresh();
    await setCourse([J(1, 5, 10), J(2, 12, 10)], [1, 2]);
    await T.tapField(5, 10);
    await page.fill('#posX', '12,5'); await page.fill('#posY', '7.5'); await w(80);
    let r = await ev(() => ({ x: getO(1).x, y: getO(1).y, t: $('posX').type, im: $('posX').inputMode }));
    ok(r.x === 12.5 && r.y === 7.5 && r.t === 'text' && r.im === 'decimal', 'X s čárkou a Y s tečkou: ' + JSON.stringify(r));
    await ev(() => { document.activeElement && document.activeElement.blur(); sel = null; ui(); });
    ok(await ev(() => { sel = 1; ui(); return $('posX').value === '12,5' && $('posY').value === '7,5'; }), 'pole ukazují čísla česky s čárkou: ' + await ev(() => $('posX').value + ' / ' + $('posY').value));
    /* Celý parkur → Posunout o metry 1,5 */
    await ev(() => { sel = null; ui(); wholeSheet(); });
    await page.fill('#wDx', '1,5'); await page.fill('#wDy', ''); await page.click('#sheet [data-w="move"]'); await w(100);
    r = await ev(() => ({ x1: getO(1).x, x2: getO(2).x, toast: $('toast').textContent }));
    ok(r.x1 === 14 && r.x2 === 13.5, 'posun o 1,5 m (dřív 15 m): ' + JSON.stringify(r));
    await ev(() => wholeSheet()); await page.fill('#wDx', '1,5,2'); await page.click('#sheet [data-w="move"]'); await w(80);
    ok(await ev(() => getO(1).x === 14 && /Posun zadej v metrech/.test($('toast').textContent)), 'neplatné číslo posunu se nepoužije: ' + await ev(() => $('toast').textContent));
    await ev(() => closeSheet());
    /* kalkulačka SČP: délka s čárkou */
    await ev(() => { localStorage.removeItem('agility-sctcalc-v1'); sctCalcSheet(); }); await w(100);
    await page.fill('#scLen', '150,5'); await w(80);
    r = await ev(() => ({ out: $('scOut').textContent.replace(/\s+/g, ' '), t: $('scLen').type, ls: lsGet('agility-sctcalc-v1', null) }));
    ok(r.t === 'text' && r.ls && +r.ls.len === 150.5 && /SČP\s*\d+ s/.test(r.out), 'kalkulačka s délkou 150,5 m: ' + JSON.stringify(r));
    await ev(() => closeSheet());
  });

  await step('B2: Jumping má vlastní rychlost, MČP vždy delší než SČP, Jen FCI podle Řádu FCI', async () => {
    await fresh();
    const r = await ev(() => {
      const a1j = courseTimes(150, 'A1', 'J'), a1a = courseTimes(150, 'A1', 'A'), a0j = courseTimes(150, 'A0', 'J'), a3j = courseTimes(160, 'A3', 'J');
      return { a1j, a1a, a0j, a3j, sj: spdOf('A1', 'J'), sa: spdOf('A1', 'A'), fci: RULES.FCI.mctK == null };
    });
    ok(r.sa === 3 && r.sj === 3.5 && r.a1j.sct === 43 && r.a1j.mct === 50 && r.a1j.sct < r.a1j.mct, 'A1 Jumping 150 m: SČP 43 s (3,5 m/s) a MČP 50 s (3,0 m/s): ' + JSON.stringify(r.a1j));
    ok(r.a1a.sct === 50 && r.a1a.mct === 60 && !r.a1a.mctFix, 'A1 Agility 150 m: SČP 50 s, MČP 60 s: ' + JSON.stringify(r.a1a));
    ok(r.a0j.sct === 50 && r.a0j.mct === 75 && r.a0j.mctFix === true, 'A0 Jumping: MČP podle FCI by byl kratší, pojistka 1,5× SČP: ' + JSON.stringify(r.a0j));
    ok(r.a3j.sct === 36 && r.a3j.mct === 54, 'A3 Jumping 160 m: 4,5 m/s a 3,0 m/s: ' + JSON.stringify(r.a3j));
    ok(r.fci, '„Jen FCI“ má počítat MČP podle Řádu FCI, ne 1,5× SČP');
    /* Běh: rychlost se u jumpingu nastavuje zvlášť */
    await ev(() => { const c = JSON.parse(JSON.stringify(listFor('A1')[0])); c.obs.forEach(o => { if (ZN.indexOf(o.type) >= 0) o.type = 'jump'; }); c.id = null; c.name = 'Jumping test'; S.meta.dirty = false; loadCourse(c, true); PLANUI.speed = true; show('run'); });
    const before = await ev(() => ({ m: curM().disc, spd: curM().spd, lbl: $('speedRow').textContent }));
    await page.click('#speedRow [data-sp="1"]'); await w(60);
    const after = await ev(() => ({ spd: curM().spd, setJ: SET.spdJ && SET.spdJ.A1, setA: SET.spd && SET.spd.A1 }));
    ok(before.m === 'Jumping' && before.spd === 3.5 && /Jumping A1/.test(before.lbl) && after.spd === 3.6 && after.setJ === 3.6 && after.setA === 3, 'Běh: rychlost Jumpingu zvlášť: ' + JSON.stringify([before, after]));
    await ev(() => { delete SET.spdJ; lsSet(SETK, SET); PLANUI.speed = false; });
    ok(await ev(() => trLookup('Jumping: rychlost pro SČP o 0,5 m/s vyšší než Agility, v Běhu jde nastavit zvlášť.') != null && trLookup('MČP podle FCI (3,0 m/s) by nebyl delší než SČP, proto 1,5× SČP.') != null), 'chybí anglický překlad hlášek o rychlosti');
  });

  await step('B3 a B4: výběr víc překážek u kraje a se zámkem', async () => {
    await fresh();
    await setCourse([J(1, 16.8, 10), J(2, 18.9, 10), J(3, 24, 10), J(4, 30, 5)], []);
    await ev(() => { mselOn(true); MSEL.ids = [1, 2, 3]; render(); ui(); });
    await drag(18.9, 10, 39.5, 10);
    let r = await ev(() => [1, 2, 3].map(i => getO(i).x));
    ok(r[2] === 40 && Math.abs((r[1] - r[0]) - 2.1) < .01 && Math.abs((r[2] - r[1]) - 5.1) < .01, 'výběr se zastaví o kraj a rozestupy zůstanou: ' + JSON.stringify(r));
    /* zámek: zamknutá překážka zůstane na místě při tahu i otočení */
    await setCourse([J(1, 10, 10), J(2, 14, 10), J(3, 18, 10)], []);
    await ev(() => { getO(2).lock = 1; mselOn(true); MSEL.ids = [1, 2, 3]; render(); ui(); });
    await drag(10, 10, 12, 13);
    r = await ev(() => ({ a: [getO(1).x, getO(1).y], b: [getO(2).x, getO(2).y], c: [getO(3).x, getO(3).y], toast: $('toast').textContent }));
    ok(r.b[0] === 14 && r.b[1] === 10 && r.a[0] === 12 && r.a[1] === 13 && r.c[0] === 20 && /Zamknuté překážky zůstanou na místě/.test(r.toast), 'tah výběru se zámkem: ' + JSON.stringify(r));
    await ev(() => { $('toast').hidden = true; mselXform('rotR'); });
    r = await ev(() => ({ b: [getO(2).x, getO(2).y, getO(2).rot], a: getO(1).rot, toast: $('toast').textContent }));
    ok(r.b[0] === 14 && r.b[1] === 10 && r.b[2] === 0 && r.a === 15 && /Zamknuté překážky zůstaly na místě: 1/.test(r.toast), 'otočení výběru se zámkem: ' + JSON.stringify(r));
    /* otočení u kraje: překážky by vyjely z plochy, nic se nestane */
    await setCourse([J(1, 1, 1), J(2, 1, 19)], []);
    await ev(() => { mselOn(true); MSEL.ids = [1, 2]; mselXform('rotR'); });
    r = await ev(() => ({ a: [getO(1).x, getO(1).y], b: [getO(2).x, getO(2).y], toast: $('toast').textContent }));
    ok(r.a[0] === 1 && r.b[1] === 19 && /mimo plochu/.test(r.toast), 'otočení u kraje se neprovede: ' + JSON.stringify(r));
    await ev(() => mselOn(false));
  });

  await step('B5: porovnání vidí zeď, dvojitý skok a jiný tunel', async () => {
    await fresh();
    await setCourse([J(1, 5, 5), J(2, 15, 5), { id: 3, type: 'tunnel', x: 25, y: 10, rot: 0, len: 3 }], [1, 2, 3]);
    const r = await ev(() => {
      cmpSet({ name: 'Druhý', cls: 'A2', W: 40, H: 20, obs: [{ id: 1, type: 'jump', v: 'wall', x: 5, y: 5, rot: 0 }, { id: 2, type: 'jump', v: 'oxer', x: 15, y: 5, rot: 0 }, { id: 3, type: 'tunnel', x: 25, y: 10, rot: 0, len: 6, bend: 180 }], route: [1, 2, 3] });
      const d = cmpDiff(); cmpListSheet(); const t = $('sheet').textContent.replace(/\s+/g, ' '); closeSheet(); cmpSet(null);
      return { swap: d.swap.length, moved: d.moved.length, same: d.same.length, tu: d.moved[0] && d.moved[0].tu, t };
    });
    ok(r.swap === 2 && r.moved === 1 && r.same === 0 && /Vyměnit \(2\)/.test(r.t) && /Zeď/.test(r.t) && /délka 3,0 → 6,0 m/.test(r.t) && /tvar rovný → do U/.test(r.t) && !/Parkury jsou stejné/.test(r.t), 'porovnání: ' + JSON.stringify(r));
  });

  await step('B6 a B7: hlavička exportu, zaokrouhlení a písmo', async () => {
    await fresh();
    await setCourse([J(1, 5, 5), J(2, 15, 5), J(3, 25, 5)], [1, 2, 3], 'A1');
    let h = await ev(() => headerLines());
    ok(/ · 3 překážky · Jumping · SČP \d+ s \(3,5 m\/s\) · MČP \d+ s$/.test(h.spec) && /^A1 · /.test(h.sub), 'hlavička agility: ' + JSON.stringify(h));
    await ev(() => { S.meta.cls = 'H1'; setSport('hoopers', true); S.obs = [{ id: 1, type: 'hoop', x: 5, y: 5, rot: 0 }, { id: 2, type: 'hoop', x: 15, y: 5, rot: 0 }, { id: 3, type: 'barrel', x: 25, y: 5, rot: 0 }]; S.route = [1, 2, 3]; syncSides(); render(); });
    h = await ev(() => headerLines());
    ok(/ · 3 překážky · Hoopers · Max\. čas 3 min$/.test(h.spec) && /^Hoopers H1/.test(h.sub), 'hlavička Hoopers: ' + JSON.stringify(h));
    ok(await ev(() => trLookup(headerLines().spec) === 'Length 30.0 m · 3 obstacles · Hoopers · Max. time 3 min' || /^Length .* · 3 obstacles · Hoopers · Max\. time 3 min$/.test(trLookup(headerLines().spec) || '')), 'anglická hlavička Hoopers: ' + await ev(() => trLookup(headerLines().spec)));
    /* test běží česky: desetinná čárka v číslech zůstane (anglicky ji i18nNumOut převede na tečku) */
    const en2 = await ev(() => { const d = s => (trLookup(s) || '').replace(/(\d),(\d)/g, '$1.$2'); return { a: d('Délka 30,0 m · 3 překážky · Jumping · SČP 9 s (3,5 m/s) · MČP 10 s'), uk: d('Délka 30,0 m · 1 překážka · Agility · SČP 18 s'), old: d('Délka 130,0 m · 17 překážek · Agility · SČP 44 s (3,0 m/s) · MČP 52 s') }; });
    ok(en2.a === 'Length 30.0 m · 3 obstacles · Jumping · SCT 9 s (3.5 m/s) · MCT 10 s' && en2.uk === 'Length 30.0 m · 1 obstacle · Agility · SCT 18 s' && en2.old === 'Length 130.0 m · 17 obstacles · Agility · SCT 44 s (3.0 m/s) · MCT 52 s', 'anglické hlavičky: ' + JSON.stringify(en2));
    await ev(() => setSport('agility', true));
    /* B7: přichycení bez šumu, staré souřadnice se při načtení očistí, PDF stavitele i pole X ukazují zaokrouhleně */
    const s = await ev(() => { PLANUI.snap = false; const a = snapV(13.700000000000001), b = snapV(7.6000000000000005); PLANUI.snap = true; const c = courseClean({ W: 40, H: 20, obs: [{ id: 1, type: 'jump', x: 7.6000000000000005, y: 13.700000000000001, rot: 0 }], route: [] }).obs[0];
      return { a, b, cx: c.x, cy: c.y, f: numFld(7.6000000000000005), font: /font-family="Helvetica/.test(fieldSvgString()) }; });
    ok(s.a === 13.7 && s.b === 7.6 && s.cx === 7.6 && s.cy === 13.7 && s.f === '7,6' && s.font, 'zaokrouhlení a písmo exportu: ' + JSON.stringify(s));
  });

  await step('B8 a B9: úzký panel u nové překážky, ⋯ a ×, plocha neposkočí', async () => {
    await page.setViewportSize({ width: 360, height: 740 });
    await fresh();
    await page.click('#newBtn'); await w(150); if (await page.isVisible('#scrim')) await T.sheet('ok');
    const top0 = await ev(() => Math.round($('wrap').getBoundingClientRect().top + window.scrollY));
    ok(await ev(() => !$('mselBtn').hidden && $('mselBtn').disabled), 'Vybrat víc překážek má být vidět i bez překážek (neaktivní)');
    await T.tapField(8, 8);
    let r = await ev(() => { const p = $('selRow').getBoundingClientRect(); return { compact: $('selRow').classList.contains('compact'), h: Math.round(p.height), x: getComputedStyle(document.querySelector('#selRow .sr-x')).display, more: !!$('selMore').offsetParent, close: !!$('selClose').offsetParent }; });
    ok(r.compact && r.h < 90 && r.x === 'none' && r.more && r.close, 'po položení jen úzký panel: ' + JSON.stringify(r));
    await w(500); await T.tapField(20, 8);
    const top1 = await ev(() => Math.round($('wrap').getBoundingClientRect().top + window.scrollY));
    ok(await ev(() => S.obs.length === 2) && top0 === top1, 'druhá překážka: plocha neposkočí (' + top0 + ' → ' + top1 + ')');
    await w(500); await page.click('#selMore'); await w(60);
    r = await ev(() => ({ compact: $('selRow').classList.contains('compact'), x: getComputedStyle(document.querySelector('#selRow .sr-x')).display, rotP: $('rotP').disabled }));
    ok(!r.compact && r.x !== 'none' && r.rotP, '⋯ ukáže celý panel, ⟂ trasa je mimo trasu neaktivní: ' + JSON.stringify(r));
    await page.click('#selClose'); await w(60);
    ok(await ev(() => sel === null && $('selRow').hidden), '× zavře panel');
    /* klepnutí na položenou překážku ukáže celý panel */
    await T.tapField(8, 8); await w(500);
    ok(await ev(() => sel != null && !$('selRow').classList.contains('compact')), 'vybraná překážka má celý panel');
    ok(await ev(() => trLookup('Zavřít panel') === 'Close the panel' && trLookup('Přesná poloha a otočení') != null), 'chybí anglický popis tlačítek panelu');
    await page.setViewportSize({ width: 390, height: 844 });
  });

  await step('B10: Zaběhnout nezakryje Nový ani výběr plochy', async () => {
    for (const [W, H] of [[375, 667], [360, 640], [390, 700]]) {
      await page.setViewportSize({ width: W, height: H });
      await fresh();
      await ev(() => { S.meta.dirty = false; loadCourse(listFor('A1')[0], true); mode = 'view'; ui(); render(); window.scrollTo(0, 0); });
      for (const y of [0, 120, 260]) {
        await ev((y) => window.scrollTo(0, y), y); await w(120);
        const r = await ev(() => { const b = $('runFab'); if (b.hidden || b.classList.contains('dodge')) return { hid: true }; const f = b.getBoundingClientRect();
          const hit = ['saveBtn', 'newBtn', 'sizeSelect', 'dimBtn', 'fullBtn'].filter(id => { const e = $(id); if (!e || !e.offsetParent) return false; const q = e.getBoundingClientRect(); return q.right > f.left + 2 && q.left < f.right - 2 && q.bottom > f.top + 2 && q.top < f.bottom - 2; });
          return { hid: false, hit }; });
        ok(r.hid || !r.hit.length, `${W}×${H} posun ${y}: Zaběhnout zakrývá ` + JSON.stringify(r));
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
  });

  await step('drobnosti: kopie bez zámku, obrácená trasa, mazání, Běh u Hoopers, 3D a angličtina', async () => {
    await fresh();
    await setCourse([J(1, 5, 10), J(2, 12, 10), J(3, 20, 10)], [1, 2, 3, 2]);
    /* kopie zamknuté překážky jde hned posunout */
    await ev(() => { getO(1).lock = 1; sel = 1; SELFULL = true; ui(); });
    await page.click('#dupBtn'); await w(60);
    ok(await ev(() => { const n = S.obs[S.obs.length - 1]; return n.id !== 1 && !n.lock && !COPYT.lock; }), 'kopie zamknuté překážky nemá být zamknutá');
    await ev(() => { copyOff(); S.obs.pop(); getO(1).lock = 0; delete getO(1).lock; sel = null; render(); ui(); });
    /* obrácená trasa prohodí i strany psovoda */
    await ev(() => { S.sides = ['L', 'P', null, 'L']; S.turns = [null, 'wL', null, null]; mode = 'route'; ui(); render(); });
    await page.click('#revRoute'); await w(60);
    let r = await ev(() => ({ route: S.route.join(), sides: S.sides.join(), turns: S.turns.join() }));
    ok(r.route === '2,3,2,1' && r.sides === 'P,,L,P' && r.turns === ',,wR,', 'obrácená trasa: ' + JSON.stringify(r));
    /* smazání překážky v trase: hláška, kolik kroků zmizelo */
    await ev(() => { mode = 'build'; sel = 2; SELFULL = true; ui(); $('toast').hidden = true; });
    await page.click('#delBtn'); await w(60);
    r = await ev(() => ({ route: S.route.join(), toast: $('toast').textContent }));
    ok(r.route === '3,1' && r.toast === 'Překážka smazaná. Kroků trasy pryč: 2', 'smazání překážky ze dvou kroků trasy: ' + JSON.stringify(r));
    /* Běh u Hoopers bez „0,0 m/s“ */
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('H1')[0], true); show('run'); });
    r = await ev(() => ({ t: $('runSpecs').textContent.replace(/\s+/g, ' '), btn: !!$('runSpecs').querySelector('[data-rs]') }));
    ok(!/m\/s/.test(r.t) && /Max\. čas 3 min/.test(r.t) && !r.btn, 'Běh u Hoopers: ' + JSON.stringify(r));
    await ev(() => setSport('agility', true));
    /* 3D: délka jako v Plánu, od startu */
    r = await ev(() => { S.meta.dirty = false; loadCourse(listFor('A1')[0], true); build3d(); V3.d = 0; const a = v3Dist(); V3.d = V3.path.len; const b = v3Dist(); return { a, b, len: curM().len }; });
    ok(r.a.d === 0 && Math.abs(r.a.len - r.len) < .05 && Math.abs(r.b.d - r.len) < .05, '3D měří od startu, celkem jako Plán: ' + JSON.stringify(r));
    /* angličtina */
    const en = await ev(() => ({ wrap: trLookup('Skok č. 3: otočka doprava'), inside: trLookup('Skok č. 4: otočka vnitřkem'), del: trLookup('Překážka smazaná. Kroků trasy pryč: 2'), lock: trLookup('Zamknuté překážky zůstaly na místě: 1'), x: trLookup('X musí být mezi 0 a 40 m (plocha 40 × 20 m).') }));
    ok(en.wrap === 'Jump no. 3: wrap right' && en.inside === 'Jump no. 4: inside wrap' && en.del === 'Obstacle deleted. Route steps removed: 2' && /^Locked obstacles stayed in place: 1$/.test(en.lock || '') && /^X must be between 0 and 40 m \(field 40 × 20 m\)\.$/.test(en.x || ''), 'anglické hlášky: ' + JSON.stringify(en));
  });

  await T.ctx.close();
  return T.errs;
};
