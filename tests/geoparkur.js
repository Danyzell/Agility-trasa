/* Parkur ze souboru (3.2): GeoJSON z QGIS (EPSG:4326, MultiLineString, část čar nakreslená obráceně, bod s natočením)
   a KML z Google Earth → parkur v Moje a kolbiště s polohou propojené s parkurem. Kolbiště se pozná podle jména i mezi
   většími polygony, značky bez typu a čísla se přeskočí, Otočit o 180°, výřez z velkého kolbiště, Hoopers, chybové hlášky. */
const { phone, offline } = require('./helpers');

/* vzorový parkur v souřadnicích plánu (x doprava, y dolů), plocha 40 × 24 m */
const W = 40, H = 24;
const OBS = [
  { n: 1, type: 'jump', x: 5, y: 12, rot: 0, pt: true },
  { n: 2, type: 'jump', v: 'wall', x: 11, y: 12, rot: 0 },
  { n: 3, type: 'tunnel', x: 18, y: 12, rot: 0, len: 4, rev: true },
  { n: 4, type: 'weave', x: 28, y: 12, rot: 0 },
  { n: 5, type: 'tire', x: 35, y: 8, rot: 270 },
  { n: 6, type: 'aframe', x: 30, y: 4, rot: 180, rev: true },
  { n: 7, type: 'jump', v: 'oxer', x: 22, y: 4, rot: 180 },
  { n: 8, type: 'tunnel', x: 13, y: 6, rot: 180, len: 5, bend: 90 },
  { n: 9, type: 'dogwalk', x: 18, y: 20, rot: 0, rev: true },
  { n: 10, type: 'seesaw', x: 30, y: 19, rot: 0 },
  { n: 11, type: 'longjump', x: 36, y: 15, rot: 270 }
];
const HL = { weave: 3.3, aframe: 2.1, dogwalk: 5.4, seesaw: 1.85 };
const NAME = { jump: 'Jump', tunnel: 'Tunnel', weave: 'Weave poles', aframe: 'A-Frame', dogwalk: 'Dog Walk', seesaw: 'See-saw', tire: 'Tyre', longjump: 'Long Jump' };
const D = Math.PI / 180, R = 6371008.8, O = { lat: 52.4862, lng: -1.8904 };
function tunPt(o, s) { const a = o.rot * D, L = o.len, k = (o.bend || 0) * D / L;
  if (Math.abs(k) < 1e-9) return [o.x + Math.cos(a) * s, o.y + Math.sin(a) * s];
  return [o.x - (Math.sin(a - k * s) - Math.sin(a)) / k, o.y + (Math.cos(a - k * s) - Math.cos(a)) / k]; }
function geomOf(o) { /* čára v plánu: skok od křídla ke křídlu, tunel podél osy, ostatní od konce ke konci */
  const a = o.rot * D, u = [Math.cos(a), Math.sin(a)], n = [-u[1], u[0]];
  let P;
  if (o.type === 'tunnel') { P = []; for (let j = 0; j <= 10; j++) P.push(tunPt(o, -o.len / 2 + o.len * j / 10)); }
  else if (/^(jump|tire|longjump)$/.test(o.type)) P = [[o.x - n[0] * .75, o.y - n[1] * .75], [o.x + n[0] * .75, o.y + n[1] * .75]];
  else { const h = HL[o.type]; P = [[o.x - u[0] * h, o.y - u[1] * h], [o.x + u[0] * h, o.y + u[1] * h]]; }
  return o.rev ? P.reverse() : P;
}
function toLLf(az, w, h) { const k = Math.cos(O.lat * D), A = az * D;
  return ([x, y]) => { const dx = x - w / 2, dy = y - h / 2, e = dx * Math.sin(A) + dy * Math.cos(A), nn = dx * Math.cos(A) - dy * Math.sin(A);
    return [+(O.lng + e / (R * D * k)).toFixed(9), +(O.lat + nn / (R * D)).toFixed(9)]; }; }
