
/* ---------- psi ---------- */
var DOGK='agility-dogs-v1', DOGCUR='agility-dogcur-v1', DIARYK='agility-diary-v1';
var DOGS=lsGet(DOGK,[]), DOGC=lsGet(DOGCUR,null), moreTab='dogs';
var SIZES={
  XS:{l:'XS – do 30 cm',jump:'15–20 cm',wall:'10–20 cm',tire:'45–55 cm',lj:'15–40 cm (1–2 díly)'},
  S:{l:'S – do 35 cm',jump:'25–30 cm',wall:'25–30 cm',tire:'55 cm',lj:'40–50 cm (2 díly)'},
  M:{l:'M – 35 až 43 cm',jump:'35–40 cm',wall:'35–40 cm',tire:'55 cm',lj:'70–90 cm (3 díly)'},
  I:{l:'I – 43 až 48 cm',jump:'45–50 cm',wall:'45–50 cm',tire:'70 cm',lj:'90–110 cm (3–4 díly)'},
  L:{l:'L – od 48 cm',jump:'55–60 cm',wall:'55–60 cm',tire:'80 cm',lj:'120–150 cm (4 díly)'}
};
function curDog(){for(var i=0;i<DOGS.length;i++) if(DOGS[i].id===DOGC) return DOGS[i]; return DOGS[0]||null;}
function dogName(id){for(var i=0;i<DOGS.length;i++) if(DOGS[i].id===id) return DOGS[i].name; return '';}
function saveDogs(){lsSet(DOGK,DOGS); lsSet(DOGCUR,DOGC); HM.emit('dogChanged',{id:DOGC});}
function dogChips(el){
  var box=$(el); if(!box) return; var c=curDog();
  box.innerHTML=DOGS.length?DOGS.map(function(d){return '<button class="chip'+(c&&c.id===d.id?' on':'')+'" data-dog="'+esc(d.id)+'">'+esc(d.name)+' · '+d.size+'</button>';}).join('')
    :'<button class="chip" data-adddog="1">＋ Přidat psa (běhy se pak zapisují ke psovi)</button>';
  box.onclick=function(e){
    var b=e.target.closest('[data-dog]'), a=e.target.closest('[data-adddog]');
    if(b){DOGC=b.getAttribute('data-dog'); saveDogs(); dogChips(el); if(view==='more') moreRender(); else if(view==='run') histRender();}
    if(a){dogSheet(null);}
  };
}
function dogSheet(d){
  var isNew=!d; d=d||{id:'dog-'+Date.now().toString(36),name:'',size:'L',cls:'A1'};
  openSheet('<h3>'+(isNew?'Nový pes':'Upravit psa')+'</h3>'+
    '<label for="dName">Jméno<input id="dName" type="text" maxlength="40" value="'+esc(d.name)+'"></label>'+
    '<div class="grid2"><label for="dSize">Velikost<select id="dSize">'+Object.keys(SIZES).map(function(k){return '<option value="'+k+'">'+SIZES[k].l+'</option>';}).join('')+'</select></label>'+
    '<label for="dCls">Výkonnostní třída<select id="dCls"><option>A0</option><option>A1</option><option>A2</option><option>A3</option></select></label></div>'+
    '<label for="dBorn">Narozen/a (měsíc a rok, nepovinné)<input id="dBorn" type="month" value="'+esc(d.born||'')+'" max="'+new Date().toISOString().slice(0,7)+'"></label>'+
    '<div class="acts"><button class="btn" data-a="x">Zrušit</button><button class="btn primary" data-a="ok">'+(isNew?'Přidat':'Uložit')+'</button></div>',
    function(e){
      var b=e.target.closest('[data-a]'); if(!b) return;
      if(b.getAttribute('data-a')==='ok'){
        d.name=$('dName').value.trim()||'Pes'; d.size=$('dSize').value; d.cls=$('dCls').value; var bv=$('dBorn').value; if(/^\d{4}-\d{2}$/.test(bv)) d.born=bv; else delete d.born;
        if(isNew) DOGS.push(d); DOGC=d.id; saveDogs(); toast(isNew?'Pes přidán':'Uloženo');
      }
      closeSheet(); if(view==='more') moreRender(); if(view==='run') runRender();
    });
  $('dSize').value=d.size; $('dCls').value=d.cls;
}

