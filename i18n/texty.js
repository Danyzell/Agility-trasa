/* Výpis všech českých textů aplikace s anglickým překladem (I18N: exact, num, re) z běžící aplikace, zdroj pro překlad
   do polštiny a němčiny a pro kontrolu v i18n/build.js --src. Potřebuje Playwright jako testy.
   Použití: node i18n/texty.js cs-en.json */
const path = require('path'), fs = require('fs');
const { chromium } = require('playwright');
const start = require('../tests/server');
const out = process.argv[2] || 'cs-en.json';
(async () => {
  const root = path.resolve(__dirname, '..'), srv = await start(root), base = 'http://127.0.0.1:' + srv.address().port;
  const b = await chromium.launch(); const ctx = await b.newContext({ serviceWorkers: 'block' });
  await ctx.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), r => r.abort());
  const p = await ctx.newPage(); await p.goto(base + '/?lang=en#home'); await p.waitForTimeout(1500);
  const d = await p.evaluate(() => ({ exact: I18N.exact, num: I18N.num, re: I18N.re.map(r => [r[0].source, r[1]]) }));
  fs.writeFileSync(out, JSON.stringify(d, null, 1));
  console.log(out + ': exact ' + Object.keys(d.exact).length + ', num ' + Object.keys(d.num).length + ', re ' + d.re.length);
  await b.close(); srv.close();
})().catch(e => { console.error(e); process.exit(1); });
