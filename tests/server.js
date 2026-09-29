/* Jednoduchý server pro testy: servíruje složku aplikace. GET /__slow?ms=N zpomalí otevírání stránky (simulace slabého signálu). */
const http = require('http'), fs = require('fs'), path = require('path');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };

module.exports = function start(root, port) {
  let delay = 0;
  const srv = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    if (u.pathname === '/__slow') { delay = +u.searchParams.get('ms') || 0; res.end('ok ' + delay); return; }
    let p = path.normalize(path.join(root, decodeURIComponent(u.pathname)));
    if (!p.startsWith(root)) { res.statusCode = 403; res.end(); return; }
    if (u.pathname.endsWith('/')) p = path.join(p, 'index.html');
    const nav = req.headers['sec-fetch-mode'] === 'navigate';
    setTimeout(() => fs.readFile(p, (err, data) => {
      if (err) { res.statusCode = 404; res.end('not found'); return; }
      res.setHeader('Content-Type', TYPES[path.extname(p)] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.end(data);
    }), nav ? delay : 0);
  });
  return new Promise(res => srv.listen(port || 0, '127.0.0.1', () => res(srv)));
};
