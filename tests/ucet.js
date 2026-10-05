/* Účet: přihlášení přes Google (návrat s tokenem), synchronizace se serverem a třícestné slučování dat */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  /* server: jeden řádek dat; zápis jen se shodnou revizí (jako sync_put v databázi) */
  const srv = { data: {}, rev: 0, puts: 0, auth: [] };
  await offline(T.ctx, {
    sync_get: () => ({ data: srv.data, rev: srv.rev }),
    sync_put: a => { if (+a.p_rev !== srv.rev) return null; srv.data = a.p_data; srv.rev++; srv.puts++; return srv.rev; },
    sync_delete: () => { srv.data = {}; srv.rev = 0; return null; },
  });
  await T.ctx.route(/\/rest\/v1\/rpc\/sync_/, (r, req) => { srv.auth.push(req.headers().authorization || ''); r.fallback(); });
  await T.ctx.route(/\/auth\/v1\/settings/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ external: { google: false } }) }));
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
  const jwt = b64({ alg: 'HS256' }) + '.' + b64({ sub: 'u-1', email: 'dan@example.cz', exp: Math.floor(Date.now() / 1000) + 3600, user_metadata: { full_name: 'Dan Ukázka' } }) + '.sig';

  await step('slučování dat', async () => {
    await page.goto(base + '/#home'); await page.waitForTimeout(300);
    const r = await ev(() => {
      const b = [{ id: 1, n: 'a' }, { id: 2, n: 'b' }, { id: 3, n: 'c' }];
      const l = [{ id: 1, n: 'a2' }, { id: 3, n: 'c' }, { id: 4, n: 'nové tady' }];   /* 1 změněný, 2 smazaný tady, 4 nový */
      const rr = [{ id: 1, n: 'a' }, { id: 2, n: 'b' }, { id: 5, n: 'nové jinde' }]; /* 3 smazaný jinde, 5 nový */
      const list = m3list(b, l, rr, 'id').map(x => x.id + x.n).join();
      const mk = m3map({ c1: { fav: true, runs: [{ d: 1 }] } }, { c1: { fav: true, runs: [{ d: 1 }, { d: 2 }] } }, { c1: { fav: false, runs: [{ d: 1 }, { d: 3 }] } }, m3mark).c1;
      const first = m3list(undefined, [{ id: 1 }], [{ id: 2 }], 'id').length;
      return { list, mk: [mk.fav, mk.runs.map(x => x.d).join()], first };
    });
    ok(r.list === '1a2,4nové tady,5nové jinde', 'seznam se sloučil špatně: ' + r.list);
    ok(r.mk[0] === false && r.mk[1] === '1,2,3', 'běhy ze dvou zařízení se nesečetly: ' + JSON.stringify(r.mk));
    ok(r.first === 2, 'první přihlášení má data spojit');
  });

  await step('Účet bez přihlášení', async () => {
    await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="acct"]'); await page.waitForTimeout(150);
    ok(await page.isVisible('#moreBody [data-acct="in"]'), 'chybí Přihlásit přes Google');
    await page.click('#moreBody [data-acct="in"]'); await page.waitForTimeout(300);
    ok(/zapíná/.test(await page.textContent('#toast')) && /127\.0\.0\.1|localhost/.test(page.url()), 'nezapnuté přihlášení má jen upozornit');
  });

  await step('návrat z přihlášení a první synchronizace', async () => {
    /* v telefonu už je pes a vlastní parkur, na serveru deník z jiného zařízení */
    await ev(() => { localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'p1', name: 'Rex', size: 'L', cls: 'A1' }])); localStorage.setItem('agility-my-v1', JSON.stringify([{ id: 'm1', name: 'Můj', cls: 'A1', W: 40, H: 20, obs: [], route: [] }])); });
    srv.data = { 'agility-diary-v1': [{ id: 'd1', kind: 'trenink', date: '2026-10-01' }] }; srv.rev = 4;
    await page.goto('about:blank'); await page.goto(base + '/#access_token=' + jwt + '&refresh_token=r1&expires_in=3600&token_type=bearer'); await page.waitForTimeout(900);
    ok(await ev(() => !/access_token/.test(location.href) && AUTH && AUTH.uid === 'u-1' && AUTH.email === 'dan@example.cz'), 'token z adresy se nepřevzal nebo v ní zůstal');
    ok(await ev(() => view === 'more' && moreTab === 'acct') && /Dan Ukázka/.test(await page.textContent('#moreBody')), 'po přihlášení se neukázal účet');
    await page.waitForFunction(() => SYNC.st === 'ok', null, { timeout: 5000 });
    ok(srv.rev === 5 && srv.data['agility-dogs-v1'] && srv.data['agility-dogs-v1'][0].name === 'Rex' && srv.data['agility-my-v1'].length === 1 && srv.data['agility-diary-v1'].length === 1, 'data z telefonu se nenahrála: ' + JSON.stringify(srv.data).slice(0, 200));
    ok(await ev(() => diary().length === 1), 'deník ze serveru se nestáhl');
    ok(srv.auth.every(a => a === 'Bearer ' + jwt), 'synchronizace nepoužila token uživatele');
    ok(await ev(() => !('agility-auth-v1' in backupData().data) && !('agility-sync-v1' in backupData().data)), 'přihlášení se dostalo do zálohy');
  });

  await step('změna jinde i tady', async () => {
    /* jiné zařízení smaže deník a přidá psa; tady se zapíše běh */
    const d = JSON.parse(JSON.stringify(srv.data)); d['agility-diary-v1'] = []; d['agility-dogs-v1'].push({ id: 'p2', name: 'Bára', size: 'S', cls: 'A2' }); srv.data = d; srv.rev++;
    await ev(() => setMark('m1', { runs: [{ d: 111, t: 30, f: 0, r: 0, tot: 0, g: 'V' }], done: true }));
    await page.waitForFunction(r => SYNC.st === 'ok' && SYNC.at > 0 && window.__r !== r, null, { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(4500);
    ok(await ev(() => DOGS.length === 2 && diary().length === 0), 'změny z jiného zařízení se nestáhly');
    ok(srv.data['agility-marks-v1'] && srv.data['agility-marks-v1'].m1 && srv.data['agility-marks-v1'].m1.runs.length === 1, 'běh se neodeslal');
  });

  await step('odhlášení', async () => {
    await ev(() => moreOpen('acct')); await page.waitForTimeout(100);
    await page.click('#moreBody [data-acct="out"]'); await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(200);
    ok(await ev(() => !AUTH && localStorage.getItem('agility-auth-v1') === null && DOGS.length === 2), 'po odhlášení zůstalo přihlášení, nebo zmizela data');
    ok(await page.isVisible('#moreBody [data-acct="in"]'), 'po odhlášení chybí Přihlásit');
  });

  await step('přihlášení v úvodu a jednorázová nabídka', async () => {
    /* nový uživatel: průvodce má hned na první stránce Přihlásit přes Google */
    await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await ev(() => localStorage.clear()); await page.goto('about:blank'); await page.goto(base + '/?onb#home'); await page.waitForTimeout(600);
    ok(await page.isVisible('#onb .onb-acct [data-acct="in"]'), 'v průvodci chybí Přihlásit přes Google');
    await page.click('#onb [data-o="skip"]'); await page.waitForTimeout(150);
    /* stávající uživatel bez přihlášení: nabídka jednou, pak už ne */
    const a = await ev(() => { localStorage.removeItem('agility-acctask-v1'); const r1 = acctAsk(), vis = !$('scrim').hidden && !!document.querySelector('#sheet [data-acct="in"]'); closeSheet(); const r2 = acctAsk(); return [r1, vis, r2]; });
    ok(a[0] === true && a[1] && a[2] === false, 'nabídka přihlášení se neukázala, nebo se ukázala dvakrát: ' + JSON.stringify(a));
  });

  await step('návštěvnost pro autora', async () => {
    /* přehled se ukáže jen, když ho server vrátí (autorovi); ostatním nic */
    await T.ctx.route(/\/rest\/v1\/rpc\/app_stats/, r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(srv.admin ? { today: 3, d7: 12, d30: 40, new7: 5, total: 41, icon7: 4, en7: 2, accounts: 2, days: [['2026-10-04', 5], ['2026-10-05', 3]] } : null) }));
    await ev(() => { AUTH = { uid: 'u-1', email: 'a@b.cz', name: 'A', at: 'x', rt: 'y', exp: 9e9 }; moreOpen('about'); }); await page.waitForTimeout(400);
    ok(!(await page.isVisible('#statsBox .stats-adm')), 'přehled návštěvnosti vidí i ne-autor');
    srv.admin = true; await ev(() => moreOpen('about')); await page.waitForTimeout(400);
    ok(await page.isVisible('#statsBox .stats-adm') && /40/.test(await page.textContent('#statsBox')) && await page.locator('#statsBox .sbars i').count() === 2, 'autor nevidí přehled návštěvnosti');
    await ev(() => { AUTH = null; });
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Účet', 'Přihlásit přes Google', 'Synchronizovat teď', 'Odhlásit', 'Synchronizováno 10:42', 'Synchronizace se nepovedla: bez připojení k internetu', 'Smazat data z účtu', 'Přihlas se ke svým datům', 'Pokračovat bez přihlášení', 'Návštěvnost (vidíš jen ty)', 'Lidé, kteří aplikaci otevřeli (každé zařízení jednou za den). Celkem od začátku: 41. Anglicky: 2 za 7 dní.'].filter(s => trLookup(s) == null));
    ok(!miss.length, 'chybí překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
