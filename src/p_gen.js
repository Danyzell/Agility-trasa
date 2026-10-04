/*GEN – generátor parkurů (verze 5). Nejdřív se kreslí plynulá čára, překážky se na ni stavějí:
  - každý úsek dráhy je oblouk, skok stojí napříč dráhou (šikmé skoky), zatáčky se střídají do hadů
    nebo pokračují do smyček, ve vyšších třídách víc ostrých obratů (A1 do 135°, jednou do U; A2 a A3 do 180°);
  - tunely do oblouku a do U, křížení dráhy mimo překážky (A1 0–1, A2 1–2, A3 2–3);
  - vstup do zón a slalomu podle třídy (A1 slalom rovně, A2 z oblouku, A3 i z ostrého obratu);
  - pravidla FCI: 15–22 překážek, aspoň 7 skoků, rozestupy vzdušnou čarou nejvýš 7 m, po dráze psa 5–9 m,
    dráha nesmí vést přes jinou překážku; otočky kolem křídla ve všech třídách, zadní strany skoků v A2 a A3.
  Zdroje: Řád agility FCI 2023, AKC Course Design Checklist, B. Houston (nejdřív čára, pak překážky),
  rozbor finálových parkurů AWC 2024 (většina dráhy v obloucích o poloměru 2,5–4 m).*/
