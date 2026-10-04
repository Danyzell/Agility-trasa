/* HandlerMap: výsledky psa z kacr.info (veřejná stránka psa, jeden požadavek na psa).
   Vstup: { dog: "14756" } nebo odkaz https://kacr.info/dogs/14756. Stahuje jen kacr.info/dogs/<číslo>,
   nic jiného (žádný otevřený proxy). Výstup: pes (jméno, plemeno, velikost, narození) a jeho běhy po závodech. */
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

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  try {
    const b = await req.json().catch(() => ({}));
    const m = String(b?.dog ?? '').trim().match(/^(?:https?:\/\/(?:www\.)?kacr\.info\/dogs\/)?(\d{1,7})\/?(?:[?#].*)?$/);
    if (!m) return json({ error: 'Neplatný odkaz na psa. Vlož odkaz ve tvaru https://kacr.info/dogs/12345.' }, 400);
    const r = await fetch(`https://kacr.info/dogs/${m[1]}`, { headers: { 'User-Agent': UA, 'Accept-Language': 'cs' }, redirect: 'manual' });
    if (r.status === 404) return json({ error: 'Pes s tímhle číslem na kacr.info není.' }, 404);
    if (!r.ok) return json({ error: `kacr.info teď neodpovídá (${r.status}).` }, 502);
    const d = parseDog(m[1], await r.text());
    if (!d.name) return json({ error: 'Stránku psa se nepodařilo přečíst.' }, 502);
    return json(d);
  } catch (e) {
    return json({ error: 'Chyba serveru: ' + (e as Error).message }, 500);
  }
});
