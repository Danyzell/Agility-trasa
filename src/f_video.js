
/* ---------- záložka Videa: obsah ---------- */
var YT=function(id){return 'https://www.youtube.com/watch?v='+id;}, ABS='Psí škola ABS';
var TOPICS=[
 {id:'jump',g:'Překážky',t:'Skok',s:'Náběh, odraz, doskok',D:5,
  cap:[[0,'Rovný náběh na střed laťky'],[.36,'Odraz: pes si sám změří vzdálenost'],[.5,'Nad laťkou už psovod ukazuje, kam se jde dál'],[.66,'Doskok a plynulý odběh']],
  steps:['Začni s laťkou na zemi nebo úplně nízko a odměňuj rovný přechod středem.','Přidej křídla a trénuj obíhání křídla z obou stran (cviky na jednom skoku).','Výšku zvedej postupně až na výšku kategorie psa.','Na techniku skoku používej skokové řady, kde si pes sám hledá odraz.','Plné výšky až u dospělého psa. Na závody smí pes od 18 měsíců.'],
  tips:['Laťka často padá, když psovod dá povel pozdě nebo psa „táhne“ tělem.','Pes čte, kam míří tvoje ramena a kam se díváš.'],
  v:[['en','Jumping Basics 1 (cvik Susan Salo)','YouTube',YT('WTJ853Ubh64')],['en','Cviky na jednom skoku (webinář)','YouTube',YT('UyW13HHfrN8')],['cz','Agility 6. díl: Učíme psa skákat','SpokojenyPes.cz, článek','https://www.spokojenypes.cz/agility-6-dil-ucime-psa-skakat/'],['en','One Jump Drills','AgilityNerd, článek','https://www.agilitynerd.com/blog/agility/courses/steve/onejumpdrills/']]},
 {id:'tunnel',g:'Překážky',t:'Tunel',s:'Vstup, oblouk, výběh',D:7,
  cap:[[0,'Pes vbíhá do tunelu rovně'],[.3,'Psovod mezitím přebíhá k výstupu'],[.7,'Po výběhu pes hned vidí psovoda'],[.86,'Pokračují společně dál']],
  steps:['Začni s krátkým rovným tunelem: pomocník drží psa, ty voláš z druhé strany.','Tunel postupně prodlužuj a ohýbej do oblouku.','Posílej psa do tunelu z dálky a z různých úhlů.','Nacvič, aby pes po výběhu hned hledal psovoda.'],
  tips:['Vběhnutí do špatného otvoru znamená diskvalifikaci.','Tunel pod kladinou nebo áčkem je častá past, pes potřebuje jasný směr.'],
  v:[['cz','Štěně a první tunely (TunelMaayniac)',ABS,YT('M7clCIESiwM')],['en','Beginner Agility Training – The Tunnel','YouTube',YT('o53tQBq1_m0')],['en','Easily Teach Your Dog The Tunnel','YouTube',YT('PK1LlbNw0_A')]]},
 {id:'weave',g:'Překážky',t:'Slalom',s:'Vstup a proplétání',D:7,
  cap:[[0,'Vstup: první tyčka je vždy po levé straně psa'],[.3,'Pes proplétá tyčky v rytmu'],[.78,'Slalom musí být celý, teprve pak další překážka']],
  steps:['Metoda 2×2: začni se dvěma páry tyček, pes jimi projde a dostane odměnu.','Přidávej další páry a postupně je natáčej do přímé řady.','Až pes zvládá 12 tyček, trénuj vstupy z různých úhlů a z obou stran.','Nakonec přidej rychlost a vzdálenost psovoda.','Jiná možnost je metoda ulička: tyčky rozevřené do dvou řad, které se postupně stahují.'],
  tips:['Chybný vstup se trestá jako odmítnutí.','Proběhnutí slalomu opačným směrem přes víc než dvě branky znamená diskvalifikaci.'],
  v:[['cz','Doma se psem: slalom 2×2',ABS,YT('zAt2NY-f9So')],['en','Weave Poles – metoda 2×2','YouTube',YT('7anJ3egQmyw')],['cz','Agility 5. díl: Metody učení slalomu','SpokojenyPes.cz, článek','https://www.spokojenypes.cz/agility-5-dil-metody-uceni-slalomu/'],['en','5 kroků k samostatnému slalomu','OneMind Dogs, článek','https://www.oneminddogs.com/blog/achieve-indendent-weaves-in-dog-agility/']]},
 {id:'aframe',g:'Překážky',t:'A-rampa (áčko)',s:'Nahoru, přes vrchol, zóna',D:7,
  cap:[[0,'Pes vybíhá rovně nahoru'],[.42,'Přes vrchol bez skoku'],[.62,'Sestupná zóna: aspoň jedna tlapka do žluté'],[.82,'Zastavená zóna (2on2off), nebo sbíhaná zóna']],
  steps:['Vyber metodu zón: zastavovanou (2on2off) nebo sbíhanou.','Pro 2on2off nejdřív nauč pozici na nízké desce: přední tlapky na zemi, zadní na desce.','Pozici přenes na sníženou A-rampu a výšku zvedej postupně.','Odměňuj v pozici, uvolňuj až povelem.'],
  tips:['Na áčku se pes musí dotknout sestupné zóny aspoň jednou tlapkou.','Na nástupnou rampu musí pes vstoupit všemi čtyřmi, jinak diskvalifikace.','Vrchol je pro všechny kategorie ve výšce 170 cm.'],
  v:[['cz','Agility bez parkuru II: zastavované zóny','Pes pro život cz',YT('batITbWhM3o')],['en','EASY A-Frame Agility Training','YouTube',YT('LtwLs7svRgg')],['en','3 kroky ke spolehlivým zónám','OneMind Dogs, článek','https://www.oneminddogs.com/blog/dog-agility-training-3-steps-to-consistent-contact/']]},
 {id:'dogwalk',g:'Překážky',t:'Kladina',s:'Nástup, přechod, zastavení',D:8,
  cap:[[0,'Nástup na rampu všemi čtyřmi'],[.35,'Klidný přechod po horním dílu'],[.6,'Sestup do žluté zóny'],[.68,'Zastavení 2on2off: přední tlapky na zemi, zadní v zóně'],[.84,'Uvolnění povelem a pokračování']],
  steps:['Začni s prknem na zemi: pes po něm chodí klidně a na konci zaujme pozici.','Nacvič zastavenou nebo sbíhanou zónu stejně jako u áčka.','Kladinu zvedej postupně, pomocník jistí psa z boku.','Trénuj náběhy z různých úhlů.'],
  tips:['Sestupnou zónu musí pes trefit aspoň jednou tlapkou, jinak 5 trestných bodů.','Seskočení ze sestupného dílu dřív, než na něj pes stoupne všemi čtyřmi, je odmítnutí.','Kladina je vysoká 120–130 cm.'],
  v:[['cz','Doma se psem: sbíhané zóny II',ABS,YT('YQEuPUyrtGw')],['cz','Zastavované zóny: první nácvik','Pes pro život cz',YT('batITbWhM3o')],['en','Running contacts v 6 krocích (Shorts)','YouTube','https://www.youtube.com/shorts/nWrqCKyEavQ']]},
 {id:'seesaw',g:'Překážky',t:'Houpačka',s:'Překlopení a čekání',D:8,
  cap:[[0,'Pes nastoupí na spodní konec'],[.35,'Za osou se houpačka překlopí'],[.62,'Čeká, až se konec dotkne země'],[.8,'Teprve pak seskočí, jinak 5 trestných bodů']],
  steps:['Začni hrou s pohybem desky (bang game): pes sám sklápí nízko položený konec.','Postupně zvětšuj výšku, ze které se deska sklápí.','Nauč cílovou pozici na konci desky (2on2off nebo všechny 4 tlapky na desce).','Celou houpačku zkoušej, až pes bere pohyb i zvuk s klidem.'],
  tips:['Houpačka se musí dotknout země dřív, než z ní pes seskočí.','Pes musí trefit nástupní i sestupnou zónu.','Seskok dřív, než pes přejde osu, je odmítnutí.'],
  v:[['cz','Doma se psem: houpačka, jak začít',ABS,YT('fAdnN5h2XmU')],['en','Learning the Teeter – Seesaw','YouTube',YT('CHxJ7U4bnjY')],['en','Teach your dog the See-Saw',"Zac & Lucy's agility",YT('M_I9lqFktsw')]]},
 {id:'tire',g:'Překážky',t:'Kruh',s:'Proskok středem',D:5,
  cap:[[0,'Rovný náběh na kruh'],[.45,'Pes proskočí středem otvoru'],[.7,'Rozpadne-li se kruh při skoku, je to 5 trestných bodů']],
  steps:['Začni s kruhem nízko, pes jím prochází za odměnou.','Postupně zvedej do výšky kategorie (střed kruhu u L je 80 cm).','Trénuj rovný náběh i náběh pod úhlem.','V parkuru smí být kruh jen jednou.'],
  tips:['Rozpadne-li se kruh při odmítnutí, je to diskvalifikace.'],
  v:[['en','Tire Jump Training','YouTube',YT('WiZvIwRHN2M')],['en','Tire Jump Agility Training','YouTube',YT('cmRnfQjMcE4')]]},
 {id:'longjump',g:'Překážky',t:'Skok daleký',s:'Dlouhý plochý skok',D:5,
  cap:[[0,'Náběh rovně na začátek'],[.42,'Dlouhý plochý skok přes všechny díly'],[.72,'Proběhnutí nebo vyskočení do strany je odmítnutí']],
  steps:['Začni se dvěma díly blízko sebe.','Někteří trenéři zpočátku dávají nad díly laťku, aby pes skákal obloukem.','Postupně přidávej díly a délku podle kategorie (L 120–150 cm).','Trénuj hlavně rovný náběh.'],
  tips:['Převrácení dílu je 5 trestných bodů.','Rohové tyče nejsou součást překážky, jejich shození se netrestá.'],
  v:[['en','The Broad Jump','YouTube',YT('gbTSmI122T4')]]},
 {id:'front',g:'Vedení psa',t:'Čelo (front cross)',s:'Změna strany čelem k psovi',D:8,
  cap:[[0,'Pes běží po levé straně psovoda'],[.25,'Psovod předběhne psa a dostane se před jeho dráhu'],[.38,'Otočí se čelem k psovi a přejde na druhou stranu'],[.58,'Pes je teď vpravo a točí se k překážce 3'],[.8,'Pokračují společně k další překážce']],
  steps:['Nejdřív si dráhu projdi bez psa: kudy půjdeš a kde se otočíš.','Otoč se čelem k psovi v místě, kde má pes změnit stranu.','Po otočce psa hned veď k další překážce.','Začni pomalu na dvou skocích a postupně zrychluj.'],
  tips:['Na čelo musíš psa předběhnout, jinak otočku nestihneš.','Pes musí vidět tvůj obličej a ramena.'],
  v:[['cz','Doma se psem: handling, čelo',ABS,YT('-yduvVb5-50')],['en','Front and Rear Cross – základy','YouTube',YT('k-ANyPtCc4c')],['en','Front, blind a rear cross: jaký je rozdíl?','YouTube',YT('XOumJYkARv8')]]},
 {id:'rear',g:'Vedení psa',t:'Záda (rear cross)',s:'Přeběhnutí za psem',D:8,
  cap:[[0,'Pes běží před psovodem po jeho levé straně'],[.3,'Psovod pošle psa dopředu na překážku 2'],[.48,'Přeběhne za psem na druhou stranu'],[.62,'Pes se po skoku stočí na novou stranu psovoda'],[.82,'Pokračují k překážce 3']],
  steps:['Pes musí umět jít na překážku sám dopředu.','Zůstaň za psem a přejdi za ním na druhou stranu, když už míří na překážku.','Pes se po překážce otočí na tvou novou stranu.','Nacvič na jednom skoku s odměnou za správné otočení.'],
  tips:['Příliš brzký přechod pes chápe jako změnu směru ještě před překážkou.','Záda se hodí, když psa nestíháš předběhnout.'],
  v:[['en','Front and Rear Cross – základy','YouTube',YT('k-ANyPtCc4c')],['en','Front, blind a rear cross: jaký je rozdíl?','YouTube',YT('XOumJYkARv8')],['cz','Doma se psem: outy (práce na dálku)',ABS,YT('hzDQPrk5gT4')]]},
 {id:'blind',g:'Vedení psa',t:'Blind (blind cross)',s:'Změna strany zády k psovi',D:8,
  cap:[[0,'Pes běží po levé straně psovoda'],[.25,'Psovod je před psem a běží dál'],[.38,'Na okamžik se k psovi otočí zády a přejde na druhou stranu'],[.58,'Hned se ohlédne přes druhé rameno, pes je vpravo'],[.8,'Pokračují k další překážce']],
  steps:['Jsi před psem a běžíš od něj.','Na okamžik se k psovi otoč zády a přejdi na jeho druhou stranu.','Hned se po něm ohlédni přes druhé rameno.','Hodí se tam, kde potřebuješ zůstat v pohybu dopředu.'],
  tips:['Blind je rychlý, ale potřebuješ náskok před psem.','Psa při něm krátce nevidíš, trasu musíš mít jistou.'],
  v:[['en','Blind Cross Agility Handling Technique','YouTube',YT('Tf2jN41j2B8')],['en','Front, blind a rear cross: jaký je rozdíl?','YouTube',YT('XOumJYkARv8')]]},
 {id:'wrap',g:'Vedení psa',t:'Otočka vnitřkem (vlásenka)',s:'Kolem křídla k psovodovi',D:7,
  cap:[[0,'Psovod je vpravo od psa, pes skáče rovně přes laťku'],[.42,'Hned za laťkou se otočí o 180° kolem křídla'],[.58,'Otočka vnitřkem: pes se točí směrem k psovodovi'],[.8,'Psovod mu pomáhá pozicí těla a přivoláním']],
  steps:['Na jednom skoku nauč psa obtočit křídlo zpět k tobě.','Odměňuj hned za křídlem u tvé nohy.','Nacvič otočku z obou stran, doleva i doprava.','Pro otočku vnitřkem a venkem používej dva různé povely.'],
  tips:['Čím dřív pes otočku pozná, tím kratší bude jeho dráha.','V Plánu se otočka ukáže jako smyčka dráhy kolem křídla. Nastavíš ji u skoku v seznamu Pořadí překážek.'],
  v:[['cz','Doma se psem: vlásenkovka',ABS,YT('FLXFPkvB9Z4')],['cz','Doma se psem: vlásenkovka II',ABS,YT('37uPQ63sGrc')],['en','Agility Jump Wrap Handling Techniques','YouTube',YT('xKS6UylV9t4')]]},
 {id:'spin',g:'Vedení psa',t:'Otočka venkem (topspin)',s:'Kolem křídla od psovoda',D:7,
  cap:[[0,'Psovod je vpravo od psa, pes skáče rovně přes laťku'],[.45,'Za laťkou se pes otočí kolem druhého křídla'],[.6,'Otočka venkem: pes se točí pryč od psovoda'],[.78,'Pak se vrací k psovodovi a pokračují dál']],
  steps:['Na jednom skoku nauč psa otočit se kolem křídla směrem od tebe.','Začni s odměnou hozenou za křídlo na tu stranu, kam se má pes točit.','Přidej vlastní povel, jiný než pro otočku vnitřkem.','Trénuj z obou stran a pak v krátkých sekvencích z generátoru (Otočky kolem křídla).'],
  tips:['Otočka venkem se hodí, když psovod nestihne být na vnitřní straně otočky.','Pes musí rozlišit povel pro otočku k tobě a od tebe, jinak se otočí na špatnou stranu.'],
  v:[['cz','Doma se psem: topspin',ABS,YT('CMP4sbLTa_s')],['en','Agility Jump Wrap Handling Techniques','AgilityNerd',YT('xKS6UylV9t4')]]},
 {id:'backside',g:'Vedení psa',t:'Zadní strana skoku',s:'Oběhnutí křídla a skok zezadu',D:8,
  cap:[[0,'Pes běží podél skoku, laťku zatím mine'],[.45,'Za skokem oběhne křídlo'],[.62,'Skočí laťku ze zadní strany, zpátky směrem k psovodovi'],[.8,'Pokračuje k další překážce']],
  steps:['Začni u jednoho skoku: pes oběhne křídlo a skočí laťku směrem k tobě.','Odměnu dávej za laťkou, ať pes zadní stranu hledá sám.','Postupně stůj dál a posílej psa na zadní stranu z různých úhlů.','V parkuru psovi zadní stranu ukaž včas, dřív než skočí přední stranu.'],
  tips:['Když pes skočí laťku z přední strany, bere překážku v opačném směru. Podle pravidel FCI je to diskvalifikace.','Generátor staví zadní strany v A2 a A3. Na trénink je najdeš v Generátoru sekvencí.'],
  v:[['en','How to Train the Dog Agility Backside Jump','YouTube',YT('EymhwnPnVwg')],['en','Teaching the Backside Jump (trénink na zahradě)','YouTube',YT('-IDlWb6IaYU')],['en','3 Ways To Do A Backside In Dog Agility','YouTube',YT('kP3flpmPj60')],['en','Backside Jump Training Challenge','OneMind Dogs, video zdarma','https://app.oneminddogs.com/course/Free-Agility-Drills-And-Course-Plans/Backside-Jump-Agility-Training-Challenge/']]},
 {id:'start',g:'Vedení psa',t:'Start a náskok',s:'Čekání a uvolnění',D:8,
  cap:[[0,'Pes čeká v sedu nebo lehu za první překážkou'],[.12,'Psovod odchází dopředu (náskok)'],[.38,'Uvolnění povelem: pes vybíhá až na něj'],[.6,'Psovod už běží dál, pes ho dobíhá']],
  steps:['Nauč psa spolehlivě čekat za první překážkou.','Odcházej postupně dál a vracej se odměnit na místo.','Uvolňuj jen povelem, ne pohybem.','Náskok ti dá čas dostat se na dobré místo pro první změnu směru.'],
  tips:['Pes, kterému projde vyběhnutí před povelem, bude vybíhat dál.','Odměnu občas dones na místo, kde pes čeká.'],
  v:[['cz','Doma se psem: velký náskok na startu',ABS,YT('DO7RWtavdgs')]]},
 {id:'comp',g:'Závody',t:'První závody',s:'Co připravit',
  steps:['Vyřiď si výkonnostní průkaz (VP) s předstihem, doručení může trvat až 30 dní.','Pes musí být starší 18 měsíců a čipovaný nebo tetovaný.','Přihlášky na závody v ČR jsou na kacr.info, začíná se v A0 (bez zón, slalomu a kruhu) nebo A1.','Nacvič s psem měření u rozhodčího, na prvních závodech se pes měří.','Před během máš čas na prohlídku parkuru bez psa: zapamatuj si pořadí (pomůže Trénink paměti v Plánu).'],
  tips:['Při běhu nesmí mít pes obojek a psovod nic v ruce.','Hodnocení: 0–5,99 trestných bodů Výborně, 6–15,99 Velmi dobře, 16–25,99 Dobře, víc Bez ohodnocení.'],
  v:[['cz','Doma se psem: měření psa na prvních závodech',ABS,YT('oePbfjAmrkY')],['cz','Přes překážky – agility (reportáž)','YouTube',YT('CE6YquH2xQs')],['cz','Kalendář a přihlášky na závody','kacr.info','https://kacr.info/']]}
];

