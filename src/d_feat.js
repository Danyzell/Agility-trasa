
/* ---------- dialogy a hlášky ---------- */
/* adresy náhledů (blob:) platí, dokud je dialog otevřený; pak se uvolní */
var SHEET_URLS=[];
function sheetUrl(blob){ var u=URL.createObjectURL(blob); SHEET_URLS.push(u); return u; }
function sheetUrlsFree(){ SHEET_URLS.forEach(function(u){ try{URL.revokeObjectURL(u);}catch(e){} }); SHEET_URLS=[]; }
function openSheet(html,onClick){
  sheetUrlsFree();
  var sh=$('sheet'); sh.innerHTML=html; sh.onclick=onClick; $('scrim').hidden=false;
  var h=sh.querySelector('h3'); if(h){ h.id='sheetT'; sh.setAttribute('aria-labelledby','sheetT'); } else sh.removeAttribute('aria-labelledby');
  sh.tabIndex=-1; var f=sh.querySelector('input:not([type=hidden]),select,textarea'); try{ (f||sh).focus({preventScroll:true}); }catch(e){} sh.scrollTop=0;
}
function closeSheet(){$('scrim').hidden=true; $('sheet').innerHTML=''; $('sheet').onclick=null; sheetUrlsFree();}
$('scrim').addEventListener('click',function(e){if(e.target===this) closeSheet();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!$('scrim').hidden) closeSheet();});
function ask(title,text,okLbl,cb,danger){
  openSheet('<h3>'+esc(title)+'</h3><p>'+esc(text)+'</p><div class="acts"><button class="btn" data-a="x">Zrušit</button><button class="btn '+(danger?'danger':'primary')+'" data-a="ok">'+esc(okLbl)+'</button></div>',
    function(e){var b=e.target.closest('[data-a]'); if(!b) return; closeSheet(); if(b.getAttribute('data-a')==='ok') cb();});
}
function toast(t,ms){var el=$('toast'); el.textContent=t; el.hidden=false; clearTimeout(toast.h); toast.h=setTimeout(function(){el.hidden=true;},ms||2400);}

