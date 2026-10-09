/* Stavba 4: přesná poloha vybrané překážky (X, Y, otočení po 1°, zámek), přichycení po 0,5 m se vzdálenostmi při tažení,
   celý parkur (zrcadlit, otočit, posunout, vystředit) a výběr víc překážek, odkaz ?kod=, porovnání dvou parkurů při přestavbě,
   plánek jako od rozhodčího, export ve třech verzích (závodník, rozhodčí, stavitel) a obrázek do příběhu 9:16. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true }); const { page, ok, ev } = T;
  let shared = null; const calls = [];
  await offline(T.ctx, { get_catalog: { version: 0 }, get_course: (a) => { calls.push(a); return shared; }, share_course: 'K7P2QX' });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash == null ? '#plan' : hash)); await w(300); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const px = (x, y) => ev(([x, y]) => { const b = $('field').getBoundingClientRect(); return { x: b.left + x / S.W * b.width, y: b.top + y / S.H * b.height }; }, [x, y]);
  const missEn = (list) => ev(l => l.filter(t => { const v = trLookup(t); return v == null || /[ěščřžýáíéůúňťď]/.test(v); }), list);
  const J = (id, x, y, rot) => ({ id, type: 'jump', x, y, rot: rot || 0 });
  /* parkur bez historie: překážky, trasa, plocha 40 × 20 m, režim Stavba */
  const setCourse = (obs, route, cls) => ev(([obs, route, cls]) => {
    S.meta.dirty = false; planReset(); S.W = 40; S.H = 20; S.meta.cls = cls || 'A2'; S.meta.name = 'Testovací parkur'; S.meta.id = null;
    S.obs = obs; S.route = route; S.sides = []; S.turns = []; S.hp = []; S.marks = []; syncSides(); mode = 'build'; tool = null; sel = null; zoom = 1;
    setSizeSel(); drawGrid(); save(); render(); ui(); topbar(); undoReset(); $('toast').hidden = true; $('wrap').scrollIntoView({ block: 'center' });
  }, [obs, route, cls]);
  const drag = async (x0, y0, x1, y1) => { const a = await px(x0, y0), b = await px(x1, y1); await page.mouse.move(a.x, a.y); await page.mouse.down(); await page.mouse.move(b.x, b.y, { steps: 6 }); await page.mouse.up(); await w(80); };

  await step('přesná poloha: X, Y, otočení po 1°, zámek', async () => {
    await fresh();
    await setCourse([J(1, 5, 10), J(2, 12, 10), { id: 3, type: 'tunnel', x: 22, y: 10, rot: 0, len: 5 }], [1, 2, 3]);
    await T.tapField(5, 10);
    let r = await ev(() => ({ sel, hidden: $('selRow').hidden, x: $('posX').value, y: $('posY').value, rr: $('posR').value, maxX: $('posX').max, maxY: $('posY').max, snap: $('snapBtn').getAttribute('aria-pressed'), lock: $('lockBtn').getAttribute('aria-pressed') }));
    ok(r.sel === 1 && !r.hidden && r.x === '5' && r.y === '10' && r.rr === '0' && r.maxX === '40' && r.maxY === '20' && r.snap === 'true' && r.lock === 'false', 'panel s polohou: ' + JSON.stringify(r));
    await page.fill('#posX', '7.3'); await page.fill('#posY', '11.6'); await w(80);
    r = await ev(() => ({ x: getO(1).x, y: getO(1).y, dirty: S.meta.dirty, und: UNDO.length }));
    ok(r.x === 7.3 && r.y === 11.6 && r.dirty && r.und === 2, 'zadání X a Y přesune překážku (každé pole je jeden krok Zpět): ' + JSON.stringify(r));
    await page.click('#undoAll'); ok(await ev(() => getO(1).x === 7.3 && getO(1).y === 10 && $('posY').value === '10'), 'Zpět vrátí jen Y a pole se obnoví');
    await page.click('#redoAll'); ok(await ev(() => getO(1).y === 11.6), 'Znovu');
    await page.fill('#posR', '37'); await w(60);
    ok(await ev(() => getO(1).rot === 37 && $('rotLbl').textContent === '37°'), 'otočení po 1°: ' + await ev(() => getO(1).rot));
    await page.fill('#posR', '-1'); await w(60);
    ok(await ev(() => getO(1).rot === 359 && $('posR').value === '359'), 'otočení −1° = 359°: ' + await ev(() => getO(1).rot + '/' + $('posR').value));
    /* mimo plochu nejde */
    await page.fill('#posX', '55'); await w(60); ok(await ev(() => getO(1).x === 40), 'X nad šířku plochy se má přirazit ke kraji: ' + await ev(() => getO(1).x));
    await page.fill('#posX', '7'); await w(60);
    /* zámek: prst s překážkou nepohne, pole X a Y jsou vypnutá, u překážky je zámek */
    await page.click('#lockBtn'); await w(60);
    r = await ev(() => ({ lock: getO(1).lock, dis: $('posX').disabled && $('posY').disabled, glyph: !!document.querySelector('#obs .ob[data-id="1"] .lk'), pressed: $('lockBtn').getAttribute('aria-pressed'), toast: $('toast').textContent }));
    ok(r.lock === 1 && r.dis && r.glyph && r.pressed === 'true' && /zamknutá/.test(r.toast), 'zámek polohy: ' + JSON.stringify(r));
    await ev(() => { $('toast').hidden = true; });
    await drag(7, 11.6, 12, 15);
    r = await ev(() => ({ x: getO(1).x, y: getO(1).y, sel, toast: $('toast').textContent }));
    ok(r.x === 7 && r.y === 11.6 && r.sel === 1 && /zamknutou polohu/.test(r.toast), 'zamknutá překážka se tahem nepohnula: ' + JSON.stringify(r));
    /* zámek přežije kontrolu dat i načtení parkuru; v exportu zámek není */
    ok(await ev(() => courseClean(S).obs[0].lock === 1 && fieldSvgString().indexOf('class="lk"') < 0), 'zámek se nezachoval v datech nebo je v exportu');
    await ev(() => { const c = { id: null, name: 'Se zámkem', cls: 'A2', W: 40, H: 20, obs: JSON.parse(JSON.stringify(S.obs)), route: S.route.slice(), turns: [] }; S.meta.dirty = false; loadCourse(c, true); mode = 'build'; ui(); render(); });
    ok(await ev(() => getO(1).lock === 1 && !!document.querySelector('#obs .ob[data-id="1"] .lk')), 'zámek se po načtení parkuru ztratil');
    await T.tapField(7, 11.6); await page.click('#lockBtn'); await w(60);
    ok(await ev(() => !getO(1).lock && !$('posX').disabled), 'odemknutí');
    await drag(7, 11.6, 12, 15);
    ok(await ev(() => getO(1).x > 9), 'po odemknutí jde překážka táhnout: ' + await ev(() => getO(1).x));
  });

  await step('přichycení po 0,5 m a vzdálenosti při tažení', async () => {
    await fresh();
    await setCourse([J(1, 5.2, 10.1), J(2, 12, 10), J(3, 20, 10)], [1, 2, 3]);
    await ev(() => { PLANUI.snap = true; lsSet('agility-planui-v1', PLANUI); });
    const a = await px(5.2, 10.1), b = await px(8.3, 12.4);
    await page.mouse.move(a.x, a.y); await page.mouse.down(); await page.mouse.move(b.x, b.y, { steps: 5 }); await w(80);
    let r = await ev(() => ({ dd: document.querySelectorAll('#marks .dd').length, txt: [...document.querySelectorAll('#marks .dd text, #marks text.dd')].map(t => t.textContent).join('|'), x: getO(1).x, y: getO(1).y }));
    await page.mouse.up(); await w(80);
    ok(r.dd === 2 && /\d m\|\d/.test(r.txt) && (r.x * 2) % 1 === 0 && (r.y * 2) % 1 === 0 && Math.abs(r.x - 8.5) <= .5 && Math.abs(r.y - 12.5) <= .5, 'během tažení vzdálenost k další překážce a poloha po 0,5 m: ' + JSON.stringify(r));
    ok(await ev(() => !document.querySelector('#marks .dd') && (getO(1).x * 2) % 1 === 0), 'po puštění vzdálenosti zmizí, poloha zůstane po 0,5 m');
    /* bez přichycení po 0,1 m */
    await page.click('#snapBtn'); await w(60);
    ok(await ev(() => PLANUI.snap === false && $('snapBtn').getAttribute('aria-pressed') === 'false' && /vypnuté/.test($('toast').textContent)), 'vypnutí přichycení');
    const p0 = await ev(() => [getO(1).x, getO(1).y]);
    await drag(p0[0], p0[1], 9.3, 12.4);
    r = await ev(() => getO(1).x);
    ok(Math.abs(r - 9.3) < .15 && (r * 2) % 1 !== 0, 'bez přichycení se posouvá po 0,1 m: ' + r);
    await page.click('#snapBtn'); ok(await ev(() => PLANUI.snap === true), 'zapnutí přichycení');
    /* překážka mimo trasu: vzdálenosti ke dvěma nejbližším */
    await ev(() => { S.obs.push({ id: 4, type: 'jump', x: 30, y: 15, rot: 0 }); render(); ui(); });
    const c = await px(30, 15), d = await px(31, 16);
    await page.mouse.move(c.x, c.y); await page.mouse.down(); await page.mouse.move(d.x, d.y, { steps: 4 }); await w(80);
    r = await ev(() => document.querySelectorAll('#marks .dd line').length); await page.mouse.up(); await w(60);
    ok(r === 2, 'překážka mimo trasu má čáry ke dvěma nejbližším: ' + r);
  });

  await step('celý parkur: zrcadlit, otočit, posunout, vystředit a Zpět', async () => {
    await fresh();
    await setCourse([J(1, 5, 5, 30), { id: 2, type: 'tunnel', x: 15, y: 5, rot: 0, len: 5, bend: 90 }, J(3, 25, 5), J(4, 30, 15, 90)], [1, 2, 3, 4]);
    await ev(() => { S.turns = [null, null, 'wL', null]; S.sides = ['L', 'L', 'P', 'P']; S.hp = [[2, 2], [10, 4]]; S.marks = [{ t: 'front', x: 8, y: 8 }]; render(); undoReset(); });
    const snap = () => ev(() => JSON.stringify({ W: S.W, H: S.H, obs: S.obs, turns: S.turns, sides: S.sides, hp: S.hp, marks: S.marks }));
    const s0 = await snap();
    await T.tool('whole'); await w(150);
    ok(await ev(() => /Celý parkur/.test($('sheet').querySelector('h3').textContent) && document.querySelectorAll('#sheet [data-w]').length === 6 && !document.querySelector('#sheet [data-w="r90"]').disabled), 'okno Celý parkur');
    await page.click('#sheet [data-w="mx"]'); await w(100);
    let r = await ev(() => ({ x1: getO(1).x, r1: getO(1).rot, bend: getO(2).bend, t: S.turns.map(t => t || '-').join(), s: S.sides.join(), hp: S.hp[0].join(), mk: S.marks[0].x, und: UNDO.length, toast: $('toast').textContent, open: !$('scrim').hidden }));
    ok(r.x1 === 35 && r.r1 === 150 && r.bend === -90 && r.t === '-,-,wR,-' && r.s === 'P,P,L,L' && r.hp === '38,2' && r.mk === 32 && r.und === 1 && /zrcadlený zleva doprava/.test(r.toast) && !r.open, 'zrcadlení zleva doprava: ' + JSON.stringify(r));
    await page.click('#undoAll'); ok((await snap()) === s0 && /úprava celého parkuru/.test(await page.textContent('#toast')), 'Zpět po zrcadlení: ' + await page.textContent('#toast'));
    await T.tool('whole'); await page.click('#sheet [data-w="my"]'); await w(100);
    r = await ev(() => ({ y1: getO(1).y, r1: getO(1).rot, y4: getO(4).y, r4: getO(4).rot, t: S.turns.map(t => t || '-').join() }));
    ok(r.y1 === 15 && r.r1 === 330 && r.y4 === 5 && r.r4 === 270 && r.t === '-,-,wR,-', 'zrcadlení shora dolů: ' + JSON.stringify(r));
    await page.click('#undoAll');
    await T.tool('whole'); await page.click('#sheet [data-w="r90"]'); await w(100);
    r = await ev(() => ({ W: S.W, H: S.H, p1: [getO(1).x, getO(1).y, getO(1).rot], sel: $('sizeSelect').value, vb: $('field').getAttribute('viewBox'), t: S.turns.map(t => t || '-').join(), toast: $('toast').textContent }));
    ok(r.W === 20 && r.H === 40 && r.p1.join() === '15,5,120' && r.sel === '20x40' && r.vb === '0 0 20 40' && r.t === '-,-,wL,-' && /otočený o 90°, plocha 20 × 40 m/.test(r.toast), 'otočení o 90°: ' + JSON.stringify(r));
    await page.click('#undoAll'); ok((await snap()) === s0 && await ev(() => $('sizeSelect').value === '40x20' && /úprava celého parkuru/.test($('toast').textContent)), 'Zpět po otočení o 90° nevrátil plochu');
    await T.tool('whole'); await page.click('#sheet [data-w="r180"]'); await w(100);
    r = await ev(() => ({ p1: [getO(1).x, getO(1).y, getO(1).rot], bend: getO(2).bend, t: S.turns.map(t => t || '-').join(), s: S.sides.join() }));
    ok(r.p1.join() === '35,15,210' && r.bend === 90 && r.t === '-,-,wL,-' && r.s === 'L,L,P,P', 'otočení o 180° nemění otočky a strany: ' + JSON.stringify(r));
    await page.click('#undoAll');
    await T.tool('whole'); await page.fill('#wDx', '2'); await page.fill('#wDy', '-1'); await page.click('#sheet [data-w="move"]'); await w(100);
    r = await ev(() => ({ p1: [getO(1).x, getO(1).y], hp: S.hp[0].join(), mk: [S.marks[0].x, S.marks[0].y].join(), toast: $('toast').textContent }));
    ok(r.p1.join() === '7,4' && r.hp === '4,1' && r.mk === '10,7' && /posunutý: 2,0 m doprava; 1,0 m nahoru/.test(r.toast), 'posunutí o metry: ' + JSON.stringify(r));
    await page.click('#undoAll');
    await T.tool('whole'); await page.fill('#wDx', '20'); await page.fill('#wDy', '0'); await page.click('#sheet [data-w="move"]'); await w(100);
    ok(await ev(() => getO(4).x === 40 && getO(3).x === 40 && /přiražené ke kraji: 2/.test($('toast').textContent)), 'posun mimo plochu přirazí ke kraji: ' + await ev(() => $('toast').textContent));
    await page.click('#undoAll');
    await T.tool('whole'); await page.click('#sheet [data-w="center"]'); await w(100);
    r = await ev(() => { let pts = []; S.obs.forEach(o => { pts = pts.concat(oPts(o)); }); const b = bbox(pts); return { cx: (b[0] + b[2]) / 2, cy: (b[1] + b[3]) / 2, d12: Math.hypot(getO(1).x - getO(2).x, getO(1).y - getO(2).y), toast: $('toast').textContent }; });
    ok(Math.abs(r.cx - 20) < .2 && Math.abs(r.cy - 10) < .2 && Math.abs(r.d12 - 10) < .01 && /vystředěný/.test(r.toast), 'vystředění: ' + JSON.stringify(r));
    await page.click('#undoAll'); ok((await snap()) === s0, 'Zpět po vystředění');
    /* prázdná plocha: jen rada; plocha na výšku 40 × 20 se otočit nedá, když by byla moc vysoká */
    await ev(() => { S.W = 60; S.H = 40; setSizeSel(); drawGrid(); render(); });
    await T.tool('whole'); ok(await ev(() => document.querySelector('#sheet [data-w="r90"]').disabled && /moc vysoká/.test($('sheet').textContent)), 'otočení o 90° u plochy 60 × 40 m má být zakázané');
    await T.sheet('x');
    await ev(() => { S.obs = []; S.route = []; syncSides(); render(); });
    await T.tool('whole'); ok(await ev(() => $('scrim').hidden && /nic není/.test($('toast').textContent)), 'prázdná plocha: Celý parkur jen poradí');
  });

  await step('výběr víc překážek: tah, otočení, zrcadlení, zámek, kopie, smazání', async () => {
    await fresh();
    await setCourse([J(1, 5, 5), J(2, 10, 5), J(3, 20, 15)], [1, 2, 3]);
    ok(await ev(() => !$('mselBtn').hidden && $('mselRow').hidden), 'tlačítko Vybrat víc překážek');
    await page.click('#mselBtn'); await w(100);
    ok(await ev(() => MSEL.on && !$('mselRow').hidden && $('selRow').hidden && $('mselInfo').textContent === 'Klepej na překážky' && $('mselRotL').disabled && /Klepáním vyber/.test($('hint').textContent)), 'výběr zapnutý');
    await T.tapField(5, 5); await T.tapField(10, 5);
    let r = await ev(() => ({ ids: MSEL.ids.join(), info: $('mselInfo').textContent, rects: document.querySelectorAll('#obs .msr').length, sel, en: !$('mselRotL').disabled }));
    ok(r.ids === '1,2' && r.info === 'Vybráno: 2 překážky' && r.rects === 2 && r.sel === null && r.en, 'dvě vybrané: ' + JSON.stringify(r));
    await T.tapField(10, 5); ok(await ev(() => MSEL.ids.join() === '1'), 'opětovné klepnutí odebere z výběru'); await T.tapField(10, 5);
    await T.tapField(30, 18); ok(await ev(() => MSEL.ids.join() === '1,2' && S.obs.length === 3), 'klepnutí do volna ve výběru nic nepoloží ani nezruší');
    await drag(5, 5, 10, 10);
    r = await ev(() => ({ o1: [getO(1).x, getO(1).y], o2: [getO(2).x, getO(2).y], o3: [getO(3).x, getO(3).y], und: UNDO.length, ids: MSEL.ids.join() }));
    ok(Math.abs(r.o1[0] - 10) < .6 && Math.abs(r.o1[1] - 10) < .6 && Math.abs(r.o2[0] - 15) < .6 && Math.abs(r.o2[1] - 10) < .6 && r.o3.join() === '20,15' && r.und === 1 && r.ids === '1,2', 'tah posune celý výběr: ' + JSON.stringify(r));
    await page.click('#undoAll'); ok(await ev(() => getO(1).x === 5 && getO(2).x === 10 && MSEL.on && MSEL.ids.join() === '1,2'), 'Zpět po posunu výběru');
    await page.click('#mselRotR'); await w(60);
    r = await ev(() => ({ r1: getO(1).rot, r2: getO(2).rot, y1: getO(1).y, y2: getO(2).y, x1: getO(1).x }));
    ok(r.r1 === 15 && r.r2 === 15 && Math.abs(r.y1 - 4.35) < .1 && Math.abs(r.y2 - 5.65) < .1 && Math.abs(r.x1 - 5.1) < .1, 'otočení výběru kolem jeho středu: ' + JSON.stringify(r));
    await page.click('#undoAll');
    await page.click('#mselMirror'); await w(60);
    r = await ev(() => ({ x1: getO(1).x, x2: getO(2).x, r1: getO(1).rot, x3: getO(3).x }));
    ok(r.x1 === 10 && r.x2 === 5 && r.r1 === 180 && r.x3 === 20, 'zrcadlení výběru: ' + JSON.stringify(r));
    await page.click('#undoAll');
    await page.click('#mselLock'); await w(60);
    ok(await ev(() => getO(1).lock === 1 && getO(2).lock === 1 && !getO(3).lock && $('mselLock').getAttribute('aria-pressed') === 'true'), 'zamknutí výběru');
    await page.click('#mselLock'); ok(await ev(() => !getO(1).lock && !getO(2).lock), 'odemknutí výběru');
    await page.click('#mselDup'); await w(60);
    r = await ev(() => ({ n: S.obs.length, ids: MSEL.ids.join(), p4: [getO(4).x, getO(4).y], p5: [getO(5).x, getO(5).y], toast: $('toast').textContent }));
    ok(r.n === 5 && r.ids === '4,5' && r.p4.join() === '6.5,6.5' && r.p5.join() === '11.5,6.5' && /Kopie: 2 překážky/.test(r.toast), 'kopie výběru: ' + JSON.stringify(r));
    await page.click('#mselDel'); await w(60);
    ok(await ev(() => S.obs.length === 3 && !MSEL.ids.length && S.route.join() === '1,2,3' && /Smazáno: 2 překážky/.test($('toast').textContent)), 'smazání výběru');
    await page.click('#mselAll'); ok(await ev(() => MSEL.ids.join() === '1,2,3' && $('mselAll').hidden), 'Vše');
    await page.click('#mselDel'); ok(await ev(() => !S.obs.length && !S.route.length), 'smazání všech i s trasou');
    await page.click('#undoAll'); ok(await ev(() => S.obs.length === 3 && S.route.length === 3), 'Zpět po smazání všech');
    await page.click('#mselDone'); ok(await ev(() => !MSEL.on && $('mselRow').hidden && !MSEL.ids.length), 'Hotovo vypne výběr');
    await page.click('#mselBtn'); await page.click('#mView'); ok(await ev(() => $('mselRow').hidden), 'panel výběru v Prohlížet');
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('A1')[0], true); });
    ok(await ev(() => !MSEL.on), 'načtení parkuru výběr vypne');
  });

  await step('odkaz ?kod=: načtení při spuštění, odkaz a Kopírovat odkaz ve Sdílet', async () => {
    shared = [{ code: 'K7P2QX', name: 'Parkur z odkazu', cls: 'A2', author: 'Trenér', data: { W: 40, H: 20, obs: [J(1, 5, 10), J(2, 15, 10), J(3, 25, 10)], route: [1, 2, 3] } }];
    await ev(() => { mySave([]); S.meta.dirty = false; save(); }); calls.length = 0;
    await page.goto('about:blank'); await page.goto(base + '/?kod=k7p2qx#home'); await w(1600);
    let r = await ev(() => ({ view, name: S.meta.name, my: myDB().length, src: myDB()[0] && myDB()[0].src, url: location.search, toast: $('toast').textContent }));
    ok(r.view === 'plan' && r.name === 'Parkur z odkazu' && r.my === 1 && r.src === 'kód K7P2QX' && r.url === '' && /z odkazu uložen do Moje/.test(r.toast) && calls.length === 1 && calls[0].p_code === 'K7P2QX', 'parkur z odkazu: ' + JSON.stringify(r) + ' ' + JSON.stringify(calls));
    /* podruhé stejný odkaz: parkur už je v Moje, server se nevolá */
    await page.goto('about:blank'); await page.goto(base + '/?kod=K7P2QX#home'); await w(1600);
    r = await ev(() => ({ name: S.meta.name, my: myDB().length, toast: $('toast').textContent }));
    ok(r.name === 'Parkur z odkazu' && r.my === 1 && /z odkazu je v Moje/.test(r.toast) && calls.length === 1, 'stejný odkaz podruhé: ' + JSON.stringify(r) + ' volání: ' + calls.length);
    /* neexistující kód */
    shared = []; await page.goto('about:blank'); await page.goto(base + '/?kod=ZZZZZZ#home'); await w(1600);
    ok(await ev(() => /Parkur s kódem ZZZZZZ neexistuje/.test($('toast').textContent) && myDB().length === 1), 'neexistující kód z odkazu: ' + await ev(() => $('toast').textContent));
    /* Sdílet: kód i odkaz */
    await ev(() => { closeSheet(); S.meta.dirty = false; loadCourse(myDB()[0], true); $('toast').hidden = true; });
    await T.tool('share'); await page.click('#sheet [data-a="mk"]'); await w(300);
    r = await ev(() => ({ code: $('shOut').querySelector('.code').textContent, link: $('shOut').getAttribute('data-link'), a: ($('shOut').querySelector('.sh-link a') || {}).href, msg: $('shOut').getAttribute('data-msg'), btn: !!$('shOut').querySelector('[data-a="lnk"]') }));
    ok(r.code === 'K7P2QX' && r.link === 'https://pawkur.cz/?kod=K7P2QX' && r.a === r.link && /zadej kód K7P2QX Nebo otevři odkaz: https:\/\/pawkur\.cz\/\?kod=K7P2QX$/.test(r.msg) && r.btn, 'kód s odkazem: ' + JSON.stringify(r));
    await ev(() => { window.__cp = null; copyText = function (t) { window.__cp = t; }; });
    await page.click('#shOut [data-a="lnk"]'); ok(await ev(() => window.__cp === 'https://pawkur.cz/?kod=K7P2QX'), 'Kopírovat odkaz');
    await ev(() => closeSheet());
  });

  await step('porovnání dvou parkurů: šedý parkur, co přestavět, prohození, export bez něj', async () => {
    await fresh(); await ev(() => mySave([]));
    await ev(() => { const L = myDB(); L.push({ id: 'my-cmp1', name: 'Druhý parkur', cls: 'A2', author: '', W: 40, H: 20, obs: [{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }, { id: 2, type: 'jump', x: 15, y: 12, rot: 0 }, { id: 3, type: 'tunnel', x: 25, y: 10, rot: 0, len: 5 }, { id: 4, type: 'jump', x: 30, y: 15, rot: 0 }], route: [1, 2, 3, 4], sides: [], turns: [] }); mySave(L); });
    await setCourse([J(1, 5, 10), J(2, 15, 10), { id: 3, type: 'tunnel', x: 25, y: 10, rot: 0, len: 5 }, J(5, 8, 16)], [1, 2, 3, 5]);
    await ev(() => { S.meta.name = 'První parkur'; topbar(); });
    await T.tool('cmp'); await w(150);
    ok(await ev(() => /Porovnat s jiným parkurem/.test($('sheet').querySelector('h3').textContent) && !!document.querySelector('#cmpPick [data-cid="my-cmp1"]') && document.querySelectorAll('#cmpPick [data-cid]').length > 1), 'okno výběru parkuru');
    await page.fill('#cmpQ', 'druh'); await w(60); ok(await ev(() => document.querySelectorAll('#cmpPick [data-cid]').length === 1), 'hledání v seznamu');
    await page.click('#cmpPick [data-cid="my-cmp1"]'); await w(200);
    let r = await ev(() => ({ cmp: !!CMP, bar: !$('cmpBar').hidden, info: $('cmpInfo').textContent, cob: document.querySelectorAll('#cmp .cob').length, h3: $('sheet').querySelector('h3').textContent, t: $('sheet').textContent.replace(/\s+/g, ' '), on: document.querySelector('#planTools [data-t="cmp"]').classList.contains('on') }));
    ok(r.cmp && r.bar && r.info === 'Šedě: Druhý parkur' && r.cob >= 8 && r.h3 === 'Co přestavět' && /Zůstává: 2 překážky/.test(r.t) && /Posunout \(1\)/.test(r.t) && /Skok č\. 2: 2,0 m dolů/.test(r.t) && /Postavit navíc \(1\)/.test(r.t) && /Skok č\. 4 na 30,0 · 15,0 m, 0°/.test(r.t) && /Odstranit \(1\)/.test(r.t) && /Skok č\. 4 na 8,0 · 16,0 m/.test(r.t) && r.on, 'rozdíly: ' + JSON.stringify(r));
    await T.sheet('x');
    ok(await ev(() => fieldSvgString().indexOf('cob') < 0 && document.querySelectorAll('#cmp .cob').length >= 8), 'export má být bez šedého parkuru a po exportu šedý parkur zůstává');
    /* v Prohlížet zůstává, lišta Co přestavět otevře seznam, Skrýt porovnání zruší */
    await page.click('#mView'); ok(await ev(() => !$('cmpBar').hidden && document.querySelectorAll('#cmp .cob').length >= 8), 'porovnání i v Prohlížet');
    await page.click('#cmpList'); await w(100); ok(await ev(() => /Co přestavět/.test($('sheet').querySelector('h3').textContent)), 'lišta otevře Co přestavět');
    await page.click('#sheet [data-a="off"]'); await w(100);
    ok(await ev(() => !CMP && $('cmpBar').hidden && !$('cmp').innerHTML && !document.querySelector('#planTools [data-t="cmp"]').classList.contains('on')), 'Skrýt porovnání');
    /* prohození: druhý parkur do Plánu, první zůstane šedě */
    await T.tool('cmp'); await page.click('#cmpPick [data-cid="my-cmp1"]'); await w(150); await T.sheet('x');
    await page.click('#cmpSwap'); await w(200);
    r = await ev(() => ({ name: S.meta.name, cmp: CMP && CMP.name, cob: document.querySelectorAll('#cmp .cob').length, toast: $('toast').textContent, n: S.obs.length }));
    ok(r.name === 'Druhý parkur' && r.cmp === 'První parkur' && r.cob >= 8 && /Prohozeno/.test(r.toast) && r.n === 4, 'prohození: ' + JSON.stringify(r));
    await page.click('#cmpOff'); ok(await ev(() => !CMP), 'Skrýt v liště');
    /* stejný parkur: žádné rozdíly */
    await ev(() => { cmpSet(myDB()[0]); cmpListSheet(); });
    ok(await ev(() => /Parkury jsou stejné/.test($('sheet').textContent) && /Zůstává: 4 překážky/.test($('sheet').textContent)), 'stejné parkury');
    await T.sheet('x'); await ev(() => cmpSet(null));
    await ev(() => mySave([]));
  });

  await step('plánek jako od rozhodčího', async () => {
    await fresh();
    await setCourse([J(1, 5, 10), J(2, 15, 10), J(3, 25, 10)], [1, 2, 3]);
    await ev(() => { PLANUI.judge = false; lsSet('agility-planui-v1', PLANUI); render(); });
    await T.tool('judge'); await w(100);
    let r = await ev(() => ({ j: PLANUI.judge, saved: lsGet('agility-planui-v1', {}).judge, on: document.querySelector('#planTools [data-t="judge"]').classList.contains('on'), jn: document.querySelectorAll('#bdg .jn').length, legs: document.querySelectorAll('#pth .leg').length,
      path: document.querySelector('#pth path').getAttribute('stroke-width'), mk: document.querySelector('#pth path').getAttribute('marker-end'), sf: [...document.querySelectorAll('#marks .sf text')].map(t => t.textContent + ':' + t.getAttribute('fill')).join('|'), toast: $('toast').textContent }));
    ok(r.j === true && r.saved === true && r.on && r.jn === 3 && r.legs === 0 && r.path === '.08' && r.mk === 'url(#arrJ)' && r.sf === 'START:#1a9d4b|CÍL:#d12f2f' && /od rozhodčího/.test(r.toast), 'plánek rozhodčího: ' + JSON.stringify(r));
    ok(await ev(() => { const g = document.querySelector('#bdg .jn'); const m = /translate\(([-\d.]+),([-\d.]+)\)/.exec(g.getAttribute('transform')); return +m[1] < 5 && +m[2] > 10; }), 'číslo má být na straně nájezdu (před skokem)');
    /* plánek rozhodčího zůstává po načtení jiného parkuru (je to volba zobrazení) */
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('A1')[0], true); });
    ok(await ev(() => PLANUI.judge && document.querySelectorAll('#bdg .jn').length > 10), 'volba plánku rozhodčího má zůstat i u dalšího parkuru');
    await T.tool('judge'); ok(await ev(() => !PLANUI.judge && document.querySelectorAll('#bdg .jn').length === 0 && document.querySelectorAll('#pth .leg').length > 10 && /Zpátky/.test($('toast').textContent)), 'vypnutí plánku rozhodčího');
  });

  await step('export ve třech verzích a obrázek do příběhu', async () => {
    await fresh();
    await setCourse([J(1, 5, 10), J(2, 15, 10), J(3, 25, 10)], [1, 2, 3]);
    await ev(() => { window.__del = null; window.deliverFile = function (b, m, n, sh, t) { window.__del = { size: b.size, m, n, sh, t }; return Promise.resolve(); }; PLANUI.expVer = 'comp'; lsSet('agility-planui-v1', PLANUI); });
    await T.tool('export'); await page.waitForSelector('#expPrev img');
    let r = await ev(() => ({ h3: $('sheet').querySelector('h3').textContent, vers: [...document.querySelectorAll('#expVer button')].map(b => b.getAttribute('data-ver') + (b.classList.contains('on') ? '*' : '')).join(), hint: $('expHint').textContent, story: !!document.querySelector('#sheet [data-a="story"]') }));
    ok(r.h3 === 'Export a tisk' && r.vers === 'comp*,judge,build' && /Pro závodníka/.test(r.hint) && r.story, 'okno exportu: ' + JSON.stringify(r));
    const sv = await ev(() => ({ comp: fieldSvgString(EXPV.comp), judge: fieldSvgString(EXPV.judge), build: fieldSvgString(EXPV.build) }));
    ok(!/class="leg"/.test(sv.comp) && !/class="jn"/.test(sv.comp) && /url\(#arr\)/.test(sv.comp) && /Start/.test(sv.comp), 'závodník: bez délek, běžná čísla');
    ok(/class="jn"/.test(sv.judge) && /arrJ/.test(sv.judge) && /START/.test(sv.judge) && !/class="leg"/.test(sv.judge), 'rozhodčí: kroužky a START');
    ok(/class="leg"/.test(sv.build) && /5,0 · 10,0/.test(sv.build) && !/class="jn"/.test(sv.build), 'stavitel: délky úseků a souřadnice');
    ok(await ev(() => !EXP.judge && !EXP.coords && !EXP.nolegs && document.querySelectorAll('#pth .leg').length === 2 && !$('marks').textContent.match(/5,0 · 10,0/)), 'po exportu zůstává běžný plánek bez souřadnic');
    await page.click('#expVer [data-ver="judge"]'); await w(150);
    ok(await ev(() => expVer() === 'judge' && lsGet('agility-planui-v1', {}).expVer === 'judge' && /od rozhodčího/.test($('expHint').textContent) && $('expPrev').getAttribute('data-ver') === 'judge' && document.querySelector('#expVer [data-ver="judge"]').classList.contains('on')), 'přepnutí verze');
    await page.click('#sheet [data-a="img"]'); await w(700);
    r = await ev(() => window.__del);
    ok(r && r.m === 'image/jpeg' && /-rozhodci\.jpg$/.test(r.n) && r.size > 10000, 'obrázek rozhodčího: ' + JSON.stringify(r));
    await page.click('#expVer [data-ver="build"]'); await page.click('#sheet [data-a="pdf"]'); await w(1200);
    r = await ev(() => window.__del);
    ok(r && r.m === 'application/pdf' && /-stavebni-plan\.pdf$/.test(r.n) && r.size > 10000, 'PDF stavitele: ' + JSON.stringify(r));
    await page.click('#expVer [data-ver="comp"]'); await page.click('#sheet [data-a="pdf"]'); await w(1200);
    r = await ev(() => window.__del);
    ok(r && r.m === 'application/pdf' && /^testovaci-parkur\.pdf$/.test(r.n) && r.size > 10000, 'PDF závodníka: ' + JSON.stringify(r));
    await page.click('#sheet [data-a="story"]'); await w(800);
    r = await ev(() => window.__del);
    ok(r && r.m === 'image/png' && /-pribeh\.png$/.test(r.n) && r.sh === true && /Parkur Testovací parkur/.test(r.t), 'obrázek do příběhu: ' + JSON.stringify(r));
    const cvs = await ev(() => { const c = shareCanvas(storyData()); const d = storyData(); return { w: c.width, h: c.height, stats: d.stats.map(s => s[1]).join(), kicker: d.kicker }; });
    ok(cvs.w === 1080 && cvs.h === 1920 && cvs.stats === 'délka,překážek,SČP' && cvs.kicker === 'Parkur A2', 'příběh 9:16: ' + JSON.stringify(cvs));
    ok(await ev(() => trLookup('Postav si ho v aplikaci Pawkur') === 'Build it in the Pawkur app' && trLookup('Vše') === 'All'), 'překlad výzvy v příběhu a Vše');
    await T.sheet('x');
    ok(await ev(() => (fieldSvgString().match(/marker-end/g) || []).length === 2), 'export bez voleb je jako dřív');
  });

  await step('angličtina', async () => {
    const miss = await missEn(['Vybrat víc překážek', 'Zamknout polohu', 'Odemknout polohu', 'Přichytávat po 0,5 m', 'Vybráno: 2 překážky', 'Klepej na překážky', 'Celý parkur', 'Zrcadlit, otočit, posunout', 'Porovnat s jiným', 'Plánek rozhodčího', 'Export a tisk',
      '↔ Zrcadlit zleva doprava', '↻ Otočit o 90°', 'Plocha bude 20 × 40 m.', 'Parkur otočený o 90°, plocha 20 × 40 m', 'Parkur zrcadlený zleva doprava', 'Posunuto. Překážky mimo plochu jsou přiražené ke kraji: 2', 'Parkur posunutý: 2,0 m doprava; 1,0 m nahoru',
      'Co přestavět', 'Šedě: Test B', 'Posunout (1):', 'Postavit navíc (1):', 'Odstranit (1):', 'Skok č. 2', '2,0 m dolů', 'otočit o 15°', 'na 30,0 · 15,0 m, 0°', 'na 8,0 · 16,0 m', 'Parkury jsou stejné.', 'Prohozeno: Test B je v Plánu, Test A šedě.',
      'Plánek jako od rozhodčího: čísla v kroužcích, tenká trasa, START zeleně a CÍL červeně.', 'CÍL', 'Závodník', 'Rozhodčí', 'Stavitel', 'Obrázek do příběhu', 'Plánek rozhodčího: Test', 'Plánek: Test', 'Pořadí překážek', 'Datum a místo', 'Poznámky',
      'Nebo otevři odkaz', 'Kopírovat odkaz', 'Parkur Test z odkazu je v Moje.', 'Parkur Test z odkazu uložen do Moje', 'Načítám parkur z odkazu…', 'Kopie: 2 překážky. Výběr je teď na kopiích.', 'Smazáno: 2 překážky', 'Překážka má zamknutou polohu. Odemkneš ji zámkem v panelu dole.']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    ok(await ev(() => trLookup('Skok č. 2') === 'Jump no. 2' && trLookup('Vybráno: 1 překážka') === 'Selected: 1 obstacle' && trLookup('Parkur otočený o 180°') === 'Course rotated by 180°' && trLookup('Parkur posunutý: 2,0 m doprava; 1,0 m nahoru') === 'Course moved: 2,0 m to the right; 1,0 m up'), 'překlady s čísly (čísla se při české aplikaci nemění): ' + await ev(() => [trLookup('Skok č. 2'), trLookup('Vybráno: 1 překážka'), trLookup('Parkur otočený o 180°'), trLookup('Parkur posunutý: 2,0 m doprava; 1,0 m nahoru')].join(' | ')));
  });

  await T.ctx.close();
  return T.errs;
};