/* ---------- statistiky ---------- */
function allRuns(dogId){
  var out=[];
  Object.keys(MK).forEach(function(id){(MK[id].runs||[]).forEach(function(x){ if(!dogId||x.dog===dogId||(!x.dog&&DOGS.length<=1)) out.push(Object.assign({cid:id},x)); });});
  return out.sort(function(a,b){return a.d-b.d;});
}
function speedChart(runs){
  var pts=runs.filter(function(x){return x.g!=='DIS'&&x.t>0&&x.len>0;}).slice(-30).map(function(x){return {v:x.len/x.t,x:x};});
  if(pts.length<2) return '<p class="hint">Graf rychlosti se ukáže po dvou uložených bězích bez diskvalifikace.</p>';
  var W=340,H=170,L=34,R=10,T=12,B=24, lo=Math.floor(Math.min.apply(null,pts.map(function(p){return p.v;}))*2)/2, hi=Math.ceil(Math.max.apply(null,pts.map(function(p){return p.v;}))*2)/2;
  if(hi-lo<1){hi=lo+1;}
  var X=function(i){return L+(W-L-R)*(pts.length===1?.5:i/(pts.length-1));}, Y=function(v){return T+(H-T-B)*(1-(v-lo)/(hi-lo));};
  var g='', step=(hi-lo)<=2?.5:1;
  for(var v=lo;v<=hi+1e-9;v+=step) g+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" stroke="var(--border)" stroke-width="1"/><text x="'+(L-6)+'" y="'+(Y(v)+4)+'" font-size="11" text-anchor="end" fill="var(--muted)">'+fmt(v)+'</text>';
  var line=pts.map(function(p,i){return (i?'L':'M')+X(i).toFixed(1)+','+Y(p.v).toFixed(1);}).join('');
  var dots=pts.map(function(p,i){return '<circle cx="'+X(i).toFixed(1)+'" cy="'+Y(p.v).toFixed(1)+'" r="4" fill="var(--accent)" stroke="var(--surface)" stroke-width="2"/>';}).join('');
  var hits=pts.map(function(p,i){var w=(W-L-R)/Math.max(1,pts.length-1), x0=Math.max(L,X(i)-w/2), x1=Math.min(W-R,X(i)+w/2); return '<rect x="'+x0.toFixed(1)+'" y="'+T+'" width="'+(x1-x0).toFixed(1)+'" height="'+(H-T-B)+'" fill="transparent" data-tip="'+i+'" data-cx="'+X(i).toFixed(1)+'"/>';}).join('');
  var first=new Date(pts[0].x.d).toLocaleDateString(LOC), last=new Date(pts[pts.length-1].x.d).toLocaleDateString(LOC);
  CHART_PTS=pts;
  return '<div class="chart"><b>Rychlost psa (m/s)</b><svg viewBox="0 0 '+W+' '+H+'" id="spdSvg" role="img" aria-label="Graf rychlosti psa v posledních bězích">'+g+
    '<path d="'+line+'" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/>'+dots+
    '<text x="'+L+'" y="'+(H-6)+'" font-size="11" fill="var(--muted)">'+first+'</text><text x="'+(W-R)+'" y="'+(H-6)+'" font-size="11" text-anchor="end" fill="var(--muted)">'+last+'</text>'+
    '<g id="spdTip"></g>'+hits+'</svg></div>';
}
var CHART_PTS=[];
function bindChart(){
  var s=$('spdSvg'); if(!s) return;
  s.onpointermove=s.onclick=function(e){
    var t=e.target.getAttribute&&e.target.getAttribute('data-tip'); if(t==null) return;
    var p=CHART_PTS[+t], x=+e.target.getAttribute('data-cx');
    var txt=fmt(p.v)+' m/s · '+fmt2(p.x.t)+' s · '+new Date(p.x.d).toLocaleDateString(LOC), w=txt.length*6.2+12, tx=Math.min(Math.max(x-w/2,2),340-w-2);
    $('spdTip').innerHTML='<line x1="'+x+'" x2="'+x+'" y1="12" y2="146" stroke="var(--muted)" stroke-dasharray="3 3"/><rect x="'+tx+'" y="0" width="'+w+'" height="18" rx="5" fill="var(--text)"/><text x="'+(tx+6)+'" y="13" font-size="11" fill="var(--bg)">'+txt+'</text>';
  };
  s.onpointerleave=function(){$('spdTip').innerHTML='';};
}
function statsHTML(){
  var d=curDog(), runs=allRuns(d&&d.id), n=runs.length;
  if(!n) return '<p class="hint">Zatím tu nejsou žádné běhy'+(d?' psa '+esc(d.name):'')+'. Změř a ulož běh v záložce Běh.</p>';
  var clean=runs.filter(function(x){return x.tot===0&&x.g!=='DIS';}).length, ok=runs.filter(function(x){return x.g!=='DIS';});
  var avgP=ok.length?ok.reduce(function(a,x){return a+x.tot;},0)/ok.length:0;
  var sp=ok.filter(function(x){return x.t>0&&x.len>0;}).map(function(x){return x.len/x.t;});
  var avgS=sp.length?sp.reduce(function(a,v){return a+v;},0)/sp.length:0, maxS=sp.length?Math.max.apply(null,sp):0;
  var gr={V:0,VD:0,D:0,BO:0,DIS:0}; runs.forEach(function(x){gr[x.g]=(gr[x.g]||0)+1;});
  var mx=Math.max(1,Math.max.apply(null,Object.keys(gr).map(function(k){return gr[k];})));
  var doneN=Object.keys(MK).filter(function(k){return MK[k].done;}).length;
  return '<div class="tiles"><div><small>Běhů</small><b>'+n+'</b></div><div><small>Čisté běhy</small><b>'+Math.round(clean/n*100)+' %</b></div>'+
    '<div><small>Průměr trestných bodů</small><b>'+fmt2(avgP)+'</b></div><div><small>Průměrná rychlost</small><b>'+(avgS?fmt(avgS)+' m/s':'–')+'</b></div>'+
    '<div><small>Nejrychlejší běh</small><b>'+(maxS?fmt(maxS)+' m/s':'–')+'</b></div><div><small>Zaběhnuté parkury</small><b>'+doneN+'</b></div></div>'+
    speedChart(runs)+
    '<div class="chart"><b>Hodnocení běhů</b><table class="table" style="margin-top:6px">'+Object.keys(gr).map(function(k){
      return '<tr><td style="width:60px"><span class="g" style="display:inline-block">'+k+'</span></td><td><div class="bar" style="height:10px"><i style="width:'+Math.round(gr[k]/mx*100)+'%"></i></div></td><td class="num" style="width:40px;text-align:right">'+gr[k]+'</td></tr>';
    }).join('')+'</table></div>';
}

