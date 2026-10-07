# Spolupráce na Pawkuru (dříve AgiPlan)

Aktuální stav, postup a co dál: [PREDANI.md](PREDANI.md).

Na aplikaci pracují souběžně dvě sezení Claude Code. Aby se nepřepisovala:

- **Před prací** si vždy stáhni aktuální `main` (`git fetch origin && git checkout main && git pull`) a stav na něm.
- **Každou změnu** pošli jako pull request do `main`. Žádný force-push. Konflikty řeš tak, aby se nic z druhého sezení neztratilo.
- **Kdo na čem dělá** (uprav, když se to změní):
  - Sezení A: úvodní obrazovka Domů, Parkur týdne, 3D animace techniky, testy a opravy (verze 1.10–1.13). Na přání uživatele i spodní nabídka jako plovoucí panel (CSS blok „plovoucí tmavý panel“ hned za „spodní navigace“). Postupně dál: 3D průlet vlastního parkuru, opravy 3D animací, domácí sekvence a zátěž psa, výsledky z kacr.info a hledání psa, přehlednější Plán (režim Prohlížet, souhrn v jednom řádku, nabídka Nástroje, zoom na ploše), přehlednější Běh, Zahrada týdne a Zahradní liga.
    - Kratší karty parkurů (2 řádky + barevný štítek náročnosti), Více jako svislá nabídka se Zpět (`moreTab=''` = nabídka), cíle pro palec ≥ 44 px (filtry, Prohlížet/Stavba/Trasa, zoom, Diskvalifikace) – jen rozměry ve vlastním CSS bloku „Sezení A: kratší karty…“, vzhled tlačítek nechává sezení B.
    - Kolbiště podle GPS (issue #37): Plán → Nástroje → Kolbiště (GPS), kód v `index.html` od „kolbiště podle GPS“ (`ringOpen`, `geoMeasure`, `ringParse`), klíč `agility-rings-v1` (jen v zařízení, není v `SYNC_KEYS`). Natočení kolbiště (`az`) používá Stavba v terénu (`FLD.az`) a AR na place (`spec.az` + `ui.heading` v `v3d/src/ar.js`). Testy `tests/kolbiste.js`.
  - Sezení B: název HandlerMap (na přání uživatele přejmenováno sezením A na AgiPlan, verze 2.1), angličtina, tmavý vzhled a Nastavení, průvodce prvním spuštěním, vzhled tlačítek a přechodů (verze 2.0).

## Angličtina (platí pro všechny změny)

- Zdrojový jazyk je čeština. Texty v DOM se do angličtiny překládají samy podle slovníků (`i18nAdd({...})` v `index.html`).
- **Když přidáš nový český text**, dopiš jeho anglickou verzi do `I18N_EXTRA` (v `index.html` hledej „Překlady nových textů“). Formát: `exact` (celý text), `num` (čísla nahrazená `#`), `re` (regulární výraz, `$1` beze změny, `@1` přeložit).
- Text mimo DOM (canvas, řeč, PDF, `navigator.share`) pošli přes `T('česky')`. Jména psů a parkurů obal atributem `translate="no"`.
- Jazyk: `LANG` (`cs`/`en`), `setLang()`, klíč `agility-lang-v1`. Vzhled: `THEME`, `setTheme()`, klíč `agility-theme-v1`.

## Testy

`node tests/run.js` (Playwright). V automatickém testu (`navigator.webdriver`) běží aplikace česky a bez průvodce prvním spuštěním; průvodce si test vyžádá adresou `?onb`.
