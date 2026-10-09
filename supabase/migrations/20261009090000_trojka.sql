-- Trojka: galerie parkurů (náhledy, Moje), skupiny s trenérem a upozornění (web push).
-- Spuštěno 9. 10. 2026 na projektu wtjyjknaibsamgczvaxy přes MCP execute_sql (po čtyřech blocích). Idempotentní, jde pustit opakovaně.
-- Tabulky jsou zamčené (RLS bez politik); aplikace jde jen přes funkce níž (SECURITY DEFINER).

-- =========================================================================================
-- 1) GALERIE: náhled parkuru (malý obrázek v seznamu bez stahování celého parkuru), řazení „mine“ = moje zveřejněné
-- =========================================================================================
alter table public.shared_courses add column if not exists thumb jsonb;
alter table public.shared_courses drop constraint if exists shared_courses_thumb_size;
alter table public.shared_courses add constraint shared_courses_thumb_size check (thumb is null or pg_column_size(thumb) < 4000);

create or replace function public.gallery_publish(p_code text, p_country text, p_judge text, p_len numeric, p_n int, p_sport text, p_thumb jsonb)
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
  if p_thumb is not null and (jsonb_typeof(p_thumb) <> 'object' or pg_column_size(p_thumb) >= 4000) then raise exception 'neplatný náhled'; end if;
  select user_id into v_owner from shared_courses where code = v_code;
  if not found then raise exception 'parkur nenalezen'; end if;
  if v_owner is not null and v_owner <> uid then raise exception 'cizí parkur'; end if;
  select count(*) into v_cnt from shared_courses where user_id = uid and pub and created_at > now() - interval '1 day';
  if v_cnt >= 20 then raise exception 'příliš mnoho zveřejnění'; end if;
  update shared_courses set pub = true, user_id = uid, country = v_country, judge = v_judge,
    len = case when p_len between 0 and 999 then round(p_len, 1) else null end,
    n = case when p_n between 0 and 99 then p_n else null end, sport = v_sport, thumb = p_thumb
  where code = v_code;
  return true;
end $$;

create or replace function public.gallery_publish(p_code text, p_country text, p_judge text, p_len numeric, p_n int, p_sport text)
returns boolean language sql security definer set search_path = public as $$
  select public.gallery_publish(p_code, p_country, p_judge, p_len, p_n, p_sport, null::jsonb);
$$;

-- výpis: třída (nebo null = vše), země (nebo null), disciplína, hledaný text (název, autor, rozhodčí),
-- řazení new | top | popular | mine (jen moje zveřejněné, i nahlášené), stránka po 30; nahlášené 3× se neukazují
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
  if v_sort not in ('new', 'top', 'popular', 'mine') then raise exception 'neplatné řazení'; end if;
  if v_sort = 'mine' and uid is null then raise exception 'not signed in'; end if;
  with q as (
    select s.code, s.name, s.cls, s.author, s.country, s.judge, s.len, s.n, s.downloads, s.rating_n, s.thumb, s.reports,
           case when s.rating_n > 0 then round(s.rating_sum::numeric / s.rating_n, 1) else null end as rating,
           s.created_at, (uid is not null and s.user_id = uid) as mine,
           (s.rating_sum + 3.5 * 3) / (s.rating_n + 3) as score
    from shared_courses s
    where s.pub and s.sport = v_sport
      and (v_sort = 'mine' or s.reports < 3)
      and (v_sort <> 'mine' or s.user_id = uid)
      and (v_cls is null or s.cls = v_cls)
      and (v_country is null or s.country = v_country)
      and (v_q is null or lower(s.name) like '%' || v_q || '%' or lower(s.author) like '%' || v_q || '%' or lower(s.judge) like '%' || v_q || '%')
  )
  select json_build_object(
    'total', (select count(*) from q),
    'rows', coalesce((select json_agg(json_build_object(
        'code', x.code, 'name', x.name, 'cls', x.cls, 'author', x.author, 'country', x.country, 'judge', x.judge,
        'len', x.len, 'n', x.n, 'downloads', x.downloads, 'rating', x.rating, 'rating_n', x.rating_n, 'at', x.created_at, 'mine', x.mine,
        'thumb', x.thumb, 'hidden', (x.reports >= 3)))
      from (select * from q order by
              case when v_sort = 'top' then score end desc nulls last,
              case when v_sort = 'popular' then downloads end desc nulls last,
              created_at desc
            limit 30 offset v_off) x), '[]'::json)
  ) into r;
  return r;