/* ---------- deník a postup ---------- */
function diary(){return lsGet(DIARYK,[]);}
function promoHTML(){
  var d=curDog(), L=diary().filter(function(x){return x.kind==='zavod'&&(!d||x.dog===d.id);});
  function part(cls,need,test,label){
    var ok=L.filter(function(x){return x.cls===cls&&test(x);}), judges={}; ok.forEach(function(x){if(x.judge) judges[x.judge.trim().toLowerCase()]=1;});
    var jn=Object.keys(judges).length, n=Math.min(ok.length,need);
    return '<div class="prog"><b>'+label+'</b><div class="bar"><i style="width:'+Math.round(n/need*100)+'%"></i></div><span class="hint">'+ok.length+' z '+need+' zkoušek · rozhodčích: '+jn+' (potřeba aspoň 2)'+(ok.length>=need&&jn>=2?' · podmínka splněna':'')+'</span></div>';
  }
  return part('A1',3,function(x){return x.g==='V';},'Postup A1 → A2: 3× hodnocení Výborně')+
    part('A2',5,function(x){return x.g!=='DIS'&&+x.tot===0&&x.place&&+x.place<=3;},'Postup A2 → A3: 5× bez trestných bodů do 3. místa')+
    '<p class="hint">Podle soutěžního řádu KAČR (znění může být novější, ověř na <a href="https://klubagility.cz/dokumenty/" target="_blank" rel="noopener">klubagility.cz</a>). Počítají se závody zapsané v deníku u vybraného psa.</p>';
}
function diaryHTML(){
  var d=curDog(), L=diary().filter(function(x){return !d||!x.dog||x.dog===d.id;}).sort(function(a,b){return b.date<a.date?-1:1;});
  return promoHTML()+'<div class="row"><button class="btn primary" data-dy="trenink">＋ Trénink</button><button class="btn" data-dy="zavod">＋ Závod</button></div>'+
    '<div class="list">'+(L.length?L.map(function(x){
      var t=x.kind==='zavod'?'<b>Závod'+(x.event?': '+esc(x.event):'')+'</b><span>'+esc(x.cls||'')+' · '+esc(x.g||'')+(x.place?' · '+esc(x.place)+'. místo':'')+(x.tot!==''&&x.tot!=null?' · '+esc(x.tot)+' tr. b.':'')+(x.judge?' · rozhodčí '+esc(x.judge):'')+'</span>'
        :'<b>Trénink'+(x.surface?' · '+esc(x.surface):'')+'</b>';
      return '<div class="item"><div>'+t+'<span>'+new Date(x.date).toLocaleDateString(LOC)+(dogName(x.dog)?' · '+esc(dogName(x.dog)):'')+'</span>'+(x.note?'<span>'+esc(x.note)+'</span>':'')+'</div><div class="acts"><button class="btn" data-dydel="'+esc(x.id)+'" aria-label="Smazat záznam">×</button></div></div>';
    }).join(''):'<p class="hint">Zatím žádné záznamy. Zapiš si trénink nebo výsledek ze závodů.</p>')+'</div>';
}
function diarySheet(kind){
  var d=curDog(), today=new Date().toISOString().slice(0,10);
  var dogSel='<label for="yDog">Pes<select id="yDog"><option value="">–</option>'+DOGS.map(function(x){return '<option value="'+esc(x.id)+'">'+esc(x.name)+'</option>';}).join('')+'</select></label>';
  openSheet('<h3>'+(kind==='zavod'?'Výsledek ze závodů':'Záznam z tréninku')+'</h3>'+
    '<div class="grid2"><label for="yDate">Datum<input id="yDate" type="date" value="'+today+'"></label>'+dogSel+'</div>'+
    (kind==='zavod'
      ? '<label for="yEv">Akce<input id="yEv" type="text" maxlength="60" placeholder="např. Hranické hrátky"></label>'+
        '<label for="yJudge">Rozhodčí<input id="yJudge" type="text" maxlength="60"></label>'+
        '<div class="grid2"><label for="yCls">Třída<select id="yCls"><option>A0</option><option>A1</option><option>A2</option><option>A3</option><option>Jumping</option></select></label>'+
        '<label for="yG">Hodnocení<select id="yG"><option>V</option><option>VD</option><option>D</option><option>BO</option><option>DIS</option></select></label></div>'+
        '<div class="grid2"><label for="yTot">Trestné body<input id="yTot" type="text" inputmode="decimal" placeholder="0"></label><label for="yPl">Umístění<input id="yPl" type="number" min="1" inputmode="numeric"></label></div>'
      : '<label for="ySurf">Povrch<select id="ySurf"><option>tráva</option><option>umělá tráva</option><option>písek</option><option>hala</option><option>jiný</option></select></label>')+
    '<label for="yNote">Poznámka<textarea id="yNote" maxlength="600" placeholder="Co šlo, co ne, na čem zapracovat"></textarea></label>'+
    '<div class="acts"><button class="btn" data-a="x">Zrušit</button><button class="btn primary" data-a="ok">Uložit</button></div>',
    function(e){
      var b=e.target.closest('[data-a]'); if(!b) return;
      if(b.getAttribute('data-a')==='ok'){
        var L=diary(), x={id:'y-'+Date.now().toString(36),kind:kind,date:$('yDate').value||today,dog:$('yDog').value||null,note:$('yNote').value.trim()};
        if(kind==='zavod'){x.event=$('yEv').value.trim(); x.judge=$('yJudge').value.trim(); x.cls=$('yCls').value; x.g=$('yG').value; x.tot=String($('yTot').value).replace(',','.').trim(); x.place=$('yPl').value;}
        else x.surface=$('ySurf').value;
        L.push(x); lsSet(DIARYK,L); toast('Zapsáno do deníku');
      }
      closeSheet(); moreRender();
    });
  if(d) $('yDog').value=d.id;
  if(kind==='zavod'&&d) $('yCls').value=d.cls==='A0'?'A0':d.cls;
}

