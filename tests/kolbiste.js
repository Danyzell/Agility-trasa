/* Kolbiště podle GPS (issue #37): výpočty na kouli, plán závodiště z GeoJSON a KML, uložení polohy s průměrováním,
   natočení ze dvou rohů, navigace a použití natočení ve Stavbě v terénu a v AR na place. Poloha se podstrkuje přes Playwright. */
const { phone, offline } = require('./helpers');

module.exports = async function ({ browser, base }) {
  const T = await phone(browser, { geolocation: { latitude: 49.2, longitude: 16.6, accuracy: 4 }, permissions: ['geolocation'] });
  const { page, ok, ev } = T;
  /* sdílení kódem (3.4): server je podstrčený, volání se zapisují do calls; kódy jdou po sobě */
  const calls = [], codes = ['RNG111', 'FRE222', 'GRD333', 'NOR444', 'XYZ555']; let shared = null;
  const last = (n) => { for (let i = calls.length - 1; i >= 0; i--) if (calls[i][0] === n) return calls[i][1]; return null; };
  /* odpověď podstrčeného serveru dorazí do stránky až po zápisu do calls: čekat na výsledek, ne pevnou dobu (na CI 300 ms nestačilo) */
  const until = async (f, ms = 5000) => { for (const t0 = Date.now(); !(await f()) && Date.now() - t0 < ms;) await new Promise(r => setTimeout(r, 50)); };
  /* zveřejnění je hotové, až stránka zavře okno a ukáže hlášku s kódem (dřív by pozdní odpověď zavřela další otevřené okno) */
  const pubDone = (cd) => until(() => ev(c => ($('toast').textContent || '').indexOf('Kód ' + c) >= 0, cd));
  await offline(T.ctx, { get_catalog: { version: 0 },
    share_course: (a) => { calls.push(['share_course', a]); return codes[calls.filter(c => c[0] === 'share_course').length - 1] || 'ZZZ999'; },
    gallery_publish: (a) => { calls.push(['gallery_publish', a]); return true; },
    get_course: (a) => { calls.push(['get_course', a]); return typeof shared === 'function' ? shared(a) : shared; } });
  const step = async (label, fn) => { T.step(label); try { await fn(); } catch (e) { T.errs.push(`[${label}] krok selhal: ${String(e && e.message || e).split('\n')[0]}`); } };
  const fresh = async () => { await page.goto('about:blank'); await page.goto(base + '/#plan'); await page.waitForTimeout(300); await ev(() => { $('toast').hidden = true; }); };
  /* poloha, která se během měření trochu chvěje kolem bodu (jako skutečné GPS) */
  let jit = 0;
  const wobble = (lat, lng) => setInterval(() => { jit++; T.ctx.setGeolocation({ latitude: lat + ((jit % 5) - 2) * 1e-5, longitude: lng + ((jit % 3) - 1) * 1e-5, accuracy: 3 + jit % 3 }).catch(() => {}); }, 250);
  const measure = async (lat, lng) => {
    await T.ctx.setGeolocation({ latitude: lat, longitude: lng, accuracy: 3 });
    const iv = wobble(lat, lng);
    try { await page.waitForFunction(() => $('rgStop') && !$('rgStop').disabled, null, { timeout: 8000 }); await page.click('#rgStop'); await page.waitForTimeout(250); }
    finally { clearInterval(iv); }
  };

  await step('výpočty na kouli', async () => {
    await fresh();
    const r = await ev(() => {
      const a = { lat: 50, lng: 14 }, b = geoMove(a, 90, 100), c = geoMove(a, 0, 1000);
      return { d: geoDist(a, b), brg: geoBrg(a, b), dN: geoDist(a, c), brgN: geoBrg(a, c), back: geoBrg(b, a),
        avg: geoAvg([{ lat: 50, lng: 14, acc: 2 }, { lat: 50.00001, lng: 14, acc: 20 }]), none: geoAvg([]),
        avgOff: geoDist(geoAvg([{ lat: 50, lng: 14, acc: 2 }, { lat: 50.00001, lng: 14, acc: 20 }]), { lat: 50, lng: 14 }),
        card: [cardTxt(0), cardTxt(44), cardTxt(90), cardTxt(359)] };
    });
    ok(Math.abs(r.d - 100) < .01 && Math.abs(r.brg - 90) < .01, 'bod 100 m na východ: ' + JSON.stringify(r));
    ok(Math.abs(r.dN - 1000) < .05 && r.brgN < .01, 'bod 1 km na sever: ' + JSON.stringify(r));
    ok(Math.abs(r.back - 270) < .01, 'kurz zpátky na západ: ' + r.back);
    ok(r.avg && r.avgOff < .1 && r.avg.acc >= 1 && r.avg.n === 2, 'vážený průměr dá přednost přesnějšímu měření: ' + JSON.stringify(r.avg));
    ok(r.none === null, 'průměr bez měření');
    ok(r.card.join() === 'sever,severovýchod,východ,sever', 'světové strany: ' + r.card.join());
  });

  await step('plán závodiště GeoJSON a KML', async () => {
    const r = await ev(() => {
      /* obdélník 40 × 20 m, dlouhá strana na východ (kurz 90°) */
      const A = { lat: 49.2, lng: 16.6 }, B = geoMove(A, 90, 40), C = geoMove(B, 180, 20), D = geoMove(A, 180, 20);
      const poly = [A, B, C, D, A].map(p => [p.lng, p.lat]);
      const gj = JSON.stringify({ type: 'FeatureCollection', name: 'Závody Brno', features: [
        { type: 'Feature', properties: { name: 'Kolbiště 1' }, geometry: { type: 'Polygon', coordinates: [poly] } },
        { type: 'Feature', properties: { number: 2, width: 30, height: '15', azimuth: '45,5' }, geometry: { type: 'Point', coordinates: [16.61, 49.21] } },
        { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: [[A.lng, A.lat], [B.lng, B.lat]] } },
        { type: 'Feature', properties: { name: 'nic' }, geometry: null }] });
      const kml = '<?xml version="1.0"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>Cvičiště</name>' +
        '<Placemark><name>Ring A</name><Polygon><outerBoundaryIs><LinearRing><coordinates>' + poly.map(p => p[0] + ',' + p[1] + ',0').join(' ') + '</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>' +
        '<Placemark><name>Ring B</name><ExtendedData><Data name="width"><value>40</value></Data><Data name="azimuth"><value>120</value></Data></ExtendedData><Point><coordinates>16.62,49.22</coordinates></Point></Placemark></Document></kml>';
      const out = { gj: ringParse(gj, 'plan.geojson'), kml: ringParse(kml, 'x.kml') };
      try { ringParse('nesmysl', 'a.txt'); out.bad = 'prošlo'; } catch (e) { out.bad = 'chyba'; }
      out.center = geoMove(geoMove(A, 90, 20), 180, 10);
      return out;
    });
    const [g1, g2, g3] = r.gj;
    ok(r.gj.length === 3, 'GeoJSON: 3 kolbiště (bez prázdné geometrie): ' + r.gj.length);
    ok(g1 && g1.name === 'Kolbiště 1' && g1.W === 40 && g1.H === 20 && (Math.abs(g1.az - 90) < .5 || Math.abs(g1.az - 270) < .5), 'obdélník: ' + JSON.stringify(g1));
    ok(g1 && Math.abs(g1.lat - r.center.lat) < 1e-6 && Math.abs(g1.lng - r.center.lng) < 1e-6, 'střed obdélníku');
    ok(g2 && g2.name === 'Kolbiště 2' && g2.W === 30 && g2.H === 15 && g2.az === 45.5, 'bod se šířkou, délkou a natočením: ' + JSON.stringify(g2));
    ok(g3 && g3.W === 40 && Math.abs(g3.az - 90) < .5, 'úsečka podél dlouhé strany: ' + JSON.stringify(g3));
    ok(r.gj.every(g => g.venue === 'Závody Brno'), 'název závodiště z GeoJSON');
    ok(r.kml.length === 2 && r.kml[0].name === 'Ring A' && r.kml[0].W === 40 && r.kml[1].W === 40 && r.kml[1].az === 120 && r.kml[0].venue === 'Cvičiště', 'KML: ' + JSON.stringify(r.kml));
    ok(r.bad === 'chyba', 'neznámý formát má skončit chybou');
  });

  await step('import souboru do seznamu', async () => {
    await fresh(); await ev(() => localStorage.removeItem('agility-rings-v1'));
    await T.tool('ring'); await page.waitForSelector('#ovRing');
    ok(/Zatím žádné kolbiště/.test(await page.textContent('#rgBody')), 'prázdný seznam');
    const gj = JSON.stringify({ type: 'FeatureCollection', features: [
      { type: 'Feature', properties: { name: 'K1', width: 40, height: 20, azimuth: 10 }, geometry: { type: 'Point', coordinates: [16.6, 49.2] } },
      { type: 'Feature', properties: { name: 'K2' }, geometry: { type: 'Point', coordinates: [16.601, 49.2] } }] });
    await page.setInputFiles('#rgFile', { name: 'Brno.geojson', mimeType: 'application/geo+json', buffer: Buffer.from(gj) });
    await page.waitForSelector('#rgBody input[data-i]');
    ok(/Našlo se 2 kolbišť/.test(await page.textContent('#rgBody')), 'náhled importu');
    await page.uncheck('#rgBody input[data-i="1"]'); await page.click('[data-rg="imp"]'); await page.waitForTimeout(200);
    const L = await ev(() => ringsGet());
    ok(L.length === 1 && L[0].name === 'K1' && L[0].venue === 'Brno' && L[0].az === 10 && L[0].W === 40, 'uložené kolbiště z importu: ' + JSON.stringify(L));
    ok(await page.locator('.rg-row').count() === 1, 'kolbiště v seznamu');
    /* přejmenování a smazání přes vlastní okna (žádné prompt/confirm) */
    await page.click('[data-rg="ren"]'); await page.fill('#rgRen', 'Hlavní kolbiště'); await T.sheet('ok');
    ok((await ev(() => ringsGet()[0].name)) === 'Hlavní kolbiště', 'přejmenování');
    await page.click('[data-rg="del"]'); await T.sheet('ok');
    ok((await ev(() => ringsGet().length)) === 0 && /Zatím žádné/.test(await page.textContent('#rgBody')), 'smazání');
    await page.setInputFiles('#rgFile', { name: 'x.kmz', mimeType: 'application/vnd.google-earth.kmz', buffer: Buffer.from('PK') });
    await page.waitForTimeout(150); ok(/KMZ/.test(await page.textContent('#toast')), 'KMZ: rada rozbalit');
  });

  await step('uložení polohy, natočení ze dvou rohů a navigace', async () => {
    await fresh(); await ev(() => localStorage.removeItem('agility-rings-v1'));
    const cid = await ev(() => S.meta.id);
    await T.tool('ring'); await page.click('[data-rg="new"]');
    await measure(49.2, 16.6);
    ok(await page.isVisible('#rgName') && /přesnost ± \d+ m/.test(await page.textContent('#rgBody')), 'po měření formulář s přesností');
    await page.fill('#rgName', 'Kolbiště U lesa'); await page.click('#rgSave'); await page.waitForTimeout(200);
    let g = (await ev(() => ringsGet()))[0];
    ok(g && g.name === 'Kolbiště U lesa' && Math.abs(g.lat - 49.2) < 1e-4 && Math.abs(g.lng - 16.6) < 1e-4 && g.acc >= .5 && g.acc < 8 && g.cid === cid, 'uložené kolbiště: ' + JSON.stringify(g));
    /* po uložení nabídne natočení; roh vlevo nahoře, pak 40 m na kurz 60° */
    ok(await page.isVisible('[data-rgz="gps"]'), 'po uložení chybí nabídka natočení');
    await page.click('[data-rgz="gps"]');
    await measure(49.2, 16.6);
    await page.click('#rgNext');
    const B = await ev(() => geoMove({ lat: 49.2, lng: 16.6 }, 60, 40));
    await measure(B.lat, B.lng);
    const txt = await page.textContent('#rgBody');
    ok(/Dlouhá strana vede na \d+°/.test(txt) && /Vzdálenost rohů podle GPS/.test(txt), 'výsledek natočení: ' + txt.slice(0, 160));
    await page.click('#rgOk'); await page.waitForTimeout(200);
    g = (await ev(() => ringsGet()))[0];
    ok(g.az != null && Math.abs(g.az - 60) < 6, 'natočení ze dvou rohů ~60°: ' + g.az);
    ok(await page.locator('.rg-row.cur').count() === 1 && /natočení \d+°/.test(await page.textContent('.rg-row')), 'seznam ukazuje natočení u parkuru na plánu');
    /* navigace: 500 m jižně od kolbiště → šipka na sever */
    const P = await ev(g => geoMove(g, 180, 500), g);
    await T.ctx.setGeolocation({ latitude: P.lat, longitude: P.lng, accuracy: 5 });
    await page.click('[data-rg="nav"]'); await page.waitForTimeout(600);
    const d = await page.textContent('#rgDist'), dir = await page.textContent('#rgDir');
    ok(/^(49\d|50\d) m$/.test(d.trim()) && /sever \((359|0|1)°\)/.test(dir), 'navigace: ' + d + ' / ' + dir);
    ok(/google\.com\/maps\/dir\/\?api=1&destination=/.test(await page.getAttribute('#rgBody a[href*="google"]', 'href')), 'odkaz do Google Map');
    await T.ctx.setGeolocation({ latitude: g.lat, longitude: g.lng, accuracy: 4 });
    await page.waitForTimeout(400);
    ok(/Jsi na kolbišti/.test(await page.textContent('#rgDist')), 'na místě: Jsi na kolbišti');
    await page.click('#rgBody [data-rg="list"]'); await page.click('#rgClose');
    ok(!(await page.isVisible('#ovRing')), 'Kolbiště nejde zavřít');
  });

  await step('natočení ve Stavbě v terénu a v AR', async () => {
    /* Stavba v terénu: zaškrtnuté natočení z kolbiště nahradí otočení podle oka */
    await T.tool('fld'); await page.waitForSelector('#ovFld');
    ok(await page.isChecked('#fdAz') && /Natočení z kolbiště/.test(await page.textContent('#fdBody')), 've Stavbě v terénu chybí natočení z kolbiště');
    /* natočení kolbiště je zeměpisné, kompas magnetický: výchozí kurz = natočení − deklinace (v Brně asi 5,5°) */
    const r = await ev(() => { FLD.h = 100; $('fdCal').click(); const g = ringFor(S.meta.id); return { h0: FLD.h0, az: g.az, mag: ringAzMag(g), dc: ringDecl(g), cal: FLD.cal, saved: SET.fldH0 }; });
    ok(r.cal && Math.abs(r.h0 - r.mag) < 1e-6 && Math.abs(((r.az - r.h0 + 360) % 360) - r.dc) < 1e-6 && r.dc > 4.5 && r.dc < 7 && r.saved !== r.h0, 'výchozí natočení ze zaměření: ' + JSON.stringify(r));
    await ev(() => fldClose());
    /* bez natočení se kurz bere z kompasu jako dřív */
    const r2 = await ev(() => { fldOpen(); $('fdAz').checked = false; FLD.h = 123; $('fdCal').click(); const o = { h0: FLD.h0 }; fldClose(); return o; });
    ok(r2.h0 === 123, 'bez natočení z kolbiště má platit kompas: ' + JSON.stringify(r2));
    /* AR: kurz kamery z kompasu (W3C compassHeading) */
    const c = await ev(() => [camHeading({ absolute: true, alpha: 0, beta: 90, gamma: 0 }), camHeading({ absolute: true, alpha: 90, beta: 90, gamma: 0 }), camHeading({ absolute: false, alpha: 10, beta: 90, gamma: 0 }), camHeading({ webkitCompassHeading: 42 })]);
    ok(Math.abs(c[0]) < .5 || Math.abs(c[0] - 360) < .5, 'kamera na sever: ' + c[0]);
    ok(Math.abs(c[1] - 270) < .5 && c[2] === null && c[3] === 42, 'kurz kamery: ' + JSON.stringify(c));
  });

  await step('deklinace kompasu (WMM2025)', async () => {
    await fresh();
    /* testovací hodnoty NOAA k WMM2025: rok, výška (km), šířka, délka, deklinace */
    const NOAA = [[2025, 28, 89, -121, -99.77], [2025, 65, 43, 93, 0.50], [2025.5, 69, 38, -144, 12.93], [2026, 46, -24, -122, 14.01], [2026.5, 12, -79, 115, -137.58], [2027.5, 0, -13, -59, -17.49], [2028.5, 11, 34, 0, 1.57], [2029.5, 77, -18, 138, 4.45]];
    const r = await ev(N => N.map(v => +(magDecl(v[2], v[3], v[0], v[1]) - v[4]).toFixed(3)), NOAA);
    ok(r.every(d => Math.abs(d) < .01), 'deklinace nesedí na NOAA: ' + JSON.stringify(r));
    const w = await ev(() => [magDecl(50.08, 14.42, 2026.8), magDecl(40.7, -74, 2026.8), magDecl(47.6, -122.3, 2026.8), magDecl(NaN, 1, 2026)]);
    ok(w[0] > 4.5 && w[0] < 6 && w[1] < -11 && w[1] > -14 && w[2] > 14 && w[2] < 16 && w[3] === 0, 'Praha, New York, Seattle: ' + JSON.stringify(w));
    /* staré kolbiště změřené kompasem (magnetické, ± 15°, bez azT) se při čtení jednou převede na zeměpisné; z GPS zůstane */
    const m = await ev(() => {
      localStorage.setItem(RINGK, JSON.stringify([{ id: 'r1', name: 'K', lat: 50.08, lng: 14.42, acc: 3, az: 100, azErr: 15, W: 40, H: 20, cid: null, at: 1 }, { id: 'r2', name: 'G', lat: 50.08, lng: 14.42, acc: 3, az: 100, azErr: 3, W: 40, H: 20, cid: null, at: 1 }]));
      const a = ringsGet(), b = ringsGet(), st = JSON.parse(localStorage.getItem(RINGK));
      return { d: ringDecl(a[0]), a0: a[0].az, t: a[0].azT, b0: b[0].az, s0: st[0].az, g: a[1].az, gt: a[1].azT, mag: ringAzMag(a[0]) };
    });
    ok(Math.abs(m.a0 - (100 + m.d)) < .06 && m.t === 1 && m.b0 === m.a0 && m.s0 === m.a0 && m.g === 100 && !m.gt && Math.abs(m.mag - 100) < .06, 'převod starého natočení z kompasu: ' + JSON.stringify(m));
    /* měření kompasem: na obrazovce i v uložení zeměpisné natočení (kompas + deklinace) */
    await ev(() => ringsPut([{ id: 'r3', name: 'C', lat: 50.08, lng: 14.42, acc: 3, az: null, W: 40, H: 20, cid: null, at: 1 }]));
    await T.tool('ring'); await page.waitForSelector('#ovRing');
    await ev(() => ringAz(ringById('r3'))); await page.click('[data-rgz="cmp"]');
    const ori = await ev(() => { const n = 'ondeviceorientationabsolute' in window ? 'deviceorientationabsolute' : 'deviceorientation'; window.dispatchEvent(new DeviceOrientationEvent(n, { alpha: 260, beta: 0, gamma: 0, absolute: true })); return { hd: $('rgHd').textContent, h: RG.h, d: ringDecl(ringById('r3')) }; });
    ok(ori.h === 100 && ori.hd.indexOf(Math.round(100 + ori.d) + '°') === 0, 'kompas ukazuje zeměpisné natočení: ' + JSON.stringify(ori));
    await page.click('#rgOk'); await page.waitForTimeout(150);
    const g3 = await ev(() => ringById('r3'));
    ok(Math.abs(g3.az - (100 + ori.d)) < .06 && g3.azErr === 15 && g3.azT === 1, 'uložené natočení z kompasu: ' + JSON.stringify(g3));
    /* navigace: směr z GPS je zeměpisný, kompas magnetický; šipka = směr − kompas − deklinace */
    await T.ctx.setGeolocation({ latitude: 50.07, longitude: 14.42, accuracy: 5 });
    await ev(() => ringNav(ringById('r3'))); await page.waitForTimeout(500);
    const nav = await ev(() => { RG.h = 10; const n = 'ondeviceorientationabsolute' in window ? 'deviceorientationabsolute' : 'deviceorientation'; window.dispatchEvent(new DeviceOrientationEvent(n, { alpha: 350, beta: 0, gamma: 0, absolute: true })); return { tr: $('rgRot').getAttribute('transform'), d: ringDecl(ringById('r3')) }; });
    const rot = parseFloat(String(nav.tr).replace(/^rotate\(/, ''));
    ok(Math.abs(rot - (0 - 10 - nav.d)) < .05 || Math.abs(rot - (360 - 10 - nav.d)) < .05, 'šipka navigace s deklinací: ' + JSON.stringify(nav));
    await ev(() => { ringStop(); $('rgClose').click(); });
  });

  /* 3.4: kolbiště jde s parkurem v kódu (zaškrtávátko, výchozí zapnuté), jen střed, natočení, rozměr a názvy; galerie dostane vždy kód bez kolbiště */
  await step('sdílení kódem i s polohou kolbiště', async () => {
    await fresh();
    await ev(() => { closeSheet(); loadCourse(listFor('A2')[0], true); $('toast').hidden = true;
      lsSet('agility-rings-v1', [{ id: 'rT', name: 'Ring 1', venue: 'Kent', lat: 51.2, lng: 0.52, acc: 3.2, az: 123.4, azErr: 2, W: 40, H: 20, cid: S.meta.id, cname: S.meta.name, at: 1 }]);
      AUTH = { at: 'tok', rt: 'ref', exp: Math.floor(Date.now() / 1000) + 7200, uid: 'u2', email: 'a@example.com', name: 'A' }; shareSheet(); });
    await page.waitForTimeout(150);
    ok(await page.isVisible('#shRing') && await page.isChecked('#shRing'), 'u parkuru s kolbištěm má být zaškrtnutá poloha kolbiště');
    await page.click('#sheet [data-a="mk"]'); await until(() => ev(() => !!$('shOut').getAttribute('data-code')));
    let s = last('share_course');
    ok(s && JSON.stringify(s.p_data.ring) === JSON.stringify({ lat: 51.2, lng: 0.52, W: 40, H: 20, name: 'Ring 1', az: 123.4, venue: 'Kent' }) && s.p_data.route.length >= 2, 'kolbiště v kódu jen se středem, rozměrem, natočením a názvy: ' + JSON.stringify(s && s.p_data.ring));
    ok(await page.isDisabled('#shRing') && await ev(() => $('shOut').getAttribute('data-code') === 'RNG111'), 'zaškrtávátko patří k vytvořenému kódu');
    /* Zveřejnit v galerii: kód s kolbištěm se nepoužije, vznikne nový bez kolbiště */
    await page.click('#sheet [data-a="pub"]'); await page.waitForTimeout(150);
    await page.click('#sheet [data-a="pub"]'); await pubDone('FRE222');
    const sc = calls.filter(c => c[0] === 'share_course'), gp = calls.filter(c => c[0] === 'gallery_publish');
    ok(sc.length === 2 && !('ring' in sc[1][1].p_data) && gp.length === 1 && gp[0][1].p_code === 'FRE222', 'galerie dostala kód bez kolbiště: ' + JSON.stringify({ n: sc.length, ring: sc[1] && 'ring' in sc[1][1].p_data, pub: gp.map(c => c[1].p_code) }));
    ok(await ev(() => !('ring' in shareData())), 'data pro galerii a skupinu (shareData) nesmí mít kolbiště');
    /* pojistka: i kdyby se galerii předal kód s kolbištěm, zveřejní se nový kód bez kolbiště */
    await ev(() => { closeSheet(); galPubSheet('RNG111'); }); await page.waitForTimeout(150); await page.click('#sheet [data-a="pub"]'); await pubDone('GRD333');
    ok(calls.filter(c => c[0] === 'share_course').length === 3 && !('ring' in last('share_course').p_data) && last('gallery_publish').p_code === 'GRD333', 'kód s kolbištěm se nesmí zveřejnit: ' + JSON.stringify(last('gallery_publish')));
    /* bez zaškrtnutí kód bez kolbiště; ten se pak v galerii použije */
    await ev(() => { closeSheet(); shareSheet(); }); await page.waitForTimeout(150);
    await page.uncheck('#shRing'); await page.click('#sheet [data-a="mk"]'); await until(() => ev(() => !!$('shOut').getAttribute('data-code')));
    s = last('share_course');
    ok(s && !('ring' in s.p_data) && await ev(() => $('shOut').getAttribute('data-ring') === ''), 'bez zaškrtnutí je kód bez kolbiště: ' + JSON.stringify(s && Object.keys(s.p_data)));
    await page.click('#sheet [data-a="pub"]'); await page.waitForTimeout(150); await page.click('#sheet [data-a="pub"]'); await pubDone('NOR444');
    ok(calls.filter(c => c[0] === 'share_course').length === 4 && last('gallery_publish').p_code === 'NOR444', 'kód bez kolbiště se do galerie použije bez nového kódu');
    /* parkur bez kolbiště: zaškrtávátko vůbec není */
    await ev(() => { closeSheet(); loadCourse(listFor('A2')[1], true); shareSheet(); }); await page.waitForTimeout(150);
    ok(!(await page.isVisible('#shRing')), 'parkur bez kolbiště nemá mít zaškrtávátko');
    await ev(() => { closeSheet(); AUTH = null; });
  });

  await step('kód s kolbištěm u příjemce: kontrola, k novému parkuru, bez zdvojení', async () => {
    await fresh(); await ev(() => { closeSheet(); localStorage.removeItem('agility-rings-v1'); });
    const course = () => ({ W: 40, H: 20, obs: [{ id: 1, type: 'jump', x: 5, y: 10, rot: 0 }, { id: 2, type: 'tunnel', x: 15, y: 10, rot: 0 }, { id: 3, type: 'jump', x: 25, y: 10, rot: 0 }], route: [1, 2, 3], sides: [], turns: [], hp: [], marks: [] });
    const evil = { lat: 51.2, lng: 0.52, az: 400.4, W: 99, H: 3, name: '  Ring\u0007 1\n' + 'x'.repeat(80), venue: 'Kent\u0000 Show\u202eground', acc: 0.5, at: 5, id: 'evil', cid: 'my-evil', cname: '<b>', cids: ['A2-x'] };
    shared = (a) => [{ code: a.p_code, name: a.p_code === 'JMP222' ? 'Kent Jumping' : 'Kent A2', cls: 'A2', author: 'J', data: Object.assign(course(), a.p_code === 'BAD333' ? { ring: { lat: 95, lng: 'x' } } : { ring: evil }) }];
    const imp = async (code) => { await ev(() => { closeSheet(); shareSheet(); }); await page.fill('#shIn', code); await page.click('#sheet [data-a="get"]'); await page.waitForTimeout(400); };
    await imp('RNG111');
    let r = await ev(() => { const L = ringsGet(); return { n: L.length, g: L[0], id: S.meta.id, mine: (ringFor(S.meta.id) || {}).id, toast: $('toast').textContent, my: myDB().length }; });
    const g = r.g || {};
    ok(r.n === 1 && g.cid === r.id && /^my-/.test(r.id) && r.mine === g.id && g.id !== 'evil' && !g.cids, 'kolbiště z kódu patří novému parkuru: ' + JSON.stringify(r));
    ok(g.az === 40.4 && g.W === 60 && g.H === 10 && g.lat === 51.2 && g.lng === 0.52 && g.acc === null && g.at > 1e12, 'čísla zkontrolovaná a v rozsahu: ' + JSON.stringify(g));
    ok(g.name === ('Ring 1 ' + 'x'.repeat(80)).slice(0, 60) && g.venue === 'Kent Showground' && g.cname === 'Kent A2', 'texty bez řídicích znaků a nejvýš 60 znaků: ' + JSON.stringify([g.name, g.venue, g.cname]));
    ok(r.toast === 'Parkur Kent A2 uložen do Moje i s kolbištěm', 'hláška po načtení: ' + r.toast);
    /* Stavba v terénu a AR mají natočení z kolbiště */
    const f = await ev(() => { fldOpen(); const o = { az: FLD.az, tru: FLD.ring.az, dc: ringDecl(FLD.ring), chk: !!($('fdAz') && $('fdAz').checked) }; fldClose(); return o; });
    ok(f.tru === 40.4 && Math.abs(f.az - (40.4 - f.dc)) < 1e-6 && f.dc > 0 && f.dc < 3 && f.chk, 'Stavba v terénu má natočení z kolbiště z kódu: ' + JSON.stringify(f));
    /* druhý parkur na stejném kolbišti: kolbiště se nezdvojí, dostane další parkur */
    await imp('JMP222');
    r = await ev(() => { const L = ringsGet(); return { n: L.length, cids: L[0].cids, id: S.meta.id, mine: (ringFor(S.meta.id) || {}).id, first: L[0].cid }; });
    ok(r.n === 1 && Array.isArray(r.cids) && r.cids.length === 1 && r.cids[0] === r.id && r.mine === g.id && r.first === g.cid, 'stejné kolbiště podruhé: ' + JSON.stringify(r));
    await T.tool('ring'); await page.waitForSelector('#ovRing');
    ok(await page.locator('.rg-row.cur').count() === 1 && !/± \d+ m/.test(await page.textContent('.rg-row')), 'seznam: kolbiště u druhého parkuru, bez přesnosti měření');
    await page.click('#rgClose');
    /* vadné kolbiště: parkur se načte, kolbiště ne */
    await imp('BAD333');
    r = await ev(() => ({ n: ringsGet().length, mine: !!ringFor(S.meta.id), nm: S.meta.name, toast: $('toast').textContent }));
    ok(r.n === 1 && !r.mine && r.nm === 'Kent A2' && r.toast === 'Parkur Kent A2 uložen do Moje', 'vadné kolbiště se vynechá: ' + JSON.stringify(r));
    shared = null;
  });

  await step('angličtina', async () => {
    const miss = await ev(() => ['Kolbiště (GPS)', 'Uložit polohu kolbiště', 'Načíst plán závodiště', 'Natočení kolbiště', 'Projdu dva rohy (GPS)', 'Jsi na kolbišti', 'severovýchod',
      'Přidat polohu kolbiště (pro AR a stavbu v terénu)', 'Polohu kolbiště uvidí jen ten, kdo dostane kód. Do galerie ani skupině se neposílá.', 'Parkur Kent A2 uložen do Moje i s kolbištěm', 'Parkur Kent A2 z odkazu uložen do Moje i s kolbištěm',
      'Ulož si, kde stojí kolbiště, a aplikace tě k němu dovede. Zaměřené natočení použije Stavba v terénu a AR na place. Polohy zůstávají v tomhle zařízení a v tvé záloze; s parkurem odejdou, jen když ho sdílíš kódem i s polohou kolbiště.',
      'Parkur stojí natočený podle kolbiště. Kompas může o pár stupňů ujet: dorovnej ho v „Doladit“, nebo polož parkur přesně „Podle rohů“.', 'přesnost ± 3 m', '12 měření', 'Kolbiště 3', 'Vzdálenost rohů podle GPS: 38,5 m (kolbiště má 40 m).', '120 m od tebe']
      .filter(t => trLookup(t) == null));
    ok(!miss.length, 'chybí anglický překlad: ' + miss.join(' | '));
  });

  await T.ctx.close();
  return T.errs;
};