/* ---------- databáze parkurů ---------- */
var DB={}, libTab='A1', libF='all', libSort='ord', TECHT={A1:4,A2:5.4,A3:7.4};
/* zdroj parkurů: katalog ze serveru (APK), jinak vestavěná data */
function getC(c){
  if(DB[c]) return DB[c];
  try{['v2','v3'].forEach(function(v){localStorage.removeItem('agility-db-'+c+'-'+v);});}catch(e){}
  var sv=catGroup(c); if(sv) return DB[c]=sv;
  if(typeof PREDB==='object'&&PREDB[c]) return DB[c]=decDB(PREDB[c]);
  return DB[c]=genClass(c);
}
function listFor(tab){
  if(tab==='my') return myDB().map(function(c){return {id:c.id,name:c.name,cls:c.cls,author:c.author,gen:false,W:c.W,H:c.H,obs:c.obs,route:c.route,sides:c.sides,hp:c.hp,turns:c.turns,src:c.src};});
  if(tab==='tr') return (catGroup('tr')||TRC).map(function(c){return {id:c.id,name:c.name,cls:c.cls,author:c.author,gen:false,W:c.W||40,H:c.H||20,obs:c.obs,route:c.route,turns:c.turns,src:c.src};});
  return getC(tab).map(function(c){return {id:c.id||c.name,name:c.name,cls:tab,author:c.author||'',gen:!c.author,W:c.W||40,H:c.H||20,obs:c.obs,route:c.route,turns:c.turns,len:c.len,src:c.src};});
}
/* náhled parkuru se skutečnou dráhou psa, i se smyčkami otoček */
function thumb(c,geo){
  var W=c.W||40, H=c.H||20, by={};
  c.obs.forEach(function(o){by[o.id]=o;});
  geo=geo||(c.route.length>1?calc(c.obs,c.route,c.turns||null):null);
  var d=geo?geo.segs.map(function(s){return s.d;}).join(' '):'';
  var s=by[c.route[0]], f=by[c.route[c.route.length-1]];
  return '<svg viewBox="0 0 '+W+' '+H+'" aria-hidden="true"><path d="'+d+'" fill="none" stroke="var(--zone)" stroke-width=".45" stroke-linejoin="round" stroke-linecap="round"/>'+
    c.obs.map(function(o){return '<circle cx="'+o.x+'" cy="'+o.y+'" r=".95" fill="'+DEF[o.type].c+'"/>';}).join('')+
    (s?'<circle cx="'+s.x+'" cy="'+s.y+'" r="1.6" fill="none" stroke="var(--accent)" stroke-width=".5"/>':'')+
    (f?'<rect x="'+(f.x-1.4)+'" y="'+(f.y-1.4)+'" width="2.8" height="2.8" fill="none" stroke="var(--accent)" stroke-width=".5"/>':'')+'</svg>';
}
function best(runs){
  var b=null; (runs||[]).forEach(function(x){ if(x.g==='DIS') return; if(!b||x.tot<b.tot||(x.tot===b.tot&&x.t<b.t)) b=x; });
  return b;
}
function libRender(){
  var L=listFor(libTab);
  Array.prototype.forEach.call(document.querySelectorAll('#libTabs button'),function(b){b.className=b.getAttribute('data-c')===libTab?'on':'';});
  Array.prototype.forEach.call(document.querySelectorAll('#libFilters .chip'),function(b){b.classList.toggle('on',b.getAttribute('data-f')===libF);});
  var doneN=L.filter(function(c){return getMark(c.id).done;}).length;
  $('progTxt').textContent='Zaběhnuto '+doneN+' z '+L.length;
  $('progBar').style.width=(L.length?Math.round(doneN/L.length*100):0)+'%';
  var ST=L.map(function(c){return c.route.length>1?cStats(c):null;});
  var F=L.map(function(c,i){return {c:c,st:ST[i],i:i};}).filter(function(x){var c=x.c, m=getMark(c.id), st=x.st;
    return libF==='all'||(libF==='new'&&isNewC(c.id))||(libF==='fav'&&m.fav)||(libF==='todo'&&!m.done)||(libF==='done'&&m.done)||
      (libF==='flow'&&st&&st.fs.arc>=52&&st.fs.tight<=10)||(libF==='tech'&&st&&st.diff>=(TECHT[c.cls]||5.4));});
  var key={easy:function(x){return x.st?x.st.diff:99;},hard:function(x){return x.st?-x.st.diff:99;},flow:function(x){return x.st?-x.st.fs.arc:99;},short:function(x){return x.st?x.st.geo.total:1e4;}}[libSort];
  if(key) F.sort(function(a,b){return key(a)-key(b)||a.i-b.i;});
  $('libSort').value=libSort;
  $('cards').innerHTML=F.length?F.map(function(x){
    var c=x.c, st=x.st, geo=st?st.geo:null, mk=getMark(c.id), m=metrics(c.obs,c.route,c.cls,c.turns,geo), bb=best(mk.runs), tt=c.turns||[];
    var nW=tt.filter(function(t){return t&&t.charAt(0)==='w';}).length, nB=tt.filter(function(t){return t&&t.charAt(0)==='b';}).length;
    var srcOk=c.src&&/^https:\/\//.test(c.src);
    return '<div class="card'+(c.id===S.meta.id?' cur':'')+'">'+
      '<button class="pick" data-id="'+esc(c.id)+'">'+thumb(c,geo)+
      '<div class="meta"><b>'+esc(c.name)+'</b><span>'+fmt(m.len)+' m · '+m.n+' překážek</span><span>SČP '+m.sct+' s · MČP '+m.mct+' s</span>'+
      (st?'<span class="df">Náročnost <b>'+fmt(st.diff)+'</b> · '+diffLabel(st.diff)+'</span><span>Oblouky '+Math.round(st.fs.arc)+' %'+(st.fs.cross?' · křížení '+st.fs.cross:'')+'</span>':'')+
      (nW||nB?'<span>Otočky '+nW+(nB?' · zadní strany '+nB:'')+'</span>':'')+'<span>'+esc(authorLine(c))+'</span></div></button>'+
      (srcOk?'<a class="src" href="'+esc(c.src)+'" target="_blank" rel="noopener">Původní plánek</a>':'')+
      (isNewC(c.id)||mk.done?'<div class="tags">'+(isNewC(c.id)?'<span class="new-tag">Nový</span>':'')+(mk.done?'<span class="done-tag">✓ '+(bb?bb.g:'zaběhnuto')+'</span>':'')+'</div>':'')+
      '<div class="st"><button class="fav'+(mk.fav?' on':'')+'" data-fav="'+esc(c.id)+'" aria-label="Oblíbený">'+(mk.fav?IC.starF:IC.star)+'</button>'+
      (libTab==='my'?'<button data-del="'+esc(c.id)+'" aria-label="Smazat parkur">'+IC.x+'</button>':'')+'</div></div>';
  }).join(''):'<div class="empty-state">'+(libF==='new'&&L.length
      ? 'V téhle záložce nic nového není. Nové parkury mají štítek Nový a tečku u názvu záložky.'
      : libTab==='tr'&&!L.length
      ? 'Zatím tu nejsou žádné parkury trenérů. Pošli do chatu s Claudem screenshoty plánků a přepíše je sem i se jménem autora. Nebo v Plánu zvol Plánek z obrázku: aplikace překážky rozpozná, pořadí naklepeš a při ukládání vyplníš, kdo parkur stavěl.'
      : libTab==='my'&&!L.length
      ? 'Zatím tu nemáš žádný vlastní parkur. Postav ho v Plánu nebo si otevři některý z A1–A3, uprav ho a ulož.'
      : 'V tomhle filtru nic není. Zkus jiný filtr nebo třídu.')+'</div>';
  catUI();
  $('libNote').textContent=libTab==='my'?'':libTab==='tr'?'Přepsané plánky trenérů a rozhodčích pro vlastní trénink. Rozmístění překážek je přibližné, zdroj je uvedený u parkuru.':'Parkury A1–A3 složil generátor v aplikaci podle Řádu agility FCI a podle toho, jak stavějí rozhodčí: dráha vede v obloucích a hadech, skoky stojí šikmo, tunely jsou i do oblouku a do U a dráha se kříží (A1 nejvýš jednou, A2 jednou až dvakrát, A3 dvakrát až třikrát). 15–22 překážek, start i cíl skokem, v A1 právě 3 zónové překážky, v A2 a A3 nejvýš 4. Otočky kolem křídla (v A3 aspoň dvě), v A3 vždy i zadní strana skoku.';
}
function findCourse(id){
  var tab=id.indexOf('my-')===0?'my':id.indexOf('tr-')===0?'tr':id.slice(0,2), L=['my','tr','A1','A2','A3'].indexOf(tab)>=0?listFor(tab):[];
  for(var j=0;j<L.length;j++) if(L[j].id===id) return L[j];
  return null;
}
function loadCourse(c,quiet){
  function go(){
    planReset(); bgClear();
    S.W=c.W||40; S.H=c.H||20; setSizeSel();
    S.obs=c.obs.map(function(o){var n={id:o.id,type:o.type,x:o.x,y:o.y,rot:o.rot}; if(o.type==='tunnel'&&o.bend) n.bend=o.bend; return n;}); S.route=c.route.slice(); sel=null;
    S.sides=(c.sides||[]).slice(); S.turns=(c.turns||[]).slice(); S.hp=(c.hp||[]).map(function(p){return p.slice();}); if(panel==='quiz'){quizStop(); panel=null;}
    S.meta={id:c.id,name:c.name,cls:c.cls,author:c.author||'',gen:!!c.gen,dirty:false}; S.chk=null;
    newSeen(c.id);
    save(); drawGrid(); render(); ui(); topbar(); resetRun(); undoReset();
    if(!quiet) toast('Načteno: '+c.name);
    show('plan');
    HM.emit('courseLoaded',{id:c.id});
  }
  if(S.meta.dirty&&S.obs.length) ask('Nahradit rozpracovaný plán?','Neuložené změny se ztratí. Chceš je zachovat, zruš to a nejdřív plán ulož.','Načíst '+c.name,go);
  else go();
}
$('libTabs').onclick=function(e){var b=e.target.closest('button'); if(!b) return; libTab=b.getAttribute('data-c'); libRender();};
$('libFilters').onclick=function(e){var b=e.target.closest('.chip'); if(!b) return; libF=b.getAttribute('data-f'); libRender();};
$('libSort').onchange=function(){libSort=this.value; libRender();};
$('cards').onclick=function(e){
  var f=e.target.closest('[data-fav]'), d=e.target.closest('[data-del]'), p=e.target.closest('.pick');
  if(f){var id=f.getAttribute('data-fav'); setMark(id,{fav:!getMark(id).fav}); libRender(); topbar(); return;}
  if(d){
    var did=d.getAttribute('data-del'), L=myDB(), c=L.filter(function(x){return x.id===did;})[0]; if(!c) return;
    ask('Smazat '+c.name+'?','Parkur zmizí ze záložky Moje. Zapsané běhy se smažou s ním.','Smazat',function(){
      mySave(L.filter(function(x){return x.id!==did;})); delete MK[did]; lsSet(MKK,MK);
      if(S.meta.id===did){S.meta.id=null; S.meta.dirty=true; UNDO_SV=null; save(); topbar();}
      libRender();
    },true);
    return;
  }
  if(p){var c2=findCourse(p.getAttribute('data-id')); if(c2) loadCourse(c2);}
};
$('randBtn').onclick=function(){
  var L=listFor(libTab).filter(function(c){return !getMark(c.id).done;});
  if(!L.length){toast('V '+(libTab==='my'?'záložce Moje':'třídě '+libTab)+' už máš zaběhnuté všechno.'); return;}
  loadCourse(L[Math.floor(Math.random()*L.length)]);
};

