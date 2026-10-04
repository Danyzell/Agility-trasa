-- Mezipaměť pro serverovou funkci kacr: kalendář závodů z kacr.info se stahuje nejvýš dvakrát denně
-- (asi 50 stránek), aplikace pak dostává uložený výsledek. Tabulka je dostupná jen serverové funkci (service role).
create table if not exists public.kacr_cache (
  key  text primary key check (char_length(key) between 1 and 40),
  data jsonb not null,
  at   timestamptz not null default now()
);
alter table public.kacr_cache enable row level security;
revoke all on table public.kacr_cache from anon, authenticated;
