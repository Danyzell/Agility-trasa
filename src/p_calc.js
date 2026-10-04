/* geometrie trasy: vstup/výstup každé překážky a plynulé úseky mezi nimi.
   Otočky u skoku, tu[i]: 'wL'/'wR' = po skoku otočka kolem levého/pravého křídla (z pohledu psa),
   'bL'/'bR' = zadní strana: pes skok mine, oběhne křídlo doleva/doprava a skočí ho z druhé strany. */
var WR=1.1, WL=.5, BZK=.4;
/* dráha podle velikosti psa: poloměr otočky kolem křídla, přesah za skok a jak široce pes zatáčí mezi překážkami.
   Bez profilu se počítá ideální čára rozhodčího (z ní délka trati, SČP a kontrola FCI). */
var PROF={XS:{wr:.7,wl:.3,k:.34},S:{wr:.8,wl:.35,k:.36},M:{wr:.95,wl:.42,k:.38},I:{wr:1.05,wl:.47,k:.39},L:{wr:1.2,wl:.55,k:.42}};
function sideV(d,s){return s==='L'?{x:d.y,y:-d.x}:{x:-d.y,y:d.x};}
function lin(a,b){return [a,{x:a.x+(b.x-a.x)/3,y:a.y+(b.y-a.y)/3},{x:a.x+(b.x-a.x)*2/3,y:a.y+(b.y-a.y)*2/3},b];}
function arcP(C,rr,a0,a1){
  var out=[], n=Math.max(1,Math.ceil(Math.abs(a1-a0)/(Math.PI/2)-1e-9)), da=(a1-a0)/n, k=4/3*Math.tan(da/4)*rr;
  for(var j=0;j<n;j++){
    var t0=a0+j*da, t1=t0+da, p0={x:C.x+rr*Math.cos(t0),y:C.y+rr*Math.sin(t0)}, p3={x:C.x+rr*Math.cos(t1),y:C.y+rr*Math.sin(t1)};
    out.push([p0,{x:p0.x-k*Math.sin(t0),y:p0.y+k*Math.cos(t0)},{x:p3.x+k*Math.sin(t1),y:p3.y-k*Math.cos(t1)},p3]);
  }
  return out;
}
function halfLoop(C,from,dir){
  var a0=Math.atan2(from.y-C.y,from.x-C.x), sg=(-Math.sin(a0)*dir.x+Math.cos(a0)*dir.y)>0?1:-1;
  return arcP(C,WR,a0,a0+sg*Math.PI);
}
function wrapG(o,f,s){
  var O={x:o.x,y:o.y}, n=sideV(f,s), L={x:O.x+f.x*WL,y:O.y+f.y*WL}, C={x:L.x+n.x*WR,y:L.y+n.y*WR};
  return {pcs:[lin(O,L)].concat(halfLoop(C,L,f)), q:{x:L.x+2*n.x*WR,y:L.y+2*n.y*WR}};
}
function backG(o,f,s){
  var O={x:o.x,y:o.y}, n=sideV(f,s), T={x:O.x-f.x*WL,y:O.y-f.y*WL}, C={x:T.x+n.x*WR,y:T.y+n.y*WR}, Q={x:T.x+2*n.x*WR,y:T.y+2*n.y*WR};
  return {pcs:halfLoop(C,Q,{x:-f.x,y:-f.y}).concat([lin(T,O)]), q:Q};
}
function loopPts(pcs){var out=[]; pcs.forEach(function(c){for(var t=1;t<=4;t++) out.push(bz(c[0],c[1],c[2],c[3],t/4));}); return out;}
/* tunel do oblouku: o.bend ve stupních (kladně doleva ve směru rot), délka 4,5 m rovný až 6 m do U */
/* platná otočka pro danou překážku: w/b jen u skoku, f (vstup druhým koncem, u skoku skok z druhé strany) u skoku, tunelu, zón a slalomu */
function tuValid(t,ty){return t&&DEF[ty]&&(t==='f'?DEF[ty].hl>0||ty==='jump':ty==='jump'&&/^[wb][LR]$/.test(t))?t:null;}
function tunLen(o){return o.bend?4.5+1.5*Math.min(1,Math.abs(o.bend)/180):2*DEF[o.type].hl;}
function tunPt(o,s){
  var a=o.rot*Math.PI/180, L=tunLen(o), k=(o.bend||0)*Math.PI/180/L;
  if(Math.abs(k)<1e-6) return {x:o.x+Math.cos(a)*s,y:o.y+Math.sin(a)*s,d:a};
  return {x:o.x-(Math.sin(a-k*s)-Math.sin(a))/k, y:o.y+(Math.cos(a-k*s)-Math.cos(a))/k, d:a-k*s};
}
/* konce překážky: A = začátek ve směru rot, B = konec; dA/dB = směr pohybu v bodě A/B při průchodu od A k B */
function ends(o){
  var a=o.rot*Math.PI/180, u={x:Math.cos(a),y:Math.sin(a)}, hl=DEF[o.type].hl;
  if(o.type==='tunnel'&&o.bend){ var L2=tunLen(o)/2, pa=tunPt(o,-L2), pb=tunPt(o,L2);
    return {A:{x:pa.x,y:pa.y},B:{x:pb.x,y:pb.y},dA:{x:Math.cos(pa.d),y:Math.sin(pa.d)},dB:{x:Math.cos(pb.d),y:Math.sin(pb.d)}}; }
  return {A:{x:o.x-u.x*hl,y:o.y-u.y*hl},B:{x:o.x+u.x*hl,y:o.y+u.y*hl},dA:u,dB:u};
}
function nAng(a){return Math.atan2(Math.sin(a),Math.cos(a));}
function calc(ob,rt,tu,pf){
  if(pf){ var sv=[WR,WL,BZK]; WR=pf.wr; WL=pf.wl; BZK=pf.k; try{ var res=calc(ob,rt,tu); res.pf=pf; return res; } finally { WR=sv[0]; WL=sv[1]; BZK=sv[2]; } }
  if(!ob){ob=S.obs; rt=S.route; tu=S.turns;}
  var st=rt.map(function(id){for(var j=0;j<ob.length;j++)if(ob[j].id===id)return ob[j];}), n=st.length, P=[], prev=null, prevD=null, i;
  for(i=0;i<n;i++){
    var o=st[i], a=o.rot*Math.PI/180, u={x:Math.cos(a),y:Math.sin(a)}, hl=DEF[o.type].hl, ref, en, ex, dir, dxo=null, t=(o.type==='jump'&&tu&&tu[i])||null;
    /* první překážka: pes přibíhá z opačné strany než je druhá překážka; s otočkou po prvním skoku naopak od ní */
    ref=prev||(n>1?(t&&t.charAt(0)==='w'?{x:st[1].x,y:st[1].y}:{x:2*o.x-st[1].x,y:2*o.y-st[1].y}):{x:o.x-u.x,y:o.y-u.y});
    var A, B, dA=u, dB=u, bent=o.type==='tunnel'&&!!o.bend, len;
    if(bent){ var L2=tunLen(o)/2, pa=tunPt(o,-L2), pb=tunPt(o,L2); A={x:pa.x,y:pa.y}; B={x:pb.x,y:pb.y}; dA={x:Math.cos(pa.d),y:Math.sin(pa.d)}; dB={x:Math.cos(pb.d),y:Math.sin(pb.d)}; }
    else { A={x:o.x-u.x*hl,y:o.y-u.y*hl}; B={x:o.x+u.x*hl,y:o.y+u.y*hl}; }
    if(hl>0){
      var far=!!(tu&&tu[i]==='f'); /* 'f' = vstup vzdálenějším koncem (pes překážku oběhne) */
      if((dst(ref,A)<=dst(ref,B))!==far){en=A;ex=B;dir=dA;dxo=dB;} else {en=B;ex=A;dir={x:-dB.x,y:-dB.y};dxo={x:-dA.x,y:-dA.y};}
      len=bent?tunLen(o):dst(en,ex);
    } else {
      /* směr skoku: podle toho, odkud pes přibíhá; bod se bere kousek za předchozí překážkou ve směru, kterým pes odbíhá
         (u skoků v řadě a u obratů do U by samotná poloha předchozí překážky nerozhodla) */
      var rj=prevD?{x:ref.x+prevD.x*1.5,y:ref.y+prevD.y*1.5}:ref, s=((o.x-rj.x)*u.x+(o.y-rj.y)*u.y)>=0?1:-1;
      if(t==='f') s=-s; /* skok z druhé strany */
      en=ex={x:o.x,y:o.y}; dir={x:u.x*s,y:u.y*s}; len=0;
    }
    var pi={en:en,ex:ex,dir:dir,t:t,len:len,rev:hl>0&&en===B};
    if(t&&t.charAt(0)==='b'&&i>0){ dir={x:-dir.x,y:-dir.y}; pi.dir=dir; pi.b=backG(o,dir,t.charAt(1)); }
    pi.dx=dxo||pi.dir;
    prev=ex; prevD=pi.dx;
    if(t&&t.charAt(0)==='w'){ pi.w=wrapG(o,dir,t.charAt(1)); prev=(i+1<n&&st[i+1]===o)?{x:pi.w.q.x-dir.x*2,y:pi.w.q.y-dir.y*2}:pi.w.q; prevD={x:-dir.x,y:-dir.y}; }
    P.push(pi);
  }
  var segs=[], total=0;
  for(i=0;i<n;i++) total+=P[i].len;
  for(i=0;i<n-1;i++){
    var Pa=P[i], Pb=P[i+1], pcs=Pa.w?Pa.w.pcs.slice():[], p0=Pa.w?Pa.w.q:Pa.ex, d0=Pa.w?{x:-Pa.dir.x,y:-Pa.dir.y}:Pa.dx,
        p3=Pb.b?Pb.b.q:Pb.en, d1=Pb.b?{x:-Pb.dir.x,y:-Pb.dir.y}:Pb.dir, k=Math.max(.8,dst(p0,p3)*BZK);
    pcs.push([p0,{x:p0.x+d0.x*k,y:p0.y+d0.y*k},{x:p3.x-d1.x*k,y:p3.y-d1.y*k},p3]);
    if(Pb.b) pcs=pcs.concat(Pb.b.pcs);
    var L=0, pts=[], d='M'+r(pcs[0][0].x)+','+r(pcs[0][0].y);
    pcs.forEach(function(c){
      d+=' C'+r(c[1].x)+','+r(c[1].y)+' '+r(c[2].x)+','+r(c[2].y)+' '+r(c[3].x)+','+r(c[3].y);
      var qq=c[0]; for(var t=1;t<=16;t++){var w=bz(c[0],c[1],c[2],c[3],t/16); L+=dst(qq,w); qq=w; pts.push([w,L]);}
    });
    var m=pts[0][0]; for(var j=0;j<pts.length;j++) if(pts[j][1]>=L/2){m=pts[j][0]; break;}
    total+=L;
    segs.push({d:d,len:L,m:m,pcs:pcs});
  }
  return {P:P,segs:segs,total:total,pf:{wr:WR,wl:WL,k:BZK}};
}
/* dráha psa jako lomená čára, i s průchody tunely do oblouku */
function pathPts(ob,rt,tu,g){
  g=g||calc(ob,rt,tu); var by={}, pts=[]; ob.forEach(function(o){by[o.id]=o;});
  g.P.forEach(function(p,i){
    var o=by[rt[i]]; pts.push(p.en);
    if(p.len>0){ if(o.type==='tunnel'&&o.bend){ var L=tunLen(o); for(var k=1;k<=10;k++){ var q=tunPt(o,p.rev?L/2-L*k/10:-L/2+L*k/10); pts.push({x:q.x,y:q.y}); } } else pts.push(p.ex); }
    if(i<g.segs.length) g.segs[i].pcs.forEach(function(c){ for(var t=1;t<=12;t++) pts.push(bz(c[0],c[1],c[2],c[3],t/12)); });
  });
  return pts;
}
function resamp(pts,step){
  var out=[pts[0]], acc=0;
  for(var i=1;i<pts.length;i++){ var a=pts[i-1], b=pts[i], d=dst(a,b);
    while(d>0&&acc+d>=step){ var t=(step-acc)/d; a={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t}; out.push(a); d=dst(a,b); acc=0; }
    acc+=d; }
  return out;
}
/* plynulost trasy: podíl oblouků (poloměr 2–10 m), ostrých obratů a rovinek po délce dráhy, křížení dráhy mimo překážky,
   změna směru na každém úseku (i se smyčkami otoček), střídání směru zatáček, tunely do oblouku a nástrahy
   (překážka v přímém směru běhu, kam pes nemá, zatímco trasa pokračuje obratem) */
