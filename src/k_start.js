
/* ---------- Začínáme: štěně a začátečníci ---------- */
function dogAgeM(d){
  if(!d||!/^\d{4}-\d{2}$/.test(d.born||'')) return null;
  var p=d.born.split('-'), now=new Date(), m=(now.getFullYear()-(+p[0]))*12+(now.getMonth()+1-(+p[1]));
  return m>=0&&m<300?m:null;
}
function ageTxt(m){ if(m==null) return ''; if(m<24) return m+' '+(m===1?'měsíc':m>=2&&m<=4?'měsíce':'měsíců'); var y=Math.floor(m/12); return y+' '+(y<5?'roky':'let'); }
/* fáze podle věku; od (v měsících) */
var PUP=[
  {od:2,l:'8–16 týdnů: hra a vztah',t:'Jméno a přivolání, hra s pamlskem i přetahovadlem, cíl rukou, chůze u psovoda z obou stran. Různé povrchy, krátký rovný tunel stažený na metr, prkno těsně nad zemí, které se trochu hýbe. Lekce 3–5 minut několikrát denně.'},
  {od:4,l:'4–6 měsíců: vedení bez překážek',t:'Pes běží k odměně u levé i pravé nohy, obíhá kužel nebo tyč na obě strany (základ otoček kolem křídla), přední a zadní křížení na place. Tyčka ležící na zemi místo skoku, delší tunel i do oblouku. Cíl na podložce na konci prkna jako příprava na zóny. Lekce 5–10 minut.'},
  {od:6,l:'6–12 měsíců: první krátké sekvence',t:'Skoky nízko (tyčka na zemi nebo pár centimetrů), skokové řady bez výšky na správné odrazy, sekvence 3–5 překážek s tunelem. Otočky kolem křídla v nízké výšce. Slalom jen kanálem nebo metodou 2×2 s otevřenými tyčemi, zóny na nízkém prkně, houpačka jen nízko a pomalu. K tomu posilování a pohyb v terénu.'},
  {od:12,l:'12–18 měsíců: postupně k plné výšce',t:'Výšku skoků zvyšuj pomalu a až po uzavření růstových plotének: u malých plemen bývají uzavřené kolem 12 měsíců, u velkých a pomalu dospívajících později, jistotu dá veterinář. Celý slalom, plnou kladinu a A-rampu doporučují zkušení trenéři až kolem 14–16 měsíců. Kratší parkury, hodně odměn.'},
  {od:18,l:'Od 18 měsíců: závody',t:'V Česku smí na závody pes starší 18 měsíců. Začíná se v třídě A1, výkonnostní průkaz je potřeba vyřídit aspoň měsíc předem, pes musí mít platné očkování a na prvních závodech ho rozhodčí změří do kategorie.'}
];
var DRILLS_START=[['Cíl rukou','Pes se dotkne nosem dlaně. Z toho pak vzniká přivolání k noze a vedení rukou.'],
  ['Zóna odměny','Odměna vždy u nohy psovoda, zleva i zprava. Pes se učí, kde má běžet.'],
  ['Obíhání kužele','Pes oběhne kužel nebo tyč a vrátí se k tobě, na obě strany. Základ otoček kolem křídla.'],
  ['Tyčka na zemi a skoková řada','Tyčky na zemi nebo úplně nízko v řadě. Pes se učí odraz a dopad bez zátěže kloubů.'],
  ['Tunel s pomocníkem','Krátký rovný tunel, pomocník drží psa, ty ho voláš z druhé strany. Pak delší a do oblouku.'],
  ['Houpající se prkno','Prkno na nízké podložce, které se trochu hýbe. Příprava na houpačku bez strachu z pohybu.'],
  ['Cíl na konci prkna','Pes zůstane stát zadníma nohama na prkně a předníma na podložce. Příprava na zóny.'],
  ['Křížení bez překážek','Přední a zadní křížení při chůzi a klusu na place. Pes se učí číst tvoje tělo.'],
  ['Slalom 2×2','Dvě dvojice tyček, které se postupně přidávají a natáčejí. Až od zhruba půl roku a jen krátce.']];