/* ---------- záložka Videa: přehrávač ---------- */
var VID={id:null,t0:0,pos:0,on:false,raf:0,spd:1};
function topicIcon(id){
  var m={jump:'M4,22V10M28,22V10M4,13H28',tunnel:'M4,22C4,4 28,4 28,22',weave:'M4,16H28M6,12V20M11,12V20M16,12V20M21,12V20M26,12V20',aframe:'M3,24L16,6L29,24',dogwalk:'M2,24L9,12H23L30,24',seesaw:'M3,20L29,12M14,24L16,16L18,24',tire:'M16,16m-7,0a7,7 0 1,0 14,0a7,7 0 1,0 -14,0',longjump:'M5,22h5v-3h-5zM12,22h5v-4h-5zM19,22h5v-5h-5z',front:'M6,20C14,20 18,6 26,8',rear:'M6,20C16,20 20,14 24,6',blind:'M6,8C14,8 18,22 26,20',wrap:'M4,16H20C28,16 28,24 20,24H8',spin:'M4,16H20C28,16 28,8 20,8H8',backside:'M4,24H22C29,24 29,12 22,12H6M15,8V16',start:'M4,24V14M4,14H12M20,24V10M28,24V10',comp:'M10,6H22V14A6,6 0 0 1 10,14ZM16,20V26M11,26H21'};
  return '<svg viewBox="0 0 32 28" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="'+(m[id]||'M4,14H28')+'"/></svg>';
}
function videoRender(){
  if(VID.id){ showTopic(VID.id); return; }
  $('vidDetail').hidden=true; $('vidList').hidden=false;
  var groups={}; TOPICS.forEach(function(t){(groups[t.g]=groups[t.g]||[]).push(t);});
  $('vidList').innerHTML='<p class="hint">Animace ukazují správnou techniku. U každého tématu je postup nácviku a vybraná videa trenérů, česká i zahraniční.</p>'+
    Object.keys(groups).map(function(g){return '<h2>'+esc(g)+'</h2><div class="topics">'+groups[g].map(function(t){
      return '<button class="topic" data-top="'+t.id+'">'+topicIcon(t.id)+(SC[t.id]&&v3dOK()?'<span class="b3d">3D</span>':'')+'<b>'+esc(t.t)+'</b><span>'+esc(t.s)+'</span></button>';}).join('')+'</div>';}).join('')+
    '<h2 style="margin-top:14px">Knihy</h2><div class="coach-list">'+BOOKS.map(function(b){return '<a class="coach" href="'+b[2]+'" target="_blank" rel="noopener"><span class="cc">CZ</span><span><b>'+esc(b[0])+'</b><span>'+esc(b[1])+'</span></span>'+IC.ext+'</a>';}).join('')+'</div>';
}
function topicById(id){for(var i=0;i<TOPICS.length;i++) if(TOPICS[i].id===id) return TOPICS[i]; return null;}
function showTopic(id){
  var t=topicById(id); if(!t) return; VID.id=id; stopVid();
  var use3=!!SC[id]&&v3dOK();
  $('vidList').hidden=true; var d=$('vidDetail'); d.hidden=false;
  d.innerHTML='<button class="btn backlink" data-vback="1">'+IC.back+'Všechna témata</button><h2>'+esc(t.t)+'</h2>'+
    (SC[id]?'<div class="stage">'+(use3?'<canvas id="vStage3" width="360" height="180" hidden role="img" aria-label="3D animace: '+esc(t.t)+'"></canvas>':'')+'<svg id="vStage" viewBox="0 0 100 50" role="img" aria-label="Animace: '+esc(t.t)+'"></svg></div><div class="caption" id="vCap" aria-live="polite"></div>'+
      '<div class="row"><button class="btn primary" id="vPlay">Pauza</button><button class="btn" id="vRe">Od začátku</button><div class="seg" id="vSpd"><button data-s=".5">0,5×</button><button data-s="1" class="on">1×</button></div></div>':'')+
    '<h2>Jak na to</h2><ol class="steps">'+t.steps.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ol>'+
    (t.tips?'<h2>Na co si dát pozor</h2><ul class="tips">'+t.tips.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>':'')+
    '<h2>Videa a články</h2><div class="vlinks">'+t.v.map(function(v){return '<a class="vlink" href="'+esc(v[3])+'" target="_blank" rel="noopener"><span class="lang '+v[0]+'">'+v[0].toUpperCase()+'</span><span><b>'+esc(v[1])+'</b><span>'+esc(v[2])+'</span></span>'+IC.ext+'</a>';}).join('')+'</div>'+
    '<p class="hint">Videa se otevřou v aplikaci YouTube nebo v prohlížeči.</p>';
  if(SC[id]){ VID.pos=0; VID.spd=1; playVid(); if(use3) v3dStart(id); }
  try{window.scrollTo(0,0);}catch(e){}
}
function frameVid(){
  var t=topicById(VID.id); if(!t||!SC[VID.id]) return;
  var now=performance.now(), p=VID.on?(VID.pos+(now-VID.t0)/1000*VID.spd/t.D)%1:VID.pos;
  var st=$('vStage'); if(!st){stopVid(); return;}
  if(V3D.api){ try{ V3D.api.render(p); }catch(e){ v3dFallback(); } } else st.innerHTML=SC[VID.id](p);
  var c=''; t.cap.forEach(function(k){if(p>=k[0]) c=k[1];}); var ce=$('vCap'); if(ce&&ce.getAttribute('data-c')!==c){ ce.setAttribute('data-c',c); ce.textContent=c; }
  if(VID.on) VID.raf=requestAnimationFrame(frameVid);
}
function playVid(){ VID.on=true; VID.t0=performance.now(); cancelAnimationFrame(VID.raf); VID.raf=requestAnimationFrame(frameVid); var b=$('vPlay'); if(b) b.textContent='Pauza'; }
function pauseVid(){ var t=topicById(VID.id); if(VID.on&&t){VID.pos=(VID.pos+(performance.now()-VID.t0)/1000*VID.spd/t.D)%1;} VID.on=false; cancelAnimationFrame(VID.raf); frameVid(); var b=$('vPlay'); if(b) b.textContent='Přehrát'; }
function stopVid(){ VID.on=false; cancelAnimationFrame(VID.raf); v3dStop(); }

/* ---------- 3D animace techniky (three.js v souboru v3d/v3d.js, stáhne se až při otevření tématu) ----------
   Když chybí WebGL, soubor se nenačte nebo se ztratí kontext grafiky, zůstane 2D animace (SVG). */
var V3D={api:null,gen:0,fail:false,gl:null,mod:null};
function v3dOK(){
  if(V3D.fail) return false;
  if(V3D.gl==null){ V3D.gl=false; try{ var c=document.createElement('canvas'), g=window.WebGLRenderingContext&&(c.getContext('webgl2')||c.getContext('webgl'));
    if(g){ V3D.gl=true; var x=g.getExtension('WEBGL_lose_context'); if(x) x.loseContext(); } }catch(e){ V3D.gl=false; } }
  return V3D.gl;
}
function v3dLoad(){
  /* dynamický import přes Function: starší prohlížeče bez import() tak neshodí celý skript */
  if(!V3D.mod){ try{ V3D.mod=(new Function('u','return import(u)'))('./v3d/v3d.js'); }catch(e){ V3D.mod=Promise.reject(e); } }
  return V3D.mod;
}
function v3dStart(id){
  var g=++V3D.gen, t=topicById(id);
  v3dLoad().then(function(m){
    if(g!==V3D.gen||VID.id!==id) return;
    var cv=$('vStage3'), sv=$('vStage'); if(!cv||!sv||(m.hasScene&&!m.hasScene(id))) return;   /* scéna v 3D (zatím) není: zůstane 2D */
    cv.hidden=false; sv.style.display='none';
    var api=m.mount(cv,id,{D:t.D});
    cv.addEventListener('webglcontextlost',function(e){ if(V3D.api===api){ e.preventDefault(); v3dFallback(); } });
    V3D.api=api; api.resize(); frameVid();
  }).catch(function(){ if(g===V3D.gen) v3dFallback(); });
}
function v3dStop(){ V3D.gen++; var a=V3D.api; V3D.api=null; if(a){ try{a.dispose();}catch(e){} } }
function v3dFallback(){
  V3D.fail=true; v3dStop();
  var cv=$('vStage3'), sv=$('vStage'); if(cv) cv.hidden=true; if(sv) sv.style.display='';
  if(VID.id) frameVid();
}
window.addEventListener('resize',function(){ if(V3D.api) V3D.api.resize(); if(V3D.api&&!VID.on) frameVid(); });
/* skrytá stránka: animace se zastaví a po návratu pokračuje */
document.addEventListener('visibilitychange',function(){
  if(document.visibilityState==='hidden'){ if(VID.on){ VID.resume=true; pauseVid(); } }
  else if(VID.resume){ VID.resume=false; if(VID.id&&$('vStage')) playVid(); }
});
$('vidList').onclick=function(e){var b=e.target.closest('[data-top]'); if(b) showTopic(b.getAttribute('data-top'));};
$('vidDetail').onclick=function(e){
  if(e.target.closest('[data-vback]')){stopVid(); VID.id=null; $('vidDetail').innerHTML=''; videoRender(); return;}
  if(e.target.closest('#vPlay')){VID.on?pauseVid():playVid(); return;}
  if(e.target.closest('#vRe')){VID.pos=0; playVid(); return;}
  var s=e.target.closest('#vSpd button'); if(s){ if(VID.on) pauseVid(); VID.spd=+s.getAttribute('data-s'); Array.prototype.forEach.call(document.querySelectorAll('#vSpd button'),function(x){x.classList.toggle('on',x===s);}); playVid(); }
};
