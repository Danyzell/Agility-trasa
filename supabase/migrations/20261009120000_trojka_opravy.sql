-- Trojka: opravy po kontrole serverové části 3.0 (9. 10. 2026). Navazuje na 20261009090000_trojka.sql, které už na produkci běží.
-- Idempotentní (create or replace, add column if not exists, revoke), nic nemaže ani nepřejmenovává; jde pustit opakovaně.
-- Spuštěno 9. 10. 2026 přes MCP execute_sql na projektu wtjyjknaibsamgczvaxy (revoke, pub_at, gallery_publish, group_join, group_rename).

-- =========================================================================================
-- 1) DÍRA (střední): push_daily() a push_weekly() mohl volat každý přihlášený uživatel přes /rest/v1/rpc/.
--    Supabase dává nové funkci ve schématu public výchozí právo EXECUTE pro anon, authenticated i service_role;
--    původní migrace ho odebrala jen rolím public a anon. Přihlášený tak mohl kdykoli zařadit „Nový parkur týdne“
--    všem zařízením s odběrem (jednou za týden navíc k pondělní) a „Zítra závodíš“ poslat mimo plán.
--    Cron běží jako postgres (vlastník funkcí), toho se revoke netýká. group_my_name() a group_role() se volají
--    jen zevnitř jiných funkcí (SECURITY DEFINER), zvenku je nikdo nepotřebuje, tak se také zamknou.
-- =========================================================================================
revoke all on function public.push_daily(), public.push_weekly(), public.push_flush_call(), public.group_my_name(), public.group_role(bigint)
  from public, anon, authenticated;

-- =========================================================================================
-- 2) Limit 20 zveřejnění za den počítal parkury podle data vytvoření kódu (share_course), ne podle zveřejnění:
--    starší kódy šlo zveřejňovat bez omezení. Nový sloupec pub_at (čas zveřejnění) a limit podle něj.
--    Opakované zveřejnění už zveřejněného parkuru (třeba oprava rozhodčího) se nepočítá znovu.
-- =========================================================================================
alter table public.shared_courses add column if not exists pub_at timestamptz;

create or replace function public.gallery_publish(p_code text, p_country text, p_judge text, p_len numeric, p_n int, p_sport text, p_thumb jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  v_code text := upper(trim(coalesce(p_code, '')));
  v_country text := upper(trim(coalesce(p_country, '')));
  v_judge text := left(trim(regexp_replace(regexp_replace(coalesce(p_judge, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g')), 80);
  v_sport text := coalesce(nullif(trim(p_sport), ''), 'agility');
  v_owner uuid; v_pub boolean; v_cnt int;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if v_code !~ '^[A-Z0-9]{6}$' then raise exception 'neplatný kód'; end if;
  if v_country !~ '^[A-Z]{0,3}$' then raise exception 'neplatná země'; end if;
  if v_sport not in ('agility', 'hoopers') then raise exception 'neplatná disciplína'; end if;
  if p_thumb is not null and (jsonb_typeof(p_thumb) <> 'object' or pg_column_size(p_thumb) >= 4000) then raise exception 'neplatný náhled'; end if;
  select user_id, pub into v_owner, v_pub from shared_courses where code = v_code;
  if not found then raise exception 'parkur nenalezen'; end if;
  if v_owner is not null and v_owner <> uid then raise exception 'cizí parkur'; end if;
  if not v_pub then
    select count(*) into v_cnt from shared_courses where user_id = uid and pub and coalesce(pub_at, created_at) > now() - interval '1 day';
    if v_cnt >= 20 then raise exception 'příliš mnoho zveřejnění'; end if;
  end if;
  update shared_courses set pub = true, pub_at = case when pub then coalesce(pub_at, now()) else now() end, user_id = uid, country = v_country, judge = v_judge,
    len = case when p_len between 0 and 999 then round(p_len, 1) else null end,
    n = case when p_n between 0 and 99 then p_n else null end, sport = v_sport, thumb = p_thumb
  where code = v_code;
  return true;
end $$;

-- =========================================================================================
-- 3) Logické chyby ve skupinách:
--    a) group_join: limit 20 skupin se uplatnil i na člena, který se jen znovu přidal do své skupiny (odkaz ?skupina=),
--       teď se počítá jen při skutečném přidání.
--    b) group_rename vracelo null, když volající neměl právo (nebo řádek nebyl); aplikace to brala jako úspěch („Přejmenováno“).
--       Teď vyhodí chybu, kterou aplikace ukáže; u group_delete a group_course_delete výsledek kontroluje aplikace (viz níž).
--    Podpisy, návratové typy i práva (grant authenticated) zůstávají; create or replace je zachová.
-- =========================================================================================
create or replace function public.group_join(p_code text)
returns json language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); v_code text := upper(trim(coalesce(p_code, ''))); g groups%rowtype; v_n int; v_in boolean;
begin
  if uid is null then raise exception 'not signed in'; end if;
  if v_code !~ '^[A-Z0-9]{6}$' then raise exception 'neplatný kód'; end if;
  select * into g from groups where code = v_code;
  if not found then raise exception 'skupina nenalezena'; end if;
  v_in := exists (select 1 from group_members where group_id = g.id and user_id = uid);
  if not v_in then
    select count(*) into v_n from group_members where group_id = g.id;
    if v_n >= 100 then raise exception 'skupina je plná'; end if;
    if (select count(*) from group_members where user_id = uid) >= 20 then raise exception 'příliš mnoho skupin'; end if;
    insert into group_members (group_id, user_id, name, role) values (g.id, uid, group_my_name(), 'member') on conflict (group_id, user_id) do nothing;
  end if;
  return json_build_object('id', g.id, 'code', g.code, 'name', g.name, 'role', group_role(g.id), 'members', (select count(*) from group_members where group_id = g.id));
end $$;

-- group_delete a group_course_delete zůstávají v původní podobě (vrací null bez práva): aplikace od 3.0 výsledek kontroluje
-- (r !== true = chyba „jen zakladatel“ / „parkur nenalezen“). Přepis s raise exception přes MCP neprošel (příkaz delete
-- uvnitř těla funkce chce potvrzení), a pro chování aplikace není potřeba.

-- =========================================================================================
-- 4) Kontrola práv po opravě (jen čtení; má vrátit false u anon i authenticated pro push_daily, push_weekly, push_flush_call):
--    select proname, has_function_privilege('anon', oid, 'execute') anon, has_function_privilege('authenticated', oid, 'execute') auth
--    from pg_proc where pronamespace = 'public'::regnamespace and proname in ('push_daily', 'push_weekly', 'push_flush_call', 'group_my_name', 'group_role');
--
-- Doporučení do budoucna (neprovádí se, změna výchozích práv projektu): aby nová funkce v public nedostala execute pro anon
-- a authenticated automaticky a práva se vždy dávala výslovně (jak to migrace dělají):
--    alter default privileges for role postgres in schema public revoke execute on functions from public, anon, authenticated;
