
/* ---------- stavba v terénu: kroky a kompas od překážky k překážce ---------- */
var FLD=null;
function fldHeading(e){ /* kompasový kurz ve stupních po směru hodin od severu */
  if(e.webkitCompassHeading!=null) return e.webkitCompassHeading;
  if(e.absolute&&e.alpha!=null) return (360-e.alpha)%360;
  return null;
}
function fldOrder(){ /* pořadí stavění: vždy nejbližší další překážka, začíná se u rohu plochy */
  var left=S.obs.slice(), cur={x:0,y:0}, out=[];
  while(left.length){ var bi=0, bd=1e9; left.forEach(function(o,i){ var d=Math.hypot(o.x-cur.x,o.y-cur.y); if(d<bd){bd=d; bi=i;} }); cur=left[bi]; out.push(cur); left.splice(bi,1); }
  return out;
}
function fldOpen(){
  if(!S.obs.length){ toast('Na ploše zatím nejsou žádné překážky.'); return; }
  fldClose();
  FLD={k:0,ord:fldOrder(),h:null,h0:SET.fldH0==null?null:SET.fldH0,cal:false,step:SET.step||.75};
  var ov=document.createElement('div'); ov.className='ovsp'; ov.id='ovFld';
  ov.innerHTML='<div class="ovsp-top"><b>Stavba v terénu</b><span class="grow"></span><button class="btn" id="fdClose">Zavřít</button></div><div id="fdBody"></div>';
  document.body.appendChild(ov);
  $('fdClose').onclick=fldClose;
  FLD.onOri=function(e){ var h=fldHeading(e); if(h==null) return; FLD.h=h; if(FLD.cal) fldLive(); };
  var ev='ondeviceorientationabsolute' in window?'deviceorientationabsolute':'deviceorientation'; FLD.ev=ev;
  function listen(){ window.addEventListener(ev,FLD.onOri); }
  try{ if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){ FLD.needPerm=listen; } else listen(); }catch(e){}
  fldSetup();
}
function fldClose(){ if(FLD&&FLD.onOri) window.removeEventListener(FLD.ev,FLD.onOri); var ov=$('ovFld'); if(ov) ov.parentNode.removeChild(ov); FLD=null; }
function fldSetup(){
  $('fdBody').innerHTML='<p>Postav se do rohu plochy, který je na plánu <b>vlevo nahoře</b>, a otoč se čelem <b>podél dlouhé strany</b> (na plánu doprava). Telefon drž naplocho před sebou.</p>'+
    fldMini(null)+
    '<label for="fdStep">Délka tvého kroku (m)<input id="fdStep" type="number" step="0.05" min="0.4" max="1.2" value="'+FLD.step+'" inputmode="decimal"></label>'+
    '<p class="hint">Krok si změříš tak, že ujdeš 10 m a spočítáš kroky: délka = 10 / počet kroků. Kompas: <b id="fdCmp">čekám na signál…</b></p>'+
    '<div class="acts"><button class="btn" id="fdNoCmp">Bez kompasu</button><button class="btn primary" id="fdCal">Stojím v rohu</button></div>';
  $('fdCal').onclick=function(){
    if(FLD.needPerm){ var nf=FLD.needPerm; FLD.needPerm=null; DeviceOrientationEvent.requestPermission().then(function(r){ if(r==='granted') nf(); },function(){}); }
    FLD.step=cl(parseFloat(String($('fdStep').value).replace(',','.'))||.75,.4,1.2); SET.step=FLD.step;
    if(FLD.h!=null){ FLD.h0=FLD.h; SET.fldH0=FLD.h0; } FLD.cal=FLD.h!=null; lsSet(SETK,SET); FLD.k=0; fldCard(); };
  $('fdNoCmp').onclick=function(){ FLD.step=cl(parseFloat(String($('fdStep').value).replace(',','.'))||.75,.4,1.2); SET.step=FLD.step; lsSet(SETK,SET); FLD.cal=false; FLD.k=0; fldCard(); };
  var t0=Date.now(); (function wait(){ if(!FLD||!$('fdCmp')) return; if(FLD.h!=null){ $('fdCmp').textContent='funguje'; return; } if(Date.now()-t0>2500){ $('fdCmp').textContent='nedostupný, aplikace popíše směr slovy'; return; } setTimeout(wait,300); })();
}
function fldMini(cur){
  var prev=FLD.k>0?FLD.ord[FLD.k-1]:{x:0,y:0};
  return '<svg class="fdmini" viewBox="-1 -1 '+(S.W+2)+' '+(S.H+2)+'"><rect x="0" y="0" width="'+S.W+'" height="'+S.H+'" fill="var(--field)" stroke="var(--border)" stroke-width=".15"/>'+
    '<circle cx="0" cy="0" r=".8" fill="var(--accent)"/>'+
    FLD.ord.map(function(o,i){ var done=cur&&i<FLD.k, on=cur&&o===cur; return '<circle cx="'+o.x+'" cy="'+o.y+'" r="'+(on?1.1:.7)+'" fill="'+(done?'var(--muted)':DEF[o.type].c)+'"'+(on?' stroke="var(--text)" stroke-width=".3"':'')+'/>'; }).join('')+
    (cur?'<line x1="'+prev.x+'" y1="'+prev.y+'" x2="'+cur.x+'" y2="'+cur.y+'" stroke="var(--accent)" stroke-width=".3" stroke-dasharray=".8 .5"/>':'')+'</svg>';
}
function fldNums(o){ var n=[]; S.route.forEach(function(id,i){ if(id===o.id) n.push(i+1); }); return n; }
function fldCard(){
  var o=FLD.ord[FLD.k], prev=FLD.k>0?FLD.ord[FLD.k-1]:{x:0,y:0}, d=Math.hypot(o.x-prev.x,o.y-prev.y), th=Math.atan2(o.y-prev.y,o.x-prev.x)*180/Math.PI, nums=fldNums(o);
  var dirTxt=Math.abs(th)<8?'rovně podél dlouhé strany':Math.abs(Math.abs(th)-180)<8?'zpátky podél dlouhé strany':(th>0?'o '+Math.round(th)+'° doprava':'o '+Math.round(-th)+'° doleva')+' od dlouhé strany';
  var bend=o.type==='tunnel'&&o.bend?' do '+(Math.abs(o.bend)>=180?'U':'oblouku '+Math.abs(o.bend)+'°'):'';
  $('fdBody').innerHTML='<div class="fdhead"><b>'+(FLD.k+1)+' / '+FLD.ord.length+' · '+DEF[o.type].l+bend+'</b><span>'+(nums.length?'v trase č. '+nums.join(', '):'mimo trasu')+'</span></div>'+
    '<div class="fdnav"><svg viewBox="-50 -50 100 100" class="fdarrow" id="fdArrow"><circle r="46" fill="var(--surface)" stroke="var(--border)" stroke-width="2"/><g id="fdRot" transform="rotate('+(FLD.cal?0:r(th+90))+')"><path d="M0,-38 L14,-8 L5,-8 L5,30 L-5,30 L-5,-8 L-14,-8 Z" fill="var(--accent)"/></g></svg>'+
    '<div class="fddist"><b class="num">'+fmt(d)+' m</b><span>'+Math.max(1,Math.round(d/FLD.step))+' kroků '+(FLD.k?'od předchozí překážky':'od rohu')+'</span><span id="fdDir">'+(FLD.cal?'Jdi ve směru šipky.':'Směr: '+dirTxt+' (šipka ukazuje směr na plánku).')+'</span></div></div>'+
    '<div class="fdori"><svg viewBox="-30 -30 60 60" class="fdob"><g id="fdObRot" transform="rotate('+(FLD.cal?0:o.rot+90)+')" style="color:'+DEF[o.type].c+'">'+fldObG(o)+'</g></svg><span>'+fldOriTxt(o)+'</span></div>'+
    fldMini(o)+
    '<div class="acts"><button class="btn" id="fdPrev"'+(FLD.k?'':' disabled')+'>Zpět</button><button class="btn primary" id="fdNext">'+(FLD.k<FLD.ord.length-1?'Postaveno, další':'Hotovo')+'</button></div>';
  $('fdPrev').onclick=function(){ if(FLD.k){ FLD.k--; fldCard(); } };
  $('fdNext').onclick=function(){ if(FLD.k<FLD.ord.length-1){ FLD.k++; fldCard(); } else { fldClose(); toast('Parkur postavený. Zkontroluj ho podle plánu a hurá na trénink!'); } };
  FLD.th=th; fldLive();
}
function fldObG(o){ /* náčrt překážky ve směru běhu psa nahoru (plán: rot = směr běhu) */
  var s=6, hl=DEF[o.type].hl, g='<g transform="rotate(-90) scale('+s+')">';
  if(o.type==='tunnel'&&o.bend){ var L=tunLen(o), p=[]; for(var j=0;j<=12;j++){ var q=tunPt({x:0,y:0,rot:0,bend:o.bend},-L/2+L*j/12); p.push(r(q.x/1.4)+','+r(q.y/1.4)); } g+='<polyline points="'+p.join(' ')+'" fill="none" stroke="currentColor" stroke-width=".5" stroke-linecap="round"/>'; }
  else if(hl>0) g+='<line x1="'+(-Math.min(hl,4))+'" x2="'+Math.min(hl,4)+'" stroke="currentColor" stroke-width=".6" stroke-linecap="round"/>';
  else g+='<line y1="-1.2" y2="1.2" stroke="currentColor" stroke-width=".35"/><rect x="-.25" y="-1.5" width=".5" height=".5" fill="currentColor"/><rect x="-.25" y="1" width=".5" height=".5" fill="currentColor"/>';
  return g+'<path d="M'+(hl>0?Math.min(hl,4)+.8:1.3)+',0 l-.8,-.5 v1 z" fill="var(--text)"/></g>';
}
function fldOriTxt(o){
  var a=((o.rot%360)+360)%360, t=a<=90?a:a<=270?a-180:a-360, dirW=Math.abs(t)<5?'podél dlouhé strany':Math.abs(Math.abs(t)-90)<5?'napříč plochou':(t>0?Math.round(t)+'° doprava':Math.round(-t)+'° doleva')+' od dlouhé strany';
  var what=o.type==='jump'||o.type==='tire'||o.type==='longjump'?'Pes skáče ve směru šipky, laťka je napříč.':o.type==='weave'?'Slalom vede ve směru šipky.':o.type==='tunnel'?'Tunel vede ve směru šipky.':'Zóna vede ve směru šipky.';
  return what+' '+(FLD.cal?'Natoč překážku podle obrázku.':'Směr překážky: '+dirW+'.');
}
function fldLive(){
  if(!FLD||!FLD.cal||FLD.h==null||FLD.h0==null) return;
  var rot=$('fdRot'), ob=$('fdObRot'), o=FLD.ord[FLD.k]; if(!rot||!o) return;
  var rel=FLD.h0+FLD.th-FLD.h; rot.setAttribute('transform','rotate('+r(rel)+')');
  if(ob) ob.setAttribute('transform','rotate('+r(FLD.h0+o.rot-FLD.h)+')');
}
