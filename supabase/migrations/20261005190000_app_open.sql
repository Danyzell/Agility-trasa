-- Anonymní návštěvnost: kolik zařízení aplikaci otevřelo (jeden řádek na zařízení a den).
-- Ukládá se jen náhodné číslo instalace, datum, jestli běží z ikony na ploše a jazyk. Žádné jméno, IP ani poloha.
create table if not exists public.app_open (
  day date not null,
  dev text not null,
  standalone boolean not null default false,
  lang text not null default '',
  first boolean not null default false,
  primary key (day, dev)
);
alter table public.app_open enable row level security;
revoke all on public.app_open from anon, authenticated;

create or replace function public.app_ping(p_dev text, p_standalone boolean, p_lang text, p_first boolean) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if p_dev is null or p_dev !~ '^[A-Za-z0-9_-]{6,64}$' then return; end if;
  insert into public.app_open(day, dev, standalone, lang, first)
  values (current_date, p_dev, coalesce(p_standalone, false), left(coalesce(p_lang, ''), 5), coalesce(p_first, false))
  on conflict (day, dev) do update set standalone = public.app_open.standalone or excluded.standalone,
    first = public.app_open.first or excluded.first;
  delete from public.app_open where day < current_date - 430;   -- nejvýš 14 měsíců
end $$;

-- přehled jen pro autora: přihlášený e-mail se musí shodovat s adresou pro zprávy autorovi (app_secret.feedback_to)
create or replace function public.app_stats() returns jsonb
language plpgsql security definer set search_path = '' as $$
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
    'days', (select coalesce(jsonb_agg(jsonb_build_array(d, n) order by d), '[]'::jsonb) from
      (select day as d, count(*) as n from public.app_open where day > current_date - 30 group by day) s)
  );
end $$;

revoke all on function public.app_ping(text, boolean, text, boolean), public.app_stats() from public;
grant execute on function public.app_ping(text, boolean, text, boolean) to anon, authenticated;
grant execute on function public.app_stats() to authenticated;