/* ---------- rozcvička ---------- */
var WARM=[
  ['Volná chůze na vodítku',120,'Klidné tempo, pes se může očichat.'],
  ['Klus',120,'Plynulý klus vedle tebe, na rovném povrchu.'],
  ['Kolečka a osmičky',60,'Oběma směry, ať se pes ohýbá doleva i doprava.'],
  ['Couvání',30,'Pár kroků dozadu, v klidu.'],
  ['Protažení za pamlskem',60,'Hlava k boku na obě strany, mezi přední nohy a nahoru.'],
  ['Krátké sprinty nebo přetahování',60,'Pár krátkých zrychlení, ať je pes připravený na rychlost.']
];
var WU={i:0,left:WARM[0][1],on:false,timer:null};
function warmHTML(){
  var w=WARM[WU.i]||WARM[WARM.length-1], m=Math.floor(WU.left/60), s=WU.left%60;
  return '<div class="panel warm"><div class="now">'+(WU.i<WARM.length?esc(w[0]):'Hotovo, můžete trénovat')+'</div><div class="cd">'+m+':'+(s<10?'0':'')+s+'</div>'+
    '<p class="hint" style="text-align:center">'+(WU.i<WARM.length?esc(w[2]):'Po tréninku dej psovi ještě pár minut volné chůze.')+'</p>'+
    '<div class="row" style="justify-content:center"><button class="btn primary" data-wu="toggle">'+(WU.on?'Pauza':'Start')+'</button><button class="btn" data-wu="next">Další cvik</button><button class="btn" data-wu="reset">Od začátku</button></div>'+
    '<ol>'+WARM.map(function(x,i){return '<li class="'+(i===WU.i?'on':i<WU.i?'done':'')+'">'+esc(x[0])+' · '+(x[1]>=60?x[1]/60+' min':x[1]+' s')+'</li>';}).join('')+'</ol></div>'+
    '<p class="hint">Obecná doporučení k zahřátí před tréninkem. Pokud má pes zdravotní potíže, poraď se s veterinářem nebo psím fyzioterapeutem.</p>';
}
function warmTick(){
  if(!WU.on) return;
  WU.left--;
  if(WU.left<=0){WU.i++; if(WU.i>=WARM.length){WU.on=false; clearInterval(WU.timer); WU.left=0;} else WU.left=WARM[WU.i][1];}
  if(view==='more'&&moreTab==='warm') $('moreBody').innerHTML=warmHTML();
}
function warmAct(a){
  if(a==='toggle'){WU.on=!WU.on; clearInterval(WU.timer); if(WU.on){ if(WU.i>=WARM.length){WU.i=0; WU.left=WARM[0][1];} WU.timer=setInterval(warmTick,1000); try{navigator.wakeLock&&navigator.wakeLock.request('screen').catch(function(){});}catch(e){} }}
  else if(a==='next'){WU.i=Math.min(WARM.length,WU.i+1); WU.left=WU.i<WARM.length?WARM[WU.i][1]:0; if(WU.i>=WARM.length){WU.on=false; clearInterval(WU.timer);}}
  else {WU.on=false; clearInterval(WU.timer); WU.i=0; WU.left=WARM[0][1];}
  $('moreBody').innerHTML=warmHTML();
}