/* ---------- uložení, nový, oblíbený, zaběhnuto ---------- */
function saveSheet(){
  if(S.route.length<2){toast('Nejdřív vyznač trasu v režimu Trasa.'); mode='route'; ui(); show('plan'); return;}
  var m=S.meta, isMy=!!(m.id&&m.id.indexOf('my-')===0&&myDB().some(function(c){return c.id===m.id;}));
  var nm=m.gen?m.name+' (moje)':m.name;
  openSheet('<h3>Uložit parkur</h3>'+
    '<label for="fName">Název<input id="fName" type="text" maxlength="60" value="'+esc(nm)+'"></label>'+
    '<label for="fCls">Třída (podle ní se počítá SČP)<select id="fCls"><option>A1</option><option>A2</option><option>A3</option></select></label>'+
    '<label for="fAuth">Stavěl/a (trenér, rozhodčí)<input id="fAuth" type="text" maxlength="60" value="'+esc(m.author)+'" placeholder="např. Petr Pupík"></label>'+
    '<div class="acts"><button class="btn" data-a="x">Zrušit</button>'+
    (isMy?'<button class="btn" data-a="new">Uložit jako nový</button><button class="btn primary" data-a="upd">Uložit změny</button>':'<button class="btn primary" data-a="new">Uložit do Moje</button>')+'</div>',
    function(e){
      var b=e.target.closest('[data-a]'); if(!b) return; var a=b.getAttribute('data-a');
      if(a==='x'){closeSheet(); return;}
      var name=$('fName').value.trim()||'Můj parkur', cls=$('fCls').value, auth=$('fAuth').value.trim();
      var L=myDB(), rec={name:name,cls:cls,author:auth,W:S.W,H:S.H,obs:JSON.parse(JSON.stringify(S.obs)),route:S.route.slice(),sides:(S.sides||[]).slice(),turns:(S.turns||[]).slice(),hp:(S.hp||[]).slice()};
      if(a==='upd'){rec.id=m.id; L=L.map(function(c){return c.id===m.id?rec:c;});}
      else {rec.id='my-'+Date.now().toString(36); L.push(rec);}
      if(!mySave(L)) return; /* plná paměť: plán zůstane neuložený (hlášku ukáže lsFull) */
      S.meta={id:rec.id,name:name,cls:cls,author:auth,gen:false,dirty:false}; save(); UNDO_SV=planSnap(); HM.emit('courseSaved',{id:rec.id});
      closeSheet(); topbar(); render(); toast(a==='upd'?'Změny uloženy':'Uloženo do Moje');
    });
  $('fCls').value=m.cls;
}
$('saveBtn').onclick=saveSheet;
$('titleBtn').onclick=saveSheet;
$('newBtn').onclick=function(){
  function go(){planReset(); bgClear(); S.W=40; S.H=20; setSizeSel(); drawGrid(); S.obs=[]; S.route=[]; S.sides=[]; S.turns=[]; S.hp=[]; S.chk=null; sel=null; if(panel==='quiz'){quizStop();} panel=null; S.meta={id:null,name:'Nový parkur',cls:S.meta.cls||'A1',author:'',gen:false,dirty:false}; mode='build'; save(); render(); ui(); topbar(); resetRun(); undoReset();}
  if(S.obs.length&&(S.meta.dirty||!S.meta.id)) ask('Začít nový parkur?','Plocha se vyčistí a neuložené změny se ztratí.','Začít nový',go,true); else go();
};
function needId(){if(!S.meta.id){toast('Nejdřív parkur ulož, pak si ho můžeš označit.'); return true;} return false;}
$('favBtn').onclick=function(){if(needId()) return; setMark(S.meta.id,{fav:!getMark(S.meta.id).fav}); topbar(); toast(getMark(S.meta.id).fav?'Přidáno do oblíbených':'Odebráno z oblíbených');};
$('doneBtn').onclick=function(){if(needId()) return; var d=!getMark(S.meta.id).done; setMark(S.meta.id,{done:d}); topbar(); toast(d?'Označeno jako zaběhnuté':'Označení zaběhnutí zrušeno');};

