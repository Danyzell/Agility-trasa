# Spolupráce na HandlerMap

Na aplikaci pracují souběžně dvě sezení Claude Code. Aby se nepřepisovala:

- **Před prací** si vždy stáhni aktuální `main` (`git fetch origin && git checkout main && git pull`) a stav na něm.
- **Každou změnu** pošli jako pull request do `main`. Žádný force-push. Konflikty řeš tak, aby se nic z druhého sezení neztratilo.
- **Kdo na čem dělá** (uprav, když se to změní):
  - Sezení A: úvodní obrazovka Domů, Parkur týdne, 3D animace techniky, testy a opravy (verze 1.10–1.13). Na přání uživatele i spodní nabídka jako plovoucí panel (CSS blok „plovoucí tmavý panel“ hned za „spodní navigace“). Postupně dál: 3D průlet vlastního parkuru, opravy 3D animací, domácí sekvence a zátěž psa, výsledky z kacr.info a hledání psa, přehlednější Plán (režim Prohlížet, souhrn v jednom řádku, nabídka Nástroje, zoom na ploše).
  - Sezení B: název HandlerMap, angličtina, tmavý vzhled a Nastavení, průvodce prvním spuštěním, vzhled tlačítek a přechodů (verze 2.0).

## Angličtina (platí pro všechny změny)

- Zdrojový jazyk je čeština. Texty v DOM se do angličtiny překládají samy podle slovníků (`i18nAdd({...})` v `index.html`).
- **Když přidáš nový český text**, dopiš jeho anglickou verzi do `I18N_EXTRA` (v `index.html` hledej „Překlady nových textů“). Formát: `exact` (celý text), `num` (čísla nahrazená `#`), `re` (regulární výraz, `$1` beze změny, `@1` přeložit).
- Text mimo DOM (canvas, řeč, PDF, `navigator.share`) pošli přes `T('česky')`. Jména psů a parkurů obal atributem `translate="no"`.
- Jazyk: `LANG` (`cs`/`en`), `setLang()`, klíč `agility-lang-v1`. Vzhled: `THEME`, `setTheme()`, klíč `agility-theme-v1`.

## Testy

`node tests/run.js` (Playwright). V automatickém testu (`navigator.webdriver`) běží aplikace česky a bez průvodce prvním spuštěním; průvodce si test vyžádá adresou `?onb`.
