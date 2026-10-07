-- Živé pořadí u ringu, galerie parkurů a přátelé.
-- Spustit v Supabase → SQL editor (zápisy přes MCP se ruší). Idempotentní, jde pustit opakovaně.
-- Tabulky jsou zamčené (RLS bez politik); aplikace jde jen přes funkce níž (SECURITY DEFINER).

-- =========================================================================================
-- 1) ŽIVÉ POŘADÍ U RINGU: kdokoli u ringu klepne „běží č. 14“ a ostatním na stejném závodě se to ukáže.
--    Bez přihlášení (stejně jako Parkur týdne), zařízení se pozná podle p_device; limit 300 zápisů/den.
-- =========================================================================================
create table if not exists public.ring_live (
  comp       text not null check (comp ~ '^[A-Za-z0-9_-]{1,40}$'),      -- id závodu (kacr.info) nebo vlastní kód
  cat        text not null check (char_length(cat) between 1 and 24),   -- kategorie, např. „A2 L“ nebo „J3 S“
  running    int  not null check (running between 0 and 999),           -- startovní číslo, které právě běží
  note       text not null default '' check (char_length(note) <= 60),  -- „pauza do 13:30“, „prohlídka“
  device     text not null check (device ~ '^[A-Za-z0-9_-]{8,64}$'),
  updated_at timestamptz not null default now(),
  primary key (comp, cat)
);
create table if not exists public.ring_log (
  device text not null, day date not null, n int not null default 0, primary key (device, day)
);
alter table public.ring_live enable row level security;
alter table public.ring_log  enable row level security;
revoke all on table public.ring_live, public.ring_log from anon, authenticated;

