
/* ---------- mezičasy naživo a z videa (video zůstává v telefonu, nic se nenahrává) ---------- */
var SPL=null;
function splitOpen(kind){
  if(S.route.length<2){toast('Nejdřív načti nebo postav parkur s trasou.'); return;}
  if(kind==='video'&&APK_LITE){toast('Video z telefonu otevřeš ve webové verzi aplikace. V aplikaci pro Android použij mezičasy naživo.'); return;}
  var n=S.route.length, by={}; S.obs.forEach(function(o){by[o.id]=o;});
  SPL={kind:kind,marks:[],n:n,names:S.route.map(function(id,i){return (i+1)+'. '+DEF[by[id].type].l.toLowerCase();}),t0:0,url:null};
  var ov=document.createElement('div'); ov.className='ovsp'; ov.id='ovSp';
  ov.innerHTML='<div class="ovsp-top"><b>'+(kind==='video'?'Mezičasy z videa':'Mezičasy naživo')+'</b><span class="grow"></span><button class="btn" id="spClose">Zavřít</button></div>'+
    (kind==='video'?'<div class="ovsp-vid"><video id="spVid" playsinline preload="metadata"></video><p class="hint" id="spPick">Vyber video běhu z telefonu. Zůstane jen v telefonu, nikam se nenahrává.</p></div>'+
      '<input type="file" id="spFile" accept="video/*" hidden><input type="range" id="spSeek" min="0" max="1000" value="0" aria-label="Posun ve videu">'+
      '<div class="ovsp-ctl"><button class="btn" data-sk="-1">−1 s</button><button class="btn" data-sk="-.1">−0,1</button><button class="btn primary" id="spPlay">Přehrát</button><button class="btn" data-sk=".1">+0,1</button><button class="btn" data-sk="1">+1 s</button></div>'
      :'<div class="ovsp-clock num" id="spClock">0,00</div>')+
    '<p class="hint" id="spHint"></p><div class="ovsp-mark"><button class="btn" id="spUndo">Zpět</button><button class="markbtn" id="spMark">Start</button></div>'+
    '<ol class="ovsp-list" id="spList"></ol>';
  document.body.appendChild(ov);
  $('spClose').onclick=splitClose; $('spMark').onclick=splitMark; $('spUndo').onclick=function(){ if(SPL.marks.length){SPL.marks.pop(); splitUI();} };
  if(kind==='video'){
    var v=$('spVid'); $('spPick').onclick=function(){$('spFile').click();};
    $('spFile').onchange=function(){ var f=this.files&&this.files[0]; if(!f) return; if(SPL.url) URL.revokeObjectURL(SPL.url); SPL.url=URL.createObjectURL(f); v.src=SPL.url; $('spPick').hidden=true; };
    v.ontimeupdate=function(){ if(v.duration) $('spSeek').value=Math.round(v.currentTime/v.duration*1000); };
    $('spSeek').oninput=function(){ if(v.duration) v.currentTime=this.value/1000*v.duration; };
    $('spPlay').onclick=function(){ if(!v.src){$('spFile').click(); return;} if(v.paused){v.play(); this.textContent='Pauza';} else {v.pause(); this.textContent='Přehrát';} };
    ov.querySelector('.ovsp-ctl').addEventListener('click',function(e){ var b=e.target.closest('[data-sk]'); if(!b||!v.duration) return; v.pause(); $('spPlay').textContent='Přehrát'; v.currentTime=cl(v.currentTime+(+b.getAttribute('data-sk')),0,v.duration); });
    $('spFile').click();
  } else {
    (function tick(){ if(!SPL||SPL.kind!=='live'||!$('spClock')) return; var t=SPL.marks.length?(performance.now()-SPL.t0)/1000:0; $('spClock').textContent=fmt2(t); requestAnimationFrame(tick); })();
  }
  splitUI();
}
function splitNow(){ if(SPL.kind==='video'){ var v=$('spVid'); return v&&v.src?v.currentTime:null; } return (performance.now()-(SPL.t0||performance.now()))/1000; }
function splitMark(){
  if(!SPL) return; var i=SPL.marks.length; if(i>=SPL.n) return;
  if(SPL.kind==='live'&&i===0) SPL.t0=performance.now();
  var t=splitNow(); if(t==null){ toast('Nejdřív vyber video.'); return; }
  if(i>0&&t<=SPL.marks[i-1]){ toast('Tahle značka je dřív než předchozí. Posuň video dopředu.'); return; }
  SPL.marks.push(t); splitUI();
  if(SPL.marks.length===SPL.n) splitDone();
}
function splitUI(){
  var i=SPL.marks.length, b=$('spMark');
  b.textContent=i===0?'Start (skok 1)':i<SPL.n?SPL.names[i]:'Hotovo'; b.disabled=i>=SPL.n;
  $('spHint').textContent=i===0?'Klepni, když pes proběhne startem (první skok).':i<SPL.n?'Klepni, když pes dokončí překážku '+(i+1)+(i===SPL.n-1?' (cíl)':'')+'.':'Všechny mezičasy zapsané.';
  $('spList').innerHTML=SPL.marks.map(function(t,k){ return '<li><span>'+esc(SPL.names[k])+'</span><b class="num">'+fmt2(t-SPL.marks[0])+' s</b></li>'; }).reverse().join('');
}
function splitClose(){ var ov=$('ovSp'); if(SPL&&SPL.url) URL.revokeObjectURL(SPL.url); if(ov) ov.parentNode.removeChild(ov); SPL=null; }
/* porovnání s modelem psa: kde se ztrácí čas */
function splitCompare(sp,c,dog){
  var sz=dog?dog.size:'L', sim=simDog(c,sz), tot=sp[sp.length-1], mt=sim.TX[sim.TX.length-1]-sim.TX[0], k=mt>0?tot/mt:1, rows=[];
  for(var i=1;i<sp.length;i++){ var seg=sp[i]-sp[i-1], ms=(sim.TX[i]-sim.TX[i-1])*k; rows.push({i:i,seg:seg,exp:ms,diff:seg-ms}); }
  return {rows:rows,k:k,sim:sim};
}
function splitDone(){
  var sp=SPL.marks.map(function(t){return Math.round((t-SPL.marks[0])*100)/100;}), c={id:'cur',obs:S.obs,route:S.route,turns:S.turns}, dog=curDog(), cmp=splitCompare(sp,c,dog);
  var worst=cmp.rows.slice().sort(function(a,b){return b.diff-a.diff;}).filter(function(r){return r.diff>.25;}).slice(0,3);
  var h='<h3>Mezičasy</h3><p>Celkem <b>'+fmt2(sp[sp.length-1])+' s</b>. Úseky se porovnávají s modelem psa'+(dog?' '+esc(dog.name)+' ('+dog.size+')':'')+' přepočteným na stejný celkový čas, takže je vidět, kde se ztrácí čas oproti zbytku běhu.</p>'+
    (worst.length?'<ul class="fcilist">'+worst.map(function(r){return '<li class="bad"><span class="i">!</span><span>Úsek '+r.i+' → '+(r.i+1)+': o '+fmt2(r.diff)+' s pomaleji ('+fmt2(r.seg)+' s místo '+fmt2(r.exp)+' s)</span></li>';}).join('')+'</ul>':'<p class="hint">Běh je vyrovnaný, žádný úsek výrazně neztrácí.</p>')+
    '<table class="table"><tr><th>Úsek</th><th>Čas</th><th>Model</th><th>Rozdíl</th></tr>'+cmp.rows.map(function(r){return '<tr><td>'+r.i+' → '+(r.i+1)+'</td><td class="num">'+fmt2(r.seg)+'</td><td class="num">'+fmt2(r.exp)+'</td><td class="num" style="color:'+(r.diff>.25?'var(--warn)':r.diff<-.25?'var(--good)':'inherit')+'">'+(r.diff>0?'+':'')+fmt2(r.diff)+'</td></tr>';}).join('')+'</table>'+
    '<div class="acts"><button class="btn" data-a="x">Zavřít</button><button class="btn primary" data-a="use">Použít k běhu</button></div>';
  var keep=sp; splitClose();
  openSheet(h,function(e){ var b=e.target.closest('[data-a]'); if(!b) return; var a=b.getAttribute('data-a'); closeSheet();
    if(a==='use'){ RUN.sp=keep; show('run'); $('manT').value=fmt2(keep[keep.length-1]); resultRender(); toast('Čas a mezičasy se uloží s během'); } });
}
/* ---------- chytrý trénink: slabá místa podle mezičasů ---------- */
var WEAK={weave:['Slalom','weave','weave'],contact:['Zóny','contacts',null],tunnel:['Tunely','tunnel','disc'],wrap:['Otočky kolem křídla','wraps','box'],back:['Zadní strany','backs','back'],sharp:['Ostré obraty a hady','side','ser'],flow:['Rychlé linie','speed','line']};
function segCat(c,g,fs,i){ /* úsek i: od dokončení překážky i-1 po dokončení překážky i */
  var o=c.obs.filter(function(x){return x.id===c.route[i];})[0], t=c.turns||[];
  if(o.type==='weave') return 'weave'; if(ZN.indexOf(o.type)>=0) return 'contact'; if(o.type==='tunnel') return 'tunnel';
  if(t[i-1]&&t[i-1].charAt(0)==='w') return 'wrap'; if(t[i]&&t[i].charAt(0)==='b') return 'back';
  return Math.abs(fs.turns[i-1]||0)>90?'sharp':'flow';
}
function weakSpots(dog){
  var agg={}, runs=0, faults=0, nr=0;
  Object.keys(MK).forEach(function(id){ (MK[id].runs||[]).forEach(function(x){
    if(dog&&x.dog&&x.dog!==dog.id) return; nr++; faults+=(x.f||0)+(x.r||0);
    if(!x.sp||x.sp.length<3) return; var c=findCourse(id); if(!c||c.route.length!==x.sp.length) return;
    runs++; var g=calc(c.obs,c.route,c.turns), fs=flowStats(c.obs,c.route,c.turns,g), cmp=splitCompare(x.sp,c,dog);
    cmp.rows.forEach(function(r){ var k=segCat(c,g,fs,r.i); (agg[k]=agg[k]||[]).push(r.seg/Math.max(.2,r.exp)); });
  }); });
  var out=Object.keys(agg).map(function(k){ var a=agg[k].sort(function(p,q){return p-q;}); return {k:k,r:a[Math.floor(a.length/2)],n:a.length}; }).filter(function(x){return x.n>=2;});
  out.sort(function(a,b){return b.r-a.r;});
  return {cats:out,runs:runs,nr:nr,fpr:nr?faults/nr:0};
}
function weakHTML(){
  var d=curDog(), w=weakSpots(d), h='<h2>Chytrý trénink</h2>';
  if(!w.runs) return h+'<p class="hint">Změř u běhu mezičasy (záložka Běh › Mezičasy naživo nebo z videa) a aplikace ukáže, kde'+(d?' '+esc(d.name):' pes')+' ztrácí čas: slalom, zóny, otočky, obraty nebo rovné linie. Pak doporučí cvičení.</p>'+
    (w.nr&&w.fpr>=1?'<p class="hint">Průměrně '+fmt(w.fpr)+' chyb a odmítnutí na běh: vyplatí se kratší sekvence a přesnost před rychlostí.</p>':'');
  var weak=w.cats.filter(function(x){return x.r>1.08;}).slice(0,3);
  h+='<p class="hint">Podle '+w.runs+' '+(w.runs===1?'běhu':'běhů')+' s mezičasy. Poměr 1,00 znamená stejně rychle jako zbytek běhu, vyšší číslo je pomalejší.</p><ul class="kv">'+
    w.cats.map(function(x){return '<li><span>'+WEAK[x.k][0]+'</span><b>'+fmt2(x.r)+'</b><small>'+x.n+' '+(x.n===1?'úsek':x.n<5?'úseky':'úseků')+'</small></li>';}).join('')+'</ul>';
  h+=weak.length?'<p>Nejvíc času ztrácíte: <b>'+weak.map(function(x){return WEAK[x.k][0].toLowerCase();}).join(', ')+'</b>.</p><div class="row">'+weak.map(function(x){var m=WEAK[x.k]; return '<button class="btn" data-gpre="'+m[1]+'">Sekvence: '+esc(SKILLS[m[1]].l)+'</button>'+(m[2]?'<button class="btn" data-gdrill="'+m[2]+'">Cvičení: '+esc(DRILLS[m[2]].l)+'</button>':'');}).join('')+'</div>'
    :'<p class="hint">Žádná část běhu výrazně nezaostává. Zkus těžší parkury nebo rychlejší linie.</p>';
  if(w.fpr>=1) h+='<p class="hint">Průměrně '+fmt(w.fpr)+' chyb a odmítnutí na běh: vyplatí se přesnost před rychlostí.</p>';
  return h;
}
/* ---------- předčítání trasy ---------- */
var SAY=null;
function sayText(i,hs){
  var id=S.route[i], o=getO(id), t=S.turns[i], parts=[(i+1)+'. '+DEF[o.type].l];
  if(o.type==='tunnel'&&o.bend) parts.push(Math.abs(o.bend)>=180?'do U':'do oblouku');
  if(t==='f') parts.push(o.type==='jump'?'z druhé strany':'vstup vzdálenějším koncem');
  else if(t) parts.push(tuLabel(t,S.sides[i]).slice(2));
  if(i===0) parts.push('start'); if(i===S.route.length-1) parts.push('cíl');
  if(hs){ var sd=S.sides[i]||(ANA.hsd&&ANA.hsd.sd[i]); if(sd&&(i===0||sd!==(S.sides[i-1]||(ANA.hsd&&ANA.hsd.sd[i-1])))) parts.push((i?'změna strany, ':'')+'pes '+(sd==='L'?'vlevo':'vpravo')); }
  return parts.join(', ')+'.';
}
function saySheet(){
  if(S.route.length<2){toast('Nejdřív vyznač trasu v režimu Trasa.'); return;}
  if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance!=='function'){toast('Tohle zařízení neumí předčítat. Zkus webovou verzi v Chrome.'); return;}
  var rate=SET.sayRate||1;
  openSheet('<h3>Předčítání trasy</h3><p>Aplikace přečte pořadí překážek, otočky a vstupy. Hodí se při prohlídce parkuru: jdi trasu a poslouchej.</p>'+
    '<label class="check" for="sayHs"><input type="checkbox" id="sayHs"'+(SET.sayHs===false?'':' checked')+'> Strana psa a změny strany</label>'+
    '<div class="seg wide" id="sayRate"><button data-r=".8" class="'+(rate<1?'on':'')+'">Pomalu</button><button data-r="1" class="'+(rate===1?'on':'')+'">Normálně</button><button data-r="1.2" class="'+(rate>1?'on':'')+'">Rychle</button></div>'+
    '<div class="acts"><button class="btn" data-a="x">Zavřít</button><button class="btn primary" data-a="say">Přečíst trasu</button></div>',
    function(e){
      var r2=e.target.closest('[data-r]'); if(r2){ SET.sayRate=+r2.getAttribute('data-r'); lsSet(SETK,SET); Array.prototype.forEach.call(document.querySelectorAll('#sayRate button'),function(b){b.classList.toggle('on',b===r2);}); return; }
      var b=e.target.closest('[data-a]'); if(!b) return;
      if(b.getAttribute('data-a')==='say'){ SET.sayHs=$('sayHs').checked; lsSet(SETK,SET); closeSheet(); sayRoute(); } else closeSheet();
    });
}
function sayStop(){ try{speechSynthesis.cancel();}catch(e){} SAY=null; var g=$('sayG'); if(g) g.parentNode.removeChild(g); var bar=$('sayBar'); if(bar) bar.parentNode.removeChild(bar); }
function sayRoute(){
  sayStop(); show('plan');
  if(SET.sayHs!==false&&!(S.sides||[]).filter(Boolean).length){ var g0=calc(); ANA.hsd=handSides({obs:S.obs,route:S.route,turns:S.turns},g0,flowStats(S.obs,S.route,S.turns,g0)); }
  var voice=null; try{ voice=speechSynthesis.getVoices().filter(function(v){return /^cs/i.test(v.lang);})[0]||null; }catch(e){}
  var tok={}; SAY=tok;
  var bar=document.createElement('div'); bar.className='saybar'; bar.id='sayBar'; bar.innerHTML='<span id="sayTxt">Čtu trasu…</span><button class="btn" id="sayStop">Zastavit</button>'; document.body.appendChild(bar);
  $('sayStop').onclick=sayStop;
  var g=document.createElementNS(NS,'g'); g.setAttribute('id','sayG'); $('field').appendChild(g);
  var geo=calc();
  S.route.forEach(function(id,i){
    var u=new SpeechSynthesisUtterance(sayText(i,SET.sayHs!==false)); u.lang='cs-CZ'; if(voice) u.voice=voice; u.rate=SET.sayRate||1;
    u.onstart=function(){ if(SAY!==tok) return; var p=geo.P[i].en; g.innerHTML='<circle cx="'+r(p.x)+'" cy="'+r(p.y)+'" r="1.4" fill="none" stroke="var(--accent)" stroke-width=".3"/>'; var tx=$('sayTxt'); if(tx) tx.textContent=(i+1)+' z '+S.route.length+': '+DEF[getO(id).type].l;
      if(zoom>1){ var wr=$('wrap'), sc=$('field').clientWidth/S.W; wr.scrollLeft=p.x*sc-wr.clientWidth/2; wr.scrollTop=p.y*sc-wr.clientHeight/2; } };
    if(i===S.route.length-1) u.onend=function(){ if(SAY===tok) setTimeout(sayStop,600); };
    speechSynthesis.speak(u);
  });
}
