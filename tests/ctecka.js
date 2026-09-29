/* Plánek z obrázku a Stavba v terénu: syntetický plánek (mřížka, skoky, čísla v kroužcích, nakreslená čára) projde celou čtečkou */
const { phone, offline } = require('./helpers');

/* plánek jako od trenéra: bílé pozadí, šedá mřížka, skoky s křídly, čísla v kroužcích, černá čára trasy; běží v prohlížeči */
function makePlan(o) {
  o = o || {};
  var W = o.W || 40, H = o.H || 20, s = o.s || 40, pad = o.pad || 40;
  var c = document.createElement('canvas'); c.width = W * s + 2 * pad; c.height = H * s + 2 * pad;
  var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
  x.fillStyle = '#c8c8c8';
  for (var i = 0; i <= W; i++) x.fillRect(pad + i * s, pad, 1, H * s + 1);
  for (var j = 0; j <= H; j++) x.fillRect(pad, pad + j * s, W * s + 1, 1);
  function P(mx, my) { return [pad + mx * s, pad + my * s]; }
  var J = [], n = o.n || 12;
  for (var k = 0; k < n; k++) { var a = k / n * Math.PI * 2; J.push([W / 2 + Math.cos(a) * (W / 2 - 5), H / 2 + Math.sin(a) * (H / 2 - 4), (a * 180 / Math.PI + 90) % 360]); }
  x.strokeStyle = '#000'; x.lineWidth = 2; x.beginPath();
  J.forEach(function (q, k) { var p = P(q[0], q[1]); if (k) x.lineTo(p[0], p[1]); else x.moveTo(p[0], p[1]); }); x.stroke();
  J.forEach(function (q, k) {
    var p = P(q[0], q[1]), a = (q[2] + 90) * Math.PI / 180;
    x.save(); x.translate(p[0], p[1]); x.rotate(a);
    [-1, 1].forEach(function (sg) { x.fillStyle = '#9a9a9a'; x.fillRect(sg * 1.0 * s - (sg > 0 ? 0 : .5 * s), -.06 * s, .5 * s, .12 * s); });
    x.fillStyle = '#000'; x.fillRect(-1.0 * s, -1, 2.0 * s, 2);
    x.restore();
    var r = P(q[0] + 1.3, q[1] - 1.3);
    x.beginPath(); x.arc(r[0], r[1], .38 * s, 0, 7); x.fillStyle = '#fff'; x.fill(); x.lineWidth = 2; x.strokeStyle = '#000'; x.stroke();
    x.fillStyle = '#000'; x.font = 'bold ' + Math.round(.42 * s) + 'px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(String(k + 1), r[0], r[1] + 1);
  });
  return c.toDataURL('image/png');
}

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { viewport: { width: 1200, height: 900 } }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const MP = '(' + makePlan.toString() + ')';
  try {
    await page.goto(base + '/'); await page.waitForTimeout(300);

    for (const n of [12, 21]) {
      T.step('plánek s ' + n + ' čísly');
      const url = await ev(MP + '({n:' + n + '})');
      await ev(() => impOpen()); await ev(u => impLoadSrc(u), url); await page.waitForTimeout(600);
      ok(await ev(() => IMP.step === 'corners' && IMP.auto), 'mřížka plánku se nenašla');
      await ev(() => { window.__lt = []; new PerformanceObserver(l => l.getEntries().forEach(e => window.__lt.push(Math.round(e.duration)))).observe({ type: 'longtask' }); });
      await page.click('#imGo');
      await page.waitForFunction(() => IMP && IMP.step === 'res', null, { timeout: 120000 });
      const r = await ev(() => ({ route: IMP.R && IMP.R.route.length, nn: IMP.R && IMP.R.nn.join(','), lt: Math.max(0, ...window.__lt) }));
      const want = Array.from({ length: n }, (_, i) => i + 1).join(',');
      ok(r.route === n && r.nn === want, 'trasa z plánku se přečetla špatně: ' + JSON.stringify(r));
      /* čtení směrů se dělí na kousky: stránka nesmí zamrznout na sekundy */
      ok(r.lt < 1500, 'čtení plánku zablokovalo stránku na ' + r.lt + ' ms');
      await page.click('#imGo'); await page.waitForTimeout(300); /* Použít */
      if (await page.isVisible('#scrim')) await T.sheet('ok'); /* Nahradit rozpracovaný plán? */
      ok(await ev(n => S.route.length === n && S.obs.length >= n - 2, n), 'trasa z plánku se nepřenesla do Plánu');
    }

    T.step('Jiný obrázek během čtení');
    const url = await ev(MP + '({n:8})');
    await ev(() => impOpen()); await ev(u => impLoadSrc(u), url); await page.waitForTimeout(500);
    page.once('filechooser', () => {}); /* výběr souboru uživatel zruší */
    await page.click('#imGo'); await page.waitForTimeout(10); await page.click('#imPick'); await page.waitForTimeout(1500);
    ok(await ev(() => IMP.step === 'corners' && !$('imGo').disabled), 'Rozpoznat zůstalo zablokované');
    await ev(() => impClose());

    T.step('čísla se zdvojenými kroužky');
    const bad = await ev(() => {
      var s = 50, c = document.createElement('canvas'); c.width = 40 * s; c.height = 20 * s;
      var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
      var rings = []; for (var k = 1; k <= 12; k++) rings.push({ n: k, x: 3 + (k - 1) % 6 * 6, y: k <= 6 ? 8 : 14 });
      for (k = 1; k <= 6; k++) rings.push({ n: k, x: 3 + (k - 1) * 6, y: 18, dup: 1 });
      rings.forEach(function (r) { x.beginPath(); x.arc(r.x * s, r.y * s, .38 * s, 0, 7); x.lineWidth = 2; x.strokeStyle = '#000'; x.stroke(); x.fillStyle = '#000'; x.font = 'bold ' + Math.round(.42 * s) + 'px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(String(r.n), r.x * s, r.y * s + 1); });
      var N = PRR.nums(x.getImageData(0, 0, c.width, c.height), s);
      return N.list.filter(function (q) { var best = null, bd = 1e9; rings.forEach(function (r) { var d = Math.hypot(r.x - q.x, r.y - q.y); if (d < bd) { bd = d; best = r; } }); return !best.dup && q.n !== best.n; }).length;
    });
    ok(bad === 0, 'kroužky s čísly dostaly posunutá čísla: ' + bad);

    T.step('kompas na iPhonu');
    await page.goto(base + '/'); await page.waitForTimeout(300);
    await ev(() => {
      DeviceOrientationEvent.requestPermission = () => new Promise(r => setTimeout(() => r('granted'), 30));
      window.__fire = hd => ['deviceorientation', 'deviceorientationabsolute'].forEach(t => { const e = new Event(t); e.webkitCompassHeading = hd; e.alpha = 0; e.absolute = false; window.dispatchEvent(e); });
      fldOpen(); window.__iv = setInterval(() => window.__fire(100), 100);
    });
    await page.click('#fdCal'); await page.waitForTimeout(500);
    ok(await ev(() => FLD && FLD.cal && FLD.h0 === 100), 'kompas se na iPhonu po povolení nezapnul');
    await ev(() => { clearInterval(window.__iv); fldClose(); });
  } catch (e) { T.fail(e); }
  await T.ctx.close();
  return T.errs;
};
