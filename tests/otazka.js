/* Otázka „Co ti v Pawkuru chybí?“ na Domů: od druhé návštěvy (otevření aspoň 30 minut po předchozím), jen ve verzi se serverem
   a jen dokud ji člověk nezodpoví nebo nezavře. Odpověď jedním klepnutím jde přes funkci feedback (quick: true, zpráva vždy česky),
   pak poděkování s tlačítkem Napsat (formulář Napsat autorovi). Chyba serveru nebo bez připojení: hláška, karta zůstane
   a otázka se nepočítá za zodpovězenou. Něco jiného… otevře rovnou formulář, křížek kartu schová natrvalo. Angličtina: všechny texty karty mají překlad. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  /* pevné časové pásmo: anglický telefon v Česku by měl česká pravidla a na Domů navíc závody z kacr.info */
  const T = await phone(browser, { timezoneId: 'Europe/London' }); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  /* funkce feedback: odpověď si krok nastaví (stav a tělo, nebo 'abort' = přerušené spojení); hold pozdrží odpověď, dokud ji test nepustí */
  const sent = []; let reply = { status: 200, body: { ok: true, mailed: false } }, hold = null;
  await T.ctx.route(/\/functions\/v1\/feedback$/, async r => {
    const q = r.request(); let b; try { b = JSON.parse(q.postData() || ''); } catch (e) { b = { neplatne: q.postData() }; }
    sent.push({ method: q.method(), headers: q.headers(), b });
    if (hold) await hold;
    if (reply === 'abort') return r.abort('internetdisconnected');
    await r.fulfill({ status: reply.status, contentType: 'application/json', body: JSON.stringify(reply.body) });
  });
  const OK = { status: 200, body: { ok: true, mailed: false } };
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  /* počká, až podmínka platí (nejvýš ms) */
  const until = async (f, ms = 3000) => { const t0 = Date.now(); while (!(await f()) && Date.now() - t0 < ms) await w(30); return f(); };
  /* stav v telefonu před dalším otevřením: n návštěv, poslední před `ago` minutami (n = null: žádný záznam), ask = uložená odpověď (null = žádná) */
  const prep = (n, ago, ask, lang) => ev(([n, ago, ask, lang]) => {
    if (n == null) localStorage.removeItem('agility-visits-v1'); else localStorage.setItem('agility-visits-v1', JSON.stringify({ n, at: Date.now() - ago * 6e4 }));
    if (ask == null) localStorage.removeItem('agility-ask-v1'); else localStorage.setItem('agility-ask-v1', JSON.stringify(ask));
    localStorage.setItem('agility-lang-v1', JSON.stringify(lang || 'cs'));
  }, [n, ago, ask, lang]);
  /* nové otevření aplikace na Domů */
  const reopen = async () => { await page.goto('about:blank'); await page.goto(base + '/#home'); await w(350); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  /* druhá návštěva: karta s otázkou je připravená na Domů */
  const ready = async (lang) => { await prep(1, 31, null, lang); await reopen(); };
  const card = () => ev(() => { const c = $('hmAsk'); return c && { ok: c.classList.contains('hm-ask-ok'), busy: c.classList.contains('busy'), chips: c.querySelectorAll('[data-ask]').length, txt: c.innerText.replace(/\s+/g, ' ').trim() }; });
  const answered = async () => !!((await card()) || {}).ok;
  const saved = () => ev(() => ({ vis: lsGet('agility-visits-v1', null), ask: lsGet('agility-ask-v1', null) }));
  const toastTxt = () => ev(() => $('toast').hidden ? '' : $('toast').textContent);
  /* klepnutí: hláška dole ho nesmí zakrýt */
  const tap = async (sel) => { await ev(() => { $('toast').hidden = true; }); await page.click(sel); };

  await page.goto(base + '/#home'); await w(300);
  await ev(() => { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); });

  await step('první návštěva: otázka se neukáže', async () => {
    await prep(null, 0, null); await reopen();
    const s = await saved();
    ok(s.vis && s.vis.n === 1 && Math.abs(Date.now() - s.vis.at) < 6e4, 'první otevření se má počítat jako 1. návštěva: ' + JSON.stringify(s.vis));
    ok(!(await card()), 'na první návštěvě se otázka nemá ukazovat');
    /* otevření do 30 minut je pořád stejná návštěva */
    await reopen();
    ok((await saved()).vis.n === 1 && !(await card()), 'otevření hned znovu se nemá počítat jako další návštěva');
    await prep(1, 29, null); await reopen();
    const s2 = await saved();
    ok(s2.vis.n === 1 && Date.now() - s2.vis.at > 28 * 6e4 && !(await card()), 'otevření po 29 minutách je pořád 1. návštěva: ' + JSON.stringify(s2.vis));
  });

  await step('druhá návštěva: otázka na Domů', async () => {
    await ready();
    const s = await saved(), c = await card();
    ok(s.vis.n === 2 && Math.abs(Date.now() - s.vis.at) < 6e4, 'otevření po 31 minutách je 2. návštěva: ' + JSON.stringify(s.vis));
    ok(c && !c.ok && !c.busy && c.chips === 7 && /Co ti v Pawkuru chybí\?/.test(c.txt) && /Víc parkurů/.test(c.txt) && /Něco jiného…/.test(c.txt), 'karta s otázkou: ' + JSON.stringify(c));
    ok(await page.isVisible('#hmAsk [data-ask="parkury"]') && await page.isVisible('#hmAsk [data-h="askx"]'), 'karta nemá viditelné volby nebo křížek');
    /* pod hlavičkou a dnem závodů, před Parkury pro tebe */
    ok(await ev(() => { const c = $('hmAsk'), sec = document.querySelector('#v-home .hm-sec'); return !!sec && !!(c.compareDocumentPosition(sec) & 4) && !!($('hmDay').compareDocumentPosition(c) & 4); }), 'karta má být mezi dnem závodů a Parkury pro tebe');
    ok(sent.length === 0, 'samotné zobrazení karty nemá nic posílat');
  });

  await step('odpověď jedním klepnutím', async () => {
    sent.length = 0; reply = OK;
    await tap('#hmAsk [data-ask="parkury"]'); await until(answered);
    const q = sent[0] || { headers: {} }, b = q.b || {}, me = await ev(() => ({ ver: APPV, dev: devId() }));
    ok(sent.length === 1 && q.method === 'POST' && /application\/json/.test(q.headers['content-type'] || '') && !!q.headers.apikey, 'požadavek na feedback: ' + JSON.stringify({ n: sent.length, m: q.method, h: q.headers['content-type'] }));
    ok(b.kind === 'idea' && b.msg === 'Co chybí: Víc parkurů' && b.quick === true && b.lang === 'cs' && b.ver === me.ver && /^[A-Za-z0-9_-]{8,64}$/.test(b.device || '') && !('contact' in b) && !('stars' in b), 'odeslaná data: ' + JSON.stringify(b));
    ok(b.device === me.dev, 'zařízení má být stejné náhodné číslo instalace jako jinde (devId)');
    const c = await card();
    ok(c && c.ok && !c.busy && /Díky, pomůže to!/.test(c.txt) && /Chceš k tomu něco napsat\?/.test(c.txt) && await page.isVisible('#hmAsk [data-h="askmore"]') && await page.isVisible('#hmAsk [data-h="askx"]'), 'poděkování: ' + JSON.stringify(c));
    const s = await saved();
    ok(s.ask && s.ask.k === 'parkury' && s.ask.at > 0, 'odpověď se má zapamatovat: ' + JSON.stringify(s.ask));
    await reopen();
    ok(!(await card()), 'zodpovězená otázka se po novém otevření vrátila');
    await prep(5, 120, s.ask); await reopen();
    ok(!(await card()) && sent.length === 1, 'zodpovězená otázka se vrátila při další návštěvě');
  });

  await step('Nic, je to super se pošle jako pochvala', async () => {
    await ready(); sent.length = 0; reply = OK;
    await tap('#hmAsk [data-ask="nic"]'); await until(answered);
    const b = (sent[0] || {}).b || {};
    ok(sent.length === 1 && b.kind === 'praise' && b.msg === 'Co chybí: Nic, je to super' && b.quick === true, 'Nic, je to super: ' + JSON.stringify(b));
    ok(((await saved()).ask || {}).k === 'nic', 'odpověď Nic, je to super se nezapamatovala');
  });

  await step('během odesílání druhé klepnutí nic nepošle', async () => {
    await ready(); sent.length = 0; reply = OK;
    let go; hold = new Promise(r => { go = r; });
    try {
      await tap('#hmAsk [data-ask="klub"]'); await until(() => sent.length === 1);
      const c = await card();
      ok(c && c.busy && !c.ok, 'během odesílání má být karta zašedlá: ' + JSON.stringify(c));
      await ev(() => askSend('snaz')); await w(150);
      ok(sent.length === 1, 'druhá odpověď během odesílání se poslala: ' + sent.length);
    } finally { hold = null; go(); }
    await until(answered);
    ok(await answered() && ((await saved()).ask || {}).k === 'klub', 'po odeslání má být poděkování a uložená odpověď klub: ' + JSON.stringify(await saved()));
  });

  await step('chyba serveru: hláška a karta zůstane', async () => {
    await ready(); sent.length = 0;
    reply = { status: 500, body: { error: 'Chyba serveru.' } };
    await tap('#hmAsk [data-ask="upoz"]'); await until(async () => !!(await toastTxt()));
    ok(sent.length === 1 && await toastTxt() === 'Odpověď se nepodařilo poslat. Zkus to později.', 'hláška po chybě serveru: ' + await toastTxt());
    const c = await card();
    ok(c && !c.ok && !c.busy && c.chips === 7, 'po chybě má karta zůstat a jít znovu klepnout: ' + JSON.stringify(c));
    ok((await saved()).ask === null, 'neodeslaná odpověď se nemá počítat jako zodpovězená');
    /* odpověď 200 bez ok (třeba chybová stránka) je taky chyba */
    reply = { status: 200, body: {} };
    await tap('#hmAsk [data-ask="upoz"]'); await until(async () => !!(await toastTxt()));
    ok(sent.length === 2 && /nepodařilo poslat/.test(await toastTxt()) && !(await answered()) && (await saved()).ask === null, 'odpověď bez ok se nemá brát jako odeslaná');
    await reopen();
    ok(await card(), 'po chybě se otázka při dalším otevření nevrátila');
    /* další pokus projde */
    reply = OK;
    await tap('#hmAsk [data-ask="upoz"]'); await until(answered);
    ok(await answered() && ((await saved()).ask || {}).k === 'upoz' && sent.length === 3, 'další pokus po chybě se nepovedl');
  });

  await step('bez připojení: hláška a karta zůstane', async () => {
    await ready(); sent.length = 0;
    reply = 'abort'; await T.ctx.setOffline(true);
    try {
      await tap('#hmAsk [data-ask="klub"]'); await until(async () => !!(await toastTxt()));
      const r = await ev(() => ({ on: navigator.onLine, t: $('toast').textContent }));
      ok(r.on === false && r.t === 'Bez připojení odpověď nejde poslat. Zkus to později.', 'hláška bez připojení: ' + JSON.stringify(r));
      const c = await card();
      ok(c && !c.ok && !c.busy && (await saved()).ask === null, 'bez připojení má karta zůstat a otázka nezodpovězená: ' + JSON.stringify(c));
    } finally { await T.ctx.setOffline(false); reply = OK; }
  });

  await step('křížek schová otázku natrvalo', async () => {
    await ready(); sent.length = 0;
    await tap('#hmAsk [data-h="askx"]');
    const s = await saved();
    ok(!(await card()) && s.ask && s.ask.x === 1 && !s.ask.k, 'křížek: ' + JSON.stringify(s.ask));
    await prep(3, 45, s.ask); await reopen();
    ok(!(await card()) && sent.length === 0, 'zavřená otázka se vrátila (nebo se něco poslalo)');
  });

  await step('křížek u poděkování nechá odpověď', async () => {
    await ready(); reply = OK;
    await tap('#hmAsk [data-ask="snaz"]'); await until(answered);
    await tap('#hmAsk [data-h="askx"]');
    const s = await saved();
    ok(!(await card()) && s.ask && s.ask.k === 'snaz' && !s.ask.x, 'křížek u poděkování: karta má zmizet a odpověď zůstat: ' + JSON.stringify(s.ask));
  });

  await step('Něco jiného… otevře zprávu autorovi', async () => {
    await ready(); sent.length = 0;
    /* předtím odeslaná zpráva a jiný druh: formulář má být nový, druh Nápad */
    await ev(() => { FB.kind = 'bug'; fbSave(); FB_SENT = true; });
    await tap('#hmAsk [data-ask="jine"]'); await w(200);
    ok(await ev(() => view === 'more' && moreTab === 'fb') && await page.isVisible('#moreBody #fbMsg') && await page.isVisible('#moreBody [data-fbk="idea"].on'), 'Něco jiného… má otevřít formulář Napsat autorovi s druhem Nápad');
    ok(sent.length === 0 && ((await saved()).ask || {}).k === 'jine', 'Něco jiného… nemá nic posílat a otázka se má zapamatovat: ' + JSON.stringify((await saved()).ask));
    await page.click('.nav [data-v="home"]'); await w(150);
    ok(!(await card()), 'po Něco jiného… se otázka na Domů vrátila');
  });

  await step('Napsat v poděkování otevře zprávu autorovi', async () => {
    await ready(); sent.length = 0; reply = OK;
    await ev(() => { FB_SENT = true; });
    await tap('#hmAsk [data-ask="play"]'); await until(answered);
    await tap('#hmAsk [data-h="askmore"]'); await w(200);
    ok(await ev(() => view === 'more' && moreTab === 'fb') && await page.isVisible('#moreBody #fbMsg'), 'Napsat neotevřelo formulář Napsat autorovi');
    ok(sent.length === 1 && ((await saved()).ask || {}).k === 'play', 'odpověď před Napsat: ' + JSON.stringify((await saved()).ask));
    await page.click('.nav [data-v="home"]'); await w(150);
    ok(!(await card()), 'po návratu na Domů se otázka vrátila');
  });

  await step('zodpovězená nebo zavřená otázka se neukáže', async () => {
    for (const a of [{ k: 'parkury', at: Date.now() - 864e5 }, { x: 1, at: Date.now() - 864e5 }]) {
      await prep(6, 90, a); await reopen();
      const r = await ev(() => ({ n: VISITS.n, card: !!$('hmAsk') }));
      ok(r.n === 7 && !r.card, 'otázka se ukázala, i když je uložené ' + JSON.stringify(a) + ': ' + JSON.stringify(r));
    }
  });

  await step('bez serveru (webová verze bez AGILITY_PWA) se otázka neukazuje', async () => {
    const C = await phone(browser, { timezoneId: 'Europe/London' });
    await offline(C.ctx, { get_catalog: { version: 0 } });
    await C.ctx.addInitScript(() => { Object.defineProperty(window, 'AGILITY_PWA', { configurable: true, get: () => 0, set: () => {} }); });
    await C.page.goto(base + '/#home'); await C.page.waitForTimeout(300);
    await C.ev(() => { localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 1, at: Date.now() - 31 * 6e4 })); });
    await C.page.goto('about:blank'); await C.page.goto(base + '/#home'); await C.page.waitForTimeout(350);
    const r = await C.ev(() => ({ srv: IS_SRV, n: VISITS.n, card: !!$('hmAsk') }));
    ok(r.srv === false && r.n === 2 && !r.card, 'webová verze bez serveru: ' + JSON.stringify(r));
    T.errs.push(...C.errs); await C.ctx.close();
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Co ti v Pawkuru chybí?', 'Stačí jedno klepnutí. Pomůže to rozhodnout, co dělat dál.', ...ASK_OPTS.map(o => o[1]), 'Díky, pomůže to!', 'Chceš k tomu něco napsat?', 'Napsat', 'Zavřít',
      'Bez připojení odpověď nejde poslat. Zkus to později.', 'Odpověď se nepodařilo poslat. Zkus to později.'].filter(s => trLookup(s) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    await ready('en'); sent.length = 0;
    const c = await card(), lab = await ev(() => [$('hmAsk').querySelector('[role="group"]').getAttribute('aria-label'), $('hmAsk').querySelector('[data-h="askx"]').getAttribute('aria-label')]);
    ok(await ev(() => LANG === 'en') && c && /What is Pawkur missing for you\?/.test(c.txt) && /One tap is enough/.test(c.txt) && /More courses/.test(c.txt) && /Something else…/.test(c.txt) && !/[áčďéěíňóřšťúůýž]/i.test(c.txt), 'karta v angličtině: ' + JSON.stringify(c));
    ok(lab[0] === 'What is Pawkur missing for you?' && lab[1] === 'Close', 'popisky pro čtečku obrazovky v angličtině: ' + JSON.stringify(lab));
    /* chyba serveru: hláška anglicky */
    reply = { status: 500, body: { error: 'Chyba serveru.' } };
    await tap('#hmAsk [data-ask="parkury"]'); await until(async () => !!(await toastTxt()));
    ok(await toastTxt() === 'The answer could not be sent. Try again later.', 'hláška po chybě v angličtině: ' + await toastTxt());
    /* odpověď z angličtiny je česky (sečte se s ostatními), jazyk en; poděkování anglicky */
    reply = OK;
    await tap('#hmAsk [data-ask="parkury"]'); await until(answered);
    const b = (sent[1] || {}).b || {}, c2 = await card();
    ok(sent.length === 2 && b.kind === 'idea' && b.msg === 'Co chybí: Víc parkurů' && b.lang === 'en' && b.quick === true, 'odpověď z angličtiny: ' + JSON.stringify(b));
    ok(c2 && c2.ok && /Thanks, that helps!/.test(c2.txt) && /Want to add a few words\?/.test(c2.txt) && /\bWrite\b/.test(c2.txt) && !/[áčďéěíňóřšťúůýž]/i.test(c2.txt), 'poděkování v angličtině: ' + JSON.stringify(c2));
    await prep(2, 0, null, 'cs');
  });

  await T.ctx.close();
  return T.errs;
};
