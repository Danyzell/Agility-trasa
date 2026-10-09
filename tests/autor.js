/* Napsat autorovi (hodnocení a zpráva na server), Podpořit aplikaci (QR platba), karta Hodnoť na Domů,
   instalace přes Chrome a doporučení aplikace QR kódem. */
const { phone, offline } = require('./helpers');
const jsQR = require('jsqr');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const sent = []; let reply = { status: 200, body: { ok: true, mailed: true } };
  await T.ctx.route(/\/functions\/v1\/feedback$/, async r => {
    sent.push(JSON.parse(r.request().postData() || '{}'));
    await r.fulfill({ status: reply.status, contentType: 'application/json', body: JSON.stringify(reply.body) });
  });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async (hash) => { await page.goto('about:blank'); await page.goto(base + '/' + (hash || '#home')); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  /* Napsat autorovi a Podpořit jsou v O aplikaci a podpora */
  const more = async (m) => { await page.click('.nav [data-v="more"]'); if (m === 'fb' || m === 'donate') { await page.click('#moreTabs [data-m="about"]'); await page.click(`#moreBody .morego [data-mgo="${m}"]`); } else await page.click(`#moreTabs [data-m="${m}"]`); await page.waitForTimeout(150); };
  /* QR kód ze SVG přečtený skutečnou čtečkou */
  const readQR = async (sel) => {
    const m = await page.evaluate(sel => { const svg = document.querySelector(sel); if (!svg) return null;
      const vb = svg.viewBox.baseVal.width, cells = []; (svg.querySelector('path').getAttribute('d').match(/M\d+ \d+/g) || []).forEach(t => { const p = t.slice(1).split(' '); cells.push([+p[0], +p[1]]); });
      return { vb, cells }; }, sel);
    if (!m) return null;
    const s = 4, W = m.vb * s, d = new Uint8ClampedArray(W * W * 4).fill(255);
    m.cells.forEach(([x, y]) => { for (let a = 0; a < s; a++) for (let c = 0; c < s; c++) { const i = ((y * s + a) * W + x * s + c) * 4; d[i] = d[i + 1] = d[i + 2] = 0; } });
    const r = jsQR(d, W, W); return r && r.data;
  };

  await step('QR kód a IBAN', async () => {
    await fresh();
    const r = await ev(() => [czIban('19-2000145399/0800'), czIban('1220369023/3030'), czIban('12/34'), qrMatrix('x'.repeat(300))]);
    ok(r[0] === 'CZ6508000000192000145399', 'IBAN vzorového účtu: ' + r[0]);
    ok(/^CZ\d{2}30300000001220369023$/.test(r[1]), 'IBAN účtu autora: ' + r[1]);
    ok(r[2] === '' && r[3] === null, 'neplatný účet nebo příliš dlouhý text');
    /* všechny délky až po verzi 10 se dají přečíst */
    for (const n of [1, 17, 60, 100, 150, 212]) {
      await ev(n => { const d = document.createElement('div'); d.id = 'qrT'; d.innerHTML = qrSvg('Q'.repeat(n - 1) + 'ř'.slice(0, n > 1 ? 1 : 0)); const o = $('qrT'); if (o) o.remove(); document.body.appendChild(d); }, n);
      const want = await ev(n => 'Q'.repeat(n - 1) + 'ř'.slice(0, n > 1 ? 1 : 0), n);
      ok(await readQR('#qrT svg') === want, 'QR kód s ' + n + ' znaky nejde přečíst');
    }
    await ev(() => $('qrT').remove());
  });

  await step('Podpořit aplikaci', async () => {
    await fresh();
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="about"]');
    ok(await page.isVisible('#moreBody .morego [data-mgo="donate"]') && await page.isVisible('#moreBody .morego [data-mgo="fb"]'), 'v O aplikaci a podpora chybí Podpořit nebo Napsat autorovi');
    await page.click('#moreBody .morego [data-mgo="donate"]'); await page.waitForTimeout(150);
    const iban = await ev(() => czIban('1220369023/3030'));
    let q = await readQR('#moreBody .dn-qr svg');
    ok(q === 'SPD*1.0*ACC:' + iban + '*AM:100.00*CC:CZK*MSG:Podpora Pawkur', 'QR platba: ' + q);
    await page.click('#moreBody [data-dam="200"]'); await page.waitForTimeout(100);
    q = await readQR('#moreBody .dn-qr svg'); ok(/\*AM:200\.00\*/.test(q || ''), 'částka 200 Kč: ' + q);
    await page.click('#moreBody [data-dam="0"]'); await page.waitForTimeout(100);
    q = await readQR('#moreBody .dn-qr svg'); ok(q && !/AM:/.test(q) && /Částku zadáš v bance/.test(await page.textContent('#moreBody')), 'jiná částka: ' + q);
    ok(/1220369023\/3030/.test(await page.textContent('#moreBody')), 'chybí číslo účtu');
    await T.ctx.grantPermissions(['clipboard-read', 'clipboard-write']).catch(() => {});
    await page.click('#moreBody [data-dcopy="1220369023/3030"]'); await page.waitForTimeout(150);
    ok(/Zkopírováno|1220369023/.test(await page.textContent('#toast')), 'kopírování čísla účtu');
    /* QR do galerie: obrázek PNG, který bankovní aplikace přečte */
    await page.click('#moreBody [data-dam="200"]'); await page.waitForTimeout(100);
    await ev(() => { window.__del = null; window.deliverFile = function (b, m, n, sh) { window.__del = { size: b.size, m, n, sh }; return Promise.resolve(); }; });
    await page.click('#moreBody [data-dqr]'); await page.waitForFunction(() => window.__del, null, { timeout: 5000 });
    const d = await ev(() => window.__del);
    ok(d.m === 'image/png' && d.n === 'pawkur-qr-platba-200.png' && d.size > 5000, 'uložený QR: ' + JSON.stringify(d));
    const img = await ev(() => { const c = dnQrCanvas(200), x = c.getContext('2d'); return { w: c.width, h: c.height, px: Array.from(x.getImageData(0, 0, c.width, c.height).data) }; });
    const r = jsQR(new Uint8ClampedArray(img.px), img.w, img.h);
    ok(r && r.data === 'SPD*1.0*ACC:' + iban + '*AM:200.00*CC:CZK*MSG:Podpora Pawkur', 'QR v uloženém obrázku: ' + (r && r.data));
    /* platba kartou až s odkazem ze Stripe */
    ok(await page.getAttribute('#moreBody .dn-card', 'href') === 'https://buy.stripe.com/aFa3cvh1x7wKbAub7U4ko03' && /Google Pay \/ Apple Pay \/ karta/.test(await page.textContent('#moreBody .dn-card')), 'tlačítko Google Pay / Apple Pay');
    const url0 = await ev(() => { const u = DONATE.url; DONATE.url = ''; moreRender(); return u; });
    ok(!(await page.isVisible('#moreBody .dn-card')), 'bez odkazu nemá být tlačítko kartou');
    await ev(u => { DONATE.url = u; moreRender(); }, url0);
    /* bez účtu se Podpořit neukazuje */
    ok(await ev(() => { const a = DONATE.acc, u = DONATE.url; DONATE.acc = ''; const kartou = donateOn(); DONATE.url = ''; const nic = donateOn(); DONATE.acc = a; DONATE.url = u; return kartou === true && nic === false; }), 'Podpořit bez účtu a bez odkazu');
  });

  await step('Napsat autorovi', async () => {
    await fresh(); await more('fb');
    await page.click('#moreBody [data-fbsend]'); await page.waitForTimeout(100);
    ok(sent.length === 0 && /Napiš zprávu nebo dej hvězdičky/.test(await page.textContent('#toast')), 'prázdná zpráva se nemá posílat');
    await page.click('#moreBody [data-fbs="4"]'); await page.click('#moreBody [data-fbk="bug"]');
    await page.fill('#fbMsg', 'Stopky se zasekly'); await page.fill('#fbMail', 'spatny-mail');
    /* rozepsaná zpráva přežije nové načtení */
    await fresh(); await more('fb');
    ok(await page.inputValue('#fbMsg') === 'Stopky se zasekly' && await page.locator('#moreBody .fb-st.on').count() === 4 && await page.isVisible('#moreBody [data-fbk="bug"].on'), 'rozepsaná zpráva se neuložila');
    await page.click('#moreBody [data-fbsend]'); await page.waitForTimeout(100);
    ok(sent.length === 0 && /E-mail nevypadá správně/.test(await page.textContent('#toast')), 'špatný e-mail');
    await page.fill('#fbMail', 'pavla@example.cz');
    /* chyba serveru: zpráva zůstane */
    reply = { status: 429, body: { error: 'Dnes už jsi poslal(a) dost zpráv, zkus to zítra.' } };
    await page.click('#moreBody [data-fbsend]'); await page.waitForTimeout(400);
    ok(/zkus to zítra/.test(await page.textContent('#toast')) && await page.inputValue('#fbMsg') === 'Stopky se zasekly', 'chyba serveru: ' + await page.textContent('#toast'));
    reply = { status: 200, body: { ok: true, mailed: true } }; sent.length = 0;
    await page.click('#moreBody [data-fbsend]'); await page.waitForSelector('#moreBody .fb-ok', { timeout: 5000 });
    const s = sent[0] || {};
    ok(s.stars === 4 && s.kind === 'bug' && s.msg === 'Stopky se zasekly' && s.contact === 'pavla@example.cz' && s.lang === 'cs' && /^[A-Za-z0-9_-]{16,}$/.test(s.device) && s.ver, 'odeslaná data: ' + JSON.stringify(s));
    ok(await page.isVisible('#moreBody [data-mgo="donate"]'), 'po odeslání chybí nabídka Podpořit');
    await page.click('#moreBody [data-fbnew]'); await page.waitForTimeout(100);
    ok(await page.inputValue('#fbMsg') === '' && await page.inputValue('#fbMail') === 'pavla@example.cz', 'nová zpráva má být prázdná a e-mail zapamatovaný');
  });

  await step('karta Hodnoť na Domů', async () => {
    await ev(() => { localStorage.removeItem('agility-rate-v1'); });
    await fresh();
    ok(!(await page.isVisible('#v-home .hm-rate')), 'karta se ukázala před 10 běhy');
    await ev(() => { var id = 'test-rate', m = { fav: false, done: true, runs: [] }; for (var i = 0; i < 10; i++) m.runs.push({ d: Date.now() - i * 1000, t: 40, tot: 0, len: 150 }); MK[id] = m; lsSet(MKK, MK); });
    await fresh();
    ok(await page.isVisible('#v-home .hm-rate'), 'po 10 bězích chybí karta Hodnoť');
    await page.click('#v-home [data-hrate="5"]'); await page.waitForTimeout(200);
    ok(await ev(() => view === 'more' && moreTab === 'fb') && await page.locator('#moreBody .fb-st.on').count() === 5 && await page.isVisible('#moreBody [data-fbk="praise"].on'), 'hvězdička neotevřela zprávu s hodnocením');
    await fresh();
    await page.click('#v-home .hm-rate [data-h="ratex"]'); await page.waitForTimeout(100);
    ok(!(await page.isVisible('#v-home .hm-rate')), 'karta po zavření nezmizela');
    await fresh(); ok(!(await page.isVisible('#v-home .hm-rate')), 'zavřená karta se vrátila');
  });

  await step('instalace přes Chrome', async () => {
    await ev(() => { localStorage.removeItem('agility-instx-v1'); });
    await fresh();
    ok(!(await page.isVisible('#hmInst .hm-inst')), 'bez nabídky Chromu nemá být karta Instalovat');
    await ev(() => { window.__pr = 0; const e = new Event('beforeinstallprompt'); e.prompt = () => { window.__pr++; }; e.userChoice = Promise.resolve({ outcome: 'accepted' }); window.dispatchEvent(e); });
    await page.waitForTimeout(100);
    ok(await page.isVisible('#hmInst .hm-inst'), 'Chrome nabídl instalaci, ale na Domů chybí karta');
    await page.click('#hmInst [data-inst]'); await page.waitForTimeout(150);
    ok(await ev(() => window.__pr === 1) && !(await page.isVisible('#hmInst .hm-inst')), 'Instalovat nespustil okno Chromu');
    await ev(() => { const e = new Event('beforeinstallprompt'); e.prompt = () => {}; e.userChoice = Promise.resolve({}); window.dispatchEvent(e); });
    await page.waitForTimeout(100); await page.click('#hmInst [data-instx]'); await page.waitForTimeout(100);
    ok(!(await page.isVisible('#hmInst .hm-inst')) && await ev(() => lsGet('agility-instx-v1', 0) > 1), 'zavření karty Instalovat');
    /* O aplikaci: tlačítko z Chromu, jinak návod; doporučení s QR kódem */
    await more('about');
    ok(await page.isVisible('#pwaInst [data-inst]'), 'v O aplikaci chybí Nainstalovat');
    await ev(() => { window.dispatchEvent(new Event('appinstalled')); });
    await page.waitForTimeout(100);
    ok(/Ťukni na ⋮|Sdílet/.test(await page.textContent('#pwaInst')), 'bez okna Chromu chybí návod: ' + await page.textContent('#pwaInst'));
    ok(await readQR('#moreBody .share-app svg') === 'https://pawkur.cz/', 'QR kód s odkazem na aplikaci');
    ok(await page.isVisible('#moreBody [data-mgo="fb"]') && await page.isVisible('#moreBody [data-mgo="donate"]'), 'v O aplikaci chybí Napsat autorovi nebo Podpořit');
  });

  await step('srdíčko Podpořit vpravo nahoře', async () => {
    await fresh();
    ok(await page.isVisible('#v-home .hm-sup'), 'na Domů chybí Podpořit');
    await page.click('#v-home .hm-sup'); await page.waitForTimeout(200);
    ok(await ev(() => view === 'more' && moreTab === 'donate') && await page.isVisible('#moreBody .dn-qr svg'), 'Podpořit na Domů neotevřelo QR platbu');
    await page.click('.nav [data-v="more"]'); await page.waitForTimeout(150);
    ok(await page.isVisible('#supBtn'), 'v horní liště Více chybí Podpořit');
    await page.click('#supBtn'); await page.waitForTimeout(200);
    ok(await ev(() => view === 'more' && moreTab === 'donate'), 'Podpořit v liště neotevřelo QR platbu');
    await page.click('.nav [data-v="lib"]'); await page.waitForTimeout(150);
    ok(!(await page.isVisible('#supBtn')), 'v Parkurech má být lišta bez Podpořit (3.1: místo pro nadpis, anglicky se zkracoval na „Co…“)');
    await page.click('.nav [data-v="plan"]'); await page.waitForTimeout(150);
    ok(!(await page.isVisible('#supBtn')), 'v Plánu má být lišta bez Podpořit (místo pro název parkuru)');
    /* bez účtu i bez odkazu ze Stripe se srdíčko neukazuje */
    await page.click('.nav [data-v="home"]'); await page.waitForTimeout(150);
    ok(await page.isVisible('#v-home .hm-sup'), 'na Domů po návratu chybí Podpořit');
    await ev(() => { DONATE.acc = ''; DONATE.url = ''; homeRender(); });
    ok(!(await page.isVisible('#v-home .hm-sup')), 'bez účtu a odkazu se má Podpořit schovat');
  });

  await step('poděkování po platbě kartou', async () => {
    /* Stripe po zaplacení přesměruje na …/?dekuji */
    await page.goto('about:blank'); await page.goto(base + '/?dekuji#home'); await page.waitForTimeout(600);
    ok(await page.isVisible('#sheet .thx') && /Díky za podporu/.test(await page.textContent('#sheet')), 'po návratu z platby chybí poděkování');
    ok(await ev(() => location.search === '' && location.hash === '#home' && view === 'home'), 'adresa po platbě zůstala s ?dekuji: ' + await ev(() => location.href));
    await page.click('#sheet [data-a="x"]'); await page.waitForTimeout(150);
    ok(await ev(() => $('scrim').hidden), 'poděkování nejde zavřít');
    await page.reload(); await page.waitForTimeout(600);
    ok(!(await page.isVisible('#sheet .thx')), 'poděkování se po obnovení stránky ukázalo znovu');
  });

  await step('odkaz z Facebooku', async () => {
    /* náhled odkazu (Open Graph) a obrázek */
    const html = await (await page.request.get(base + '/')).text();
    ok(/property="og:title"/.test(html) && /property="og:image" content="https:\/\/pawkur\.cz\/og\.jpg"/.test(html), 'chybí náhled odkazu pro Facebook');
    ok((await page.request.get(base + '/og.jpg')).ok(), 'chybí obrázek og.jpg');
    /* ve vestavěném prohlížeči Facebooku na Androidu nabídne otevření v Chromu, jinde nic */
    ok(!(await page.isVisible('#iabBar')), 'karta pro Facebook v běžném prohlížeči');
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/480.0.0.0;]' });
    await ctx.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), r => r.abort());
    const p2 = await ctx.newPage(); await p2.goto(base + '/#home'); await p2.waitForTimeout(400);
    const href = await p2.getAttribute('#iabGo', 'href').catch(() => null);
    ok(href && /^intent:\/\/.+#Intent;scheme=https;package=com\.android\.chrome;/.test(href), 've Facebooku chybí Otevřít v Chromu: ' + href);
    /* 3.1: karta na Domů (#hmIab) místo pruhu přes obsah; bez tlačítka přenosu dat (to je pro iPhone, Android se přepne do Chromu sám) */
    ok(await p2.evaluate(() => !document.querySelector('.iabbar') && !!document.querySelector('#hmIab .hm-iab#iabBar') && /Otevřeno ve Facebooku/.test(document.querySelector('#hmIab .tx').textContent) && !document.querySelector('#hmIab [data-iabmove]')), 'karta pro Facebook má být na Domů v Dnes, ne jako pruh');
    await p2.click('#iabX'); ok(!(await p2.isVisible('#iabBar')), 'karta pro Facebook nejde zavřít');
    await ctx.close();
    /* Android: poprvé se odkaz sám přepne do Chromu (i s parametry adresy), podruhé už ne; na iPhonu se nic samo neotevírá */
    const auto = async (ua) => {
      const c = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', userAgent: ua });
      await c.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), r => r.abort());
      await c.addInitScript(() => { window.__iab = []; window.IAB_OPEN = u => window.__iab.push(u); });
      const p = await c.newPage(); const out = [];
      for (let i = 0; i < 2; i++) { await p.goto('about:blank'); await p.goto(base + '/?iabauto&x=1#home'); await p.waitForTimeout(700); out.push(await p.evaluate(() => window.__iab.slice())); }
      await c.close(); return out;
    };
    const fbA = 'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/480.0.0.0;]';
    const a1 = await auto(fbA);
    ok(a1[0].length === 1 && /^intent:\/\/[^#]+\/\?iabauto&x=1#Intent;scheme=https;package=com\.android\.chrome;S\.browser_fallback_url=/.test(a1[0][0]) && a1[1].length === 0, 'automatické otevření v Chromu: ' + JSON.stringify(a1));
    const a2 = await auto('Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/480.0]');
    ok(a2[0].length === 0 && a2[1].length === 0, 'na iPhonu se nemá nic otevírat samo: ' + JSON.stringify(a2));
  });

  await step('instalace na Androidu bez okna Chromu', async () => {
    const SAM = 'Mozilla/5.0 (Linux; Android 14; SM-A546B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36';
    const CHR = 'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36';
    const WV = 'Mozilla/5.0 (Linux; Android 14; Pixel 7; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/129.0 Mobile Safari/537.36';
    const open = async (ua) => {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', userAgent: ua });
      await ctx.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), r => r.abort());
      await ctx.addInitScript(() => { localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); window.IAB_OPEN = () => {}; });
      const p = await ctx.newPage(); await p.goto(base + '/#home'); await p.waitForTimeout(500); await p.evaluate(() => closeSheet()); return { ctx, p };
    };
    /* Samsung Internet beforeinstallprompt nepošle: karta s návodem pro jeho menu */
    let { ctx, p } = await open(SAM);
    ok(await p.isVisible('#hmInst [data-andgo]'), 'v Samsung Internetu chybí na Domů karta Nainstaluj');
    await p.click('#hmInst [data-andgo]'); await p.waitForTimeout(100);
    ok(/Přidat stránku/.test(await p.textContent('#sheet')) && await p.locator('#sheet .inst-steps li').count() === 3, 'návod pro Samsung Internet: ' + await p.textContent('#sheet'));
    await p.click('#sheet [data-a]');
    /* po první skutečné akci jednou nabídne instalaci, podruhé už ne */
    await p.evaluate(() => HM.emit('courseSaved', { id: 'x' })); await p.waitForTimeout(1500);
    ok(/Nainstaluj si Pawkur/.test(await p.textContent('#sheet').catch(() => '')), 'po uložení parkuru se nenabídla instalace');
    await p.click('#sheet [data-a="go"]'); await p.waitForTimeout(100);
    ok(/Přidat stránku/.test(await p.textContent('#sheet')), 'Ukázat jak z nabídky neotevřelo návod');
    await p.click('#sheet [data-a]');
    await p.evaluate(() => HM.emit('runSaved', {})); await p.waitForTimeout(1500);
    ok(!(await p.isVisible('#sheet h3')), 'nabídka instalace se ukázala podruhé');
    /* zavřená karta se vrátí po 14 dnech */
    await p.click('#hmInst [data-instx]'); ok(!(await p.isVisible('#hmInst .hm-inst')), 'karta nejde zavřít');
    await p.evaluate(() => { localStorage.setItem('agility-instx-v1', String(Date.now() - 15 * 864e5)); pwaInstUI(); });
    ok(await p.isVisible('#hmInst [data-andgo]'), 'karta se po 14 dnech nevrátila');
    await ctx.close();
    /* Chrome po odmítnutém okně: karta zůstane a ukáže návod přes ⋮ */
    ({ ctx, p } = await open(CHR));
    await p.evaluate(() => { const e = new Event('beforeinstallprompt'); e.prompt = () => {}; e.userChoice = Promise.resolve({ outcome: 'dismissed' }); window.dispatchEvent(e); });
    await p.waitForTimeout(100); await p.click('#hmInst [data-inst]'); await p.waitForTimeout(150);
    ok(await p.isVisible('#hmInst [data-andgo]'), 'po odmítnutí okna Chromu zmizel návod');
    await p.click('#hmInst [data-andgo]'); ok(/Ťukni na ⋮ vpravo nahoře v Chromu/.test(await p.textContent('#sheet')), 'návod pro Chrome');
    await ctx.close();
    /* vestavěný prohlížeč jiné aplikace (WebView): pruh Otevřít v Chromu, bez karty */
    ({ ctx, p } = await open(WV));
    ok(await p.isVisible('#iabGo') && !(await p.isVisible('#hmInst .hm-inst')), 've WebView jiné aplikace chybí Otevřít v Chromu');
    await ctx.close();
  });

  await step('návod na instalaci na iPhonu', async () => {
    const SAF = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';
    const SAF26 = SAF.replace('Version/18.5', 'Version/26.0');
    const IPAD = 'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1';
    const CRIOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/129.0 Mobile/15E148 Safari/604.1';
    const open = async (ua, hash) => {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', userAgent: ua });
      await ctx.route(u => !/^http:\/\/(127\.0\.0\.1|localhost)/.test(u.href), r => r.abort());
      const p = await ctx.newPage(); await p.goto(base + '/' + (hash || '?onb#home')); await p.waitForTimeout(500); return { ctx, p };
    };
    /* první spuštění v Safari: napřed návod (data ze Safari se na plochu nepřenesou), po zavření průvodce */
    let { ctx, p } = await open(SAF);
    ok(await p.isVisible('#iosg') && !(await p.isVisible('#onb')), 'na iPhonu v Safari se návod neukázal před průvodcem');
    ok(await p.locator('#iosg li').count() === 3, 'návod pro Safari 18 nemá 3 kroky');
    ok(await p.getAttribute('#iosgArr', 'class') === 'iosg-arr c', 'šipka nemíří doprostřed dolů: ' + await p.getAttribute('#iosgArr', 'class').catch(() => null));
    const box = await p.locator('#iosg .iosg-in').boundingBox(); ok(box && box.x >= 0 && box.x + box.width <= 390, 'návod přetéká obrazovku');
    await p.click('#iosg .iosg-ok'); await p.waitForTimeout(400);
    ok(!(await p.isVisible('#iosg')) && !(await p.isVisible('#iosgArr')) && await p.isVisible('#onb'), 'po zavření návodu nezačal průvodce');
    /* podruhé už sám nevyskočí, karta na Domů ho ukáže znovu */
    await p.goto('about:blank'); await p.goto(base + '/?onb#home'); await p.waitForTimeout(500);
    ok(!(await p.isVisible('#iosg')), 'návod vyskočil podruhé');
    await p.evaluate(() => { const o = document.getElementById('onb'); if (o) o.remove(); localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 })); });
    await p.goto('about:blank'); await p.goto(base + '/#home'); await p.waitForTimeout(500); await p.evaluate(() => closeSheet());
    await p.click('#hmInst [data-iosgo]'); ok(await p.isVisible('#iosg'), 'karta Nainstaluj na Domů návod neotevře');
    await p.keyboard.press('Escape'); ok(!(await p.isVisible('#iosg')), 'návod nejde zavřít Escapem');
    await ctx.close();
    /* Safari 26: tři tečky vpravo dole, šipka doprava */
    ({ ctx, p } = await open(SAF26));
    ok(await p.locator('#iosg li').count() === 4 && /tři tečky/.test(await p.textContent('#iosg li')) && await p.getAttribute('#iosgArr', 'class') === 'iosg-arr r', 'návod pro Safari 26');
    await ctx.close();
    /* iPad: Sdílet vpravo nahoře */
    ({ ctx, p } = await open(IPAD));
    ok(/vpravo nahoře/.test(await p.textContent('#iosg li')) && await p.getAttribute('#iosgArr', 'class') === 'iosg-arr r up', 'návod pro iPad');
    await ctx.close();
    /* Chrome na iPhonu: sám nevyskočí, v O aplikaci jde otevřít a radí Safari bez šipky */
    ({ ctx, p } = await open(CRIOS));
    ok(!(await p.isVisible('#iosg')), 'návod vyskočil v Chromu na iPhonu');
    await p.evaluate(() => { const o = document.getElementById('onb'); if (o) o.remove(); document.documentElement.classList.remove('onb-open'); });
    await p.click('.nav [data-v="more"]'); await p.click('#moreTabs [data-m="about"]'); await p.waitForTimeout(150);
    await p.click('#pwaInst [data-iosgo]');
    ok(await p.isVisible('#iosg') && /jen ze Safari/.test(await p.textContent('#iosg')) && !(await p.isVisible('#iosgArr')), 'návod v Chromu na iPhonu má radit Safari');
    await ctx.close();
  });

  await step('zásady ochrany osobních údajů', async () => {
    await fresh(); await more('about');
    ok(await page.getAttribute('#moreBody a[href="privacy.html"]', 'target') === '_blank', 'v O aplikaci chybí odkaz na zásady');
    await more('fb');
    ok(await page.isVisible('#moreBody a[href="privacy.html"]'), 'u e-mailu ve zprávě autorovi chybí odkaz na zásady');
    const r = await page.request.get(base + '/privacy.html');
    const html = await r.text();
    ok(r.ok() && /Zásady ochrany osobních údajů/.test(html) && /Privacy policy/.test(html) && /Supabase/.test(html) && !/HandlerMap/.test(html), 'stránka privacy.html chybí nebo je neúplná');
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Napsat autorovi', 'Podpořit aplikaci', 'Jiná částka', '200 Kč', 'Díky, zpráva odešla!', 'Jak se ti Pawkur líbí?', 'Napiš, co máš na srdci', 'E-mail pro odpověď (nepovinné)',
      'Nainstaluj si aplikaci', 'Doporuč aplikaci kamarádům', 'Ťukni na ⋮ vpravo nahoře.', 'Sdílet odkaz', 'Instalovat', 'Podpořit', 'Uložit QR do galerie', 'Google Pay / Apple Pay / karta', 'Zásady ochrany osobních údajů', 'E-mail použijeme jen k odpovědi.', '3 z 5', 'Díky za podporu!', 'Doporučit kamarádům', 'Otevřít v Chromu', 'Pro instalaci aplikace ji otevři v Chromu.', 'Nainstaluj Pawkur na plochu', 'Sjeď níž a vyber Přidat na plochu', 'Ťukni dole vpravo na tři tečky ⋯', 'Vpravo nahoře ťukni na Přidat. Ikona Pawkur je pak na ploše.', 'Ukázat jak', 'Rozumím',
      'Tvůj příspěvek pomůže s provozem serveru a dalším vývojem aplikace. Ať se vám s pejskem daří!', 'Zprávu se nepodařilo poslat', 'Dnes už jsi poslal(a) dost zpráv, zkus to zítra.']
      .filter(s => trLookup(s) == null));
    ok(!miss.length, 'chybí překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