/* ---------- záloha ---------- */
function backupData(){
  var o={app:'agility-trasa',v:3,at:new Date().toISOString(),data:{}};
  try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i); if(k.indexOf('agility-')===0&&k.indexOf('agility-db-')!==0) o.data[k]=localStorage.getItem(k);}}catch(e){}
  return o;
}
function restoreData(o){
  if(!o||o.app!=='agility-trasa'||!o.data){toast('Tohle není záloha z aplikace Agility trasa.'); return;}
  ask('Obnovit zálohu?','Současná data v aplikaci se nahradí zálohou z '+new Date(o.at).toLocaleString(LOC)+'.','Obnovit',function(){
    try{Object.keys(o.data).forEach(function(k){localStorage.setItem(k,o.data[k]);}); location.reload();}catch(e){toast('Zálohu se nepodařilo zapsat: '+e.message);}
  });
}
function cloudKey(){var k=lsGet('agility-cloudkey-v1',null); if(!k){k=''; var a='abcdefghijkmnpqrstuvwxyz23456789'; for(var i=0;i<12;i++) k+=a[Math.floor(Math.random()*a.length)]; lsSet('agility-cloudkey-v1',k);} return k;}
function backupHTML(){
  return '<div class="panel" style="display:flex;flex-direction:column;gap:10px"><b>'+(APK_LITE?'Záloha jako text':'Záloha do souboru')+'</b>'+
    (APK_LITE?'<p class="hint">Tvoje parkury, běhy, psy a deník se ukážou jako text. Zkopíruj si ho a schovej, obnovíš ho přes Vložit text zálohy. Pohodlnější je cloud níž.</p>'
      :'<p class="hint">Uloží tvoje parkury, běhy, psy a deník do jednoho souboru. Hodí se před přeinstalací aplikace.</p>')+
    '<div class="row"><button class="btn primary" data-bk="save">'+(APK_LITE?'Zobrazit zálohu':'Uložit zálohu')+'</button>'+(APK_LITE?'':'<button class="btn" data-bk="load">Obnovit ze souboru</button>')+'<button class="btn" data-bk="paste">Vložit text zálohy</button></div></div>'+
    '<div class="panel" style="display:flex;flex-direction:column;gap:10px"><b>Záloha v cloudu</b>'+
    (IS_SRV?'<p class="hint">Záloha se uloží na server aplikace pod tvým klíčem. Klíč si opiš, s ním data obnovíš i v jiném telefonu.</p><div class="code">'+cloudKey()+'</div>'+
      '<div class="row"><button class="btn primary" data-bk="cput">Zálohovat do cloudu</button><button class="btn" data-bk="cget">Obnovit z cloudu</button></div>'
      :'<p class="hint">Cloudová záloha funguje v aplikaci pro Android. Tady použij zálohu do souboru.</p>')+'</div>';
}
function backupAct(a){
  if(a==='save'){ deliverFile(JSON.stringify(backupData()),'application/json','agility-zaloha-'+new Date().toISOString().slice(0,10)+'.json',false); }
  else if(a==='load'){ if(APK_LITE){toast('Použij Vložit text zálohy nebo cloud.'); return;} $('jsonFile').click(); }
  else if(a==='paste'){
    openSheet('<h3>Vložit zálohu</h3><label for="bkTxt">Text zálohy<textarea id="bkTxt" placeholder="{&quot;app&quot;:&quot;agility-trasa&quot;, …}"></textarea></label><div class="acts"><button class="btn" data-a="x">Zrušit</button><button class="btn primary" data-a="ok">Obnovit</button></div>',
      function(e){var b=e.target.closest('[data-a]'); if(!b) return; var t=$('bkTxt').value; closeSheet(); if(b.getAttribute('data-a')==='ok'){try{restoreData(JSON.parse(t));}catch(x){toast('Text není platná záloha.');}}});
  }
  else if(a==='cput'){ sbCall('backup_put',{p_key:cloudKey(),p_data:backupData()}).then(function(){toast('Záloha uložena do cloudu');},function(e){toast('Cloud nejde: '+e.message);}); }
  else if(a==='cget'){
    openSheet('<h3>Obnovit z cloudu</h3><label for="ckIn">Klíč zálohy<input id="ckIn" type="text" maxlength="12" autocomplete="off" value="'+cloudKey()+'"></label><div class="acts"><button class="btn" data-a="x">Zrušit</button><button class="btn primary" data-a="ok">Načíst</button></div>',
      function(e){var b=e.target.closest('[data-a]'); if(!b) return; var k=$('ckIn').value.trim().toLowerCase(); closeSheet();
        if(b.getAttribute('data-a')==='ok') sbCall('backup_get',{p_key:k}).then(function(o){ if(!o){toast('Pod tímhle klíčem žádná záloha není.'); return;} lsSet('agility-cloudkey-v1',k); restoreData(o); },function(e2){toast('Cloud nejde: '+e2.message);});});
  }
}
$('jsonFile').onchange=function(){
  var f=this.files&&this.files[0]; this.value=''; if(!f) return;
  var rd=new FileReader(); rd.onload=function(){try{restoreData(JSON.parse(rd.result));}catch(e){toast('Soubor není platná záloha.');}}; rd.readAsText(f);
};

