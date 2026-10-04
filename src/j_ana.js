
/* ---------- rozbor parkuru: náročnost, plynulost, dráha podle velikosti psa ---------- */
function pathProf(){ return SET.psz&&PROF[SET.psz]?PROF[SET.psz]:null; }
/* co bývá v jednotlivých třídách (generátor staví podle těchto cílů, vychází z parkurů rozhodčích) */
var TYP={A1:{arc:'40–50 %',cross:'0–1',sharp:'3–6',bent:'1',traps:'0–1'},A2:{arc:'45–55 %',cross:'1–2',sharp:'5–8',bent:'1–2',traps:'0–2'},A3:{arc:'50–60 %',cross:'2–3',sharp:'7–11',bent:'2–3',traps:'1–2'}};
var ANA_EXTRA=[]; /* další části rozboru (vedení psovoda, odhad času, simulace) se přidávají sem */
function anaSheet(){
  if(S.route.length<2){toast('Nejdřív vyznač trasu v režimu Trasa.'); return;}
  var c={id:'cur',obs:S.obs,route:S.route,turns:S.turns,cls:S.meta.cls}, g=calc(), fs=flowStats(S.obs,S.route,S.turns,g), d=diffScore(c,fs), ty=TYP[S.meta.cls]||TYP.A2;
  var row=function(l,v,t){return '<li><span>'+l+'</span><b>'+v+'</b><small>'+(t||'')+'</small></li>';};
  var dg=curDog(), sz=['XS','S','M','I','L'];
  var h='<h3>Rozbor parkuru</h3>'+
    '<div class="dmeter"><div class="top"><b>'+fmt(d.v)+'</b><span>z 10 · '+diffLabel(d.v)+'</span></div><div class="bar"><i style="width:'+Math.round(d.v*10)+'%"></i></div>'+
    (d.why.length?'<p>Nejvíc přidává: '+esc(d.why.join(', '))+'.</p>':'<p>Parkur bez výrazných záludností.</p>')+'</div>'+
    '<h4>Plynulost dráhy</h4><ul class="kv">'+
    row('Oblouky (poloměr 2–10 m)',Math.round(fs.arc)+' %','v '+S.meta.cls+' '+ty.arc)+
    row('Rovné úseky',Math.round(fs.str)+' %','')+
    row('Ostré obraty přes 90°',fs.sharp,ty.sharp)+
    row('Křížení dráhy',fs.cross,ty.cross)+
    row('Tunely do oblouku',fs.bent,ty.bent)+
    row('Nástrahy v přímém směru',fs.traps,ty.traps)+
    row('Otočky · zadní strany',fs.wraps+' · '+fs.backs,'')+
    '</ul><p class="hint">Nástraha: překážka, na kterou pes míří v přímém směru, zatímco trasa pokračuje obratem jinam.</p>'+
    ANA_EXTRA.map(function(f){return f(c,g,fs);}).join('')+
    '<h4>Dráha v plánu</h4><div class="seg wide" id="pdSeg"><button data-pd="" class="'+(SET.psz?'':'on')+'">Ideální</button>'+sz.map(function(z){return '<button data-pd="'+z+'" class="'+(SET.psz===z?'on':'')+'">'+z+'</button>';}).join('')+'</div>'+
    '<p class="hint">Malý pes zatáčí těsněji a kolem křídla projde blíž, velký v širších obloucích.'+(dg?' Tvůj pes '+esc(dg.name)+' je '+dg.size+'.':'')+' Délka trati, SČP a kontrola FCI se počítají vždy z ideální čáry.</p>'+
    '<div class="acts"><button class="btn primary" data-a="x">Zavřít</button></div>';
  openSheet(h,function(e){
    var b=e.target.closest('[data-pd]');
    if(b){ SET.psz=b.getAttribute('data-pd')||null; lsSet(SETK,SET); render(); anaSheet(); return; }
    var hsb=e.target.closest('[data-hs]');
    if(hsb){ SET.hspd=+hsb.getAttribute('data-hs'); lsSet(SETK,SET); anaSheet(); return; }
    var a=e.target.closest('[data-a]'); if(a) { var act=a.getAttribute('data-a'); if(act==='x') closeSheet(); else if(ANA_ACT[act]) ANA_ACT[act](a); }
  });
}
var ANA_ACT={};

