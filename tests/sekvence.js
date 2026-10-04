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
    /* bez uložené plochy je na Domů karta s tlačítkem Vybrat */
    await ev(() => { delete SET.cut; lsSet(SETK, SET); show('home'); });
    ok(await page.isVisible('#v-home .hm-cut'), 'na Domů chybí karta Trénink doma');
    await page.click('#v-home [data-h="cut"]'); await page.waitForTimeout(200);
    ok(await page.isVisible('#gSrc') && await ev(() => GEN.tab === 'cut'), 'karta neotevřela generátor na záložce Z parkurů');
    const w = await ev(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    ok(w[0] <= w[1], `dialog přetéká do strany (${w[0]} > ${w[1]} px)`);
    await ev(() => closeSheet());
  });

  await step('zrcadlově: dráha psa je přesný zrcadlový obraz', async () => {
    await fresh();
    const r = await ev(() => {
      let all = []; cutSources('all').forEach(c => { all = all.concat(cutCourse(c, { jump: 8, tunnel: 2 }, 25, 15)); });
      const withT = all.filter(c => c.turns.some(t => t && /^[wb]/.test(t))).slice(0, 12), bad = [];
      const pts = g => { const out = []; g.segs.forEach(s => s.pcs.forEach(p => { for (let t = 0; t <= 6; t++) out.push(bz(p[0], p[1], p[2], p[3], t / 6)); })); return out; };
      withT.forEach(c => {
        const m = cutMirror(c), a = pts(calc(c.obs, c.route, c.turns)), b = pts(calc(m.obs, m.route, m.turns));
        if (a.length !== b.length) { bad.push(c.name + ': jiný počet bodů'); return; }
        for (let i = 0; i < a.length; i++) if (Math.abs(c.W - a[i].x - b[i].x) > .12 || Math.abs(a[i].y - b[i].y) > .12) { bad.push(c.name + ': dráha není zrcadlová'); break; }
        const sw = { wL: 'wR', wR: 'wL', bL: 'bR', bR: 'bL' };
        if (!m.turns.every((t, i) => t === (sw[c.turns[i]] || c.turns[i]))) bad.push(c.name + ': otočky se neotočily');
        if (!m.obs.every(o => o.x >= 0 && o.x <= m.W)) bad.push(c.name + ': mimo plochu');
      });
      return { n: withT.length, bad };
    });
    ok(r.n >= 5, 'málo úseků s otočkami na zkoušku: ' + r.n);
    ok(!r.bad.length, r.bad.slice(0, 4).join('; '));
  });

  await step('náhrada kruhu a skoku dalekého skokem', async () => {
    await fresh();
    const r = await ev(() => {
      const run = eq => { let all = []; cutSources('all').forEach(c => { all = all.concat(cutCourse(c, eq, 30, 20)); }); return all; };
      const no = run({ jump: 8, tunnel: 1 }), yes = run({ jump: 8, tunnel: 1, sub: 1 });
      const subd = yes.filter(c => c.cut.feats.indexOf('Náhrada skokem') >= 0);
      const okTypes = yes.every(c => c.obs.every(o => o.type !== 'tire' && o.type !== 'longjump'));
      const okJumps = yes.every(c => c.obs.filter(o => o.type === 'jump').length <= 8);
      /* s vlastním kruhem se kruh nenahrazuje */
      const own = run({ jump: 8, tunnel: 1, tire: 1, sub: 1 }), keepTire = own.some(c => c.obs.some(o => o.type === 'tire'));
      return { no: no.length, yes: yes.length, subd: subd.length, okTypes, okJumps, keepTire };
    });
    ok(r.yes > r.no && r.subd > 0, `s náhradou se nenašlo víc úseků (${r.no} → ${r.yes}, nahrazeno ${r.subd})`);
    ok(r.okTypes && r.okJumps, 'po náhradě zůstal kruh nebo skok daleký, nebo je skoků víc než 8');
    ok(r.keepTire, 's vlastním kruhem se kruh přesto nahradil skokem');
  });

  await step('stálé id: úsek jde znovu sestavit (i zrcadlově a s náhradou)', async () => {
    await fresh();
    const r = await ev(() => {
      let all = []; cutSources('all').forEach(c => { all = all.concat(cutCourse(c, { jump: 8, tunnel: 1, sub: 1 }, 25, 18)); });
      const L = cutPick(all, 12).concat(all.filter(c => /~[tl]+$/.test(c.id)).slice(0, 3)), bad = [];
      const same = (a, b) => b && JSON.stringify([a.obs, a.route, a.turns, a.W, a.H, a.name]) === JSON.stringify([b.obs, b.route, b.turns, b.W, b.H, b.name]);
      L.forEach(c => {
        if (!/^cut~/.test(c.id)) { bad.push(c.name + ': chybí id'); return; }
        if (!same(c, findCourse(c.id))) bad.push(c.name + ': findCourse vrátil jiný úsek');
        const m = cutMirror(c); if (!same(m, findCourse(m.id))) bad.push(c.name + ': zrcadlový úsek nejde sestavit');
      });
      return { n: L.length, bad, junk: [findCourse('cut~A9-99~1~5~20x15~'), findCourse('cut~A1-01~3~2~20x15~'), findCourse('cut~A1-01~1~5~5x5~')] };
    });
    ok(r.n > 5 && !r.bad.length, r.n + ' úseků; ' + r.bad.slice(0, 4).join('; '));
    ok(r.junk.every(x => x === null), 'nesmyslné id vrátilo úsek');
  });

  await step('filtr, zrcadlení, oblíbené a běhy u úseku', async () => {
    await fresh('#lib');
    await ev(() => { SET.eq = { jump: 8, tunnel: 1, weave: 1, sub: 1 }; SET.cut = { W: 25, H: 18, src: 'all' }; lsSet(SETK, SET); });
    await page.click('#genBtn'); await page.click('#sheet [data-a="tcut"]');
    ok(await page.isChecked('#gSub') && await page.isChecked('#gW'), 'vybavení se nenačetlo z nastavení');
    await page.click('#sheet [data-a="go"]');
    await page.waitForFunction(() => !CUT.busy && GEN.out.length > 0, null, { timeout: 15000 });
    ok(await page.isVisible('#gOut [data-cf="b"]'), 'chybí filtr Zadní strany');
    await page.click('#gOut [data-cf="b"]');
    ok(await ev(() => GEN.out.length > 0 && GEN.out.every(c => c.cut.k.b > 0)), 'filtr pustil úsek bez zadní strany');
    await page.click('#gOut [data-a="cmir"]');
    ok(await ev(() => CUT.m && GEN.out.every(c => / ⇋$/.test(c.name) && /m$/.test(c.id))), 'zrcadlení se nepřepnulo');
    const id = await ev(() => GEN.out[0].id);
    await page.click('#gOut [data-gi="0"]'); await page.waitForTimeout(300);
    ok(await ev(i => S.meta.id === i, id), 'otevřený úsek nemá stálé id');
    /* oblíbené a zapsaný běh se uloží k úseku */
    await ev(() => { setMark(S.meta.id, { fav: true }); });
    await page.click('.nav [data-v="run"]');
    await page.fill('#manT', '21,5'); await page.evaluate(() => $('saveRun').scrollIntoView({ block: 'center' })); await page.click('#saveRun'); await page.waitForTimeout(300);
    ok(await ev(i => getMark(i).fav && (getMark(i).runs || []).length === 1, id), 'oblíbené nebo běh se k úseku nezapsaly');
    /* úsek z historie: findCourse ho sestaví znovu */
    ok(await ev(i => { const c = findCourse(i); return !!c && c.id === i && c.route.length === S.route.length; }, id), 'úsek z historie nejde otevřít');
    await ev(() => { CUT.f = 'all'; CUT.m = false; });
  });

  await step('Domů: nejlepší úseky pro uloženou plochu', async () => {
    await fresh('#home');
    ok(await page.locator('#v-home .hm-cutcar [data-hcut]').count() > 0, 'na Domů chybí úseky pro uloženou plochu');
    /* zaběhnutý úsek ustoupí nezaběhnutým; když jsou zaběhnuté všechny, ukážou se se značkou ✓ */
    const r = await ev(() => { const c = HOME_CUT[0]; setMark(c.id, { done: true }); show('home'); const ids = HOME_CUT.map(x => x.id); return { id: c.id, first: ids[0], last: ids[ids.length - 1], has: ids.indexOf(c.id) >= 0 }; });
    ok(r.first !== r.id && (!r.has || r.last === r.id), 'zaběhnutý úsek se na Domů neposunul dozadu');
    await ev(() => { CUTHOME.list.forEach(c => setMark(c.id, { done: true })); show('home'); });
    ok(await page.locator('#v-home .hm-cutcar .hm-done').count() === await page.locator('#v-home .hm-cutcar [data-hcut]').count(), 'zaběhnuté úseky nemají značku ✓');
    await page.click('#v-home .hm-cutcar [data-hcut="0"]'); await page.waitForTimeout(300);
    ok(await ev(() => view === 'plan' && /^cut~/.test(S.meta.id)), 'úsek z Domů se neotevřel');
    await page.click('.nav [data-v="home"]'); await page.click('#v-home [data-h="cut"]'); await page.waitForTimeout(200);
    ok(await ev(() => GEN.tab === 'cut' && $('gCW').value === '25'), 'Upravit neotevřelo generátor s uloženou plochou');
    await ev(() => closeSheet());
  });

  await step('angličtina', async () => {
    ok(await ev(() => trLookup('Z parkurů') === 'From courses' && trLookup('Otočky 3') === 'Wraps 3' && trLookup('Zadní strany 2') === 'Backsides 2' && trLookup('Skoky') === 'Jumps'), 'chybí překlad záložky nebo štítků');
    ok(await ev(() => trLookup('Překážky 4–10') === 'Obstacles 4–10' && trLookup('Plocha 20 × 15 m a tvoje vybavení') === 'Space 20 × 15 m and your equipment'), 'chybí překlad rozsahu nebo plochy');
  });

  T.step('cvičení se stálým id');
  try {
    const r = await ev(() => Object.keys(DRILLS).map(k => { const a = drillCourse(k, 's777'), b = drillCourse(k, 's777'), v = drillCourse(k, 'v0');
      return { k, same: !!a && JSON.stringify([a.route, a.turns, a.obs]) === JSON.stringify([b.route, b.turns, b.obs]), v: !!v && v.id === 'drill~' + k + '~v0', find: (findCourse('drill~' + k + '~v0') || {}).id === 'drill~' + k + '~v0' }; }));
    ok(r.every(x => x.same && x.v && x.find), 'cvičení se nesestaví znovu podle id: ' + JSON.stringify(r.filter(x => !(x.same && x.v && x.find))));
    ok(await ev(() => drillById('drill~nic~v0') === null && drillById('drill~box~x1') === null && drillById('drill~box~v99') === null), 'neplatné id cvičení');
    /* běh na cvičení se zapíše a počítá se na Domů i v generátoru */
    await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300);
    await ev(() => { S.meta.dirty = false; loadCourse(drillCourse('box', 'v0'), true); $('toast').hidden = true; });
    await page.click('.nav [data-v="run"]'); await page.fill('#manT', '9,5');
    await page.evaluate(() => $('saveRun').scrollIntoView({ block: 'center' })); await page.click('#saveRun'); await page.waitForTimeout(200);
    ok(await ev(() => (getMark('drill~box~v0').runs || []).length === 1 && drillRuns('box') === 1), 'běh se k cvičení nezapsal');
    await ev(() => { if (!$('scrim').hidden) closeSheet(); show('home'); }); await page.waitForTimeout(200);
    ok(/✓ 1×/.test(await page.textContent('[data-hdrill="box"]')) && !(await ev(() => document.querySelector('[data-hdrill="box"]').classList.contains('tip'))), 'dlaždice Čtverec neukazuje 1 běh');
    await page.click('[data-hdrill="pin"]'); await page.waitForSelector('#gOut .card', { timeout: 5000 });
    ok(await ev(() => GEN.tab === 'drill' && $('gDrill').value === 'pin' && GEN.out.every(c => /^drill~pin~[vs]\d+$/.test(c.id))), 'dlaždice neotevřela cvičení Mlýnek se stálými id');
    await ev(() => { closeSheet(); GEN.tab = 'drill'; GEN.drill = 'box'; genSheet(); genRun(); }); await page.waitForSelector('#gOut .card', { timeout: 5000 });
    ok(/✓ zaběhnuto 1×/.test(await page.textContent('#gOut')), 'karta cvičení neukazuje zaběhnutí');
    await ev(() => closeSheet());
  } catch (e) { T.fail(e); }

  await T.ctx.close();
  return T.errs;
};
