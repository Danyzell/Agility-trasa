/* HandlerMap: výsledky psa z kacr.info (veřejné stránky, jeden požadavek na dotaz).
   Vstup: { dog: "14756" } nebo odkaz https://kacr.info/dogs/14756 → pes (jméno, plemeno, velikost, narození) a jeho běhy po závodech;
   { q: "Wampi" } → hledání psů a psovodů podle jména (kacr.info/search/<text>);
   { handler: "6625" } → psi psovoda (jeho průkazy);
   { comps: 1 } → kalendář závodů na 60 dní dopředu (datum, GPS, rozhodčí, povrch, uzávěrka, přihlášení psi).
   Kalendář je asi 50 stránek, proto se ukládá do tabulky kacr_cache a stahuje se nejvýš jednou za 12 hodin.
   Stahuje jen tyhle druhy stránek kacr.info, nic jiného (žádný otevřený proxy). */
const UA = 'HandlerMap/2.0 (+https://danyzell.github.io/Agility-trasa/)';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=600' } });
const dec = (s: string) => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const text = (s: string) => dec(s.replace(/<[^>]*>/g, ' '));
const num = (s: string | undefined) => (s == null ? null : +s.replace(',', '.'));
const isoDate = (s: string) => { const m = s.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/); return m ? `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}` : null; };

function parseResult(r: string) {
  const t = text(r);
  if (/diskval/i.test(t)) return { dis: 1, raw: t };
  const pl = t.match(/(\d+)\s*\/\s*(\d+)/), tm = t.match(/([\d.,]+)\s*s\b/), pen = t.match(/([\d.,]+)\s*tr\.\s*b\./), v = t.match(/([\d.,]+)\s*m\/s/);
  return { place: pl ? +pl[1] : null, of: pl ? +pl[2] : null, t: num(tm?.[1]), pen: num(pen?.[1]), v: num(v?.[1]), raw: t };
}

function parseDog(id: string, html: string) {
  const name = text((html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1] || '');
  const info: Record<string, string> = {};
  const sum = (html.match(/<div class='summary'>([\s\S]*?)<\/div>/) || [])[1] || '';
  for (const m of sum.matchAll(/<span>([^<]+?):\s*<\/span><span>([\s\S]*?)<\/span>/g)) info[text(m[1])] = text(m[2]);
  const res = html.split(/<h2>\s*Výsledky\s*<\/h2>/)[1] || '';
  const comps: { id: number; name: string; date: string | null; runs: unknown[] }[] = [];
  const re = /<li class='message'>\s*<h3>\s*<a href="https:\/\/kacr\.info\/competitions\/(\d+)">([\s\S]*?)<\/a>,([\s\S]*?)<\/h3>|<p><span class='title'><a href="https:\/\/kacr\.info\/runs\/(\d+)">([\s\S]*?)<\/a>,\s*<a href="https:\/\/kacr\.info\/handlers\/(\d+)">([\s\S]*?)<\/a><\/span>:([\s\S]*?)<\/p>/g;
  for (const m of res.matchAll(re)) {
    if (m[1]) comps.push({ id: +m[1], name: text(m[2]), date: isoDate(m[3]), runs: [] });
    else if (comps.length) comps[comps.length - 1].runs.push({ id: +m[4], name: text(m[5]), handler: text(m[7]), handlerId: +m[6], ...parseResult(m[8]) });
  }
  return { id: +id, name, breed: info['Plemeno'] || null, size: info['Velikost'] || null, born: isoDate(info['Datum narození'] || ''), comps, at: Date.now() };
}

/* výsledky hledání: oddíly <h2>Psi</h2> a <h2>Psovodi</h2> */
function parseSearch(html: string) {
  const part = (h: string) => (html.split(new RegExp('<h2>\\s*' + h + '\\s*</h2>'))[1] || '').split(/<h2>/)[0];
  const dogs = [...part('Psi').matchAll(/<a href="https:\/\/kacr\.info\/dogs\/(\d+)">([\s\S]*?)<\/a><\/span>([^<]*)/g)]
    .map((m) => ({ id: +m[1], name: text(m[2]), breed: text(m[3]).replace(/^,\s*/, '') || null }));
  const handlers = [...part('Psovodi').matchAll(/<a href="https:\/\/kacr\.info\/handlers\/(\d+)">([\s\S]*?)<\/a><\/span>(?:<span>,\s*<a[^>]*>([\s\S]*?)<\/a>)?/g)]
    .map((m) => ({ id: +m[1], name: text(m[2]), osa: m[3] ? text(m[3]) : null }));
  return { dogs: dogs.slice(0, 30), handlers: handlers.slice(0, 30) };
}

