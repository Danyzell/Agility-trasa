# Agility trasa

Plánovač agility parkurů jako aplikace do telefonu.

Instalace: otevři stránku v Chromu na Androidu a zvol **Instalovat aplikaci** (nebo ⋮ → Přidat na plochu). Aplikace pak běží z ikony na ploše, i offline.

Verze 1.10.

## Testy

Automatické testy v prohlížeči (všechny obrazovky, uložení parkuru, běh, záloha a obnova, tlačítko Zpět, offline start) běží na GitHubu při každé změně, v záložce Actions → Testy. Ručně:

```
npm install --no-save playwright && npx playwright install chromium && node tests/run.js
```