/* ---------- běh: stopky a hodnocení podle FCI ---------- */
var RUN={t0:0,acc:0,on:false,f:0,r:0,raf:0};
function clockT(){return RUN.acc+(RUN.on?(performance.now()-RUN.t0)/1000:0);}
/* čas ručně: 41,52 nebo 1:05,30 (minuty:sekundy) */
function runTime(){var m=/^(?:(\d+):)?(\d+(?:\.\d*)?)$/.exec(String($('manT').value).trim().replace(',','.')), v=m?(m[1]?+m[1]*60:0)+(+m[2]):NaN; return isFinite(v)&&v>0?v:clockT();}
function evalRun(t,f,r,dis,m){
  var tp=Math.max(0,Math.round((t-m.sct)*100)/100), cf=5*f+5*r, tot=Math.round((cf+tp)*100)/100;
  var why=dis?'diskvalifikace':(r>=3?'3 odmítnutí':(m.mct&&t>m.mct?'překročen MČP':''));
  return {tp:tp,cf:cf,tot:tot,why:why,g:why?'DIS':(tot<6?'V':tot<16?'VD':tot<26?'D':'BO')};
}
var GNAME={V:'Výborně',VD:'Velmi dobře',D:'Dobře',BO:'Bez ohodnocení',DIS:'Diskvalifikace'};
function tick(){
  var t=clockT(), m=curM(), c=$('clock');
  c.textContent=fmt2(t);
  c.className='clock'+(m.mct&&t>m.mct?' dis':(m.sct&&t>m.sct?' over':''));
  if(RUN.on) RUN.raf=requestAnimationFrame(tick);
}
function resultRender(){
  var m=curM(), t=runTime(), dis=$('disChk').checked, e=evalRun(t,RUN.f,RUN.r,dis,m);
  $('fN').textContent=RUN.f; $('rN').textContent=RUN.r;
  if(S.route.length<2){$('result').innerHTML='<p>Parkur zatím nemá trasu. Vyznač ji v Plánu v režimu Trasa, pak se běh ohodnotí.</p>'; return;}
  if(!t&&!dis){$('result').innerHTML='<p>Změř čas stopkami nebo ho zadej ručně. Výsledek se spočítá podle Řádu agility.</p>'; return;}
  $('result').innerHTML='<div class="grade '+e.g+'">'+e.g+'</div><p><b>'+GNAME[e.g]+'</b>'+(e.why?' ('+e.why+')':(e.tot===0?' · čistý běh':''))+'<br>'+
    'Čas <b>'+fmt2(t)+' s</b> · chyby a odmítnutí <b>'+e.cf+'</b> · za čas <b>'+fmt2(e.tp)+'</b><br>Trestné body celkem <b>'+fmt2(e.tot)+'</b></p>';
}
function runRender(){
  dogChips('runDogs');
  var m=curM();
  $('runSpecs').innerHTML=specsHTML(m);
  $('speedRow').innerHTML='<span class="grow">Rychlost pro SČP ('+m.cls+')<small>volí ji rozhodčí podle obtížnosti</small></span><button data-sp="-1" aria-label="Snížit rychlost">−</button><b class="num">'+fmt(m.spd)+' m/s</b><button data-sp="1" aria-label="Zvýšit rychlost">+</button>';
  $('clockSub').innerHTML='SČP <b class="num">'+(m.sct||'–')+' s</b><span>MČP <b class="num">'+(m.mct||'–')+' s</b></span>';
  $('startBtn').textContent=RUN.on?'STOP':'START'; $('startBtn').className='startbtn'+(RUN.on?' stop':'');
  tick(); resultRender(); histRender();
}
function histRender(){
  var runs=getMark(S.meta.id).runs||[];
  if(!S.meta.id){$('hist').innerHTML='<li><span></span><small>Běhy se zapisují k uloženému parkuru. Ulož ho nebo načti z Parkurů.</small></li>'; return;}
  $('hist').innerHTML=runs.length?runs.map(function(x,i){return {x:x,i:i};}).reverse().map(function(o){
    var x=o.x, d=new Date(x.d);
    var dn=dogName(x.dog);
    return '<li><span class="g '+x.g+'">'+x.g+'</span><span>'+fmt2(x.t)+' s · '+x.f+' ch. · '+x.r+' odm.<br><small>'+d.toLocaleDateString(LOC)+' · trestné body '+fmt2(x.tot)+(dn?' · '+esc(dn):'')+(x.sp?' · mezičasy':'')+'</small></span><span></span><button data-rm="'+o.i+'" aria-label="Smazat běh">×</button></li>';
  }).join(''):'<li><span></span><small>Zatím žádný běh. Po uložení se tu objeví s hodnocením.</small></li>';
}
/* dokud běží stopky nebo rozcvička, obrazovka nezhasne (telefon zhasíná po 30 s a STOP by se nedal zmáčknout včas) */
var WAKE=null, WAKE_WHY={};
function wakeSet(why,on){ if(on) WAKE_WHY[why]=1; else delete WAKE_WHY[why]; if(Object.keys(WAKE_WHY).length) wakeGet(); else wakeRel(); }
function wakeGet(){
  if(WAKE||!navigator.wakeLock) return; WAKE='?';
  navigator.wakeLock.request('screen').then(function(l){
    if(WAKE!=='?'){ l.release().catch(function(){}); return; } WAKE=l; l.addEventListener('release',function(){ if(WAKE===l) WAKE=null; });
  },function(){ if(WAKE==='?') WAKE=null; });
}
function wakeRel(){ var l=WAKE; WAKE=null; if(l&&l!=='?') l.release().catch(function(){}); }
document.addEventListener('visibilitychange',function(){ if(document.visibilityState==='visible'&&Object.keys(WAKE_WHY).length) wakeGet(); });
function resetRun(){cancelAnimationFrame(RUN.raf); wakeSet('run',false); RUN={t0:0,acc:0,on:false,f:0,r:0,raf:0}; $('manT').value=''; $('disChk').checked=false; if(view==='run') runRender();}
$('startBtn').onclick=function(){
  if(RUN.on){RUN.acc+=(performance.now()-RUN.t0)/1000; RUN.on=false; cancelAnimationFrame(RUN.raf); wakeSet('run',false); $('manT').value=fmt2(RUN.acc);}
  else {$('manT').value=''; RUN.acc=0; RUN.sp=null; RUN.t0=performance.now(); RUN.on=true; RUN.raf=requestAnimationFrame(tick); wakeSet('run',true);}
  runRender();
};
$('resetClock').onclick=resetRun;
$('spLive').onclick=function(){splitOpen('live');};
$('spVideo').onclick=function(){splitOpen('video');};
document.querySelector('.counters').onclick=function(e){
  var b=e.target.closest('button[data-k]'); if(!b) return;
  var k=b.getAttribute('data-k'); RUN[k]=Math.max(0,RUN[k]+(+b.getAttribute('data-d'))); resultRender();
};
$('manT').oninput=resultRender; $('disChk').onchange=resultRender;
$('speedRow').onclick=function(e){
  var b=e.target.closest('[data-sp]'); if(!b) return; var c=S.meta.cls;
  SET.spd=SET.spd||{}; SET.spd[c]=Math.round(cl(spdOf(c)+(+b.getAttribute('data-sp'))*0.1,2.5,5.5)*10)/10; lsSet(SETK,SET);
  runRender(); render();
};
$('saveRun').onclick=function(){
  if(!S.meta.id){toast('Nejdřív parkur ulož.'); saveSheet(); return;}
  if(RUN.on){toast('Nejdřív zastav stopky.'); return;}
  if(S.route.length<2){toast('Nejdřív vyznač trasu v režimu Trasa.'); return;}
  var m=curM(), t=runTime(), dis=$('disChk').checked;
  if(!t&&!dis){toast('Chybí čas běhu.'); return;}
  var e=evalRun(t,RUN.f,RUN.r,dis,m), mk=getMark(S.meta.id), runs=(mk.runs||[]).slice();
  var dg=curDog();
  var rec={d:Date.now(),t:Math.round(t*100)/100,f:RUN.f,r:RUN.r,tot:e.tot,g:e.g,sct:m.sct,mct:m.mct,len:Math.round(m.len*10)/10,dog:dg?dg.id:null,cls:S.meta.cls};
  if(RUN.sp&&RUN.sp.length===S.route.length) rec.sp=RUN.sp.slice();
  runs.push(rec);
  setMark(S.meta.id,{runs:runs,done:true}); topbar(); resetRun(); runRender(); toast('Běh uložen: '+GNAME[e.g]);
  /* běh na Parkuru týdne (neupraveném): nabídnout odeslání do žebříčku; tot už obsahuje i trestné body za čas */
  if(e.g!=='DIS'&&['A1','A2','A3'].indexOf(S.meta.cls)>=0&&!S.meta.dirty){ var wc=weekCourse(S.meta.cls); if(wc&&wc.id===S.meta.id) wkSend(rec); }
  HM.emit('runSaved',{cid:S.meta.id,idx:runs.length-1,run:rec});
};
$('hist').onclick=function(e){
  var b=e.target.closest('[data-rm]'); if(!b) return; var i=+b.getAttribute('data-rm');
  ask('Smazat záznam běhu?','Záznam zmizí z historie tohoto parkuru.','Smazat',function(){
    var runs=(getMark(S.meta.id).runs||[]).slice(); runs.splice(i,1); setMark(S.meta.id,{runs:runs}); histRender();
  },true);
};

