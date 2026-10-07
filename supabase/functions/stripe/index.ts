/* Pawkur Plus: webhook od Stripe. Po zaplacení (Payment Link s client_reference_id = id účtu) zapíše do tabulky plus,
   dokdy má uživatel Plus; při další roční platbě platnost prodlouží, při zrušení předplatného ji ukončí.
   Ověřuje podpis Stripe (hlavička Stripe-Signature, tajný klíč STRIPE_WEBHOOK_SECRET nebo app_secret.stripe_whsec).
   Žádné volání Stripe API: všechno potřebné je v události. Rezerva 7 dní, ať Plus nevypadne, když se platba o den zpozdí. */
const SBU = Deno.env.get('SUPABASE_URL') || '', SRK = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const H = { apikey: SRK, Authorization: `Bearer ${SRK}`, 'Content-Type': 'application/json' };
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
const GRACE = 7 * 864e5, YEAR = 365 * 864e5;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function secret(k: string) {
  const r = await fetch(`${SBU}/rest/v1/app_secret?k=eq.${k}&select=v`, { headers: H });
  if (!r.ok) return ''; const j = await r.json(); return (j[0] && j[0].v) || '';
}
function hex(buf: ArrayBuffer) { return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join(''); }
async function verify(payload: string, header: string, whsec: string) {
  const parts = Object.fromEntries(header.split(',').map((kv) => kv.split('=').map((s) => s.trim())));
  const t = +parts.t, v1 = parts.v1; if (!t || !v1) return false;
  if (Math.abs(Date.now() / 1000 - t) > 300) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(whsec), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${t}.${payload}`)));
  if (sig.length !== v1.length) return false;
  let d = 0; for (let i = 0; i < sig.length; i++) d |= sig.charCodeAt(i) ^ v1.charCodeAt(i);
  return d === 0;
}
async function rows(q: string) { const r = await fetch(`${SBU}/rest/v1/plus?${q}`, { headers: H }); return r.ok ? await r.json() : []; }
async function upsert(row: Record<string, unknown>, bySub: string) {
  const had = bySub ? await rows(`sub=eq.${encodeURIComponent(bySub)}&select=id`) : [];
  if (had.length) return fetch(`${SBU}/rest/v1/plus?id=eq.${had[0].id}`, { method: 'PATCH', headers: H, body: JSON.stringify({ ...row, updated_at: new Date().toISOString() }) });
  return fetch(`${SBU}/rest/v1/plus`, { method: 'POST', headers: H, body: JSON.stringify(row) });
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') return json({ error: 'Jen POST.' }, 405);
  if (!SBU || !SRK) return json({ error: 'Server není nastavený.' }, 500);
  const whsec = Deno.env.get('STRIPE_WEBHOOK_SECRET') || await secret('stripe_whsec');
  if (!whsec) return json({ error: 'Chybí tajný klíč webhooku.' }, 500);
  const payload = await req.text();
  if (!(await verify(payload, req.headers.get('stripe-signature') || '', whsec))) return json({ error: 'Neplatný podpis.' }, 400);
  let ev: any; try { ev = JSON.parse(payload); } catch { return json({ error: 'Neplatná data.' }, 400); }
  const o = ev?.data?.object || {}, type = String(ev?.type || '');
  try {
    if (type === 'checkout.session.completed' && (o.payment_status === 'paid' || o.payment_status === 'no_payment_required')) {
      const uid = UUID.test(String(o.client_reference_id || '')) ? String(o.client_reference_id) : null;
      const email = String(o.customer_details?.email || o.customer_email || '').slice(0, 200);
      const until = new Date(Date.now() + YEAR + GRACE).toISOString();
      await upsert({ user_id: uid, email, customer: String(o.customer || '').slice(0, 80), sub: String(o.subscription || '').slice(0, 80), src: 'stripe', until }, String(o.subscription || ''));
    } else if (type === 'invoice.paid' && o.subscription) {
      /* další roční platba: platnost do konce období + rezerva */
      const line = (o.lines?.data || [])[0], end = line?.period?.end ? line.period.end * 1000 : Date.now() + YEAR;
      const sub = String(o.subscription), had = await rows(`sub=eq.${encodeURIComponent(sub)}&select=id`);
      if (had.length) await upsert({ until: new Date(end + GRACE).toISOString(), email: String(o.customer_email || '').slice(0, 200) || undefined }, sub);
      else await upsert({ user_id: null, email: String(o.customer_email || '').slice(0, 200), customer: String(o.customer || '').slice(0, 80), sub, src: 'stripe', until: new Date(end + GRACE).toISOString() }, '');
    } else if (type === 'customer.subscription.deleted' && o.id) {
      /* zrušené předplatné doběhlo: Plus končí teď (Stripe posílá na konci zaplaceného období) */
      const end = o.current_period_end ? Math.min(o.current_period_end * 1000, Date.now()) : Date.now();
      await upsert({ until: new Date(end).toISOString() }, String(o.id));
    }
    return json({ ok: true });
  } catch (_e) {
    return json({ error: 'Chyba serveru.' }, 500);
  }
});
