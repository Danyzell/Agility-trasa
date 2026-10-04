# HandlerMap

(dříve Agility trasa)

Plánovač agility parkurů jako aplikace do telefonu.

Instalace: otevři stránku v Chromu na Androidu a zvol **Instalovat aplikaci** (nebo ⋮ → Přidat na plochu). Aplikace pak běží z ikony na ploše, i offline.

Verze 2.0. Česky i anglicky (Více → Nastavení), světlý i tmavý vzhled.

Trénink doma (Domů → Trénink doma, nebo Parkury → Generátor → Z parkurů): aplikace vyřízne ze skutečných parkurů úseky, které se vejdou na tvou plochu a postavíš je z vlastního vybavení. Pořadí, otočky kolem křídla i zadní strany zůstanou jako na parkuru. Úseky jde filtrovat podle toho, co chceš trénovat, otočit zrcadlově (otočky na druhou stranu) a kruh nebo skok daleký nahradit skokem; k úseku se ukládají oblíbené i běhy.

Výsledky ze závodů: v profilu psa (Více → Psi) vlož odkaz na psa na kacr.info. Aplikace stáhne jeho výsledky (serverová funkce `supabase/functions/kacr`), ukáže statistiky a graf rychlosti a v Plánu odhadne čas psa na parkuru vůči SČP.

Na aplikaci pracuje víc sezení Claude Code najednou – pravidla jsou v [SPOLUPRACE.md](SPOLUPRACE.md).

3D animace techniky v záložce Videa jsou ve `v3d/src` (three.js); balíček `v3d/v3d.js` se sestaví příkazem `v3d/build.sh` (esbuild).

## Testy

Automatické testy v prohlížeči (všechny obrazovky, uložení parkuru, běh, záloha a obnova, tlačítko Zpět, Plánek z obrázku, kompas, offline start) běží na GitHubu při každé změně, v záložce Actions → Testy. Ručně:

```
npm install --no-save playwright && npx playwright install chromium && node tests/run.js
```