/* ---------- trenéři a rozhodčí ---------- */
var AN='https://www.agilitynow.eu/course-plans/';
var COACH=[
  {h:'Česko a Slovensko',items:[
    ['CZ','Petr Pupík','Rozhodčí FCI, soudil MS 2017. Plánky z Moravia Open, Hranických hrátek a Norwegian Open.',AN+'petr-pupik-cze/'],
    ['CZ','Karel Havlíček','Rozhodčí FCI. Sbírka jeho plánků parkurů.',AN+'karel-havlicek-cze/'],
    ['SK','Roman Lukáč','Slovenský rozhodčí FCI. Plánky parkurů.',AN+'roman-lukac-svk/'],
    ['CZ','Karina Divišová, Martina Podešťová','Kniha Agility – Pracovní sešit s 90 tréninkovými sekvencemi.','https://www.knihydobrovsky.cz/kniha/agility-pracovni-sesit-22151'],
    ['CZ','Klub agility ČR','Řád agility FCI a ČR (platný od 2023): pravidla pro SČP, MČP a hodnocení.','https://klubagility.cz/site/assets/files/1076/rad_agility_2023-1.pdf']
  ]},
  {h:'Zahraničí',items:[
    ['SE','MS 2025 Kalmar','Plánky všech běhů mistrovství světa. Stavěli Joakim Tangfelt, Fanny Gott, Stefanie Semkat a Vittorio Papavero.','https://www.agilitywc2025.com/results/'],
    ['SE','Joakim Tangfelt','Rozhodčí MS 2025. Jeho plánky parkurů.',AN+'jocke-tangfelt-swe/'],
    ['DE','Stefanie Semkat','Rozhodčí MS 2025 a EO 2023. Její plánky parkurů.',AN+'stefanie-semkat-ger/'],
    ['HU','Zsófi Bíró','Maďarská rozhodčí FCI. Plánky parkurů.',AN+'zsofi-biro-hun/'],
    ['FI','Sari Mikkilä','Rozhodčí MS 2019. Plánky parkurů.',AN+'sari-mikkila-fin/'],
    ['PL','Iwona Golab','Mistryně světa 2024. Její parkur je v týdenních plánech Corral Creek.','https://www.corralcreekdogsportcenter.com/blog'],
    ['FI','OneMind Dogs','Trenéři OneMind Dogs: e-book se 7 parkury na zahradu zdarma.','https://www.oneminddogs.com/backyard-agility-sequences-ebook/'],
    ['EU','Všichni rozhodčí na agilitynow.eu','Plánky od 39 rozhodčích z 18 zemí, řazené podle jmen.',AN]
  ]}
];
function coachHTML(){
  return COACH.map(function(g){
    return '<h2>'+esc(g.h)+'</h2><div class="coach-list">'+g.items.map(function(c){
      return '<a class="coach" href="'+esc(c[3])+'" target="_blank" rel="noopener"><span class="cc">'+c[0]+'</span><span><b>'+esc(c[1])+'</b><span>'+esc(c[2])+'</span></span>'+IC.ext+'</a>';
    }).join('')+'</div>';
  }).join('');
}

