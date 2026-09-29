/* Hlavní postupy: postavit a uložit parkur, běh, pes, záloha a obnova, parkur z kódu s poškozenými daty, plná paměť. */
const fs = require('fs'), os = require('os'), path = require('path');
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { acceptDownloads: true }); const { page, ok, ev } = T;
  let shared = null;
  const bkPath = path.join(os.tmpdir(), 'agility-zaloha-test-' + process.pid + '.json');
  await offline(T.ctx, { get_catalog: { version: 0 }, get_course: () => shared });
  await page.goto(base + '/'); await page.waitForTimeout(400);

  try {
  T.step('nový parkur');
  await page.click('#newBtn'); await page.waitForTimeout(150);
  if (await page.isVisible('#scrim')) await T.sheet('ok');
  ok(await ev(() => S.obs.length === 0), 'plocha se nevyčistila');
  await page.click('#zOut'); await page.click('#zOut');
  const spots = [[4, 5], [10, 5], [16, 6], [22, 5], [28, 6]];
  for (const [x, y] of spots) await T.tapField(x, y);
  ok(await ev(() => S.obs.length) === 5, 'nepoložilo se 5 překážek');
  await page.click('#mRoute');
  for (const [x, y] of spots) await T.tapField(x, y);
  ok(await ev(() => S.route.length) === 5, 'trasa nemá 5 překážek');

  T.step('uložit');
  await page.click('#saveBtn'); await page.fill('#fName', 'Test <b>kurz</b>'); await T.sheet('new');
  ok(await ev(() => myDB().length === 1 && S.meta.id.indexOf('my-') === 0), 'parkur se neuložil do Moje');

  T.step('běh');
  await page.click('.nav [data-v="run"]');
  await page.fill('#manT', '12,34'); await page.click('#saveRun'); await page.waitForTimeout(150);
  ok(await ev(() => getMark(S.meta.id).runs.length === 1 && getMark(S.meta.id).runs[0].t === 12.34), 'běh se neuložil');

  T.step('pes');
  await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="dogs"]');
  await page.click('[data-dadd]'); await page.fill('#dName', 'Rex'); await T.sheet('ok');
  ok(await ev(() => DOGS.length === 1), 'pes se neuložil');
  await page.click('#moreTabs [data-m="stats"]'); await page.waitForTimeout(150);

  T.step('záloha');
  await page.click('#moreTabs [data-m="backup"]');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-bk="save"]')]);
  await dl.saveAs(bkPath);
  const bk = JSON.parse(fs.readFileSync(bkPath, 'utf8'));
  ok(bk.app === 'agility-trasa' && bk.data['agility-my-v1'] && bk.data['agility-dogs-v1'], 'záloha neobsahuje data');

  T.step('data po záloze');
  await page.click('#moreTabs [data-m="dogs"]'); await page.click('[data-dadd]'); await page.fill('#dName', 'Max'); await T.sheet('ok');
  await page.click('#moreTabs [data-m="diary"]'); await page.click('[data-dy="trenink"]'); await page.fill('#yNote', 'poznámka'); await T.sheet('ok');
  ok(await ev(() => DOGS.length === 2 && diary().length === 1), 'druhý pes nebo deník se neuložil');

  T.step('obnova zálohy');
  await page.click('#moreTabs [data-m="backup"]');
  await page.setInputFiles('#jsonFile', bkPath); await page.waitForTimeout(200);
  await Promise.all([page.waitForNavigation(), T.sheet('ok')]); await page.waitForTimeout(400);
  const st = await ev(() => ({ dogs: DOGS.map(d => d.name), my: myDB().length, diary: diary().length, runs: getMark(myDB()[0].id).runs.length }));
  ok(JSON.stringify(st) === '{"dogs":["Rex"],"my":1,"diary":0,"runs":1}', 'obnova nenahradila data přesně zálohou: ' + JSON.stringify(st));

  T.step('obnova při plné paměti');
  await ev(() => { window.__set = Storage.prototype.setItem; let n = 0; Storage.prototype.setItem = function (k, v) { if (++n === 3) { const e = new Error('full'); e.name = 'QuotaExceededError'; throw e; } return window.__set.call(this, k, v); }; });
  await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="backup"]');
  await page.setInputFiles('#jsonFile', bkPath); await page.waitForTimeout(200); await T.sheet('ok'); await page.waitForTimeout(300);
  await ev(() => { Storage.prototype.setItem = window.__set; });
  const rb = await ev(() => ({ toast: $('toast').textContent, dogs: JSON.parse(localStorage.getItem('agility-dogs-v1')).length, my: JSON.parse(localStorage.getItem('agility-my-v1')).length }));
  ok(/nepodařilo zapsat/.test(rb.toast) && rb.dogs === 1 && rb.my === 1, 'nepovedená obnova nevrátila data: ' + JSON.stringify(rb));

  T.step('plná paměť');
  await ev(() => { Storage.prototype.setItem = function () { const e = new Error('full'); e.name = 'QuotaExceededError'; throw e; }; });
  await page.click('.nav [data-v="lib"]'); await page.click('#libTabs [data-c="A1"]'); await page.click('#cards .fav >> nth=0'); await page.waitForTimeout(100);
  ok(/Paměť aplikace je plná/.test(await ev(() => $('toast').textContent)), 'chybí upozornění na plnou paměť');
  await ev(() => { Storage.prototype.setItem = window.__set; });
  await page.reload(); await page.waitForTimeout(400);

  T.step('parkur z kódu (poškozený)');
  shared = [{ code: 'ABC123', name: 'Zlý <img src=x onerror=alert(0)>', cls: 'A1<img src=x onerror=alert(1)>', author: '', data: {
    W: 40, H: 20, obs: [{ id: 1, type: 'jump', x: '"/><img src=x onerror=alert(2)>', y: 3, rot: 0 }, { id: 2, type: 'ufo', x: 5, y: 5, rot: 0 },
      { id: 3, type: 'jump', x: 10, y: 5, rot: 0 }, { id: 4, type: 'tunnel', x: 18, y: 8, rot: 90, bend: 'x' }, { id: 5, type: 'jump', x: 26, y: 5, rot: 0 }],
    route: [1, 2, 3, 4, 5, 99], sides: ['L', 'P', 'L', '<b>', 'P'], turns: ['wL', null, 'bogus', 'f', 'wR'] } }];
  await page.click('.nav [data-v="plan"]');
  await page.click('#planTools [data-t="share"]'); await page.fill('#shIn', 'abc123'); await T.sheet('get'); await page.waitForTimeout(300);
  if (await page.isVisible('#scrim')) await T.sheet('ok');
  const imp = await ev(() => { const c = myDB().filter(x => x.src === 'kód ABC123')[0]; return c && { cls: c.cls, route: c.route, sides: c.sides, turns: c.turns, n: c.obs.length, cur: S.meta.id === c.id }; });
  ok(imp && imp.cls === 'A1' && JSON.stringify(imp.route) === '[3,4,5]' && JSON.stringify(imp.sides) === '["L",null,"P"]' &&
     JSON.stringify(imp.turns) === '[null,"f","wR"]' && imp.n === 3 && imp.cur, 'data z kódu se nevyčistila: ' + JSON.stringify(imp));
  await page.click('.nav [data-v="lib"]'); await page.click('#libTabs [data-c="my"]'); await page.waitForTimeout(200);
  await page.click('.nav [data-v="run"]'); await page.waitForTimeout(150);
  T.step('po restartu');
  await page.reload(); await page.waitForTimeout(400);
  ok(await ev(() => document.querySelectorAll('#obs .ob').length) === 3, 'parkur z kódu se po restartu nevykreslil');

  T.step('poškozená data v paměti');
  await ev(() => {
    localStorage.setItem('agility-plan-v2', JSON.stringify({ W: 'x', obs: [{ id: 1, type: 'nope', x: 1, y: 1, rot: 0 }, { id: 2, type: 'jump', x: 5, y: 5 }, null, { id: 3, type: 'jump', x: 9, y: 5, rot: 0 }], route: [1, 2, 3], sides: ['L', 'P', 'L'], meta: { id: 5, name: null, cls: '<i>' } }));
    const my = JSON.parse(localStorage.getItem('agility-my-v1')); my.push({ id: 'my-bad', name: 'Bad', cls: 'A2', obs: [{ id: 1, type: 'ufo', x: 1, y: 1, rot: 0 }], route: [1, 1] }, null);
    localStorage.setItem('agility-my-v1', JSON.stringify(my));
    localStorage.setItem('agility-dogs-v1', JSON.stringify([{ id: 'd1', name: 'Bad', size: '<b>', cls: 'Z' }, 7]));
  });
  await page.reload(); await page.waitForTimeout(400);
  const cs = await ev(() => ({ route: S.route, sides: S.sides, obs: S.obs.length, cls: S.meta.cls, id: S.meta.id }));
  ok(JSON.stringify(cs) === '{"route":[2,3],"sides":["P","L"],"obs":2,"cls":"A1","id":null}', 'uložený plán se nevyčistil: ' + JSON.stringify(cs));
  await page.click('.nav [data-v="lib"]'); await page.click('#libTabs [data-c="my"]'); await page.waitForTimeout(200);
  await page.click('.nav [data-v="more"]'); await page.click('#moreTabs [data-m="dogs"]'); await page.click('#moreTabs [data-m="stats"]'); await page.waitForTimeout(150);
  await page.click('.nav [data-v="run"]'); await page.waitForTimeout(150);

  } catch (e) { T.fail(e); }
  await T.ctx.close();
  try { fs.unlinkSync(bkPath); } catch (e) {}
  return T.errs;
};