function flowStats(ob,rt,tu,g){
  g=g||calc(ob,rt,tu);
  var by={}, i, j; ob.forEach(function(o){by[o.id]=o;});
  var q=resamp(pathPts(ob,rt,tu,g),.5), hd=[], arc=0, tight=0, str=0, tot=0;
  for(i=1;i<q.length;i++) hd.push(Math.atan2(q[i].y-q[i-1].y,q[i].x-q[i-1].x));
  for(i=2;i<hd.length;i++){ var da=Math.abs(nAng(hd[i]-hd[i-2])), R=da>1e-6?1/da:1e9; tot+=.5; if(R<2) tight+=.5; else if(R<=10) arc+=.5; else str+=.5; }
  var pls=ob.map(opoly), cross=0, seen=[];
  for(i=1;i<q.length;i++) for(j=i+6;j<q.length;j++){ var a=q[i-1], b=q[i], c=q[j-1], d=q[j];
    if(cr(a,b,c)*cr(a,b,d)<0&&cr(c,d,a)*cr(c,d,b)<0){
      var ux=b.x-a.x, uy=b.y-a.y, vx=d.x-c.x, vy=d.y-c.y, cs=Math.abs(ux*vx+uy*vy)/(Math.hypot(ux,uy)*Math.hypot(vx,vy)||1);
      if(cs>.87||pls.some(function(P){return pdist(b,P)<1;})) continue;
      if(!seen.some(function(s){return dst(s,b)<1.5;})){ seen.push(b); cross++; } } }
  var turns=[], alt=0, lastS=0, sharp=0, n180=0, mx=0;
  g.segs.forEach(function(s){
    var P=[]; s.pcs.forEach(function(c,ci){ for(var t=ci?1:0;t<=12;t++) P.push(bz(c[0],c[1],c[2],c[3],t/12)); });
    var sum=0, prev=null;
    for(var k=1;k<P.length;k++){ var dx=P[k].x-P[k-1].x, dy=P[k].y-P[k-1].y; if(dx*dx+dy*dy<1e-8) continue; var hh=Math.atan2(dy,dx); if(prev!==null) sum+=nAng(hh-prev); prev=hh; }
    var dg=sum*180/Math.PI, ad=Math.abs(dg); turns.push(dg); if(ad>mx) mx=ad; if(ad>90) sharp++; if(ad>135) n180++;
    if(ad>45){ var sg=dg>0?1:-1; if(lastS&&sg!==lastS) alt++; lastS=sg; }
  });
  var bent={}, wraps=0, backs=0;
  rt.forEach(function(id,k){ var o=by[id], t=tu&&tu[k]; if(o&&o.type==='tunnel'&&o.bend) bent[id]=1; if(t&&t.charAt(0)==='w'&&k<rt.length-1) wraps++; if(t&&t.charAt(0)==='b'&&k>0) backs++; }); /* otočka po posledním skoku a zadní strana prvního se nekreslí ani neměří */
  var traps=0;
  for(i=0;i<g.P.length-1;i++){
    var Pa=g.P[i]; if(Pa.w||Math.abs(turns[i]||0)<40) continue;
    var X=Pa.ex, dd=Pa.dx, found=false;
    for(j=0;j<ob.length&&!found;j++){ var z=ob[j]; if(z.id===rt[i]||z.id===rt[i+1]||z.type==='weave') continue;
      var E=ends(z), cc=DEF[z.type].hl>0?[[E.A,E.dA],[E.B,{x:-E.dB.x,y:-E.dB.y}]]:[[E.A,E.dA],[E.A,{x:-E.dA.x,y:-E.dA.y}]];
      for(var m=0;m<cc.length&&!found;m++){ var v={x:cc[m][0].x-X.x,y:cc[m][0].y-X.y}, L=Math.hypot(v.x,v.y); if(L<1.5||L>7) continue;
        if((v.x*dd.x+v.y*dd.y)/L<Math.cos((z.type==='tunnel'?25:18)*Math.PI/180)) continue;
        if(cc[m][1].x*dd.x+cc[m][1].y*dd.y<Math.cos((ZN.indexOf(z.type)>=0?40:60)*Math.PI/180)) continue;
        found=true; } }
    if(found) traps++;
  }
  tot=tot||1;
  return {arc:arc/tot*100,tight:tight/tot*100,str:str/tot*100,cross:cross,turns:turns,max:mx,sharp:sharp,n180:n180,alt:alt,
    bent:Object.keys(bent).length,wraps:wraps,backs:backs,traps:traps,len:g.total};
}
/* náročnost 1–10: ostré obraty, otočky, zadní strany, křížení, nástrahy, střídání směru, vstup do slalomu z obratu,
   vstup vzdálenějším koncem, opakované překážky a počet překážek. Vrací i to, co k náročnosti přidává nejvíc. */