/* ---------- záložka Více ---------- */
var BOOKS=[
  ['Agility – Od startu až k cíli','Eva Bertilssonová, Emelie Johnson Veghová (Plot)','https://www.plotknihy.cz/cs/agility-od-startu-az-k-cili/586/p/'],
  ['Agility, první krůčky','Karina Divišová, Martina Podešťová, Jaroslav Benda, Lucie Dostálová','https://www.knihydobrovsky.cz/kniha/agility-prvni-krucky-32531'],
  ['Agility – Pracovní sešit','Karina Divišová, Martina Podešťová: 90 tréninkových sekvencí','https://www.knihydobrovsky.cz/kniha/agility-pracovni-sesit-22151']
];
function booksHTML(){
  return '<h2>Knihy</h2><div class="coach-list">'+BOOKS.map(function(b){return '<a class="coach" href="'+b[2]+'" target="_blank" rel="noopener"><span class="cc">CZ</span><span><b>'+esc(b[0])+'</b><span>'+esc(b[1])+'</span></span>'+IC.ext+'</a>';}).join('')+'</div>';
}
function moreRender(){ setTimeout(function(){ if(window.pwaInstUI) pwaInstUI(); },0);
  Array.prototype.forEach.call(document.querySelectorAll('#moreTabs .chip'),function(b){b.classList.toggle('on',b.getAttribute('data-m')===moreTab);});
  var h='', d=curDog();
  if(moreTab==='dogs'){
    h='<div class="list">'+(DOGS.length?DOGS.map(function(x){return '<div class="item'+(d&&d.id===x.id?' cur':'')+'"><div><b>'+esc(x.name)+'</b><span>'+SIZES[x.size].l+' · '+x.cls+(dogAgeM(x)!=null?' · '+ageTxt(dogAgeM(x)):'')+'</span></div><div class="acts">'+(d&&d.id===x.id?'':'<button class="btn" data-dsel="'+esc(x.id)+'">Vybrat</button>')+'<button class="btn" data-dedit="'+esc(x.id)+'">Upravit</button><button class="btn danger" data-ddel="'+esc(x.id)+'" aria-label="Smazat psa">×</button></div></div>';}).join('')
      :'<p class="hint">Přidej psa. Aplikace pak ukáže výšky překážek pro jeho kategorii a běhy i statistiky povede zvlášť pro každého psa.</p>')+'</div>'+
      '<div class="row"><button class="btn primary" data-dadd="1">＋ Přidat psa</button></div>';
    var z=SIZES[d?d.size:'L'];
    h+='<h2>Výšky překážek'+(d?' pro '+esc(d.name):' (kategorie L)')+'</h2><table class="table"><tr><th>Překážka</th><th>Podle FCI</th></tr><tr><td>Skok</td><td>'+z.jump+'</td></tr><tr><td>Zeď</td><td>'+z.wall+'</td></tr><tr><td>Kruh (střed od země)</td><td>'+z.tire+'</td></tr><tr><td>Skok daleký</td><td>'+z.lj+'</td></tr><tr><td>Áčko, kladina, houpačka</td><td>stejné pro všechny: 170 / 120–130 / 60 cm</td></tr></table>';
  } else if(moreTab==='stats'){ h='<div class="filters" id="statDogs"></div>'+statsHTML()+weakHTML(); }
  else if(moreTab==='diary'){ h='<div class="filters" id="diaryDogs"></div>'+diaryHTML(); }
  else if(moreTab==='warm'){ h=warmHTML(); }
  else if(moreTab==='coach'){ h='<p class="hint">Plánky od rozhodčích a trenérů. Parkur podle plánku přeneseš v Plánu přes Plánek z obrázku (překážky se rozpoznají samy) a při ukládání vyplníš, kdo ho stavěl.</p>'+coachHTML()+booksHTML(); }
  else if(moreTab==='backup'){ h=backupHTML(); }
  else if(moreTab==='start'){ h=startHTML(); }
  else {
    h='<div id="pwaInst"></div><div class="panel" style="display:flex;flex-direction:column;gap:8px"><b>Agility trasa 1.9</b><p class="hint">Plánovač agility parkurů: 90 parkurů podle pravidel FCI a stylu rozhodčích (oblouky, křížení, tunely do oblouku), parkury trenérů, kontrola pravidel, výpočet SČP a MČP, stopky s hodnocením a mezičasy, otočky kolem křídla a zadní strany skoků, 3D průlet, trénink paměti, videa s technikou, deník a statistiky.</p>'+
      '<p class="hint">Novinky v 1.9: aplikace k instalaci do telefonu (Chrome → Instalovat aplikaci). V ní funguje výběr fotky a videa, ukládání obrázku, PDF a zálohy, plánek jde poslat přes Sdílet z galerie rovnou do čtečky, katalog parkurů i záloha v cloudu. Aktualizuje se sama.</p>'+
      '<p class="hint">Novinky v 1.8: Plánek z obrázku přečte i trasu. Z čísel v kroužcích pozná pořadí, z nakreslené čáry směry skoků, vstupy do tunelů a zón, otočky kolem křídla a zadní strany. Chybějící kruh, skok daleký, dvojité břevno, zeď nebo kladinu dohledá u čísla. Nejistá místa označí otazníkem. V aplikaci pro Android jde plánek vložit i ze schránky.</p>'+
      '<p class="hint">Novinky v 1.7: tlačítko Zkontrolovat nové parkury v záložce Parkury, nové parkury mají štítek Nový a tečku u záložky, přibyl parkur trenéra Euskadi Sextuple 2018 A1.</p>'+
      '<p class="hint">Novinky v 1.6: nový generátor parkurů, náročnost a řazení parkurů, rozbor parkuru s vedením psovoda, odhadem času a simulací Stihnu to?, dráha podle velikosti psa, klasická cvičení a klubový parkur v generátoru, mezičasy naživo i z videa, chytrý trénink, předčítání trasy, plánek z obrázku, stavba v terénu s kompasem a sekce Začínáme pro štěňata.</p>'+
      '<p class="hint">Katalog parkurů: '+(CAT&&CAT.version?'verze '+CAT.version+' ze serveru, staženo '+new Date(CAT.at).toLocaleDateString(LOC):'vestavěný')+'. V aplikaci pro Android se nové parkury stáhnou samy při spuštění nebo tlačítkem Zkontrolovat nové parkury v záložce Parkury, bez aktualizace aplikace.</p>'+
      '<p class="hint">Data se ukládají v tomhle zařízení. Sdílení kódem a cloudová záloha běží přes server Supabase a fungují v aplikaci pro Android. Uložení PDF a obrázku do telefonu a podklad z fotky fungují ve webové verzi.</p>'+
      '<p class="hint">Pravidla: <a href="https://klubagility.cz/site/assets/files/1076/rad_agility_2023-1.pdf" target="_blank" rel="noopener">Řád agility FCI a ČR (od 2023)</a>.</p></div>';
  }
  $('moreBody').innerHTML=h;
  if(moreTab==='stats'){dogChips('statDogs'); bindChart();}
  if(moreTab==='diary') dogChips('diaryDogs');
}
$('moreTabs').onclick=function(e){var b=e.target.closest('[data-m]'); if(!b) return; moreTab=b.getAttribute('data-m'); moreRender();};
$('moreBody').onclick=function(e){
  var t=e.target.closest('button'); if(!t) return;
  var g=function(a){return t.getAttribute(a);};
  if(g('data-gpre')){ startGen(g('data-gpre')); return; }
  if(g('data-gdrill')){ GEN.tab='drill'; GEN.drill=g('data-gdrill'); show('lib'); genSheet(); return; }
  if(g('data-dadd')) dogSheet(null);
  else if(g('data-dsel')){DOGC=g('data-dsel'); saveDogs(); moreRender();}
  else if(g('data-dedit')){var x=DOGS.filter(function(q){return q.id===g('data-dedit');})[0]; if(x) dogSheet(x);}
  else if(g('data-ddel')){var id=g('data-ddel'), x2=DOGS.filter(function(q){return q.id===id;})[0]; if(x2) ask('Smazat psa '+x2.name+'?','Jeho běhy zůstanou uložené u parkurů.','Smazat',function(){DOGS=DOGS.filter(function(q){return q.id!==id;}); if(DOGC===id) DOGC=DOGS[0]?DOGS[0].id:null; saveDogs(); moreRender();},true);}
  else if(g('data-dy')) diarySheet(g('data-dy'));
  else if(g('data-dydel')){var did=g('data-dydel'); ask('Smazat záznam?','Záznam zmizí z deníku.','Smazat',function(){lsSet(DIARYK,diary().filter(function(q){return q.id!==did;})); moreRender();},true);}
  else if(g('data-wu')) warmAct(g('data-wu'));
  else if(g('data-bk')) backupAct(g('data-bk'));
};