/* ---------- Domů: série tréninků, pokračování, parkury pro tebe, výzva dne, týden ---------- */
/* dny s tréninkem: uložené běhy a záznamy v deníku (místní datum) */
function activeDays(){
  var d={}; Object.keys(MK).forEach(function(id){ (MK[id].runs||[]).forEach(function(x){ if(x.d) d[localDate(new Date(x.d))]=1; }); });
  diary().forEach(function(x){ if(x.date) d[x.date]=1; }); return d;
}
/* série: kolik dní po sobě se trénovalo, do dneška (nebo do včerejška, když dnes ještě ne) */
function streak(days){
  var t=new Date(), n=0; t.setHours(12,0,0,0); if(!days[localDate(t)]) t.setDate(t.getDate()-1);
  while(days[localDate(t)]){ n++; t.setDate(t.getDate()-1); } return n;
}
function homeCls(){ var d=curDog(); return d&&['A1','A2','A3'].indexOf(d.cls)>=0?d.cls:(S.meta.cls||'A1'); }
/* výzva dne: každý den jiný nezaběhnutý parkur třídy psa (stejný celý den) */
function homeChallenge(){
  var cls=homeCls(), L=listFor(cls), today=localDate();
  function ranToday(c){ return (getMark(c.id).runs||[]).some(function(x){ return localDate(new Date(x.d))===today; }); }
  /* zaběhnuté dnes zůstávají ve výběru, aby se splněná výzva nevyměnila za jinou */
  var todo=L.filter(function(c){return !getMark(c.id).done||ranToday(c);}), P=todo.length?todo:L; if(!P.length) return null;
  var h=0; for(var i=0;i<today.length;i++) h=(h*31+today.charCodeAt(i))|0;
  var c=P[Math.abs(h)%P.length];
  var ok=(getMark(c.id).runs||[]).some(function(x){ return x.g!=='DIS'&&x.tot===0&&localDate(new Date(x.d))===today; });
  return {c:c,ok:ok};
}
var HOME_C=[];
function homeRender(){
  var d=curDog(), cls=homeCls(), runs=allRuns(d&&d.id), ok=runs.filter(function(x){return x.g!=='DIS';});
  var sp=ok.filter(function(x){return x.t>0&&x.len>0;}).map(function(x){return x.len/x.t;}), avg=sp.length?sp.reduce(function(a,v){return a+v;},0)/sp.length:0;
  var clean=runs.length?Math.round(runs.filter(function(x){return x.tot===0&&x.g!=='DIS';}).length/runs.length*100):0;
  var doneN=Object.keys(MK).filter(function(k){return MK[k].done;}).length, days=activeDays(), st=streak(days);
  var wd=['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'][new Date().getDay()];
  var h='<div class="hm-head"><div class="hm-tb"><div class="hm-logo">'+IC.brand+'</div><span>HANDLERMAP</span>'+
    '<button class="hm-dog" data-h="dog"><i>🐕</i><span style="overflow:hidden;text-overflow:ellipsis;min-width:0">'+(d?esc(d.name)+' · '+esc(d.cls):'Přidat psa')+'</span></button></div>'+
    '<div class="hm-big"><small>'+wd+(st?' · série '+st+(st===1?' den':st<5?' dny':' dní')+' 🔥':'')+'</small><h1>Připraveni<br>na <em>trénink?</em></h1></div>'+
    '<div class="hm-stats"><div><b>'+doneN+'</b><span>zaběhnuto</span></div><div><b>'+(avg?fmt(avg):'–')+'</b><span>m/s průměr</span></div><div><b>'+(runs.length?clean+' %':'–')+'</b><span>čisté běhy</span></div></div></div>';
  var m=curM();
  h+=S.route.length>1
    ? '<button class="hm-cta" data-h="plan"><span class="hm-play">'+IC.playF+'</span><span class="tx"><small>Pokračovat</small><b>'+esc(S.meta.name)+'</b><span>'+fmt(m.len)+' m · '+m.n+' překážek · SČP '+m.sct+' s</span></span></button>'
    : '<button class="hm-cta" data-h="lib"><span class="hm-play">'+IC.playF+'</span><span class="tx"><small>Začni</small><b>Vyber si parkur</b><span>90 parkurů podle pravidel FCI, nebo si postav vlastní</span></span></button>';
  /* parkury pro tebe: nové a nezaběhnuté ze třídy psa */
  var L=listFor(cls).filter(function(c){return !getMark(c.id).done&&c.id!==S.meta.id;});
  L.sort(function(a,b){return (isNewC(b.id)?1:0)-(isNewC(a.id)?1:0);}); HOME_C=L.slice(0,6);
  if(HOME_C.length){
    h+='<div class="hm-sec"><h3>Parkury pro tebe</h3><button data-h="lib">Vše ›</button></div><div class="hm-car">'+HOME_C.map(function(c,i){
      var s=cStats(c), tag=isNewC(c.id)?'NOVÝ':s.diff>=(TECHT[cls]||5.4)?'TECH':(s.fs.arc>=52&&s.fs.tight<=10?'PLYNULÝ':diffLabel(s.diff).toUpperCase());
      return '<button class="hm-cc" data-hc="'+i+'"><span class="m">'+thumb(c,s.geo)+'<span class="hm-tag">'+cls+' · '+tag+'</span></span><span class="t"><b>'+esc(c.name)+'</b><span>'+fmt(s.geo.total)+' m · náročnost '+fmt(s.diff)+' · '+diffLabel(s.diff)+'</span></span></button>';
    }).join('')+'</div>';
  }
  h+=wkHomeHTML(cls);
  var ch=homeChallenge();
  if(ch) h+='<div class="hm-sec"><h3>Výzva dne</h3></div><div class="hm-ch"><div class="ic">🎯</div><div class="tx"><b>Zaběhni čistě pod SČP</b><span>'+esc(ch.c.name)+' · '+ch.c.route.length+' překážek</span></div>'+
    (ch.ok?'<span class="hm-go ok" style="display:grid;place-items:center">Splněno ✓</span>':'<button class="hm-go" data-h="ch">Start</button>')+'</div>';
  /* tento týden (pondělí až neděle) */
  var t=new Date(); t.setHours(12,0,0,0); var mon=new Date(t); mon.setDate(t.getDate()-((t.getDay()+6)%7)), today=localDate(t), wk='';
  ['Po','Út','St','Čt','Pá','So','Ne'].forEach(function(n,i){ var x=new Date(mon); x.setDate(mon.getDate()+i); var k=localDate(x);
    wk+='<div class="'+(k===today?'today':'')+'"><i class="'+(days[k]?'on':'')+'"></i>'+n+'</div>'; });
  h+='<div class="hm-sec"><h3>Tento týden</h3><button data-h="diary">Deník ›</button></div><div class="hm-week">'+wk+'</div>';
  $('v-home').innerHTML=h;
  wkRefresh(cls);
}
$('v-home').onclick=function(e){
  var c=e.target.closest('[data-hc]'); if(c){ var x=HOME_C[+c.getAttribute('data-hc')]; if(x) loadCourse(x); return; }
  var b=e.target.closest('[data-h]'); if(!b) return; var a=b.getAttribute('data-h');
  if(a==='plan') show('plan');
  else if(a==='lib'){ libTab=homeCls(); show('lib'); }
  else if(a==='dog'){ moreTab='dogs'; show('more'); if(!DOGS.length) dogSheet(null); }
  else if(a==='diary'){ moreTab='diary'; show('more'); }
  else if(a==='ch'){ var ch=homeChallenge(); if(ch) loadCourse(ch.c); }
  else if(a==='wkopen'){ var wc=weekCourse(homeCls()); if(wc) loadCourse(wc); }
  else if(a==='wkboard') wkBoard();
};

