setSizeSel();
/* ukázkový parkur jen při úplně prvním spuštění; prázdná plocha po Nový zůstane prázdná */
if(FRESH&&!S.obs.length&&!S.meta.id){ var first=listFor('A1')[0]; if(first) loadCourse(first,true); }
/* nová verze vestavěných parkurů má nová id; rozběhnutý starší parkur bez úprav se nahradí stejnojmenným z nové verze */
else if(S.meta.gen&&S.meta.id&&/^A[123]-\d\d(-v\d+)?$/.test(S.meta.id)&&!S.meta.dirty&&!findCourse(S.meta.id)){
  var nm0=S.meta.id.slice(0,5), nc=listFor(nm0.slice(0,2)).filter(function(c){return c.name===nm0;})[0]; if(nc) loadCourse(nc,true); }
drawGrid(); ui(); render(); topbar(); undoReset();
/* start na Domů; odkaz s #plan, #lib, #run, #video nebo #more otevře rovnou danou záložku */
(function(){ var h=(location.hash||'').slice(1); show(['plan','lib','run','video','more'].indexOf(h)>=0?h:'home'); })();
setTimeout(onbStart,250);
var nw0=catScan(); catUI(); if(nw0.length) setTimeout(function(){newToast(nw0.length);},700);
$('catBtn').onclick=catCheck;
catSync();