function diffScore(c,fs){
  fs=fs||flowStats(c.obs,c.route,c.turns);
  var by={}, uniq={}, far=0, wv=0, n=c.route.length; c.obs.forEach(function(o){by[o.id]=o;});
  c.route.forEach(function(id,k){ uniq[id]=1; if(c.turns&&c.turns[k]==='f') far++; if(by[id]&&by[id].type==='weave'&&k>0) wv=Math.max(wv,Math.abs(fs.turns[k-1]||0)); });
  var reuse=n-Object.keys(uniq).length;
  var parts=[[fs.sharp*.22+fs.n180*.18,fs.sharp+' ostrých obratů přes 90°'],[fs.wraps*.3,fs.wraps+'× otočka kolem křídla'],[fs.backs*.55,fs.backs+'× zadní strana skoku'],
    [fs.cross*.35,fs.cross+'× křížení dráhy'],[fs.traps*.45,fs.traps+'× nástraha v přímém směru'],[fs.alt*.12+fs.tight*.03,'časté střídání směru zatáček'],
    [far*.4,far+'× vstup vzdálenějším koncem'],[reuse*.25,reuse+'× překážka znovu'],[Math.max(0,n-15)*.08,n+' překážek'],[wv>90?.8:wv>45?.4:0,'vstup do slalomu z obratu']];
  var sc=1; parts.forEach(function(p){sc+=p[0]*.85;});
  return {v:Math.round(cl(sc,1,10)*10)/10, why:parts.filter(function(p){return p[0]>=.3;}).sort(function(a,b){return b[0]-a[0];}).slice(0,3).map(function(p){return p[1];})};
}
function diffLabel(v){return v<3.5?'lehký':v<5.5?'střední':v<7.5?'těžký':'velmi těžký';}
/* statistiky parkuru do knihovny: počítají se jednou a pamatují podle obsahu */
var CST={};
function cStats(c){
  var j=JSON.stringify([c.obs,c.route,c.turns]), h=5381; for(var i=0;i<j.length;i++) h=((h<<5)+h+j.charCodeAt(i))|0;
  var key=c.id+'|'+h; if(CST[key]) return CST[key];
  var g=calc(c.obs,c.route,c.turns||null), fs=flowStats(c.obs,c.route,c.turns||null,g), d=diffScore(c,fs);
  return CST[key]={geo:g,fs:fs,diff:d.v,why:d.why};
}
/* ---------- vedení psovoda: strana psa a křížení ---------- */
/* psovod je uvnitř ostrého obratu: obrat doprava = pes vlevo od psovoda (L), doleva = vpravo (P).
   Křížení: přední před ostrým obratem, slepé na dlouhé rovince, jinak zadní (i za tunelem, slalomem a zónou). */
