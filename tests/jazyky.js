/* Polština a němčina (3.4): slovník ze souboru i18n/pl.js a i18n/de.js jen pro zvolený jazyk, angličtina jako záloha,
   polské množné číslo (22 przeszkody), formát čísel a data, výchozí pravidla podle jazyka (PL, AT ve Vídni, DE), přepínač v Nastavení
   a v průvodci, na hlavních obrazovkách žádné české zbytky (texty uživatele s translate="no" se nepočítají). */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const errs = [];
  const CZ = /[ěščřžůťďňáíéúýĚŠČŘŽŮŤĎŇÁÍÉÚÝ]/;
  /* viditelné texty s českými písmeny mimo uživatelská data */
  const leftovers = (page) => page.evaluate((czs) => {
    const cz = new RegExp(czs), out = [], w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n;
    while ((n = w.nextNode())) {
      const t = n.nodeValue.replace(/\s+/g, ' ').trim(); if (!t || !cz.test(t)) continue;
      const el = n.parentElement; if (!el || el.closest('[translate="no"],[data-nt],script,style,noscript,[hidden]')) continue;
      if (!el.getClientRects().length) continue;
      out.push(t.slice(0, 90));
    }
    return [...new Set(out)];
  }, CZ.source);
  for (const [lang, tz] of [['pl', 'Europe/Warsaw'], ['de', 'Europe/Vienna'], ['de', 'Europe/Berlin']]) {
    const T = await phone(browser, { isMobile: true, timezoneId: tz }); const { page, ok, ev } = T;
    await offline(T.ctx, { get_catalog: { version: 0 } });
    await T.ctx.addInitScript(() => { try { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-news-v1', JSON.stringify('3.0')); localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 }));
      localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 5, at: Date.now() })); /* plná Domů (Dnes, plán na týden) */
      if (localStorage.getItem('agility-dogs-v1') == null) localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }])); } catch (e) {} });
    const L = lang + ' ' + tz.split('/')[1];
    const step = async (label, fn) => { T.step(L + ': ' + label); try { await fn(); } catch (e) { T.errs.push(`[${L}: ${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
    /* české zbytky a dlouhá slova (němčina): stránka nesmí přetéct do strany */
    const left = async (where) => { const l = await leftovers(page); ok(!l.length, where + ': české texty bez překladu: ' + JSON.stringify(l.slice(0, 12)) + (l.length > 12 ? ' … (' + l.length + ')' : ''));
      const w = await page.evaluate(() => [document.documentElement.scrollWidth, innerWidth]); ok(w[0] <= w[1] + 1, where + ': stránka je širší než displej ' + JSON.stringify(w)); };

    await step('slovník, formáty a pravidla', async () => {
      await page.goto(base + '/?lang=' + lang + '#home'); await page.waitForTimeout(800);
      const r = await ev(() => ({ lang: LANG, html: document.documentElement.lang, dict: !!(window.I18N_L && I18N_L.lang === LANG), prim: !!I18NP, loc: LOC, rules: RCC, fmt: fmt(1.5), home: T('Domů'), run: T('Běh'), cz: CZONLY, us: !!US_EN,
        date: compDate({ from: '2026-10-08', to: '2026-10-09' }) }));
      ok(r.lang === lang && r.html === lang && r.dict && r.prim && r.fmt === '1,5' && r.cz && !r.us, 'jazyk a slovník: ' + JSON.stringify(r));
      const want = lang === 'pl' ? ['pl-PL', 'PL'] : tz === 'Europe/Vienna' ? ['de-AT', 'AT'] : ['de-DE', 'DE'];
      ok(r.loc === want[0] && r.rules === want[1], 'formát a pravidla podle jazyka a místa: ' + JSON.stringify(r));
      ok(r.home && r.home !== 'Domů' && r.home !== 'Home' && r.run !== 'Run', 'záložky nejsou přeložené: ' + JSON.stringify(r));
      ok(lang === 'pl' ? /8–9 paź/.test(r.date) : /8\.–9\. 10\./.test(r.date), 'datum závodu: ' + r.date);
      /* Domů → Dnes: datum podle jazyka (9 paź, 9. Okt.), ne české 9. 10. */
      const td = await ev(() => { const e = document.querySelector('#v-home .hm-tdh small'); return e ? e.textContent : ''; });
      ok(td && !/\d\. \d+\.$/.test(td) && !/[ěščřžůťďň]/.test(td), 'datum Dnes na Domů: ' + td);
      const nav = await ev(() => [...document.querySelectorAll('.nav button')].map(b => b.innerText.trim()));
      ok(nav.every(t => t.length && t.length <= 9 && !/[ěščřžůťďň]/.test(t)), 'popisky spodní lišty: ' + JSON.stringify(nav));
      if (lang === 'pl') {
        const p = await ev(() => ({ a: trLookup('22 překážek'), b: trLookup('5 překážek'), c: trLookup('1 překážka'), d: trLookup('12 překážek'), e: trLookup('3 překážky'), plural: !!PLURAL }));
        ok(p.plural && p.a === '22 przeszkody' && p.b === '5 przeszkód' && p.c === '1 przeszkoda' && p.d === '12 przeszkód' && p.e === '3 przeszkody', 'polské množné číslo: ' + JSON.stringify(p));
      }
      /* texty, které ve slovníku chybí, jdou anglicky (nikdy česky) */
      ok(await ev(() => { I18N.exact['Zkušební text bez polštiny'] = 'Test text without Polish'; return T('Zkušební text bez polštiny') === 'Test text without Polish'; }), 'záloha v angličtině');
    });
    await step('hlavní obrazovky bez češtiny', async () => {
      await page.goto(base + '/?lang=' + lang + '#home'); await page.waitForTimeout(700); await ev(() => { closeSheet(); $('toast').hidden = true; });
      await left('Domů');
      await page.click('.nav [data-v="lib"]'); await page.waitForTimeout(300); await left('Parkury');
      await ev(() => { loadCourse(listFor('A2')[2], true); show('plan'); mode = 'view'; ui(); render(); $('toast').hidden = true; }); await page.waitForTimeout(200); await left('Plán');
      await page.click('#mBuild'); await page.waitForTimeout(150); await ev(() => { $('toast').hidden = true; }); await left('Stavba');
      await page.click('#mView'); await page.click('.nav [data-v="run"]'); await page.waitForTimeout(200); await ev(() => { $('toast').hidden = true; }); await left('Běh');
      /* bez psů je v Běhu jen čip Přidat psa: dlouhý text (němčina) se zalomí, nesmí se uříznout */
      const ch = await ev(() => { const keep = DOGS; DOGS = []; dogChips('runDogs'); const b = $('runDogs'), c = b.querySelector('[data-adddog]'), r = [Math.round(c.getBoundingClientRect().right), Math.round(b.getBoundingClientRect().right), b.scrollWidth, b.clientWidth]; DOGS = keep; dogChips('runDogs'); return r; });
      ok(ch[0] <= ch[1] + 1 && ch[2] <= ch[3] + 1, 'Běh: čip Přidat psa je širší než řádek: ' + JSON.stringify(ch));
      await page.click('.nav [data-v="more"]'); await page.waitForTimeout(200); await left('Více');
      for (const m of ['set', 'dogs', 'diary', 'about']) { await ev((m) => { moreOpen(m); }, m); await page.waitForTimeout(200); await left('Více → ' + m); }
      await ev(() => { show('plan'); newCourseSheet(); }); await page.waitForTimeout(200); await left('okno Nový parkur'); await ev(() => closeSheet());
      /* 3.4: Hoopers s vysvětlením a sdílení s kolbištěm */
      await ev(() => { setSport('hoopers'); show('home'); $('toast').hidden = true; }); await page.waitForTimeout(250); await left('Domů s Hoopers');
      ok(await ev(() => !!document.querySelector('#v-home .hoophint')), 'vysvětlení Hoopers v cizím jazyce');
      await ev(() => { setSport('agility', true); loadCourse(listFor('A2')[0], true); lsSet('agility-rings-v1', [{ id: 'r1', name: 'Ring 1', lat: 50, lng: 15, az: 10, W: 40, H: 20, cid: S.meta.id, cname: S.meta.name, at: 1 }]); show('plan'); shareSheet(); });
      await page.waitForTimeout(250); await left('okno Sdílet s kolbištěm'); await ev(() => closeSheet());
    });
    await step('přepínač jazyka v Nastavení', async () => {
      await ev(() => moreOpen('set')); await page.waitForTimeout(150);
      const opts = await ev(() => [...document.querySelectorAll('#moreBody [data-lang]')].map(b => b.getAttribute('data-lang') + ':' + b.textContent).join());
      ok(opts === 'cs:Čeština,en:English,pl:Polski,de:Deutsch', 'čtyři jazyky v Nastavení: ' + opts);
      const other = lang === 'pl' ? 'de' : 'pl';
      await Promise.all([page.waitForNavigation({ timeout: 8000 }).catch(() => {}), page.click(`#moreBody [data-lang="${other}"]`)]); await page.waitForTimeout(700);
      const r = await ev(() => ({ lang: LANG, dict: !!(window.I18N_L && I18N_L.lang === LANG), url: location.search }));
      ok(r.lang === other && r.dict && !/lang=/.test(r.url), 'po přepnutí se má načíst druhý slovník (a z adresy zmizet ?lang=): ' + JSON.stringify(r));
      await ev(() => { localStorage.setItem('agility-lang-v1', JSON.stringify('cs')); });
    });
    T.errs.forEach(e => errs.push(e)); await T.ctx.close();
  }
  /* průvodce: čtyři jazyky */
  {
    const T = await phone(browser); const { page, ok, ev } = T;
    await offline(T.ctx, { get_catalog: { version: 0 } });
    T.step('průvodce');
    await page.goto(base + '/?onb#home'); await page.waitForTimeout(600);
    const b = await ev(() => [...document.querySelectorAll('#onb .onb-lang [data-v]')].map(x => x.getAttribute('data-v') + ':' + x.textContent).join());
    ok(b === 'cs:CZ,en:EN,pl:PL,de:DE', 'průvodce nabízí čtyři jazyky: ' + b);
    errs.push(...T.errs); await T.ctx.close();
  }
  /* úzký displej německy: čtyři jazyky a Überspringen se v horním řádku průvodce vejdou */
  for (const w of [320, 360]) {
    const T = await phone(browser, { viewport: { width: w, height: 700 } }); const { page, ok, ev } = T;
    await offline(T.ctx, { get_catalog: { version: 0 } });
    T.step('průvodce německy ' + w + ' px');
    await page.goto(base + '/?lang=de&onb#home'); await page.waitForTimeout(600);
    const r = await ev(() => { const t = document.querySelector('#onb .onb-top'), s = document.querySelector('#onb [data-o="skip"]'); return t && s ? [t.scrollWidth, t.clientWidth, Math.round(s.getBoundingClientRect().right), innerWidth, s.textContent] : null; });
    ok(r && r[0] <= r[1] + 1 && r[2] <= r[3], w + ' px: horní řádek průvodce přetéká: ' + JSON.stringify(r));
    errs.push(...T.errs); await T.ctx.close();
  }
  /* úvodní stránka (web/): polský a německý prohlížeč dostane odkaz do aplikace bez ?lang=en (aplikace pozná jazyk sama) */
  for (const [loc, want] of [['pl-PL', ''], ['de-AT', ''], ['en-US', '?lang=en']]) {
    const T = await phone(browser, { locale: loc }); const { page, ok, ev } = T;
    await offline(T.ctx, {});
    T.step('úvodní stránka ' + loc);
    await page.goto(base + '/web/index.html'); await page.waitForTimeout(300);
    const h = await ev(() => [...document.querySelectorAll('a[data-app]')].map(a => a.getAttribute('href').replace(/^https:\/\/pawkur\.cz\//, '')));
    ok(h.length && h.every(x => x === want), loc + ': odkazy do aplikace ' + JSON.stringify(h));
    errs.push(...T.errs); await T.ctx.close();
  }
  return errs;
};
