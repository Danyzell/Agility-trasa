-- Smazání účtu (Google Play: kdo si v aplikaci založí účet, musí ho umět i smazat). Účet → Smazat účet.
-- Smaže přihlášeného uživatele a všechno, co je u něj na serveru. Většina tabulek je na auth.users navázaná
-- s ON DELETE CASCADE (user_data, profiles, friends, inbox, push_subs a fronta upozornění, vlastní skupiny se členy,
-- parkury a tréninky skupiny, členství, běhy ve skupinách, odpovědi na tréninky, hodnocení a nahlášení v galerii).
-- Sdílené parkury (kódem i v galerii), parkury a tréninky přidané do skupin mají ON DELETE SET NULL, proto se smažou zvlášť.
-- Bez vazby na účet zůstávají jen anonymní údaje podle zařízení (app_open, week_runs) a zprávy autorovi (smažou se na požádání).
create or replace function public.delete_my_account() returns boolean
language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'Nejsi přihlášený.'; end if;
  delete from public.shared_courses where user_id = uid;
  delete from public.group_events where user_id = uid;
  delete from public.group_courses where user_id = uid;
  delete from auth.users where id = uid;
  return true;
end; $$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