var SAFE=['Do uzavření růstových plotének žádné skoky v plné výšce a žádné opakované ostré obraty ve velké rychlosti.',
  'Před tréninkem rozcvička, po něm vychladnutí (záložka Rozcvička).',
  'Povrch s dobrou přilnavostí: tráva nebo umělý trávník, ne kluzká podlaha ani beton.',
  'Krátké lekce, 2–3 opakování. Konči, dokud pes ještě chce.',
  'U štěněte omez skákání z auta, z gauče a přes zábrany.',
  'Před závodním tréninkem prohlídka u veterináře, u velkých plemen rentgen kyčlí a loktů.'];
var START_SRC=[['Klub agility ČR: Jak na závod','Věk nejméně 18 měsíců, výkonnostní průkaz, očkování.','https://klubagility.cz/akce/jak-na-zavod/'],
  ['Klub agility ČR: Nejčastější otázky','Začíná se v třídě A1, měření psa, postup do A2.','https://klubagility.cz/akce/nejcastejsi-otazky/'],
  ['AKC: Is It Safe for Puppies to Jump?','Růstové ploténky, skoky v plné výšce až od 12–15 měsíců, skokové řady.','https://www.akc.org/expert-advice/training/puppies-dogs-jump-safely/'],
  ['Susan Garrett: Agility With a Puppy','Co trénovat se štěnětem a co odložit na 14–16 měsíců.','https://susangarrettdogagility.com/2026/01/agility-with-a-puppy/'],
  ['VCA: Puppy exercise and growth plates','Proč přetěžování škodí rostoucím kostem.','https://vcahospitals.com/pediatric/puppy/health-wellness/puppy-exercise']];
function startHTML(){
  var d=curDog(), m=dogAgeM(d), cur=-1;
  if(m!=null) PUP.forEach(function(p,i){ if(m>=p.od) cur=i; });
  var who=d?(m!=null?esc(d.name)+(d.name.length?' má ':'')+ageTxt(m)+'. '+(cur>=0?'Aktuální fáze je zvýrazněná.':'Je to ještě malé štěně, začni hrou.'):'U psa '+esc(d.name)+' doplň v záložce Psi datum narození a zvýrazní se fáze podle věku.'):'Přidej psa s datem narození a zvýrazní se fáze podle jeho věku.';
  return '<p class="hint">Agility se dá začít už se štěnětem, jen ne na překážkách v plné výšce. Nejdřív vztah, hra a vedení, překážky postupně podle věku a růstu. '+who+'</p>'+
    '<h2>Program podle věku</h2><div class="acc">'+PUP.map(function(p,i){return '<details'+(i===cur?' open class="cur"':'')+'><summary>'+esc(p.l)+(i===cur?' <span class="now">teď</span>':'')+'</summary><p>'+esc(p.t)+'</p></details>';}).join('')+'</div>'+
    '<h2>Cvičení pro začátek</h2><ul class="kv plain">'+DRILLS_START.map(function(x){return '<li><span><b>'+esc(x[0])+'</b><br><small>'+esc(x[1])+'</small></span></li>';}).join('')+'</ul>'+
    '<div class="row"><button class="btn" data-gpre="puppy">Sekvence pro štěně</button><button class="btn" data-gpre="novice">První sekvence</button><button class="btn" data-gpre="line">Skoková řada</button></div>'+
    '<h2>Bezpečnost</h2><ul class="fcilist">'+SAFE.map(function(t){return '<li class="info"><span class="i">•</span><span>'+esc(t)+'</span></li>';}).join('')+'</ul>'+
    '<h2>Zdroje</h2><div class="coach-list">'+START_SRC.map(function(s){return '<a class="coach" href="'+s[2]+'" target="_blank" rel="noopener"><span class="cc">'+(s[2].indexOf('klubagility')>0?'CZ':'EN')+'</span><span><b>'+esc(s[0])+'</b><span>'+esc(s[1])+'</span></span>'+IC.ext+'</a>';}).join('')+'</div>';
}
/* tlačítka předvoleb generátoru */
function startGen(k){
  if(k==='line'){ GEN.tab='drill'; GEN.drill='line'; } else { GEN.tab='seq'; GEN.skill=k; }
  show('lib'); genSheet();
}
