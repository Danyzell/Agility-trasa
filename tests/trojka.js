/* Pawkur 3.0 (trojka): Dnes na Domů (parkur od skupiny, plán na týden), galerie parkurů (seznam s náhledy, otevření, hodnocení,
   zveřejnění ze Sdílet), skupiny a trenér (založení, kód, parkury, žebříček, běh do žebříčku, odkaz ?skupina=) a upozornění
   (odběr na server, témata, karta na Domů). Server je podstrčený (helpers.offline), volání se zapisují do calls. */
const { phone, offline } = require('./helpers');
const fs = require('fs'), path = require('path');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { isMobile: true, timezoneId: 'Europe/Prague' }); const { page, ok, ev } = T;
  const calls = [], today = new Date().toISOString().slice(0, 10);
  const thumb = { W: 30, H: 20, o: ['jump', 4, 10, 90, 'tunnel', 10, 5, 0, 'jump', 16, 12, 45, 'weave', 22, 8, 0], r: [1, 2, 3, 4], t: '..l' };
  const data = { W: 30, H: 20, obs: [{ id: 1, type: 'jump', x: 4, y: 10, rot: 90 }, { id: 2, type: 'tunnel', x: 10, y: 5, rot: 0 }, { id: 3, type: 'jump', x: 16, y: 12, rot: 45 }], route: [1, 2, 3], sides: [], turns: [], hp: [], marks: [] };
  const rec = (n, f) => (a) => { calls.push([n, a]); return typeof f === 'function' ? f(a) : f; };
  let slowBoard = false;
  const rpc = {
    get_catalog: { version: 0 }, week_board: { rows: [], total: 0 }, league_board: { rows: [] },
    gallery_list: rec('gallery_list', (a) => ({ total: 2, rows: [
      { code: 'K7P2QX', name: 'Mistrovství klubu A2', cls: 'A2', author: 'J. Novák', judge: 'J. Novák', country: 'CZ', len: 182.4, n: 20, downloads: 31, rating: 4.6, rating_n: 9, at: '2026-10-08T10:00:00Z', mine: false, thumb },
      { code: 'B3NM4Q', name: 'Trénink serpentiny', cls: 'A1', author: 'Petra H.', judge: '', country: 'CZ', len: 150.2, n: 17, downloads: 12, rating: null, rating_n: 0, at: '2026-10-06T10:00:00Z', mine: true, thumb: null }] })),
    get_course: rec('get_course', (a) => [{ code: a.p_code, name: 'Mistrovství klubu A2', cls: 'A2', author: 'J. Novák', data, created_at: '2026-10-08T10:00:00Z' }]),
    gallery_opened: rec('gallery_opened', true), gallery_rate: rec('gallery_rate', (a) => ({ rating: 4.5, rating_n: 10, mine: a.p_stars })),
    gallery_publish: rec('gallery_publish', true), gallery_unpublish: rec('gallery_unpublish', true), share_course: rec('share_course', 'ABC234'),
    group_today: rec('group_today', [
      { gid: 1, gname: 'Agility Brno – středa', id: 11, name: 'Středeční parkur 8', cls: 'A2', day: today, note: 'trénink v 18:00', by: 'Petra H.', runs: 3, ran: false, thumb },
      { gid: 1, gname: 'Agility Brno – středa', id: 10, name: 'Serpentiny', cls: 'A2', day: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10), note: '', by: 'Petra H.', runs: 0, ran: false, thumb: null }]),
    group_list: rec('group_list', [{ id: 1, code: 'XK4P2M', name: 'Agility Brno – středa', role: 'member', owner: false, me: 'Dan', members: 12, courses: 8, last: '2026-10-09' }, { id: 2, code: 'R7T3WQ', name: 'Moje parta', role: 'trainer', owner: true, me: 'Dan', members: 4, courses: 2, last: null }]),
    group_detail: rec('group_detail', (a) => ({ id: a.p_id, code: a.p_id === 2 ? 'R7T3WQ' : a.p_id === 3 ? 'NEWC0D' : 'XK4P2M', name: a.p_id === 2 ? 'Moje parta' : a.p_id === 3 ? 'Testovací' : 'Agility Brno – středa', role: a.p_id === 1 ? 'member' : 'trainer', owner: a.p_id !== 1,
      members: [{ uid: 'u1', name: 'Petra H.', role: 'trainer', me: false, since: '2026-09-01' }, { uid: 'u2', name: 'Dan', role: a.p_id === 1 ? 'member' : 'trainer', me: true, since: '2026-09-03' }, { uid: 'u3', name: 'Lucie', role: 'member', me: false, since: '2026-09-10' }],
      courses: a.p_id === 3 ? [] : [{ id: 11, name: 'Středeční parkur 8', cls: 'A2', author: 'Petra H.', day: today, note: 'trénink v 18:00', by: 'Petra H.', mine: false, runs: 3, ran: false, thumb }, { id: 9, name: 'Tunely a slalom', cls: 'A2', author: '', day: '2026-10-02', note: '', by: 'Petra H.', mine: false, runs: 7, ran: true, thumb }] })),
    group_create: rec('group_create', (a) => ({ id: 3, code: 'NEWC0D', name: a.p_name, role: 'trainer', members: 1 })),
    group_join: rec('group_join', (a) => ({ id: 1, code: a.p_code, name: 'Agility Brno – středa', role: 'member', members: 13 })),
    group_course_get: rec('group_course_get', (a) => ({ id: a.p_cid, gid: 1, name: 'Středeční parkur 8', cls: 'A2', author: 'Petra H.', data, day: today, note: '' })),
    group_run_put: rec('group_run_put', true), group_post: rec('group_post', 42), group_member_set: rec('group_member_set', true), group_my_name_set: rec('group_my_name_set', 'Dan K.'),
    /* žebříček parkuru 11 má tři řádky (se slowBoard přijde pozdě), parkuru 9 jeden */
    group_board: rec('group_board', (a) => { const rows = a.p_cid === 9 ? [{ name: 'Lucie', dog: 'Bára', size: 'M', t: 30.1, pen: 0, g: 'V', f: 0, r: 0, me: false }]
      : [{ name: 'Lucie', dog: 'Bára', size: 'M', t: 38.12, pen: 0, g: 'V', f: 0, r: 0, me: false }, { name: 'Dan', dog: 'Fany', size: 'M', t: 39.5, pen: 0, g: 'V', f: 0, r: 0, me: true }, { name: 'Petra H.', dog: 'Max', size: 'L', t: null, pen: 0, g: 'DIS', f: 0, r: 0, me: false }];
      return slowBoard && a.p_cid === 11 ? new Promise(res => setTimeout(() => res(rows), 500)) : rows; }),
    push_pubkey: 'B' + 'x'.repeat(86), push_sub_set: rec('push_sub_set', 7), push_sub_del: rec('push_sub_del', true), push_comp_set: rec('push_comp_set', true),
  };
  await offline(T.ctx, rpc);
  await T.ctx.addInitScript(() => { try {
    if (localStorage.getItem('agility-onb-v1') == null) localStorage.setItem('agility-onb-v1', JSON.stringify({ done: 1, v: 2 }));
    if (localStorage.getItem('agility-news-v1') == null) localStorage.setItem('agility-news-v1', JSON.stringify('3.0'));
    if (localStorage.getItem('agility-auth-v1') == null) localStorage.setItem('agility-auth-v1', JSON.stringify({ at: 'tok', rt: 'ref', exp: Math.floor(Date.now() / 1000) + 7200, uid: 'u2', email: 'dan@example.com', name: 'Dan' }));
    if (localStorage.getItem('agility-dogs-v1') == null) { localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'd1', name: 'Fany', size: 'M', cls: 'A2', look: 2 }])); localStorage.setItem('agility-dogcur-v1', JSON.stringify('d1')); }
    localStorage.setItem('agility-visits-v1', JSON.stringify({ n: 3, at: Date.now() })); localStorage.setItem('agility-instx-v1', JSON.stringify(Date.now())); localStorage.setItem('agility-ask-v1', JSON.stringify({ x: 1 }));
    /* odběr upozornění bez skutečného service workeru */
    window.PUSH_TEST = { pushManager: { getSubscription: () => Promise.resolve(window.PUSH_SUB || null), subscribe: () => { window.PUSH_SUB = { endpoint: 'https://push.example/abc', options: {}, unsubscribe() { window.PUSH_SUB = null; return Promise.resolve(true); }, toJSON() { return { endpoint: this.endpoint, keys: { p256dh: 'p'.repeat(40), auth: 'a'.repeat(22) } }; } }; return Promise.resolve(window.PUSH_SUB); } } };
  } catch (e) {} });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const w = (ms) => page.waitForTimeout(ms);
  const last = (n) => { for (let i = calls.length - 1; i >= 0; i--) if (calls[i][0] === n) return calls[i][1]; return null; };
  const fresh = async (h) => { await page.goto('about:blank'); await page.goto(base + '/' + (h || '#home')); await w(500); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  await fresh();

  await step('Dnes: plán na týden', async () => {
    const r = await ev(() => ({ h: document.querySelector('#v-home .hm-tdh h3') && document.querySelector('#v-home .hm-tdh h3').textContent, n: document.querySelectorAll('#hmPlan .pl-row').length,
      labels: [...document.querySelectorAll('#hmPlan .pl-go b')].map(b => b.textContent), sub: [...document.querySelectorAll('#hmPlan .pl-go span')].map(b => b.textContent), st: document.querySelector('#hmPlan .tx > span').textContent }));
    ok(r.h === 'Dnes' && r.n === 4, 'sekce Dnes a 4 položky plánu: ' + JSON.stringify(r));
    ok(r.labels.slice(0, 3).join() === 'Čtverec (box),Mlýnek,Had (serpentina)' && r.sub[3] === 'Parkur týdne A2' && /^0 z 4 hotovo · zbývá/.test(r.st), 'tři cvičení a parkur týdne třídy psa: ' + JSON.stringify(r));
    await page.click('#hmPlan [data-plck="0"]'); await w(150);
    const p = await ev(() => ({ done: lsGet('agility-tyden-v1', {}).items[0].done, on: document.querySelector('#hmPlan .pl-row').classList.contains('on'), st: document.querySelector('#hmPlan .tx > span').textContent }));
    ok(p.done === true && p.on && /^1 z 4 hotovo/.test(p.st), 'ruční zaškrtnutí se uloží: ' + JSON.stringify(p));
    /* běh na cvičení v tomhle týdnu zaškrtne položku samo */
    await ev(() => { setMark('drill~pin~v0', { done: true, runs: [{ d: Date.now(), t: 20, f: 0, r: 0, tot: 0, g: 'V', sct: 30, mct: 45, len: 60, dog: 'd1', cls: 'A1' }] }); homeRender(); });
    ok(await ev(() => document.querySelector('#hmPlan [data-plck="1"]').checked), 'běh na Mlýnku zaškrtne plán sám');
    await page.click('#hmPlan [data-plgo="3"]'); await w(300);
    ok(await ev(() => view === 'plan' && S.meta.id === weekCourse('A2').id), 'položka Parkur týdne otevře parkur týdne v Plánu');
    await ev(() => { show('home'); });
  });

  await step('Dnes: parkur od skupiny, otevření, běh do žebříčku skupiny', async () => {
    await w(400);
    const r = await ev(() => ({ n: document.querySelectorAll('#hmGroupToday .hm-gc').length, when: document.querySelector('#hmGroupToday .cd-when').textContent, svg: document.querySelectorAll('#hmGroupToday .gc-m svg path').length, name: document.querySelector('#hmGroupToday .hm-gc b').textContent }));
    ok(r.n === 2 && /Agility Brno – středa · dnes/.test(r.when) && r.svg > 0 && r.name === 'Středeční parkur 8', 'parkury skupiny v Dnes: ' + JSON.stringify(r));
    await ev(() => { S.meta.dirty = false; }); await page.click('#hmGroupToday [data-gcopen="11"]'); await w(400);
    const o = await ev(() => ({ view, gcid: S.meta.gcid, gname: S.meta.gname, my: myDB().filter(c => c.gcid === 11).length, nm: S.meta.name }));
    ok(o.view === 'plan' && o.gcid === 11 && o.gname === 'Agility Brno – středa' && o.my === 1 && o.nm === 'Středeční parkur 8' && last('group_course_get').p_cid === 11, 'otevření parkuru skupiny do Moje a Plánu: ' + JSON.stringify(o));
    /* uložený běh jde do žebříčku skupiny */
    await ev(() => { show('run'); $('manT').value = '4,2'; }); await page.click('#saveRun'); await w(400); /* parkur ze 3 překážek: SČP kolem 6 s */
    ok(await ev(() => !!$('sheet').querySelector('.cele')), 'čistý běh na parkuru skupiny se oslavil');
    await page.click('#sheet .cele [data-a="x"]'); await w(200);
    const rp = last('group_run_put');
    ok(rp && rp.p_cid === 11 && rp.p_dog === 'Fany' && rp.p_size === 'M' && rp.p_t === 4.2 && rp.p_g === 'V' && rp.p_pen === 0, 'běh poslaný do žebříčku skupiny: ' + JSON.stringify(rp));
    /* podruhé otevřený parkur skupiny se nekopíruje */
    await ev(() => { show('home'); }); await w(200); await ev(() => { S.meta.dirty = false; }); await page.click('#hmGroupToday [data-gcopen="11"]'); await w(300);
    ok(await ev(() => myDB().filter(c => c.gcid === 11).length === 1 && view === 'plan'), 'parkur skupiny je v Moje jen jednou');
    await ev(() => { show('home'); }); await w(200); await page.click('#hmGroupToday [data-gcboard="11"]'); await w(400);
    const b = await ev(() => ({ n: document.querySelectorAll('#gbList .wkrow').length, mine: document.querySelectorAll('#gbList .wkrow.mine').length, dis: /DIS/.test(document.querySelector('#gbList').textContent), h: $('sheet').querySelector('h3').textContent }));
    ok(b.n === 3 && b.mine === 1 && b.dis && b.h === 'Žebříček skupiny', 'žebříček skupiny: ' + JSON.stringify(b));
    await ev(() => closeSheet());
  });

  await step('Galerie: seznam, filtry, otevření a hodnocení', async () => {
    await page.click('.nav [data-v="lib"]'); await page.click('#libTabs [data-c="gal"]'); await w(400);
    const r = await ev(() => ({ cards: document.querySelectorAll('#galCards .card').length, svg: document.querySelectorAll('#galCards .card .pick svg path').length, hidden: getComputedStyle($('libFilters')).display, mine: document.querySelectorAll('#galCards .done-tag').length, note: $('libNote').textContent }));
    ok(r.cards === 2 && r.svg > 0 && r.hidden === 'none' && r.mine === 1 && /Galerie/.test(r.note), 'galerie se seznamem a náhledy: ' + JSON.stringify(r));
    await page.click('#cards [data-gcls="A2"]'); await w(300);
    ok(last('gallery_list').p_cls === 'A2' && last('gallery_list').p_sport === 'agility', 'filtr třídy jde na server: ' + JSON.stringify(last('gallery_list')));
    await page.fill('#galQ', 'novák'); await page.press('#galQ', 'Enter'); await w(300);
    ok(last('gallery_list').p_q === 'novák', 'hledání jde na server: ' + JSON.stringify(last('gallery_list')));
    await page.click('#cards [data-gsort="popular"]'); await w(300);
    ok(last('gallery_list').p_sort === 'popular', 'řazení jde na server');
    await page.click('#galCards [data-gopen="0"]'); await w(300);
    ok(await ev(() => $('sheet').querySelector('h3').textContent === 'Mistrovství klubu A2' && !!$('sheet').querySelector('.gal-th svg') && $('sheet').querySelectorAll('[data-grate]').length === 5), 'okno parkuru z galerie s náhledem a hvězdičkami');
    await page.click('#sheet [data-grate="4"]'); await w(300);
    const g = last('gallery_rate'); ok(g && g.p_code === 'K7P2QX' && g.p_stars === 4 && await ev(() => $('sheet').querySelectorAll('[data-grate].on').length === 4), 'hodnocení: ' + JSON.stringify(g));
    await ev(() => { S.meta.dirty = false; }); await page.click('#sheet [data-a="open"]'); await w(400);
    const o = await ev(() => ({ view, nm: S.meta.name, my: myDB().filter(c => c.src === 'galerie K7P2QX').length }));
    ok(o.view === 'plan' && o.nm === 'Mistrovství klubu A2' && o.my === 1 && last('get_course').p_code === 'K7P2QX' && last('gallery_opened').p_code === 'K7P2QX', 'otevření z galerie do Moje a Plánu: ' + JSON.stringify(o));
  });

  await step('zveřejnění ze Sdílet a poslání skupině', async () => {
    await ev(() => { show('plan'); shareSheet(); }); await w(200);
    ok(await ev(() => !!$('sheet').querySelector('[data-a="pub"]') && !!$('sheet').querySelector('[data-a="grp"]')), 'Sdílet má Zveřejnit v galerii a Poslat skupině');
    await page.click('#sheet [data-a="pub"]'); await w(200);
    await page.fill('#gpJudge', 'J. Novák'); await page.selectOption('#gpCc', 'SK'); await page.click('#sheet [data-a="pub"]'); await w(400);
    const p = last('gallery_publish'), s = last('share_course');
    ok(s && s.p_data && s.p_data.route.length >= 2 && p && p.p_code === 'ABC234' && p.p_judge === 'J. Novák' && p.p_country === 'SK' && p.p_sport === 'agility' && p.p_n > 0 && p.p_len > 0 && p.p_thumb && Array.isArray(p.p_thumb.o) && p.p_thumb.r.length >= 2 && JSON.stringify(p.p_thumb).length < 4000, 'zveřejnění s kódem a náhledem: ' + JSON.stringify(p));
    ok(await ev(() => $('scrim').hidden), 'po zveřejnění se okno zavře');
    /* poslat skupině z Plánu: výběr skupiny, den, poznámka, náhled */
    await ev(() => { GRP.list = null; shareSheet(); }); await page.click('#sheet [data-a="grp"]'); await w(300);
    ok(await ev(() => $('toast').textContent.indexOf('Načítám skupiny') === 0 || !!$('sheet').querySelector('#gpGrp')), 'bez načtených skupin se nejdřív načtou');
    await w(300); await ev(() => { closeSheet(); shareSheet(); }); await page.click('#sheet [data-a="grp"]'); await w(300);
    ok(await ev(() => $('sheet').querySelectorAll('#gpGrp option').length === 2), 'okno Poslat skupině nabízí moje skupiny');
    await page.selectOption('#gpGrp', '2'); await page.fill('#gpNote', 'čtvrtek 18:00'); await page.click('#sheet [data-a="send"]'); await w(400);
    const gp = last('group_post');
    ok(gp && gp.p_id === 2 && gp.p_day === today && gp.p_note === 'čtvrtek 18:00' && gp.p_data && gp.p_thumb && gp.p_thumb.o.length > 0 && await ev(() => S.meta.gcid === 42 && S.meta.gname === 'Moje parta'), 'parkur poslaný skupině: ' + JSON.stringify(gp && { id: gp.p_id, day: gp.p_day, note: gp.p_note }));
  });

  await step('Skupiny a trenér ve Více', async () => {
    await ev(() => { moreTab = ''; show('more'); }); await page.click('#moreTabs [data-m="groups"]'); await w(400);
    const r = await ev(() => ({ t: $('moreTitle').textContent, rows: [...document.querySelectorAll('#moreBody .item.grp b')].map(b => b.textContent), meta: document.querySelector('#moreBody .item.grp span').textContent.replace(/\s+/g, ' ') }));
    ok(r.t === 'Skupiny a trenér' && r.rows.join() === 'Agility Brno – středa,Moje parta' && /člen · 12 členů · poslední parkur 9\. 10\./.test(r.meta), 'seznam skupin: ' + JSON.stringify(r));
    await page.click('#moreBody [data-gopen2="1"]'); await w(400);
    const d = await ev(() => ({ code: document.querySelector('#moreBody .grp-code .code').textContent, role: document.querySelector('#moreBody .grp-h > span').textContent.replace(/\s+/g, ' '), n: document.querySelectorAll('#moreBody .item.gc').length, del: document.querySelectorAll('#moreBody [data-gcd]').length, svg: document.querySelectorAll('#moreBody .item.gc svg path').length }));
    ok(d.code === 'XK4P2M' && /Jsi člen · 3 členové/.test(d.role) && d.n === 2 && d.del === 0 && d.svg > 0, 'skupina s kódem a parkury (člen nemaže): ' + JSON.stringify(d));
    await page.click('#moreBody [data-gtab="members"]'); await w(150);
    ok(await ev(() => document.querySelectorAll('#moreBody .item.gm').length === 3 && document.querySelectorAll('#moreBody [data-gm]').length === 0), 'členové bez tlačítek pro nezakladatele');
    await page.click('#moreBody [data-gtab="set"]'); await w(150);
    ok(await ev(() => $('gMyName').value === 'Dan' && !!document.querySelector('#moreBody [data-g="leave"]') && !document.querySelector('#moreBody [data-g="del"]')), 'nastavení člena: jméno a Odejít');
    await page.fill('#gMyName', 'Dan K.'); await page.click('#moreBody [data-g="myname"]'); await w(300);
    ok(last('group_my_name_set').p_name === 'Dan K.', 'změna jména jde na server');
    /* zakladatel: povýšení a vyhození, smazání parkuru */
    await ev(() => groupOpen(2, 'members')); await w(400);
    ok(await ev(() => document.querySelectorAll('#moreBody [data-gm][data-gr="out"]').length === 2 && !!document.querySelector('#moreBody [data-gr="member"]')), 'zakladatel vidí tlačítka u členů');
    await page.click('#moreBody [data-gm="u3"][data-gr="trainer"]'); await w(300);
    ok(JSON.stringify(last('group_member_set')) === JSON.stringify({ p_id: 2, p_user: 'u3', p_role: 'trainer' }), 'povýšení na trenéra: ' + JSON.stringify(last('group_member_set')));
    await page.click('#moreBody [data-gtab="courses"]'); await w(150);
    ok(await ev(() => document.querySelectorAll('#moreBody [data-gcd]').length === 2 && !!document.querySelector('#moreBody [data-g="post"]')), 'trenér může parkury mazat a posílat');
    await page.click('#moreBody [data-g="back"]'); await w(300);
    /* založení skupiny */
    await page.click('#moreBody [data-g="new"]'); await page.fill('#gNew', 'Testovací'); await page.click('#sheet [data-a="ok"]'); await w(400);
    ok(last('group_create').p_name === 'Testovací' && await ev(() => GRP.id === 3 && document.querySelector('#moreBody .grp-code .code').textContent === 'NEWC0D'), 'založení skupiny otevře její detail s kódem');
    await page.click('#moreBody [data-g="back"]'); await w(200);
    await page.click('#moreBody [data-g="join"]'); await page.fill('#gCode', 'xk4p2m'); await page.click('#sheet [data-a="ok"]'); await w(400);
    ok(last('group_join').p_code === 'XK4P2M' && await ev(() => GRP.id === 1 && $('scrim').hidden), 'přidání kódem (velká písmena) otevře skupinu');
  });

  await step('odkaz ?skupina=KÓD', async () => {
    await page.goto('about:blank'); await page.goto(base + '/?skupina=xk4p2m#home'); await w(2400);
    const r = await ev(() => ({ sheet: !$('scrim').hidden && /Přidat se do skupiny/.test($('sheet').textContent), code: $('sheet').querySelector('.code') && $('sheet').querySelector('.code').textContent, q: location.search }));
    ok(r.sheet && r.code === 'XK4P2M' && r.q === '', 'odkaz nabídne přidání a zmizí z adresy: ' + JSON.stringify(r));
    await page.click('#sheet [data-a="join"]'); await w(400);
    ok(last('group_join').p_code === 'XK4P2M' && await ev(() => !lsGet('agility-gjoin-v1', '') && view === 'more' && moreTab === 'groups'), 'přidání z odkazu');
  });

  await step('upozornění: nastavení, odběr na server, témata, karta na Domů', async () => {
    await fresh('#home'); await w(300);
    ok(await ev(() => !!$('hmPush') && document.querySelector('#hmPush b').textContent === 'Zapni si upozornění'), 'karta Zapni si upozornění v Dnes');
    await ev(() => { moreTab = 'set'; show('more'); }); await w(200);
    ok(await ev(() => !!$('pushSet') && !!$('pushOn') && !$('pushOn').checked && $('pushSet').querySelector('.pushtop').hidden), 'panel Upozornění v Nastavení, vypnutý');
    await page.click('#pushOn'); await w(500);
    const s = last('push_sub_set');
    ok(s && s.p_endpoint === 'https://push.example/abc' && s.p_p256dh.length === 40 && s.p_auth.length === 22 && s.p_topics.group === true && s.p_lang === 'cs' && typeof s.p_device === 'string' && s.p_device.length >= 8 && s.p_tz === 'Europe/Prague', 'odběr poslaný na server: ' + JSON.stringify(s));
    ok(await ev(() => PUSH.on && PUSH.ep === 'https://push.example/abc' && PUSH.uid === 'u2' && $('pushOn').checked && !$('pushSet').querySelector('.pushtop').hidden && !!$('pushSet').querySelector('[data-pusht]')), 'po zapnutí témata a Vyzkoušet');
    ok(last('push_comp_set') && last('push_comp_set').p_day === null, 'nejbližší závod se po zapnutí pošle (žádný = null)');
    /* 3.5: jazyk upozornění i polsky a německy; po změně jazyka se odběr pošle znovu */
    const n0 = calls.filter(c => c[0] === 'push_sub_set').length;
    await ev(() => { LANG = 'pl'; pushSync(); }); await w(400);
    const pl = last('push_sub_set');
    ok(calls.filter(c => c[0] === 'push_sub_set').length === n0 + 1 && pl.p_lang === 'pl' && await ev(() => PUSH.lang === 'pl'), 'po změně jazyka se odběr neposlal znovu polsky: ' + JSON.stringify(pl && pl.p_lang));
    await ev(() => { pushSync(); }); await w(300);
    ok(calls.filter(c => c[0] === 'push_sub_set').length === n0 + 1, 'beze změny jazyka se odběr posílá znovu');
    await ev(() => { LANG = 'cs'; pushSync(); }); await w(300);
    await page.click('#pushSet [data-pushtop="week"]'); await w(300);
    ok(last('push_sub_set').p_topics.week === false && await ev(() => PUSH.topics.week === false), 'vypnuté téma jde na server');
    await page.click('#pushOn'); await w(400);
    ok(last('push_sub_del').p_endpoint === 'https://push.example/abc' && await ev(() => !PUSH.on && !$('pushOn').checked), 'vypnutí odhlásí odběr');
    /* karta na Domů: Zapnout zapne, × zavře natrvalo */
    await ev(() => { show('home'); }); await w(200); await page.click('#hmPush [data-h="pushon"]'); await w(500);
    ok(await ev(() => PUSH.on && !$('hmPush')), 'Zapnout na kartě zapne odběr a kartu schová');
    await ev(() => { PUSH.on = false; pushSave(); homeRender(); }); await w(100); await page.click('#hmPush [data-h="pushx"]'); await w(100);
    ok(await ev(() => !$('hmPush') && PUSH.x > 0), 'zavřená karta se pamatuje');
    await ev(() => { homeRender(); }); ok(await ev(() => !$('hmPush')), 'zavřená karta se nevrací');
    /* service worker: zpráva, klepnutí, obnova odběru; mezipaměť 3.0 */
    const sw = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');
    ok(/addEventListener\('push'/.test(sw) && /notificationclick/.test(sw) && /pushsubscriptionchange/.test(sw) && /agility-trasa-3\.\d/.test(sw), 'sw.js umí push, klepnutí a obnovu odběru');
  });

  await step('kontrola 3.0: poškozené odpovědi, zavřená okna, odhlášení, galerie bez přihlášení, Hoopers', async () => {
    await fresh('#home'); await w(300);
    /* poškozený parkur z galerie skončí hláškou (ne chybou stránky) a tlačítko se odemkne */
    const gc0 = rpc.get_course; rpc.get_course = rec('get_course', () => [{ data: 'rozbité' }]);
    await ev(() => { libTab = 'gal'; show('lib'); }); await w(400); await ev(() => galOpen(1)); await w(200);
    await page.click('#sheet [data-a="open"]'); await w(400);
    const g = await ev(() => ({ toast: $('toast').textContent, btn: $('sheet').querySelector('[data-a="open"]').textContent, dis: $('sheet').querySelector('[data-a="open"]').disabled }));
    ok(g.toast === 'Načtení se nepovedlo: parkur je poškozený' && g.btn === 'Otevřít v Plánu' && !g.dis, 'poškozený parkur z galerie: hláška a odemčené tlačítko: ' + JSON.stringify(g));
    rpc.get_course = gc0;
    /* hodnocení odeslané z okna, které se hned zavřelo, nepřepíše okno dalšího parkuru */
    await ev(() => { closeSheet(); galOpen(0); $('sheet').querySelector('[data-grate="5"]').click(); closeSheet(); galOpen(1); }); await w(400);
    ok(last('gallery_rate').p_code === 'K7P2QX' && last('gallery_rate').p_stars === 5 && await ev(() => $('sheet').querySelector('h3').textContent === 'Trénink serpentiny'), 'odpověď na hodnocení nechá otevřené okno jiného parkuru');
    await ev(() => closeSheet());
    /* parkur skupiny s poškozenými daty, skupina s prázdnými záznamy, žebříček s prázdným řádkem, založení bez odpovědi */
    const cg0 = rpc.group_course_get; rpc.group_course_get = rec('group_course_get', () => ({ data: 5 }));
    await ev(() => groupCourseOpen(99, 'X')); await w(400);
    ok(await ev(() => $('toast').textContent === 'Načtení se nepovedlo: parkur je poškozený' && view === 'lib'), 'poškozený parkur skupiny skončí hláškou');
    rpc.group_course_get = cg0;
    const gd0 = rpc.group_detail; rpc.group_detail = rec('group_detail', (a) => ({ id: a.p_id, code: 'XK4P2M', name: 'Děravá', role: 'member', owner: false, members: [null, { uid: 'u2', name: 'Dan', role: 'member', me: true }], courses: [null, 'x', { id: 5, name: 'Jeden', cls: 'A1', day: today, runs: 'x' }] }));
    await ev(() => { moreTab = 'groups'; show('more'); groupOpen(1, 'courses'); }); await w(400);
    ok(await ev(() => document.querySelectorAll('#moreBody .item.gc').length === 1 && /1 člen/.test(document.querySelector('#moreBody .grp-h').textContent)), 'prázdné záznamy ve skupině se přeskočí');
    rpc.group_detail = gd0;
    const gb0 = rpc.group_board; rpc.group_board = rec('group_board', () => [null, { name: 'L', dog: 'B', size: 'M', t: 30, pen: 0, g: 'V', me: false }]);
    await ev(() => groupBoard(5, 'Jeden')); await w(400);
    ok(await ev(() => document.querySelectorAll('#gbList .wkrow').length === 1), 'prázdný záznam v žebříčku se přeskočí');
    rpc.group_board = gb0; await ev(() => closeSheet());
    const gn0 = rpc.group_create; rpc.group_create = rec('group_create', () => ({}));
    await ev(() => groupNewSheet()); await page.fill('#gNew', 'Prázdná'); await page.click('#sheet [data-a="ok"]'); await w(400);
    const n = await ev(() => ({ toast: $('toast').textContent, dis: $('sheet').querySelector('[data-a="ok"]').disabled, id: GRP.id }));
    ok(n.toast === 'Nepovedlo se: prázdná odpověď' && !n.dis && n.id === 1, 'založení bez odpovědi serveru: hláška a odemčené tlačítko: ' + JSON.stringify(n));
    rpc.group_create = gn0; await ev(() => closeSheet());
    /* pomalý žebříček parkuru 11 nepřepíše později otevřený žebříček parkuru 9 */
    slowBoard = true; await ev(() => { groupBoard(11, 'A'); closeSheet(); groupBoard(9, 'B'); }); await w(900); slowBoard = false;
    ok(await ev(() => document.querySelectorAll('#gbList .wkrow').length === 1 && $('sheet').querySelector('.hint').textContent === 'B'), 'pomalá odpověď žebříčku nepřepíše novější okno');
    await ev(() => closeSheet());
    /* odhlášení: skupiny a uložené parkury skupin zmizí; po přihlášení jiného účtu se uložené řádky neukážou */
    await ev(() => { authOut(true); }); await w(200);
    const o = await ev(() => ({ id: GRP.id, list: GRP.list, rows: GTODAY.rows.length, stored: lsGet('agility-gtoday-v1', { rows: [1] }).rows.length, body: /Skupiny jsou pro přihlášené/.test($('moreBody').textContent) }));
    ok(o.id === 0 && o.list === null && o.rows === 0 && o.stored === 0 && o.body, 'po odhlášení: ' + JSON.stringify(o));
    const s = await ev(() => { lsSet('agility-auth-v1', { at: 'tok', rt: 'ref', exp: Math.floor(Date.now() / 1000) + 7200, uid: 'u2', email: 'dan@example.com', name: 'Dan' }); AUTH = lsGet('agility-auth-v1', null);
      GTODAY = { at: Date.now(), uid: 'jiny', rows: [{ gid: 1, gname: 'Cizí', id: 77, name: 'Cizí parkur', cls: 'A2', day: localDate(), by: 'P', runs: 0, ran: false, thumb: null }] }; GT_TRY = 0; show('home');
      return { gc: document.querySelectorAll('#hmGroupToday .hm-gc').length, hidden: getComputedStyle($('hmGroupToday')).display }; });
    ok(s.gc === 0 && s.hidden === 'none', 'uložené parkury skupin jiného účtu se neukážou a prázdný obal nenechá mezeru: ' + JSON.stringify(s));
    await w(500);
    ok(await ev(() => GTODAY.uid === 'u2' && document.querySelectorAll('#hmGroupToday .hm-gc').length === 2), 'po načtení ze serveru jsou parkury skupin účtu zpátky');
    /* galerie → Moje bez přihlášení: vysvětlení místo chyby, server se nevolá */
    await ev(() => { AUTH = null; GAL.key = ''; libTab = 'gal'; show('lib'); }); await w(300);
    const n0 = calls.filter(c => c[0] === 'gallery_list').length;
    await page.click('#cards [data-gsort="mine"]'); await w(300);
    const m = await ev(() => ({ st: GAL.st, txt: $('galCards').textContent.trim() }));
    ok(m.st === 'ok' && /po přihlášení/.test(m.txt) && calls.filter(c => c[0] === 'gallery_list').length === n0, 'Moje v galerii bez přihlášení: ' + JSON.stringify(m));
    await ev(() => { AUTH = lsGet('agility-auth-v1', null); GAL.sort = 'new'; GAL.key = ''; });
    /* Hoopers: filtr třídy agility se v galerii Hoopers zruší */
    await ev(() => { GAL.cls = 'A2'; setSport('hoopers', true); libRender(); }); await w(200);
    const hg = last('gallery_list');
    ok(await ev(() => GAL.cls === '' && document.querySelector('#cards [data-gcls=""]').classList.contains('on')) && hg.p_sport === 'hoopers' && hg.p_cls === null, 'filtr A2 se v galerii Hoopers zruší: ' + JSON.stringify(hg));
    await ev(() => { setSport('agility', true); libTab = 'A2'; });
    /* chybová hláška při zapnutí upozornění má úvod (ne holé „server 500“) */
    const pk0 = rpc.push_pubkey; rpc.push_pubkey = 'bad';
    await ev(() => { PUSH.key = ''; PUSH.on = false; pushSave(); moreTab = 'set'; show('more'); }); await w(200); await page.click('#pushOn'); await w(500);
    ok(await ev(() => $('toast').textContent === 'Nepovedlo se: server pro upozornění ještě není připravený' && !$('pushOn').checked && !$('pushOn').disabled), 'chyba při zapnutí upozornění má srozumitelnou hlášku');
    rpc.push_pubkey = pk0;
  });

  await step('novinky 3.0 a angličtina', async () => {
    await ev(() => { localStorage.removeItem('agility-news-v1'); newsCheck(); }); await w(200);
    const n = await ev(() => ({ h: $('sheet').querySelector('h3').textContent, li: $('sheet').querySelectorAll('li').length, v: APPV }));
    ok(n.h === 'Novinky v Pawkuru 3.0' && n.li >= 4 && /^3\.\d$/.test(n.v), 'novinky 3.0: ' + JSON.stringify(n));
    await ev(() => closeSheet());
    const miss = await ev(() => ['Dnes', 'Plán na tento týden', 'Parkur týdne A2', 'cvičení · ještě nezkoušeno', 'cvičení · 3 běhy', '1 z 4 hotovo', 'zbývá 3 dny', 'dnes', 'posílá', '3 běhy ve skupině', 'Zaběhnout znovu',
      'Galerie', 'Nejlépe hodnocené', '31× otevřeno', 'bez hodnocení', 'Další (12)', '★ 4,6 · 9 hodnocení', 'Zveřejnit v galerii', 'Poslat skupině', 'Skupiny a trenér', 'Jsi člen', '12 členů', '4 členové', 'poslední parkur',
      'Žebříček skupiny', 'Upozornění', 'Posílat upozornění na tohle zařízení', 'Zapni si upozornění', 'Novinky v Pawkuru 3.0', 'Nepovedlo se: server 500', 'Běh je v žebříčku skupiny Moje parta', 'Jsi ve skupině Moje parta',
      'Skupinu se nepodařilo načíst (prázdná odpověď).', 'Nepovedlo se: prázdná odpověď', 'Smazat parkur', 'Zatím bez hodnocení', '★ 4,6 · 9 hodnocení', '31× otevřeno',
      ...[...new DOMParser().parseFromString(newsCheck.toString().match(/<ul class="news">.*?<\/ul>/)[0], 'text/html').querySelectorAll('li')].map(l => l.textContent)].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
    await ev(() => localStorage.setItem('agility-lang-v1', JSON.stringify('en'))); await fresh('#home');
    const e = await ev(() => ({ h: document.querySelector('#v-home .hm-tdh h3').textContent, drill: document.querySelector('#hmPlan .pl-go b').textContent, sub: document.querySelector('#hmPlan .pl-go span').textContent, tab: document.querySelector('#libTabs [data-c="gal"]').textContent, when: document.querySelector('#hmGroupToday .cd-when') && document.querySelector('#hmGroupToday .cd-when').textContent }));
    ok(e.h === 'Today' && e.drill === 'Box' && e.sub === 'drill · not tried yet' && e.tab === 'Gallery' && /today/.test(e.when || ''), 'Dnes a galerie anglicky: ' + JSON.stringify(e));
    /* okno parkuru z galerie: hodnocení a počet otevření anglicky (dva kusy textu, každý se překládá zvlášť) */
    await ev(() => { libTab = 'gal'; show('lib'); }); await w(400);
    const ec = await ev(() => document.querySelector('#galCards .card .ln').textContent.replace(/\s+/g, ' '));
    ok(ec === 'A2 · 182.4 m · 20 obstacles', 'karta galerie anglicky: ' + ec);
    await ev(() => galOpen(0)); await w(300);
    const er = await ev(() => $('sheet').querySelector('.gal-rate > span').textContent);
    ok(/^★ 4\.6 · 9 ratings · opened 31×$/.test(er), 'hodnocení v okně parkuru anglicky: ' + er);
    await ev(() => closeSheet());
    await ev(() => localStorage.setItem('agility-lang-v1', JSON.stringify('cs')));
  });

  await T.ctx.close();
  return T.errs;
};
