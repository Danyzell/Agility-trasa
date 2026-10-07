# Předání práce (pro další sezení Claude Code)

Stav k 7. 10. 2026. Nové sezení: přečti tenhle soubor, `SPOLUPRACE.md` a `README.md`, pak pokračuj podle „Co dál“.

## Projekt v kostce

- **AgiPlan**, plánovač agility parkurů. Jediný soubor `index.html` (ES5, bez sestavení), service worker `sw.js`, 3D ve `v3d/` (three.js, balíček `v3d/v3d.js` přes `sh v3d/build.sh`).
- Web: https://danyzell.github.io/Agility-trasa/ (GitHub Pages z větve `main`, repozitář je veřejný).
- Server: Supabase projekt `wtjyjknaibsamgczvaxy` (účty přes Google, synchronizace `user_data`, žebříčky, kacr.info, zprávy autorovi, návštěvnost `app_open`). Migrace v `supabase/migrations`, funkce v `supabase/functions`.
- Verze aplikace 2.6 (`APPV`, okno Novinky `newsCheck`, O aplikaci). Cache service workeru `agility-trasa-2.6`.

## Jak pracovat (osvědčené)

- Každá změna jako PR do `main`, sloučit squash po zelených testech na GitHubu (Actions → Testy). Uživatel slučování po zelených testech přijímá.
- Testy: `node tests/run.js` (Playwright, 22 sad, asi 6 minut), jen některé: `node tests/run.js stavba denik`. Uživatel chce spouštět hlavně nové a dotčené sady, celou sadu před sloučením nechat na GitHubu.
- Nový český text v aplikaci = anglický překlad do `I18N_EXTRA` (exact, num s `#`, re). Testy mívají krok „angličtina“.
- Když se změní `v3d/v3d.js` (služba ho drží v mezipaměti), zvýšit `CACHE` v `sw.js`.
- Zápisy do Supabase přes MCP (migrace, DELETE…) se ruší. SQL pošli uživateli po malých blocích do https://supabase.com/dashboard/project/wtjyjknaibsamgczvaxy/sql/new. Čtení (SELECT, logy, advisors) přes MCP funguje.
- Uživatel píše česky a stručně. U změn vzhledu chce nejdřív návrh (snímky), pokud výslovně neřekne „udělej“.
- Hoopers: od verze 2.6 v aplikaci jako samostatný režim (uživatel ho zadal 7. 10. 2026).

## Co je hotové (poslední PR)

- #36 iPhone: AR přes Apple Quick Look, návod na instalaci přímo na obrazovce, kolbiště podle GPS (issue #37), oprava offline startu po otevření `privacy.html`.
- #38 Stavba: přiblížení dvěma prsty, natočení skoků podle trasy, kopírování, obrácení trasy, zeď a dvojitý skok (`o.v` = `wall`/`oxer`), Start a Cíl, kontrola překážek přes sebe.
- #39 Deník: postup do vyšší třídy počítá i výsledky z kacr.info, čas, délka a video u závodu; jednotky metry / stopy (`SET.unit`).
- #40 Novinky 2.4.
- #41 Zjednodušení: 5 záložek, Více ve 3 skupinách (Můj tým, Učení, Aplikace), sbalené „Výzvy, žebříčky a závody“ na Domů, Nástroje ve skupinách.
- #42 Facebook/Messenger/Instagram na Androidu se poprvé sám přepne do Chromu (kvůli instalaci).
- #44 Instalace na Androidu i bez okna Chromu (Samsung Internet, Firefox, Chrome po odmítnutí): karta s návodem pro daný prohlížeč, zavřená se vrátí po 14 dnech; pruh Otevřít v Chromu i pro TikTok, LinkedIn a obecný WebView.
- #45 Nabídka instalace jednou po první skutečné akci (parkur, běh, 3D).
- #48 Pravidla podle země (`RULES`: CZ, SK, AT, DE, FCI; Británie a Polsko po doplnění podkladů), průzkum 45 zdrojů v chatu 7. 10.
- #47 Verze 2.6: Hoopers (třídy H1–H3…) a zlepšení z rozboru 7. 10.: angličtina bez českých částí (`CZONLY`), hlášení chyb a cesta instalace v pingu (SQL `20261007170000_ping_funnel_errors.sql` čeká na spuštění uživatelem), limit dotazů ve funkci `kacr` (verze 5), 3D balíček až při použití (cache 2.7).
- (původně) #47 Verze 2.6: Hoopers (třídy H1–H3, paleta, prostor psovoda, kontrola pravidel FCI Hoopers, generátor, hodnocení podle chyb).
- #46 Verze 2.5: Kde ztrácíš body a rozhodčí z kacr.info v deníku, Den závodů na Domů. Serverová funkce `kacr` (verze 4) umí `{runs, dog}`; nasazená přes MCP `deploy_edge_function` (nasazení funkcí přes MCP funguje, SQL zápisy ne).

