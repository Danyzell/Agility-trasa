-- Pawkur Plus: placená část aplikace (99 Kč/rok přes Stripe). Základ zůstává zdarma, prvních 14 dní je všechno zdarma.
-- Spustit v Supabase → SQL editor. Idempotentní.
-- Tabulka plus: kdo má Plus a dokdy. Zapisuje ji jen serverová funkce stripe (webhook, service role);
-- aplikace čte přes plus_get() (přihlášený uživatel, podle id účtu nebo e-mailu z platby).

create table if not exists public.plus (
  id          bigserial primary key,
  user_id     uuid references auth.users(id) on delete set null,
  email       text not null default '' check (char_length(email) <= 200),
  customer    text not null default '' check (char_length(customer) <= 80),   -- Stripe customer id
  sub         text not null default '' check (char_length(sub) <= 80),        -- Stripe subscription id
  src         text not null default 'stripe' check (src in ('stripe', 'gift', 'play')),
  until       timestamptz not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists plus_user_idx on public.plus (user_id, until desc);
create index if not exists plus_email_idx on public.plus (lower(email), until desc);
create unique index if not exists plus_sub_idx on public.plus (sub) where sub <> '';
alter table public.plus enable row level security;
revoke all on table public.plus from anon, authenticated;
revoke all on sequence public.plus_id_seq from anon, authenticated;

-- stav Plus přihlášeného: nejpozdější platnost podle účtu nebo e-mailu (když někdo zaplatil bez přihlášení)
create or replace function public.plus_get()
returns json language plpgsql stable security definer set search_path = public as $$
declare uid uuid := auth.uid(); mail text := lower(coalesce(auth.jwt() ->> 'email', '')); r record;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select p.until, p.src, p.customer into r from plus p
    where p.user_id = uid or (mail <> '' and lower(p.email) = mail)
    order by p.until desc limit 1;
  if not found then return json_build_object('until', null); end if;
  return json_build_object('until', r.until, 'src', r.src, 'customer', r.customer);
end $$;

-- začátek zkušební doby podle zařízení (první den v app_open); přeinstalace ji nevynuluje
create or replace function public.trial_start(p_dev text)
returns date language sql stable security definer set search_path = public as $$
  select min(day) from app_open where dev = trim(coalesce(p_dev, '')) and char_length(trim(coalesce(p_dev, ''))) between 8 and 64;
$$;

revoke all on function public.plus_get(), public.trial_start(text) from public, anon;
grant execute on function public.plus_get() to authenticated;
grant execute on function public.trial_start(text) to anon, authenticated;

-- tajný klíč webhooku Stripe (whsec_…) patří do tabulky app_secret pod klíčem stripe_whsec, nebo do proměnné STRIPE_WEBHOOK_SECRET funkce:
--   insert into public.app_secret (k, v) values ('stripe_whsec', 'whsec_…') on conflict (k) do update set v = excluded.v;
