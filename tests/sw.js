/* Service worker: start bez internetu, rychlé otevření z uložené verze při pomalém serveru, uložené písmo */
module.exports = async function ({ browser, base }) {
  /* bez přesměrování požadavků: service worker musí vidět skutečné požadavky */
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, ignoreHTTPSErrors: true });
  const page = await ctx.newPage();
  const errs = [], ok = (c, m) => { if (!c) errs.push(m); };
  page.on('pageerror', e => errs.push('chyba stránky: ' + e.message));
  await page.request.get(base + '/__slow?ms=0');
  await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300);
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload(); await page.waitForTimeout(1500);
  ok(await page.evaluate(() => !!navigator.serviceWorker.controller), 'stránku neřídí service worker');
  const c = await page.evaluate(async () => { const o = {}; for (const k of await caches.keys()) o[k] = (await (await caches.open(k)).keys()).length; return o; });
  ok(Object.keys(c).some(k => /^agility-trasa-/.test(k) && c[k] >= 6), 'chybí uložená aplikace: ' + JSON.stringify(c));
  /* písmo se uloží, jen když je Google Fonts dostupné */
  if (await page.evaluate(() => document.fonts.check('16px Barlow'))) ok(c['agility-fonts'] > 0, 'písmo se neuložilo pro offline');

  /* jiný soubor otevřený v rozsahu aplikace se nesmí uložit místo aplikace */
  await page.goto(base + '/tests/run.js'); await page.waitForTimeout(300);
  const ct = await page.evaluate(async () => { const r = await caches.match(location.origin + '/index.html'); return r ? r.headers.get('content-type') : ''; });
  ok(/text\/html/.test(ct), 'jako aplikace se uložil jiný soubor (' + ct + ')');
  await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(400);

  await ctx.setOffline(true);
  await page.reload(); await page.waitForTimeout(600);
  ok(await page.evaluate(() => typeof S === 'object' && document.querySelectorAll('#obs .ob').length > 0), 'aplikace se bez internetu neotevřela');
  await ctx.setOffline(false);

  await page.request.get(base + '/__slow?ms=9000');
  const t0 = Date.now();
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 20000 });
  const dt = Date.now() - t0;
  ok(dt < 6000, 'při pomalém serveru se čekalo ' + dt + ' ms (má se otevřít uložená verze do ~3 s)');
  ok(await page.evaluate(() => typeof S === 'object'), 'aplikace se po pomalém startu neotevřela');
  await page.request.get(base + '/__slow?ms=0');

  /* nová verze: po kontrole aktualizace se ukáže lišta s Obnovit */
  await page.request.get(base + '/__swv');
  await page.evaluate(() => navigator.serviceWorker.getRegistration().then(r => r.update()));
  await page.waitForSelector('#updBar', { timeout: 10000 }).catch(() => {});
  ok(await page.isVisible('#updBar'), 'po vydání nové verze se neukázala lišta Obnovit');
  if (await page.isVisible('#updBar')) { await Promise.all([page.waitForNavigation(), page.click('#updGo')]); ok(!(await page.isVisible('#updBar')), 'Obnovit nenačetlo stránku znovu'); }

  await ctx.close();
  return errs;
};
