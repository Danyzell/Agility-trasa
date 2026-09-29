
/* ---------- dialogy a hlášky ---------- */
function openSheet(html,onClick){
  var sh=$('sheet'); sh.innerHTML=html; sh.onclick=onClick; $('scrim').hidden=false;
  var f=sh.querySelector('input,select,.primary'); if(f) f.focus();
}
function closeSheet(){$('scrim').hidden=true; $('sheet').innerHTML=''; $('sheet').onclick=null;}
$('scrim').addEventListener('click',function(e){if(e.target===this) closeSheet();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!$('scrim').hidden) closeSheet();});
function ask(title,text,okLbl,cb,danger){
  openSheet('<h3>'+esc(title)+'</h3><p>'+esc(text)+'</p><div class="acts"><button class="btn" data-a="x">Zrušit</button><button class="btn '+(danger?'danger':'primary')+'" data-a="ok">'+esc(okLbl)+'</button></div>',
    function(e){var b=e.target.closest('[data-a]'); if(!b) return; closeSheet(); if(b.getAttribute('data-a')==='ok') cb();});
}
function toast(t){var el=$('toast'); el.textContent=t; el.hidden=false; clearTimeout(toast.h); toast.h=setTimeout(function(){el.hidden=true;},2400);}

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
    S.W=c.W||40; S.H=c.H||20; setSizeSel();
    S.obs=c.obs.map(function(o){var n={id:o.id,type:o.type,x:o.x,y:o.y,rot:o.rot}; if(o.type==='tunnel'&&o.bend) n.bend=o.bend; return n;}); S.route=c.route.slice(); sel=null;
    S.sides=(c.sides||[]).slice(); S.turns=(c.turns||[]).slice(); S.hp=(c.hp||[]).map(function(p){return p.slice();}); if(panel==='quiz'){quizStop(); panel=null;}
    S.meta={id:c.id,name:c.name,cls:c.cls,author:c.author||'',gen:!!c.gen,dirty:false};
    newSeen(c.id);
    save(); drawGrid(); render(); ui(); topbar(); resetRun();
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
      if(S.meta.id===did){S.meta.id=null; S.meta.dirty=true; save(); topbar();}
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
      mySave(L); S.meta={id:rec.id,name:name,cls:cls,author:auth,gen:false,dirty:false}; save(); HM.emit('courseSaved',{id:rec.id});
      closeSheet(); topbar(); render(); toast(a==='upd'?'Změny uloženy':'Uloženo do Moje');
    });
  $('fCls').value=m.cls;
}
$('saveBtn').onclick=saveSheet;
$('titleBtn').onclick=saveSheet;
$('newBtn').onclick=function(){
  function go(){S.obs=[]; S.route=[]; S.sides=[]; S.turns=[]; S.hp=[]; sel=null; if(panel==='quiz'){quizStop();} panel=null; S.meta={id:null,name:'Nový parkur',cls:S.meta.cls||'A1',author:'',gen:false,dirty:false}; mode='build'; save(); render(); ui(); topbar(); resetRun();}
  if(S.obs.length&&(S.meta.dirty||!S.meta.id)) ask('Začít nový parkur?','Plocha se vyčistí a neuložené změny se ztratí.','Začít nový',go,true); else go();
};
function needId(){if(!S.meta.id){toast('Nejdřív parkur ulož, pak si ho můžeš označit.'); return true;} return false;}
$('favBtn').onclick=function(){if(needId()) return; setMark(S.meta.id,{fav:!getMark(S.meta.id).fav}); topbar(); toast(getMark(S.meta.id).fav?'Přidáno do oblíbených':'Odebráno z oblíbených');};
$('doneBtn').onclick=function(){if(needId()) return; var d=!getMark(S.meta.id).done; setMark(S.meta.id,{done:d}); topbar(); toast(d?'Označeno jako zaběhnuté':'Označení zaběhnutí zrušeno');};

/* ---------- běh: stopky a hodnocení podle FCI ---------- */
var RUN={t0:0,acc:0,on:false,f:0,r:0,raf:0};
function clockT(){return RUN.acc+(RUN.on?(performance.now()-RUN.t0)/1000:0);}
function runTime(){var v=parseFloat(String($('manT').value).replace(',','.')); return isFinite(v)&&v>0?v:clockT();}
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
function resetRun(){cancelAnimationFrame(RUN.raf); RUN={t0:0,acc:0,on:false,f:0,r:0,raf:0}; $('manT').value=''; $('disChk').checked=false; if(view==='run') runRender();}
$('startBtn').onclick=function(){
  if(RUN.on){RUN.acc+=(performance.now()-RUN.t0)/1000; RUN.on=false; cancelAnimationFrame(RUN.raf); $('manT').value=fmt2(RUN.acc);}
  else {$('manT').value=''; RUN.acc=0; RUN.sp=null; RUN.t0=performance.now(); RUN.on=true; RUN.raf=requestAnimationFrame(tick);}
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
  var m=curM(), t=runTime(), dis=$('disChk').checked;
  if(!t&&!dis){toast('Chybí čas běhu.'); return;}
  var e=evalRun(t,RUN.f,RUN.r,dis,m), mk=getMark(S.meta.id), runs=(mk.runs||[]).slice();
  var dg=curDog();
  var rec={d:Date.now(),t:Math.round(t*100)/100,f:RUN.f,r:RUN.r,tot:e.tot,g:e.g,sct:m.sct,mct:m.mct,len:Math.round(m.len*10)/10,dog:dg?dg.id:null,cls:S.meta.cls};
  if(RUN.sp&&RUN.sp.length===S.route.length) rec.sp=RUN.sp.slice();
  runs.push(rec);
  setMark(S.meta.id,{runs:runs,done:true}); topbar(); resetRun(); runRender(); toast('Běh uložen: '+GNAME[e.g]);
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

/* ---------- navigace a start ---------- */
function show(v){
  view=v;
  ['plan','lib','run','video','more'].forEach(function(k){$('v-'+k).hidden=k!==v;});
  Array.prototype.forEach.call(document.querySelectorAll('.nav button'),function(b){b.classList.toggle('on',b.getAttribute('data-v')===v);});
  if(v==='lib') libRender(); if(v==='run') runRender(); if(v==='video') videoRender(); if(v==='more') moreRender();
  try{window.scrollTo(0,0);}catch(e){}
  HM.emit('view',{v:v});
}
document.querySelector('.nav').onclick=function(e){var b=e.target.closest('button[data-v]'); if(b) show(b.getAttribute('data-v'));};