## Čísla (Více → O aplikaci → Návštěvnost, vidí jen autor)

- 7. 10. večer (3 dny měření): 740 zařízení, 58 % anglicky; druhý den se vrátilo 6 % Čechů a 5 % cizinců; ikonu má 8 % Čechů, 3 % cizinců; 87 účtů, 0 zpráv autorovi, 0 sdílených parkurů.

- 6. 10. ráno: 366 zařízení, s ikonou na ploše jen 12 (3 %, čeština 7 %, angličtina 1 %), 45 účtů. Většina přichází z Facebooku.
- SQL pro rozbor: `with d as (select dev, count(*) days, bool_or(standalone) inst, max(lang) lang from public.app_open group by dev) select count(*), count(*) filter (where inst) from d;`

## Co dál (navrženo, čeká na rozhodnutí uživatele)

1. ~~Instalace ve správnou chvíli~~ hotovo v #45. Za pár dní porovnat podíl instalací (dřív 19 ze 460, 4 %).
1b. **Spustit SQL** `supabase/migrations/20261007170000_ping_funnel_errors.sql` (uživatel), pak ve statistice přibudou platformy, Facebook, instalační okno a chyby.
1c. První zážitek: po průvodci rovnou otevřít parkur a 3D nebo Běh (návrh, čeká na snímky). Sdílení parkuru přímo u názvu (0 sdílení za 3 dny).
2. ~~Měřit cestu instalace~~ v #47, viz 1b. Původně: do `app_ping` přidat platformu (Android, iPhone, počítač), prohlížeč Facebooku a jestli se instalační okno ukázalo a bylo přijaté. Potřebuje nové sloupce v `app_open` (SQL spustí uživatel) a úpravu `app_stats`.
3. Kolbiště (issue #37): sdílení plánu závodiště odkazem; vyzkoušet import na ukázkovém souboru od uživatele, až ho pošle.
4. Políčka rozhodčí, místo a datum a poznámky u parkuru; galerie parkurů od ostatních.
5. Hoopers dál: 3D modely oblouku, sudu a plůtku, generátor v Generátoru, národní pravidla ČR (pokud budou podklady).
6. Pravidla AKC/UKI pro anglicky mluvící (jen s přesnými podklady).
7. 3D: psovod a pohyb psa (starší rozpracovaný úkol).
8. Provoz: vyměnit klíč Resend (byl vložený do chatu), Google Play (vlastní doména, 25 $, 12 testerů na 14 dní).

## K ověření na skutečném telefonu

- iPhone: přihlášení Googlem v aplikaci nainstalované na ploše (iOS může dokončit přihlášení v Safari místo v aplikaci), AR Quick Look, návod na instalaci.
- Android: přiblížení dvěma prsty ve Stavbě, natočení podle kolbiště v AR, přepnutí z Facebooku do Chromu.
