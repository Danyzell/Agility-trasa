-- Napsat autorovi: hodnocení a zprávy z aplikace. Ukládá je jen edge funkce feedback (service role),
-- ta je zároveň pošle e-mailem autorovi. Klient do tabulek nevidí.
create table if not exists public.feedback (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  stars      smallint check (stars between 1 and 5),
  kind       text not null check (kind in ('idea','bug','praise','other')),
  msg        text not null default '' check (char_length(msg) <= 2000),
  contact    text not null default '' check (char_length(contact) <= 120),
  lang       text not null default '' check (char_length(lang) <= 8),
  ver        text not null default '' check (char_length(ver) <= 20),
  ua         text not null default '' check (char_length(ua) <= 200),
  device     text not null check (device ~ '^[A-Za-z0-9_-]{8,64}$'),
  mailed     boolean not null default false
);
create index if not exists feedback_device_at on public.feedback (device, created_at);
alter table public.feedback enable row level security;

-- nastavení jen pro server: komu chodí e-maily (feedback_to) a klíč odesílací služby (resend_key)
create table if not exists public.app_secret (
  k text primary key,
  v text not null
);
alter table public.app_secret enable row level security;

revoke all on public.feedback, public.app_secret from anon, authenticated;
