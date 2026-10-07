-- Cesta instalace a chyby v aplikaci (AgiPlan 2.6). Spustit v Supabase → SQL editor.
-- Nové sloupce app_open: platforma, vestavěný prohlížeč (Facebook a spol.), instalační okno ukázané/přijaté, počet chyb a poslední hláška.
alter table public.app_open
  add column if not exists plat text,
  add column if not exists iab boolean,
  add column if not exists inst_shown boolean,
  add column if not exists inst_ok boolean,
  add column if not exists err integer not null default 0,
  add column if not exists err_last text;

-- Rozšířený ping (původní čtyřparametrový zůstává kvůli starším verzím aplikace).
create or replace function public.app_ping(p_dev text, p_standalone boolean, p_lang text, p_first boolean,
  p_plat text, p_iab boolean, p_inst_shown boolean, p_inst_ok boolean, p_err integer, p_err_last text)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if p_dev is null or p_dev !~ '^[A-Za-z0-9_-]{6,64}$' then return; end if;
  insert into public.app_open(day, dev, standalone, lang, first, plat, iab, inst_shown, inst_ok, err, err_last)
    values (current_date, p_dev, coalesce(p_standalone,false), left(coalesce(p_lang,''),5), coalesce(p_first,false),
      case when p_plat in ('android','ios','desktop') then p_plat end, p_iab, p_inst_shown, p_inst_ok,
      least(greatest(coalesce(p_err,0),0),999), left(p_err_last,160))
    on conflict (day, dev) do update set
      standalone = public.app_open.standalone or excluded.standalone,
      first = public.app_open.first or excluded.first,
      plat = coalesce(excluded.plat, public.app_open.plat),
      iab = coalesce(public.app_open.iab,false) or coalesce(excluded.iab,false),
      inst_shown = coalesce(public.app_open.inst_shown,false) or coalesce(excluded.inst_shown,false),
      inst_ok = coalesce(public.app_open.inst_ok,false) or coalesce(excluded.inst_ok,false),
      err = public.app_open.err + excluded.err,
      err_last = coalesce(excluded.err_last, public.app_open.err_last);
  delete from public.app_open where day < current_date - 430;
end $$;
grant execute on function public.app_ping(text,boolean,text,boolean,text,boolean,boolean,boolean,integer,text) to anon, authenticated;

-- Statistika pro autora: navíc platformy, Facebook, instalační okno a chyby za 7 dní.
create or replace function public.app_stats() returns jsonb language plpgsql security definer set search_path = '' as $$
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
    'days', (select coalesce(jsonb_agg(jsonb_build_array(d, n) order by d), '[]'::jsonb) from (select day as d, count(*) as n from public.app_open where day > current_date - 30 group by day) s)
  );
end $$;