/* ---------- simulace psa: rychlost podle poloměru zatáčky, zrychlení a zpomalení, překážky ---------- */
var DOGM={XS:{v:4.3,a:6.5},S:{v:4.8,a:7},M:{v:5.3,a:7.5},I:{v:5.7,a:8},L:{v:6.1,a:8.5}};
var OBCAP={tunnel:5.2,weave:2.4,dogwalk:3.6,aframe:3.8,seesaw:2.6,tire:5.2,longjump:5.8}, OBADD={seesaw:1,dogwalk:.5,aframe:.4};
var SIMC={};
function simDog(c,sz){
  sz=DOGM[sz]?sz:'L';
  var js=JSON.stringify([c.obs,c.route,c.turns]), hh=5381; for(var q=0;q<js.length;q++) hh=((hh<<5)+hh+js.charCodeAt(q))|0;
  var key=c.id+'|'+sz+'|'+hh; if(c.id&&c.id!=='cur'&&SIMC[key]) return SIMC[key];
  var m=DOGM[sz], g=calc(c.obs,c.route,c.turns,PROF[sz]), by={}, raw=[];
  c.obs.forEach(function(o){by[o.id]=o;});
  g.P.forEach(function(p,i){
    var o=by[c.route[i]], cap=OBCAP[o.type]||99;
    raw.push({x:p.en.x,y:p.en.y,ob:i,cap:cap,arr:i});
    if(p.len>0){ if(o.type==='tunnel'&&o.bend){ var L=tunLen(o); for(var k=1;k<=10;k++){ var q=tunPt(o,p.rev?L/2-L*k/10:-L/2+L*k/10); raw.push({x:q.x,y:q.y,ob:i,cap:cap}); } } else raw.push({x:p.ex.x,y:p.ex.y,ob:i,cap:cap}); }
    if(i<g.segs.length) g.segs[i].pcs.forEach(function(pc){ for(var t=1;t<=12;t++){ var q=bz(pc[0],pc[1],pc[2],pc[3],t/12); raw.push({x:q.x,y:q.y,ob:-1,cap:99}); } });
  });
  /* převzorkování po 0,25 m; úsek uvnitř překážky má její omezení rychlosti */
  var ds=.25, P=[{x:raw[0].x,y:raw[0].y,cap:raw[0].cap,ob:0}], arrK=[0], exitK=[], acc=0, j, k;
  for(j=1;j<raw.length;j++){
    var a=raw[j-1], b=raw[j], d=dst(a,b), inside=b.ob>=0&&b.ob===a.ob, cp=inside?b.cap:99, x0=a.x, y0=a.y;
    while(d>0&&acc+d>=ds){ var f=(ds-acc)/d; x0=x0+(b.x-x0)*f; y0=y0+(b.y-y0)*f; P.push({x:x0,y:y0,cap:cp,ob:inside?b.ob:-1}); d=Math.hypot(b.x-x0,b.y-y0); acc=0; }
    acc+=d;
    if(b.arr!=null) arrK[b.arr]=P.length-1;
    if(b.ob>=0) exitK[b.ob]=P.length-1;
  }
  var n=P.length, v=[], hd=[];
  for(k=0;k<n;k++){ var p0=P[Math.max(0,k-1)], p1=P[Math.min(n-1,k+1)]; hd.push(Math.atan2(p1.y-p0.y,p1.x-p0.x)); }
  for(k=0;k<n;k++){ var da=Math.abs(nAng(hd[Math.min(n-1,k+2)]-hd[Math.max(0,k-2)])), R=da>1e-4?1/da:1e4; v.push(Math.min(m.v,Math.sqrt(m.a*R),P[k].cap)); }
  v[0]=Math.min(v[0],3.5);
  for(k=1;k<n;k++) v[k]=Math.min(v[k],Math.sqrt(v[k-1]*v[k-1]+2*4.5*ds));
  for(k=n-2;k>=0;k--) v[k]=Math.min(v[k],Math.sqrt(v[k+1]*v[k+1]+2*7*ds));
  var add={}; g.P.forEach(function(p,i){ var ty=by[c.route[i]].type; if(OBADD[ty]&&exitK[i]!=null) add[exitK[i]]=(add[exitK[i]]||0)+OBADD[ty]; });
  var t=0; P[0].t=0;
  for(k=1;k<n;k++){ t+=ds/Math.max(.3,(v[k-1]+v[k])/2); if(add[k-1]){ P[k-1].t2=t; t+=add[k-1]; } P[k].t=t; }
  var T=arrK.map(function(kk){return P[kk]?P[kk].t:0;}), TX=g.P.map(function(p,i){return exitK[i]!=null&&P[exitK[i]]?(P[exitK[i]].t2||P[exitK[i]].t):T[i];});
  var res={pts:P,T:T,TX:TX,total:t,len:n*ds,g:g};
  if(c.id&&c.id!=='cur') SIMC[key]=res;
  return res;
}
/* kalibrace podle zapsaných běhů psa: medián poměru skutečný čas / model */
function dogCal(d){
  if(!d) return {r:1,n:0}; var rs=[];
  Object.keys(MK).forEach(function(id){ (MK[id].runs||[]).forEach(function(x){
    if(x.dog!==d.id||x.g==='DIS'||!(x.t>0)) return; var c=findCourse(id); if(!c||c.route.length<2) return;
    var s=simDog(c,d.size); if(s.total>0) rs.push(x.t/s.total); }); });
  if(!rs.length) return {r:1,n:0};
  rs.sort(function(a,b){return a-b;});
  return {r:cl(rs[Math.floor(rs.length/2)],.7,2.5),n:rs.length};
}
/* ---------- psovod: kde musí být u každé překážky a kdy tam doběhne ---------- */
function simHand(c,g,sd,sim,hs,hp){
  var n=c.route.length, H=[], i, by={}; c.obs.forEach(function(o){by[o.id]=o;});
  for(i=0;i<n;i++){ var p=g.P[i], d=p.dx||p.dir, o=by[c.route[i]], base=DEF[o.type].hl>0?p.ex:p.en, s=sd[i]==='L'?1:-1; /* pes vlevo = psovod vpravo od psa */
    H.push({x:base.x-d.y*2*s,y:base.y+d.x*2*s}); }
  var par=null, poly=null;
  if(hp&&hp.length>1){ /* nakreslená dráha psovoda: průmět každého bodu na čáru, jen dopředu */
    poly=hp.map(function(q){return {x:q[0],y:q[1]};}); var cum=[0]; for(i=1;i<poly.length;i++) cum.push(cum[i-1]+dst(poly[i-1],poly[i]));
    par=[]; var last=0;
    H.forEach(function(h,ii){ var best=null;
      for(var j=1;j<poly.length;j++){ var a=poly[j-1], b=poly[j], L=cum[j]-cum[j-1]; if(cum[j]<last) continue;
        var u=L?cl(((h.x-a.x)*(b.x-a.x)+(h.y-a.y)*(b.y-a.y))/(L*L),0,1):0, s2=cum[j-1]+u*L; if(s2<last) { s2=last; }
        var q={x:a.x+(b.x-a.x)*((s2-cum[j-1])/(L||1)),y:a.y+(b.y-a.y)*((s2-cum[j-1])/(L||1))}, dd=dst(q,h);
        if(!best||dd<best.d) best={d:dd,s:s2,q:q}; }
      par.push(best?best.s:last); if(best){ H[ii]=best.q; last=best.s; } });
  }
  var Ta=[0,0], Tl=[0,0], lag=[0,0], dist=0;
  for(i=2;i<n;i++){
    var dd2=par?Math.max(0,par[i]-par[i-1]):dst(H[i-1],H[i]); dist+=dd2;
    Ta[i]=Tl[i-1]+dd2/hs; Tl[i]=Math.max(Ta[i],sim.TX[i]-.4); lag[i]=Ta[i]-sim.TX[i];
  }
  return {H:H,Ta:Ta,Tl:Tl,lag:lag,dist:dist+(par?par[1]:0),poly:poly,par:par};
}
function anaHandling(c,g,fs){
  var hsd=handSides(c,g,fs); ANA.hsd=hsd;
  var h='<h4>Vedení psovoda</h4><p class="hint">Návrh strany psa: u ostrých obratů je psovod uvnitř, mírné zatáčky se dají vést i zvenku. Změny strany: '+hsd.cr.length+' (FCI chce aspoň 2).</p>';
  h+=hsd.cr.length?'<ul class="kv plain">'+hsd.cr.map(function(x){return '<li><span><b>'+x.i+' → '+(x.i+1)+' · '+XN[x.t]+'</b><br><small>'+esc(x.why)+'</small></span></li>';}).join('')+'</ul>'
    :'<p class="hint">Celý parkur se dá vést z jedné strany.</p>';
  return h+'<div class="row"><button class="btn" data-a="sides">Nastavit stranu psa v Dráze psovoda</button></div>';
}
function anaTime(c,g,fs){
  var d=curDog(), sz=d?d.size:'L', sim=simDog(c,sz), cal=dogCal(d), est=sim.total*cal.r, m=metrics(S.obs,S.route,S.meta.cls,S.turns), hs=SET.hspd||4.5;
  ANA.sim=sim; ANA.est=cal.r;
  var h='<h4>Odhad času</h4><ul class="kv"><li><span>'+(d?esc(d.name)+' ('+sz+')':'Pes velikosti L')+'</span><b>'+fmt(est)+' s</b><small>SČP '+(m.sct||'–')+' s</small></li></ul>'+
    '<p class="hint">Model psa podle velikosti: rychlost v zatáčkách podle poloměru, rozběh, zpomalení na zónách, ve slalomu a na houpačce. '+
    (cal.n?'Upraveno podle '+cal.n+' '+(cal.n===1?'zapsaného běhu':'zapsaných běhů')+' psa.':(d?'Až zapíšeš běhy psa, odhad se podle nich upraví.':'Přidej psa ve Více › Psi a odhad bude pro něj.'))+
    (m.sct&&est>m.sct?' Odhad je nad SČP o '+fmt(est-m.sct)+' s.':'')+'</p>';
  /* Stihnu to? */
  var hsd=ANA.hsd||handSides(c,g,fs), hp=S.hp&&S.hp.length>1?S.hp:null, simT={pts:sim.pts,T:sim.T.map(function(t){return t*cal.r;}),TX:sim.TX.map(function(t){return t*cal.r;}),total:est};
  var hd=simHand(c,sim.g,hsd.sd,simT,hs,hp), probs=[];
  ANA.hand=hd; ANA.simT=simT;
  hsd.cr.forEach(function(x){ if(x.t!=='front') return; var i=x.i, late=hd.Ta[i]-(simT.T[i]-.5); if(late>0) probs.push({s:late+1,t:'Přední křížení u '+(i+1)+': doběhneš o '+fmt(late)+' s později, než je potřeba. Zkus zadní křížení, nebo psa pošli dopředu a křížení udělej dřív.'}); });
  for(var i=2;i<c.route.length;i++) if(hd.lag[i]>1.5) probs.push({s:hd.lag[i],t:'U překážky '+(i+1)+' jsi o '+fmt(hd.lag[i])+' s za psem. Tady musí pes pracovat na dálku, nebo si zkrať dráhu.'});
  probs.sort(function(a,b){return b.s-a.s;});
  h+='<h4>Stihnu to?</h4><div class="seg wide" id="hsSeg">'+[[3,'Chůze'],[4.5,'Běh'],[6,'Sprint']].map(function(x){return '<button data-hs="'+x[0]+'" class="'+(hs===x[0]?'on':'')+'">'+x[1]+' '+fmt(x[0]).replace(',0','')+' m/s</button>';}).join('')+'</div>'+
    '<ul class="fcilist">'+(probs.length?probs.slice(0,4).map(function(p){return '<li class="bad"><span class="i">!</span><span>'+esc(p.t)+'</span></li>';}).join('')+(probs.length>4?'<li class="info"><span class="i">•</span><span>A další místa: '+(probs.length-4)+'.</span></li>':'')
      :'<li class="ok"><span class="i">✓</span><span>Při téhle rychlosti stihneš být všude včas.</span></li>')+'</ul>'+
    '<p class="hint">Tvoje dráha '+fmt(hd.dist)+' m ('+(hp?'podle nakreslené Dráhy psovoda':'odhad: 2 m od psa na straně návrhu')+'), pes uběhne '+fmt(sim.g.total)+' m. Na startu počítá s odchodem k druhé překážce.</p>'+
    '<div class="row"><button class="btn primary" data-a="play">Přehrát psa a psovoda</button></div>';
  return h;
}
var ANA={};
ANA_EXTRA.push(anaHandling,anaTime);
ANA_ACT.sides=function(){ if(!ANA.hsd) return; S.sides=ANA.hsd.sd.slice(); touch(); closeSheet(); setPanel('side'); render(); toast('Strana psa nastavena podle návrhu'); };
ANA_ACT.play=function(){ if(!ANA.simT||!ANA.hand) return; closeSheet(); simPlay(ANA.simT,ANA.hand); };
/* ---------- přehrání: pes a psovod na plánu ---------- */
var SIMA=null;
function handTL(hd,simT){
  var tl=[{x:hd.H[1].x,y:hd.H[1].y,t:0}], i;
  for(i=2;i<hd.H.length;i++){
    if(hd.poly&&hd.par){ /* po nakreslené čáře */
      var s0=hd.par[i-1], s1=hd.par[i], cum=0, pts=[];
      for(var j=1;j<hd.poly.length;j++){ var a=hd.poly[j-1], b=hd.poly[j], L=dst(a,b); if(cum+L>s0&&cum<s1) pts.push({x:b.x,y:b.y,s:cum+L}); cum+=L; }
      pts.forEach(function(q){ if(q.s<s1) tl.push({x:q.x,y:q.y,t:hd.Tl[i-1]+(q.s-s0)/Math.max(1e-6,s1-s0)*(hd.Ta[i]-hd.Tl[i-1])}); });
    }
    tl.push({x:hd.H[i].x,y:hd.H[i].y,t:hd.Ta[i]}); if(hd.Tl[i]>hd.Ta[i]) tl.push({x:hd.H[i].x,y:hd.H[i].y,t:hd.Tl[i]});
  }
  return tl;
}
function tlAt(tl,t){
  if(t<=tl[0].t) return tl[0]; var lo=0, hi=tl.length-1; if(t>=tl[hi].t) return tl[hi];
  while(hi-lo>1){ var mid=(lo+hi)>>1; if(tl[mid].t<=t) lo=mid; else hi=mid; }
  var a=tl[lo], b=tl[hi], f=(t-a.t)/((b.t-a.t)||1); return {x:a.x+(b.x-a.x)*f,y:a.y+(b.y-a.y)*f};
}
function simStop(){ if(SIMA) cancelAnimationFrame(SIMA); SIMA=null; var g=$('simG'); if(g) g.parentNode.removeChild(g); }
function simPlay(simT,hd){
  simStop(); show('plan');
  var dogTL=simT.pts.map(function(p){return {x:p.x,y:p.y,t:p.t*ANA.est};}), htl=handTL(hd,simT), end=Math.max(simT.total,htl[htl.length-1].t)+1.2;
  var g=document.createElementNS(NS,'g'); g.setAttribute('id','simG'); $('field').appendChild(g);
  var wr=$('wrap'), t0=performance.now(), tok={};
  try{ wr.scrollIntoView({block:'center'}); }catch(e){}
  SIMA=tok;
  function frame(){
    if(SIMA!==tok&&typeof SIMA!=='number') return;
    var t=(performance.now()-t0)/1000, d=tlAt(dogTL,t), h=tlAt(htl,t);
    g.innerHTML='<circle cx="'+r(h.x)+'" cy="'+r(h.y)+'" r=".75" fill="#3f7fc1" stroke="#fff" stroke-width=".18"/><circle cx="'+r(d.x)+'" cy="'+r(d.y)+'" r=".6" fill="#8a5a2b" stroke="#fff" stroke-width=".18"/>'+
      '<text x="'+r(d.x)+'" y="'+r(d.y-1.1)+'" font-size=".9" text-anchor="middle" font-weight="700" fill="var(--text)" stroke="var(--field)" stroke-width=".25" paint-order="stroke">'+fmt(Math.min(t,simT.total))+' s</text>';
    if(zoom>1&&wr){ var sc=$('field').clientWidth/S.W; wr.scrollLeft=d.x*sc-wr.clientWidth/2; wr.scrollTop=d.y*sc-wr.clientHeight/2; }
    if(t<end) SIMA=requestAnimationFrame(frame); else { SIMA=null; setTimeout(function(){ if(!SIMA&&$('simG')===g) simStop(); },4000); }
  }
  frame();
  toast('Hnědý je pes, modrý psovod. Klepnutím na plochu zastavíš.');
}
