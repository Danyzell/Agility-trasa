# HandlerMap – průvodce pro agenty (developer guide)

HandlerMap (dříve „Agility trasa“) je plánovač parkurů pro agility psů. Uživatelé jsou hlavně čeští psovodi, nově i anglicky mluvící.
Jeden HTML soubor, čistý JavaScript bez knihoven a bez sestavovacích nástrojů. Běží jako instalovaná webová aplikace (PWA na GitHub Pages
https://danyzell.github.io/Agility-trasa/), jako artefakt na claude.ai (bez sítě) a ve starší Android WebView aplikaci.
Cílová zařízení: telefony s Androidem a Chromem (šířka 360–430 px), funguje i na počítači. Musí fungovat offline.

## Zdroje a sestavení
- Zdroje jsou v repozitáři `Danyzell/agility-trasa`, větev `dev`, složka `src/` (tenhle soubor je `src/AGENTS.md`).
  Každý agent pracuje ve vlastní větvi `agent/<jméno>` založené z `origin/dev`, mění jen své soubory, commituje a větev pushne
  (`git push -u origin agent/<jméno>`). Do `dev` ani `main` nepushuj – slučuje hlavní agent.
  Commit zprávy česky, stručně. Když push selže, napiš to do reportu a přilož `git format-patch` výstup do svého scratch adresáře.
- (Pro hlavního agenta: lokální kopie zdrojů je `/home/claude/build/`.)
- `python3 src/assemble.py [--base DIR] [--mods a.js,b.js] [--out X.html] [--test]` (výchozí base = složka skriptu, tj. `src/`)
  - spojí `a_head.html` (+ styly `x_modern.css` a `<modul>.css`) + `b_body.html` + všechny JS do JEDNOHO `<script>` v pořadí:
    `c_pre.js p_helpers.js p_i18n.js [slovníky i18n] p_def.js p_gen.js p_calc.js p_db.js c_core_a.js c_plan.js d_feat.js e_export.js f_anim.js f_video.js g_3d.js h_gen.js i_more.js j_ana.js k_start.js l_split.js m_reader.js m_route.js n_import.js o_field.js [moduly] z_init.js q_pwa.js`
  - `--test` vytvoří vedle výstupu i `*.t.html` (stejný obal jako na claude.ai) – tu otevírej v Playwrightu přes `file://`.
  - VŽDY dávej vlastní `--out` do svého scratch adresáře, ať si agenti nepřepisují výstupy. Nikdy nepiš do `/mnt/user-data/outputs/agility-plan.html`.
- Protože je to jeden skript, všechny funkce a `var` na nejvyšší úrovni jsou globální a sdílené. Moduly proto zabal do IIFE a ven dej jen API přes `HM`.
- Styl kódu: jako zbytek aplikace (ES5: `var`, `function`, žádné třídy/moduly/import), krátký a čitelný, komentáře česky.
- Playwright pro Python je nainstalovaný (Chromium, `from playwright.sync_api import sync_playwright`). Testuj na viewportu 412×915.
  Tmavý vzhled: `localStorage.setItem('agility-theme-v1','"dark"')` + reload. Angličtina: `localStorage.setItem('agility-lang-v1','"en"')` + reload.
- Síť ze shellu je omezená (npm/pip nejde). Žádné externí knihovny ani CDN; když něco potřebuješ (např. QR kód), napiš to sám.

## Hlavní API (globální)
- `$(id)`, `esc(s)` (escapování HTML), `lsGet(key, def)`, `lsSet(key, val)` (JSON v localStorage; `lsSet` vyšle událost `store`).
- Dialogy: `openSheet(html, onClick)` (spodní panel, klik delegovaný přes `data-a` apod.), `closeSheet()`, `ask(title, text, okLabel, cb, danger)`, `toast(text)`.
- Ikony: `IC` (SVG 24×24, stroke `currentColor`), přidání: `IC.flag='<svg viewBox="0 0 24 24" …>'`. Statické prvky s `data-ic="jmeno"` dostanou ikonu při startu.
- Navigace: `show(v)` přepne hlavní pohled (`plan`, `lib`, `run`, `video`, `more`; UI agent přidává `home`, `train`).
- Aktuální parkur: `S = {W,H,obs:[{id,type,x,y,rot,bend?}],route:[id…],turns:[],sides:[],hp:[],meta:{id,name,cls,author,gen,dirty}}`, `save()`, `render()`, `ui()`, `topbar()`.
- Překážky: `DEF[type]` v `p_def.js` (typy viz soubor). `calc(obs,route,turns)` = geometrie dráhy psa (segmenty, délky), `metrics(obs,route,cls,turns)` → `{len,n,disc,sct,mct,spd,cls}`.
- Parkury: `listFor(tab)` (`'A1','A2','A3','tr','my'`), `findCourse(id)`, `loadCourse(c)`, `thumb(c)` (SVG náhled), `myDB()`/`mySave(L)` (vlastní parkury, klíč `agility-my-v1`).
- Značky a běhy: `MK[courseId]={fav,done,runs:[{d,t,f,r,tot,g,sct,mct,len,dog,cls,sp?}]}`, `getMark(id)`, `setMark(id,patch)`. `sp` = mezičasy (s od startu) pro každou překážku trasy.
- Hodnocení: `evalRun(t,f,r,dis,m)`, `GNAME={V:'Výborně',VD:'Velmi dobře',D:'Dobře',BO:'Bez ohodnocení',DIS:'Diskvalifikace'}`.
- Psi: `DOGS=[{id,name,size,cls,born?}]`, `curDog()`, `DOGC`, `saveDogs()`, `dogName(id)`, `SIZES`.
- Deník: `diary()` → `[{id,kind:'trenink'|'zavod',date:'YYYY-MM-DD',dog,event,judge,cls,g,tot,place,note,surface}]`, klíč `agility-diary-v1` (z něj počítá postup do vyšší třídy `promoHTML()`).
- Server (Supabase): `IS_SRV` (true v PWA a APK; na claude.ai false = bez sítě, funkce se serverem tam jen vysvětli), `sbCall(rpc, args)` → Promise (REST RPC s anon klíčem). Projekt `wtjyjknaibsamgczvaxy`.
- Soubory: `deliverFile(data, mime, name, share, text)` (stažení/sdílení v PWA i APK).
- Mezičasy a slabá místa: `l_split.js` (`SPL`, `splitOpen('live'|'video')`, `weakSpots`, `segCat`), řeč `sayText/saySheet`.
- Čísla a data: `fmt(v)` (1 desetinné místo), `fmt2(v)` (2 místa) – v češtině čárka, v angličtině tečka. Data: `toLocaleDateString(LOC)`.
- Jazyk a vzhled (`p_i18n.js`): `LANG` ('cs'|'en'), `LOC`, `T(cs)`, `setLang(l)`, `THEME` ('system'|'light'|'dark'), `setTheme(t)`, `isDark()`.

## HM – události a registr (c_pre.js)
- `HM.on(evt, fn)`, `HM.off(evt, fn)`, `HM.emit(evt, data)`.
  Události: `store {key}`, `runSaved {cid, idx, run}`, `courseLoaded {id}`, `courseSaved {id}`, `dogChanged {id}`, `view {v}`, `theme {theme, dark}`.
- Obrazovka modulu: `HM.screen(id, {title:'Závody', ic:'flag', group:'train'|'more', order:20, render:function(el, arg){…}})`.
  `group:'train'` = záložka v pohledu Trénink, `'more'` = položka v Více. `render` dostane prázdný kontejner a vykreslí do něj celé UI modulu
  (bez hlavního nadpisu, ten ukáže navigace). Může být volána opakovaně – vždy vykresli znovu.
- Karta na úvodní obrazovce: `HM.card(id, {order:20, render:function(el){…; return false /* = skrýt kartu */}})`.
  Doporučená kostra: `'<h3 class="hc-t">'+IC.flag+'Nejbližší závod</h3><p class="hint">…</p><div class="row"><button class="btn primary" data-…>…</button></div>'`.
- `HM.open(id, arg)` otevře obrazovku modulu. V základu z větve `dev` ji zatím vykreslí do `#moreBody` v pohledu Více (nový vzhled s pohledem Trénink
  dělá hlavní agent souběžně) – tak si modul testuj: `python3 src/assemble.py --mods r_comp.js --out $SCR/app.html --test`, pak v Playwrightu
  otevři `$SCR/app.t.html` přes `file://` a zavolej `HM.open('comp')`.
- Veřejné API modulu dej do `HM.<modul>` (např. `HM.stats.weak(dogId)`), nic dalšího globálně.

## Vzhled
- Používej jen CSS proměnné: `--bg --surface --sunk --field --grid --text --muted --border --accent --on-accent --zone --on-zone --good --warn --bad --display --body`
  (tmavý vzhled pak funguje sám). Žádné pevné barvy kromě výjimek (překážky v plánku).
- Komponenty (UI agent je přestyluje, názvy tříd zůstanou): `.btn`, `.btn.primary`, `.btn.danger`, `.chip`/`.chip.on`, `.seg` (přepínač), `.panel`, `.list`+`.item`,
  `.tiles`, `.row`, `.grid2`, `.hint`, `.code`, `.table`, `.opts`+`.opt`, v `openSheet` pak `h3`, `label` s `input/select/textarea`, `.acts`.
- Vlastní třídy modulu prefixuj (např. `.cmp-…`), styly dej do `<modul>.css` vedle modulu.
- Dotykové cíle aspoň 44 px, texty česky, tykání, stručně. Přístupnost: `aria-label` u ikonových tlačítek, `<label>` u polí.
- Animace krátké (150–250 ms) a respektuj `prefers-reduced-motion`.

## Překlad (angličtina)
- Zdrojový jazyk je čeština – piš UI texty česky. Angličtinu dodej ve slovníku `i18n/en_<jméno-modulu>.json` vedle modulu
  (např. `src/i18n/en_r_comp.json`), formát `{"exact":{…},"num":{…},"re":[…]}`:
  - `exact`: celý text jednoho textového uzlu DOM (mezery sloučené, ořezané) → překlad. Text rozdělený HTML značkami tvoří víc uzlů: `Čas <b>12 s</b>` → uzly `Čas` a `12 s`.
  - `num`: texty s čísly, každé číslo (`\d+([.,]\d+)?`) nahrazené `#`: `"Uloženo # parkurů": "Saved # courses"`. Každý český tvar množného čísla zvlášť (`# parkur`, `# parkury`, `# parkurů`).
    V překladu `#` doplní čísla popořadě, `#1`, `#2`… v jiném pořadí.
  - `re`: `["^Smazat (.+)\\?$", "Delete $1?"]` pro texty se jmény/daty (`$1` beze změny, `@1` přeloží i zachycenou část).
  - Atributy `aria-label`, `placeholder`, `title`, `alt` se překládají stejně.
- Uživatelská data (jména psů, parkurů, poznámky) obal prvkem s `translate="no"`, aby se nikdy nepřekládala.
- Text mimo DOM (canvas `fillText`, `speechSynthesis`, PDF, `confirm/alert`, `navigator.share`, `document.title`) posílej přes `T('česky')`.
  Hlas pro řeč: `LANG==='en'?'en-GB':'cs-CZ'`.
- Nepiš kód, který porovnává `textContent` s českým textem (po překladu nesedí); porovnávej s `T(…)` nebo stav drž v proměnné.
- `<option>` bez `value` dostane při překladu `value` = původní český text, takže logika s `select.value` funguje dál. U nových selectů dávej `value` vždy.
- Terminologie (britská angličtina podle FCI): parkur = course; plánek = course map; trasa = route; překážka = obstacle; skok = jump; zeď = wall;
  skok daleký = long jump; pneumatika = tyre; tunel = tunnel; slalom = weave poles (weaves); áčko = A-frame; kladina = dog walk; houpačka = seesaw;
  zóna = contact (zone); SČP = SCT (standard course time); MČP = MCT (maximum course time); chyba = fault; odmítnutí = refusal;
  diskvalifikace = disqualification (DIS); trestné body = penalty points; hodnocení V/VD/D/BO = Excellent/Very good/Good/Not classified (kódy V, VD, D, BO, DIS v odznacích nepřekládej);
  psovod = handler; vedení = handling; otočka doleva/doprava = wrap left/right; zadní strana = backside; křížení (čar) = crossing; třída = class (A0–A3);
  velikost psa = size category (XS, S, M, I, L); prohlídka parkuru = course walk; rozhodčí = judge; závod = competition; mezičasy = split times;
  rozcvička = warm-up; deník = training log; zaběhnuto = done (run in training); oblíbené = favourites; generátor = generator; stavba = build; přední/zadní/slepá změna = front/rear/blind cross.

## Data, bezpečnost, pravidla
- Nové klíče v localStorage začínej `agility-` (pak je zahrne záloha a synchronizace), např. `agility-comp-v1`. Záznamy s `id` a časem změny `u` (ms) kvůli slučování mezi zařízeními.
- Velká data (zvuk, video) do IndexedDB (databáze `handlermap`), ne do localStorage.
- Server: jen strukturovaná JSON data přes RPC funkce `SECURITY DEFINER` s kontrolou vstupů a limity velikosti. RLS zapnuté, žádný přímý přístup anon k tabulkám.
  NIKDY nevytvářej úložiště souborů (storage bucket) ani anonymní nahrávání souborů nebo veřejné odkazy na soubory. Neměň ani nemaž existující tabulky
  a funkce (`shared_courses`, `backups`, `course_catalog`, `course_catalog_meta`, RPC `get_catalog`, `share_course`, `get_course`, `backup_put`, `backup_get`).
  Změny schématu napiš jako SQL soubor `src/sql/<prefix>_<nazev>.sql` (idempotentní: `create table if not exists`, `create or replace function`,
  `revoke all … from anon, authenticated` + `grant execute` jen na RPC). Aplikuje je hlavní agent. Klienta testuj s napodobeným `sbCall`
  (v testu přepiš `window.sbCall` funkcí, která simuluje server v paměti podle tvého SQL), a do reportu napiš, co ověřit po nasazení.
- Žádné sledování uživatelů, žádné e-maily ani osobní údaje kromě přezdívky, kterou uživatel sám zadá.
- Neukládej nic mimo svůj scratch adresář a soubory, které ti zadání přidělí. Nepublikuj artefakty. Screenshoty neukládej do repozitáře
  (jen do scratch adresáře); do reportu dej jejich popis.
- Šetři tokeny: zdrojáky nečti celé, když stačí `grep`/`sed -n` na konkrétní místa; Playwright spouštěj cíleně.

## Závěrečná zpráva (tvoje poslední odpověď)
Stručně (do ~400 slov): vytvořené/změněné soubory, veřejné API a přesně jaké háčky má hlavní agent doplnit (soubor + kód), změny databáze,
co nejde a proč, cesty ke 2–4 screenshotům (světlý/tmavý, cs/en). Žádné dlouhé výpisy kódu.