/* stránka psovoda: jméno a průkazy (číslo průkazu, velikost, pes) */
function parseHandler(id: string, html: string) {
  const name = text((html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1] || '');
  const books = (html.split(/<h2>\s*Průkazy\s*<\/h2>/)[1] || '').split(/<h2>/)[0];
  const seen = new Set<number>(), dogs: { id: number; name: string; size: string | null }[] = [];
  for (const m of books.matchAll(/<span>\s*\(([A-Z]{1,2})\)\s*<\/span>\s*,\s*<a href="https:\/\/kacr\.info\/dogs\/(\d+)">([\s\S]*?)<\/a>/g)) {
    if (seen.has(+m[2])) continue; seen.add(+m[2]); dogs.push({ id: +m[2], name: text(m[3]), size: m[1] });
  }
  return { id: +id, name, dogs };
}

/* ---------- kalendář závodů ---------- */
const SBU = Deno.env.get('SUPABASE_URL') || '', SRK = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const CACHE_MS = 12 * 3600 * 1000, DAYS = 60;
async function cacheGet(key: string) {
  if (!SBU || !SRK) return null;
  const r = await fetch(`${SBU}/rest/v1/kacr_cache?key=eq.${key}&select=data,at`, { headers: { apikey: SRK, Authorization: `Bearer ${SRK}` } });
  if (!r.ok) return null; const j = await r.json(); return j[0] || null;
}
async function cachePut(key: string, data: unknown) {
  if (!SBU || !SRK) return;
  await fetch(`${SBU}/rest/v1/kacr_cache`, { method: 'POST', headers: { apikey: SRK, Authorization: `Bearer ${SRK}`, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates' },
    body: JSON.stringify({ key, data, at: new Date().toISOString() }) });
}
const ymd = (d: Date) => d.toISOString().slice(0, 10);
function parseComp(id: number, html: string) {
  const name = text((html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1] || '');
  const info: Record<string, string> = {};
  const sum = (html.match(/<div class='summary'>([\s\S]*?)<\/div>/) || [])[1] || '';
  for (const m of sum.matchAll(/<span>([^<]+?):\s*<\/span><span>([\s\S]*?)<\/span>/g)) info[text(m[1])] = m[2];
  const dates = [...text(info['Datum'] || '').matchAll(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/g)].map((m) => `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`);
  const gps = html.match(/L\.marker\(\[\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\]\)/);
  const judges = [...(info['Rozhodčí'] || '').matchAll(/<a[^>]*>([\s\S]*?)<\/a>/g)].map((m) => text(m[1])).slice(0, 6);
  const dl = html.match(/Přihlašování na tento závod je otevřené, končí (\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4}) v (\d{1,2}):(\d{2})/);
  const closed = /Přihlašování na tento závod (už )?skončilo/.test(html);
  /* potvrzené přihlášky: číslo psa → kategorie (např. IA2) */
  const entries: Record<string, string> = {}; let n = 0;
  const tab = (html.split(/<table[^>]*id='confirmed'[^>]*>/)[1] || '').split('</table>')[0];
  for (const tr of tab.split(/<tr[\s>]/).slice(1)) {
    const cat = text((tr.match(/<td class='first_on_mobile'>([\s\S]*?)<\/td>/) || [])[1] || ''), dog = (tr.match(/kacr\.info\/dogs\/(\d+)/) || [])[1];
    if (cat) n++; if (dog && cat && Object.keys(entries).length < 600) entries[dog] = cat.slice(0, 8);
  }
  const lat = gps ? +gps[1] : null, lng = gps ? +gps[2] : null;
  return { id, name, from: dates[0] || null, to: dates[1] || dates[0] || null,
    lat: lat != null && lat > 40 && lat < 60 ? lat : null, lng: lng != null && lng > 5 && lng < 30 ? lng : null,
    terrain: text(info['Terén'] || '') || null, indoor: text(info['Uvnitř'] || '') === 'Ano', judges,
    deadline: dl ? `${dl[3]}-${dl[2].padStart(2, '0')}-${dl[1].padStart(2, '0')}T${dl[4].padStart(2, '0')}:${dl[5]}` : null, open: dl ? true : closed ? false : null,
    n, entries };
}
async function scrapeComps() {
  const now = new Date(), to = new Date(now.getTime() + DAYS * 86400000), ids: number[] = [];
  for (let p = 1; p <= 12; p++) {
    const r = await get(`/competitions/search?competition%5Bdate_from%5D=${ymd(now)}&competition%5Bdate_to%5D=${ymd(to)}&competition%5Blength%5D=any&page=${p}`);
    if (!r.ok) break;
    const h = (await r.text()).split("<div id='container'>")[1] || '';
    const found = [...h.matchAll(/<span class='title'>\s*<a href="https:\/\/kacr\.info\/competitions\/(\d+)">/g)].map((m) => +m[1]).filter((x) => ids.indexOf(x) < 0);
    if (!found.length) break; ids.push(...found);
  }
  const out: ReturnType<typeof parseComp>[] = [];
  for (let i = 0; i < ids.length; i += 4) {
    const part = await Promise.all(ids.slice(i, i + 4).map(async (id) => { try { const r = await get('/competitions/' + id); return r.ok ? parseComp(id, await r.text()) : null; } catch (_) { return null; } }));
    part.forEach((c) => { if (c && c.name && c.from) out.push(c); });
  }
  out.sort((a, b) => (a.from! < b.from! ? -1 : a.from! > b.from! ? 1 : a.id - b.id));
  return { at: Date.now(), days: DAYS, comps: out };
}

