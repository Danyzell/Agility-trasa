-- Pawkur 3.1: kalendář závodů (závody s hvězdičkou Chci jet a připomenutí uzávěrky přihlášek) a společné tréninky ve skupině.
-- Spouští se ručně v Supabase (SQL editor nebo MCP). Navazuje na 20261009090000_trojka.sql (push_subs, push_queue, skupiny, cron).

-- =========================================================================================
-- 0) POMOCNÉ FUNKCE
-- =========================================================================================
-- text 'RRRR-MM-DD' na datum, jinak null (neplatné datum ani jiný formát nevyhodí chybu)
create or replace function public.date_or_null(p text)
returns date language plpgsql immutable set search_path = public as $$
begin
  if p is null or p !~ '^\d{4}-\d{2}-\d{2}$' then return null; end if;
  return p::date;
exception when others then return null;
end $$;

-- časové pásmo zařízení pro text upozornění; neznámé nebo prázdné = Praha
create or replace function public.tz_safe(p text)
returns text language plpgsql stable set search_path = public as $$
begin
  if p is null or p = '' then return 'Europe/Prague'; end if;
  perform now() at time zone p;
  return p;
exception when others then return 'Europe/Prague';
end $$;

-- =========================================================================================
-- 1) ZÁVODY S HVĚZDIČKOU: aplikace pošle závody, kam chce člověk jet (id z kacr.info, název, uzávěrka přihlášek, den závodu).
--    Den před uzávěrkou přijde „Zítra končí přihlášky“ (téma comp). Den před závodem posílá push_daily jako dřív
--    (aplikace do comp_day dá nejbližší závod s přihlášeným psem nebo s hvězdičkou).
-- =========================================================================================
alter table public.push_subs add column if not exists watch jsonb not null default '[]'::jsonb;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'push_subs_watch_ok') then
    alter table public.push_subs add constraint push_subs_watch_ok check (jsonb_typeof(watch) = 'array' and pg_column_size(watch) < 8000);
  end if;
end $$;

create or replace function public.push_watch_set(p_device text, p_watch jsonb)
returns int language plpgsql security definer set search_path = public as $$
declare v_dev text := trim(coalesce(p_device, '')); v jsonb := '[]'::jsonb; w jsonb; n int := 0;
begin
  if v_dev !~ '^[A-Za-z0-9_-]{8,64}$' then raise exception 'neplatné zařízení'; end if;
  if p_watch is not null and jsonb_typeof(p_watch) = 'array' then
    for w in select value from jsonb_array_elements(p_watch) limit 30 loop
      if jsonb_typeof(w) = 'object' and coalesce(w->>'id', '') ~ '^[0-9]{1,9}$' then
        v := v || jsonb_build_array(jsonb_build_object(
          'id', (w->>'id')::int,
          'n', left(trim(regexp_replace(coalesce(w->>'n', ''), '[[:cntrl:]]', '', 'g')), 80),
          'dl', to_char(date_or_null(w->>'dl'), 'YYYY-MM-DD'),
          'd', to_char(date_or_null(w->>'d'), 'YYYY-MM-DD')));
        n := n + 1;
      end if;
    end loop;
  end if;
  update push_subs set watch = v, updated_at = now() where device = v_dev;
  return n;
end $$;

-- =========================================================================================
-- 2) SPOLEČNÉ TRÉNINKY VE SKUPINĚ: kdokoli ze skupiny vypíše trénink (kdy, kde, parkur skupiny, poznámka),
--    ostatní odpoví Přijdu / Nepřijdu. Členům přijde upozornění, den předem připomenutí (kromě Nepřijdu),
--    při zrušení upozornění těm, kdo psali Přijdu. Vidí jen členové skupiny.
-- =========================================================================================
create table if not exists public.group_events (
  id         bigserial primary key,
  group_id   bigint not null references public.groups(id) on delete cascade,
  user_id    uuid references auth.users(id) on delete set null,
  at         timestamptz not null,
  place      text not null default '' check (char_length(place) <= 80),
  course_id  bigint references public.group_courses(id) on delete set null,
  note       text not null default '' check (char_length(note) <= 200),
  created_at timestamptz not null default now()
);
create index if not exists group_events_gid_at_idx on public.group_events (group_id, at);
create table if not exists public.group_event_rsvp (
  event_id   bigint not null references public.group_events(id) on delete cascade,
  user_id    uuid not null references auth.users(id) on delete cascade,
  status     text not null check (status in ('yes', 'no')),
  updated_at timestamptz not null default now(),
  primary key (event_id, user_id)
);
create index if not exists group_event_rsvp_user_idx on public.group_event_rsvp (user_id);
alter table public.group_events     enable row level security;
alter table public.group_event_rsvp enable row level security;
revoke all on table public.group_events, public.group_event_rsvp from anon, authenticated;
revoke all on sequence public.group_events_id_seq from anon, authenticated;

