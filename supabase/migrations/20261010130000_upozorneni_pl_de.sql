-- Pawkur 3.5: upozornění (push) i polsky a německy.
-- Dřív server znal jen češtinu a angličtinu a cokoli jiného uložil jako češtinu; aplikace proto polsky a německy
-- posílala angličtinu. Teď push_subs.lang bere cs, en, pl a de a všechny zprávy mají polskou a německou verzi.
-- Těla funkcí jsou z 20261009090000_trojka.sql a 20261009190000_kalendar_treninky.sql (živá verze má stejný obsah,
-- jen jiné odsazení: ověřeno porovnáním md5 bez mezer), měnily se jen výrazy s jazykem.
-- Idempotentní; data nemění. Pořadí nasazení: nejdřív tohle SQL, pak aplikace (ta pak posílá p_lang pl a de).

alter table public.push_subs drop constraint if exists push_subs_lang_check;
alter table public.push_subs add constraint push_subs_lang_check check (lang in ('cs', 'en', 'pl', 'de'));

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
  v_lang text := case when p_lang in ('en', 'pl', 'de') then p_lang else 'cs' end;
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

create or replace function public.push_weekly()
returns int language plpgsql security definer set search_path = public as $$
declare v_wk text := to_char((now() at time zone 'Europe/Prague')::date, 'IYYY-"W"IW'); v_n int;
begin
  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         case s.lang when 'en' then 'New course of the week' when 'pl' then 'Nowy tor tygodnia' when 'de' then 'Neuer Parcours der Woche' else 'Nový parkur týdne' end,
         case s.lang when 'en' then 'Run it and compare yourself on the leaderboard.' when 'pl' then 'Przebiegnij go i porównaj się w rankingu.' when 'de' then 'Lauf ihn und vergleich dich in der Rangliste.' else 'Zaběhni ho a porovnej se v žebříčku.' end,
         './#home', 'week-' || v_wk
  from push_subs s
  where coalesce((s.topics->>'week')::boolean, true)
    and not exists (select 1 from push_queue q where q.sub_id = s.id and q.tag = 'week-' || v_wk);
  get diagnostics v_n = row_count;
  return v_n;
end $$;

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
         case s.lang when 'en' then 'New course in ' when 'pl' then 'Nowy tor w grupie ' when 'de' then 'Neuer Parcours in der Gruppe ' else 'Nový parkur ve skupině ' end || g.name,
         v_name || ' · ' || case when v_day = (now() at time zone 'Europe/Prague')::date then (case s.lang when 'en' then 'today' when 'pl' then 'dziś' when 'de' then 'heute' else 'dnes' end)
                                 when v_day = (now() at time zone 'Europe/Prague')::date + 1 then (case s.lang when 'en' then 'tomorrow' when 'pl' then 'jutro' when 'de' then 'morgen' else 'zítra' end)
                                 else to_char(v_day, 'FMDD. FMMM.') end || coalesce(' · ' || nullif(v_me, ''), ''),
         './#home', 'group-' || v_id
  from group_members m join push_subs s on s.user_id = m.user_id
  where m.group_id = p_id and m.user_id <> uid and coalesce((s.topics->>'group')::boolean, true);
  return v_id;
end $$;

create or replace function public.push_daily()
returns int language plpgsql security definer set search_path = public as $$
declare v_tom date := (now() at time zone 'Europe/Prague')::date + 1; v_n int; v_m int; v_k int;
begin
  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         case s.lang when 'en' then 'Competition tomorrow' when 'pl' then 'Jutro zawody' when 'de' then 'Morgen ist Turnier' else 'Zítra závodíš' end,
         s.comp_name || case s.lang when 'en' then ' · check the list of things to pack' when 'pl' then ' · sprawdź, co zabrać' when 'de' then ' · prüf, was du mitnimmst' else ' · zkontroluj si, co s sebou' end,
         './#home', 'comp-' || to_char(v_tom, 'YYYYMMDD')
  from push_subs s
  where s.comp_day = v_tom and coalesce((s.topics->>'comp')::boolean, true)
    and not exists (select 1 from push_queue q where q.sub_id = s.id and q.tag = 'comp-' || to_char(v_tom, 'YYYYMMDD'));
  get diagnostics v_n = row_count;

  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         case s.lang when 'en' then 'Entries close tomorrow' when 'pl' then 'Jutro koniec zgłoszeń' when 'de' then 'Morgen ist Meldeschluss' else 'Zítra končí přihlášky' end,
         left(coalesce(nullif(w->>'n', ''), 'kacr.info') || case s.lang when 'en' then ' · enter on kacr.info' when 'pl' then ' · zgłoś się na kacr.info' when 'de' then ' · melde dich auf kacr.info an' else ' · přihlas se na kacr.info' end, 200),
         './#home', 'dl-' || (w->>'id')
  from push_subs s cross join lateral jsonb_array_elements(s.watch) w
  where coalesce((s.topics->>'comp')::boolean, true) and date_or_null(w->>'dl') = v_tom
    and not exists (select 1 from push_queue q where q.sub_id = s.id and q.tag = 'dl-' || (w->>'id'));
  get diagnostics v_m = row_count;

  insert into push_queue (sub_id, title, body, url, tag)
  select s.id,
         left(case s.lang when 'en' then 'Training tomorrow · ' when 'pl' then 'Jutro trening · ' when 'de' then 'Morgen Training · ' else 'Zítra trénink · ' end || g.name, 80),
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
         left(case s.lang when 'en' then 'Training · ' when 'pl' then 'Trening · ' when 'de' then 'Training · ' else 'Trénink · ' end || g.name, 80),
         left(to_char(p_at at time zone tz_safe(s.tz), case when s.lang = 'en' then 'FMDD Mon, HH24:MI' else 'FMDD. FMMM. HH24:MI' end)
              || coalesce(' · ' || nullif(v_place, ''), '') || coalesce(' · ' || nullif(v_me, ''), ''), 200),
         './#home', 'ev-' || v_id
  from group_members m join push_subs s on s.user_id = m.user_id
  where m.group_id = p_gid and m.user_id <> uid and coalesce((s.topics->>'group')::boolean, true);
  return v_id;
end $$;

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
           left(case s.lang when 'en' then 'Training cancelled · ' when 'pl' then 'Trening odwołany · ' when 'de' then 'Training abgesagt · ' else 'Trénink zrušen · ' end || g.name, 80),
           left(to_char(e.at at time zone tz_safe(s.tz), case when s.lang = 'en' then 'FMDD Mon, HH24:MI' else 'FMDD. FMMM. HH24:MI' end)
                || coalesce(' · ' || nullif(e.place, ''), ''), 200),
           './#home', 'evx-' || e.id
    from group_event_rsvp r join push_subs s on s.user_id = r.user_id
    where r.event_id = e.id and r.status = 'yes' and r.user_id <> uid and coalesce((s.topics->>'group')::boolean, true);
  end if;
  delete from group_events where id = p_eid;
  return true;
end $$;