const get = (path: string) => fetch('https://kacr.info' + path, { headers: { 'User-Agent': UA, 'Accept-Language': 'cs' }, redirect: 'manual' });

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  try {
    const b = await req.json().catch(() => ({}));
    if (b?.q != null) {
      const q = String(b.q).replace(/[\/?#%\\<>]/g, ' ').replace(/\s+/g, ' ').trim();
      if (q.length < 2 || q.length > 60) return json({ error: 'Napiš aspoň 2 písmena jména psa nebo psovoda.' }, 400);
      const r = await get('/search/' + encodeURIComponent(q));
      if (!r.ok) return json({ error: `kacr.info teď neodpovídá (${r.status}).` }, 502);
      return json(parseSearch(await r.text()));
    }
    if (b?.comps) {
      const c = await cacheGet('comps');
      if (c && Date.now() - Date.parse(c.at) < CACHE_MS && c.data && Array.isArray(c.data.comps)) return json(c.data);
      const d = await scrapeComps();
      if (!d.comps.length) { if (c && c.data) return json(c.data); return json({ error: 'Kalendář závodů se nepodařilo načíst.' }, 502); }
      await cachePut('comps', d);
      return json(d);
    }
    if (b?.handler != null) {
      const h = String(b.handler).match(/^(?:https?:\/\/(?:www\.)?kacr\.info\/handlers\/)?(\d{1,7})\/?$/);
      if (!h) return json({ error: 'Neplatné číslo psovoda.' }, 400);
      const r = await get('/handlers/' + h[1]);
      if (r.status === 404) return json({ error: 'Psovod s tímhle číslem na kacr.info není.' }, 404);
      if (!r.ok) return json({ error: `kacr.info teď neodpovídá (${r.status}).` }, 502);
      return json(parseHandler(h[1], await r.text()));
    }
    const m = String(b?.dog ?? '').trim().match(/^(?:https?:\/\/(?:www\.)?kacr\.info\/dogs\/)?(\d{1,7})\/?(?:[?#].*)?$/);
    if (!m) return json({ error: 'Neplatný odkaz na psa. Vlož odkaz ve tvaru https://kacr.info/dogs/12345.' }, 400);
    const r = await get('/dogs/' + m[1]);
    if (r.status === 404) return json({ error: 'Pes s tímhle číslem na kacr.info není.' }, 404);
    if (!r.ok) return json({ error: `kacr.info teď neodpovídá (${r.status}).` }, 502);
    const d = parseDog(m[1], await r.text());
    if (!d.name) return json({ error: 'Stránku psa se nepodařilo přečíst.' }, 502);
    return json(d);
  } catch (e) {
    return json({ error: 'Chyba serveru: ' + (e as Error).message }, 500);
  }
});
