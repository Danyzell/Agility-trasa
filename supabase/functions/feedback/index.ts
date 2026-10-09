/* Pawkur: Napsat autorovi. Hodnocení (1–5 hvězd), druh zprávy a text z aplikace uloží do tabulky feedback
   a pošle e-mailem autorovi přes službu Resend. Adresu a klíč bere z proměnných FEEDBACK_TO a RESEND_API_KEY,
   jinak z tabulky app_secret (feedback_to, resend_key). Bez klíče se zpráva jen uloží a e-mail odejde,
   až bude klíč nastavený (mailed = false).
   Rychlá odpověď na otázku na Domů („Co ti v Pawkuru chybí?“, quick: true) se jen uloží, e-mailem nechodí;
   souhrn vidí autor v aplikaci (app_stats, Více → O aplikaci → Návštěvnost).
   Vstup: { stars?: 1–5, kind: idea|bug|praise|other, msg, contact?, lang?, ver?, device, quick? } → { ok: true, mailed } */
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' } });
const SBU = Deno.env.get('SUPABASE_URL') || '', SRK = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const H = { apikey: SRK, Authorization: `Bearer ${SRK}`, 'Content-Type': 'application/json' };
const KINDS: Record<string, string> = { idea: 'Nápad', bug: 'Chyba', praise: 'Pochvala', other: 'Jiné' };
const clean = (s: unknown, n: number) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, n);
const MAIL = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[a-z]{2,}$/i;

async function secret(k: string) {
  const r = await fetch(`${SBU}/rest/v1/app_secret?k=eq.${k}&select=v`, { headers: H });
  if (!r.ok) return ''; const j = await r.json(); return (j[0] && j[0].v) || '';
}
async function count(q: string) {
  const r = await fetch(`${SBU}/rest/v1/feedback?select=id&${q}`, { headers: { ...H, Prefer: 'count=exact', Range: '0-0' } });
  const m = (r.headers.get('content-range') || '').match(/\/(\d+)$/); return m ? +m[1] : 0;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Jen POST.' }, 405);
  try {
    if (!SBU || !SRK) return json({ error: 'Server není nastavený.' }, 500);
    const b = await req.json().catch(() => ({}));
    const stars = b?.stars == null || b.stars === '' ? null : Math.round(+b.stars);
    const kind = String(b?.kind || '');
    const quick = b?.quick === true;
    const msg = clean(b?.msg, quick ? 200 : 2000), contact = quick ? '' : clean(b?.contact, 120), device = String(b?.device || '');
    const row = { stars, kind, msg, contact, lang: clean(b?.lang, 8), ver: clean(b?.ver, 20), ua: clean(req.headers.get('user-agent'), 200), device };
    if (stars != null && !(stars >= 1 && stars <= 5)) return json({ error: 'Neplatné hodnocení.' }, 400);
    if (!KINDS[kind]) return json({ error: 'Neplatný druh zprávy.' }, 400);
    if (!msg && stars == null) return json({ error: 'Napiš zprávu nebo dej hvězdičky.' }, 400);
    if (!/^[A-Za-z0-9_-]{8,64}$/.test(device)) return json({ error: 'Neplatné zařízení.' }, 400);
    /* proti zahlcení: nejvýš 5 zpráv z jednoho telefonu za den a 60 ze všech za hodinu */
    const day = new Date(Date.now() - 864e5).toISOString(), hour = new Date(Date.now() - 36e5).toISOString();
    if (await count(`device=eq.${device}&created_at=gt.${day}`) >= 5) return json({ error: 'Na dnešek už je zpráv dost, zkus to zítra.' }, 429);
    if (await count(`created_at=gt.${hour}`) >= 60) return json({ error: 'Teď přišlo moc zpráv, zkus to za chvíli.' }, 429);

    const ins = await fetch(`${SBU}/rest/v1/feedback`, { method: 'POST', headers: { ...H, Prefer: 'return=representation' }, body: JSON.stringify(row) });
    if (!ins.ok) return json({ error: 'Zprávu se nepodařilo uložit.' }, 500);
    const id = (await ins.json())[0]?.id;

    let mailed = false;
    /* rychlá odpověď se jen uloží, e-mail se neposílá */
    const key = quick ? '' : Deno.env.get('RESEND_API_KEY') || await secret('resend_key'), to = quick ? '' : Deno.env.get('FEEDBACK_TO') || await secret('feedback_to');
    if (key && to) {
      const st = stars ? '★'.repeat(stars) + '☆'.repeat(5 - stars) + ' ' : '';
      const text = `${KINDS[kind]}${stars ? ` · ${stars}/5` : ''}\n\n${msg || '(bez textu)'}\n\n` +
        `Kontakt: ${contact || '—'}\nVerze: ${row.ver || '—'} · jazyk ${row.lang || '—'}\nZařízení: ${device.slice(0, 10)}…\n${row.ua}`;
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: 'Pawkur <onboarding@resend.dev>', to: [to], subject: `Pawkur: ${st}${KINDS[kind]}${msg ? ' – ' + msg.replace(/\s+/g, ' ').slice(0, 50) : ''}`,
          text, ...(MAIL.test(contact) ? { reply_to: contact } : {}) }),
      });
      mailed = r.ok;
      if (mailed && id) await fetch(`${SBU}/rest/v1/feedback?id=eq.${id}`, { method: 'PATCH', headers: H, body: JSON.stringify({ mailed: true }) });
    }
    return json({ ok: true, mailed });
  } catch (_e) {
    return json({ error: 'Chyba serveru.' }, 500);
  }
});
