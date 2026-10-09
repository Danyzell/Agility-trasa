/* Tlačítko Zpět: položení, posun, otočení (jeden krok), smazání, trasa, velikost plochy, Ctrl+Z, nová historie po načtení parkuru */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(400);
  const plan = () => ev(() => JSON.stringify({ o: S.obs, r: S.route, t: S.turns, W: S.W }));

  try {
  T.step('po načtení');
  ok(await ev(() => $('undoAll').disabled), 'Zpět má být po načtení neaktivní');
  const dirty0 = await ev(() => S.meta.dirty), start = await plan();
  await page.click('#zOut'); await page.click('#zOut');

  T.step('položení');
  const n0 = await ev(() => S.obs.length);
  ok(await ev(() => mode === 'view' && $('palette').offsetParent === null), 'načtený parkur se má otevřít v režimu Prohlížet');
  await T.tapField(20, 17);
  ok(await ev(() => S.obs.length) === n0, 'v režimu Prohlížet se klepnutím položila překážka');
  await page.click('#mBuild');
  await ev(() => { tool = 'jump'; ui(); });
  await T.tapField(20, 17);
  ok(await ev(() => S.obs.length) === n0 + 1, 'překážka se nepoložila');
  await page.click('#undoAll');
  ok(await plan() === start, 'Zpět nevrátil položení');
  ok(await ev(() => S.meta.dirty) === dirty0 && await ev(() => $('undoAll').disabled), 'po vrácení všeho má plán být jako po načtení');

  T.step('posun a otočení');
  const o1 = await ev(() => { const o = S.obs[0]; return { id: o.id, x: o.x, y: o.y, rot: o.rot }; });
  await ev(() => { $('toast').hidden = true; $('wrap').scrollIntoView({ block: 'center' }); });
  const b = await page.locator('#field').boundingBox(), W = await ev(() => S.W), H = await ev(() => S.H);
  const px = (x, y) => [b.x + x / W * b.width, b.y + y / H * b.height];
  await page.mouse.move(...px(o1.x, o1.y)); await page.mouse.down(); await page.mouse.move(...px(o1.x + 3, o1.y + 2), { steps: 6 }); await page.mouse.up(); await page.waitForTimeout(80);
  ok(await ev(id => getO(id).x, o1.id) > o1.x + 1, 'překážka se neposunula');
  await ev(id => { sel = id; ui(); }, o1.id);
  await ev(() => { const r = $('rot'); [20, 40, 60, 80].forEach(v => { r.value = v; r.dispatchEvent(new Event('input')); }); r.dispatchEvent(new Event('change')); });
  ok(await ev(() => UNDO.length) === 2, 'otočení posuvníkem má být jeden krok, kroků: ' + await ev(() => UNDO.length));
  await page.click('#undoAll');
  ok(await ev(id => getO(id).rot, o1.id) === o1.rot, 'Zpět nevrátil otočení');
  await page.click('#undoAll');
  ok(await plan() === start, 'Zpět nevrátil posun');

  T.step('smazání překážky v trase');
  const rid = await ev(() => S.route[2]);
  await ev(id => { sel = id; ui(); }, rid);
  await page.click('#delBtn');
  ok(await ev(id => !getO(id) && S.route.indexOf(id) < 0, rid), 'překážka se nesmazala');
  await page.click('#undoAll');
  ok(await plan() === start, 'Zpět nevrátil smazanou překážku i s trasou');

  T.step('trasa');
  await page.click('#mRoute');
  await page.click('#clrRoute'); await T.sheet('ok');
  ok(await ev(() => S.route.length) === 0, 'trasa se nesmazala');
  await page.click('#undoAll');
  ok(await plan() === start, 'Zpět nevrátil smazanou trasu');
  await page.click('#undoBtn');
  await page.click('#undoAll');
  ok(await plan() === start, 'Zpět nevrátil Vrátit poslední');

  T.step('velikost plochy');
  await page.click('#mBuild');
  await page.selectOption('#sizeSelect', '15x10');
  /* překážky by byly mimo plochu: aplikace se zeptá (Posunout dovnitř, Zmenšit poměrně, Zrušit) */
  if (await page.isVisible('#scrim')) await T.sheet('in');
  ok(await ev(() => S.W === 15 && S.obs.every(o => o.x <= 15)), 'plocha se nezmenšila');
  await page.click('#undoAll');
  ok(await plan() === start && await ev(() => $('sizeSelect').value === '40x20'), 'Zpět nevrátil velikost plochy');

  T.step('Ctrl+Z');
  await T.tapField(20, 17);
  await page.keyboard.press('Control+z');
  ok(await plan() === start, 'Ctrl+Z nevrátil změnu');

  T.step('načtení jiného parkuru');
  await T.tapField(20, 17);
  ok(!(await ev(() => $('undoAll').disabled)), 'Zpět má být aktivní');
  await T.nav('lib'); await page.click('#cards .pick >> nth=1');
  if (await page.isVisible('#scrim')) await T.sheet('ok');
  await page.waitForTimeout(150);
  ok(await ev(() => $('undoAll').disabled && UNDO.length === 0), 'po načtení parkuru má být historie prázdná');

    T.step('Ctrl+Z během tažení myší (počítač)');
    /* 3.3: u uživatele na počítači 74× „Cannot set properties of null (setting 'x')“ – tažená překážka zmizela (Zpět během tažení)
       a každý další pohyb myši hodil chybu. Položit skok, chytit ho myší, při tažení Ctrl+Z, dál hýbat, pustit. */
    await page.click('#mBuild').catch(() => {}); await ev(() => { closeSheet(); tool = 'jump'; ui(); $('toast').hidden = true; });
    /* skok položený jako klepnutím (nid, touch = krok do historie Zpět) na volném místě plochy */
    const nid = await ev(() => { sel = null; let x = 3, y = 3; for (let i = 0; i < 200 && S.obs.some(o => Math.hypot(o.x - x, o.y - y) < 3); i++) { x = 3 + (i * 2.7) % (S.W - 6); y = 3 + Math.floor(i / 8) * 2.5 % (S.H - 6); }
      const o = { id: nid(), type: 'jump', x, y, rot: 0 }; S.obs.push(o); touch(); render(); ui(); window.scrollTo(0, 0); return o.id; }); await page.waitForTimeout(300);
    ok(nid != null, 'skok pro tažení se nepoložil');
    const pos = await ev((id) => { const g = document.querySelector('#obs .ob[data-id="' + id + '"]'); if (!g) return null; const r = g.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }, nid);
    if (pos) {
      await page.mouse.move(pos.x, pos.y); await page.mouse.down(); await page.mouse.move(pos.x + 20, pos.y + 6, { steps: 4 });
      await page.keyboard.press('Control+z'); await page.waitForTimeout(100);
      await page.mouse.move(pos.x + 60, pos.y + 20, { steps: 6 }); await page.mouse.up(); await page.waitForTimeout(150);
      const r = await ev((id) => ({ gone: !getO(id), drag: drag, err: (lsGet(ERRK, { n: 0 }) || {}).last || '' }), nid);
      ok(r.gone && r.drag === null && !/setting 'x'/.test(r.err), 'Zpět během tažení: ' + JSON.stringify(r));
    }

  } catch (e) { T.fail(e); }
  await T.ctx.close();
  return T.errs;
};
