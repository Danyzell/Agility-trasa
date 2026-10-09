/* Aplikace z Google Play (Trusted Web Activity, start ?src=twa): bez plateb mimo Google Play (Podpora, nákup Plus),
   všechno zdarma; web v prohlížeči beze změny. Smazání účtu v aplikaci (Účet → Smazat účet) i stránka smazani-uctu.html. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  const calls = [];
  let delMissing = false;
  await offline(T.ctx, {
    get_catalog: { version: 0 },
    delete_my_account: () => { calls.push('delete_my_account'); return true; },
    sync_delete: () => { calls.push('sync_delete'); return null; },
  });
  /* server bez funkce delete_my_account (SQL ještě nespuštěné): 404 jako PostgREST */
  await T.ctx.route(/\/rest\/v1\/rpc\/delete_my_account/, r => {
    if (!delMissing) return r.fallback();
    calls.push('delete_my_account 404');
    return r.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ code: 'PGRST202', message: 'Could not find the function public.delete_my_account' }) });
  });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const login = () => ev(() => { AUTH = { uid: 'u-1', email: 'a@b.cz', name: 'A', at: 'x', rt: 'y', exp: 9e9 }; lsSet('agility-auth-v1', AUTH); });
  const acct = async () => { await ev(() => { $('toast').hidden = true; moreOpen('acct'); }); await page.waitForTimeout(150); };

  await step('web v prohlížeči: Podpora a Plus jako dřív', async () => {
    await page.goto(base + '/#home'); await page.waitForTimeout(300);
    const r = await ev(() => { PLUS_LINK = 'https://buy.stripe.com/test_abc'; PLUS_FROM = '2020-01-01'; return { twa: IS_TWA, don: donateOn(), plus: plusReady(), row: !!acctPlusRow() }; });
    ok(!r.twa && r.don && r.plus && r.row, 'na webu se má Podpora i Plus ukazovat: ' + JSON.stringify(r));
    ok(await ev(() => ASK_OPTS.some(o => o[0] === 'play')), 'na webu chybí v otázce volba Aplikace z Google Play');
  });

  await step('aplikace z Google Play: bez Podpory a nákupu Plus', async () => {
    await page.goto('about:blank'); await page.goto(base + '/?src=twa#home'); await page.waitForTimeout(400);
    const r = await ev(() => { PLUS_LINK = 'https://buy.stripe.com/test_abc'; PLUS_FROM = '2020-01-01'; localStorage.setItem('agility-first-v1', String(Date.now() - 60 * 864e5));
      return { twa: IS_TWA, don: donateOn(), plus: plusReady(), ok: plusOK(), st: plusStatus(), row: acctPlusRow(), ask: ASK_OPTS.some(o => o[0] === 'play') }; });
    ok(r.twa && !r.don && !r.plus && r.ok, 'v aplikaci z Play nemá jít platit a všechno má být zdarma: ' + JSON.stringify(r));
    ok(r.st === 'Teď máš všechno zdarma.' && r.row === '' && !r.ask, 'v aplikaci z Play zůstala zmínka o nákupu: ' + JSON.stringify(r));
    await ev(() => show('home')); await page.waitForTimeout(150);
    ok(!(await page.isVisible('[data-h="sup"]')) && !(await page.isVisible('#supBtn')), 'na Domů zůstalo Podpořit');
    await ev(() => { if (window.pwaInstUI) pwaInstUI(); });
    ok(!(await page.isVisible('#pwaInst')), 'aplikace z Play nabízí instalaci aplikace');
    await ev(() => { moreTab = ''; show('more'); }); await page.waitForTimeout(150);
    const more = await page.textContent('#moreBody');
    ok(!/Podpořit|buy\.stripe|Platba se připravuje/.test(more), 've Více zůstala platba: ' + more.slice(0, 200));
    await ev(() => moreOpen('plus')); await page.waitForTimeout(150);
    const pl = await page.textContent('#moreBody');
    ok(!/Platba se připravuje|Až půjde Plus koupit|99 Kč/.test(pl) && !(await page.isVisible('#moreBody [data-plus="buy"]')), 'stránka Plus v aplikaci z Play: ' + pl.slice(0, 200));
    /* po znovunačtení (bez ?src=twa) zůstává aplikace z Play, sessionStorage */
    await page.goto(base + '/#home'); await page.waitForTimeout(300);
    ok(await ev(() => IS_TWA && !donateOn()), 'po znovunačtení se aplikace z Play zapomněla');
  });

  await step('Smazat účet', async () => {
    await login(); await acct();
    ok(await page.isVisible('#moreBody [data-acct="del"]'), 'v Účtu chybí Smazat účet');
    await page.click('#moreBody [data-acct="del"]'); await page.waitForTimeout(150);
    ok(/Smazat účet\?/.test(await page.textContent('#sheet')) && /Vrátit to nejde/.test(await page.textContent('#sheet')), 'chybí potvrzení smazání účtu');
    await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(400);
    ok(calls.join() === 'delete_my_account', 'smazání účtu nezavolalo server: ' + calls.join());
    ok(await ev(() => !AUTH && localStorage.getItem('agility-auth-v1') === null), 'po smazání účtu zůstalo přihlášení');
    ok(/Účet je smazaný/.test(await page.textContent('#toast')), 'chybí hláška Účet je smazaný: ' + await page.textContent('#toast'));
  });

  await step('Smazat účet bez funkce na serveru', async () => {
    calls.length = 0; delMissing = true;
    await login(); await acct();
    await page.click('#moreBody [data-acct="del"]'); await page.waitForTimeout(150); await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(400);
    ok(calls.join() === 'delete_my_account 404,sync_delete', 'bez funkce na serveru se mají smazat aspoň data: ' + calls.join());
    ok(await ev(() => !AUTH) && /Data z účtu smazána/.test(await page.textContent('#toast')), 'po smazání dat zůstalo přihlášení, nebo chybí hláška');
    delMissing = false;
  });

  await step('stránka smazani-uctu.html', async () => {
    let sent = null;
    await page.route(/\/functions\/v1\/feedback/, (r, req) => { sent = JSON.parse(req.postData() || '{}'); r.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }); });
    await page.goto(base + '/smazani-uctu.html'); await page.waitForTimeout(200);
    const tx = await page.textContent('body');
    ok(/Smazat účet/.test(tx) && /Delete account/i.test(tx) && /Více → Účet → Smazat účet/.test(tx), 'stránka nepopisuje smazání v aplikaci: ' + tx.slice(0, 160));
    const form = page.locator('form').first();
    await form.locator('input[type="email"]').fill('pes@example.cz');
    await form.locator('button[type="submit"], button:not([type])').first().click(); await page.waitForTimeout(400);
    ok(sent && /SMAZÁNÍ ÚČTU/.test(sent.msg) && sent.contact === 'pes@example.cz' && /^[A-Za-z0-9_-]{8,64}$/.test(sent.device || ''), 'žádost o smazání se neodeslala: ' + JSON.stringify(sent));
  });

  await T.ctx.close();
  return T.errs;
};
