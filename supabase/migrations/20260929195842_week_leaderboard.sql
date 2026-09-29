-- "Parkur týdne" leaderboard: one best result per dog+device per ISO week and class.
-- Table is reachable only through the SECURITY DEFINER functions below.

create table public.week_runs (
  id         bigserial primary key,
  week       text not null check (week ~ '^[0-9]{4}-W[0-9]{2}$'),
  cls        text not null check (cls in ('A1','A2','A3')),
  course_id  text not null check (char_length(course_id) between 1 and 60),
  size       text not null check (size in ('XS','S','M','I','L')),
  handler    text not null check (char_length(handler) between 1 and 30),
  dog        text not null check (char_length(dog) between 1 and 30),
  t          numeric(6,2) not null check (t > 0),
  pen        numeric(6,2) not null check (pen >= 0),
  device     text not null check (char_length(device) between 8 and 64),
  tries      int not null default 1,
  created_at timestamptz not null default now()
);

create unique index week_runs_uniq on public.week_runs (week, cls, device, lower(dog));
create index week_runs_rank_idx on public.week_runs (week, cls, pen, t);

alter table public.week_runs enable row level security;
revoke all on table public.week_runs from anon, authenticated;
revoke all on sequence public.week_runs_id_seq from anon, authenticated;

-- ---------------------------------------------------------------------------
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
  if v_cls not in ('A1','A2','A3') then raise exception 'neplatná třída'; end if;
  if v_size not in ('XS','S','M','I','L') then raise exception 'neplatná velikost'; end if;
  if char_length(v_course) not between 1 and 60 then raise exception 'neplatný parkur'; end if;
  if char_length(v_handler) not between 1 and 30 then raise exception 'neplatné jméno psovoda'; end if;
  if char_length(v_dog) not between 1 and 30 then raise exception 'neplatné jméno psa'; end if;
  if v_device !~ '^[A-Za-z0-9_-]{8,64}$' then raise exception 'neplatné zařízení'; end if;
  if p_len is null or not (p_len between 50 and 400) then raise exception 'neplatná délka parkuru'; end if;
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
  if v_cls not in ('A1','A2','A3') then raise exception 'neplatná třída'; end if;
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

revoke all on function public.week_submit(text, text, text, text, text, numeric, numeric, numeric, text) from public;
revoke all on function public.week_board(text, text, text, text) from public;
grant execute on function public.week_submit(text, text, text, text, text, numeric, numeric, numeric, text) to anon, authenticated;
grant execute on function public.week_board(text, text, text, text) to anon, authenticated;
