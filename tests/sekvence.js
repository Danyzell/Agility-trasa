/* Domácí sekvence: úseky ze skutečných parkurů, které se vejdou na plochu a postaví se z vlastního vybavení. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash == null ? '#plan' : hash)); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  /* projde všechny parkury a zkontroluje každý nalezený úsek: vybavení, plocha (překážky, křídla i dráha psa), délka */
  const check = (eq, W, H) => ev(([eq, W, H]) => {
    let all = []; cutSources('all').forEach(c => { all = all.concat(cutCourse(c, eq, W, H)); });
    const bad = [], has = t => t === 'jump' ? eq.jump || 0 : t === 'tunnel' ? eq.tunnel || 0 : eq[t] ? 1 : 0;
    all.forEach(c => {
      const n = {}; c.obs.forEach(o => { n[o.type] = (n[o.type] || 0) + 1; });
      Object.keys(n).forEach(t => { if (n[t] > has(t)) bad.push(c.name + ': ' + t + ' ' + n[t] + '×'); });
      if (!c.route.every(id => c.obs.some(o => o.id === id))) bad.push(c.name + ': trasa mimo překážky');
      c.obs.forEach(o => opoly(o).forEach(q => { if (q.x < 0 || q.y < 0 || q.x > W || q.y > H) bad.push(c.name + ': překážka mimo plochu'); }));
      const g = calc(c.obs, c.route, c.turns);
      g.segs.forEach(s => s.pcs.forEach(p => { for (let t = 0; t <= 8; t++) { const q = bz(p[0], p[1], p[2], p[3], t / 8); if (q.x < -.05 || q.y < -.05 || q.x > W + .05 || q.y > H + .05) bad.push(c.name + ': dráha psa mimo plochu'); } }));
      if (c.route.length < 4 || c.route.length > 10) bad.push(c.name + ': délka ' + c.route.length);
      if (c.W !== W || c.H !== H) bad.push(c.name + ': plocha ' + c.W + '×' + c.H);
    });
    return { n: all.length, bad: [...new Set(bad)].slice(0, 6), pick: cutPick(all, 12) };
  }, [eq, W, H]);

  await step('úseky respektují vybavení a plochu', async () => {
    await fresh();
    for (const [eq, W, H] of [[{ jump: 6, tunnel: 1 }, 20, 15], [{ jump: 4 }, 15, 10], [{ jump: 8, tunnel: 2, weave: 1, aframe: 1, dogwalk: 1 }, 30, 20]]) {
      const r = await check(eq, W, H);
      ok(r.n > 0, `${W}×${H} m, ${JSON.stringify(eq)}: nenašel se žádný úsek`);
      ok(!r.bad.length, `${W}×${H} m: ${r.bad.join('; ')}`);
      ok(r.pick.length > 0 && r.pick.length <= 12, `${W}×${H} m: výběr má ${r.pick.length} úseků`);
      /* z jednoho parkuru nejvýš dva úseky */
      const per = {}; r.pick.forEach(c => { per[c.cut.src] = (per[c.cut.src] || 0) + 1; });
      ok(Object.values(per).every(v => v <= 2), `${W}×${H} m: z jednoho parkuru víc než dva úseky`);
    }
    /* bez slalomu a zón se žádný z nich v úsecích neobjeví; jen skoky → jen skoky */
    const r = await check({ jump: 5 }, 20, 15);
    ok(await ev(p => p.every(c => c.obs.every(o => o.type === 'jump')), r.pick), 'při samých skocích se v úseku objevila jiná překážka');
    /* na malou plochu bez vybavení se nic nevejde */
    const none = await check({ jump: 1 }, 10, 10);
    ok(none.n === 0, 's jedním skokem se našel úsek o 4 překážkách');
  });

  await step('pořadí a otočky zůstanou jako na parkuru', async () => {
    await fresh();
    const r = await ev(() => {
      const src = cutSources('A3').find(c => (c.turns || []).some(t => t && t.charAt(0) === 'b')), out = cutCourse(src, { jump: 20, tunnel: 3, weave: 1, tire: 1, longjump: 1, aframe: 1, dogwalk: 1, seesaw: 1 }, 40, 30);
      const by = {}; src.obs.forEach(o => { by[o.id] = o; });
      return out.map(c => {
        const ids = src.route.slice(c.cut.a - 1, c.cut.b), tu = (src.turns || []).slice(c.cut.a - 1, c.cut.b);
        const types = c.route.map(id => c.obs.find(o => o.id === id).type).join(), want = ids.map(id => by[id].type).join();
        /* otočky beze změny (jen otočka kolem křídla za posledním skokem se vynechá) */
        const tOk = c.turns.every((t, i) => t === (tu[i] || null) || (i === c.turns.length - 1 && t === null && tu[i] && tu[i].charAt(0) === 'w'));
        /* vzájemné vzdálenosti překážek se nezmění (úsek se jen posune a otočí) */
        const a = c.obs[0], b = c.obs[c.obs.length - 1], oa = by[ids[c.route.indexOf(a.id)]], ob = by[ids[c.route.indexOf(b.id)]];
        const dOk = Math.abs(Math.hypot(a.x - b.x, a.y - b.y) - Math.hypot(oa.x - ob.x, oa.y - ob.y)) < .25;
        return types === want && tOk && dOk;
      });
    });
    ok(r.length > 3, 'na velké ploše se z parkuru A3 našlo jen ' + r.length + ' úseků');
    ok(r.every(Boolean), 'úsek nemá stejné pořadí, otočky nebo rozestupy jako parkur');
  });

  await step('generátor: záložka Z parkurů', async () => {
    await fresh('#lib');
    await page.click('#genBtn'); await page.click('#sheet [data-a="tcut"]');
    ok(await page.isVisible('#gSrc') && await page.isVisible('#gCW'), 'chybí výběr parkurů nebo plocha');
    await page.fill('#gCW', '20'); await page.fill('#gCH', '15'); await page.fill('#gJ', '6'); await page.fill('#gT', '1');
    for (const id of ['gW', 'gTi', 'gLj', 'gA', 'gD', 'gS']) await ev(i => { $(i).checked = false; }, id);
    await page.click('#sheet [data-a="go"]');
    await page.waitForFunction(() => document.querySelectorAll('#gOut [data-gi]').length > 0 && !/Hledám|Procházím/.test($('gOut').textContent), null, { timeout: 15000 });
    const n = await page.locator('#gOut [data-gi]').count();
    ok(n > 0 && n <= 12, 'počet nalezených úseků ' + n);
    ok(await ev(() => SET.cut && SET.cut.W === 20 && SET.cut.H === 15 && SET.eq.jump === 6 && SET.eq.tunnel === 1), 'plocha a vybavení se neuložily');
    const pick = await ev(() => ({ name: GEN.out[0].name, len: GEN.out[0].route.length }));
    await page.click('#gOut [data-gi="0"]'); await page.waitForTimeout(400);
    ok(await ev(n => view === 'plan' && S.meta.name === n && S.W === 20 && S.H === 15, pick.name), 'úsek se neotevřel v Plánu na ploše 20 × 15 m');
    ok(await ev(l => S.route.length === l && S.obs.every(o => o.x >= 0 && o.y >= 0 && o.x <= S.W && o.y <= S.H), pick.len), 'otevřený úsek nesedí s výsledkem');
    /* plocha zadaná obráceně (šířka větší než délka) se otočí */
    await page.click('.nav [data-v="lib"]'); await page.click('#genBtn'); await page.click('#sheet [data-a="tcut"]');
    ok(await page.inputValue('#gCW') === '20' && await page.inputValue('#gCH') === '15', 'plocha se při dalším otevření nevyplnila');
    await page.fill('#gCW', '12'); await page.fill('#gCH', '25'); await page.click('#sheet [data-a="go"]'); await page.waitForTimeout(600);
    ok(await ev(() => SET.cut.W === 25 && SET.cut.H === 12), 'plocha 12 × 25 se neuložila jako 25 × 12');
    await ev(() => closeSheet());
  });

  await step('otevřený parkur a prázdný výsledek', async () => {
    await fresh('#lib');
    await ev(() => { S.meta.dirty = false; loadCourse(listFor('A2')[4], true); });
    await page.click('.nav [data-v="lib"]'); await page.click('#genBtn'); await page.click('#sheet [data-a="tcut"]');
    await page.selectOption('#gSrc', 'plan'); await page.fill('#gCW', '40'); await page.fill('#gCH', '30'); await page.fill('#gJ', '20'); await page.fill('#gT', '3');
    for (const id of ['gW', 'gTi', 'gLj', 'gA', 'gD', 'gS']) await ev(i => { $(i).checked = true; }, id);
    await page.click('#sheet [data-a="go"]'); await page.waitForTimeout(800);
    ok(await ev(() => GEN.out.length > 0 && GEN.out.every(c => c.cut.src === S.meta.name)), 'z otevřeného parkuru se nevybraly jen jeho úseky');
    await page.fill('#gCW', '10'); await page.fill('#gCH', '10'); await page.fill('#gJ', '1'); await page.fill('#gT', '0');
    await page.click('#sheet [data-a="go"]'); await page.waitForTimeout(800);
    ok(await ev(() => GEN.out.length === 0 && /nic nevešlo/.test($('gOut').textContent)), 'chybí zpráva, že se nic nevešlo');
    await ev(() => closeSheet());
  });

  await step('Domů: karta Trénink doma', async () => {
    await fresh('#home');
    ok(await page.isVisible('#v-home .hm-cut'), 'na Domů chybí karta Trénink doma');
    await page.click('#v-home [data-h="cut"]'); await page.waitForTimeout(200);
    ok(await page.isVisible('#gSrc') && await ev(() => GEN.tab === 'cut'), 'karta neotevřela generátor na záložce Z parkurů');
    const w = await ev(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    ok(w[0] <= w[1], `dialog přetéká do strany (${w[0]} > ${w[1]} px)`);
    await ev(() => closeSheet());
  });

  await step('angličtina', async () => {
    ok(await ev(() => trLookup('Z parkurů') === 'From courses' && trLookup('Otočky 3') === 'Wraps 3' && trLookup('Zadní strany 2') === 'Backsides 2' && trLookup('Skoky') === 'Jumps'), 'chybí překlad záložky nebo štítků');
    ok(await ev(() => trLookup('Překážky 4–10') === 'Obstacles 4–10' && trLookup('Plocha 20 × 15 m a tvoje vybavení') === 'Space 20 × 15 m and your equipment'), 'chybí překlad rozsahu nebo plochy');
  });

  await T.ctx.close();
  return T.errs;
};
