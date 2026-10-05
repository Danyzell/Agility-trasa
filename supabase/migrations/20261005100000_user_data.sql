-- Účet přes Google: data aplikace (parkury, psi, běhy, deník…) jednoho uživatele, synchronizace mezi zařízeními.
-- Tabulka je zamčená (RLS bez politik), přístup jen přes funkce níž, každý jen ke svému řádku (auth.uid()).
create table if not exists public.user_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  rev bigint not null default 0,
  updated_at timestamptz not null default now()
);
alter table public.user_data enable row level security;
revoke all on public.user_data from anon, authenticated;

create or replace function public.sync_get() returns jsonb
language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid(); r record;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select data, rev, updated_at into r from public.user_data where user_id = uid;
  if not found then return jsonb_build_object('data', '{}'::jsonb, 'rev', 0); end if;
  return jsonb_build_object('data', r.data, 'rev', r.rev, 'at', r.updated_at);
end $$;

-- zápis jen když se od načtení nic nezměnilo (rev); jinak vrátí null a aplikace sloučí znovu
create or replace function public.sync_put(p_data jsonb, p_rev bigint) returns bigint
language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid(); r bigint;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if jsonb_typeof(p_data) <> 'object' then raise exception 'bad data'; end if;
  if octet_length(p_data::text) > 5000000 then raise exception 'data too large'; end if;
  if p_rev = 0 then
    insert into public.user_data(user_id, data, rev) values (uid, p_data, 1)
    on conflict (user_id) do nothing returning rev into r;
  else
    update public.user_data set data = p_data, rev = rev + 1, updated_at = now()
    where user_id = uid and rev = p_rev returning rev into r;
  end if;
  return r;
end $$;

create or replace function public.sync_delete() returns void
language plpgsql security definer set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  delete from public.user_data where user_id = auth.uid();
end $$;

revoke all on function public.sync_get(), public.sync_put(jsonb, bigint), public.sync_delete() from public, anon;
grant execute on function public.sync_get(), public.sync_put(jsonb, bigint), public.sync_delete() to authenticated;
