/* Jednoduchý server pro testy: servíruje složku aplikace. GET /__slow?ms=N zpomalí otevírání stránky (simulace slabého signálu),
   GET /__swv vydá „novou verzi“ service workeru. */
const http = require('http'), fs = require('fs'), path = require('path');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };

module.exports = function start(root, port) {
  let delay = 0, swv = 0;
  const srv = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    if (u.pathname === '/__slow') { delay = +u.searchParams.get('ms') || 0; res.end('ok ' + delay); return; }
    if (u.pathname === '/__swv') { swv++; res.end('ok ' + swv); return; } /* „nová verze“: sw.js dostane jiný obsah */
    let p = path.normalize(path.join(root, decodeURIComponent(u.pathname)));
    if (!p.startsWith(root)) { res.statusCode = 403; res.end(); return; }
    if (u.pathname.endsWith('/')) p = path.join(p, 'index.html');
    const nav = /index\.html$/.test(p); /* zpoždění pro každé stažení stránky (i ze service workeru) */
    setTimeout(() => fs.readFile(p, (err, data) => {
      if (err) { res.statusCode = 404; res.end('not found'); return; }
      res.setHeader('Content-Type', TYPES[path.extname(p)] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-cache');
      if (swv && /sw\.js$/.test(p)) data = Buffer.concat([data, Buffer.from('\n/* test ' + swv + ' */\n')]);
      res.end(data);
    }), nav ? delay : 0);
  });
  return new Promise(res => srv.listen(port || 0, '127.0.0.1', () => res(srv)));
};
