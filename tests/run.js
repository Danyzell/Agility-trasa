/* Testy aplikace v prohlížeči (Chromium přes Playwright).
   Spuštění:  npm install --no-save playwright && npx playwright install chromium && node tests/run.js
   Jen některé sady:  node tests/run.js smoke undo */
const path = require('path');
const { chromium } = require('playwright');
const start = require('./server');

const SUITES = ['smoke', 'flows', 'undo', 'opravy', 'ctecka', 'sw', 'tyden', 'v3d', 'sekvence', 'kacr', 'zahrada', 'pasti', 'pamet', 'zavody', 'pece', 'autor', 'tunel', 'ucet', 'kolbiste', 'stavba', 'stavba2', 'stavba3', 'denik', 'zjednoduseni', 'hoopers', 'anglictina', 'postup', 'pravidla', 'listina', 'presun', 'plus', 'otazka', 'vzhled', 'vzhled2', 'sirka'];

(async () => {
  const pick = process.argv.slice(2).filter(a => SUITES.includes(a));
  const root = path.resolve(__dirname, '..');
  const srv = await start(root);
  const base = 'http://127.0.0.1:' + srv.address().port;
  /* WebGL přes softwarový SwiftShader: 3D animace ve Videích jdou otestovat i bez grafické karty */
  const browser = await chromium.launch({ args: ['--ignore-certificate-errors', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  let failed = 0;
  for (const name of pick.length ? pick : SUITES) {
    const t0 = Date.now();
    let errs;
    try { errs = await require('./' + name)({ browser, base }); }
    catch (e) { errs = ['výjimka: ' + String(e && e.message || e).split('\n')[0]]; }
    const s = ((Date.now() - t0) / 1000).toFixed(1);
    if (errs.length) { failed++; console.log(`✗ ${name} (${s} s)\n  - ` + errs.join('\n  - ')); }
    else console.log(`✓ ${name} (${s} s)`);
  }
  await browser.close(); srv.close();
  process.exit(failed ? 1 : 0);
})();