/* ---------- Parkur týdne: jeden parkur pro třídu na celý týden (po–ne) a žebříček podle velikosti psa ---------- */
var WKCACHE='agility-week-v1', WKME='agility-weekme-v1', NICKK='agility-nick-v1', DEVK='agility-dev-v1', WKB={n:0}, WK_TRY={};
/* ISO týden 'YYYY-Www' pro místní datum (týden patří roku, do kterého padne jeho čtvrtek) */
function weekKey(d){
  d=d||new Date(); var t=new Date(d.getFullYear(),d.getMonth(),d.getDate(),12);
  t.setDate(t.getDate()-((t.getDay()+6)%7)+3); var y=t.getFullYear(), j4=new Date(y,0,4,12);
  j4.setDate(j4.getDate()-((j4.getDay()+6)%7)+3);
  var w=1+Math.round((t-j4)/(7*86400000));
  return y+'-W'+('0'+w).slice(-2);
}
function wkCls(cls){ return ['A1','A2','A3'].indexOf(cls)>=0?cls:'A1'; }
/* parkur týdne: stejný celý týden, výběr podle otisku týdne a třídy */
function weekCourse(cls){
  cls=wkCls(cls); var L=listFor(cls).filter(function(c){return c.route&&c.route.length>1;}); if(!L.length) return null;
  var k=weekKey()+'|'+cls, h=0; for(var i=0;i<k.length;i++) h=(h*31+k.charCodeAt(i))|0;
  return L[Math.abs(h)%L.length];
}
/* krátký text v localStorage uložený přímo (bez JSON); starší zápis v uvozovkách se přečte taky */
function lsStr(k){ try{ var v=localStorage.getItem(k)||''; if(/^".*"$/.test(v)){ try{ v=JSON.parse(v); }catch(e){} } return String(v); }catch(e){ return ''; } }
function lsStrSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){ lsFull(e); } }
/* náhodný identifikátor instalace (žádné osobní údaje) */
function devId(){
  var v=lsStr(DEVK); if(v.length>=16) return v;
  var a=[], i; try{ var r=new Uint8Array(12); crypto.getRandomValues(r); for(i=0;i<r.length;i++) a.push(('0'+r[i].toString(16)).slice(-2)); }
  catch(e){ for(i=0;i<12;i++) a.push(('0'+Math.floor(Math.random()*256).toString(16)).slice(-2)); }
  v='d'+Date.now().toString(36)+a.join(''); lsStrSet(DEVK,v); return v;
}
function wkLeft(){ var n=7-((new Date().getDay()+6)%7); return n===1?'zbývá poslední den':'zbývá '+n+(n<5?' dny':' dní'); }
function wkPen(p){ p=+p||0; return (p%1?fmt2(p):String(p))+' tb'; }
function wkBetter(a,b){ return !b||a.pen<b.pen||(a.pen===b.pen&&a.t<b.t); }
/* uložená čísla ze žebříčku a moje odeslané výsledky: jen tento týden */
function wkStore(k){ var o=lsGet(k,{}), w=weekKey(); if(!o||typeof o!=='object') o={}; Object.keys(o).forEach(function(x){ if(x.indexOf(w+'|')!==0) delete o[x]; }); return o; }
function wkMyBest(c){
  var me=wkStore(WKME)[weekKey()+'|'+c.cls], w=weekKey(), b=null;
  (getMark(c.id).runs||[]).forEach(function(x){ if(x.g!=='DIS'&&x.d&&weekKey(new Date(x.d))===w){ var r={t:x.t,pen:x.tot}; if(wkBetter(r,b)) b=r; } });
  return {run:b,me:me||null};
}
function wkTopHTML(cls){
  var cc=wkStore(WKCACHE)[weekKey()+'|'+cls];
  if(!cc) return '<span class="wk-none">Porovnej se s ostatními v žebříčku podle velikosti psa.</span>';
  if(!cc.top||!cc.top.length) return '<span class="wk-none">Zatím nikdo nezaběhl. Buď první!</span>';
  return cc.top.map(function(r){ return '<span class="'+(r.mine?'me':'')+'"><i>'+(+r.rank||0)+'.</i> '+esc(r.dog)+' <em>'+esc(r.size)+'</em> · '+fmt2(+r.t||0)+' s</span>'; }).join('')+
    (cc.total>3?'<span class="wk-none">a dalších '+(cc.total-3)+' v žebříčku</span>':'');
}
function wkHomeHTML(cls){
  cls=wkCls(cls); var c=weekCourse(cls); if(!c) return '';
  var s=cStats(c), mb=wkMyBest(c), me=mb.me, mine='';
  if(me) mine='Tvůj výsledek: <b>'+fmt2(+me.t||0)+' s · '+wkPen(me.pen)+'</b>'+(me.rank_size?' · '+(+me.rank_size)+'. z '+(+me.total_size||0)+' v '+esc(me.size):'');
  else if(mb.run) mine='Tvůj nejlepší běh: <b>'+fmt2(mb.run.t)+' s · '+wkPen(mb.run.pen)+'</b> · neodesláno';
  else mine='Tento týden jsi ho ještě nezaběhl/a';
  return '<div class="hm-sec"><h3>Parkur týdne</h3><button data-h="wkboard">Žebříček ›</button></div>'+
    '<div class="hm-wk"><div class="wk-a"><span class="m">'+thumb(c,s.geo)+'</span><div class="tx"><small>'+cls+' · '+wkLeft()+'</small><b>'+esc(c.name)+'</b>'+
    '<span>'+fmt(s.geo.total)+' m · '+c.route.length+' překážek</span></div></div>'+
    '<div class="wk-me">'+mine+'</div>'+
    '<div class="wk-b"><div class="wk-top" id="hmWkTop">'+wkTopHTML(cls)+'</div><button class="wk-go" data-h="wkopen">Zaběhnout</button></div></div>';
}
function wkCachePut(cls,r){
  var o=wkStore(WKCACHE), rows=(r&&Array.isArray(r.rows))?r.rows:[];
  o[weekKey()+'|'+cls]={at:Date.now(),total:+(r&&r.total)||rows.length,top:rows.slice(0,3).map(function(x){return {rank:x.rank,dog:String(x.dog||''),size:String(x.size||''),t:x.t,mine:!!x.mine};})};
  lsSet(WKCACHE,o);
}
/* žebříček pro kartu na Domů: na pozadí, nejvýš jednou za 10 minut, chyby potichu */
function wkRefresh(cls){
  cls=wkCls(cls); var k=weekKey()+'|'+cls, cc=wkStore(WKCACHE)[k], now=Date.now();
  if((cc&&now-cc.at<600000)||(WK_TRY[k]&&now-WK_TRY[k]<600000)||!weekCourse(cls)) return;
  WK_TRY[k]=now;
  try{
    sbCall('week_board',{p_cls:cls,p_size:null,p_device:devId(),p_week:null}).then(function(r){
      if(!r) return; wkCachePut(cls,r);
      var el=$('hmWkTop'); if(el&&view==='home'&&homeCls()===cls) el.innerHTML=wkTopHTML(cls);
    },function(){});
  }catch(e){}
}
function wkRowHTML(x,mine){
  return '<div class="wkrow'+(mine?' mine':'')+'"><span class="rk">'+(+x.rank||0)+'.</span><span class="who"><b>'+esc(x.dog)+'</b><small>'+esc(x.handler)+'</small></span>'+
    '<span class="sz">'+esc(x.size)+'</span><span class="tm"><b>'+fmt2(+x.t||0)+' s</b><small>'+wkPen(x.pen)+'</small></span></div>';
}
/* žebříček parkuru týdne; size '' = všechny velikosti */
function wkBoard(size,cls){
  cls=wkCls(cls||homeCls()); var c=weekCourse(cls); if(!c) return;
  if(size==null){ var d=curDog(); size=d&&SIZES.hasOwnProperty(d.size)?d.size:''; }
  WKB={n:WKB.n+1,cls:cls,size:size,c:c};
  var ch=[['','Vše']].concat(Object.keys(SIZES).map(function(k){return [k,k];}));
  openSheet('<div class="wkboard"><h3>Parkur týdne · '+esc(c.name)+' · '+cls+'</h3>'+
    '<div class="filters wk-sz">'+ch.map(function(x){return '<button class="chip'+(x[0]===size?' on':'')+'" data-wsz="'+x[0]+'">'+x[1]+'</button>';}).join('')+'</div>'+
    '<p class="hint">Týden '+weekKey().split('-W')[1]+' · '+wkLeft()+' · pořadí podle trestných bodů, pak času</p>'+
    '<div class="wk-list" id="wkList"></div>'+
    '<div class="acts"><button class="btn" data-a="x">Zavřít</button><button class="btn primary" data-a="open">Zaběhnout parkur</button></div></div>',
    function(e){
      var z=e.target.closest('[data-wsz]'), b=e.target.closest('[data-a]');
      if(z){ WKB.size=z.getAttribute('data-wsz');
        Array.prototype.forEach.call($('sheet').querySelectorAll('[data-wsz]'),function(x){x.classList.toggle('on',x===z);}); wkLoad(); return; }
      if(!b) return; var a=b.getAttribute('data-a');
      if(a==='retry') wkLoad();
      else if(a==='open'){ closeSheet(); loadCourse(WKB.c); }
      else if(a==='x') closeSheet();
    });
  wkLoad();
}
function wkLoad(){
  var n=++WKB.n, B=WKB, el=$('wkList'); if(!el) return;
  el.innerHTML='<p class="wk-st">Načítám žebříček…</p>';
  function live(){ return n===WKB.n&&$('wkList')===el&&document.body.contains(el); }
  var p; try{ p=sbCall('week_board',{p_cls:B.cls,p_size:B.size||null,p_device:devId(),p_week:null}); }catch(e){ p=Promise.reject(e); }
  p.then(function(r){
    if(!live()) return;
    var rows=(r&&Array.isArray(r.rows))?r.rows:[], me=(r&&Array.isArray(r.me))?r.me:[];
    if(!B.size&&r) wkCachePut(B.cls,r);
    if(!rows.length&&!me.length){ el.innerHTML='<p class="wk-st">Zatím nikdo nezaběhl. Buď první!</p>'; return; }
    var h=rows.map(function(x){return wkRowHTML(x,!!x.mine);}).join('');
    if(me.length&&!rows.some(function(x){return x.mine;})) h+='<div class="wk-sep">…</div>'+me.map(function(x){return wkRowHTML(x,true);}).join('');
    el.innerHTML=h+(r.total>rows.length?'<p class="wk-st">Zaběhlo celkem '+(+r.total)+' týmů</p>':'');
  },function(err){
    if(!live()) return;
    el.innerHTML='<p class="wk-st">Žebříček se nepodařilo načíst: '+esc(err&&err.message||err)+'</p><div class="acts"><button class="btn" data-a="retry">Zkusit znovu</button></div>';
  });
}
/* po uloženém běhu na parkuru týdne: odeslat výsledek do žebříčku */
function wkSend(rec){
  var d=curDog(), cls=S.meta.cls, cid=S.meta.id, pen=Math.round((+rec.tot||0)*100)/100, nick=lsStr(NICKK);
  openSheet('<div class="wksend"><h3>Parkur týdne</h3><p>'+esc(S.meta.name)+' · '+cls+' · '+wkLeft()+'</p>'+
    '<div class="wk-res"><div><b>'+fmt2(rec.t)+' s</b><span>čas</span></div><div><b>'+wkPen(pen)+'</b><span>trestné body</span></div></div>'+
    '<label for="wkNick">Psovod (přezdívka v žebříčku)<input id="wkNick" type="text" maxlength="30" autocomplete="nickname" value="'+esc(nick)+'"></label>'+
    (d?'<p>Pes: <b>'+esc(d.name)+'</b> · velikost '+esc(d.size)+'</p>'
      :'<div class="grid2"><label for="wkDog">Pes<input id="wkDog" type="text" maxlength="40"></label><label for="wkSize">Velikost<select id="wkSize">'+
        Object.keys(SIZES).map(function(k){return '<option value="'+k+'"'+(k==='L'?' selected':'')+'>'+k+'</option>';}).join('')+'</select></label></div>')+
    '<p class="hint">Do žebříčku se pošle přezdívka, jméno a velikost psa a výsledek. Počítá se tvůj nejlepší běh v týdnu.</p>'+
    '<div class="acts"><button class="btn" data-a="x">Teď ne</button><button class="btn primary" data-a="send">Odeslat do žebříčku</button></div></div>',
    function(e){
      var b=e.target.closest('[data-a]'); if(!b) return; var a=b.getAttribute('data-a');
      if(a==='x'){ closeSheet(); return; }
      if(a!=='send'||b.disabled) return;
      var nk=$('wkNick').value.trim(), dn=d?d.name:($('wkDog').value.trim()), sz=d?d.size:$('wkSize').value;
      if(!nk){ toast('Napiš přezdívku psovoda.'); $('wkNick').focus(); return; }
      if(!dn){ toast('Napiš jméno psa.'); $('wkDog').focus(); return; }
      lsStrSet(NICKK,nk); b.disabled=true; b.textContent='Odesílám…';
      var p; try{ p=sbCall('week_submit',{p_cls:cls,p_course:cid,p_size:sz,p_handler:nk,p_dog:dn,p_t:rec.t,p_pen:pen,p_len:rec.len,p_device:devId()}); }catch(er){ p=Promise.reject(er); }
      p.then(function(r){
        r=r||{}; var o=wkStore(WKME), k=weekKey()+'|'+cls, old=o[k], cur={t:rec.t,pen:pen,size:sz,dog:dn};
        o[k]=wkBetter(cur,old)?cur:old; o[k].rank_size=r.rank_size; o[k].total_size=r.total_size; o[k].rank=r.rank; lsSet(WKME,o);
        var cc=wkStore(WKCACHE); if(cc[k]){ delete cc[k]; lsSet(WKCACHE,cc); } delete WK_TRY[k];
        if($('sheet').querySelector('.wksend')) closeSheet();
        toast('Jsi '+(+r.rank_size||0)+'. z '+(+r.total_size||0)+' ve velikosti '+sz,4000);
        wkBoard(sz,cls);
      },function(err){
        b.disabled=false; b.textContent='Odeslat do žebříčku';
        toast('Odeslání se nepodařilo: '+(err&&err.message||err),4000);
      });
    });
}

/* ---------- navigace a start ---------- */
function show(v){
  if(v!=='video') stopVid();
  view=v;
  ['home','plan','lib','run','video','more'].forEach(function(k){$('v-'+k).hidden=k!==v;});
  document.body.classList.toggle('at-home',v==='home');
  document.body.setAttribute('data-view',v); topbar();
  Array.prototype.forEach.call(document.querySelectorAll('.nav button'),function(b){b.classList.toggle('on',b.getAttribute('data-v')===v);});
  if(v==='home') homeRender(); if(v==='lib') libRender(); if(v==='run') runRender(); if(v==='video') videoRender(); if(v==='more') moreRender();
  try{window.scrollTo(0,0);}catch(e){}
  HM.emit('view',{v:v});
}
document.querySelector('.nav').onclick=function(e){var b=e.target.closest('button[data-v]'); if(b) show(b.getAttribute('data-v'));};
/* obrazovka modulu (HM.screen): otevře se jako podstránka ve Více */
HM.open=function(id,arg){ if(!HM.screens[id]) return; moreOpen('mod:'+id,arg); };


