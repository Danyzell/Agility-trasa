# AgiPlan

(dříve HandlerMap a Agility trasa)

Plánovač agility parkurů jako aplikace do telefonu.

Instalace: otevři stránku v Chromu na Androidu a zvol **Instalovat aplikaci** (nebo ⋮ → Přidat na plochu). Aplikace pak běží z ikony na ploše, i offline.

Verze 2.2. Česky i anglicky (Více → Nastavení), světlý i tmavý vzhled.

Trénink doma (Domů → Trénink doma, nebo Parkury → Generátor → Z parkurů): aplikace vyřízne ze skutečných parkurů úseky, které se vejdou na tvou plochu a postavíš je z vlastního vybavení. Pořadí, otočky kolem křídla i zadní strany zůstanou jako na parkuru. Úseky jde filtrovat podle toho, co chceš trénovat, otočit zrcadlově (otočky na druhou stranu) a kruh nebo skok daleký nahradit skokem; k úseku se ukládají oblíbené i běhy.

Výsledky ze závodů: v profilu psa (Více → Psi) najdi psa na kacr.info podle jeho jména nebo podle jména psovoda (nebo vlož odkaz). Aplikace stáhne jeho výsledky (serverová funkce `supabase/functions/kacr`), ukáže statistiky a graf rychlosti a v Plánu odhadne čas psa na parkuru vůči SČP.

Závody (Domů): kalendář z kacr.info na 60 dní dopředu se vzdáleností od tvé polohy, rozhodčími, uzávěrkou přihlášek a značkou, když je tvůj pes přihlášený. Serverová funkce `kacr` kalendář ukládá do tabulky `kacr_cache` a stahuje ho nejvýš dvakrát denně.

Zahrada týdne a Zahradní liga (Domů): každé pondělí se všem vygeneruje stejný parkur 20 × 15 m z domácího vybavení (6 skoků, tunel, slalom) – semínko je číslo týdne, takže parkur nepotřebuje server. Výsledky jdou do týdenního žebříčku podle velikosti psa a za umístění se sbírají body do ligy na celou sezónu (10-8-6-5-4-3-2, za každý další odeslaný týden 1 bod). Žebříčky počítá Supabase (`supabase/migrations`, funkce `week_submit`, `week_board`, `league_board`).

3D parkur (Plán → tlačítko 3D na plánku, nebo Nástroje → 3D průlet): parkur se postaví z 3D modelů překážek v rozměrech FCI (pravidla od 2023; výška skoku, kruhu a délka skoku dalekého podle velikosti vybraného psa) a pes proběhne trasu – skáče, leze po zónách, kličkuje slalomem (1. tyčka po levém rameni) a houpačka se pod ním překlopí. Pohledy Volně, Očima psa, Za psem a Shora; přepínač 2D | 3D vrací do plánku. Kód je ve `v3d/src/course.js` (balíček `v3d/v3d.js`), bez WebGL zůstává jednoduchý průlet.

Délka tunelu: u vybraného tunelu ve Stavbě 2–6 m (nový tunel 5 m, uložené parkury si délku nechají). Kontrola FCI hlásí tunel kratší než 3 m.

Zásady ochrany osobních údajů: [privacy.html](https://danyzell.github.io/Agility-trasa/privacy.html) (česky i anglicky, adresa se hodí i do Google Play).

Účet a synchronizace (Více → Účet): přihlášení přes Google (Supabase Auth). Data aplikace (stejná jako v záloze) se po každé změně a při otevření aplikace synchronizují se serverem, slučují se třícestně proti stavu z poslední synchronizace, takže změny i smazání z více zařízení se zachovají. Na serveru tabulka `user_data` a funkce `sync_get`, `sync_put`, `sync_delete` (`supabase/migrations/20261005100000_user_data.sql`). Zapnutí: v Supabase → Authentication → Providers → Google vložit klíč z Google Cloud a v URL Configuration nastavit Site URL na adresu aplikace.

Sdílení na Facebooku: odkaz https://danyzell.github.io/Agility-trasa/ má náhled (obrázek `og.jpg` a popis). Když ho někdo otevře ve vestavěném prohlížeči Facebooku nebo Messengeru, kde instalace nejde, ukáže se pruh Otevřít v Chromu (na iPhonu návod přes ⋯ → Otevřít v Safari).

Instalace přes Chrome: když Chrome nabídne instalaci, ukáže se na Domů karta **Nainstaluj si aplikaci**. Ve Více → O aplikaci je tlačítko Nainstalovat, nebo návod pro iPhone (Safari → Sdílet → Přidat na plochu), když tlačítko není. Je tam i QR kód s odkazem na aplikaci, aby si ji kamarádi mohli rovnou otevřít.

Napsat autorovi (Více, nebo hvězdičky na Domů po 10 bězích): hodnocení 1–5, druh zprávy, text a nepovinný e-mail pro odpověď. Serverová funkce `supabase/functions/feedback` zprávu uloží do tabulky `feedback` a pošle ji e-mailem přes [Resend](https://resend.com). Adresa příjemce je v tabulce `app_secret` (klíč `feedback_to`), klíč Resend patří do tajných proměnných funkce jako `RESEND_API_KEY` (nebo do `app_secret` pod klíčem `resend_key`). Bez klíče se zprávy jen ukládají a jde je číst v Supabase → Table Editor → feedback.

Podpořit aplikaci (Více, nebo srdíčko na Domů a v horní liště): platba kartou, Google Pay nebo Apple Pay přes odkaz Stripe (`DONATE.url` v `index.html`) a QR platba (formát SPAYD) na účet z proměnné `DONATE`, s částkou 50, 100, 200, 500 Kč nebo vlastní. IBAN se dopočítá z čísla účtu. Když ve Stripe u odkazu na platbu nastavíš Po platbě → Přesměrovat na `https://danyzell.github.io/Agility-trasa/?dekuji`, aplikace po zaplacení poděkuje.

Na aplikaci pracuje víc sezení Claude Code najednou – pravidla jsou v [SPOLUPRACE.md](SPOLUPRACE.md).

3D animace techniky v záložce Videa jsou ve `v3d/src` (three.js); balíček `v3d/v3d.js` se sestaví příkazem `v3d/build.sh` (esbuild).

## Testy

Automatické testy v prohlížeči (všechny obrazovky, uložení parkuru, běh, záloha a obnova, tlačítko Zpět, Plánek z obrázku, kompas, offline start) běží na GitHubu při každé změně, v záložce Actions → Testy. Ručně:

```
npm install --no-save playwright jsqr && npx playwright install chromium && node tests/run.js
```
