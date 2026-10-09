/* Vzhled 2 (skupina A): Parkury nad ohybem (pořadí a první karta), jedna barva výběru (čipy, tlačítka na Domů, odkazy),
   jedna značka (fotka otisku tlapky v horní liště, na Domů, v O aplikaci a na úvodní stránce), cíle pro palec 44 px, dlouhá okna s tlačítky dole,
   prázdné Moje s tlačítky, tmavá spodní lišta odlišná od stránky a drobnosti (stín souhrnu, SČP a MČP, hodnocení v Deníku,
   prázdné dny v týdnu, název obrazovky v liště, Zpět ve Videích, kontrast hlavičky úvodní stránky). */
const { phone, offline } = require('./helpers');
const fs = require('fs'), path = require('path');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  /* bez průvodce a Novinek, ať nic nepřekrývá měřené prvky */
  await T.ctx.addInitScript(() => { try { if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('2.7')); } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await page.waitForTimeout(400); await ev(() => { $('toast').hidden = true; }); };
  const size = async (w) => page.setViewportSize({ width: w, height: w === 360 ? 740 : 844 });
  const theme = async (t) => { await ev(t => { if (t) localStorage.setItem('agility-theme-v1', JSON.stringify(t)); else localStorage.removeItem('agility-theme-v1'); }, t); };
  /* barva tokenu (--accent…) převedená prohlížečem na rgb() */
  const tok = (name) => ev(n => { const p = document.createElement('i'); p.style.color = 'var(' + n + ')'; document.body.appendChild(p); const c = getComputedStyle(p).color; p.remove(); return c; }, name);

  await step('Parkury: pořadí a první karta nad ohybem', async () => {
    for (const w of [390, 360]) {
      await size(w); await fresh('#lib'); await ev(() => { libTab = 'A1'; libF = 'all'; show('lib'); }); await page.waitForTimeout(200);
      const r = await ev(() => {
        const v = $('v-lib'), kids = [...v.children].filter(e => e.offsetParent !== null).map(e => e.id || e.className.split(' ').pop());
        const mid = e => { const b = e.getBoundingClientRect(); return Math.round(b.top + b.height / 2); };
        return { kids, card: Math.round(document.querySelector('#cards .card').getBoundingClientRect().top), sortRow: mid(document.querySelector('.libmeta .progress')) === mid($('libSort')),
          btnRow: mid($('randBtn')) === mid($('genBtn')), catBelow: $('catBar').getBoundingClientRect().top > $('cards').getBoundingClientRect().bottom,
          lbl: [$('randBtn').textContent.trim(), $('genBtn').textContent.trim(), $('randBtn').getAttribute('aria-label'), $('genBtn').getAttribute('aria-label')], sw: document.documentElement.scrollWidth };
      });
      ok(r.kids.join() === 'libTabs,libFilters,libmeta,librow,cards,libNote,catBar', w + ' px: pořadí v Parkurech: ' + r.kids.join());
      ok(r.card <= 320, w + ' px: první karta parkuru má být nad ohybem (do 320 px, dřív 473 px): ' + r.card);
      ok(r.sortRow && r.btnRow, w + ' px: postup a Řadit, Náhodný a Generátor mají být vždy v jednom řádku: ' + JSON.stringify(r));
      ok(r.catBelow, w + ' px: Zkontrolovat nové parkury má být pod seznamem');
      ok(r.lbl.join('|') === 'Náhodný|Generátor|Náhodný nezaběhnutý|Generátor sekvencí a zahrady', w + ' px: krátké popisky, celý text v aria-label: ' + r.lbl.join('|'));
      ok(r.sw <= w, w + ' px: Parkury přetékají do strany');
    }
    await size(390);
  });

  await step('jedna barva výběru: čipy, tlačítka na Domů, odkazy', async () => {
    for (const th of ['light', 'dark']) {
      await theme(th); await fresh('#lib');
      const acc = await tok('--accent'), on = await tok('--on-accent');
      const chip = await ev(() => { const c = document.querySelector('#libFilters .chip.on'); return [getComputedStyle(c).backgroundColor, getComputedStyle(c).color]; });
      ok(chip[0] === acc && chip[1] === on, th + ': vybraný čip má mít barvu výběru: ' + chip + ' / ' + acc);
      await ev(() => { show('home'); }); await page.waitForTimeout(150);
      const go = await ev(() => [...document.querySelectorAll('#v-home .hm-go:not(.sec):not(.ok)')].map(b => getComputedStyle(b).backgroundColor + '|' + getComputedStyle(b).color));
      ok(go.length > 0 && go.every(g => g === acc + '|' + on), th + ': tlačítka na Domů mají mít barvu výběru: ' + go.join(', '));
      ok(await ev(() => [...document.querySelectorAll('#v-home .hm-week i.on')].every(i => getComputedStyle(i).backgroundImage === 'none')), th + ': dny s tréninkem bez limetkového přechodu');
      await ev(() => { moreTab = 'about'; show('more'); }); await page.waitForTimeout(150);
      const ln = await ev(() => [...document.querySelectorAll('#moreBody a[href="privacy.html"], #moreBody .hint a')].map(a => getComputedStyle(a).color));
      ok(ln.length >= 2 && ln.every(c => c === acc), th + ': odkazy v O aplikaci mají mít barvu výběru: ' + ln.join(', ') + ' / ' + acc);
      await ev(() => { moreTab = 'plus'; show('more'); }); await page.waitForTimeout(150);
      const pl = await ev(() => [...document.querySelectorAll('#moreBody a:not(.btn)')].map(a => getComputedStyle(a).color));
      ok(pl.every(c => c === acc), th + ': odkazy v Plus mají mít barvu výběru: ' + pl.join(', '));
    }
    await theme(null);
  });

  await step('jedna značka: fotka otisku tlapky jako ikona aplikace', async () => {
    await fresh('#lib');
    /* Domů se při show('home') vykreslí znovu s novým <img>; ten se chvíli načítá (na pomalém stroji i po dalším dotazu), tak měřit až po dokončení */
    const look = async (sel) => { await page.waitForFunction(s => { const i = document.querySelector(s + ' img'); return !i || i.complete; }, sel, { timeout: 5000 }).catch(() => {});
      return ev(s => { const e = document.querySelector(s), i = e && e.querySelector('img'); if (!i) return null; return { src: i.src.replace(/^.*\//, ''), loaded: i.naturalWidth > 0, fit: getComputedStyle(i).objectFit, ov: getComputedStyle(e).overflow, svg: e.querySelectorAll('svg').length, w: Math.round(i.getBoundingClientRect().width), h: Math.round(e.getBoundingClientRect().height) }; }, sel); };
    const top = await look('.top .brand'); await ev(() => show('home')); const home = await look('#v-home .hm-logo');
    await ev(() => { moreTab = 'about'; show('more'); }); await page.waitForTimeout(100); const about = await look('.about-h .about-ic');
    [['horní lišta', top], ['Domů', home], ['O aplikaci', about]].forEach(([n, x]) => ok(x && x.src === 'icon-192.png' && x.loaded && x.fit === 'cover' && x.ov === 'hidden' && x.svg === 0 && x.w >= 30 && x.w === x.h, n + ': značka má být fotka otisku tlapky (icon-192.png) vyplňující dlaždici: ' + JSON.stringify(x)));
    /* soubory ikon: stejná fotka ve třech velikostech (PNG, rozměr z hlavičky IHDR) */
    const png = (f) => { const b = fs.readFileSync(path.join(__dirname, '..', f)); return b.slice(1, 4).toString() === 'PNG' ? [b.readUInt32BE(16), b.readUInt32BE(20)] : null; };
    ok(String(png('icon-192.png')) === '192,192' && String(png('icon-512.png')) === '512,512' && String(png('icon-maskable-512.png')) === '512,512', 'ikony aplikace mají být PNG 192, 512 a 512 (maskable)');
    const web = fs.readFileSync(path.join(__dirname, '..', 'web', 'index.html'), 'utf8');
    const logo = (web.match(/<a class="logo"[\s\S]*?<\/a>/) || [''])[0];
    ok(/<img src="\.\.\/icon-192\.png"/.test(logo) && !/<svg/.test(logo), 'úvodní stránka: v hlavičce má být stejná fotka otisku jako ikona aplikace');
    ok(/\.logo i\{[^}]*overflow:hidden/.test(web) && /\.logo i img\{[^}]*object-fit:cover/.test(web), 'úvodní stránka: fotka má vyplnit dlaždici loga');
    const ics = [...web.matchAll(/<div class="ic">([\s\S]*?)<\/div>/g)].map(m => m[1]);
    ok(ics.length === 7 && ics.every(s => /^<svg /.test(s) && !/[\u{1F300}-\u{1FAFF}☀-➿]/u.test(s)), 'úvodní stránka: ikony funkcí mají být čárové SVG, ne emoji');
  });

  await step('cíle pro palec 44 px (390 px, dotyk)', async () => {
    await size(390); await fresh('#home');
    ok(await ev(() => matchMedia('(pointer:coarse)').matches), 'test má běžet s dotykem');
    await ev(() => { DOGS = [{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }]; DOGC = 'd1'; saveDogs(); show('home'); });
    const hit = (sel) => ev(s => [...document.querySelectorAll(s)].filter(e => e.offsetParent !== null && e.getBoundingClientRect().width > 0).map(e => { const r = e.getBoundingClientRect(); return [Math.round(r.width), Math.round(r.height)]; }), sel);
    const need = async (sel, wToo) => { const a = await hit(sel); ok(a.length > 0 && a.every(r => r[1] >= 44 && (!wToo || r[0] >= 44)), sel + ' pod 44 px: ' + JSON.stringify(a)); };
    for (const s of ['#v-home .hm-sport button', '#v-home .hm-dog', '#v-home .hm-sec button', '#v-home .hm-go']) await need(s, /sec button/.test(s));
    if (await ev(() => donateOn())) await need('#v-home .hm-sup');
    await ev(() => { libTab = 'A1'; show('lib'); }); await page.waitForTimeout(100);
    for (const s of ['.top .sport button', '#libTabs button', '#libFilters .chip', '#libSort', '#randBtn']) await need(s);
    await ev(() => show('run')); await page.waitForTimeout(100);
    for (const s of ['#runDogs .chip', '#manT', '#runSpecs .smini']) await need(s);
    await need('#resetClock', true);
    await ev(() => { moreTab = ''; show('more'); }); await page.waitForTimeout(100);
    if (await ev(() => donateOn())) await need('#supBtn', true); /* srdíčko v horní liště je od 3.1 jen ve Více */
    await ev(() => { mode = 'route'; show('plan'); ui(); render(); }); await page.waitForTimeout(100);
    await need('#routeList .tu'); await need('#undoAll', true); await need('#toolsBtn', true); await need('#modeRow .seg button');
    await ev(() => { moreTab = 'set'; show('more'); }); await page.waitForTimeout(100);
    await need('#moreBody .seg button');
    /* horní lišta nenarostla (přepínač 44 px, menší okraje) */
    ok(await ev(() => Math.round(document.querySelector('.top').getBoundingClientRect().height) <= 62), 'horní lišta je vyšší než 62 px: ' + await ev(() => document.querySelector('.top').getBoundingClientRect().height));
  });

  await step('dlouhé okno: tlačítka dole bez posouvání, bez rámečku', async () => {
    await size(360); await ev(() => localStorage.setItem('agility-lang-v1', JSON.stringify('en'))); await fresh('#home');
    await ev(() => { localStorage.removeItem('agility-news-v1'); newsCheck(); }); await page.waitForTimeout(400);
    const pos = async (where) => ev(w => { const s = $('sheet'); s.scrollTop = w === 'top' ? 0 : w === 'mid' ? (s.scrollHeight - s.clientHeight) / 2 : s.scrollHeight;
      const a = s.querySelector(':scope > .acts:last-child'), b = a.querySelector('.btn').getBoundingClientRect(), q = s.getBoundingClientRect(), r = a.getBoundingClientRect();
      return { long: s.scrollHeight > s.clientHeight + 40, gap: Math.round(q.bottom - r.bottom), btnIn: b.top >= q.top && b.bottom <= q.bottom && b.bottom <= innerHeight, pos: getComputedStyle(a).position }; }, where);
    for (const w of ['top', 'mid', 'end']) {
      const r = await pos(w);
      ok(r.long && Math.abs(r.gap) <= 1 && r.btnIn && r.pos === 'sticky', 'Novinky (' + w + '): tlačítko Pokračovat má být vidět u spodku okna: ' + JSON.stringify(r));
    }
    ok(await ev(() => document.activeElement === $('sheet') && getComputedStyle($('sheet')).outlineStyle === 'none'), 'okno s fokusem nemá mít rámeček');
    await ev(() => { closeSheet(); show('plan'); anaSheet(); }); await page.waitForTimeout(300);
    const r = await pos('top');
    ok(r.btnIn && r.pos === 'sticky', 'Rozbor v angličtině na 360 px: Zavřít má být vidět bez posouvání: ' + JSON.stringify(r));
    ok(await ev(() => $('sheet').scrollWidth <= $('sheet').clientWidth + 1), 'Rozbor v angličtině přetéká do strany');
    await ev(() => { closeSheet(); localStorage.removeItem('agility-lang-v1'); }); await size(390);
  });

  await step('prázdné Moje: bez filtrů, s tlačítky', async () => {
    await fresh('#lib'); await ev(() => { localStorage.removeItem(MYK); libTab = 'my'; libF = 'all'; show('lib'); }); await page.waitForTimeout(150);
    const vis = () => ev(() => ['#libFilters', '.libmeta', '.librow'].map(s => document.querySelector(s).offsetParent !== null));
    ok((await vis()).every(v => !v), 'prázdné Moje: filtry, postup, Náhodný | Generátor a Řadit mají být schované');
    ok(await page.isVisible('#cards .empty-state [data-lnew]') && await page.isVisible('#cards .empty-state [data-limp]'), 'prázdné Moje: chybí Nový parkur a Plánek z fotky');
    await page.click('#cards [data-lnew]'); await page.waitForTimeout(200);
    if (await page.isVisible('#scrim')) await T.sheet('ok');
    ok(await ev(() => view === 'plan' && S.obs.length === 0 && S.meta.id === null && mode === 'build'), 'Nový parkur z prázdného Moje neotevřel prázdný plán: ' + await ev(() => [view, S.obs.length, S.meta.id, mode].join()));
    await ev(() => { libTab = 'my'; show('lib'); }); await page.click('#cards [data-limp]'); await page.waitForTimeout(200);
    ok(await ev(() => view === 'plan' && !!$('ovImp')), 'Plánek z fotky z prázdného Moje neotevřel čtečku plánku');
    await ev(() => { impClose(); libTab = 'A1'; libF = 'fav'; show('lib'); }); await page.waitForTimeout(100);
    ok((await vis()).every(v => v), 'filtr bez výsledků nesmí schovat filtry (jinak nejde vybrat jiný)');
    await ev(() => { libF = 'all'; libRender(); });
    ok(await ev(() => trLookup('Náhodný') === 'Random' && trLookup('Nový parkur') === 'New course' && trLookup('Plánek z fotky') != null), 'chybí anglický překlad');
  });

  await step('tmavá spodní lišta se liší od stránky', async () => {
    await theme('dark'); await fresh('#home');
    const r = await ev(() => {
      const P = c => { if (/^color\(srgb/.test(c)) { const v = c.replace(/^color\(srgb\s*|\)$/g, '').split(/[\s/]+/).filter(Boolean).map(Number); return [v[0] * 255, v[1] * 255, v[2] * 255, v.length > 3 ? v[3] : 1]; } const m = c.match(/[\d.]+/g).map(Number); return [m[0], m[1], m[2], m.length > 3 ? m[3] : 1]; };
      const L = c => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(c[0]) + .7152 * f(c[1]) + .0722 * f(c[2]); };
      const page = P(getComputedStyle(document.body).backgroundColor), n = P(getComputedStyle(document.querySelector('.nav')).backgroundColor);
      const nav = [0, 1, 2].map(i => n[i] * n[3] + page[i] * (1 - n[3])), lab = P(getComputedStyle(document.querySelector('.nav button:not(.on) span:last-child')).color);
      const cr = (a, b) => { const x = L(a), y = L(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
      return { navVsPage: Math.round(cr(nav, page) * 100) / 100, label: Math.round(cr(lab, nav) * 100) / 100, border: getComputedStyle(document.querySelector('.nav')).borderTopColor, lighter: L(nav) > L(page) };
    });
    ok(r.lighter && r.navVsPage >= 1.15, 'tmavá lišta má být světlejší než stránka: ' + JSON.stringify(r));
    ok(r.label >= 4.5, 'popisky tmavé lišty pod 4,5 : 1: ' + JSON.stringify(r));
    ok(!/rgba\(255, 255, 255, 0\.07\)/.test(r.border), 'tmavá lišta má mít výraznější okraj: ' + r.border);
    await theme(null);
  });

  await step('drobnosti: stín souhrnu, SČP a MČP, hodnocení, týden, název obrazovky, Videa', async () => {
    await fresh('#run'); await ev(() => { loadCourse(listFor('A2')[2], true); show('run'); }); await page.waitForTimeout(150);
    ok(await ev(() => getComputedStyle($('runSpecs')).boxShadow === 'none' && $('runSpecs').classList.contains('mini')), 'souhrn v řádku má hranatý stín');
    /* obě dvojice (SČP 45 s, MČP 63 s) jsou samostatné prvky se stejnou mezerou mezi popiskem a hodnotou */
    const cs = await ev(() => { const k = [...$('clockSub').childNodes].filter(n => n.nodeType === 1 || n.textContent.trim()); return { n: k.length, span: k.every(s => s.tagName === 'SPAN' && !!s.querySelector('b')), gap: k.map(s => s.nodeType === 1 ? getComputedStyle(s).columnGap : 'text'), t: k.map(s => s.textContent.replace(/\s+/g, ' ').trim()) }; });
    ok(cs.n === 2 && cs.span && cs.gap[0] === cs.gap[1] && /^SČP \d+ s$/.test(cs.t[0]) && /^MČP \d+ s$/.test(cs.t[1]), 'SČP a MČP pod stopkami nejsou stejně: ' + JSON.stringify(cs));
    await ev(() => { DOGS = [{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }]; DOGC = 'd1'; saveDogs(); const L = listFor('A2'), g = ['V', 'VD', 'D', 'BO', 'DIS'];
      g.forEach((x, i) => setMark(L[i].id, { done: true, runs: [{ d: Date.now() - i * 1000, t: 40, f: 0, r: 0, tot: [0, 8, 18, 30, 0][i], g: x, sct: 45, mct: 63, len: 150, dog: 'd1', cls: 'A2' }] })); moreTab = 'diary'; show('more'); });
    await page.waitForTimeout(200);
    const want = await ev(() => ['--g-v', '--g-vd', '--g-d', '--bad', '--bad'].map(n => { const p = document.createElement('i'); p.style.color = 'var(' + n + ')'; document.body.appendChild(p); const c = getComputedStyle(p).color; p.remove(); return c; }));
    const bars = await ev(() => ['V', 'VD', 'D', 'BO', 'DIS'].map(k => { const i = document.querySelector('#moreBody .grades tr.' + k + ' .bar i'); return i ? getComputedStyle(i).backgroundColor : null; }));
    ok(bars.join() === want.join(), 'pruhy Hodnocení běhů mají barvy hodnocení: ' + bars.join(' | ') + ' / ' + want.join(' | '));
    await ev(() => show('home')); await page.waitForTimeout(100);
    ok(await ev(() => { const d = [...document.querySelectorAll('#v-home .hm-week i:not(.on)')]; return d.length > 0 && d.every(i => getComputedStyle(i).borderTopWidth === '1px' && getComputedStyle(i).borderTopStyle === 'solid'); }), 'prázdné dny v Tento týden nemají okraj');
    for (const w of [390, 360]) {
      await size(w);
      for (const [v, t] of [['lib', 'Parkury'], ['more', 'Více'], ['video', 'Videa']]) {
        await ev(v => { if (v === 'more') moreTab = ''; if (v === 'video') VID.id = null; show(v); }, v); await page.waitForTimeout(80);
        /* celý název se musí vejít s písmem aplikace (Barlow Condensed); testy běží bez internetu se záložním písmem, pak stačí, že je vidět */
        const r = await ev(() => { const a = $('appTitle'), b = a.getBoundingClientRect(), n = $('appName'), font = !!document.fonts && [...document.fonts].some(f => /Barlow Condensed/.test(f.family) && f.status === 'loaded');
          return { vis: a.offsetParent !== null && b.width > 40, t: n.textContent, full: !font || n.scrollWidth <= n.clientWidth + 1, sw: document.documentElement.scrollWidth, sup: $('supBtn').hidden || $('supBtn').getBoundingClientRect().right <= document.documentElement.clientWidth }; });
        ok(r.vis && r.t === t && r.full && r.sw <= w && r.sup, w + ' px: název obrazovky v horní liště (' + t + '): ' + JSON.stringify(r));
      }
    }
    await size(390);
    await ev(() => { VID.id = null; show('video'); }); await page.waitForTimeout(100);
    ok(await page.isVisible('#vidBack') && await ev(() => !$('vidList').contains($('vidBack'))), 'Videa: chybí Zpět (a nesmí být v seznamu témat)');
    await page.click('#vidList [data-top] >> nth=0'); await page.waitForTimeout(150);
    ok(!(await page.isVisible('#vidBack')), 'u otevřeného tématu má být jen Všechna témata');
    await page.click('#vidDetail [data-vback]'); await page.waitForTimeout(100);
    await page.click('#vidBack'); await page.waitForTimeout(150);
    ok(await ev(() => view === 'more' && moreTab === '') && await page.isVisible('#moreTabs'), 'Zpět ve Videích má vrátit nabídku Více');
    /* úvodní stránka na telefonu: slabší fotka v hlavičce a výraznější text */
    await size(360); await page.goto(base + '/web/index.html'); await page.waitForTimeout(300);
    const h = await page.evaluate(() => [getComputedStyle(document.querySelector('.hero-pic')).opacity, getComputedStyle(document.querySelector('.hero .lead')).color]);
    ok(+h[0] <= .12 && /0\.9\d?\)$/.test(h[1]), 'úvodní stránka na 360 px: fotka v hlavičce nejvýš 0,12 a text aspoň 0,9: ' + h.join(' | '));
    await size(390);
  });

  await T.ctx.close();
  return T.errs;
};
