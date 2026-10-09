/* Pawkur: upozornění na telefon (web push). Žádná knihovna: podpis VAPID (RFC 8292) a šifrování zprávy aes128gcm (RFC 8291, RFC 8188)
   přes WebCrypto. Klíče VAPID si funkce při prvním spuštění vyrobí a uloží do tabulky app_secret (vapid_jwk, vapid_pub);
   veřejný klíč čte aplikace přes push_pubkey(). Úlohy (tělo POST, JSON):
     {job:'setup'}                  vyrobí klíče, když chybí, a vrátí veřejný klíč
     {job:'flush'}                  odešle neodeslané zprávy z push_queue (volá cron každých 5 minut); 404/410 od služby = odběr smazat
     {job:'test', device, lang}     zařadí zkušební zprávu pro zařízení (nejvýš 5 za hodinu) a hned ji pošle
   Volá se s anonymním klíčem (verify_jwt): nic z toho neprozradí cizí data, zprávy jdou jen na odběry v tabulce. */
const SBU = Deno.env.get('SUPABASE_URL') || '', SRK = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const H = { apikey: SRK, Authorization: `Bearer ${SRK}`, 'Content-Type': 'application/json' };
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
const enc = new TextEncoder();
const CONTACT = 'https://pawkur.cz';

function b64u(buf: ArrayBuffer | Uint8Array) { const a = buf instanceof Uint8Array ? buf : new Uint8Array(buf); let s = ''; for (const b of a) s += String.fromCharCode(b); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
function unb64u(s: string) { s = String(s || '').replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; const b = atob(s); const a = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
function cat(...parts: Uint8Array[]) { let n = 0; for (const p of parts) n += p.length; const out = new Uint8Array(n); let o = 0; for (const p of parts) { out.set(p, o); o += p.length; } return out; }

async function secret(k: string) {
  const r = await fetch(`${SBU}/rest/v1/app_secret?k=eq.${k}&select=v`, { headers: H });
  if (!r.ok) return ''; const j = await r.json(); return (j[0] && j[0].v) || '';
}
async function secretSet(k: string, v: string) {
  const r = await fetch(`${SBU}/rest/v1/app_secret`, { method: 'POST', headers: { ...H, Prefer: 'resolution=merge-duplicates' }, body: JSON.stringify({ k, v }) });
  if (!r.ok) throw new Error('secret ' + r.status);
}
/* klíče VAPID: soukromý jako JWK, veřejný jako 65 B (nekomprimovaný bod P-256) v base64url, jak ho chce pushManager.subscribe */
async function vapid() {
  let jwk = await secret('vapid_jwk'), pub = await secret('vapid_pub');
  if (!jwk || !pub) {
    const kp = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']) as CryptoKeyPair;
    const pj = await crypto.subtle.exportKey('jwk', kp.privateKey), raw = await crypto.subtle.exportKey('raw', kp.publicKey);
    jwk = JSON.stringify(pj); pub = b64u(raw);
    await secretSet('vapid_jwk', jwk); await secretSet('vapid_pub', pub);
  }
  const priv = await crypto.subtle.importKey('jwk', JSON.parse(jwk), { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  return { priv, pub };
}
/* hlavička Authorization: JWT ES256 pro původ služby (aud), platnost 12 h; WebCrypto dává podpis r||s, přesně jak JWS chce */
async function vapidAuth(endpoint: string, v: { priv: CryptoKey; pub: string }) {
  const aud = new URL(endpoint).origin;
  const head = b64u(enc.encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' })));
  const body = b64u(enc.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: CONTACT })));
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, v.priv, enc.encode(head + '.' + body));
  return `vapid t=${head}.${body}.${b64u(sig)}, k=${v.pub}`;
}
async function hkdf(salt: Uint8Array, ikm: Uint8Array, info: Uint8Array, len: number) {
  const k = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt, info }, k, len * 8));
}
/* RFC 8291: ECDH s klíčem prohlížeče (p256dh) a tajemstvím auth, HKDF na klíč a nonce, AES-128-GCM; tělo = salt | rs | idlen | klíč | šifra */
async function encrypt(p256dh: string, auth: string, payload: string) {
  const ua = unb64u(p256dh), as = unb64u(auth);
  if (ua.length !== 65 || as.length !== 16) throw new Error('bad keys');
  const uaKey = await crypto.subtle.importKey('raw', ua, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const eph = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']) as CryptoKeyPair;
  const asPub = new Uint8Array(await crypto.subtle.exportKey('raw', eph.publicKey));
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: uaKey }, eph.privateKey, 256));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const ikm = await hkdf(as, shared, cat(enc.encode('WebPush: info\0'), ua, asPub), 32);
  const cek = await hkdf(salt, ikm, enc.encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdf(salt, ikm, enc.encode('Content-Encoding: nonce\0'), 12);
  const plain = cat(enc.encode(payload), new Uint8Array([2]));
  const aes = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, aes, plain));
  return cat(salt, new Uint8Array([0, 0, 16, 0]), new Uint8Array([asPub.length]), asPub, ct);
}
type Sub = { id: number; endpoint: string; p256dh: string; auth: string; fails: number };
type Row = { id: number; title: string; body: string; url: string; tag: string; sub: Sub | null };
async function send(sub: Sub, msg: Record<string, string>, v: { priv: CryptoKey; pub: string }) {
  const body = await encrypt(sub.p256dh, sub.auth, JSON.stringify(msg));
  const headers: Record<string, string> = { Authorization: await vapidAuth(sub.endpoint, v), 'Content-Encoding': 'aes128gcm', 'Content-Type': 'application/octet-stream', TTL: '86400', Urgency: 'normal' };
  if (/^[A-Za-z0-9_-]{1,32}$/.test(msg.tag || '')) headers.Topic = msg.tag; /* stejné téma nahradí čekající zprávu, telefon nedostane dvě */
  const r = await fetch(sub.endpoint, { method: 'POST', headers, body });
  try { await r.text(); } catch (_e) { /* tělo nezajímá */ }
  return r.status;
}
async function flush(limit = 200) {
  const r = await fetch(`${SBU}/rest/v1/push_queue?sent_at=is.null&select=id,title,body,url,tag,sub:push_subs(id,endpoint,p256dh,auth,fails)&order=id&limit=${limit}`, { headers: H });
  if (!r.ok) throw new Error('queue ' + r.status);
  const rows: Row[] = await r.json(); if (!rows.length) return { sent: 0, failed: 0 };
  /* řádky si vzít najednou (sent_at), ať je neposílá i druhé souběžné volání */
  const c = await fetch(`${SBU}/rest/v1/push_queue?id=in.(${rows.map((x) => x.id).join(',')})&sent_at=is.null`, { method: 'PATCH', headers: { ...H, Prefer: 'return=representation' }, body: JSON.stringify({ sent_at: new Date().toISOString() }) });
  const claimed = new Set<number>((c.ok ? await c.json() : []).map((x: { id: number }) => x.id));
  const v = await vapid();
  let sent = 0, failed = 0; const dead = new Set<number>(), bump = new Map<number, number>(), errs: { id: number; err: string }[] = [];
  const todo = rows.filter((q) => claimed.has(q.id) && q.sub);
  for (let i = 0; i < todo.length; i += 8) {
    await Promise.all(todo.slice(i, i + 8).map(async (q) => {
      const s = q.sub as Sub; let st = 0;
      try { st = await send(s, { title: q.title, body: q.body, url: q.url, tag: q.tag }, v); } catch (_e) { st = -1; }
      if (st === 201 || st === 200) { sent++; return; }
      failed++; errs.push({ id: q.id, err: 'push ' + st });
      if (st === 404 || st === 410) dead.add(s.id); else bump.set(s.id, (s.fails || 0) + 1);
    }));
  }
  for (const e of errs) await fetch(`${SBU}/rest/v1/push_queue?id=eq.${e.id}`, { method: 'PATCH', headers: H, body: JSON.stringify({ err: e.err }) });
  for (const [id, n] of bump) { if (n >= 5) dead.add(id); else await fetch(`${SBU}/rest/v1/push_subs?id=eq.${id}`, { method: 'PATCH', headers: H, body: JSON.stringify({ fails: n }) }); }
  if (dead.size) await fetch(`${SBU}/rest/v1/push_subs?id=in.(${[...dead].join(',')})`, { method: 'DELETE', headers: H });
  return { sent, failed, dropped: dead.size };
}
async function test(device: string, lang: string) {
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(device)) return json({ error: 'Neplatné zařízení.' }, 400);
  const r = await fetch(`${SBU}/rest/v1/push_subs?device=eq.${encodeURIComponent(device)}&select=id`, { headers: H });
  const subs: { id: number }[] = r.ok ? await r.json() : [];
  if (!subs.length) return json({ error: 'Pro tohle zařízení není odběr.' }, 404);
  const since = new Date(Date.now() - 3600e3).toISOString();
  const n = await fetch(`${SBU}/rest/v1/push_queue?sub_id=in.(${subs.map((s) => s.id).join(',')})&created_at=gte.${since}&tag=eq.test&select=id`, { headers: H });
  if (n.ok && (await n.json()).length >= 5) return json({ error: 'Zkoušek bylo dost, zkus to za hodinu.' }, 429);
  const en = lang === 'en';
  const q = await fetch(`${SBU}/rest/v1/push_queue`, { method: 'POST', headers: H, body: JSON.stringify(subs.map((s) => ({ sub_id: s.id, title: 'Pawkur', body: en ? 'Notifications work. 🐾' : 'Upozornění fungují. 🐾', url: './#home', tag: 'test' }))) });
  if (!q.ok) return json({ error: 'Zprávu se nepodařilo zařadit.' }, 500);
  return json({ ok: true, ...(await flush(50)) });
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') return json({ error: 'Jen POST.' }, 405);
  if (!SBU || !SRK) return json({ error: 'Server není nastavený.' }, 500);
  let b: Record<string, unknown> = {}; try { b = await req.json(); } catch (_e) { b = {}; }
  const job = String(b.job || '');
  try {
    if (job === 'setup') { const v = await vapid(); return json({ ok: true, pub: v.pub }); }
    if (job === 'flush') return json({ ok: true, ...(await flush()) });
    if (job === 'test') return await test(String(b.device || ''), String(b.lang || 'cs'));
    return json({ error: 'Neznámá úloha.' }, 400);
  } catch (e) {
    return json({ error: 'Chyba serveru: ' + String((e as Error)?.message || e).slice(0, 120) }, 500);
  }
});
