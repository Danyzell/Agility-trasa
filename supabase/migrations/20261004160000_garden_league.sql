-- Zahrada týdne (třída Z: parkur 20 × 15 m generovaný z čísla týdne, stejný pro všechny)
-- a Zahradní liga (body za umístění v týdnech, sezóna = rok).

alter table public.week_runs drop constraint week_runs_cls_check;
alter table public.week_runs add constraint week_runs_cls_check check (cls in ('A1','A2','A3','Z'));

create or replace function public.week_submit(
  p_cls text, p_course text, p_size text, p_handler text, p_dog text,
  p_t numeric, p_pen numeric, p_len numeric, p_device text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_week    text := to_char(now() at time zone 'Europe/Prague', 'IYYY-"W"IW');
  v_cls     text := upper(trim(coalesce(p_cls, '')));
  v_size    text := upper(trim(coalesce(p_size, '')));
  v_course  text := trim(regexp_replace(coalesce(p_course, ''), '[[:cntrl:]]', '', 'g'));
  v_handler text := trim(regexp_replace(regexp_replace(coalesce(p_handler, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g'));
  v_dog     text := trim(regexp_replace(regexp_replace(coalesce(p_dog, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g'));
  v_device  text := trim(coalesce(p_device, ''));
  v_t       numeric := round(p_t, 2);
  v_pen     numeric := round(p_pen, 2);
  v_used    int;
  v_row     week_runs%rowtype;
  r         json;
begin
  if v_cls not in ('A1','A2','A3','Z') then raise exception 'neplatná třída'; end if;
  -- zahrada týdne: parkur je pro všechny stejný, id určuje týden
  if v_cls = 'Z' and v_course <> ('zahrada-' || v_week) then raise exception 'neplatný parkur'; end if;
  if v_size not in ('XS','S','M','I','L') then raise exception 'neplatná velikost'; end if;
  if char_length(v_course) not between 1 and 60 then raise exception 'neplatný parkur'; end if;
  if char_length(v_handler) not between 1 and 30 then raise exception 'neplatné jméno psovoda'; end if;
  if char_length(v_dog) not between 1 and 30 then raise exception 'neplatné jméno psa'; end if;
  if v_device !~ '^[A-Za-z0-9_-]{8,64}$' then raise exception 'neplatné zařízení'; end if;
  if p_len is null or not (p_len between (case when v_cls = 'Z' then 20 else 50 end) and 400) then raise exception 'neplatná délka parkuru'; end if;
  if v_t is null or not (v_t > 0 and v_t <= 300 and v_t >= p_len / 9) then raise exception 'neplatný čas'; end if;
  if v_pen is null or not (v_pen between 0 and 200) then raise exception 'neplatné trestné body'; end if;

  -- rate limit: total attempts of this device in this week (all classes, all dogs)
  select coalesce(sum(tries), 0) into v_used
  from week_runs where week = v_week and device = v_device;
  if v_used >= 30 then raise exception 'příliš mnoho pokusů'; end if;

  insert into week_runs as w (week, cls, course_id, size, handler, dog, t, pen, device)
  values (v_week, v_cls, v_course, v_size, v_handler, v_dog, v_t, v_pen, v_device)
  on conflict (week, cls, device, lower(dog)) do update set
    tries      = w.tries + 1,
    handler    = excluded.handler,
    size       = excluded.size,
    dog        = excluded.dog,
    course_id  = case when (excluded.pen, excluded.t) < (w.pen, w.t) then excluded.course_id else w.course_id end,
    created_at = case when (excluded.pen, excluded.t) < (w.pen, w.t) then now() else w.created_at end,
    t          = case when (excluded.pen, excluded.t) < (w.pen, w.t) then excluded.t else w.t end,
    pen        = case when (excluded.pen, excluded.t) < (w.pen, w.t) then excluded.pen else w.pen end
  returning * into v_row;

  select json_build_object(
    'week', v_week,
    'rank', (select count(*) + 1 from week_runs x
             where x.week = v_week and x.cls = v_cls
               and (x.pen, x.t, x.created_at, x.id) < (v_row.pen, v_row.t, v_row.created_at, v_row.id)),
    'rank_size', (select count(*) + 1 from week_runs x
             where x.week = v_week and x.cls = v_cls and x.size = v_row.size
               and (x.pen, x.t, x.created_at, x.id) < (v_row.pen, v_row.t, v_row.created_at, v_row.id)),
    'total', (select count(*) from week_runs x where x.week = v_week and x.cls = v_cls),
    'total_size', (select count(*) from week_runs x where x.week = v_week and x.cls = v_cls and x.size = v_row.size)
  ) into r;
  return r;
end;
$$;

-- ---------------------------------------------------------------------------
create or replace function public.week_board(
  p_cls text, p_size text default null, p_device text default null, p_week text default null)
returns json
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_week text := coalesce(nullif(trim(p_week), ''), to_char(now() at time zone 'Europe/Prague', 'IYYY-"W"IW'));
  v_cls  text := upper(trim(coalesce(p_cls, '')));
  v_size text := nullif(upper(trim(coalesce(p_size, ''))), '');
  r      json;
begin
  if v_week !~ '^[0-9]{4}-W[0-9]{2}$' then raise exception 'neplatný týden'; end if;
  if v_cls not in ('A1','A2','A3','Z') then raise exception 'neplatná třída'; end if;
  if v_size is not null and v_size not in ('XS','S','M','I','L') then raise exception 'neplatná velikost'; end if;

  with ranked as (
    select row_number() over (order by w.pen, w.t, w.created_at, w.id) as rank,
           w.handler, w.dog, w.size, w.t, w.pen,
           (p_device is not null and w.device = p_device) as mine
    from week_runs w
    where w.week = v_week and w.cls = v_cls
      and (v_size is null or w.size = v_size)
  )
  select json_build_object(
    'week', v_week,
    'total', (select count(*) from ranked),
    'rows', coalesce((select json_agg(json_build_object(
                 'rank', q.rank, 'handler', q.handler, 'dog', q.dog, 'size', q.size,
                 't', q.t, 'pen', q.pen, 'mine', q.mine) order by q.rank)
               from (select * from ranked order by rank limit 50) q), '[]'::json),
    'me', coalesce((select json_agg(json_build_object(
                 'rank', q.rank, 'handler', q.handler, 'dog', q.dog, 'size', q.size,
                 't', q.t, 'pen', q.pen, 'mine', true) order by q.rank)
               from ranked q where q.mine), '[]'::json)
  ) into r;
  return r;
end;
$$;

-- ---------------------------------------------------------------------------
-- Zahradní liga: body za každý týden zahrady (Z) podle umístění ve velikosti psa,
-- 10-8-6-5-4-3-2 za 1.–7. místo a 1 bod za každý další odeslaný týden. Sezóna = rok.
create or replace function public.league_board(
  p_size text default null, p_device text default null, p_year text default null)
returns json
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_year text := coalesce(nullif(trim(p_year), ''), to_char(now() at time zone 'Europe/Prague', 'IYYY'));
  v_size text := nullif(upper(trim(coalesce(p_size, ''))), '');
  r      json;
begin
  if v_year !~ '^[0-9]{4}$' then raise exception 'neplatný rok'; end if;
  if v_size is not null and v_size not in ('XS','S','M','I','L') then raise exception 'neplatná velikost'; end if;

  with wk as (
    select w.*, row_number() over (partition by w.week, w.size order by w.pen, w.t, w.created_at, w.id) as rk
    from week_runs w
    where w.cls = 'Z' and left(w.week, 4) = v_year
  ), agg as (
    select device, lower(dog) as dk, size,
           sum(case rk when 1 then 10 when 2 then 8 when 3 then 6 when 4 then 5 when 5 then 4 when 6 then 3 when 7 then 2 else 1 end) as pts,
           count(*) as weeks,
           count(*) filter (where rk = 1) as wins,
           count(*) filter (where rk <= 3) as pod,
           (array_agg(handler order by week desc))[1] as handler,
           (array_agg(dog order by week desc))[1] as dog,
           max(week) as last
    from wk
    group by device, lower(dog), size
  ), ranked as (
    select row_number() over (order by a.pts desc, a.wins desc, a.pod desc, a.weeks desc, a.last desc, a.dk) as rank,
           a.handler, a.dog, a.size, a.pts, a.weeks, a.wins, a.pod,
           (p_device is not null and a.device = p_device) as mine
    from agg a
    where v_size is null or a.size = v_size
  )
  select json_build_object(
    'year', v_year,
    'total', (select count(*) from ranked),
    'rows', coalesce((select json_agg(json_build_object(
                 'rank', q.rank, 'handler', q.handler, 'dog', q.dog, 'size', q.size,
                 'pts', q.pts, 'weeks', q.weeks, 'wins', q.wins, 'pod', q.pod, 'mine', q.mine) order by q.rank)
               from (select * from ranked order by rank limit 50) q), '[]'::json),
    'me', coalesce((select json_agg(json_build_object(
                 'rank', q.rank, 'handler', q.handler, 'dog', q.dog, 'size', q.size,
                 'pts', q.pts, 'weeks', q.weeks, 'wins', q.wins, 'pod', q.pod, 'mine', true) order by q.rank)
               from ranked q where q.mine), '[]'::json)
  ) into r;
  return r;
end;
$$;

revoke all on function public.league_board(text, text, text) from public;
grant execute on function public.league_board(text, text, text) to anon, authenticated;
