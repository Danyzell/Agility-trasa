/* Anglicky mluvící uživatelé (3.4): řádek čísel na Domů nezalomí číslo od jednotky („SCT 43 / s“), vysvětlení Hoopers a Jumpers
   u přepínačů Agility | Hoopers (jen v cizím jazyce, jen při zapnutém Hoopers, × ho zavře natrvalo). */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const errs = [];
  /* nový telefon s jazykem, časovým pásmem a šířkou; localStorage z prvního načtení (průvodce hotový, jazyk) */
  const open = async (lang, o) => {
    o = o || {};
    const T = await phone(browser, Object.assign({ timezoneId: o.tz || 'Europe/London' }, o.w ? { viewport: { width: o.w, height: 800 } } : {}));
    await offline(T.ctx, Object.assign({ get_catalog: { version: 0 } }, o.rpc || {}));
    await T.ctx.addInitScript((a) => { try { if (!sessionStorage.getItem('usa1')) { sessionStorage.setItem('usa1', '1');
      localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); localStorage.setItem('agility-lang-v1', JSON.stringify(a.lang));
      if (a.rules) localStorage.setItem('agility-rules-v1', JSON.stringify(a.rules)); } } catch (e) {} }, { lang, rules: o.rules || null });
    await T.page.goto(base + '/#home'); await T.page.waitForTimeout(400); await T.ev(() => { closeSheet(); $('toast').hidden = true; });
    return T;
  };
  const run = async (T, label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const done = async (T) => { errs.push(...T.errs); await T.ctx.close(); };

  /* 1c: anglicky se dřív „SCT 43 s“ zalomilo mezi číslem a jednotkou; každá položka je teď nezalomitelný celek */
  for (const w of [390, 360]) {
    const T = await open('en', { w }); const { ok, ev } = T;
    await run(T, 'řádek čísel na Domů (' + w + ' px)', async () => {
      await ev(() => { loadCourse(listFor('A2')[1], true); S.meta.name = 'Saturday Jumpers course with a long name'; show('home'); $('toast').hidden = true; });
      await T.page.waitForTimeout(250);
      const r = await ev(() => { const L = [...document.querySelectorAll('#v-home .hm-cur .hm-curtx span.nw')];
        return { t: L.map(e => e.textContent), lines: L.map(e => e.getClientRects().length), ws: L.map(e => getComputedStyle(e).whiteSpace) }; });
      ok(r.t.length === 4 && r.t[0] === 'A2' && /^\d+\.\d m$/.test(r.t[1]) && /^\d+ obstacles$/.test(r.t[2]) && /^SCT \d+ s$/.test(r.t[3]), 'položky řádku: ' + JSON.stringify(r.t));
      ok(r.lines.every(n => n === 1) && r.ws.every(x => x === 'nowrap'), 'položka se nesmí zalomit: ' + JSON.stringify(r));
    });
    await done(T);
  }

  /* 1a: Hoopers a Jumpers */
  {
    const T = await open('en'); const { ok, ev, page } = T;
    await run(T, 'Hoopers: vysvětlení na Domů jen při zapnutém Hoopers', async () => {
      ok(!(await ev(() => !!document.querySelector('#v-home .hoophint'))), 'v Agility se vysvětlení nemá ukazovat');
      await page.click('#v-home .hm-sport [data-sp="hoopers"]'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; });
      const t = await ev(() => { const e = document.querySelector('#v-home .hoophint'); return e && e.offsetParent ? e.textContent.trim() : ''; });
      ok(t === 'Hoopers: hoops, barrels and tunnels, no jumps. Jumpers courses go under Agility.', 'vysvětlení na Domů: ' + t);
    });
    await run(T, 'Hoopers: vysvětlení ve Stavbě u parkuru Hoopers', async () => {
      await ev(() => { newCourse('H2', 30, 20, ''); show('plan'); $('toast').hidden = true; }); await page.waitForTimeout(200);
      ok(await page.isVisible('#pSportHint .hoophint'), 've Stavbě u parkuru Hoopers chybí vysvětlení');
      await ev(() => { newCourse('A2', 40, 20, ''); $('toast').hidden = true; }); await page.waitForTimeout(150);
      ok(!(await page.isVisible('#pSportHint .hoophint')), 'u parkuru agility se vysvětlení nemá ukazovat');
      await ev(() => { newCourse('H1', 30, 20, ''); $('toast').hidden = true; }); await page.waitForTimeout(150);
      await page.click('#pSportHint .hoophint [data-hh]'); await page.waitForTimeout(100);
      ok(!(await ev(() => !!document.querySelector('.hoophint'))) && (await ev(() => lsGet('agility-hoophint-v1', 0))) === 1, 'po × má vysvětlení zmizet a zapamatovat se');
      await page.reload(); await page.waitForTimeout(400); await ev(() => { closeSheet(); show('home'); $('toast').hidden = true; }); await page.waitForTimeout(150);
      ok(await ev(() => SPORT === 'hoopers' && !document.querySelector('.hoophint')), 'zavřené vysvětlení se po novém spuštění nevrací');
    });
    await done(T);
  }
  {
    const T = await open('cs'); const { ok, ev, page } = T;
    await run(T, 'Hoopers: česky bez vysvětlení', async () => {
      await page.click('#v-home .hm-sport [data-sp="hoopers"]'); await page.waitForTimeout(300);
      await ev(() => { newCourse('H2', 30, 20, ''); show('plan'); $('toast').hidden = true; }); await page.waitForTimeout(150);
      ok(!(await ev(() => !!document.querySelector('.hoophint'))), 'česky se vysvětlení Hoopers a Jumpers nemá ukazovat');
    });
    await done(T);
  }
  return errs;
};
