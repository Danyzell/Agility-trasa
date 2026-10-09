/* Pawkur 3.1: závody s hvězdičkou Chci jet (nahoře na Domů, filtr, Den závodů i bez propojení s kacr.info, připomenutí uzávěrky
   na server), Do kalendáře (soubor .ics a Google Kalendář) a společné tréninky ve skupině (záložka Tréninky, vypsání, Přijdu / Nepřijdu,
   zrušení, karta na Domů). Server i kalendář kacr.info jsou podstrčené (helpers.offline, page.route), volání se zapisují do calls. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true, timezoneId: 'Europe/Prague', geolocation: { latitude: 50.08, longitude: 14.43 }, permissions: ['geolocation'], acceptDownloads: true }); const { page, ok, ev } = T;
  const day = (n) => { const d = new Date(Date.now() + n * 86400000); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const C = (id, name, from, to, extra) => Object.assign({ id, name, from, to, lat: 50.05, lng: 14.3, terrain: 'Tráva', indoor: false, judges: ['Novák, Jan (CZ)'], deadline: null, open: null, n: 0, entries: {} }, extra || {});
  const DATA = { at: Date.now(), days: 60, comps: [
    C(5, 'Brno zítra', day(1), day(1), { lat: 49.19, lng: 16.6 }),
    C(2, 'Ostrava', day(3), day(4), { lat: 49.83, lng: 18.28, open: true, deadline: day(2) + 'T20:00' }),
    C(4, 'Kolín', day(5), day(5), { lat: 50.03, lng: 15.2 }),
    C(3, 'Praha', day(10), day(10), { open: true, deadline: day(7) + 'T23:59' }),
  ] };
  await page.route('**/functions/v1/kacr', r => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(DATA) }));
  const calls = [], rec = (n, f) => (a) => { calls.push([n, a]); return typeof f === 'function' ? f(a) : f; };
  const last = (n) => { for (let i = calls.length - 1; i >= 0; i--) if (calls[i][0] === n) return calls[i][1]; return null; };
  /* čas tréninku v pásmu prohlížeče (Praha), ne v pásmu testu */
  const at = (n, h) => page.evaluate(([n, h]) => { const d = new Date(Date.now() + n * 864e5); d.setHours(h, 0, 0, 0); return d.toISOString(); }, [n, h]);
  const AT1 = await at(1, 17), AT5 = await at(5, 18);
  /* tréninky skupiny 1 na serveru: jeden zítra v 17:00 (Petra přijde), jeden za 5 dní */
  let EV = [
    { id: 71, gid: 1, gname: 'Agility Brno – středa', at: AT1, place: 'Cvičák Líšeň', note: 'vezměte vodu', cid: 11, cname: 'Středeční parkur 8', cthumb: null, by: 'Petra H.', mine: false, yes: ['Petra H.'], no: 0, my: null },
    { id: 72, gid: 1, gname: 'Agility Brno – středa', at: AT5, place: '', note: '', cid: null, cname: null, cthumb: null, by: 'Dan', mine: true, yes: ['Dan'], no: 1, my: 'yes' }];
  const evSet = (id, st) => { const e = EV.find(x => x.id === id); e.my = st === 'yes' || st === 'no' ? st : null; e.yes = e.yes.filter(n => n !== 'Dan'); if (st === 'yes') e.yes.push('Dan'); return Object.assign({}, e); };
  const rpc = {
    get_catalog: { version: 0 }, week_board: { rows: [], total: 0 }, league_board: { rows: [] }, group_today: [],
    group_list: [{ id: 1, code: 'XK4P2M', name: 'Agility Brno – středa', role: 'member', owner: false, me: 'Dan', members: 12, courses: 1, last: day(0) }],
    group_detail: (a) => ({ id: a.p_id, code: 'XK4P2M', name: 'Agility Brno – středa', role: 'member', owner: false,
      members: [{ uid: 'u1', name: 'Petra H.', role: 'trainer', me: false }, { uid: 'u2', name: 'Dan', role: 'member', me: true }],
      courses: [{ id: 11, name: 'Středeční parkur 8', cls: 'A2', author: 'Petra H.', day: day(0), note: '', by: 'Petra H.', mine: false, runs: 0, ran: false, thumb: null }] }),
    group_events_list: rec('group_events_list', () => EV.map(e => Object.assign({}, e))),
    group_events_soon: rec('group_events_soon', () => EV.map(e => Object.assign({}, e))),
    group_event_rsvp: rec('group_event_rsvp', (a) => evSet(a.p_eid, a.p_status)),
    group_event_put: rec('group_event_put', (a) => { const id = 80 + EV.length; EV.push({ id, gid: a.p_gid, gname: 'Agility Brno – středa', at: a.p_at, place: a.p_place, note: a.p_note, cid: a.p_cid, cname: a.p_cid ? 'Parkur' : null, cthumb: null, by: 'Dan', mine: true, yes: ['Dan'], no: 0, my: 'yes' }); return id; }),
    group_event_delete: rec('group_event_delete', (a) => { EV = EV.filter(e => e.id !== a.p_eid); return true; }),
    group_post: rec('group_post', 42),
    push_watch_set: rec('push_watch_set', 1), push_comp_set: rec('push_comp_set', true), push_pubkey: 'B' + 'x'.repeat(86), push_sub_set: rec('push_sub_set', 7),
  };
  await offline(T.ctx, rpc);
  await T.ctx.addInitScript(() => { try {
    if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 }));
    if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('3.1'));
    if (localStorage.getItem('agility-auth-v1') == null) localStorage.setItem('agility-auth-v1', JSON.stringify({ at: 'tok', rt: 'ref', exp: Math.floor(Date.now() / 1000) + 7200, uid: 'u2', email: 'dan@example.com', name: 'Dan' }));
    if (localStorage.getItem('agility-dogs-v1') == null) { localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2' }])); localStorage.setItem('agility-dogcur-v1', JSON.stringify('d1')); }
    localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 }));
  } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const home = async () => { await page.goto('about:blank'); await page.goto(base + '/#home'); await w(500); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const missEn = (list) => ev(l => l.filter(t => { const v = trLookup(t); return v == null || /[ěščřžýáíéůúňťď]/.test(v); }), list);

  await step('hvězdička Chci jet na Domů a v okně Závody', async () => {
    await home(); await page.waitForSelector('#hmComps .cp-row', { timeout: 5000 });
    const r0 = await ev(() => [...document.querySelectorAll('#hmComps .cp-row b')].map(b => b.textContent));
    ok(r0.join('|') === 'Brno zítra|Ostrava|Kolín', 'karta Závody bez hvězdiček: ' + JSON.stringify(r0));
    /* Praha je až desátý den: hvězdička ji dá na Domů hned nahoru */
    await ev(() => compsSheet()); await w(200);
    ok(await ev(() => [...document.querySelectorAll('#cpF [data-cf2]')].map(b => b.textContent).join('|')) === 'Vše|★ Chci jet|Do 100 km|Do 200 km|Moji psi', 'filtry v okně Závody');
    await page.click('#cpList [data-cpstar="3"]'); await w(150);
    const s = await ev(() => ({ cw: lsGet('agility-compwatch-v1', {}), on: document.querySelector('#cpList [data-cpstar="3"]').classList.contains('on'), pressed: document.querySelector('#cpList [data-cpstar="3"]').getAttribute('aria-pressed'), toast: $('toast').textContent, act: ACT && ACT.a && ACT.a.comp_star }));
    ok(s.cw['3'] && s.cw['3'].dl === DATA.comps[3].deadline.slice(0, 10) && s.cw['3'].from === day(10) && s.on && s.pressed === 'true' && /^Závod má hvězdičku/.test(s.toast) && s.act === 1, 'hvězdička uložená: ' + JSON.stringify(s));
    await page.click('#cpF [data-cf2="star"]'); await w(100);
    ok(await ev(() => [...document.querySelectorAll('#cpList .cp-row b')].map(b => b.textContent).join('|')) === 'Praha', 'filtr Chci jet');
    await ev(() => closeSheet()); await home(); await page.waitForSelector('#hmComps .cp-row', { timeout: 5000 });
    const r1 = await ev(() => [...document.querySelectorAll('#hmComps .cp-row')].map(x => x.querySelector('b').textContent + (x.classList.contains('star') ? '*' : '')));
    ok(r1[0] === 'Praha*' && r1.length === 3, 'na Domů závod s hvězdičkou nahoře: ' + JSON.stringify(r1));
    /* odebrání hvězdičky přímo na Domů */
    await page.click('#hmComps [data-cpstar="3"]'); await w(150);
    ok(await ev(() => !lsGet('agility-compwatch-v1', {})['3'] && $('toast').textContent === 'Hvězdička odebrána' && document.querySelector('#hmComps .cp-row b').textContent === 'Brno zítra'), 'odebrání hvězdičky na Domů');
    await ev(() => compsSheet()); await w(150); await page.click('#cpF [data-cf2="star"]'); await w(100);
    ok(/Zatím nemáš žádný závod s hvězdičkou/.test(await page.textContent('#cpList')), 'prázdný filtr Chci jet');
    await ev(() => closeSheet());
  });

  await step('Den závodů pro závod s hvězdičkou, bez propojení s kacr.info', async () => {
    await ev(() => { CW = {}; compWatchToggle(compById(5)); }); await home(); await page.waitForSelector('#hmDay .hm-day', { timeout: 5000 });
    const d = await ev(() => ({ when: document.querySelector('#hmDay .cd-when').textContent, name: document.querySelector('#hmDay .hm-day b').textContent }));
    ok(d.when === 'Zítra závodíš' && d.name === 'Brno zítra', 'karta Den závodů: ' + JSON.stringify(d));
  });

  await step('Do kalendáře: soubor .ics a Google Kalendář', async () => {
    await ev(() => compsSheet()); await w(200);
    await page.click('#cpList [data-cpcal="2"]'); await w(200);
    const s = await ev(() => ({ h: $('sheet').querySelector('h3').textContent, o: [...$('sheet').querySelectorAll('[data-cal]')].map(b => b.querySelector('b').textContent), g: $('sheet').querySelector('[data-cal="g"]').getAttribute('href') }));
    ok(s.h === 'Přidat do kalendáře' && s.o.join('|') === 'Kalendář v telefonu|Google Kalendář', 'okno Do kalendáře: ' + JSON.stringify(s));
    ok(await ev(() => getComputedStyle($('sheet').querySelector('a.opt')).textDecorationLine) === 'none', 'volba Google Kalendář má vypadat jako tlačítko (bez podtržení)');
    ok(/^https:\/\/calendar\.google\.com\/calendar\/render\?action=TEMPLATE&text=Ostrava&dates=\d{8}\/\d{8}&location=/.test(s.g) && s.g.indexOf(day(3).replace(/-/g, '') + '/' + day(5).replace(/-/g, '')) > 0, 'odkaz Google Kalendář (celodenní, konec den po): ' + s.g);
    const ics = await ev(() => icsText(compCalEv(compById(2))));
    ok(/BEGIN:VEVENT/.test(ics) && ics.indexOf('DTSTART;VALUE=DATE:' + day(3).replace(/-/g, '')) > 0 && ics.indexOf('DTEND;VALUE=DATE:' + day(5).replace(/-/g, '')) > 0 &&
      /SUMMARY:Ostrava\r\n/.test(ics) && /URL:https:\/\/kacr\.info\/competitions\/2/.test(ics) && /UID:kacr-2@pawkur\.cz/.test(ics) && ics.split('\r\n').every(l => l.length <= 61), 'obsah .ics: ' + ics);
    const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 3000 }), page.click('#sheet [data-cal="ics"]')]);
    ok(/^kacr-2\.ics$/.test(dl.suggestedFilename()), 'stažený soubor: ' + dl.suggestedFilename());
    await w(200);
    ok(await ev(() => !!$('cpList') && /Soubor do kalendáře je stažený/.test($('toast').textContent)), 'po stažení zpět v okně Závody');
    await ev(() => closeSheet());
  });

  await step('připomenutí uzávěrky: závody s hvězdičkou na server', async () => {
    await ev(() => { PUSH.on = true; PUSH.watch = ''; CW = {}; lsSet(CWK, CW); compWatchToggle(compById(2)); compWatchToggle(compById(3)); }); await w(300);
    const a = last('push_watch_set'), c = last('push_comp_set');
    ok(a && /^[A-Za-z0-9_-]{8,64}$/.test(a.p_device) && a.p_watch.length === 2 && a.p_watch.some(x => x.id === 2 && x.dl === day(2) && x.d === day(3) && x.n === 'Ostrava') && a.p_watch.some(x => x.id === 3 && x.dl === day(7)), 'push_watch_set: ' + JSON.stringify(a));
    ok(c && c.p_day === day(3) && c.p_name === 'Ostrava', 'nejbližší závod s hvězdičkou pro „zítra závodíš“: ' + JSON.stringify(c));
    ok(await ev(() => /Den před uzávěrkou přihlášek přijde připomenutí/.test($('toast').textContent)), 'hláška s připomenutím');
    await ev(() => { PUSH.on = false; });
  });

  await step('tréninky ve skupině: seznam, Přijdu / Nepřijdu', async () => {
    await ev(() => { moreOpen('groups'); groupOpen(1, 'courses'); }); await w(300);
    ok(await ev(() => [...document.querySelectorAll('.grp-tabs button')].map(b => b.textContent).join('|')) === 'Parkury|Tréninky|Členové|Nastavení', 'záložky skupiny');
    await page.click('.grp-tabs [data-gtab="events"]'); await w(150);
    const r = await ev(() => [...document.querySelectorAll('#moreBody .item.gev')].map(x => ({ when: x.querySelector('.ev-when').innerText.replace(/\s+/g, ' '), place: x.querySelector('.ev-tx b').textContent, who: x.querySelector('.ev-who').textContent, my: [...x.querySelectorAll('.ev-rsvp .on')].map(b => b.textContent).join(), park: !!x.querySelector('[data-evc]'), del: !!x.querySelector('[data-evd]') })));
    ok(r.length === 2 && r[0].when === 'zítra 17:00' && r[0].place === 'Cvičák Líšeň' && r[0].who === 'Kdo přijde (1): Petra H.' && r[0].my === '' && r[0].park && !r[0].del, 'první trénink: ' + JSON.stringify(r[0]));
    ok(r[1].place === 'Trénink' && r[1].my === 'Přijdu' && !r[1].park && r[1].del, 'druhý trénink (můj): ' + JSON.stringify(r[1]));
    const ln = await ev(() => [...document.querySelectorAll('#moreBody .item.gev .ev-tx > span')].map(x => ({ t: x.textContent, h: Math.round(x.getBoundingClientRect().height), inl: [...x.querySelectorAll('span')].every(y => getComputedStyle(y).display === 'inline') })));
    ok(ln.length >= 3 && ln.every(x => x.inl && x.h < 44) && ln.filter(x => /^Kdo přijde/.test(x.t)).every(x => x.h < 26), 'popis tréninku má téct v řádku, ne slovo pod slovem: ' + JSON.stringify(ln));
    await page.click('#moreBody [data-evid="71"] [data-evr="yes"]'); await w(200);
    const a = last('group_event_rsvp');
    ok(a && a.p_eid === 71 && a.p_status === 'yes', 'volání Přijdu: ' + JSON.stringify(a));
    ok(await ev(() => document.querySelector('#moreBody [data-evid="71"] .ev-rsvp .on').textContent === 'Přijdu' && /Petra H\., Dan$/.test(document.querySelector('#moreBody [data-evid="71"] .ev-who').textContent) && $('toast').textContent === 'Ostatní uvidí, že přijdeš.'), 'po Přijdu: ' + await ev(() => document.querySelector('#moreBody [data-evid="71"]').innerText.replace(/\s+/g, ' ')));
    await page.click('#moreBody [data-evid="71"] [data-evr="no"]'); await w(200);
    ok(await ev(() => document.querySelector('#moreBody [data-evid="71"] .ev-rsvp .on').textContent === 'Nepřijdu' && document.querySelector('#moreBody [data-evid="71"] .ev-who').textContent === 'Kdo přijde (1): Petra H.'), 'po Nepřijdu');
    /* parkur tréninku se otevře jako parkur skupiny */
    ok(await ev(() => document.querySelector('#moreBody [data-evid="71"] [data-evc]').getAttribute('data-evc') === '11'), 'tlačítko Parkur u tréninku');
  });

  await step('vypsat trénink a zrušit ho', async () => {
    await page.click('#moreBody [data-evnew="1"]'); await w(200);
    const f = await ev(() => ({ h: $('sheet').querySelector('h3').textContent, day: $('evDay').value, tm: $('evTime').value, opts: [...$('evCourse').options].map(o => o.textContent) }));
    ok(f.h === 'Vypsat trénink' && f.day === day(1) && f.tm === '17:00' && f.opts[0] === 'Bez parkuru' && f.opts.some(t => /^Středeční parkur 8 · /.test(t)), 'okno Vypsat trénink: ' + JSON.stringify(f));
    await page.fill('#evDay', day(2)); await page.fill('#evTime', '18:30'); await page.fill('#evPlace', 'Hřiště u školy'); await page.selectOption('#evCourse', '11'); await page.fill('#evNote', 'rozcvička v 18:15');
    await page.click('#sheet [data-a="ok"]'); await w(400);
    const a = last('group_event_put'), hm = await ev(t => { const d = new Date(t); return d.getHours() + ':' + d.getMinutes(); }, a && a.p_at);
    ok(a && a.p_gid === 1 && a.p_cid === 11 && a.p_place === 'Hřiště u školy' && a.p_note === 'rozcvička v 18:15' && hm === '18:30' && !a.p_eid, 'volání group_event_put: ' + JSON.stringify(a) + ' ' + hm);
    ok(await ev(() => $('scrim').hidden && /Trénink je vypsaný/.test($('toast').textContent) && GRP.tab === 'events' && document.querySelectorAll('#moreBody .item.gev').length === 3 && ACT.a.ev_new === 1), 'po vypsání seznam se třemi tréninky');
    /* parkur z Plánu: nejdřív se pošle skupině, trénink pak dostane jeho číslo */
    await ev(() => { loadCourse(listFor('A2')[0], true); moreOpen('groups'); groupOpen(1, 'events'); }); await w(300);
    await page.click('#moreBody [data-evnew="1"]'); await w(200);
    ok(await ev(() => [...$('evCourse').options].some(o => o.value === 'plan' && /^Z Plánu: /.test(o.textContent))), 'volba parkuru z Plánu');
    await page.selectOption('#evCourse', 'plan'); await page.click('#sheet [data-a="ok"]'); await w(400);
    ok(last('group_post') && last('group_post').p_id === 1 && last('group_event_put').p_cid === 42, 'parkur z Plánu se poslal skupině: ' + JSON.stringify(last('group_event_put')));
    /* trénink v minulosti nejde */
    await page.click('#moreBody [data-evnew="1"]'); await w(200); await page.fill('#evDay', day(-2)); await page.click('#sheet [data-a="ok"]'); await w(150);
    ok(await ev(() => !$('scrim').hidden && $('toast').textContent === 'Trénink má být v budoucnu.'), 'trénink v minulosti');
    await ev(() => closeSheet());
    /* zrušení vlastního tréninku */
    await page.click('#moreBody [data-evid="72"] [data-evd]'); await w(150); await T.sheet('ok'); await w(300);
    ok(last('group_event_delete') && last('group_event_delete').p_eid === 72 && await ev(() => !document.querySelector('#moreBody [data-evid="72"]') && $('toast').textContent === 'Trénink zrušen'), 'zrušení tréninku');
    /* do kalendáře: událost na 90 minut v čase tréninku */
    const ics = await ev(() => icsText(evCalEv(evFind(71))));
    ok(/SUMMARY:Trénink · Agility Brno – středa/.test(ics) && /DTSTART:\d{8}T\d{6}Z/.test(ics) && /LOCATION:Cvičák Líšeň/.test(ics) && /DESCRIPTION:Parkur: Středeční parkur 8\\nvezměte vodu/.test(ics), 'trénink do kalendáře: ' + ics);
  });

  await step('Domů: trénink zítra v Dnes', async () => {
    await home(); await ev(() => groupTodayLoad(true)); await w(500);
    const h = await ev(() => [...document.querySelectorAll('#hmGroupEv .hm-ev')].map(x => ({ g: x.querySelector('.cd-when').textContent, when: x.querySelector('.ev-when').innerText.replace(/\s+/g, ' '), place: x.querySelector('.ev-tx b').textContent })));
    /* zítra 17:00 Cvičák a trénink vypsaný s parkurem z Plánu (výchozí zítra 17:00, bez místa); pozítří a později na Domů ne */
    ok(h.length === 2 && h[0].g === 'Agility Brno – středa' && h[0].when === 'zítra 17:00' && h[0].place === 'Cvičák Líšeň' && h[1].place === 'Trénink', 'karta tréninku na Domů (jen dnes a zítra): ' + JSON.stringify(h));
    await page.click('#hmGroupEv [data-evid="71"] [data-evr="yes"]'); await w(200);
    ok(last('group_event_rsvp').p_status === 'yes' && await ev(() => document.querySelector('#hmGroupEv [data-evid="71"] .ev-rsvp .on').textContent === 'Přijdu'), 'Přijdu na Domů');
  });

  await step('360 px a angličtina', async () => {
    await page.setViewportSize({ width: 360, height: 740 }); await ev(() => { moreOpen('groups'); groupOpen(1, 'events'); }); await w(300);
    const r = await ev(() => ({ wide: document.documentElement.scrollWidth <= innerWidth, rows: [...document.querySelectorAll('#moreBody .item.gev')].every(x => x.getBoundingClientRect().right <= innerWidth + 1), btn: [...document.querySelectorAll('#moreBody .ev-rsvp button')].every(b => b.getBoundingClientRect().height >= 40) }));
    ok(r.wide && r.rows && r.btn, '360 px: ' + JSON.stringify(r));
    await page.setViewportSize({ width: 390, height: 844 });
    const miss = await missEn(['★ Chci jet', 'Chci jet', 'Do kalendáře ›', 'Do kalendáře', 'Přidat do kalendáře', 'Zatím nemáš žádný závod s hvězdičkou. Klepni na hvězdičku u závodu, kam chceš jet.',
      'Hvězdičku může mít nejvýš 30 závodů.', 'Hvězdička odebrána', 'Závod má hvězdičku. Den před uzávěrkou přihlášek přijde připomenutí.', 'Závod má hvězdičku. Připomenutí uzávěrky přijde se zapnutými upozorněními (Více → Nastavení).',
      'Přihlášky do', 'Kalendář v telefonu', 'Google Kalendář', 'Stáhne soubor, který otevře kalendář (iPhone, Outlook, většina telefonů).', 'Otevře Google Kalendář s vyplněnou událostí.',
      'Soubor do kalendáře je stažený. Otevři ho a událost se přidá.', 'Soubor se nepodařilo vytvořit.', 'Parkur a trénink skupiny', 'Závody: uzávěrka přihlášek a den předem',
      'Tréninky', 'Vypsat trénink', 'Vypsat', 'Vypisuji…', 'Den', 'Čas', 'Místo', 'Parkur', 'Poznámka', 'Bez parkuru', 'Z Plánu',
      'Zatím žádný trénink. Vypiš ho: členům přijde upozornění, den předem připomenutí a každý odpoví Přijdu nebo Nepřijdu.', 'Tréninky vidí jen členové skupiny. Kdo napíše Nepřijdu, připomenutí nedostane.',
      'Kdo přijde (3):', 'Zatím nikdo nepotvrdil', 'parkur', 'pořádá', 'Trénink', 'Přijdu', 'Nepřijdu', 'Moje odpověď', 'Zrušit trénink', 'Zrušit trénink?', 'Kdo psal Přijdu, dostane upozornění.',
      'Ostatní uvidí, že přijdeš.', 'Ostatní uvidí, že nepřijdeš.', 'Trénink zrušen', 'např. cvičák u lesa', 'např. vezměte vodu a pamlsky',
      'Členům skupiny přijde upozornění a den předem připomenutí. Parkur z Plánu se pošle skupině, běhy se pak sejdou v jejím žebříčku.', 'Vyplň den a čas.', 'Trénink má být v budoucnu.',
      'Trénink je vypsaný. Členové ho uvidí ve skupině a na Domů.', 'Tréninky se nepodařilo načíst (chyba).', 'Vypsat se nepovedlo: chyba', 'Nepovedlo se: zrušit může jen ten, kdo trénink vypsal, nebo trenér']);
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