create or replace function public.ring_set(p_comp text, p_cat text, p_running int, p_note text, p_device text)
returns json language plpgsql security definer set search_path = public as $$
declare
  v_comp text := trim(coalesce(p_comp, ''));
  v_cat  text := trim(regexp_replace(regexp_replace(coalesce(p_cat, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g'));
  v_note text := left(trim(regexp_replace(coalesce(p_note, ''), '[[:cntrl:]]', '', 'g')), 60);
  v_dev  text := trim(coalesce(p_device, ''));
  v_day  date := (now() at time zone 'Europe/Prague')::date;
  v_n    int;
  r      ring_live%rowtype;
begin
  if v_comp !~ '^[A-Za-z0-9_-]{1,40}$' then raise exception 'neplatný závod'; end if;
  if char_length(v_cat) not between 1 and 24 then raise exception 'neplatná kategorie'; end if;
  if p_running is null or p_running not between 0 and 999 then raise exception 'neplatné číslo'; end if;
  if v_dev !~ '^[A-Za-z0-9_-]{8,64}$' then raise exception 'neplatné zařízení'; end if;

  insert into ring_log(device, day, n) values (v_dev, v_day, 1)
    on conflict (device, day) do update set n = ring_log.n + 1 returning n into v_n;
  if v_n > 300 then raise exception 'příliš mnoho zápisů'; end if;

  -- úklid: závody starší než 3 dny a staré počitadla
  delete from ring_live where updated_at < now() - interval '3 days';
  delete from ring_log  where day < v_day - 2;

  insert into ring_live as l (comp, cat, running, note, device)
  values (v_comp, v_cat, p_running, v_note, v_dev)
  on conflict (comp, cat) do update set running = excluded.running, note = excluded.note, device = excluded.device, updated_at = now()
  returning * into r;
  return json_build_object('cat', r.cat, 'running', r.running, 'note', r.note, 'at', r.updated_at);
end $$;

create or replace function public.ring_get(p_comp text)
returns json language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object(
           'cat', l.cat, 'running', l.running, 'note', l.note, 'at', l.updated_at,
           'ago', floor(extract(epoch from (now() - l.updated_at)))::int) order by l.cat), '[]'::json)
  from ring_live l
  where l.comp = trim(coalesce(p_comp, '')) and l.updated_at > now() - interval '3 days';
$$;

revoke all on function public.ring_set(text, text, int, text, text), public.ring_get(text) from public;
grant execute on function public.ring_set(text, text, int, text, text), public.ring_get(text) to anon, authenticated;

-- =========================================================================================
-- 2) GALERIE PARKURŮ: sdílený parkur (share_course → kód) jde přihlášeným zveřejnit do galerie,
--    hledat podle třídy, země, rozhodčího, hodnotit hvězdičkami a nahlásit.
-- =========================================================================================
alter table public.shared_courses
  add column if not exists pub        boolean not null default false,
  add column if not exists user_id    uuid references auth.users(id) on delete set null,
  add column if not exists sport      text not null default 'agility' check (sport in ('agility', 'hoopers')),
  add column if not exists country    text not null default '' check (country ~ '^[A-Z]{0,3}$'),
  add column if not exists judge      text not null default '' check (char_length(judge) <= 80),
  add column if not exists len        numeric(6,1) check (len is null or len between 0 and 999),
  add column if not exists n          int check (n is null or n between 0 and 99),
  add column if not exists downloads  int not null default 0,
  add column if not exists rating_sum int not null default 0,
  add column if not exists rating_n   int not null default 0,
  add column if not exists reports    int not null default 0;
create index if not exists shared_courses_pub_idx on public.shared_courses (cls, created_at desc) where pub;

create table if not exists public.gallery_ratings (
  code text not null references public.shared_courses(code) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  stars smallint not null check (stars between 1 and 5),
  created_at timestamptz not null default now(),
  primary key (code, user_id)
);
create table if not exists public.gallery_reports (
  code text not null references public.shared_courses(code) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (code, user_id)
);
alter table public.gallery_ratings enable row level security;
alter table public.gallery_reports enable row level security;
revoke all on table public.gallery_ratings, public.gallery_reports from anon, authenticated;

-- zveřejnění: jen přihlášený; kód musí být jeho (nebo zatím ničí, pak si ho přivlastní); nejvýš 20 zveřejnění za den
create or replace function public.gallery_publish(p_code text, p_country text, p_judge text, p_len numeric, p_n int, p_sport text)
returns boolean language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_code text := upper(trim(coalesce(p_code, '')));
  v_country text := upper(trim(coalesce(p_country, '')));
  v_judge text := left(trim(regexp_replace(regexp_replace(coalesce(p_judge, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g')), 80);
  v_sport text := coalesce(nullif(trim(p_sport), ''), 'agility');
  v_owner uuid; v_cnt int;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if v_code !~ '^[A-Z0-9]{6}$' then raise exception 'neplatný kód'; end if;
  if v_country !~ '^[A-Z]{0,3}$' then raise exception 'neplatná země'; end if;
  if v_sport not in ('agility', 'hoopers') then raise exception 'neplatná disciplína'; end if;
  select user_id into v_owner from shared_courses where code = v_code;
  if not found then raise exception 'parkur nenalezen'; end if;
  if v_owner is not null and v_owner <> uid then raise exception 'cizí parkur'; end if;
  select count(*) into v_cnt from shared_courses where user_id = uid and pub and created_at > now() - interval '1 day';
  if v_cnt >= 20 then raise exception 'příliš mnoho zveřejnění'; end if;
  update shared_courses set pub = true, user_id = uid, country = v_country, judge = v_judge,
    len = case when p_len between 0 and 999 then round(p_len, 1) else null end,
    n = case when p_n between 0 and 99 then p_n else null end, sport = v_sport
  where code = v_code;
  return true;
end $$;

create or replace function public.gallery_unpublish(p_code text)
returns boolean language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_code text := upper(trim(coalesce(p_code, '')));
begin
  if uid is null then raise exception 'not signed in'; end if;
  update shared_courses set pub = false where code = v_code and user_id = uid;
  return found;
end $$;

-- výpis: třída (nebo null = vše), země (nebo null), disciplína, hledaný text (název, autor, rozhodčí),
-- řazení new | top | popular, stránka po 30; nahlášené 3× se neukazují
create or replace function public.gallery_list(p_cls text, p_country text, p_sport text, p_q text, p_sort text, p_page int)
returns json language plpgsql stable security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_cls text := nullif(upper(trim(coalesce(p_cls, ''))), '');
  v_country text := nullif(upper(trim(coalesce(p_country, ''))), '');
  v_sport text := coalesce(nullif(trim(p_sport), ''), 'agility');
  v_q text := nullif(lower(trim(coalesce(p_q, ''))), '');
  v_sort text := coalesce(nullif(trim(p_sort), ''), 'new');
  v_off int := greatest(0, coalesce(p_page, 0)) * 30;
  r json;
begin
  if v_cls is not null and char_length(v_cls) > 4 then raise exception 'neplatná třída'; end if;
  if v_country is not null and v_country !~ '^[A-Z]{1,3}$' then raise exception 'neplatná země'; end if;
  if v_q is not null and char_length(v_q) > 40 then raise exception 'dlouhé hledání'; end if;
  if v_sort not in ('new', 'top', 'popular') then raise exception 'neplatné řazení'; end if;
  with q as (
    select s.code, s.name, s.cls, s.author, s.country, s.judge, s.len, s.n, s.downloads, s.rating_n,
           case when s.rating_n > 0 then round(s.rating_sum::numeric / s.rating_n, 1) else null end as rating,
           s.created_at, (uid is not null and s.user_id = uid) as mine,
           -- hodnocení s malou váhou, aby parkur s jednou pětkou nepřeskočil parkur s dvaceti čtyřkami
           (s.rating_sum + 3.5 * 3) / (s.rating_n + 3) as score
    from shared_courses s
    where s.pub and s.reports < 3 and s.sport = v_sport
      and (v_cls is null or s.cls = v_cls)
      and (v_country is null or s.country = v_country)
      and (v_q is null or lower(s.name) like '%' || v_q || '%' or lower(s.author) like '%' || v_q || '%' or lower(s.judge) like '%' || v_q || '%')
  )
  select json_build_object(
    'total', (select count(*) from q),
    'rows', coalesce((select json_agg(json_build_object(
        'code', x.code, 'name', x.name, 'cls', x.cls, 'author', x.author, 'country', x.country, 'judge', x.judge,
        'len', x.len, 'n', x.n, 'downloads', x.downloads, 'rating', x.rating, 'rating_n', x.rating_n, 'at', x.created_at, 'mine', x.mine))
      from (select * from q order by
              case when v_sort = 'top' then score end desc nulls last,
              case when v_sort = 'popular' then downloads end desc nulls last,
              created_at desc
            limit 30 offset v_off) x), '[]'::json)
  ) into r;
  return r;
end $$;

-- otevření parkuru z galerie: počitadlo stažení (anonymně, bez omezení; jen číslo)
create or replace function public.gallery_opened(p_code text)
returns void language sql security definer set search_path = public as $$
  update shared_courses set downloads = downloads + 1 where code = upper(trim(coalesce(p_code, ''))) and pub;
$$;

create or replace function public.gallery_rate(p_code text, p_stars int)
returns json language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_code text := upper(trim(coalesce(p_code, ''))); r record;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if p_stars is null or p_stars not between 1 and 5 then raise exception 'neplatné hodnocení'; end if;
  if not exists (select 1 from shared_courses where code = v_code and pub) then raise exception 'parkur nenalezen'; end if;
  insert into gallery_ratings(code, user_id, stars) values (v_code, uid, p_stars)
    on conflict (code, user_id) do update set stars = excluded.stars, created_at = now();
  update shared_courses s set rating_sum = g.s, rating_n = g.n
    from (select sum(stars) s, count(*) n from gallery_ratings where code = v_code) g where s.code = v_code
    returning s.rating_sum, s.rating_n into r;
  return json_build_object('rating', round(r.rating_sum::numeric / r.rating_n, 1), 'rating_n', r.rating_n, 'mine', p_stars);
end $$;

create or replace function public.gallery_report(p_code text)
returns int language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_code text := upper(trim(coalesce(p_code, ''))); v_n int;
begin
  if uid is null then raise exception 'not signed in'; end if;
  insert into gallery_reports(code, user_id) values (v_code, uid) on conflict do nothing;
  update shared_courses s set reports = (select count(*) from gallery_reports where code = v_code) where s.code = v_code returning reports into v_n;
  return v_n;
end $$;

revoke all on function public.gallery_publish(text, text, text, numeric, int, text), public.gallery_unpublish(text),
  public.gallery_list(text, text, text, text, text, int), public.gallery_opened(text), public.gallery_rate(text, int), public.gallery_report(text) from public, anon;
grant execute on function public.gallery_list(text, text, text, text, text, int), public.gallery_opened(text) to anon, authenticated;
grant execute on function public.gallery_publish(text, text, text, numeric, int, text), public.gallery_unpublish(text),
  public.gallery_rate(text, int), public.gallery_report(text) to authenticated;

-- =========================================================================================
-- 3) PŘÁTELÉ: profil s přezdívkou (@handle), žádosti o přátelství, schránka na sdílené parkury a plány.
--    Výsledky kamarádů ze závodů se neukládají: profil nese jen psy (jméno, velikost, třída, id na kacr.info)
--    a aplikace si výsledky stáhne přes funkci kacr jako u vlastního psa.
-- =========================================================================================
create table if not exists public.profiles (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  handle     text not null unique check (handle ~ '^[a-z0-9_]{3,20}$'),
  name       text not null default '' check (char_length(name) <= 40),
  dogs       jsonb not null default '[]'::jsonb check (jsonb_typeof(dogs) = 'array' and pg_column_size(dogs) < 4000),
  updated_at timestamptz not null default now()
);
create table if not exists public.friends (
  user_id    uuid not null references auth.users(id) on delete cascade,
  friend_id  uuid not null references auth.users(id) on delete cascade,
  status     text not null check (status in ('req', 'ok')),   -- req: user_id požádal friend_id; ok: přátelé (řádky v obou směrech)
  created_at timestamptz not null default now(),
  primary key (user_id, friend_id),
  check (user_id <> friend_id)
);
create index if not exists friends_friend_idx on public.friends (friend_id, status);
create table if not exists public.inbox (
  id         bigserial primary key,
  to_user    uuid not null references auth.users(id) on delete cascade,
  from_user  uuid not null references auth.users(id) on delete cascade,
  kind       text not null check (kind in ('course', 'plan', 'msg')),
  data       jsonb not null check (jsonb_typeof(data) = 'object' and pg_column_size(data) < 40000),
  seen       boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists inbox_to_idx on public.inbox (to_user, created_at desc);
alter table public.profiles enable row level security;
alter table public.friends  enable row level security;
alter table public.inbox    enable row level security;
revoke all on table public.profiles, public.friends, public.inbox from anon, authenticated;
revoke all on sequence public.inbox_id_seq from anon, authenticated;

create or replace function public.profile_set(p_handle text, p_name text, p_dogs jsonb)
returns json language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_handle text := lower(trim(coalesce(p_handle, '')));
  v_name text := left(trim(regexp_replace(regexp_replace(coalesce(p_name, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g')), 40);
  v_dogs jsonb := coalesce(p_dogs, '[]'::jsonb);
  r profiles%rowtype;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if v_handle !~ '^[a-z0-9_]{3,20}$' then raise exception 'neplatná přezdívka'; end if;
  if jsonb_typeof(v_dogs) <> 'array' or jsonb_array_length(v_dogs) > 10 or pg_column_size(v_dogs) >= 4000 then raise exception 'neplatní psi'; end if;
  insert into profiles(user_id, handle, name, dogs) values (uid, v_handle, v_name, v_dogs)
    on conflict (user_id) do update set handle = excluded.handle, name = excluded.name, dogs = excluded.dogs, updated_at = now()
    returning * into r;
  return json_build_object('handle', r.handle, 'name', r.name, 'dogs', r.dogs);
exception when unique_violation then raise exception 'přezdívka je obsazená';
end $$;

create or replace function public.profile_get()
returns json language sql stable security definer set search_path = public as $$
  select json_build_object('handle', p.handle, 'name', p.name, 'dogs', p.dogs) from profiles p where p.user_id = auth.uid();
$$;

create or replace function public.profile_delete()
returns void language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  delete from friends where user_id = auth.uid() or friend_id = auth.uid();
  delete from inbox where to_user = auth.uid() or from_user = auth.uid();
  delete from profiles where user_id = auth.uid();
end $$;

-- žádost o přátelství podle přezdívky; když už druhý požádal mě, rovnou se přijme
create or replace function public.friend_request(p_handle text)
returns text language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_other uuid; v_cnt int;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if not exists (select 1 from profiles where user_id = uid) then raise exception 'nejdřív si nastav přezdívku'; end if;
  select user_id into v_other from profiles where handle = lower(trim(coalesce(p_handle, '')));
  if not found then raise exception 'přezdívka nenalezena'; end if;
  if v_other = uid then raise exception 'to jsi ty'; end if;
  if exists (select 1 from friends where user_id = uid and friend_id = v_other and status = 'ok') then return 'ok'; end if;
  if exists (select 1 from friends where user_id = v_other and friend_id = uid and status = 'req') then
    update friends set status = 'ok' where user_id = v_other and friend_id = uid;
    insert into friends(user_id, friend_id, status) values (uid, v_other, 'ok') on conflict (user_id, friend_id) do update set status = 'ok';
    return 'ok';
  end if;
  select count(*) into v_cnt from friends where user_id = uid and status = 'req' and created_at > now() - interval '1 day';
  if v_cnt >= 20 then raise exception 'příliš mnoho žádostí'; end if;
  insert into friends(user_id, friend_id, status) values (uid, v_other, 'req') on conflict do nothing;
  return 'req';
end $$;

create or replace function public.friend_accept(p_handle text)
returns boolean language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_other uuid;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select user_id into v_other from profiles where handle = lower(trim(coalesce(p_handle, '')));
  if not found then return false; end if;
  update friends set status = 'ok' where user_id = v_other and friend_id = uid and status = 'req';
  if not found then return false; end if;
  insert into friends(user_id, friend_id, status) values (uid, v_other, 'ok') on conflict (user_id, friend_id) do update set status = 'ok';
  return true;
end $$;

-- odebrání přítele, odmítnutí i zrušení vlastní žádosti
create or replace function public.friend_remove(p_handle text)
returns boolean language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_other uuid;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select user_id into v_other from profiles where handle = lower(trim(coalesce(p_handle, '')));
  if not found then return false; end if;
  delete from friends where (user_id = uid and friend_id = v_other) or (user_id = v_other and friend_id = uid);
  return found;
end $$;

create or replace function public.friends_list()
returns json language sql stable security definer set search_path = public as $$
  select json_build_object(
    'friends', coalesce((select json_agg(json_build_object('handle', p.handle, 'name', p.name, 'dogs', p.dogs, 'since', f.created_at) order by p.handle)
                 from friends f join profiles p on p.user_id = f.friend_id where f.user_id = auth.uid() and f.status = 'ok'), '[]'::json),
    'incoming', coalesce((select json_agg(json_build_object('handle', p.handle, 'name', p.name, 'at', f.created_at) order by f.created_at desc)
                 from friends f join profiles p on p.user_id = f.user_id where f.friend_id = auth.uid() and f.status = 'req'), '[]'::json),
    'outgoing', coalesce((select json_agg(json_build_object('handle', p.handle, 'name', p.name, 'at', f.created_at) order by f.created_at desc)
                 from friends f join profiles p on p.user_id = f.friend_id where f.user_id = auth.uid() and f.status = 'req'), '[]'::json),
    'unseen', (select count(*) from inbox where to_user = auth.uid() and not seen)
  );
$$;

-- poslat příteli parkur (data jako u share_course), plán tréninku nebo krátkou zprávu; 50 za den, schránka nejvýš 200 položek
create or replace function public.inbox_send(p_handle text, p_kind text, p_data jsonb)
returns bigint language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_other uuid; v_cnt int; v_id bigint;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if p_kind not in ('course', 'plan', 'msg') then raise exception 'neplatný druh'; end if;
  if p_data is null or jsonb_typeof(p_data) <> 'object' or pg_column_size(p_data) >= 40000 then raise exception 'neplatná data'; end if;
  select user_id into v_other from profiles where handle = lower(trim(coalesce(p_handle, '')));
  if not found then raise exception 'přezdívka nenalezena'; end if;
  if not exists (select 1 from friends where user_id = uid and friend_id = v_other and status = 'ok') then raise exception 'není přítel'; end if;
  select count(*) into v_cnt from inbox where from_user = uid and created_at > now() - interval '1 day';
  if v_cnt >= 50 then raise exception 'příliš mnoho zpráv'; end if;
  insert into inbox(to_user, from_user, kind, data) values (v_other, uid, p_kind, p_data) returning id into v_id;
  delete from inbox where to_user = v_other and id not in (select id from inbox where to_user = v_other order by created_at desc limit 200);
  return v_id;
end $$;

create or replace function public.inbox_list()
returns json language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object('id', i.id, 'from', p.handle, 'name', p.name, 'kind', i.kind, 'data', i.data, 'seen', i.seen, 'at', i.created_at) order by i.created_at desc), '[]'::json)
  from (select * from inbox where to_user = auth.uid() order by created_at desc limit 50) i
  left join profiles p on p.user_id = i.from_user;
$$;

create or replace function public.inbox_seen(p_ids bigint[])
returns void language sql security definer set search_path = public as $$
  update inbox set seen = true where to_user = auth.uid() and id = any(p_ids);
$$;

create or replace function public.inbox_delete(p_id bigint)
returns void language sql security definer set search_path = public as $$
  delete from inbox where to_user = auth.uid() and id = p_id;
$$;

revoke all on function public.profile_set(text, text, jsonb), public.profile_get(), public.profile_delete(),
  public.friend_request(text), public.friend_accept(text), public.friend_remove(text), public.friends_list(),
  public.inbox_send(text, text, jsonb), public.inbox_list(), public.inbox_seen(bigint[]), public.inbox_delete(bigint) from public, anon;
grant execute on function public.profile_set(text, text, jsonb), public.profile_get(), public.profile_delete(),
  public.friend_request(text), public.friend_accept(text), public.friend_remove(text), public.friends_list(),
  public.inbox_send(text, text, jsonb), public.inbox_list(), public.inbox_seen(bigint[]), public.inbox_delete(bigint) to authenticated;
