-- Pawkur 3.1: co lidé v aplikaci dělají (anonymní počty akcí za den), bez osobních údajů.
-- Aplikace během dne posílá součty za ten den (přepíše předchozí stav řádku): kolikrát otevřela obrazovky a části aplikace
-- (parkur, 3D, uložený běh, plánek z fotky, generátor, úpravy plánu…), volbu na konci průvodce, sekundy na obrazovce
-- a obrazovku, na které ji člověk naposledy zavřel. Klíče jen [a-z0-9_], čísla 0–100000, texty jen krátké kódy.
-- Spuštěno 9. 10. 2026 přes MCP execute_sql.

alter table public.app_open add column if not exists act jsonb;

create or replace function public.app_act(p_dev text, p_act jsonb)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare a jsonb := '{}'::jsonb; r record; n int := 0;
begin
  if p_dev is null or p_dev !~ '^[A-Za-z0-9_-]{6,64}$' or p_act is null or jsonb_typeof(p_act) <> 'object' or length(p_act::text) > 2000 then return; end if;
  for r in select key, value from jsonb_each(p_act) loop
    n := n + 1; exit when n > 60;
    if r.key !~ '^[a-z0-9_]{1,16}$' then continue; end if;
    if jsonb_typeof(r.value) = 'number' then
      a := a || jsonb_build_object(r.key, least(greatest(round((r.value #>> '{}')::numeric), 0), 100000));
    elsif jsonb_typeof(r.value) = 'string' and (r.value #>> '{}') ~ '^[a-z0-9_]{1,16}$' then
      a := a || jsonb_build_object(r.key, r.value #>> '{}');
    end if;
  end loop;
  insert into public.app_open(day, dev, act) values (current_date, p_dev, a)
    on conflict (day, dev) do update set act = excluded.act;
end $$;

revoke all on function public.app_act(text, jsonb) from public;
grant execute on function public.app_act(text, jsonb) to anon, authenticated;

-- přehled pro autora: k dosavadním číslům přibyl souhrn první návštěvy za 14 dní (act14):
-- n = noví, m = noví s počty akcí, k = kolik nových udělalo danou akci, sec = medián sekund na obrazovce,
-- back = kolik se vrátilo další den, last = kde skončili ti, kdo se nevrátili
create or replace function public.app_stats()
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare em text := lower(coalesce(auth.jwt() ->> 'email', '')); adm text;
begin
  select lower(v) into adm from public.app_secret where k = 'feedback_to';
  if em = '' or adm is null or em <> adm then return null; end if;
  return jsonb_build_object(
    'today', (select count(*) from public.app_open where day = current_date),
    'd7', (select count(distinct dev) from public.app_open where day > current_date - 7),
    'd30', (select count(distinct dev) from public.app_open where day > current_date - 30),
    'new7', (select count(*) from public.app_open where first and day > current_date - 7),
    'total', (select count(distinct dev) from public.app_open),
    'icon7', (select count(distinct dev) from public.app_open where standalone and day > current_date - 7),
    'en7', (select count(distinct dev) from public.app_open where lang = 'en' and day > current_date - 7),
    'accounts', (select count(*) from auth.users),
    'plat', (select coalesce(jsonb_object_agg(p, n), '{}'::jsonb) from (select plat p, count(distinct dev) n from public.app_open where plat is not null and day > current_date - 7 group by plat) q),
    'iab7', (select count(distinct dev) from public.app_open where iab and day > current_date - 7),
    'inst_shown7', (select count(distinct dev) from public.app_open where inst_shown and day > current_date - 7),
    'inst_ok7', (select count(distinct dev) from public.app_open where inst_ok and day > current_date - 7),
    'err7', (select coalesce(sum(err),0) from public.app_open where day > current_date - 7),
    'err_top', (select coalesce(jsonb_agg(jsonb_build_array(m, n) order by n desc), '[]'::jsonb) from (select err_last m, count(*) n from public.app_open where err_last is not null and day > current_date - 7 group by err_last order by n desc limit 5) q),
    'days', (select coalesce(jsonb_agg(jsonb_build_array(d, n) order by d), '[]'::jsonb) from (select day as d, count(*) as n from public.app_open where day > current_date - 30 group by day) s),
    'tz7', (select coalesce(jsonb_agg(jsonb_build_array(z, n) order by n desc, z), '[]'::jsonb) from (select tz z, count(distinct dev) n from public.app_open where tz is not null and day > current_date - 7 group by tz order by n desc, tz limit 8) q),
    'cz_en7', (select count(distinct dev) from public.app_open where lang = 'en' and tz in ('Europe/Prague','Europe/Bratislava') and day > current_date - 7),
    'ask', (select coalesce(jsonb_agg(jsonb_build_array(a, n) order by n desc, a), '[]'::jsonb) from (select left(substr(msg, 11), 60) a, count(*) n from public.feedback where msg like 'Co chybí: %' and created_at > now() - interval '30 days' group by 1 order by n desc, a limit 10) q),
    'ask_n', (select count(*) from public.feedback where msg like 'Co chybí: %' and created_at > now() - interval '30 days'),
    'act14', (select jsonb_build_object(
        'n', count(*),
        'm', count(*) filter (where o.act is not null),
        'back', count(*) filter (where exists (select 1 from public.app_open b where b.dev = o.dev and b.day > o.day)),
        'k', (select coalesce(jsonb_object_agg(k, c), '{}'::jsonb) from (
              select e.key k, count(*) c from public.app_open o2 cross join lateral jsonb_each(o2.act) e
              where o2.first and o2.day > current_date - 14 and o2.act is not null and e.key <> 'sec'
                and jsonb_typeof(e.value) = 'number' and (e.value #>> '{}')::numeric > 0
              group by e.key) q),
        'sec', (select percentile_cont(0.5) within group (order by (o3.act ->> 'sec')::numeric)
                from public.app_open o3 where o3.first and o3.day > current_date - 14 and o3.act ? 'sec'),
        'last', (select coalesce(jsonb_object_agg(l, c), '{}'::jsonb) from (
              select o4.act ->> 'last' l, count(*) c from public.app_open o4
              where o4.first and o4.day > current_date - 14 and o4.act ? 'last'
                and not exists (select 1 from public.app_open b2 where b2.dev = o4.dev and b2.day > o4.day)
              group by 1) q2))
      from public.app_open o where o.first and o.day > current_date - 14)
  );
end $$;
