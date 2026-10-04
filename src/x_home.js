/* ---------- HandlerMap 2.0: nastavení (jazyk, vzhled), průvodce prvním spuštěním, novinky ---------- */
(function(){ var bm=$('brandMark'); if(bm) bm.innerHTML=IC.brand; })();
/* podstránka ve Více: vlastní záložka nebo obrazovka modulu ('mod:<id>') */
function moreOpen(t,arg){ moreTab=t; MORE_ARG=arg||null; if(view!=='more') show('more'); else { moreRender(); try{window.scrollTo(0,0);}catch(e){} } }

/* ---------- Nastavení ---------- */
function settingsHTML(){
  function seg(attr,cur,opts,label){ return '<div class="seg wide" role="group" aria-label="'+label+'">'+opts.map(function(o){ return '<button data-'+attr+'="'+o[0]+'" class="'+(o[0]===cur?'on':'')+'"'+(o[2]?' translate="no"':'')+'>'+o[1]+'</button>'; }).join('')+'</div>'; }
  return '<div class="panel set"><b>Jazyk</b>'+seg('lang',LANG,[['cs','Čeština',1],['en','English',1]],'Jazyk')+'<p class="hint">Language: Czech or English.</p></div>'+
    '<div class="panel set"><b>Vzhled</b>'+seg('theme',THEME,[['system','Podle systému'],['light','Světlý'],['dark','Tmavý']],'Vzhled')+'<p class="hint">Tmavý vzhled je šetrnější k očím večer a k baterii telefonu.</p></div>'+
    '<div class="panel set"><b>Průvodce</b><p class="hint">Krátké představení aplikace a nastavení psa.</p><div class="row"><button class="btn" data-onb="1">Spustit průvodce</button></div></div>';
}

