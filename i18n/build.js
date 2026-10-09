/* Slovník polštiny a němčiny pro aplikaci: z jednoho nebo víc souborů (JSON se stejnou stavbou jako anglický slovník: exact, num, re,
   u polštiny navíc plural; nebo už hotový i18n/<jazyk>.js; pozdější soubor přepíše dřívější) udělá i18n/<jazyk>.js,
   který index.html načte jen pro zvolený jazyk.
   S --src (výpis českých textů z aplikace, node i18n/texty.js) zahodí klíče, které už v aplikaci nejsou, seřadí regulární výrazy
   jako zdroj (první shoda vyhrává) a vypíše texty bez překladu (ty se v aplikaci ukážou anglicky).
   Použití: node i18n/build.js pl i18n/pl.js nove-texty-pl.json --src cs-en.json   (výsledek i18n/pl.js) */
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2), si = args.indexOf('--src'), srcF = si >= 0 ? args[si + 1] : null;
const [lang, ...files] = args.filter((a, i) => si < 0 || (i !== si && i !== si + 1));
if (!/^(pl|de)$/.test(lang || '') || !files.length) { console.error('použití: node i18n/build.js pl|de <slovník.json|.js> [doplněk.json …] [--src cs-en.json]'); process.exit(2); }
/* hotový i18n/xx.js: JSON za „window.I18N_L=“ */
const read = (f) => { const t = fs.readFileSync(f, 'utf8'); return JSON.parse(/\.js$/.test(f) ? t.slice(t.indexOf('window.I18N_L=') + 14).replace(/;\s*$/, '') : t); };
const out = { lang, exact: {}, num: {}, re: [] };
for (const f of files) {
  const d = read(f);
  Object.assign(out.exact, d.exact || {}); Object.assign(out.num, d.num || {});
  (d.re || []).forEach(r => { const i = out.re.findIndex(x => x[0] === r[0]); if (i >= 0) out.re[i] = [r[0], r[1]]; else out.re.push([r[0], r[1]]); });
  if (lang === 'pl' && d.plural) out.plural = Object.assign(out.plural || {}, d.plural);
}
if (srcF) {
  const src = JSON.parse(fs.readFileSync(srcF, 'utf8')), miss = [];
  for (const k of Object.keys(out.exact)) if (!(k in src.exact)) delete out.exact[k];
  for (const k of Object.keys(out.num)) if (!(k in src.num)) delete out.num[k];
  const ord = new Map(src.re.map((r, i) => [r[0], i]));
  out.re = out.re.filter(r => ord.has(r[0])).sort((a, b) => ord.get(a[0]) - ord.get(b[0]));
  Object.keys(src.exact).forEach(k => { if (!(k in out.exact)) miss.push('exact ' + k); });
  Object.keys(src.num).forEach(k => { if (!(k in out.num)) miss.push('num ' + k); });
  src.re.forEach(r => { if (!out.re.some(x => x[0] === r[0])) miss.push('re ' + r[0]); });
  console.log(miss.length ? 'bez překladu (' + miss.length + '):\n  ' + miss.slice(0, 40).join('\n  ') : 'všechny texty přeložené');
}
const head = '/* Pawkur: slovník ' + (lang === 'pl' ? 'polštiny' : 'němčiny') + ' (čeština → ' + lang + '). Vzniká přes i18n/build.js; texty, které tu chybí, se ukážou anglicky. */\n';
/* položka na řádek (čitelný rozdíl v gitu); zalomení jen mezi položkami, nikdy uvnitř textu */
const obj = (o) => '{' + Object.keys(o).map(k => JSON.stringify(k) + ':' + JSON.stringify(o[k])).join(',\n') + '}';
const body = '{"lang":' + JSON.stringify(lang) + ',\n"exact":' + obj(out.exact) + ',\n"num":' + obj(out.num) + ',\n"re":[' + out.re.map(r => JSON.stringify(r)).join(',\n') + ']' + (out.plural ? ',\n"plural":' + obj(out.plural) : '') + '}';
JSON.parse(body); /* pojistka: výsledek musí být platný JSON */
fs.writeFileSync(path.join(__dirname, lang + '.js'), head + 'window.I18N_L=' + body + ';\n');
console.log(lang + '.js: exact ' + Object.keys(out.exact).length + ', num ' + Object.keys(out.num).length + ', re ' + out.re.length + (out.plural ? ', plural ' + Object.keys(out.plural).length : ''));