var CFG={
  A1:{W:40,H:20,n:[15,17],gap:[5,6.8],jit:4,tun:[1,2],bent:[1,1],tire:.5,lj:0,rz:0,rj:.05,len:[110,190],
      mix:[.22,.56,.22],tmax:135,t180:1,same:.45,wv:25,wrap:.2,wmin:1,wmax:2,back:0,bmin:0,bmax:0,cross:[0,1],cxB:1.5,trap:[0,1],arc:38},
  A2:{W:40,H:24,n:[17,19],gap:[5,6.8],jit:6,tun:[2,2],bent:[1,2],tire:1,lj:.2,rz:.5,rj:.3,len:[130,205],
      mix:[.12,.48,.4],tmax:180,t180:3,same:.45,wv:55,wrap:.22,wmin:1,wmax:3,back:.15,bmin:0,bmax:1,cross:[1,2],cxB:3,trap:[0,2],arc:46},
  A3:{W:40,H:24,n:[19,22],gap:[4.8,6.6],jit:8,tun:[2,3],bent:[2,3],tire:.8,lj:.35,rz:.85,rj:.3,len:[150,220],
      mix:[.08,.44,.48],tmax:180,t180:4,same:.45,wv:95,wrap:.25,wmin:2,wmax:3,back:.2,bmin:1,bmax:2,cross:[2,3],cxB:4,trap:[1,2],arc:50}
};
var ZN=['dogwalk','aframe','seesaw'], HARD={dogwalk:1,aframe:1,seesaw:1,weave:1};
/* největší změna směru na úseku před překážkou (vstup) a za ní (výstup), ve stupních; slalom podle třídy */
var ENT={jump:180,tire:70,longjump:20,tunnel:150,aframe:55,dogwalk:35,seesaw:40}, EXT={longjump:30};
var D2R=Math.PI/180;
function mb(a){return function(){var t=a+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
function ps(p,a,b){var dx=b.x-a.x,dy=b.y-a.y,l=dx*dx+dy*dy,t=l?cl(((p.x-a.x)*dx+(p.y-a.y)*dy)/l,0,1):0;return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy);}
function cr(a,b,c){return (b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);}
function sd(a,b,c,d){if(cr(a,b,c)*cr(a,b,d)<0&&cr(c,d,a)*cr(c,d,b)<0)return 0;return Math.min(ps(a,c,d),ps(b,c,d),ps(c,a,b),ps(d,a,b));}
function seg(o){var h=DEF[o.type].hl,a=o.rot*Math.PI/180,u=Math.cos(a),v=Math.sin(a);
  return h?[{x:o.x-u*h,y:o.y-v*h},{x:o.x+u*h,y:o.y+v*h}]:[{x:o.x+v*.7,y:o.y-u*.7},{x:o.x-v*.7,y:o.y+u*.7}];}
/* obrys překážky jako lomená čára (tunel do oblouku po kouscích) a vzdálenosti k ní */
function opoly(o){
  if(o.type==='tunnel'&&o.bend){ var L=tunLen(o), out=[]; for(var j=0;j<=8;j++){ var q=tunPt(o,-L/2+L*j/8); out.push({x:q.x,y:q.y}); } return out; }
  return seg(o);
}
function pdist(q,P){ var m=1e9; for(var j=1;j<P.length;j++){ var d=ps(q,P[j-1],P[j]); if(d<m) m=d; } return m; }
function polyD(P,Q){ var m=1e9; for(var i=1;i<P.length;i++) for(var j=1;j<Q.length;j++){ var d=sd(P[i-1],P[i],Q[j-1],Q[j]); if(d<m) m=d; } return m; }
function bbox(P){ var b=[1e9,1e9,-1e9,-1e9]; P.forEach(function(q){ if(q.x<b[0])b[0]=q.x; if(q.y<b[1])b[1]=q.y; if(q.x>b[2])b[2]=q.x; if(q.y>b[3])b[3]=q.y; }); return b; }
/* smyčka kolem křídla musí zůstat na ploše a dál než 1,1 m od ostatních překážek */
function loopOK(pts,obs,pls,skip,W,H){
  for(var j=0;j<pts.length;j++){
    var q=pts[j]; if(q.x<.6||q.x>W-.6||q.y<.6||q.y>H-.6) return false;
    for(var k=0;k<obs.length;k++){ if(obs[k].id===skip) continue; if(pdist(q,pls[k])<1.1) return false; }
  }
  return true;
}
/* šance na otočku: když zbývá málo skoků a minimum ještě není splněné, šance roste */
function turnP(base,min,have,seq,i){
  if(have>=min) return base;
  var rem=0; for(var j=i+1;j<seq.length-1;j++) if((seq[j].t||seq[j])==='jump') rem++;
  return Math.max(base,(min-have)/(rem+1));
}
/* dráha psa mezi dvěma překážkami je stejná Bézierova křivka jako v calc() */
function bzSeg(p,d0,q,d1){var k=Math.max(.8,Math.hypot(q.x-p.x,q.y-p.y)*.4); return [p,{x:p.x+d0.x*k,y:p.y+d0.y*k},{x:q.x-d1.x*k,y:q.y-d1.y*k},q];}
function bzPts(c,n){var o=[]; for(var t=0;t<=n;t++) o.push(bz(c[0],c[1],c[2],c[3],t/n)); return o;}
function plen(pts){var L=0; for(var i=1;i<pts.length;i++) L+=Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y); return L;}
/* body dráhy musí být dost daleko od překážek; výchozí a cílová překážka se kontrolují jen v prostřední části úseku */
function bbHit(a,b,m){ return !(a[0]-m>b[2]||a[2]+m<b[0]||a[1]-m>b[3]||a[3]+m<b[1]); }
function pathClear(pts,obs,pls,lastId,tgtId,newPl,lim){
  var bb=bbox(pts), near=[];
  for(var k=0;k<obs.length;k++){ var P=pls[k]; if(bbHit(bb,P.bb||(P.bb=bbox(P)),lim)) near.push(k); }
  for(var j=0;j<pts.length;j++){
    var q=pts[j], t=j/(pts.length-1);
    for(var z=0;z<near.length;z++){
      var k=near[z], id=obs[k].id, l2=lim;
      if(id===lastId){ if(t<.3) continue; l2=.6; }
      if(id===tgtId){ if(t>.7) continue; l2=.6; }
      if(pdist(q,pls[k])<l2) return false;
    }
    if(newPl&&t<.7&&pdist(q,newPl)<.6) return false;
  }
  return true;
}
function nearPaths(paths,pl,lim){ var bb=bbox(pl);
  for(var k=0;k<paths.length;k++){ var P=paths[k]; if(!bbHit(bb,P.bb||(P.bb=bbox(P)),lim)) continue; for(var z=0;z<P.length;z++) if(pdist(P[z],pl)<lim) return true; }
  return false; }
