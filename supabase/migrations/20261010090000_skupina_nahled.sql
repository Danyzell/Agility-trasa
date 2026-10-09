-- Pawkur 3.1: skupina ke čtení bez přihlášení. Odkaz ?skupina=KÓD (od trenéra) ukáže název skupiny, počet členů a parkury
-- poslané skupině i bez přihlášení přes Google; přihlášení je potřeba až pro přidání do skupiny, žebříček a tréninky.
-- Bez jmen členů, autora parkuru, poznámek a běhů. Kód skupiny (6 znaků) zná jen ten, komu ho někdo poslal.
-- Spouští se ručně v Supabase (SQL editor). Navazuje na 20261009090000_trojka.sql.

create or replace function public.group_peek(p_code text)
returns json language sql stable security definer set search_path = public as $$
  select json_build_object('code', g.code, 'name', g.name,
    'members', (select count(*) from group_members m where m.group_id = g.id),
    'courses', coalesce((select json_agg(json_build_object('id', c.id, 'name', c.name, 'cls', c.cls, 'day', c.day, 'thumb', c.thumb) order by c.day desc, c.id desc)
                         from (select * from group_courses x where x.group_id = g.id order by x.day desc, x.id desc limit 30) c), '[]'::json))
  from groups g
  where upper(trim(coalesce(p_code, ''))) ~ '^[A-Z0-9]{6}$' and g.code = upper(trim(p_code));
$$;

create or replace function public.group_peek_course(p_code text, p_cid bigint)
returns json language sql stable security definer set search_path = public as $$
  select json_build_object('id', c.id, 'name', c.name, 'cls', c.cls, 'data', c.data, 'day', c.day)
  from group_courses c join groups g on g.id = c.group_id
  where c.id = p_cid and upper(trim(coalesce(p_code, ''))) ~ '^[A-Z0-9]{6}$' and g.code = upper(trim(p_code));
$$;

revoke all on function public.group_peek(text), public.group_peek_course(text, bigint) from public;
grant execute on function public.group_peek(text), public.group_peek_course(text, bigint) to anon, authenticated;