const CRS84 = { type: 'name', properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' } };
function qgisFiles(az) { /* dva soubory jako z QGIS: obrys kolbiště a překážky (+ značky, které se mají přeskočit) */
  const ll = toLLf(az, W, H);
  const ring = { type: 'FeatureCollection', name: 'ring_outline', crs: CRS84, features: [
    { type: 'Feature', properties: { fid: 1, name: 'Car park' }, geometry: { type: 'MultiPolygon', coordinates: [[[[-30, -30], [80, -30], [80, 60], [-30, 60], [-30, -30]].map(ll)]] } },
    { type: 'Feature', properties: { fid: 2, name: 'Ring 2' }, geometry: { type: 'MultiPolygon', coordinates: [[[[0, 0], [W, 0], [W, H], [0, H], [0, 0]].map(ll)]] } }] };
  const feats = OBS.map((o, i) => {
    if (o.pt) { /* bod s natočením: u skoku je to směr břevna ve stupních od severu */
      const rotation = ((az + o.rot + 90) % 360 + 360) % 360;
      return { type: 'Feature', properties: { fid: i + 1, number: o.n, type: NAME[o.type], rotation }, geometry: { type: 'MultiPoint', coordinates: [ll([o.x, o.y])] } };
    }
    return { type: 'Feature', properties: { fid: i + 1, number: o.n, type: o.v === 'wall' ? 'Wall' : o.v === 'oxer' ? 'Spread' : NAME[o.type] }, geometry: { type: 'MultiLineString', coordinates: [geomOf(o).map(ll)] } };
  });
  feats.push({ type: 'Feature', properties: { fid: 20, number: null, type: null, name: 'S/F' }, geometry: { type: 'Point', coordinates: ll([3, 3]) } });
  feats.push({ type: 'Feature', properties: { fid: 21, number: null, type: 'AED' }, geometry: { type: 'Point', coordinates: ll([39, 23]) } });
  const course = { type: 'FeatureCollection', name: 'Sunday Grade 4 Agility', crs: CRS84, features: feats };
  return [{ name: 'ring_outline.geojson', mimeType: 'application/octet-stream', buffer: Buffer.from(JSON.stringify(ring)) },
    { name: 'course_obstacles.geojson', mimeType: 'application/octet-stream', buffer: Buffer.from(JSON.stringify(course)) }];
}
function kmlFile(az) { /* Google Earth: jména „1 Jump“, čáry a obrys kolbiště jako Polygon */
  const ll = toLLf(az, W, H), cs = P => P.map(p => ll(p).join(',') + ',0').join(' ');
  const pm = OBS.map(o => `<Placemark><name>${o.n} ${o.v === 'wall' ? 'Wall' : o.v === 'oxer' ? 'Spread jump' : NAME[o.type]}</name><LineString><coordinates>${cs(o.pt ? geomOf(Object.assign({}, o, { pt: false })) : geomOf(o))}</coordinates></LineString></Placemark>`).join('');
  const ring = `<Placemark><name>Ring 2</name><Polygon><outerBoundaryIs><LinearRing><coordinates>${cs([[0, 0], [W, 0], [W, H], [0, H], [0, 0]])}</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>`;
  return { name: 'Okruh.kml', mimeType: 'application/vnd.google-earth.kml+xml', buffer: Buffer.from(`<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>Nedělní trénink</name>${ring}${pm}</Document></kml>`) };
}
/* porovnání s originálem: poloha do 5 cm; natočení skoků modulo 180°, tunel, slalom a zóny buď stejně, nebo otočené o 180° (pak oblouk opačně) */
function compare(got, flip) {
  const bad = [];
  OBS.forEach((o, i) => {
    const g = got.obs[i], ex = flip ? W - o.x : o.x, ey = flip ? H - o.y : o.y, d = Math.hypot(g.x - ex, g.y - ey);
    const r0 = (o.rot + (flip ? 180 : 0)) % 360; let da = Math.abs(((g.rot - r0) % 360 + 540) % 360 - 180);
    const jl = /^(jump|tire|longjump)$/.test(o.type), turned = da > 90; if (jl) da = Math.min(da, 180 - da); else if (turned) da = 180 - da;
    const bendOk = !o.bend || Math.abs((g.bend || 0) - (turned ? -o.bend : o.bend)) <= 3;
    if (g.type !== o.type || (g.v || null) !== (o.v || null) || d > .05 || da > 1 || !bendOk) bad.push(o.n + ' ' + o.type + ': ' + JSON.stringify(g) + ' d=' + d.toFixed(3) + ' da=' + da.toFixed(1));
  });
  return bad;
}

module.exports = async function ({ browser, base }) {
  const T = await phone(browser); const { page, ok, ev } = T;
  await offline(T.ctx, { get_catalog: { version: 0 } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async () => { await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(400); await ev(() => { closeSheet(); $('toast').hidden = true; }); };
  const pick = async (files) => {
    await page.click('#newBtn'); await page.waitForSelector('#gcFile', { state: 'attached' });
    await page.setInputFiles('#gcFile', files); await page.waitForTimeout(400);
  };
  const toastTxt = () => ev(() => $('toast').hidden ? '' : $('toast').textContent);

  await step('GeoJSON z QGIS: náhled, uložení, kolbiště s polohou', async () => {
    await fresh(); await pick(qgisFiles(145));
    const pv = await ev(() => ({ open: !!document.querySelector('#sheet .gc-prev svg'), sum: $('sheet').querySelector('.gc-sum').textContent, warn: [...$('sheet').querySelectorAll('.gc-warn li')].map(l => l.textContent),
      name: $('gcName').value, cls: [...$('gcCls').options].map(o => o.value).join(), hint: [...$('sheet').querySelectorAll('p.hint')].map(p => p.textContent).join(' | ') }));
    ok(pv.open && /40 × 24 m/.test(pv.sum) && /11 překážek/.test(pv.sum) && /11 v trase/.test(pv.sum), 'náhled: ' + JSON.stringify(pv));
    ok(pv.name === 'Sunday Grade 4 Agility' && pv.cls === 'A1,A2,A3', 'název z vrstvy a třídy agility: ' + JSON.stringify(pv));
    ok(pv.warn.some(w => /Přeskočené prvky bez typu a čísla/.test(w) && /\b3$/.test(w)), 'přeskočené S/F, AED a parkoviště: ' + JSON.stringify(pv.warn));
    ok(pv.warn.length === 2 && pv.warn.some(w => /Natočení z atributu u bodů/.test(w) && /\b1$/.test(w)), 'jen přeskočené prvky a bod s natočením: ' + JSON.stringify(pv.warn));
    ok(/natočení 145°/.test(pv.hint), 'kolbiště s natočením: ' + pv.hint);
    await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(400);
    const r = await ev(() => { const g = ringFor(S.meta.id); return { id: S.meta.id, name: S.meta.name, cls: S.meta.cls, W: S.W, H: S.H, obs: S.obs, route: S.route, my: myDB().some(c => c.id === S.meta.id && /^soubor /.test(c.src)), ring: g, view: document.body.getAttribute('data-view') || (location.hash) }; });
    const bad = compare(r, false);
    ok(!bad.length, 'překážky jako v originálu: ' + bad.join(' | '));
    ok(r.W === W && r.H === H && r.route.join() === OBS.map((o, i) => i + 1).join() && r.my && r.name === 'Sunday Grade 4 Agility', 'parkur v Moje s trasou: ' + JSON.stringify({ W: r.W, H: r.H, route: r.route, my: r.my, name: r.name }));
    ok(r.obs[2].rot === 0, 'obráceně nakreslený tunel 3 se otočil podle trasy (vstup od skoku 2): ' + JSON.stringify(r.obs[2]));
    ok(r.ring && r.ring.cid === r.id && Math.abs(r.ring.az - 145) < .2 && r.ring.W === W && r.ring.H === H && Math.abs(r.ring.lat - O.lat) < 2e-6 && Math.abs(r.ring.lng - O.lng) < 3e-6 && r.ring.name === 'Ring 2',
      'kolbiště propojené s parkurem (střed, natočení, rozměr): ' + JSON.stringify(r.ring));
    ok(/Parkur ze souboru je v Moje/.test(await toastTxt()), 'hláška po uložení');
  });

  await step('Otočit o 180° a kolbiště natočené na západ', async () => {
    await fresh(); await pick(qgisFiles(325)); /* osa x na severozápad → aplikace zvolí jihovýchod (plán blíž mapě) */
    let r = await ev(() => $('sheet').querySelector('p.hint').textContent);
    ok(/natočení 145°/.test(r), 'kurz se srovná na východní půlku: ' + r);
    await page.click('#sheet [data-a="flip"]'); await page.waitForTimeout(250);
    r = await ev(() => $('sheet').querySelector('p.hint').textContent);
    ok(/natočení 325°/.test(r), 'po otočení 325°: ' + r);
    await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(400);
    const g = await ev(() => ({ W: S.W, H: S.H, obs: S.obs, az: (ringFor(S.meta.id) || {}).az }));
    const bad = compare(g, false);
    ok(!bad.length && Math.abs(g.az - 325) < .2, 'otočený plán sedí na originál: ' + bad.join(' | ') + ' az ' + g.az);
  });

  /* 3.5.5 (uživatel z UK: „dostat parkur do své aplikace“): Export → Uložit GeoJSON se skutečnými souřadnicemi a načtení zpátky beze změny,
     i s překážkou dvakrát v trase („2, 11“), tunelem do oblouku a kolbištěm natočeným na 250° (bez az by se načetlo otočené o 180°) */
  await step('Uložit jako GeoJSON a načíst zpátky', async () => {
    await fresh();
    const r = await ev(() => {
      const c = { W: 40, H: 25, obs: [
        { id: 1, type: 'jump', x: 5, y: 5, rot: 30 }, { id: 2, type: 'jump', x: 12, y: 8, rot: 100, v: 'wall' }, { id: 3, type: 'jump', x: 20, y: 6, rot: 340, v: 'oxer' },
        { id: 4, type: 'tunnel', x: 25, y: 15, rot: 45, bend: 90 }, { id: 5, type: 'weave', x: 15, y: 18, rot: 180 }, { id: 6, type: 'aframe', x: 30, y: 8, rot: 270 },
        { id: 7, type: 'dogwalk', x: 20, y: 22, rot: 0 }, { id: 8, type: 'seesaw', x: 8, y: 15, rot: 135 }, { id: 9, type: 'tire', x: 35, y: 18, rot: 60 },
        { id: 10, type: 'longjump', x: 34, y: 4, rot: 200 }, { id: 11, type: 'tunnel', x: 10, y: 21, rot: 90, len: 3 }],
        route: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 11] };
      const d = courseClean(Object.assign({ sides: [], turns: [] }, c)), rec = { id: 'my-gj1', name: 'Kent Sunday A2', cls: 'A2', author: '', W: d.W, H: d.H, obs: d.obs, route: d.route, sides: d.sides, turns: d.turns, hp: [], marks: [] };
      const L = myDB(); L.push(rec); mySave(L); loadCourse(rec, true);
      ringsPut([{ id: 'rgj', name: 'Ring 3', lat: 51.2, lng: 0.5, acc: 1, az: 250, azErr: 2, azT: 1, W: 40, H: 25, cid: rec.id, at: 1 }]);
      const gj = courseGeo(), b = gcBuild(gcFeats(JSON.stringify(gj), 'x.geojson').feats, false);
      return { gj, b, obs: S.obs, route: S.route };
    });
    const f0 = r.gj.features[0], f2 = r.gj.features.find(f => f.properties.type === 'Wall');
    ok(r.gj.type === 'FeatureCollection' && r.gj.name === 'Kent Sunday A2' && r.gj.features.length === 12 && f0.geometry.type === 'Polygon' && f0.properties.kind === 'ring' && f0.properties.az === 250 &&
      f2 && f2.properties.number === '2, 11' && f2.properties.name === '2, 11 Wall' && Math.abs(f0.geometry.coordinates[0][0][1] - 51.2) < .001 && Math.abs(f0.geometry.coordinates[0][0][0] - .5) < .001,
      'GeoJSON: kolbiště, překážky, čísla: ' + JSON.stringify(r.gj).slice(0, 400));
    const g = r.b.course, bad = [], by = id => g.obs.find(o => o.id === id), orig = id => r.obs.find(o => o.id === id);
    r.route.forEach((id, i) => {
      const o = orig(id), q = by(g.route[i]); if (!q) { bad.push(i + ': chybí'); return; }
      let da = Math.abs(((q.rot - o.rot) % 360 + 540) % 360 - 180); const turned = da > 90; if (turned && !/^(jump|tire|longjump)$/.test(o.type)) da = 180 - da;
      const bendOk = Math.abs((q.bend || 0) - (turned ? -(o.bend || 0) : (o.bend || 0))) < 1, lenOk = (q.len || null) === (o.len || null);
      if (q.type !== o.type || (q.v || null) !== (o.v || null) || Math.hypot(q.x - o.x, q.y - o.y) > .03 || da > .5 || !bendOk || !lenOk) bad.push(i + ' ' + o.type + ': ' + JSON.stringify([o, q]));
    });
    ok(!bad.length && g.W === 40 && g.H === 25 && g.route.length === 12 && g.route[1] === g.route[10] && !r.b.warn.length, 'parkur po uložení a načtení stejný: ' + bad.join(' | ') + ' ' + JSON.stringify({ W: g.W, H: g.H, route: g.route, warn: r.b.warn }));
    ok(r.b.ring && Math.abs(r.b.ring.az - 250) < .2 && r.b.ring.W === 40 && r.b.ring.H === 25 && Math.abs(r.b.ring.lat - 51.2) < 1e-6 && Math.abs(r.b.ring.lng - .5) < 1e-6 && r.b.ring.name === 'Ring 3', 'kolbiště po načtení: ' + JSON.stringify(r.b.ring));
    /* Export a Sdílet: tlačítka jen s kolbištěm s natočením, soubor .geojson */
    await ev(() => { window.__gjf = null; window.__dfOld = deliverFile; deliverFile = function (d, m, n) { window.__gjf = { d, m, n }; return Promise.resolve(); }; exportSheet(); });
    await page.waitForTimeout(200);
    const ex = await ev(() => ({ gj: !!document.querySelector('#sheet [data-a="gj"]') }));
    await ev(() => document.querySelector('#sheet [data-a="gj"]').click()); await page.waitForTimeout(150);
    const sv = await ev(() => { const x = window.__gjf; let ok2 = false; try { ok2 = JSON.parse(x.d).features.length === 12; } catch (e) { } return { n: x && x.n, m: x && x.m, ok2 }; });
    ok(ex.gj && sv.n === 'kent-sunday-a2.geojson' && sv.m === 'application/geo+json' && sv.ok2, 'Uložit GeoJSON v Exportu: ' + JSON.stringify([ex, sv]));
    const sh = await ev(() => { closeSheet(); shareSheet(); const a = !!document.querySelector('#sheet [data-a="gj"]'); closeSheet(); ringsPut([]); exportSheet(); const b = !!document.querySelector('#sheet [data-a="gj"]'); closeSheet(); deliverFile = window.__dfOld; return { a, b }; });
    ok(sh.a && !sh.b, 'GeoJSON ve Sdílet a bez kolbiště není: ' + JSON.stringify(sh));
    const miss = await ev(() => ['Uložit GeoJSON', 'Sdílet GeoJSON', 'Uložit jako GeoJSON', 'GeoJSON: obrys kolbiště a překážky se skutečnými souřadnicemi (WGS84) pro QGIS, QField nebo Google Earth. Načíst ho jde i zpátky do Pawkuru.',
      'Obrys kolbiště a překážky se skutečnými souřadnicemi (WGS84) pro QGIS, QField nebo Google Earth.', 'GeoJSON se souřadnicemi jde uložit u parkuru s polohou kolbiště (Nástroje → Kolbiště (GPS)).',
      'Parkur s polohou kolbiště jde uložit jako GeoJSON se skutečnými souřadnicemi (Export a Sdílet) pro QGIS, QField nebo Google Earth'].filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  /* Hoopers tam a zpátky: sud jako bod s natočením a krátký tunel (1 m) bez varování, prostor psovoda jako čtverec, oblouk dvakrát v trase */
  await step('Hoopers jako GeoJSON a zpátky', async () => {
    await fresh();
    const r = await ev(() => {
      const c = { W: 30, H: 20, obs: [
        { id: 1, type: 'ha', x: 15, y: 10, rot: 0 }, { id: 2, type: 'hoop', x: 5, y: 5, rot: 30 }, { id: 3, type: 'barrel', x: 10, y: 15, rot: 37 },
        { id: 4, type: 'gate', x: 22, y: 5, rot: 100 }, { id: 5, type: 'chute', x: 25, y: 15, rot: 45 }, { id: 6, type: 'hoop', x: 8, y: 10, rot: 200 }],
        route: [2, 3, 4, 5, 6, 2] };
      const d = courseClean(Object.assign({ sides: [], turns: [] }, c)), rec = { id: 'my-gjh', name: 'Hoopers Kent', cls: 'H1', author: '', W: d.W, H: d.H, obs: d.obs, route: d.route, sides: d.sides, turns: d.turns, hp: [], marks: [] };
      const L = myDB(); L.push(rec); mySave(L); loadCourse(rec, true);
      ringsPut([{ id: 'rgh', name: 'Ring H', lat: 51.2, lng: 0.5, acc: 1, az: 110, azErr: 2, azT: 1, W: 30, H: 20, cid: rec.id, at: 1 }]);
      const gj = courseGeo(), b = gcBuild(gcFeats(JSON.stringify(gj), 'x.geojson').feats, false);
      return { types: gj.features.map(f => f.geometry.type + ' ' + f.properties.type).join(), orig: S.obs, route: S.route, got: b.course, warn: b.warn, hoop: b.hoop };
    });
    const g = r.got, bad = [], by = id => g.obs.find(o => o.id === id), orig = id => r.orig.find(o => o.id === id);
    /* id po načtení podle pořadí v souboru: překážky podle prvního čísla v trase, prostor psovoda (bez čísla) na konci */
    [[2, 1], [3, 2], [4, 3], [5, 4], [6, 5], [1, 6]].forEach(([a, b]) => {
      const o = orig(a), q = by(b), da = Math.abs(((q.rot - o.rot) % 360 + 540) % 360 - 180), rq = o.type === 'ha' ? Math.min(da % 90, 90 - da % 90) : da;
      if (q.type !== o.type || Math.hypot(q.x - o.x, q.y - o.y) > .02 || rq > .2) bad.push(o.type + ': ' + JSON.stringify([o, q]));
    });
    ok(r.types === 'Polygon undefined,LineString Hoop,Point Barrel,LineString Gate,LineString Chute,LineString Hoop,Polygon Handler area', 'Hoopers v GeoJSON: ' + r.types);
    ok(!bad.length && r.hoop && g.route.join() === '1,2,3,4,5,1' && !r.warn.length, 'Hoopers po načtení stejný a bez varování: ' + bad.join(' | ') + ' ' + JSON.stringify({ route: g.route, warn: r.warn, hoop: r.hoop }));
  });

  await step('KML z Google Earth', async () => {
    await fresh(); await pick([kmlFile(80)]);
    const pv = await ev(() => ({ sum: $('sheet').querySelector('.gc-sum').textContent, name: $('gcName').value, warn: [...$('sheet').querySelectorAll('.gc-warn li')].map(l => l.textContent) }));
    ok(/11 překážek/.test(pv.sum) && /11 v trase/.test(pv.sum) && pv.name === 'Nedělní trénink' && !pv.warn.length, 'náhled KML: ' + JSON.stringify(pv));
    await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(400);
    const g = await ev(() => ({ obs: S.obs }));
    const bad = compare(g, false);
    ok(!bad.length, 'KML: překážky jako v originálu: ' + bad.join(' | '));
  });

  await step('velké kolbiště, bez obrysu, Hoopers a chyby', async () => {
    /* kolbiště 80 × 50 m, překážky jen v rohu → výřez */
    await fresh();
    const ll = toLLf(30, 80, 50);
    const big = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { name: 'Arena' }, geometry: { type: 'Polygon', coordinates: [[[0, 0], [80, 0], [80, 50], [0, 50], [0, 0]].map(ll)] } }]
      .concat([[10, 10], [16, 12], [22, 10], [28, 14]].map((p, i) => ({ type: 'Feature', properties: { nr: String(i + 1), obstacle: 'jump' }, geometry: { type: 'Point', coordinates: ll(p) } }))) };
    await pick([{ name: 'arena.geojson', mimeType: 'application/geo+json', buffer: Buffer.from(JSON.stringify(big)) }]);
    let pv = await ev(() => ({ sum: $('sheet').querySelector('.gc-sum').textContent, warn: [...$('sheet').querySelectorAll('.gc-warn li')].map(l => l.textContent) }));
    ok(/24 × 10 m/.test(pv.sum) && pv.warn.some(w => /výřez kolem překážek/.test(w)) && pv.warn.some(w => /Body bez natočení/.test(w)), 'výřez z velkého kolbiště: ' + JSON.stringify(pv));
    await ev(() => closeSheet());
    /* bez obrysu: plocha kolem překážek + 3 m */
    const noRing = { type: 'FeatureCollection', features: big.features.slice(1) };
    await pick([{ name: 'jen-prekazky.geojson', mimeType: 'application/geo+json', buffer: Buffer.from(JSON.stringify(noRing)) }]);
    pv = await ev(() => ({ sum: $('sheet').querySelector('.gc-sum').textContent, warn: [...$('sheet').querySelectorAll('.gc-warn li')].map(l => l.textContent), hint: !!$('sheet').querySelector('p.hint') }));
    ok(pv.warn.some(w => /Obrys kolbiště v souboru není/.test(w)) && /4 překážky/.test(pv.sum) && !pv.hint, 'bez obrysu kolbiště: ' + JSON.stringify(pv));
    await ev(() => closeSheet());
    /* Hoopers: oblouky, sud, plůtek a prostor psovoda → třídy H, režim Hoopers */
    const llh = toLLf(90, 30, 20), hp = { type: 'FeatureCollection', features: [
      { type: 'Feature', properties: { name: 'Ring' }, geometry: { type: 'Polygon', coordinates: [[[0, 0], [30, 0], [30, 20], [0, 20], [0, 0]].map(llh)] } },
      { type: 'Feature', properties: { type: 'handler area' }, geometry: { type: 'Polygon', coordinates: [[[14, 9], [16, 9], [16, 11], [14, 11], [14, 9]].map(llh)] } }]
      .concat([['hoop', 5, 5], ['hoop', 10, 4], ['barrel', 20, 5], ['gate', 25, 10], ['hoop', 20, 15]].map(([t, x, y], i) => ({ type: 'Feature', properties: { number: i + 1, type: t }, geometry: { type: 'Point', coordinates: llh([x, y]) } }))) };
    await pick([{ name: 'hoopers.geojson', mimeType: 'application/geo+json', buffer: Buffer.from(JSON.stringify(hp)) }]);
    pv = await ev(() => ({ cls: [...$('gcCls').options].map(o => o.value).join(), sum: $('sheet').querySelector('.gc-sum').textContent }));
    ok(pv.cls === 'H1,H2,H3' && /6 překážek/.test(pv.sum) && /5 v trase/.test(pv.sum), 'Hoopers z typů: ' + JSON.stringify(pv));
    await page.click('#sheet [data-a="ok"]'); await page.waitForTimeout(400);
    const hq = await ev(() => ({ sport: isHoopS(), cls: S.meta.cls, types: S.obs.map(o => o.type).join() }));
    ok(hq.sport && /^H/.test(hq.cls) && hq.types === 'ha,hoop,hoop,barrel,gate,hoop', 'Hoopers parkur: ' + JSON.stringify(hq));
    await ev(() => setSport('agility', true));
    /* chyby: souřadnice v metrech (EPSG:27700), crs jiný než 4326, žádné překážky, poškozený soubor */
    const proj = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { type: 'jump', number: 1 }, geometry: { type: 'Point', coordinates: [407000, 287000] } }] };
    await fresh(); await pick([{ name: 'bng.geojson', mimeType: 'application/geo+json', buffer: Buffer.from(JSON.stringify(proj)) }]);
    ok(/EPSG:4326/.test(await toastTxt()) && await ev(() => $('scrim').hidden), 'souřadnice v metrech: ' + await toastTxt());
    const crs = Object.assign({ crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:EPSG::27700' } } }, noRing);
    await fresh(); await pick([{ name: 'crs.geojson', mimeType: 'application/geo+json', buffer: Buffer.from(JSON.stringify(crs)) }]);
    ok(/EPSG:4326/.test(await toastTxt()), 'crs 27700: ' + await toastTxt());
    await fresh(); await pick([{ name: 'prazdny.geojson', mimeType: 'application/geo+json', buffer: Buffer.from('{"type":"FeatureCollection","features":[]}') }]);
    ok(/V souboru nejsou žádné překážky/.test(await toastTxt()), 'prázdný soubor: ' + await toastTxt());
    await fresh(); await pick([{ name: 'rozbity.geojson', mimeType: 'application/geo+json', buffer: Buffer.from('{"type":"Feat') }]);
    ok(/nepodařilo přečíst/.test(await toastTxt()), 'poškozený soubor: ' + await toastTxt());
  });

  await step('anglicky', async () => {
    await page.goto('about:blank'); await page.goto(base + '/?lang=en#plan'); await page.waitForTimeout(500); await ev(() => { closeSheet(); $('toast').hidden = true; });
    await pick(qgisFiles(145));
    const t = await ev(() => $('sheet').innerText);
    ok(/Course from a file/.test(t) && /11 obstacles/.test(t) && /11 in the route/.test(t) && /Skipped features without a type or number/.test(t) && /bearing 145°/.test(t) && /Create course/.test(t), 'anglický náhled: ' + t.slice(0, 400));
    await ev(() => { closeSheet(); localStorage.setItem('agility-lang-v1', JSON.stringify('cs')); });
  });

  await T.ctx.close();
  return T.errs;
};
module.exports.qgisFiles = qgisFiles; /* vzorové soubory i pro snímky */