/* křížení nové dráhy s dřívějšími úseky: počet čistých křížení, -1 = nevhodné (pod úhlem menším než 35° nebo u překážky) */
function crossN(pts,paths,skip,pls,lim){
  var n=0, bb=bbox(pts);
  for(var k=0;k<paths.length-skip;k++){
    var P=paths[k], b2=P.bb||(P.bb=bbox(P));
    if(b2[0]>bb[2]||b2[2]<bb[0]||b2[1]>bb[3]||b2[3]<bb[1]) continue;
    for(var i=1;i<pts.length;i++){ var a=pts[i-1], b=pts[i];
      for(var j=1;j<P.length;j++){ var c=P[j-1], d=P[j], c1=cr(c,d,a), c2=cr(c,d,b);
        if(c1*c2>=0||cr(a,b,c)*cr(a,b,d)>=0) continue;
        var ux=b.x-a.x,uy=b.y-a.y,vx=d.x-c.x,vy=d.y-c.y, cs=Math.abs(ux*vx+uy*vy)/(Math.hypot(ux,uy)*Math.hypot(vx,vy)||1);
        if(cs>.82) return -1;
        var t=c1/(c1-c2), X={x:a.x+ux*t,y:a.y+uy*t};
        for(var m=0;m<pls.length;m++) if(pdist(X,pls[m])<lim) return -1;
        n++;
      }
    }
  }
  return n;
}
function comp(c,R){
  var q=CFG[c], n=q.n[0]+Math.floor(R()*(q.n[1]-q.n[0]+1)), sp=['dogwalk','aframe','seesaw','weave'], i, k, tmp, seq, bad, tries=0;
  for(k=q.tun[0]+Math.floor(R()*(q.tun[1]-q.tun[0]+1));k>0;k--) sp.push('tunnel');
  if(R()<q.tire) sp.push('tire');
  if(R()<q.lj) sp.push('longjump');
  var rz=R()<q.rz; if(rz) sp.push(ZN[Math.floor(R()*3)]);
  do{
    var idx=[]; for(i=1;i<n-1;i++) idx.push(i);
    for(i=idx.length-1;i>0;i--){k=Math.floor(R()*(i+1));tmp=idx[i];idx[i]=idx[k];idx[k]=tmp;}
    seq=[]; for(i=0;i<n;i++) seq.push({t:'jump',ru:false});
    sp.forEach(function(t,j){seq[idx[j]]={t:t,ru:false};});
    bad=false; for(i=0;i<n-1;i++) if(HARD[seq[i].t]&&HARD[seq[i+1].t]) bad=true;
  }while(bad&&++tries<40);
  if(rz){var zt=sp[sp.length-1],oc=[]; seq.forEach(function(s,j){if(s.t===zt)oc.push(j);}); seq[oc[oc.length-1]].ru=true;}
  seq.forEach(function(s,j){if(j>3&&j<n-1&&(s.t==='jump'||s.t==='tunnel')&&R()<(s.t==='jump'?q.rj:q.rj*.6))s.ru=true;});
  return seq;
}
/* znovupoužití překážky, která už na ploše stojí; pes vbíhá bližším koncem (tak dráhu počítá i calc). Vrací možnosti od nejbližší. */
function reuseAt(obs,t,p,route,skipN,dmin,dmax,amax){
  var out=[], hl=DEF[t].hl;
  obs.forEach(function(o){
    if(o.type!==t||route.slice(-skipN).indexOf(o.id)>=0) return;
    var E=ends(o), opts=[[E.A,E.dA,E.B,E.dB],[E.B,{x:-E.dB.x,y:-E.dB.y},E.A,{x:-E.dA.x,y:-E.dA.y}]];
    opts.forEach(function(c){
      var en=c[0], dd=dst(en,p);
      if(hl>0&&dd>dst(p,c[2])) return;
      var ax=Math.atan2(c[1].y,c[1].x), an=Math.atan2(en.y-p.y,en.x-p.x), al=Math.abs(Math.atan2(Math.sin(an-ax),Math.cos(an-ax)));
      if(dd>=dmin&&dd<=dmax&&al<amax) out.push({id:o.id,en:en,dir:c[1],ex:c[2],dx:c[3],dd:dd});
    });
  });
  return out.sort(function(a,b){return a.dd-b.dd;});
}
/* nová překážka tak, aby do ní pes vbíhal v bodě en směrem hE (radiány); b = ohyb tunelu ve stupních */
function mkObs(id,t,en,hE,b){
  var hl=DEF[t].hl, rot, o;
  if(t==='tunnel'&&b){
    rot=Math.round((hE/D2R-b/2)/5)*5; o={id:id,type:t,x:0,y:0,rot:(rot%360+360)%360,bend:b};
    var q=tunPt(o,-tunLen(o)/2); o.x=r1(en.x-q.x); o.y=r1(en.y-q.y); return o;
  }
  rot=Math.round(hE/D2R/5)*5; rot=(rot%360+360)%360; var a=rot*D2R;
  return {id:id,type:t,x:r1(en.x+hl*Math.cos(a)),y:r1(en.y+hl*Math.sin(a)),rot:rot};
}
function inField(P,m,W,H){ for(var j=0;j<P.length;j++){ var q=P[j]; if(q.x<m||q.x>W-m||q.y<m||q.y>H-m) return false; } return true; }
/* společné skládání trasy pro vestavěné parkury i generátor sekvencí */
function layCourse(o,R){
  var W=o.W, H=o.H, mg=o.mg, seq=o.seq.map(function(s){return typeof s==='string'?{t:s,ru:false}:s;});
  var mix=o.mix||[.2,.5,.3], tmax=o.tmax||o.turn||120, t180=o.t180==null?99:o.t180, same=o.same==null?.45:o.same,
      wv=o.wv||60, bentR=o.bent||[0,o.bentMax==null?1:o.bentMax], cxMax=o.cxMax==null?2:o.cxMax, cxB=o.cxB||1.5, jit=(o.jit==null?4:o.jit)*D2R;
  var obs=[], pls=[], route=[], tus=[], paths=[], lens=[], nodes=0, cw=0, cb=0, nb=0, nx=0, n180=0, LOOP=WL+Math.PI*WR;
  var nTun=seq.filter(function(s){return s.t==='tunnel'&&!s.ru;}).length;
  var x0=R()<.5, a0=x0?R()*.8-.4:Math.PI+R()*.8-.4;
  var f0={id:1,type:seq[0].t,x:r1(x0?mg+1.8+R()*W*.1:W-mg-1.8-R()*W*.1),y:r1(mg+2.8+R()*Math.max(0,H-2*mg-5.6)),rot:(Math.round(a0*36/Math.PI)*5+360)%360};
  obs.push(f0); pls.push(opoly(f0)); route.push(1); tus.push(null);
  var remJ=[]; for(var j=seq.length;j>=0;j--) remJ[j]=(remJ[j+1]||0)+(j>=1&&j<seq.length-1&&seq[j].t==='jump'&&!seq[j].ru?1:0);
  function typeOf(id){ for(var j=0;j<obs.length;j++) if(obs[j].id===id) return obs[j].type; return 'jump'; }
  function reuseOf(i){ /* 0 = ne, 1 = zkusit, 2 = musí (vybavení došlo) */
    var s=seq[i];
    if(o.eq){ var used=obs.filter(function(x){return x.type===s.t;}).length, cap=o.eq[s.t]!=null?o.eq[s.t]:99;
      if(used>0&&used>=cap) return 2; return used>0&&R()<(o.reuse||0)?1:0; }
    return s.ru?1:0;
  }
  /* změna směru na úseku: rovně / oblouk / ostrý obrat podle třídy; u okraje plochy se stáčí dovnitř */
  function pickTurn(p,h,cap,sg){
    var r=R(), lo, hi, capD=cap/D2R;
    if(r<mix[0]){lo=0;hi=12;} else if(r<mix[0]+mix[1]){lo=22;hi=75;} else {lo=75;hi=tmax;}
    if(n180>=t180&&hi>135) hi=135;
    if(hi>capD){hi=capD; if(lo>hi*.6) lo=hi*.3;}
    var s2=R()<same?sg:-sg, cx=W/2-p.x, cy=H/2-p.y, ln=Math.hypot(cx,cy)||1, dh=(Math.cos(h)*cx+Math.sin(h)*cy)/ln;
    if((Math.min(p.x,W-p.x)<6||Math.min(p.y,H-p.y)<5)&&dh<.3&&R()<.75){ s2=(Math.cos(h)*cy-Math.sin(h)*cx)>=0?1:-1; lo=Math.max(lo,Math.min(hi,45)); }
    return s2*(lo+R()*(hi-lo))*D2R;
  }
  function wantBent(){ if(nb>=bentR[1]) return 0; var left=nTun-obs.filter(function(x){return x.type==='tunnel';}).length; return nb<bentR[0]?Math.min(1,(bentR[0]-nb)/Math.max(1,left)+.25):.35; }
  function cands(i,p,hv,after,pe,pre,sg){
    var s=seq[i], hl=DEF[s.t].hl, out=[], pre2=[], last=route[route.length-1], ru=reuseOf(i), h=Math.atan2(hv.y,hv.x);
    if(ru){
      var bs=o.eq?reuseAt(obs,s.t,p,route,2,Math.max(2.5,o.gap[0]-.8),o.gap[1]+3,ru===2?1.6:1.1):reuseAt(obs,s.t,p,route,3,3.5,8.5,1.3);
      for(var bi=0;bi<bs.length&&bi<6&&pre2.length<3;bi++){ var b=bs[bi], bp=bzPts(bzSeg(p,hv,b.en,b.dir),14), bl=pre+plen(bp), bx;
        if(!hl){ var sj=(b.en.x-p.x-hv.x*1.5)*b.dir.x+(b.en.y-p.y-hv.y*1.5)*b.dir.y; if(sj<.3) continue; } /* směr skoku musí sedět s tím, jak ho určí calc */
        if(dst(b.en,pe)<=o.gmax&&bl>=o.pmin&&bl<=o.pmax&&inField(bp,.3,W,H)&&pathClear(bp,obs,pls,last,b.id,null,o.pc)&&(bx=crossN(bp,paths,1,pls,1))>=0)
          pre2.push({re:b,path:bp,xn:bx,sg:sg,L:bl}); }
      if(ru===2) return pre2;
    }
    var tryB=s.t==='jump'&&!s.ru&&!after&&i>1&&i<seq.length-1&&cb<o.bmax&&R()<turnP(o.back,o.bmin,cb,seq,i);
    var cap=Math.min(tmax,s.t==='weave'?wv:(ENT[s.t]||180),EXT[typeOf(last)]||180)*D2R;
    if(after) cap=Math.min(cap,50*D2R); if(i===1) cap=Math.min(cap,60*D2R);
    var pB=s.t==='tunnel'&&!after?wantBent():0;
    for(var tr=0;tr<(tryB?70:50)&&out.length<(tryB?7:5);tr++){
      var bkT=tryB&&tr%2===0, dl, g, bnd=0;
      if(bkT){ dl=(R()-.5)*80*D2R; g=2.8+R(); }
      else {
        dl=pickTurn(p,h,cap,sg);
        var ad=Math.abs(dl), fa=ad>1e-3?(ad/2)/Math.sin(ad/2):1, g0=after?2.6:o.gap[0], g1=after?4.4:o.gap[1],
            gl=Math.max(g0,(o.pmin-pre)/fa+.2), gh=Math.min(g1,(o.pmax-pre)/fa-.4);
        if(gh<gl) continue; g=gl+R()*(gh-gl);
        if(pB&&R()<pB){ var bm=[90,135,180][Math.floor(R()*(tmax>=180?3:2))]; bnd=(R()<.6?(dl>=0?-1:1):(R()<.5?1:-1))*bm; }
      }
      /* tětiva míří doprostřed oblouku; u obratu přes 150° se překážka posune dozadu, aby pes na skok přibíhal zezadu */
      var ad2=Math.abs(dl), ch=(ad2<=150*D2R?h+dl/2:h+dl-(dl>0?75:-75)*D2R)+(R()-.5)*2*jit, en={x:p.x+g*Math.cos(ch),y:p.y+g*Math.sin(ch)};
      var nb2=mkObs(obs.length+1,s.t,en,h+dl+(R()-.5)*2*jit,bnd), E=ends(nb2), pl=opoly(nb2), far=false;
      if(hl>0&&dst(p,E.A)>dst(p,E.B)){ if(!bnd) continue; far=true; }
      if(!hl&&((E.A.x-p.x-hv.x*1.5)*E.dA.x+(E.A.y-p.y-hv.y*1.5)*E.dA.y)<.25*g) continue; /* směr skoku musí být jednoznačný (calc ho určuje podle toho, odkud pes přibíhá) */
      if(!inField(pl,mg,W,H)) continue;
      var u=E.dA, bk=null, tgt=E.A, tgd=E.dA, extra=0, room=9, bad=false;
      if(bkT){
        var f={x:-u.x,y:-u.y}, sd2=R()<.5?'L':'R', bg=backG(nb2,f,sd2), lp=loopPts(bg.pcs);
        if(!loopOK(lp,obs,pls,-1,W,H)) continue;
        bk={t:'b'+sd2,f:f,pts:lp}; tgt=bg.q; extra=LOOP;
      }
      if(dst(E.A,pe)>o.gmax) continue;
      if(Math.abs(dl)>135*D2R&&n180>=t180) continue;
      var pts=bzPts(bzSeg(p,hv,tgt,tgd),14), L=pre+plen(pts)+extra;
      if(L<o.pmin||L>o.pmax||!inField(pts,.3,W,H)||!pathClear(pts,obs,pls,last,-1,pl,o.pc)) continue;
      var pb=bbox(pl);
      for(var k=0;k<obs.length&&!bad;k++){
        var P2=pls[k]; if(!bbHit(pb,P2.bb||(P2.bb=bbox(P2)),9)) continue;
        var dm=polyD(pl,P2); if(dm<o.cl) bad=true; else if(dm<room) room=dm;
      }
      if(bad||nearPaths(paths,pl,o.pc)) continue;
      var full=bk?pts.concat(bk.pts):pts, xn=crossN(full,paths,1,pls.concat([pl]),1);
      if(xn<0) continue;
      var exN=bk?{x:nb2.x,y:nb2.y}:E.B, exD=bk?bk.f:E.dB, ray=0;
      for(var z=1;z<=12;z++){ var rq={x:exN.x+exD.x*z,y:exN.y+exD.y*z}; if(rq.x<mg||rq.x>W-mg||rq.y<mg||rq.y>H-mg) break; ray=z; }
      var sc=Math.min(room,o.scR)+Math.min(exN.x,W-exN.x,exN.y,H-exN.y,o.scE)+.25*ray+R()*2.5+(bk?3:0)+(bnd&&nb<bentR[0]?3:0)+
        (xn>0?(nx+xn<=cxMax?cxB*xn:-6):0);
      out.push({o:nb2,pl:pl,ex:exN,exD:exD,bk:bk,far:far,xn:xn,L:L,a180:Math.abs(dl)>135*D2R,path:full,sc:sc,sg:Math.abs(dl)>15*D2R?(dl>0?1:-1):sg});
    }
    out.sort(function(x,y){return y.sc-x.sc;});
    return pre2.concat(out);
  }
  function go(i,p,hv,after,pe,pre,sg){
    if(i===seq.length) return cw>=o.wmin&&cb>=o.bmin;
    if(++nodes>o.budget||o.wmin-cw+o.bmin-cb>remJ[i]) return false;
    var cs=cands(i,p,hv,after,pe,pre,sg);
    for(var k=0;k<cs.length;k++){
      var cd=cs[k];
      if(cd.re){
        route.push(cd.re.id); tus.push(null); paths.push(cd.path); lens.push(cd.L); nx+=cd.xn;
        if(go(i+1,cd.re.ex,cd.re.dx,false,cd.re.ex,0,cd.sg)) return true;
        route.pop(); tus.pop(); paths.pop(); lens.pop(); nx-=cd.xn; continue;
      }
      obs.push(cd.o); pls.push(cd.pl); route.push(cd.o.id); tus.push(cd.bk?cd.bk.t:cd.far?'f':null); paths.push(cd.path); lens.push(cd.L);
      if(cd.bk) cb++; if(cd.o.bend) nb++; if(cd.a180) n180++; nx+=cd.xn;
      if(cd.o.type==='jump'&&!cd.bk&&i<seq.length-1&&cw<o.wmax&&R()<turnP(o.wrap,o.wmin,cw,seq,i)){
        var f=cd.exD, sds=R()<.5?['L','R']:['R','L'];
        for(var z=0;z<2&&nodes<=o.budget;z++){
          var wg=wrapG(cd.o,f,sds[z]), wp=loopPts(wg.pcs);
          if(!loopOK(wp,obs,pls,cd.o.id,W,H)||crossN(wp,paths,1,[],0)!==0) continue;
          tus[tus.length-1]='w'+sds[z]; cw++; paths.push(wp);
          if(go(i+1,wg.q,{x:-f.x,y:-f.y},true,{x:cd.o.x,y:cd.o.y},LOOP,sds[z]==='L'?-1:1)) return true;
          cw--; paths.pop(); tus[tus.length-1]=null;
        }
      }
      if(go(i+1,cd.ex,cd.exD,false,cd.ex,0,cd.sg)) return true;
      if(cd.bk) cb--; if(cd.o.bend) nb--; if(cd.a180) n180--; nx-=cd.xn;
      obs.pop(); pls.pop(); route.pop(); tus.pop(); paths.pop(); lens.pop();
    }
    return false;
  }
  var a1=f0.rot*D2R;
  if(!go(1,{x:f0.x,y:f0.y},{x:Math.cos(a1),y:Math.sin(a1)},false,{x:f0.x,y:f0.y},0,R()<.5?1:-1)) return null;
  return {obs:obs,route:route,turns:tus.slice(),lens:lens.slice()};
}
var CL=2.3;
function place(c,R){
  var q=CFG[c], g=layCourse({W:q.W,H:q.H,mg:1.5,seq:comp(c,R),mix:q.mix,tmax:q.tmax,t180:q.t180,same:q.same,wv:q.wv,gap:q.gap,jit:q.jit,
    cl:CL,pc:1,gmax:7,pmin:5,pmax:8.9,bent:q.bent,cxMax:q.cross[1],cxB:q.cxB,
    wrap:q.wrap,wmin:q.wmin,wmax:q.wmax,back:q.back,bmin:q.bmin,bmax:q.bmax,budget:700,scR:7,scE:7},R);
  if(!g) return null;
  g.W=q.W; g.H=q.H; g.n=g.route.length; g.len=calc(g.obs,g.route,g.turns).total;
  return g;
}
/* výběr: z mnoha vygenerovaných tras se berou ty, které nejlépe sedí na cíle třídy (oblouky, křížení, tunely do oblouku, nástrahy) */
function classScore(f,q){
  var s=0, rg=function(v,a){return v<a[0]?a[0]-v:v>a[1]?v-a[1]:0;};
  s-=Math.max(0,q.arc-f.arc)*.4; s-=rg(f.cross,q.cross)*3; s-=rg(f.bent,q.bent)*3; s-=rg(f.traps,q.trap)*1.5;
  s-=Math.max(0,f.str-(100-q.arc-8))*.2; s+=Math.min(f.alt,6)*.3;
  return s;
}
function genClass(c,want){
  var L=[], q=CFG[c], ci={A1:0,A2:1,A3:2}[c], pool=[], n=want||30;
  for(var k=0;pool.length<n*3&&k<n*120;k++){
    var g=place(c,mb(ci*7919+k*104729+11));
    if(!g||g.len<q.len[0]||g.len>q.len[1]) continue;
    g.fs=flowStats(g.obs,g.route,g.turns); if(g.fs.max>q.tmax+100) continue;
    if(handSides(g,calc(g.obs,g.route,g.turns),g.fs).cr.length<2) continue; /* FCI: aspoň 2 změny strany psovoda */
    g.sc=classScore(g.fs,q); g.k=k; pool.push(g);
  }
  pool.sort(function(a,b){return b.sc-a.sc;});
  pool.slice(0,n).sort(function(a,b){return a.k-b.k;}).forEach(function(g){ g.name=c+'-'+('0'+(L.length+1)).slice(-2); g.id=g.name+'-v5'; g.cls=c; L.push(g); });
  return L;
}
