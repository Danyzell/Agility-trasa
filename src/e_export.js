
/* ---------- nativní most (APK), cloud a doručení souborů ---------- */
var NATIVE=(typeof window.AgilityNative==='object'&&window.AgilityNative)?window.AgilityNative:null;
var IS_APK=!!NATIVE||location.protocol==='file:';
var APK_LITE=IS_APK&&!NATIVE; /* aplikace pro Android bez přístupu k souborům telefonu */
var IS_PWA=!!window.AGILITY_PWA; /* aplikace nainstalovaná z webu (GitHub Pages): soubory i server */
var IS_SRV=IS_APK||IS_PWA;
var SB_URL='https://wtjyjknaibsamgczvaxy.supabase.co';
var SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0anlqa25haWJzYW1nY3p2YXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MDA1NjAsImV4cCI6MjEwNjE3NjU2MH0.kV8UN9xQFKqTNcnY9B81-wWrnM5nWXUPnzcCTHVIMZc';
/* při slabém signálu nečekat donekonečna: po 20 s to vzdát */
function sbCall(fn,args){
  var ac=typeof AbortController==='function'?new AbortController():null, tm=ac?setTimeout(function(){ac.abort();},20000):0;
  return fetch(SB_URL+'/rest/v1/rpc/'+fn,{method:'POST',headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json'},body:JSON.stringify(args),signal:ac?ac.signal:undefined})
    .then(function(r){ return r.text().then(function(t){ clearTimeout(tm); if(!r.ok){ var em=''; try{ em=JSON.parse(t).message||''; }catch(e){} throw new Error(r.status===400&&em&&em.length<80?em:'server '+r.status); } return t?JSON.parse(t):null; }); },
          function(e){ clearTimeout(tm); throw new Error(e&&e.name==='AbortError'?'server neodpovídá':'bez připojení k internetu'); });
}
/* ---------- katalog parkurů ze serveru: jen data (souřadnice překážek), žádný kód ----------
   Aplikace pro Android si při spuštění (a tlačítkem v Parkurech) stáhne novější verzi katalogu a uloží ji. Bez internetu použije uloženou,
   jinak vestavěnou. Webová verze server nevidí a používá vestavěná data. */
var CATK='agility-catalog-v1', CAT=lsGet(CATK,null), TCH={l:'wL',r:'wR',L:'bL',R:'bR',f:'f'};
function catClean(c){
  if(!c||typeof c!=='object') return null;
  var id=String(c.id||''), grp=String(c.grp||''), cls=String(c.cls||''), d=c.data||{};
  if(!/^[A-Za-z0-9-]{1,40}$/.test(id)||['A1','A2','A3','tr'].indexOf(grp)<0||['A1','A2','A3'].indexOf(cls)<0) return null;
  var W=+d.W||40, H=+d.H||20, f=d.o, rt=d.r;
  if(!(W>=10&&W<=60&&H>=10&&H<=40)||!Array.isArray(f)||!f.length||f.length%4||f.length>240||!Array.isArray(rt)||rt.length<2||rt.length>40) return null;
  var obs=[];
  for(var i=0;i<f.length;i+=4){
    var ty=String(f[i]), x=+f[i+1], y=+f[i+2], ro=+f[i+3];
    if(!Object.prototype.hasOwnProperty.call(DEF,ty)||!isFinite(x)||!isFinite(y)||!isFinite(ro)||x<0||x>W||y<0||y>H) return null;
    obs.push({id:i/4+1,type:ty,x:Math.round(x*10)/10,y:Math.round(y*10)/10,rot:((Math.round(ro)%360)+360)%360});
  }
  if(d.b&&typeof d.b==='object') Object.keys(d.b).forEach(function(k){ /* tunely do oblouku: {"číslo překážky": stupně} */
    var o=obs[(+k)-1], v=Math.round(+d.b[k]); if(o&&o.type==='tunnel'&&isFinite(v)&&v&&Math.abs(v)<=180) o.bend=v; });
  var route=rt.map(Number);
  if(route.some(function(v){return !(v>=1&&v<=obs.length&&v%1===0);})) return null;
  var ts=String(d.t||''), turns=route.map(function(v,k){return tuValid(TCH[ts.charAt(k)]||null,obs[v-1].type);});
  var src=String(c.src||''); if(!/^https:\/\/[^\s"'<>]{4,290}$/.test(src)) src='';
  return {id:id,grp:grp,name:String(c.name||id).slice(0,60),cls:cls,author:String(c.author||'').slice(0,80),src:src,W:W,H:H,obs:obs,route:route,turns:turns};
}
function catGroup(g){
  if(!CAT||!Array.isArray(CAT.courses)) return null;
  var L=CAT.courses.filter(function(c){return c&&c.grp===g;});
  return L.length?L:null;
}
/* ruční i automatická kontrola katalogu; výsledek: new = přibyly parkury, upd = jen změny, same = nic nového, err = chyba */
function catFetch(){
  if(!IS_SRV||typeof fetch!=='function') return Promise.resolve({st:'err',err:'ve webové verzi server nejde'});
  var have=(CAT&&CAT.version)||0;
  return sbCall('get_catalog',{p_have:have}).then(function(r){
    if(!r||typeof r!=='object') return {st:'err',err:'prázdná odpověď serveru'};
    if(!Array.isArray(r.courses)){ if(CAT){ CAT.chk=Date.now(); lsSet(CATK,CAT); } return {st:'same',v:+r.version||have}; }
    var L=r.courses.map(catClean).filter(Boolean);
    if(!L.length) return {st:'err',err:'katalog na serveru je prázdný'};
    CAT={version:+r.version||0,at:Date.now(),chk:Date.now(),courses:L}; lsSet(CATK,CAT); DB={};
    var added=catScan();
    return {st:added.length?'new':'upd',v:CAT.version,added:added};
  },function(e){ return {st:'err',err:(e&&e.message)||'chyba spojení'}; });
}
function catRefreshViews(){ catUI(); if(view==='lib') libRender(); else if(view==='more') moreRender(); }
function catSync(){ /* při spuštění aplikace */
  if(!IS_SRV) return;
  catFetch().then(function(res){
    if(res.st==='new'){ catRefreshViews(); newToast(res.added.length); }
    else if(res.st==='upd'){ catRefreshViews(); toast('Parkury aktualizovány (verze '+res.v+')'); }
    else catUI();
  });
}
function catCheck(){ /* tlačítko Zkontrolovat nové parkury */
  var b=$('catBtn'); if(!b||b.disabled) return;
  b.disabled=true; b.classList.add('busy'); var lb=b.querySelector('.lbl'); if(lb) lb.textContent='Kontroluji…';
  catFetch().then(function(res){
    b.disabled=false; b.classList.remove('busy'); if(lb) lb.textContent='Zkontrolovat nové parkury';
    if(res.st==='err'){ catUI(); toast('Server teď nejde ('+res.err+'). Zkus to později.'); return; }
    catRefreshViews();
    if(res.st==='same') toast('Máš všechny parkury, nic nového zatím není.');
    else if(res.st==='upd') toast('Parkury aktualizovány, nové žádné nepřibyly.');
    else newSheet(res.added);
  });
}
/* ---------- označení nových parkurů ----------
   Aplikace si pamatuje id parkurů, které už zná. Co v katalogu přibude (ze serveru nebo s novou verzí aplikace),
   dostane štítek Nový, dokud parkur neotevřeš, nejdéle 30 dní. */
var SEENK='agility-cat-seen-v1', NEWK='agility-cat-new-v1', NEWC=lsGet(NEWK,{})||{}, NEW_DAYS=30;
var CAT_NEW0=['tr-pupik-sx18-a1']; /* přibylo po verzi 1.6: při prvním spuštění 1.7 se ukáže jako nové */
var LIBT={A1:'A1',A2:'A2',A3:'A3',tr:'Trenéři',my:'Moje'};
function catTabOf(id){ return id.indexOf('my-')===0?'my':id.indexOf('tr-')===0?'tr':id.slice(0,2); }
function catAllIds(){ var ids=[]; ['A1','A2','A3','tr'].forEach(function(g){ listFor(g).forEach(function(c){ ids.push(c.id); }); }); return ids; }
function catScan(){
  var ids=catAllIds(), seen=lsGet(SEENK,null), now=Date.now(), known={}, added=[], cur={};
  if(!Array.isArray(seen)) seen=FRESH?ids:ids.filter(function(id){return CAT_NEW0.indexOf(id)<0;});
  seen.forEach(function(id){known[id]=1;});
  ids.forEach(function(id){ cur[id]=1; if(!known[id]){ NEWC[id]=now; added.push(id); } });
  Object.keys(NEWC).forEach(function(id){ if(!cur[id]||now-NEWC[id]>NEW_DAYS*864e5) delete NEWC[id]; });
  lsSet(SEENK,ids); lsSet(NEWK,NEWC);
  return added;
}
function isNewC(id){ return !!NEWC[id]; }
function newSeen(id){ if(NEWC[id]){ delete NEWC[id]; lsSet(NEWK,NEWC); catUI(); } }
function newIn(tab){ return Object.keys(NEWC).filter(function(id){return catTabOf(id)===tab;}).length; }
function newToast(n){ toast(newCountTxt(n)+(n===1?' · najdeš ho v Parkurech':' · najdeš je v Parkurech')); }
function newCountTxt(n){ return n===1?'Nový parkur: 1':n>=2&&n<=4?'Nové parkury: '+n:'Nových parkurů: '+n; }
function whenTxt(t){ if(!t) return ''; var d=new Date(t), n=new Date(), hm=d.getHours()+':'+('0'+d.getMinutes()).slice(-2);
  return d.toDateString()===n.toDateString()?'dnes '+hm:d.toLocaleDateString(LOC)+' '+hm; }
function catUI(){
  var any=Object.keys(NEWC).length, dot=document.querySelector('.nav [data-v=lib] .ndot'); if(dot) dot.hidden=!any;
  Array.prototype.forEach.call(document.querySelectorAll('#libTabs button'),function(b){ var t=b.getAttribute('data-c'), n=t==='my'?0:newIn(t);
    b.innerHTML=esc(LIBT[t]||t)+(n?'<i class="tdot" title="Nové: '+n+'"></i><span class="sr">, nové: '+n+'</span>':''); });
  var ch=document.querySelector('#libFilters [data-f=new]'); if(ch){ ch.hidden=!any; if(!any&&libF==='new') libF='all'; }
  var info=$('catInfo'), btn=$('catBtn'); if(!info) return;
  var total=catAllIds().length;
  if(IS_SRV){ info.textContent=(CAT&&CAT.version?'Katalog verze '+CAT.version+' · '+total+' parkurů · ověřeno '+whenTxt(CAT.chk||CAT.at):'Vestavěný katalog · '+total+' parkurů'); if(btn) btn.hidden=false; }
  else { info.textContent=total+' parkurů. Nové přibývají s novou verzí stránky, v aplikaci pro Android tlačítkem.'; if(btn) btn.hidden=true; }
}
function newSheet(ids){
  var L=ids.map(findCourse).filter(Boolean);
  if(!L.length){ toast('Parkury aktualizovány.'); return; }
  $('toast').hidden=true;
  openSheet('<h3>'+esc(newCountTxt(L.length))+'</h3><p class="hint">Mají v Parkurech štítek Nový, dokud je neotevřeš.</p><div class="newlist">'+
    L.map(function(c){ var t=catTabOf(c.id); return '<button class="newitem" data-open="'+esc(c.id)+'"><b>'+esc(c.name)+'</b><span>'+esc((t==='tr'?'Trenéři · ':'')+c.cls+(c.author?' · '+c.author:''))+'</span></button>'; }).join('')+
    '</div><div class="acts"><button class="btn" data-a="x">Zavřít</button><button class="btn primary" data-a="show">Ukázat v Parkurech</button></div>',
    function(e){ var o=e.target.closest('[data-open]'), b=e.target.closest('[data-a]');
      if(o){ var c=findCourse(o.getAttribute('data-open')); closeSheet(); if(c) loadCourse(c); return; }
      if(!b) return; closeSheet();
      if(b.getAttribute('data-a')==='show'){ libTab=catTabOf(L[0].id); libF='new'; show('lib'); libRender(); } });
}
function b64utf8(s){return btoa(unescape(encodeURIComponent(s)));}
function blobB64(blob){return new Promise(function(res,rej){var fr=new FileReader(); fr.onload=function(){res(String(fr.result).split(',')[1]);}; fr.onerror=rej; fr.readAsDataURL(blob);});}
var DLNS;
function downloadsNs(){ if(DLNS!==undefined) return Promise.resolve(DLNS);
  try{ if(window.claude&&window.claude.use) return window.claude.use('downloads').then(function(ns){DLNS=ns; return ns;},function(){DLNS=null; return null;}); }catch(e){}
  DLNS=null; return Promise.resolve(null); }
function deliverFile(data,mime,name,share,text){
  if(IS_PWA){ /* nainstalovaná aplikace: sdílení přes systém, jinak stažení do telefonu */
    var blob=typeof data==='string'?new Blob([data],{type:mime}):data;
    if(share&&navigator.canShare){ try{ var fl=new File([blob],name,{type:mime}); if(navigator.canShare({files:[fl]})) return navigator.share({files:[fl],text:text||''}).then(function(){},function(e){ if(!e||e.name!=='AbortError') toast('Sdílení se nepovedlo'); }); }catch(e){} }
    var u=URL.createObjectURL(blob),a=document.createElement('a'); a.href=u; a.download=name; a.style.display='none'; document.body.appendChild(a); a.click();
    setTimeout(function(){ URL.revokeObjectURL(u); a.parentNode&&a.parentNode.removeChild(a); },5000); toast('Ukládám do telefonu: '+name); return Promise.resolve();
  }
  if(NATIVE){
    var p=typeof data==='string'?Promise.resolve(b64utf8(data)):blobB64(data);
    return p.then(function(b64){
      var r=String(NATIVE.save(b64,mime,name,!!share,text||''));
      if(r==='ok') toast(share?'Otevírám sdílení':'Uloženo do telefonu, složka '+(mime.indexOf('image/')===0?'Obrázky/Agility':'Stažené soubory/Agility'));
      else toast('Uložení se nepovedlo ('+r.slice(0,80)+')');
    });
  }
  return downloadsNs().then(function(dl){
    if(!dl){ fallbackView(data,mime,name); return; }
    return dl.save({filename:name,data:data}).then(function(){toast('Uloženo: '+name);},function(e){
      if(e&&e.code==='declined') toast('Uložení zrušeno');
      else if(e&&e.code==='rate_limited') toast('Chvilku počkej a zkus to znovu.');
      else fallbackView(data,mime,name);
    });
  });
}
function fallbackView(data,mime,name){
  if(typeof data==='string'){
    openSheet('<h3>'+esc(name)+'</h3><p>Soubor tady nejde uložit přímo. Zkopíruj si text a ulož ho jinam.</p><textarea id="fbTxt" readonly>'+esc(data)+'</textarea><div class="acts"><button class="btn" data-a="x">Zavřít</button><button class="btn primary" data-a="cp">Kopírovat</button></div>',
      function(e){var b=e.target.closest('[data-a]'); if(!b) return; if(b.getAttribute('data-a')==='cp') copyText(data,$('fbTxt')); else closeSheet();});
    return;
  }
  var img=mime.indexOf('image/')===0, url=img?sheetUrl(data):'';
  var tip=APK_LITE?(img?'V aplikaci se obrázek do telefonu uložit nedá. Udělej snímek obrazovky, nebo ho ulož ve webové verzi.':'V aplikaci se PDF do telefonu uložit nedá. Ulož ho ve webové verzi HandlerMap.')
    :(img?'Podrž prst na obrázku a ulož ho, nebo si udělej snímek obrazovky.':'PDF tady nejde uložit přímo. Ulož si obrázek.');
  openSheet('<h3>'+esc(name)+'</h3><p>'+tip+'</p>'+
    (mime.indexOf('image/')===0?'<div class="preview"><img src="'+url+'" alt="Náhled parkuru"></div>':'')+'<div class="acts"><button class="btn primary" data-a="x">Zavřít</button></div>',
    function(e){if(e.target.closest('[data-a]')) closeSheet();});
}
function copyText(t,el){
  function sel(){ if(el){el.focus(); el.select&&el.select();} toast('Označeno, zkopíruj ručně'); }
  try{ navigator.clipboard.writeText(t).then(function(){toast('Zkopírováno');},sel); }catch(e){ sel(); }
}

/* ---------- vykreslení parkuru do obrázku ---------- */
var PRINT={'--field':'#e7efdf','--grid':'#c3d1b6','--muted':'#55625a','--zone':'#e8a838','--on-zone':'#2a1d05','--accent':'#1f6b45','--on-accent':'#ffffff','--text':'#17201a','--surface':'#ffffff','--bg':'#f2f4ee','--border':'#d3dacb','--sunk':'#e9ede4'};
function fieldSvgString(){
  /* v tréninku paměti je trasa na ploše schovaná; do exportu patří celá */
  var qz=panel==='quiz'; if(qz){ panel=null; render(); }
  var c=$('field').cloneNode(true);
  if(qz){ panel='quiz'; render(); }
  var bi=c.querySelector('#bgimg'); if(bi) bi.innerHTML='';
  var sel=c.querySelectorAll('[stroke-dasharray=".35 .25"]'); Array.prototype.forEach.call(sel,function(n){n.parentNode.removeChild(n);});
  c.setAttribute('width',S.W*50); c.setAttribute('height',S.H*50); c.removeAttribute('style'); c.removeAttribute('class');
  var s=new XMLSerializer().serializeToString(c);
  s=s.replace(/var\((--[a-z-]+)\)/g,function(m,k){return PRINT[k]||'#888';});
  if(s.indexOf('xmlns="http://www.w3.org/2000/svg"')<0) s=s.replace('<svg','<svg xmlns="http://www.w3.org/2000/svg"');
  return s;
}
function svgImage(){
  return new Promise(function(res,rej){
    var im=new Image(); im.onload=function(){res(im);}; im.onerror=function(){rej(new Error('obrázek plochy'));};
    im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(fieldSvgString());
  });
}
function wrapText(ctx,t,x,y,maxW,lh){
  var words=String(T(t)).split(' '), line='';
  words.forEach(function(w){ var tt=line?line+' '+w:w; if(ctx.measureText(tt).width>maxW&&line){ctx.fillText(line,x,y); y+=lh; line=w;} else line=tt; });
  if(line){ctx.fillText(line,x,y); y+=lh;} return y;
}
function headerLines(){
  var m=curM(), a=S.meta;
  return {title:a.name, sub:a.cls+' · '+(a.author?'Stavěl/a: '+a.author:(a.gen?'Generátor podle pravidel FCI':'Autor neuveden')),
    spec:'Délka '+fmt(m.len)+' m · '+m.n+' překážek · '+m.disc+' · SČP '+(m.sct||'–')+' s ('+fmt(m.spd)+' m/s) · MČP '+(m.mct||'–')+' s'};
}
/* dlouhé názvy: menší písmo, a když ani to nestačí, zkrátit s trojtečkou */
function fitFont(ctx,t,pre,px,min,maxW){ ctx.font=pre+px+'px sans-serif'; while(px>min&&ctx.measureText(t).width>maxW){ px-=2; ctx.font=pre+px+'px sans-serif'; } }
function fitText(ctx,t,maxW){ t=String(t); if(ctx.measureText(t).width<=maxW) return t; while(t.length>1&&ctx.measureText(t+'…').width>maxW) t=t.slice(0,-1); return t+'…'; }
function courseJPG(){
  return svgImage().then(function(im){
    var W=2000, fh=Math.round(W*S.H/S.W), top=190, cv=document.createElement('canvas');
    cv.width=W; cv.height=top+fh+70;
    var x=cv.getContext('2d'), h=headerLines();
    x.fillStyle='#ffffff'; x.fillRect(0,0,cv.width,cv.height);
    x.fillStyle='#17201a'; fitFont(x,h.title,'bold ',64,36,W-80); x.fillText(fitText(x,h.title,W-80),40,80);
    x.fillStyle='#55625a'; x.font='34px sans-serif'; x.fillText(T(h.sub),40,128); x.fillText(T(h.spec),40,170);
    x.drawImage(im,0,top,W,fh);
    x.fillStyle='#55625a'; x.font='26px sans-serif'; x.fillText(T('HandlerMap · '+new Date().toLocaleDateString(LOC)+' · mřížka 1 m'),40,top+fh+45);
    return new Promise(function(res){cv.toBlob(function(b){res(b);},'image/jpeg',.9);});
  });
}
var DIRS=['→','↘','↓','↙','←','↖','↑','↗'];
function buildRows(){
  var rows=[], seen={}, c=calc();
  S.route.forEach(function(id,i){
    var t=tuValid((S.turns||[])[i],getO(id).type), note=t?(i+1)+': '+tuLabel(t,(S.sides||[])[i]).slice(2):'';
    if(seen[id]){seen[id].nums.push(i+1); if(note) seen[id].notes.push(note); return;}
    seen[id]={o:getO(id),nums:[i+1],notes:note?[note]:[],dir:c.P[i]?c.P[i].dir:null}; rows.push(seen[id]);
  });
  S.obs.forEach(function(o){ if(!seen[o.id]) rows.push({o:o,nums:[],notes:[]}); });
  rows.forEach(function(rw){ if(rw.o.type==='tunnel'&&rw.o.bend) rw.notes.unshift(Math.abs(rw.o.bend)===180?'do U':'oblouk '+Math.abs(rw.o.bend)+'°'); });
  return rows;
}
function planPDF(){
  return svgImage().then(function(im){
    var W=1240, H=1754, M=70, cv=document.createElement('canvas'); cv.width=W; cv.height=H;
    var x=cv.getContext('2d'), h=headerLines(), y=M+40;
    x.fillStyle='#ffffff'; x.fillRect(0,0,W,H);
    x.fillStyle='#17201a'; x.font='bold 46px sans-serif'; y=wrapText(x,'Stavební plán: '+h.title,M,y,W-2*M,50)-6;
    x.fillStyle='#55625a'; x.font='24px sans-serif'; x.fillText(fitText(x,T(h.sub),W-2*M),M,y); y+=32; y=wrapText(x,h.spec,M,y,W-2*M,30); y+=10;
    /* plocha na celou šířku; u čtvercové plochy nebo plochy na výšku se zmenší, aby se pod ni vešla tabulka (řádek aspoň 28 px) */
    var rows=buildRows(), fw=W-2*M, fh=Math.round(fw*S.H/S.W), maxFh=H-M-60-(y+60+42)-rows.length*28;
    if(fh>maxFh){ fh=Math.max(250,maxFh); fw=Math.round(fh*S.W/S.H); }
    var fx=M+Math.round((W-2*M-fw)/2);
    x.drawImage(im,fx,y,fw,fh); x.strokeStyle='#17201a'; x.lineWidth=2; x.strokeRect(fx,y,fw,fh);
    x.fillStyle='#55625a'; x.font='18px sans-serif';
    for(var gx=0;gx<=S.W;gx+=5){ x.fillText(gx+'',fx+fw*gx/S.W-6,y+fh+22); }
    for(var gy=5;gy<=S.H;gy+=5){ x.fillText(gy+'',fx-34,y+fh*gy/S.H+6); }
    y+=fh+60;
    x.fillStyle='#17201a'; x.font='bold 24px sans-serif';
    var cols=[M,M+170,M+400,M+510,M+620,M+790];
    ['Čísla','Překážka','x (m)','y (m)','Směr běhu','Poznámka'].forEach(function(t,i){x.fillText(T(t),cols[i],y);});
    y+=12; x.strokeStyle='#c3d1b6'; x.beginPath(); x.moveTo(M,y); x.lineTo(W-M,y); x.stroke(); y+=30;
    x.font='22px sans-serif';
    var lh=Math.min(34,Math.floor((H-M-60-y)/Math.max(1,rows.length)));
    rows.forEach(function(rw){
      var o=rw.o, deg=rw.dir?Math.round((Math.atan2(rw.dir.y,rw.dir.x)*180/Math.PI+360)%360):((o.rot%360)+360)%360, d=DIRS[Math.round(deg/45)%8];
      x.fillStyle='#17201a'; x.font='22px sans-serif';
      x.fillText(rw.nums.length?rw.nums.join(', '):'–',cols[0],y); x.fillText(T(DEF[o.type].l),cols[1],y);
      x.fillText((LANG==='en'?String(o.x):String(o.x).replace('.',',')),cols[2],y); x.fillText((LANG==='en'?String(o.y):String(o.y).replace('.',',')),cols[3],y);
      x.fillText(d+' '+deg+'°',cols[4],y);
      var nt=[]; if(rw.nums.length>1) nt.push('použita '+rw.nums.length+'×'); if(!rw.nums.length) nt.push('mimo trasu'); nt=nt.concat(rw.notes||[]).map(function(q){return T(q);});
      x.fillStyle='#55625a'; x.font='20px sans-serif'; var txt=nt.join('; ');
      if(x.measureText(txt).width>W-M-cols[5]) x.font='16px sans-serif';
      x.fillText(fitText(x,txt,W-M-cols[5]),cols[5],y);
      y+=lh;
    });
    x.font='22px sans-serif';
    x.fillStyle='#55625a'; x.font='18px sans-serif';
    wrapText(x,'x = vzdálenost středu překážky od levého okraje plochy, y = od horního okraje. Směr běhu: → doprava, ↓ dolů, ← doleva, ↑ nahoru. Otočka doleva a doprava je z pohledu psa. Zadní strana: pes skok mine, oběhne křídlo a skočí ho z druhé strany. HandlerMap, '+new Date().toLocaleDateString(LOC),M,H-M+10,W-2*M,24);
    var jpg=atob(cv.toDataURL('image/jpeg',.88).split(',')[1]);
    return makePdf(jpg,W,H);
  });
}
function makePdf(jpgBin,w,h){
  var parts=[], off=[], len=0;
  function add(s){parts.push(s); len+=s.length;}
  function obj(n,s){off[n]=len; add(n+' 0 obj\n'+s+'\nendobj\n');}
  add('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
  obj(1,'<< /Type /Catalog /Pages 2 0 R >>');
  obj(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  obj(3,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
  obj(4,'<< /Type /XObject /Subtype /Image /Width '+w+' /Height '+h+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jpgBin.length+' >>\nstream\n'+jpgBin+'\nendstream');
  var cs='q 595.28 0 0 841.89 0 0 cm /Im0 Do Q';
  obj(5,'<< /Length '+cs.length+' >>\nstream\n'+cs+'\nendstream');
  var xref=len, x='xref\n0 6\n0000000000 65535 f \n';
  for(var i=1;i<=5;i++) x+=('0000000000'+off[i]).slice(-10)+' 00000 n \n';
  add(x+'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF\n');
  var str=parts.join(''), u=new Uint8Array(str.length);
  for(var k=0;k<str.length;k++) u[k]=str.charCodeAt(k)&255;
  return new Blob([u],{type:'application/pdf'});
}
function fileBase(){return (S.meta.name||'parkur').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase()||'parkur';}
function exportSheet(){
  if(S.route.length<2){toast('Nejdřív vyznač trasu v režimu Trasa.'); return;}
  var intro=APK_LITE?'<p>Obrázek parkuru si v aplikaci ulož snímkem obrazovky. PDF se stavebním plánem a ukládání souborů fungují ve webové verzi HandlerMap.</p>'
    :'<p>Obrázek se hodí na sdílení, PDF se stavebním plánem na tisk: u každé překážky jsou metry od okraje plochy a směr běhu.</p>';
  var btns=APK_LITE?'<button class="btn primary" data-a="x">Zavřít</button>'
    :'<button class="btn" data-a="x">Zavřít</button>'+(NATIVE||IS_PWA&&navigator.canShare?'<button class="btn" data-a="shimg">Sdílet obrázek</button><button class="btn" data-a="shpdf">Sdílet PDF</button>':'')+
      '<button class="btn" data-a="pdf">Uložit PDF</button><button class="btn primary" data-a="img">Uložit obrázek</button>';
  openSheet('<h3>Export parkuru</h3>'+intro+'<div class="preview" id="expPrev"><p class="hint" style="padding:12px">Připravuji náhled…</p></div>'+
    '<div class="acts">'+btns+'</div>',
    function(e){
      var b=e.target.closest('[data-a]'); if(!b) return; var a=b.getAttribute('data-a'), nm=fileBase().slice(0,60), tx=T('Parkur '+S.meta.name+' (HandlerMap)');
      if(a==='x'){closeSheet(); return;}
      b.disabled=true;
      var job=(a==='img'||a==='shimg')?courseJPG().then(function(bl){return deliverFile(bl,'image/jpeg',nm+'.jpg',a==='shimg',tx);})
        :planPDF().then(function(bl){return deliverFile(bl,'application/pdf',nm+'-stavebni-plan.pdf',a==='shpdf',tx);});
      job.catch(function(err){toast('Export se nepovedl: '+err.message);}).then(function(){b.disabled=false;});
    });
  courseJPG().then(function(bl){var el=$('expPrev'); if(el) el.innerHTML='<img alt="Náhled exportu parkuru" src="'+sheetUrl(bl)+'">';},function(){var el=$('expPrev'); if(el) el.innerHTML='<p class="hint" style="padding:12px">Náhled se nepodařilo vytvořit.</p>';});
}

/* ---------- sdílení kódem přes Supabase ---------- */
function shareSheet(){
  var canShare=S.route.length>=2;
  openSheet('<h3>Sdílet parkur</h3>'+
    (IS_SRV
      ? '<p>Vytvoř kód, pošli ho kamarádovi a on si parkur načte ve své aplikaci.</p><div id="shOut"></div>'+
        '<div class="acts"><button class="btn primary" data-a="mk"'+(canShare?'':' disabled')+'>Vytvořit kód parkuru</button></div>'+
        '<label for="shIn">Načíst parkur z kódu<input id="shIn" type="text" maxlength="6" autocomplete="off" placeholder="např. K7P2QX" style="text-transform:uppercase"></label>'+
        '<div class="acts"><button class="btn" data-a="x">Zavřít</button><button class="btn" data-a="get">Načíst</button></div>'
      : '<p>Sdílení kódem funguje v aplikaci pro Android. Tady můžeš parkur uložit jako obrázek nebo PDF v Exportu a poslat ho dál.</p><div class="acts"><button class="btn" data-a="x">Zavřít</button><button class="btn primary" data-a="exp">Otevřít Export</button></div>'),
    function(e){
      var b=e.target.closest('[data-a]'); if(!b) return; var a=b.getAttribute('data-a');
      if(a==='x'){closeSheet(); return;}
      if(a==='exp'){closeSheet(); exportSheet(); return;}
      if(a==='mk'){
        b.disabled=true;
        var data={W:S.W,H:S.H,obs:S.obs,route:S.route,sides:S.sides||[],turns:S.turns||[],hp:(S.hp||[]).slice(0,400)};
        sbCall('share_course',{p_name:S.meta.name,p_cls:S.meta.cls,p_author:S.meta.author||'',p_data:data}).then(function(code){
          code=String(code==null?'':code).trim(); if(!/^[A-Za-z0-9]{4,12}$/.test(code)){ toast('Server vrátil neplatný kód, zkus to znovu.'); b.disabled=false; return; }
          var out=$('shOut'); if(!out) return;
          var msg='Parkur „'+S.meta.name+'“ ('+S.meta.cls+(S.meta.author?', stavěl/a '+S.meta.author:'')+'). V aplikaci HandlerMap otevři Plán → Sdílet a zadej kód '+code; msg=T(msg);
          out.innerHTML='<div class="code">'+esc(code)+'</div><div class="acts" style="justify-content:flex-start">'+
            '<a class="btn" href="https://wa.me/?text='+encodeURIComponent(msg)+'" target="_blank" rel="noopener">WhatsApp</a>'+
            '<a class="btn" href="sms:?body='+encodeURIComponent(msg)+'">SMS</a>'+
            '<a class="btn" href="mailto:?subject='+encodeURIComponent('Agility parkur '+S.meta.name)+'&body='+encodeURIComponent(msg)+'">E-mail</a>'+
            (NATIVE&&NATIVE.shareText?'<button class="btn" data-a="nat">Sdílet jinam</button>':'')+'<button class="btn" data-a="cp">Kopírovat</button></div>';
          out.setAttribute('data-msg',msg);
        },function(err){toast('Kód se nepodařilo vytvořit: '+err.message); b.disabled=false;});
      }
      if(a==='cp') copyText($('shOut').getAttribute('data-msg'));
      if(a==='nat'){ var r=String(NATIVE.shareText($('shOut').getAttribute('data-msg'))); if(r!=='ok') toast('Sdílení se nepovedlo'); }
      if(a==='get'){
        var code=$('shIn').value.trim().toUpperCase(); if(code.length!==6){toast('Kód má 6 znaků.'); return;}
        if(b.disabled) return; b.disabled=true; b.textContent='Načítám…';
        var done=function(){ b.disabled=false; b.textContent='Načíst'; };
        sbCall('get_course',{p_code:code}).then(function(rows){
          done();
          var c=Array.isArray(rows)&&rows[0]; if(!c||typeof c!=='object'){toast('Parkur s kódem '+code+' neexistuje.'); return;}
          var d=courseClean(c.data); if(d.route.length<2){toast('Parkur s kódem '+code+' je poškozený, načíst nejde.'); return;}
          var nm=String(c.name||'Parkur '+code).slice(0,60), rec={id:'my-'+Date.now().toString(36),name:nm,cls:clsClean(c.cls),author:String(c.author||'').slice(0,60),W:d.W,H:d.H,obs:d.obs,route:d.route,sides:d.sides,turns:d.turns,hp:d.hp.slice(0,400),src:'kód '+code};
          var L=myDB(); L.push(rec); if(!mySave(L)) return; closeSheet(); loadCourse(rec,true); toast('Parkur '+nm+' uložen do Moje');
        },function(err){done(); toast('Načtení se nepovedlo: '+err.message);});
      }
    });
}