end $$;

revoke all on function public.gallery_publish(text, text, text, numeric, int, text, jsonb), public.gallery_list(text, text, text, text, text, int) from public, anon;
grant execute on function public.gallery_publish(text, text, text, numeric, int, text, jsonb) to authenticated;
grant execute on function public.gallery_list(text, text, text, text, text, int) to anon, authenticated;

-- =========================================================================================
-- 2) UPOZORNĚNÍ (web push): odběry zařízení, fronta zpráv. Posílá serverová funkce „push“ (klíče VAPID si uloží do app_secret).
--    Témata: group (parkur od skupiny), comp (zítra závod), week (nový parkur týdne). Bez přihlášení jde zařízení podle p_device.
-- =========================================================================================
create table if not exists public.push_subs (
  id         bigserial primary key,
  user_id    uuid references auth.users(id) on delete cascade,
  device     text not null check (device ~ '^[A-Za-z0-9_-]{8,64}$'),
  endpoint   text not null unique check (char_length(endpoint) between 20 and 1000),
  p256dh     text not null check (char_length(p256dh) between 20 and 200),
  auth       text not null check (char_length(auth) between 10 and 100),
  topics     jsonb not null default '{"group": true, "comp": true, "week": true}'::jsonb check (jsonb_typeof(topics) = 'object'),
  lang       text not null default 'cs' check (lang in ('cs', 'en')),
  tz         text not null default '' check (char_length(tz) <= 40),
  comp_day   date,
  comp_name  text not null default '' check (char_length(comp_name) <= 80),
  fails      int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists push_subs_user_idx on public.push_subs (user_id);
create index if not exists push_subs_device_idx on public.push_subs (device);
create table if not exists public.push_queue (
  id         bigserial primary key,
  sub_id     bigint not null references public.push_subs(id) on delete cascade,
  title      text not null check (char_length(title) <= 80),
  body       text not null default '' check (char_length(body) <= 200),
  url        text not null default './' check (char_length(url) <= 200),
  tag        text not null default '' check (char_length(tag) <= 40),
  created_at timestamptz not null default now(),
  sent_at    timestamptz,
  err        text
);
create index if not exists push_queue_unsent_idx on public.push_queue (id) where sent_at is null;
alter table public.push_subs  enable row level security;
alter table public.push_queue enable row level security;
revoke all on table public.push_subs, public.push_queue from anon, authenticated;
revoke all on sequence public.push_subs_id_seq, public.push_queue_id_seq from anon, authenticated;

-- odběr zařízení: nový nebo obnovený (stejný endpoint); přihlášený uživatel se k němu připojí
create or replace function public.push_sub_set(p_device text, p_endpoint text, p_p256dh text, p_auth text, p_topics jsonb, p_lang text, p_tz text)
returns bigint language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_dev text := trim(coalesce(p_device, ''));
  v_ep text := trim(coalesce(p_endpoint, ''));
  v_topics jsonb := jsonb_build_object(
    'group', coalesce((p_topics->>'group')::boolean, true),
    'comp',  coalesce((p_topics->>'comp')::boolean, true),
    'week',  coalesce((p_topics->>'week')::boolean, true));
  v_lang text := case when p_lang = 'en' then 'en' else 'cs' end;
  v_tz text := left(trim(coalesce(p_tz, '')), 40);
  v_id bigint;
begin
  if v_dev !~ '^[A-Za-z0-9_-]{8,64}$' then raise exception 'neplatné zařízení'; end if;
  if v_ep !~ '^https://' or char_length(v_ep) > 1000 then raise exception 'neplatný odběr'; end if;
  if (select count(*) from push_subs where device = v_dev) >= 5 and not exists (select 1 from push_subs where endpoint = v_ep) then
    delete from push_subs where device = v_dev and id in (select id from push_subs where device = v_dev order by updated_at asc limit 1);
  end if;
  insert into push_subs as s (user_id, device, endpoint, p256dh, auth, topics, lang, tz)
  values (uid, v_dev, v_ep, trim(coalesce(p_p256dh, '')), trim(coalesce(p_auth, '')), v_topics, v_lang, v_tz)
  on conflict (endpoint) do update set user_id = coalesce(uid, s.user_id), device = excluded.device, p256dh = excluded.p256dh, auth = excluded.auth,
    topics = excluded.topics, lang = excluded.lang, tz = excluded.tz, fails = 0, updated_at = now()
  returning id into v_id;
  return v_id;
end $$;

create or replace function public.push_sub_del(p_endpoint text)
returns boolean language sql security definer set search_path = public as $$
  delete from push_subs where endpoint = trim(coalesce(p_endpoint, '')) returning true;
$$;

-- nejbližší závod zařízení (aplikace ho zná z kacr.info): den a název; null = žádný
create or replace function public.push_comp_set(p_device text, p_day date, p_name text)
returns void language sql security definer set search_path = public as $$
  update push_subs set comp_day = p_day, comp_name = left(trim(coalesce(p_name, '')), 80), updated_at = now()
  where device = trim(coalesce(p_device, '')) and char_length(trim(coalesce(p_device, ''))) between 8 and 64;
$$;

-- veřejný klíč VAPID (serverová funkce push ho při prvním spuštění uloží do app_secret jako vapid_pub)
create or replace function public.push_pubkey()
returns text language sql stable security definer set search_path = public as $$
  select v from app_secret where k = 'vapid_pub';
$$;

-- zítra závod: zařízením s tématem comp (čas v Praze); volá cron jednou denně
create or replace function public.push_daily()
returns int language plpgsql security definer set search_path = public as $$
declare v_tom date := (now() at time zone 'Europe/Prague')::date + 1; v_n int;
begin
  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         case when s.lang = 'en' then 'Competition tomorrow' else 'Zítra závodíš' end,
         case when s.lang = 'en' then s.comp_name || ' · check the list of things to pack' else s.comp_name || ' · zkontroluj si, co s sebou' end,
         './#home', 'comp-' || to_char(v_tom, 'YYYYMMDD')
  from push_subs s
  where s.comp_day = v_tom and coalesce((s.topics->>'comp')::boolean, true)
    and not exists (select 1 from push_queue q where q.sub_id = s.id and q.tag = 'comp-' || to_char(v_tom, 'YYYYMMDD'));
  get diagnostics v_n = row_count;
  delete from push_queue where created_at < now() - interval '7 days';
  return v_n;
end $$;

-- nový parkur týdne: v pondělí ráno zařízením s tématem week
create or replace function public.push_weekly()
returns int language plpgsql security definer set search_path = public as $$
declare v_wk text := to_char((now() at time zone 'Europe/Prague')::date, 'IYYY-"W"IW'); v_n int;
begin
  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         case when s.lang = 'en' then 'New course of the week' else 'Nový parkur týdne' end,
         case when s.lang = 'en' then 'Run it and compare yourself on the leaderboard.' else 'Zaběhni ho a porovnej se v žebříčku.' end,
         './#home', 'week-' || v_wk
  from push_subs s
  where coalesce((s.topics->>'week')::boolean, true)
    and not exists (select 1 from push_queue q where q.sub_id = s.id and q.tag = 'week-' || v_wk);
  get diagnostics v_n = row_count;
  return v_n;
end $$;

revoke all on function public.push_sub_set(text, text, text, text, jsonb, text, text), public.push_sub_del(text), public.push_comp_set(text, date, text),
  public.push_pubkey(), public.push_daily(), public.push_weekly() from public, anon;
grant execute on function public.push_sub_set(text, text, text, text, jsonb, text, text), public.push_sub_del(text), public.push_comp_set(text, date, text),
  public.push_pubkey() to anon, authenticated;

-- =========================================================================================
-- 3) SKUPINY: trenér založí skupinu, lidé se přidají kódem, parkur poslaný skupině se ukáže členům na Domů (Dnes),
--    jejich běhy se sejdou v žebříčku parkuru. Jen přihlášení. Jméno člena je z účtu Google (jde přepsat).
-- =========================================================================================
create table if not exists public.groups (
  id         bigserial primary key,
  code       text not null unique check (code ~ '^[A-Z0-9]{6}$'),
  name       text not null check (char_length(name) between 2 and 40),
  owner      uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.group_members (
  group_id   bigint not null references public.groups(id) on delete cascade,
  user_id    uuid not null references auth.users(id) on delete cascade,
  name       text not null default '' check (char_length(name) <= 40),
  role       text not null default 'member' check (role in ('trainer', 'member')),
  joined_at  timestamptz not null default now(),
  primary key (group_id, user_id)
);
create index if not exists group_members_user_idx on public.group_members (user_id);
create table if not exists public.group_courses (
  id         bigserial primary key,
  group_id   bigint not null references public.groups(id) on delete cascade,
  user_id    uuid references auth.users(id) on delete set null,
  name       text not null check (char_length(name) between 1 and 80),
  cls        text not null default '' check (char_length(cls) <= 4),
  author     text not null default '' check (char_length(author) <= 80),
  data       jsonb not null check (jsonb_typeof(data) = 'object' and pg_column_size(data) < 60000),
  thumb      jsonb check (thumb is null or pg_column_size(thumb) < 4000),
  day        date not null default current_date,
  note       text not null default '' check (char_length(note) <= 200),
  created_at timestamptz not null default now()
);
alter table public.group_courses add column if not exists thumb jsonb;
create index if not exists group_courses_gid_idx on public.group_courses (group_id, day desc, created_at desc);
create table if not exists public.group_runs (
  course_id  bigint not null references public.group_courses(id) on delete cascade,
  user_id    uuid not null references auth.users(id) on delete cascade,
  dog        text not null default '' check (char_length(dog) <= 40),
  size       text not null default '' check (char_length(size) <= 3),
  t          numeric(7,2) check (t is null or t between 0 and 999),
  pen        numeric(6,2) not null default 0 check (pen between 0 and 999),
  g          text not null default '' check (char_length(g) <= 3),
  f          int not null default 0 check (f between 0 and 99),
  r          int not null default 0 check (r between 0 and 99),
  updated_at timestamptz not null default now(),
  primary key (course_id, user_id, dog)
);
alter table public.groups        enable row level security;
alter table public.group_members enable row level security;
alter table public.group_courses enable row level security;
alter table public.group_runs    enable row level security;
revoke all on table public.groups, public.group_members, public.group_courses, public.group_runs from anon, authenticated;
revoke all on sequence public.groups_id_seq, public.group_courses_id_seq from anon, authenticated;

-- jméno z účtu Google (user_metadata), jinak začátek e-mailu
create or replace function public.group_my_name()
returns text language sql stable security definer set search_path = public as $$
  select left(trim(regexp_replace(coalesce(
    nullif(auth.jwt() -> 'user_metadata' ->> 'full_name', ''), nullif(auth.jwt() -> 'user_metadata' ->> 'name', ''),
    split_part(coalesce(auth.jwt() ->> 'email', ''), '@', 1), 'člen'), '[[:cntrl:]]', '', 'g')), 40);
$$;
create or replace function public.group_role(p_id bigint)
returns text language sql stable security definer set search_path = public as $$
  select role from group_members where group_id = p_id and user_id = auth.uid();
$$;

create or replace function public.group_create(p_name text)
returns json language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_name text := left(trim(regexp_replace(regexp_replace(coalesce(p_name, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g')), 40);
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  c text; i int; tries int := 0; g groups%rowtype;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if char_length(v_name) < 2 then raise exception 'krátký název'; end if;
  if (select count(*) from groups where owner = uid) >= 10 then raise exception 'příliš mnoho skupin'; end if;
  loop
    c := ''; for i in 1..6 loop c := c || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1); end loop;
    begin
      insert into groups (code, name, owner) values (c, v_name, uid) returning * into g;
      exit;
    exception when unique_violation then tries := tries + 1; if tries > 5 then raise; end if;
    end;
  end loop;
  insert into group_members (group_id, user_id, name, role) values (g.id, uid, group_my_name(), 'trainer');
  return json_build_object('id', g.id, 'code', g.code, 'name', g.name, 'role', 'trainer', 'members', 1);
end $$;

create or replace function public.group_join(p_code text)
returns json language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_code text := upper(trim(coalesce(p_code, ''))); g groups%rowtype; v_n int;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if v_code !~ '^[A-Z0-9]{6}$' then raise exception 'neplatný kód'; end if;
  select * into g from groups where code = v_code;
  if not found then raise exception 'skupina nenalezena'; end if;
  select count(*) into v_n from group_members where group_id = g.id;
  if v_n >= 100 and not exists (select 1 from group_members where group_id = g.id and user_id = uid) then raise exception 'skupina je plná'; end if;
  if (select count(*) from group_members where user_id = uid) >= 20 then raise exception 'příliš mnoho skupin'; end if;
  insert into group_members (group_id, user_id, name, role) values (g.id, uid, group_my_name(), 'member') on conflict (group_id, user_id) do nothing;
  return json_build_object('id', g.id, 'code', g.code, 'name', g.name, 'role', group_role(g.id), 'members', (select count(*) from group_members where group_id = g.id));
end $$;

create or replace function public.group_leave(p_id bigint)
returns boolean language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not signed in'; end if;
  if exists (select 1 from groups where id = p_id and owner = uid) then raise exception 'zakladatel skupinu smaže, odejít nemůže'; end if;
  delete from group_members where group_id = p_id and user_id = uid;
  return found;
end $$;

create or replace function public.group_delete(p_id bigint)
returns boolean language sql security definer set search_path = public as $$
  delete from groups where id = p_id and owner = auth.uid() returning true;
$$;

create or replace function public.group_rename(p_id bigint, p_name text)
returns boolean language sql security definer set search_path = public as $$
  update groups set name = left(trim(regexp_replace(regexp_replace(coalesce(p_name, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g')), 40)
  where id = p_id and owner = auth.uid() and char_length(trim(coalesce(p_name, ''))) >= 2 returning true;
$$;

-- vyhodit člena (zakladatel) nebo povýšit na trenéra / zpět
create or replace function public.group_member_set(p_id bigint, p_user uuid, p_role text)
returns boolean language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not signed in'; end if;
  if not exists (select 1 from groups where id = p_id and owner = uid) then raise exception 'jen zakladatel'; end if;
  if p_user = uid then raise exception 'to jsi ty'; end if;
  if p_role = 'out' then delete from group_members where group_id = p_id and user_id = p_user; return found; end if;
  if p_role not in ('trainer', 'member') then raise exception 'neplatná role'; end if;
  update group_members set role = p_role where group_id = p_id and user_id = p_user;
  return found;
end $$;

-- moje jméno ve všech skupinách
create or replace function public.group_my_name_set(p_name text)
returns text language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_name text := left(trim(regexp_replace(regexp_replace(coalesce(p_name, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g')), 40);
begin
  if uid is null then raise exception 'not signed in'; end if;
  if char_length(v_name) < 1 then v_name := group_my_name(); end if;
  update group_members set name = v_name where user_id = uid;
  return v_name;
end $$;

create or replace function public.group_list()
returns json language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object(
    'id', g.id, 'code', g.code, 'name', g.name, 'role', m.role, 'owner', (g.owner = auth.uid()), 'me', m.name,
    'members', (select count(*) from group_members x where x.group_id = g.id),
    'courses', (select count(*) from group_courses c where c.group_id = g.id),
    'last', (select max(c.day) from group_courses c where c.group_id = g.id)) order by g.name),
  '[]'::json)
  from group_members m join groups g on g.id = m.group_id where m.user_id = auth.uid();
$$;

-- skupina s členy a parkury (nejnovějších 50): u parkuru počet běhů a jestli jsem už běžel/a
create or replace function public.group_detail(p_id bigint)
returns json language plpgsql stable security definer set search_path = public as $$
declare uid uuid := auth.uid(); g groups%rowtype; r json;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select * into g from groups where id = p_id;
  if not found or not exists (select 1 from group_members where group_id = p_id and user_id = uid) then raise exception 'skupina nenalezena'; end if;
  select json_build_object(
    'id', g.id, 'code', g.code, 'name', g.name, 'role', group_role(g.id), 'owner', (g.owner = uid),
    'members', coalesce((select json_agg(json_build_object('uid', m.user_id, 'name', m.name, 'role', m.role, 'me', (m.user_id = uid), 'since', m.joined_at) order by m.role, m.name)
                 from group_members m where m.group_id = g.id), '[]'::json),
    'courses', coalesce((select json_agg(json_build_object('id', c.id, 'name', c.name, 'cls', c.cls, 'author', c.author, 'day', c.day, 'note', c.note, 'thumb', c.thumb,
                   'by', (select name from group_members m where m.group_id = g.id and m.user_id = c.user_id), 'mine', (c.user_id = uid),
                   'runs', (select count(*) from group_runs x where x.course_id = c.id),
                   'ran', exists (select 1 from group_runs x where x.course_id = c.id and x.user_id = uid)) order by c.day desc, c.created_at desc)
                 from (select * from group_courses where group_id = g.id order by day desc, created_at desc limit 50) c), '[]'::json)
  ) into r;
  return r;
end $$;

-- parkur pro skupinu (kdokoli ze skupiny; nejvýš 20 za den); členům s odběrem se zařadí upozornění. p_thumb = malý náhled do seznamu
create or replace function public.group_post(p_id bigint, p_name text, p_cls text, p_author text, p_data jsonb, p_day date, p_note text, p_thumb jsonb default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_name text := left(coalesce(nullif(trim(regexp_replace(coalesce(p_name, ''), '[[:cntrl:]]', '', 'g')), ''), 'Parkur'), 80);
  v_note text := left(trim(regexp_replace(coalesce(p_note, ''), '[[:cntrl:]]', '', 'g')), 200);
  v_day date := coalesce(p_day, (now() at time zone 'Europe/Prague')::date);
  v_id bigint; g groups%rowtype; v_me text;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select * into g from groups where id = p_id;
  if not found or not exists (select 1 from group_members where group_id = p_id and user_id = uid) then raise exception 'skupina nenalezena'; end if;
  if p_data is null or jsonb_typeof(p_data) <> 'object' or pg_column_size(p_data) >= 60000 then raise exception 'neplatný parkur'; end if;
  if (select count(*) from group_courses where user_id = uid and created_at > now() - interval '1 day') >= 20 then raise exception 'příliš mnoho parkurů'; end if;
  if p_thumb is not null and (jsonb_typeof(p_thumb) <> 'object' or pg_column_size(p_thumb) >= 4000) then raise exception 'neplatný náhled'; end if;
  insert into group_courses (group_id, user_id, name, cls, author, data, thumb, day, note)
  values (p_id, uid, v_name, left(coalesce(p_cls, ''), 4), left(coalesce(p_author, ''), 80), p_data, p_thumb, v_day, v_note) returning id into v_id;
  select name into v_me from group_members where group_id = p_id and user_id = uid;
  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         case when s.lang = 'en' then 'New course in ' || g.name else 'Nový parkur ve skupině ' || g.name end,
         v_name || ' · ' || case when v_day = (now() at time zone 'Europe/Prague')::date then (case when s.lang = 'en' then 'today' else 'dnes' end)
                                 when v_day = (now() at time zone 'Europe/Prague')::date + 1 then (case when s.lang = 'en' then 'tomorrow' else 'zítra' end)
                                 else to_char(v_day, 'FMDD. FMMM.') end || coalesce(' · ' || nullif(v_me, ''), ''),
         './#home', 'group-' || v_id
  from group_members m join push_subs s on s.user_id = m.user_id
  where m.group_id = p_id and m.user_id <> uid and coalesce((s.topics->>'group')::boolean, true);
  return v_id;
end $$;

create or replace function public.group_course_get(p_cid bigint)
returns json language sql stable security definer set search_path = public as $$
  select json_build_object('id', c.id, 'gid', c.group_id, 'name', c.name, 'cls', c.cls, 'author', c.author, 'data', c.data, 'day', c.day, 'note', c.note)
  from group_courses c where c.id = p_cid and exists (select 1 from group_members m where m.group_id = c.group_id and m.user_id = auth.uid());
$$;

create or replace function public.group_course_delete(p_cid bigint)
returns boolean language sql security definer set search_path = public as $$
  delete from group_courses c where c.id = p_cid
    and (c.user_id = auth.uid() or exists (select 1 from groups g where g.id = c.group_id and g.owner = auth.uid())
         or exists (select 1 from group_members m where m.group_id = c.group_id and m.user_id = auth.uid() and m.role = 'trainer'))
  returning true;
$$;

-- můj běh parkuru skupiny (jeden na psa; další zápis přepíše)
create or replace function public.group_run_put(p_cid bigint, p_dog text, p_size text, p_t numeric, p_pen numeric, p_g text, p_f int, p_r int)
returns boolean language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not signed in'; end if;
  if not exists (select 1 from group_courses c join group_members m on m.group_id = c.group_id where c.id = p_cid and m.user_id = uid) then raise exception 'parkur nenalezen'; end if;
  insert into group_runs (course_id, user_id, dog, size, t, pen, g, f, r)
  values (p_cid, uid, left(trim(coalesce(p_dog, '')), 40), left(trim(coalesce(p_size, '')), 3),
          case when p_t between 0 and 999 then round(p_t, 2) else null end, case when p_pen between 0 and 999 then round(p_pen, 2) else 0 end,
          left(coalesce(p_g, ''), 3), least(99, greatest(0, coalesce(p_f, 0))), least(99, greatest(0, coalesce(p_r, 0))))
  on conflict (course_id, user_id, dog) do update set size = excluded.size, t = excluded.t, pen = excluded.pen, g = excluded.g, f = excluded.f, r = excluded.r, updated_at = now();
  return true;
end $$;

-- žebříček parkuru skupiny: nejmíň trestných bodů, pak čas; diskvalifikace dole
create or replace function public.group_board(p_cid bigint)
returns json language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object('name', m.name, 'dog', r.dog, 'size', r.size, 't', r.t, 'pen', r.pen, 'g', r.g, 'f', r.f, 'r', r.r, 'me', (r.user_id = auth.uid()), 'at', r.updated_at)
           order by (r.g = 'DIS'), r.pen, r.t nulls last), '[]'::json)
  from group_runs r join group_courses c on c.id = r.course_id
  join group_members m on m.group_id = c.group_id and m.user_id = r.user_id
  where r.course_id = p_cid and exists (select 1 from group_members x where x.group_id = c.group_id and x.user_id = auth.uid());
$$;

-- Dnes na Domů: parkury mých skupin od včerejška do týdne dopředu (bez dat, ta se stáhnou až při otevření)
create or replace function public.group_today()
returns json language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object('gid', g.id, 'gname', g.name, 'id', c.id, 'name', c.name, 'cls', c.cls, 'day', c.day, 'note', c.note, 'thumb', c.thumb,
           'by', (select name from group_members x where x.group_id = g.id and x.user_id = c.user_id),
           'runs', (select count(*) from group_runs x where x.course_id = c.id),
           'ran', exists (select 1 from group_runs x where x.course_id = c.id and x.user_id = auth.uid())) order by c.day, c.created_at), '[]'::json)
  from group_members m join groups g on g.id = m.group_id join group_courses c on c.group_id = g.id
  where m.user_id = auth.uid() and c.day between (now() at time zone 'Europe/Prague')::date - 1 and (now() at time zone 'Europe/Prague')::date + 7;
$$;

revoke all on function public.group_my_name(), public.group_role(bigint), public.group_create(text), public.group_join(text), public.group_leave(bigint),
  public.group_delete(bigint), public.group_rename(bigint, text), public.group_member_set(bigint, uuid, text), public.group_my_name_set(text),
  public.group_list(), public.group_detail(bigint), public.group_post(bigint, text, text, text, jsonb, date, text, jsonb), public.group_course_get(bigint),
  public.group_course_delete(bigint), public.group_run_put(bigint, text, text, numeric, numeric, text, int, int), public.group_board(bigint), public.group_today() from public, anon;
grant execute on function public.group_create(text), public.group_join(text), public.group_leave(bigint), public.group_delete(bigint), public.group_rename(bigint, text),
  public.group_member_set(bigint, uuid, text), public.group_my_name_set(text), public.group_list(), public.group_detail(bigint),
  public.group_post(bigint, text, text, text, jsonb, date, text, jsonb), public.group_course_get(bigint), public.group_course_delete(bigint),
  public.group_run_put(bigint, text, text, numeric, numeric, text, int, int), public.group_board(bigint), public.group_today() to authenticated;

-- =========================================================================================
-- 4) CRON: odeslání fronty každých 5 minut (serverová funkce push), „zítra závod“ denně v 17:00 UTC (18/19 h v Praze),
--    „nový parkur týdne“ v pondělí 6:00 UTC (8 h v létě). Rozšíření pg_cron a pg_net jsou v Supabase k dispozici.
-- =========================================================================================
create extension if not exists pg_cron;
create extension if not exists pg_net;

-- zavolá serverovou funkci jen když je ve frontě něco neodeslaného (anon klíč je veřejný, funkce sama nic neprozradí)
create or replace function public.push_flush_call()
returns void language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from push_queue where sent_at is null) then return; end if;
  perform net.http_post(
    url := 'https://wtjyjknaibsamgczvaxy.supabase.co/functions/v1/push',
    body := '{"job":"flush"}'::jsonb,
    headers := '{"Content-Type":"application/json","apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0anlqa25haWJzYW1nY3p2YXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MDA1NjAsImV4cCI6MjEwNjE3NjU2MH0.kV8UN9xQFKqTNcnY9B81-wWrnM5nWXUPnzcCTHVIMZc","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0anlqa25haWJzYW1nY3p2YXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MDA1NjAsImV4cCI6MjEwNjE3NjU2MH0.kV8UN9xQFKqTNcnY9B81-wWrnM5nWXUPnzcCTHVIMZc"}'::jsonb,
    timeout_milliseconds := 20000);
end $$;
revoke all on function public.push_flush_call() from public, anon, authenticated;

select cron.schedule('pawkur-push-flush', '*/5 * * * *', $$select public.push_flush_call()$$);
select cron.schedule('pawkur-push-daily', '0 17 * * *', $$select public.push_daily(); select public.push_flush_call()$$);
select cron.schedule('pawkur-push-weekly', '0 6 * * 1', $$select public.push_weekly(); select public.push_flush_call()$$);
