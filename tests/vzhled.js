/* Vzhled: horní blok Domů od kraje ke kraji se značkou (fotka otisku tlapky) a karuselem zarovnaným s nadpisem, mezery 12 px v sekcích Více,
   verze v O aplikaci z APPV, anglické formáty čísel na Domů (57%, 6-day streak), překlad první věty Novinek 2.7,
   tmavé písmo štítků hodnocení v listině ve tmavém vzhledu a tmavší přechod karet Parkur týdne / Zahrada týdne. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  /* bez průvodce a okna Novinky, ať nic nepřekrývá měřené prvky */
  await T.ctx.addInitScript(() => { try { if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('2.7')); } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await page.waitForTimeout(400); await ev(() => { $('toast').hidden = true; }); };
  const size = async (w) => page.setViewportSize({ width: w, height: w === 360 ? 740 : 844 });

  await step('Domů od kraje ke kraji', async () => {
    for (const w of [390, 360]) {
      await size(w); await fresh();
      const r = await ev(() => {
        const b = s => document.querySelector(s).getBoundingClientRect(), m = getComputedStyle(document.querySelector('main')), car = document.querySelector('.hm-car');
        return { top: [b('.hm-top').left, b('.hm-top').right], vw: document.documentElement.clientWidth, sw: document.documentElement.scrollWidth, sec: b('.hm-sec').left, card: b('.hm-cc').left,
          main: [m.paddingLeft, m.paddingRight, m.paddingTop, parseFloat(m.paddingBottom)], sp: car && getComputedStyle(car).scrollPaddingInlineStart, logo: (function () { const i = document.querySelector('.hm-logo img'); return !!i && /icon-192\.png$/.test(i.src) && i.naturalWidth > 0; })() };
      });
      ok(r.top[0] === 0 && r.top[1] === r.vw, w + ' px: horní blok Domů nejde od kraje ke kraji: ' + r.top + ' / ' + r.vw);
      ok(r.sec === 16 && r.card === 16, w + ' px: nadpis sekce a první karta mají být 16 px od kraje: ' + r.sec + ' / ' + r.card);
      ok(r.main[0] === '0px' && r.main[1] === '0px' && r.main[2] === '0px' && r.main[3] > 60, w + ' px: main na Domů má mít nulové boční okraje a spodní okraj kvůli liště: ' + r.main);
      ok(r.sp === '16px', w + ' px: karusel se má přichytávat 16 px od kraje: ' + r.sp);
      ok(r.sw <= r.vw, w + ' px: Domů přetéká do strany');
      ok(r.logo === true, w + ' px: značka na Domů má být fotka otisku tlapky (icon-192.png): ' + r.logo);
    }
    await size(390);
    /* mimo Domů má main okraje jako dřív */
    await ev(() => show('lib'));
    ok(await ev(() => getComputedStyle(document.querySelector('main')).paddingLeft === '16px' && !document.body.classList.contains('at-home')), 'mimo Domů má main mít boční okraj 16 px');
  });

  await step('Více: mezery mezi kartami', async () => {
    await fresh();
    await ev(() => { DOGS = [{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }, { id: 'd2', name: 'Bart', size: 'L', cls: 'A1' }]; DOGC = 'd1'; saveDogs();
      lsSet(DIARYK, [{ id: 'y-1', kind: 'trenink', date: localDate(new Date()), dog: 'd1', note: 'Slalom', surface: 'tráva' }]); });
    for (const w of [390, 360]) {
      await size(w);
      for (const t of ['set', 'dogs', 'diary']) {
        await ev(t => { moreTab = t; show('more'); }, t); await page.waitForTimeout(150);
        const r = await ev(() => { const vis = [...$('moreBody').children].filter(e => e.offsetParent !== null).map(e => e.getBoundingClientRect()).filter(b => b.height > 0);
          const gaps = []; for (let i = 1; i < vis.length; i++) gaps.push(Math.round(vis[i].top - vis[i - 1].bottom)); return { n: vis.length, gaps, ovf: document.documentElement.scrollWidth - document.documentElement.clientWidth }; });
        ok(r.n >= 2 && r.gaps.every(g => g >= 8), w + ' px, ' + t + ': prvky ve Více se dotýkají: ' + JSON.stringify(r.gaps));
        ok(r.ovf <= 0, w + ' px, ' + t + ': sekce přetéká do strany');
      }
    }
    await size(390);
    /* Přidat psa má mezeru od karty psa a nezabírá celou šířku */
    await ev(() => { moreTab = 'dogs'; show('more'); }); await page.waitForTimeout(100);
    const d = await ev(() => { const b = document.querySelector('#moreBody [data-dadd]').getBoundingClientRect(), l = document.querySelector('#moreBody .list').getBoundingClientRect(); return [Math.round(b.top - l.bottom), b.width < $('moreBody').getBoundingClientRect().width - 40]; });
    ok(d[0] >= 8 && d[1], 'Přidat psa: mezera od karty psa ' + d[0] + ' px, nebo tlačítko roztažené na celou šířku');
  });

  await step('O aplikaci: verze z APPV', async () => {
    await ev(() => { moreTab = 'about'; show('more'); }); await page.waitForTimeout(100);
    const r = await ev(() => ({ v: APPV, t: document.querySelector('#moreBody .about-h b').textContent, n: $('moreBody').textContent.indexOf('Pawkur ' + APPV) >= 0 }));
    ok(/^\d+\.\d+(\.\d+)?$/.test(r.v) && r.t === 'Pawkur ' + r.v && r.n, 'O aplikaci neukazuje verzi z APPV: ' + JSON.stringify(r));
  });

  await step('angličtina: Novinky 2.7 a čísla na Domů', async () => {
    const r = await ev(() => { const news = newsCheck.toString().match(/<p>([^<]*)<\/p>/)[1]; return { news, tr: trLookup(news), pct: trLookup('57 %'), st: [trLookup('série 1 den'), trLookup('série 2 dny'), trLookup('série 6 dní')].join('|') }; });
    ok(/^Aplikace se teď jmenuje Pawkur/.test(r.news) && typeof r.tr === 'string' && /Pawkur/.test(r.tr) && !/[ěščřžůú]/.test(r.tr), 'první věta Novinek bez anglického překladu: ' + JSON.stringify(r));
    ok(r.pct === '57%' && r.st === '1-day streak|2-day streak|6-day streak', 'anglický formát procent a série: ' + r.pct + ' / ' + r.st);
    /* skutečný řádek s čísly na Domů v angličtině; česky zůstává mezera před % */
    await ev(() => localStorage.setItem('agility-lang-v1', JSON.stringify('en'))); await fresh();
    /* běh patří vybranému psovi (z předchozího kroku jsou psi dva, cizí běhy se na Domů nepočítají) */
    await ev(() => { const ch = homeChallenge(); setMark(ch.c.id, { runs: [{ d: Date.now(), t: 30, tot: 0, g: 'V', len: 100, dog: DOGC }], done: true }); show('home'); });
    const m = await ev(() => [LANG, document.querySelector('#v-home .hm-mini').textContent]);
    ok(m[0] === 'en' && /\b\d+% clean/.test(m[1]) && /\b1-day streak/.test(m[1]) && !/\d %/.test(m[1]), 'anglický řádek s čísly na Domů: ' + m[1]);
    await ev(() => localStorage.setItem('agility-lang-v1', JSON.stringify('cs'))); await fresh();
    await ev(() => { const ch = homeChallenge(); setMark(ch.c.id, { runs: [{ d: Date.now(), t: 30, tot: 0, g: 'V', len: 100, dog: DOGC }], done: true }); show('home'); });
    const c = await ev(() => document.querySelector('#v-home .hm-mini').textContent);
    ok(/\d+ % čisté/.test(c) && /série 1 den/.test(c), 'český řádek s čísly na Domů: ' + c);
    await ev(() => localStorage.removeItem('agility-lang-v1'));
  });

  await step('kontrast: štítky v listině ve tmavém vzhledu a karty týdne', async () => {
    await ev(() => localStorage.setItem('agility-theme-v1', JSON.stringify('dark'))); await fresh();
    await ev(() => { DOGS = [{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }]; DOGC = 'd1'; saveDogs(); const c = listFor('A2')[3]; loadCourse(c, true);
      setMark(c.id, { done: true, runs: [{ d: Date.now(), t: 36.2, f: 0, r: 0, tot: 0, g: 'V', sct: 45, mct: 63, len: 156.6, dog: 'd1', cls: 'A2' }, { d: Date.now() - 1000, t: 0, f: 0, r: 0, tot: 0, g: 'DIS', sct: 45, mct: 63, len: 156.6, dog: 'd1', cls: 'A2' }] });
      moreTab = 'listina'; show('more'); });
    await page.waitForTimeout(150);
    const g = await ev(() => ({ theme: document.documentElement.getAttribute('data-theme'), c: [...document.querySelectorAll('#listinaBox .listina .g')].map(e => getComputedStyle(e).color) }));
    ok(g.theme === 'dark' && g.c.length > 0 && g.c.every(c => c === 'rgb(11, 26, 17)'), 'štítky hodnocení ve tmavé listině mají mít tmavé písmo: ' + JSON.stringify(g));
    await ev(() => show('home'));
    const bg = await ev(() => [...document.querySelectorAll('#v-home .hm-wk')].map(e => getComputedStyle(e).backgroundImage));
    ok(bg.length === 2 && /rgb\(31, 111, 69\) 0%/.test(bg[0]) && /rgb\(68, 115, 31\) 0%/.test(bg[1]), 'karty Parkur týdne a Zahrada týdne mají mít tmavší přechod: ' + bg.map(s => s.slice(0, 70)));
    await ev(() => wkSend({ t: 36.2, tot: 5 }, 'A2')); await page.waitForTimeout(100);
    ok(await ev(() => /rgb\(31, 111, 69\) 0%/.test(getComputedStyle(document.querySelector('#sheet .wk-res div')).backgroundImage)), 'výsledek v odeslání do žebříčku má mít stejný tmavší přechod');
    await ev(() => { closeSheet(); localStorage.removeItem('agility-theme-v1'); });
  });

  await T.ctx.close();
  return T.errs;
};