var XN={front:'přední křížení',rear:'zadní křížení',blind:'slepé křížení'};
function handSides(c,g,fs){
  var n=c.route.length, tr=fs.turns, sd=[], i, by={}; c.obs.forEach(function(o){by[o.id]=o;});
  for(i=0;i<n;i++){ var t=i<n-1?tr[i]:0; sd.push(Math.abs(t)>=90?(t>0?'L':'P'):null); }
  /* mírné zatáčky se dají vést i zvenku; strana se mění jen kvůli ostrému obratu, a to co nejpozději, těsně před ním */
  var first=null; for(i=0;i<n;i++) if(sd[i]){first=sd[i]; break;}
  if(!first){ var sum=0; tr.forEach(function(t){sum+=t;}); first=sum>=0?'L':'P'; }
  var cu=first; for(i=0;i<n;i++){ if(sd[i]) cu=sd[i]; else sd[i]=cu; }
  var cr=[];
  for(i=1;i<n;i++) if(sd[i]!==sd[i-1]){
    var pt=by[c.route[i-1]].type, L=g.segs[i-1]?g.segs[i-1].len:0, tIn=Math.abs(tr[i-1]||0), tOut=i<n-1?Math.abs(tr[i]||0):0, ty, why;
    if(tOut>=100&&pt!=='tunnel'&&pt!=='weave'){ ty='front'; why='Za překážkou '+(i+1)+' je obrat o '+Math.round(tOut)+'°, psovod musí být před psem.'; }
    else if(pt==='tunnel'||pt==='weave'||ZN.indexOf(pt)>=0){ ty='rear'; why='Pes je po '+DEF[pt].l.toLowerCase()+'u před psovodem, strana se mění za ním.'; }
    else if(L>=6.5&&tIn<35){ ty='blind'; why='Dlouhá rovná linka, psovod přeběhne na druhou stranu bez zpomalení.'; }
    else { ty='rear'; why='Pes jde na překážku '+(i+1)+' první, psovod přejde za ním.'; }
    cr.push({i:i,t:ty,why:why});
  }
  return {sd:sd,cr:cr};
}