/* ---------- průvodce prvním spuštěním ---------- */
var ONBK='agility-onb-v1', ONB={step:1,dog:null};
function onbHasData(){ return S.meta.dirty||DOGS.length>0||myDB().length>0||Object.keys(MK).some(function(k){return (MK[k].runs||[]).length||MK[k].fav||MK[k].done;}); }
function onbStart(){
  /* automatické testy (navigator.webdriver) průvodce ani novinky neukazují, pokud si ho test nevyžádá přes ?onb */
  if(navigator.webdriver&&!/[?&]onb\b/.test(location.search)) return;
  var st=lsGet(ONBK,null);
  if(st&&st.step&&!st.done){ onbOpen(st.step); return; }
  if(st) { newsCheck(); return; }
  if(onbHasData()){ lsSet(ONBK,{done:1,v:2}); newsCheck(); return; }
  onbOpen(1);
}
function newsCheck(){
  if(lsGet('agility-news-v1',null)==='2.0') return; lsSet('agility-news-v1','2.0');
  openSheet('<h3>Novinky v HandlerMap 2.0</h3><p>Aplikace Agility trasa se teď jmenuje HandlerMap.</p>'+
    '<ul class="news"><li>Angličtina: Více → Nastavení → English</li><li>Tmavý vzhled podle systému, nebo natrvalo</li><li>Větší tlačítka a plynulejší přechody</li></ul>'+
    '<div class="acts"><button class="btn primary" data-a="x">Pokračovat</button></div>',function(e){ if(e.target.closest('[data-a]')) closeSheet(); });
}
function onbClose(done){ var o=$('onb'); if(o) o.parentNode.removeChild(o); if(done) lsSet(ONBK,{done:1,v:2}); document.documentElement.classList.remove('onb-open'); }
function onbOpen(step){
  ONB.step=step||1; var o=$('onb');
  if(!o){ o=document.createElement('div'); o.id='onb'; o.className='onb'; o.setAttribute('role','dialog'); o.setAttribute('aria-modal','true'); document.body.appendChild(o); o.onclick=onbClick; o.onchange=onbClick; }
  document.documentElement.classList.add('onb-open'); onbRender();
}
function onbRender(){
  var o=$('onb'), s=ONB.step, h='<div class="onb-top"><div class="dots" aria-hidden="true"><i'+(s===1?' class="on"':'')+'></i><i'+(s===2?' class="on"':'')+'></i><i'+(s===3?' class="on"':'')+'></i></div><button class="btn ghost" data-o="skip">Přeskočit</button></div><div class="onb-body">';
  if(s===1){
    h+='<div class="onb-logo" aria-hidden="true">'+IC.brand+'</div><h1>Vítej v HandlerMap</h1><p class="lead">Plánuj parkury, čti plánky z fotky, trénuj se stopkami a sleduj, jak se tvůj pes zlepšuje.</p>'+
      '<label>Jazyk / Language<div class="seg wide" role="group"><button data-o="lang" data-v="cs" class="'+(LANG==='cs'?'on':'')+'" translate="no">Čeština</button><button data-o="lang" data-v="en" class="'+(LANG==='en'?'on':'')+'" translate="no">English</button></div></label>'+
      '<label>Vzhled<div class="seg wide" role="group"><button data-o="theme" data-v="system" class="'+(THEME==='system'?'on':'')+'">Podle systému</button><button data-o="theme" data-v="light" class="'+(THEME==='light'?'on':'')+'">Světlý</button><button data-o="theme" data-v="dark" class="'+(THEME==='dark'?'on':'')+'">Tmavý</button></div></label>';
    h+='</div><div class="onb-foot"><button class="btn primary" data-o="next">Pokračovat</button></div>';
  } else if(s===2){
    var d=curDog()||{name:'',size:'L',cls:'A1'};
    h+='<h1>Tvůj pes</h1><p class="lead">Podle velikosti a třídy aplikace nastaví výšky překážek, čas SČP a povede statistiky zvlášť pro každého psa.</p>'+
      '<label for="oName">Jméno<input id="oName" type="text" maxlength="40" autocomplete="off" value="'+esc(d.name)+'" placeholder="např. Aris"></label>'+
      '<div class="grid2"><label for="oSize">Velikost<select id="oSize">'+Object.keys(SIZES).map(function(k){return '<option value="'+k+'"'+(k===d.size?' selected':'')+'>'+SIZES[k].l+'</option>';}).join('')+'</select></label>'+
      '<label for="oCls">Třída<select id="oCls">'+['A0','A1','A2','A3'].map(function(k){return '<option value="'+k+'"'+(k===d.cls?' selected':'')+'>'+k+'</option>';}).join('')+'</select></label></div>';
    h+='</div><div class="onb-foot"><button class="btn" data-o="back">Zpět</button><button class="btn primary" data-o="dog">Pokračovat</button></div>';
  } else {
    h+='<h1>Čím začneš?</h1><p class="lead">Všechno najdeš i později na úvodní obrazovce.</p><div class="opts">'+
      '<button class="opt" data-o="go" data-v="imp"><b>'+IC.scan+'Načíst plánek z fotky</b><span>Vyfoť plánek ze závodů, aplikace přečte překážky i trasu.</span></button>'+
      '<button class="opt" data-o="go" data-v="lib"><b>'+IC.grid+'Projít parkury</b><span>Desítky parkurů A1–A3 a plánky trenérů.</span></button>'+
      '<button class="opt" data-o="go" data-v="new"><b>'+IC.plus+'Postavit vlastní</b><span>Rozmísti překážky a naklikej trasu.</span></button></div>';
    h+='</div><div class="onb-foot"><button class="btn" data-o="back">Zpět</button><button class="btn primary" data-o="go" data-v="home">Hotovo</button></div>';
  }
  o.innerHTML=h;
}
function onbClick(e){
  if(e.type==='change') return;
  var b=e.target.closest('[data-o]'); if(!b) return; var a=b.getAttribute('data-o'), v=b.getAttribute('data-v');
  if(a==='skip'){ onbClose(true); show('home'); }
  else if(a==='lang'){ if(v!==LANG){ lsSet(ONBK,{step:2}); setLang(v); } }
  else if(a==='theme'){ setTheme(v); onbRender(); }
  else if(a==='next'){ ONB.step=2; lsSet(ONBK,{step:2}); onbRender(); }
  else if(a==='back'){ ONB.step=Math.max(1,ONB.step-1); onbRender(); }
  else if(a==='dog'){
    var nm=($('oName').value||'').trim();
    if(nm){ var d=curDog(); if(!d){ d={id:'dog-'+Date.now().toString(36),name:nm,size:$('oSize').value,cls:$('oCls').value,u:Date.now()}; DOGS.push(d); } else { d.name=nm; d.size=$('oSize').value; d.cls=$('oCls').value; d.u=Date.now(); } DOGC=d.id; saveDogs(); }
    ONB.step=3; lsSet(ONBK,{step:3}); onbRender();
  }
  else if(a==='go'){
    onbClose(true);
    if(v==='imp'){ show('plan'); impOpen(); } else if(v==='lib') show('lib'); else if(v==='new'){ show('plan'); $('newBtn').click(); } else show('home');
  }
}