-- trénink pro aplikaci: kdo přijde (jména ze skupiny), kolik nepřijde, můj stav, parkur skupiny
create or replace function public.group_event_json(e public.group_events, uid uuid)
returns json language sql stable security definer set search_path = public as $$
  select json_build_object('id', e.id, 'gid', e.group_id, 'gname', (select g.name from groups g where g.id = e.group_id),
    'at', e.at, 'place', e.place, 'note', e.note, 'cid', e.course_id,
    'cname', (select c.name from group_courses c where c.id = e.course_id),
    'cthumb', (select c.thumb from group_courses c where c.id = e.course_id),
    'by', (select m.name from group_members m where m.group_id = e.group_id and m.user_id = e.user_id), 'mine', (e.user_id = uid),
    'yes', coalesce((select json_agg(m.name order by r.updated_at) from group_event_rsvp r
                     join group_members m on m.group_id = e.group_id and m.user_id = r.user_id
                     where r.event_id = e.id and r.status = 'yes'), '[]'::json),
    'no', (select count(*) from group_event_rsvp r where r.event_id = e.id and r.status = 'no'),
    'my', (select r.status from group_event_rsvp r where r.event_id = e.id and r.user_id = uid));
$$;

-- vypsat (p_eid null) nebo upravit trénink (upravit může ten, kdo ho vypsal, zakladatel a trenér)
create or replace function public.group_event_put(p_gid bigint, p_at timestamptz, p_place text, p_cid bigint, p_note text, p_eid bigint default null)
returns bigint language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_place text := left(trim(regexp_replace(regexp_replace(coalesce(p_place, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g')), 80);
  v_note text := left(trim(regexp_replace(coalesce(p_note, ''), '[[:cntrl:]]', '', 'g')), 200);
  g groups%rowtype; e group_events%rowtype; v_id bigint; v_me text;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select * into g from groups where id = p_gid;
  if not found or not exists (select 1 from group_members where group_id = p_gid and user_id = uid) then raise exception 'skupina nenalezena'; end if;
  if p_at is null or p_at < now() - interval '1 hour' or p_at > now() + interval '180 days' then raise exception 'neplatný čas'; end if;
  if p_cid is not null and not exists (select 1 from group_courses where id = p_cid and group_id = p_gid) then raise exception 'parkur nenalezen'; end if;
  if p_eid is not null then
    select * into e from group_events where id = p_eid and group_id = p_gid;
    if not found then raise exception 'trénink nenalezen'; end if;
    if e.user_id is distinct from uid and g.owner <> uid and group_role(p_gid) is distinct from 'trainer' then raise exception 'upravit může jen ten, kdo trénink vypsal, nebo trenér'; end if;
    update group_events set at = p_at, place = v_place, course_id = p_cid, note = v_note where id = p_eid;
    return p_eid;
  end if;
  if (select count(*) from group_events where user_id = uid and created_at > now() - interval '1 day') >= 10 then raise exception 'příliš mnoho tréninků'; end if;
  insert into group_events (group_id, user_id, at, place, course_id, note) values (p_gid, uid, p_at, v_place, p_cid, v_note) returning id into v_id;
  insert into group_event_rsvp (event_id, user_id, status) values (v_id, uid, 'yes');
  select name into v_me from group_members where group_id = p_gid and user_id = uid;
  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         left(case when s.lang = 'en' then 'Training · ' else 'Trénink · ' end || g.name, 80),
         left(to_char(p_at at time zone tz_safe(s.tz), case when s.lang = 'en' then 'FMDD Mon, HH24:MI' else 'FMDD. FMMM. HH24:MI' end)
              || coalesce(' · ' || nullif(v_place, ''), '') || coalesce(' · ' || nullif(v_me, ''), ''), 200),
         './#home', 'ev-' || v_id
  from group_members m join push_subs s on s.user_id = m.user_id
  where m.group_id = p_gid and m.user_id <> uid and coalesce((s.topics->>'group')::boolean, true);
  return v_id;
end $$;

-- Přijdu ('yes') / Nepřijdu ('no') / bez odpovědi (cokoli jiného); vrací trénink se jmény
create or replace function public.group_event_rsvp(p_eid bigint, p_status text)
returns json language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); e group_events%rowtype;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select * into e from group_events where id = p_eid;
  if not found or not exists (select 1 from group_members where group_id = e.group_id and user_id = uid) then raise exception 'trénink nenalezen'; end if;
  if p_status in ('yes', 'no') then
    insert into group_event_rsvp (event_id, user_id, status) values (p_eid, uid, p_status)
    on conflict (event_id, user_id) do update set status = excluded.status, updated_at = now();
  else
    delete from group_event_rsvp where event_id = p_eid and user_id = uid;
  end if;
  return group_event_json(e, uid);
end $$;

-- zrušit trénink (ten, kdo ho vypsal, zakladatel nebo trenér); budoucí trénink ohlásí těm, kdo psali Přijdu
create or replace function public.group_event_delete(p_eid bigint)
returns boolean language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); e group_events%rowtype; g groups%rowtype;
begin
  if uid is null then raise exception 'not signed in'; end if;
  select * into e from group_events where id = p_eid;
  if not found then return false; end if;
  select * into g from groups where id = e.group_id;
  if e.user_id is distinct from uid and g.owner <> uid and group_role(e.group_id) is distinct from 'trainer' then return false; end if;
  if e.at > now() then
    insert into push_queue (sub_id, title, body, url, tag)
    select s.id,
           left(case when s.lang = 'en' then 'Training cancelled · ' else 'Trénink zrušen · ' end || g.name, 80),
           left(to_char(e.at at time zone tz_safe(s.tz), case when s.lang = 'en' then 'FMDD Mon, HH24:MI' else 'FMDD. FMMM. HH24:MI' end)
                || coalesce(' · ' || nullif(e.place, ''), ''), 200),
           './#home', 'evx-' || e.id
    from group_event_rsvp r join push_subs s on s.user_id = r.user_id
    where r.event_id = e.id and r.status = 'yes' and r.user_id <> uid and coalesce((s.topics->>'group')::boolean, true);
  end if;
  delete from group_events where id = p_eid;
  return true;
end $$;

-- nadcházející tréninky skupiny (i ty, které začaly před méně než 3 hodinami)
create or replace function public.group_events_list(p_gid bigint)
returns json language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(group_event_json(e, auth.uid()) order by e.at), '[]'::json)
  from group_events e
  where e.group_id = p_gid and e.at > now() - interval '3 hours'
    and exists (select 1 from group_members m where m.group_id = p_gid and m.user_id = auth.uid());
$$;

-- Dnes na Domů: tréninky mých skupin na 8 dní dopředu
create or replace function public.group_events_soon()
returns json language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(group_event_json(e, auth.uid()) order by e.at), '[]'::json)
  from group_events e join group_members m on m.group_id = e.group_id and m.user_id = auth.uid()
  where e.at > now() - interval '3 hours' and e.at < now() + interval '8 days';
$$;

-- =========================================================================================
-- 3) DENNÍ ÚLOHA (cron 17:00 UTC): zítra závodíš (jako dřív), zítra končí přihlášky u závodu s hvězdičkou,
--    zítra trénink skupiny (všem členům kromě Nepřijdu). Staré zprávy a tréninky starší 60 dní se mažou.
-- =========================================================================================
create or replace function public.push_daily()
returns int language plpgsql security definer set search_path = public as $$
declare v_tom date := (now() at time zone 'Europe/Prague')::date + 1; v_n int; v_m int; v_k int;
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

  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         case when s.lang = 'en' then 'Entries close tomorrow' else 'Zítra končí přihlášky' end,
         left(coalesce(nullif(w->>'n', ''), 'kacr.info') || case when s.lang = 'en' then ' · enter on kacr.info' else ' · přihlas se na kacr.info' end, 200),
         './#home', 'dl-' || (w->>'id')
  from push_subs s cross join lateral jsonb_array_elements(s.watch) w
  where coalesce((s.topics->>'comp')::boolean, true) and date_or_null(w->>'dl') = v_tom
    and not exists (select 1 from push_queue q where q.sub_id = s.id and q.tag = 'dl-' || (w->>'id'));
  get diagnostics v_m = row_count;

  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         left(case when s.lang = 'en' then 'Training tomorrow · ' else 'Zítra trénink · ' end || g.name, 80),
         left(to_char(e.at at time zone tz_safe(s.tz), 'HH24:MI') || coalesce(' · ' || nullif(e.place, ''), ''), 200),
         './#home', 'evr-' || e.id
  from group_events e join groups g on g.id = e.group_id
  join group_members m on m.group_id = e.group_id join push_subs s on s.user_id = m.user_id
  where (e.at at time zone 'Europe/Prague')::date = v_tom and coalesce((s.topics->>'group')::boolean, true)
    and not exists (select 1 from group_event_rsvp r where r.event_id = e.id and r.user_id = m.user_id and r.status = 'no')
    and not exists (select 1 from push_queue q where q.sub_id = s.id and q.tag = 'evr-' || e.id);
  get diagnostics v_k = row_count;

  delete from push_queue where created_at < now() - interval '7 days';
  delete from group_events where at < now() - interval '60 days';
  return v_n + v_m + v_k;
end $$;

-- =========================================================================================
-- 4) PRÁVA: pomocné funkce jen pro server, tréninky jen přihlášeným, sledované závody i bez přihlášení (podle zařízení)
-- =========================================================================================
revoke all on function public.date_or_null(text), public.tz_safe(text), public.group_event_json(public.group_events, uuid) from public, anon, authenticated;
revoke all on function public.push_watch_set(text, jsonb), public.group_event_put(bigint, timestamptz, text, bigint, text, bigint),
  public.group_event_rsvp(bigint, text), public.group_event_delete(bigint), public.group_events_list(bigint), public.group_events_soon() from public, anon;
grant execute on function public.push_watch_set(text, jsonb) to anon, authenticated;
grant execute on function public.group_event_put(bigint, timestamptz, text, bigint, text, bigint), public.group_event_rsvp(bigint, text),
  public.group_event_delete(bigint), public.group_events_list(bigint), public.group_events_soon() to authenticated;
