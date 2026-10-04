
/* ---------- čtení trasy z plánku: čísla v kroužcích → pořadí, přiřazení k překážkám, směry podle nakreslené čáry ----------
   Vstup: plánek srovnaný na plochu (ImageData s px na metr), rozpoznané překážky v metrech.
   1) kroužky s čísly (součásti tvaru prstence, zbytek Houghovou transformací se známým poloměrem),
   2) číslice podle šablon 16 písem, čísla 1..N přiřazena najednou (maďarská metoda),
   3) číslo → nejbližší překážka, překážky bez čísla dostanou číslo od souseda s více čísly,
   4) směry skoků, vstupy do tunelů a zón a otočky: vybírá se varianta, jejíž dráha nejlépe sedí na nakreslenou čáru. */
var PRR=(function(){
var GX=8,GY=12,NC=GX*GY,TPLS=__TPLS__,TPL=null;
function tpl(){ if(TPL) return TPL; TPL=[]; TPLS.forEach(function(s){ for(var k=0;k<10;k++){ var t=s.substr(k*98,98),v=new Float32Array(NC); for(var i=0;i<NC;i++) v[i]=(t.charCodeAt(2+i)-48)/9; TPL.push({k:k,a:(+t.substr(0,2))/50,v:v}); } }); return TPL; }
function gray(D){ var n=D.width*D.height,L=new Float32Array(n),d=D.data; for(var i=0,j=0;i<n;i++,j+=4) L[i]=(d[j]+d[j+1]+d[j+2])/3; return L; }
/* souvislé oblasti v masce (8 sousedů) */
function comps(M,w,h){ var lab=new Int32Array(w*h),st=new Int32Array(w*h),out=[],n=0;
  for(var i0=0;i0<w*h;i0++){ if(!M[i0]||lab[i0]) continue; n++; var sp=0,c={id:n,px:[],x0:1e9,y0:1e9,x1:-1,y1:-1}; st[sp++]=i0; lab[i0]=n;
    while(sp){ var i=st[--sp],x=i%w,y=(i-x)/w; c.px.push(i); if(x<c.x0)c.x0=x; if(x>c.x1)c.x1=x; if(y<c.y0)c.y0=y; if(y>c.y1)c.y1=y;
      for(var dy=-1;dy<=1;dy++){ var yy=y+dy; if(yy<0||yy>=h) continue; for(var dx=-1;dx<=1;dx++){ var xx=x+dx; if(xx<0||xx>=w) continue; var k=yy*w+xx; if(M[k]&&!lab[k]){ lab[k]=n; st[sp++]=k; } } } }
    out.push(c); }
  return {lab:lab,list:out}; }
/* číslice: mřížka tmavosti 8×12 v obdélníku kolem znaku + poměr stran */
function feat(Dk,w,x0,y0,x1,y1){ var ww=x1-x0+1,hh=y1-y0+1,v=new Float32Array(NC);
  for(var gy=0;gy<GY;gy++) for(var gx=0;gx<GX;gx++){ var sx0=x0+ww*gx/GX,sx1=x0+ww*(gx+1)/GX,sy0=y0+hh*gy/GY,sy1=y0+hh*(gy+1)/GY,sm=0,n=0;
    for(var yy=Math.floor(sy0);yy<Math.ceil(sy1);yy++) for(var xx=Math.floor(sx0);xx<Math.ceil(sx1);xx++){ var wx=Math.min(xx+1,sx1)-Math.max(xx,sx0),wy=Math.min(yy+1,sy1)-Math.max(yy,sy0); if(wx<=0||wy<=0) continue; sm+=wx*wy*Dk[yy*w+xx]; n+=wx*wy; }
    v[gy*GX+gx]=n?sm/n:0; }
  return {v:v,a:ww/hh}; }
function classify(g){ var c=[1e9,1e9,1e9,1e9,1e9,1e9,1e9,1e9,1e9,1e9];
  tpl().forEach(function(t){ var d=0; for(var i=0;i<NC;i++){ var e=g.v[i]-t.v[i]; d+=e*e; } d=d/NC+.12*Math.pow(Math.log(g.a/t.a),2); if(d<c[t.k]) c[t.k]=d; });
  return c; }
/* maďarská metoda: minimální součet nákladů, čtvercová matice n×n */
function hungarian(C){ var n=C.length,u=new Float64Array(n+1),v=new Float64Array(n+1),p=new Int32Array(n+1),way=new Int32Array(n+1);
  for(var i=1;i<=n;i++){ p[0]=i; var j0=0,minv=new Float64Array(n+1).fill(Infinity),used=new Uint8Array(n+1);
    do{ used[j0]=1; var i0=p[j0],delta=Infinity,j1=0;
      for(var j=1;j<=n;j++) if(!used[j]){ var cur=C[i0-1][j-1]-u[i0]-v[j]; if(cur<minv[j]){ minv[j]=cur; way[j]=j0; } if(minv[j]<delta){ delta=minv[j]; j1=j; } }
      for(j=0;j<=n;j++){ if(used[j]){ u[p[j]]+=delta; v[j]-=delta; } else minv[j]-=delta; }
      j0=j1; } while(p[j0]!==0);
    do{ var jj=way[j0]; p[j0]=p[jj]; j0=jj; } while(j0); }
  var a=new Int32Array(n); for(j=1;j<=n;j++) if(p[j]) a[p[j]-1]=j-1; return a; }
/* dlouhé tenké vodorovné a svislé čáry (mřížka, okraje) pryč z masky; křížení s jinými tahy zůstanou */
function unline(M,w,h,minLen){
  /* dlouhé vodorovné a svislé běhy tmavých bodů, které jsou tenké (nejvýš 4 px napříč): mřížka a okraje */
  var R=new Uint8Array(w*h),x,y,i,k;
  function thin(i,st){ var a=0,b=0; while(a<5&&i-(a+1)*st>=0&&M[i-(a+1)*st]) a++; while(b<5&&i+(b+1)*st<w*h&&M[i+(b+1)*st]) b++; return a+b+1<=4; }
  for(y=0;y<h;y++){ x=0; while(x<w){ if(!M[y*w+x]){ x++; continue; } var x0=x; while(x<w&&M[y*w+x]) x++; if(x-x0>=minLen) for(k=x0;k<x;k++){ i=y*w+k; if(thin(i,w)) R[i]=1; } } }
  for(x=0;x<w;x++){ y=0; while(y<h){ if(!M[y*w+x]){ y++; continue; } var y0=y; while(y<h&&M[y*w+x]) y++; if(y-y0>=minLen) for(k=y0;k<y;k++){ i=k*w+x; if(thin(i,1)) R[i]=1; } } }
  var O=new Uint8Array(w*h); for(i=0;i<w*h;i++) O[i]=M[i]&&!R[i]?1:0; return O; }
/* ---------- kroužky ---------- */
function ringAt(L,w,h,cx,cy,R,thr){ /* podíl tmavých bodů na kružnici (±1 px) */
  var hit=0,N=72; for(var k=0;k<N;k++){ var a=k*Math.PI*2/N,ok=0; for(var dr=-1.5;dr<=1.5;dr+=.75){ var x=Math.round(cx+Math.cos(a)*(R+dr)),y=Math.round(cy+Math.sin(a)*(R+dr)); if(x>=0&&y>=0&&x<w&&y<h&&L[y*w+x]<thr){ ok=1; break; } } hit+=ok; }
  return hit/N; }
function inside(L,w,h,cx,cy,r,thr){ var n=0,dk=0; for(var y=Math.max(0,Math.floor(cy-r));y<=Math.min(h-1,Math.ceil(cy+r));y++) for(var x=Math.max(0,Math.floor(cx-r));x<=Math.min(w-1,Math.ceil(cx+r));x++){ if((x-cx)*(x-cx)+(y-cy)*(y-cy)>r*r) continue; n++; if(L[y*w+x]<thr) dk++; } return n?dk/n:0; }
function rings(L,w,h,s,thr){
  var M0=new Uint8Array(w*h); for(var i=0;i<w*h;i++) M0[i]=L[i]<thr?1:0;
  var M=unline(M0,w,h,Math.round(1.6*s)), C=comps(M,w,h),iso=[],Rmin=.22*s,Rmax=.75*s;
  C.list.forEach(function(c){ var bw=c.x1-c.x0+1,bh=c.y1-c.y0+1; if(bw<2*Rmin||bw>2*Rmax||Math.abs(bw-bh)>.18*Math.max(bw,bh)) return;
    var cx=(c.x0+c.x1)/2,cy=(c.y0+c.y1)/2,R=(bw+bh)/4-.5,ok=0,bins=new Uint8Array(24);
    c.px.forEach(function(i){ var x=i%w,y=(i-x)/w,d=Math.hypot(x-cx,y-cy); if(Math.abs(d-R)<Math.max(1.6,.14*R)){ ok++; bins[Math.floor((Math.atan2(y-cy,x-cx)+Math.PI)/(2*Math.PI)*24)%24]=1; } });
    var cov=0; for(var b=0;b<24;b++) cov+=bins[b];
    if(ok>=.8*c.px.length&&cov>=20) iso.push({x:cx,y:cy,R:R,src:'c'}); });
  if(!iso.length) return {R:0,list:[]};
  var Rs=iso.map(function(r){return r.R;}).sort(function(a,b){return a-b;}),R0=Rs[Math.floor(Rs.length/2)];
  iso=iso.filter(function(r){return Math.abs(r.R-R0)<=Math.max(1.5,.15*R0);});
  /* kroužky dotčené čarou: hlasování středů ze všech tmavých bodů pro poloměr R0 */
  var A=new Float32Array(w*h),N=Math.max(24,Math.round(2*Math.PI*R0)),dx=[],dy=[];
  for(var k=0;k<N;k++){ dx.push(Math.round(Math.cos(k*2*Math.PI/N)*R0)); dy.push(Math.round(Math.sin(k*2*Math.PI/N)*R0)); }
  for(var y=0;y<h;y++) for(var x=0;x<w;x++){ if(!M[y*w+x]) continue; for(k=0;k<N;k++){ var X=x+dx[k],Y=y+dy[k]; if(X>=0&&Y>=0&&X<w&&Y<h) A[Y*w+X]+=1; } }
  var found=iso.slice(),minV=.55*N,cand=[];
  for(y=1;y<h-1;y++) for(x=1;x<w-1;x++){ var v=A[y*w+x]; if(v<minV) continue; var mx=true;
    for(var oy=-2;oy<=2&&mx;oy++) for(var ox=-2;ox<=2;ox++){ if((ox||oy)&&y+oy>=0&&y+oy<h&&x+ox>=0&&x+ox<w&&A[(y+oy)*w+x+ox]>v){ mx=false; break; } }
    if(!mx||found.some(function(r){return Math.hypot(r.x-x,r.y-y)<R0*1.2;})) continue;
    /* upřesnění středu: kde kružnice nejlépe sedí na tmavé body */
    var bx=x,by=y,bs=ringAt(L,w,h,x,y,R0,thr),rr=Math.max(2,Math.round(.3*R0));
    for(var ty=-rr;ty<=rr;ty++) for(var tx=-rr;tx<=rr;tx++){ var sc=ringAt(L,w,h,x+tx,y+ty,R0,thr); if(sc>bs+1e-9){ bs=sc; bx=x+tx; by=y+ty; } }
    if(bs<.7) continue;
    var ins=inside(L,w,h,bx,by,.72*R0,thr); if(ins<.02||ins>.4) continue;
    if(inside(L,w,h,bx,by,R0+3,thr)>.55) continue;
    cand.push({x:bx,y:by,R:R0,src:'h',sc:bs,v:v}); }
  /* nejlépe sedící kružnice mají přednost před sousedními falešnými */
  cand.sort(function(a,b){return b.sc-a.sc||b.v-a.v;});
  cand.forEach(function(c){ if(!found.some(function(r){return Math.hypot(r.x-c.x,r.y-c.y)<R0*1.2;})) found.push(c); });
  return {R:R0,list:found}; }
/* číslice uvnitř kroužku */
function ringDigits(L,w,h,r,thr){
  var ri=.8*r.R,x0=Math.max(0,Math.floor(r.x-ri)),y0=Math.max(0,Math.floor(r.y-ri)),x1=Math.min(w-1,Math.ceil(r.x+ri)),y1=Math.min(h-1,Math.ceil(r.y+ri)),cw=x1-x0+1,ch=y1-y0+1;
  var lo=255,hi=0,vals=[]; for(var y=y0;y<=y1;y++) for(var x=x0;x<=x1;x++){ if(Math.hypot(x-r.x,y-r.y)>ri) continue; var v=L[y*w+x]; vals.push(v); if(v<lo) lo=v; }
  vals.sort(function(a,b){return a-b;}); hi=vals[Math.floor(vals.length*.8)]||255; if(hi-lo<40) return null;
  var Dk=new Float32Array(cw*ch),M=new Uint8Array(cw*ch);
  for(y=0;y<ch;y++) for(x=0;x<cw;x++){ var X=x0+x,Y=y0+y; if(Math.hypot(X-r.x,Y-r.y)>ri) continue; var dk=Math.max(0,Math.min(1,(hi-L[Y*w+X])/(hi-lo))); Dk[y*cw+x]=dk; M[y*cw+x]=dk>.45?1:0; }
  var C=comps(M,cw,ch).list.filter(function(c){ var gh=c.y1-c.y0+1; return gh>=.5*r.R&&gh<=1.75*r.R&&c.px.length>=4; });
  if(!C.length||C.length>3) return null;
  C.sort(function(a,b){return a.x0-b.x0;});
  var H0=Math.max.apply(null,C.map(function(c){return c.y1-c.y0+1;}));
  C=C.filter(function(c){return c.y1-c.y0+1>=.6*H0;});
  /* číslo stojí uprostřed kroužku; jinak je to jiný tvar (smyčka čáry kolem kusu překážky) */
  var bx0=1e9,by0=1e9,bx1=-1,by1=-1; C.slice(0,2).forEach(function(c){ if(c.x0<bx0)bx0=c.x0; if(c.y0<by0)by0=c.y0; if(c.x1>bx1)bx1=c.x1; if(c.y1>by1)by1=c.y1; });
  if(Math.abs(x0+(bx0+bx1)/2-r.x)>.35*r.R||Math.abs(y0+(by0+by1)/2-r.y)>.35*r.R||by1-by0+1<.6*r.R||by1-by0+1>1.6*r.R) return null;
  function glyph(c,xa,xb){ var D2=new Float32Array(cw*ch),gy0=1e9,gy1=-1,gx0=1e9,gx1=-1; c.px.forEach(function(i){ var x=i%cw,y=(i-x)/cw; if(x<xa||x>xb) return; D2[i]=Dk[i]; if(x<gx0)gx0=x; if(x>gx1)gx1=x; if(y<gy0)gy0=y; if(y>gy1)gy1=y; });
    if(gx1<0) return null; return classify(feat(D2,cw,gx0,gy0,gx1,gy1)); }
  var G=[];
  if(C.length===1&&(C[0].x1-C[0].x0+1)/(C[0].y1-C[0].y0+1)>.95){ /* dvě slepené číslice: řez v nejsvětlejším sloupci uprostřed */
    var c=C[0],bw=c.x1-c.x0+1,best=-1,bv=1e9; for(x=c.x0+Math.round(bw*.3);x<=c.x0+Math.round(bw*.7);x++){ var sm=0; for(y=c.y0;y<=c.y1;y++) sm+=M[y*cw+x]; if(sm<bv){ bv=sm; best=x; } }
    G=[glyph(c,c.x0,best-1),glyph(c,best+1,c.x1)]; }
  else G=C.slice(0,2).map(function(c){return glyph(c,c.x0,c.x1);});
  if(G.some(function(g){return !g;})) return null;
  G.box=[x0+bx0,y0+by0,x0+bx1,y0+by1]; return G; }
/* čísla 1..N: náklady každého kroužku na každé číslo, pak jedno přiřazení pro všechny */
function numbers(L,w,h,s,opt){
  opt=opt||{}; var thr=opt.thr||150,RR=rings(L,w,h,s,thr),Rg=[];
  var others=[]; RR.list.forEach(function(r){ var G=ringDigits(L,w,h,r,thr); if(!G||!G.length){ others.push({x:r.x/s,y:r.y/s,R:r.R/s}); return; } if(G.some(function(g){return Math.min.apply(null,g)>.14;})) return; r.G=G; r.box=G.box; Rg.push(r); });
  var BIG=3,C,a,n;
  /* přiřazení čísel 1..n; kroužek, který dostal nesmyslné číslo (vysoká cena), není číslo trasy a vypadne */
  for(var guard=0;guard<5;guard++){ n=Rg.length; if(!n) return {R:RR.R,list:[],others:others};
    C=Rg.map(function(r){ var row=[]; for(var lab=1;lab<=n;lab++){ var c=BIG;
        if(r.G.length===1&&lab<10) c=r.G[0][lab]; else if(r.G.length===2&&lab>=10&&lab<100) c=r.G[0][Math.floor(lab/10)]+r.G[1][lab%10];
        row.push(c); } return row; });
    a=hungarian(C); var worst=-1,wc=.25; for(var i=0;i<n;i++){ if(C[i][a[i]]>wc){ wc=C[i][a[i]]; worst=i; } }
    if(worst<0||guard===4) break; Rg.splice(worst,1); } /* v posledním kole už nevyřazovat: C, a a n by pak neseděly na Rg */
  /* jistota čísla: o kolik by se zhoršilo nejlepší přiřazení všech čísel, kdyby tenhle kroužek dostal jiné číslo */
  var tot=0; for(var i1=0;i1<n;i1++) tot+=C[i1][a[i1]];
  var reg=Rg.map(function(r,i){ var C2=C.map(function(row){return row.slice();}); C2[i][a[i]]=BIG*4; var a2=hungarian(C2),t2=0; for(var j=0;j<n;j++) t2+=C2[j][a2[j]]; return t2-tot; });
  return {R:RR.R,list:Rg.map(function(r,i){ var lab=a[i]+1,own=C[i][a[i]],alt=Infinity; C[i].forEach(function(c,j){ if(j!==a[i]&&c<alt) alt=c; });
    return {x:r.x/s,y:r.y/s,R:r.R/s,n:lab,cost:own,margin:alt-own,regret:reg[i],g:r.G.length,src:r.src,box:r.box?r.box.map(function(v){return v/s;}):null}; }),others:others}; }
/* ---------- přiřazení čísel k překážkám ---------- */
var HW={jump:.25,tire:.5,longjump:.6,tunnel:.35,dogwalk:.2,aframe:.6,seesaw:.2,weave:.15};
function obsDist(p,o){ return pdist(p,opoly(o))-(HW[o.type]||.2); }
function attach(nums,obs){
  var by={},cnt={},A=nums.map(function(q){ var bd=1e9,bo=null; obs.forEach(function(o){ var d=obsDist(q,o); if(d<bd){ bd=d; bo=o; } }); return {q:q,o:bo,d:bd}; });
  A.forEach(function(x){ if(x.o&&x.d<2.6) cnt[x.o.id]=(cnt[x.o.id]||0)+1; else x.o=null; });
  /* překážka bez čísla: převezme nejbližší číslo od překážky, která má čísel víc, když je skoro stejně blízko */
  obs.forEach(function(o){ if(cnt[o.id]) return; var bx=null,bd=1e9; A.forEach(function(x){ if(!x.o||cnt[x.o.id]<2) return; var d=obsDist(x.q,o); if(d<1.6&&d-x.d<.9&&d<bd){ bd=d; bx=x; } });
    if(bx){ cnt[bx.o.id]--; bx.o=o; bx.d=bd; cnt[o.id]=1; bx.moved=true; } });
  A.sort(function(a,b){return a.q.n-b.q.n;});
  return A; }
/* číslo, u kterého první čtení (obrázek bez kroužků) nenašlo žádnou překážku: vezme se překážka z druhého čtení
   (obrázek s kroužky), pokud tam je a není to jen samotný kroužek (střed v kroužku, křídlo skoku na kroužku) */
function needRescue(obs,N){ return (N.list||[]).some(function(q){ return !obs.some(function(o){ return obsDist(q,o)<2.6; }); }); }
function rescue(obs,extra,N){ var add=[],L=N.list||[];
  L.forEach(function(q){ if(obs.concat(add).some(function(o){return obsDist(q,o)<2.6;})) return;
    var best=null,bd=2.6;
    extra.forEach(function(u){
      if(L.some(function(r){ var d=Math.hypot(r.x-u.x,r.y-u.y); return d<.35||d<.6&&(u.type==='longjump'||u.type==='weave'); })) return;
      if(u.type==='jump'){ var a=(u.rot-90)*Math.PI/180,hb=(u.bar||1.9)/2,e1={x:u.x+Math.cos(a)*hb,y:u.y+Math.sin(a)*hb},e2={x:u.x-Math.cos(a)*hb,y:u.y-Math.sin(a)*hb};
        if(L.some(function(r){ return Math.min(dst(r,e1),dst(r,e2))<r.R*1.15; })) return; }
      var pu=opoly(u); if(obs.concat(add).some(function(c){ return polyD(pu,opoly(c))<.6; })) return;
      var d=obsDist(q,u); if(d<bd){ bd=d; best=u; } });
    if(best) add.push(best); });
  return add; }
/* ---------- nakreslená čára: tmavé body mimo mřížku, překážky a kroužky; vzdálenostní mapa ---------- */
function mpoly(o){ if(o.type==='jump'){ var a=o.rot*Math.PI/180,u=Math.cos(a),v=Math.sin(a); return [{x:o.x+v*1.3,y:o.y-u*1.3},{x:o.x-v*1.3,y:o.y+u*1.3}]; }
  var P=opoly(o); return P.length<2||(P.length===2&&P[0].x===P[1].x&&P[0].y===P[1].y)?[{x:o.x,y:o.y},{x:o.x+.001,y:o.y}]:P; }
function chamfer(G,gw,gh){ var x,y,k,v;
  for(y=0;y<gh;y++) for(x=0;x<gw;x++){ k=y*gw+x; v=G[k]; if(!v) continue;
    if(x>0&&G[k-1]+3<v) v=G[k-1]+3; if(y>0){ if(G[k-gw]+3<v) v=G[k-gw]+3; if(x>0&&G[k-gw-1]+4<v) v=G[k-gw-1]+4; if(x<gw-1&&G[k-gw+1]+4<v) v=G[k-gw+1]+4; } G[k]=v; }
  for(y=gh-1;y>=0;y--) for(x=gw-1;x>=0;x--){ k=y*gw+x; v=G[k]; if(!v) continue;
    if(x<gw-1&&G[k+1]+3<v) v=G[k+1]+3; if(y<gh-1){ if(G[k+gw]+3<v) v=G[k+gw]+3; if(x<gw-1&&G[k+gw+1]+4<v) v=G[k+gw+1]+4; if(x>0&&G[k+gw-1]+4<v) v=G[k+gw-1]+4; } G[k]=v; } }
function pathMap(L,w,h,s,obs,nums,thr,opt){
  opt=opt||{};
  var P=new Uint8Array(w*h),i,x,y,k;
  for(i=0;i<w*h;i++) P[i]=L[i]<thr?1:0;
  P=unline(P,w,h,Math.round(1.6*s));
  for(var gx=0;gx*s<w;gx++){ var c0=Math.round(gx*s); for(y=0;y<h;y++) for(var o=-2;o<=2;o++){ x=c0+o; if(x<5||x>=w-5) continue; k=y*w+x; if(P[k]&&L[y*w+c0-4]>=thr&&L[y*w+c0+4]>=thr) P[k]=0; } }
  for(var gy=0;gy*s<h;gy++){ var r0=Math.round(gy*s); for(x=0;x<w;x++) for(o=-2;o<=2;o++){ y=r0+o; if(y<5||y>=h-5) continue; k=y*w+x; if(P[k]&&L[(r0-4)*w+x]>=thr&&L[(r0+4)*w+x]>=thr) P[k]=0; } }
  function blot(poly,rad,into){ var b=bbox(poly),X0=Math.max(0,Math.floor((b[0]-rad)*s)),X1=Math.min(w-1,Math.ceil((b[2]+rad)*s)),Y0=Math.max(0,Math.floor((b[1]-rad)*s)),Y1=Math.min(h-1,Math.ceil((b[3]+rad)*s));
    for(var yy=Y0;yy<=Y1;yy++) for(var xx=X0;xx<=X1;xx++){ if(pdist({x:xx/s,y:yy/s},poly)<=rad) into[yy*w+xx]=1; } }
  var OM=new Uint8Array(w*h),near=new Uint8Array(w*h),body=new Uint8Array(w*h);
  /* tunel je nakreslený širší než model (obrys pruhu), proto větší okraj */
  obs.forEach(function(o){ var pl=mpoly(o),hw=HW[o.type]||.2; blot(pl,hw+(o.type==='tunnel'?.3:.15),OM); blot(pl,hw+(opt.nearR||.25),near); blot(pl,hw+.1,body); });
  (nums||[]).forEach(function(q){ blot([{x:q.x,y:q.y},{x:q.x+.001,y:q.y}],q.R*1.2,OM); });
  for(i=0;i<w*h;i++) if(OM[i]) P[i]=0;
  /* drobné zbytky (křížení mřížky, písmena popisků, šipky) nejsou čára trasy: pryč vše kratší než půl metru */
  if(opt.minComp!==0){ var mc=(opt.minComp||.5)*s; comps(P,w,h).list.forEach(function(c){ if(Math.max(c.x1-c.x0,c.y1-c.y0)<mc) c.px.forEach(function(j){ P[j]=0; }); }); }
  /* vzdálenostní mapa (3-4 zkosení), v metrech */
  var DT=new Float32Array(w*h); for(i=0;i<w*h;i++) DT[i]=P[i]?0:1e6; chamfer(DT,w,h); for(i=0;i<w*h;i++) DT[i]=DT[i]/3/s;
  /* hrubá mřížka 20 cm: buňky s nakreslenou čarou mimo okolí překážek */
  var cs=.2,gw=Math.ceil(w/s/cs),gh=Math.ceil(h/s/cs),cnt=new Uint16Array(gw*gh),A=[];
  for(y=0;y<h;y++) for(x=0;x<w;x++){ i=y*w+x; if(P[i]&&!near[i]) cnt[Math.floor(y/s/cs)*gw+Math.floor(x/s/cs)]++; }
  for(i=0;i<gw*gh;i++) if(cnt[i]>=Math.max(2,Math.round(s*cs*.4))) A.push(i);
  return {DT:DT,near:near,body:body,P:P,cs:cs,gw:gw,gh:gh,A:A}; }
/* ---------- směry: varianty otoček, jejichž dráha nejlépe vysvětlí nakreslenou čáru ----------
   skóre = pokrytí nakreslené čáry modelem − délka modelu mimo čáru − cena neobvyklých variant (vše v buňkách 20 cm) */
/* fitG je generátor: po každém výpočtu skóre se dá přerušit, aby čtení velkého plánku nezamrazilo telefon (fit ho doběhne naráz) */
function fit(obs,route,PM,w,h,s,opt){ var it=fitG(obs,route,PM,w,h,s,opt),r; do r=it.next(); while(!r.done); return r.value; }
function* fitG(obs,route,PM,w,h,s,opt){
  opt=opt||{}; var by={},n=route.length,sig=opt.sig||.45,beta=opt.beta==null?1:opt.beta,cs=PM.cs,gw=PM.gw,gh=PM.gh,G=new Float32Array(gw*gh),step=cs/2,W=w/s,H=h/s;
  obs.forEach(function(o){by[o.id]=o;});
  function states(i){ var o=by[route[i]],t=o.type; if(t==='jump') return i===n-1?['']:i>0?['','f','wL','wR','bL','bR']:['','f','wL','wR']; if(DEF[t].hl>0) return ['','f']; return ['']; }
  var PF=opt.pfs||[null,{wr:.8,wl:.4,k:.5}];
  var CACHE={},NEV=0;
  function score(t){ var key=t.join(','); if(CACHE[key]) return CACHE[key]; var best=null; PF.forEach(function(pf){ var r=score1(t,pf); NEV++; if(!best||r.sc>best.sc) best=r; }); CACHE[key]=best; return best; }
  /* ruka kreslí volněji než model: skok často šikmo (ve směru mezi příchodem a odchodem) a oblouky mezi překážkami
     bývají užší. Spojovací oblouk každého úseku se proto doladí: šikmý průchod skokem (nejvýš ANG) a těsnost oblouku. */
  var ANG=(opt.ang==null?40:opt.ang)*Math.PI/180,KF=opt.kf||[1,.6,.35],KM=[.8,.6,.45];
  function nrm(v){ var l=Math.hypot(v.x,v.y)||1; return {x:v.x/l,y:v.y/l}; }
  function con(p0,d0,p3,d1,kf,km){ var k=Math.max(km,dst(p0,p3)*kf); return [p0,{x:p0.x+d0.x*k,y:p0.y+d0.y*k},{x:p3.x-d1.x*k,y:p3.y-d1.y*k},p3]; }
  /* pes neproběhne křídlem skoku ani tyčí mimo zamýšlený skok středem: každé takové protnutí je velká pokuta
     (jinak by se smyčka „skoku z druhé strany“ schovala do okolí překážky, kde se čára neporovnává) */
  var JW=[],XP=opt.xp==null?30:opt.xp,WG=opt.wing||1;
  obs.forEach(function(o){ if(o.type!=='jump') return; var a=o.rot*Math.PI/180,u={x:Math.cos(a),y:Math.sin(a)}; JW.push({o:o,x:o.x,y:o.y,u:u,v:{x:-u.y,y:u.x}}); });
  function wingX(c,skip){ var bx0=Math.min(c[0].x,c[1].x,c[2].x,c[3].x)-WG,bx1=Math.max(c[0].x,c[1].x,c[2].x,c[3].x)+WG,by0=Math.min(c[0].y,c[1].y,c[2].y,c[3].y)-WG,by1=Math.max(c[0].y,c[1].y,c[2].y,c[3].y)+WG,n=0,m=0;
    for(var j=0;j<JW.length;j++){ var J=JW[j]; if(J.o===skip) continue; if(J.x<bx0||J.x>bx1||J.y<by0||J.y>by1) continue;
      if(!m) m=Math.max(4,Math.ceil((dst(c[0],c[1])+dst(c[1],c[2])+dst(c[2],c[3]))/.08));
      var ps=null,pv=0; for(var k=0;k<=m;k++){ var q=bz(c[0],c[1],c[2],c[3],k/m),dx=q.x-J.x,dy=q.y-J.y; if(dx*dx+dy*dy<.0036){ ps=null; continue; }
        var sn=dx*J.u.x+dy*J.u.y,sv=dx*J.v.x+dy*J.v.y; if(ps!==null&&(ps<0)!==(sn<0)){ var cv=pv+(sv-pv)*ps/(ps-sn); if(Math.abs(cv)<WG) n++; } ps=sn; pv=sv; } }
    return n; }
  var EDGE=.7;
  function segObj(c,skip){ var len=dst(c[0],c[1])+dst(c[1],c[2])+dst(c[2],c[3]),m=Math.max(3,Math.ceil(len/step)),o=0;
    for(var k=1;k<=m;k++){ var q=bz(c[0],c[1],c[2],c[3],k/m); if(q.x<0||q.y<0||q.x>=W||q.y>=H){ o-=1; continue; } var id=Math.floor(q.y*s)*w+Math.floor(q.x*s);
      if(PM.near[id]){ var al=len*k/m; if(PM.body[id]&&al>EDGE&&len-al>EDGE) o-=1; continue; } var d=PM.DT[id]; o+=2*Math.exp(-(d/sig)*(d/sig))-1; }
    return o*len/m/cs-(XP?XP*wingX(c,skip):0); }
  function adapt(g,t,pf){ var bk=pf&&pf.k||BZK,C=[],j,i;
    for(j=0;j<g.segs.length;j++){ var ci=g.P[j].w?g.P[j].w.pcs.length:0,c=g.segs[j].pcs[ci]; C.push({ci:ci,p0:c[0],p3:c[3],d0:nrm({x:c[1].x-c[0].x,y:c[1].y-c[0].y}),d1:nrm({x:c[3].x-c[2].x,y:c[3].y-c[2].y}),kf:bk,km:.8,skip:(t[j]||'').charAt(0)==='b'?by[route[j]]:null}); }
    if(ANG>0) for(i=0;i<n;i++){ var o=by[route[i]],ti=t[i]||''; if(o.type!=='jump'||(ti&&ti!=='f')) continue; if((i>0&&route[i-1]===route[i])||(i<n-1&&route[i+1]===route[i])) continue;
      var Ca=i>0?C[i-1]:null,Cd=i<n-1?C[i]:null,dir=g.P[i].dir,a=Ca?nrm({x:o.x-Ca.p0.x,y:o.y-Ca.p0.y}):{x:0,y:0},b=Cd?nrm({x:Cd.p3.x-o.x,y:Cd.p3.y-o.y}):{x:0,y:0},bs={x:a.x+b.x,y:a.y+b.y};
      if(Math.hypot(bs.x,bs.y)<.2) continue; var an=Math.atan2(dir.x*bs.y-dir.y*bs.x,dir.x*bs.x+dir.y*bs.y); if(Math.abs(an)>=Math.PI/2-.05) continue;
      if(Math.abs(an)>ANG) an=an>0?ANG:-ANG; if(Math.abs(an)<.09) continue;
      var nd={x:dir.x*Math.cos(an)-dir.y*Math.sin(an),y:dir.x*Math.sin(an)+dir.y*Math.cos(an)};
      var ob=function(d){ return (Ca?segObj(con(Ca.p0,Ca.d0,Ca.p3,d,Ca.kf,Ca.km),Ca.skip):0)+(Cd?segObj(con(Cd.p0,d,Cd.p3,Cd.d1,Cd.kf,Cd.km),Cd.skip):0); };
      if(ob(nd)>ob(dir)){ if(Ca) Ca.d1=nd; if(Cd) Cd.d0=nd; } }
    for(j=0;j<C.length;j++){ var cc=C[j],best=null,bo=-1e9; for(var q=0;q<KF.length;q++){ var cn=con(cc.p0,cc.d0,cc.p3,cc.d1,bk*KF[q],KM[q]),ov=segObj(cn,cc.skip); if(ov>bo){ bo=ov; best=cn; } } g.segs[j].pcs[cc.ci]=best; } }
  function score1(t,pf){ var tu=t.map(function(x){return x||null;}),g; try{ g=pf?calc(obs,route,tu,pf):calc(obs,route,tu); }catch(e){ return {sc:-1e9,per:[]}; }
    if(opt.adapt!==false) adapt(g,t,pf);
    G.fill(1e6); var pen=0,per=[];
    g.segs.forEach(function(sg){ var sp=0,sn=0,tot=0,acc=0; sg.pcs.forEach(function(c){ tot+=dst(c[0],c[1])+dst(c[1],c[2])+dst(c[2],c[3]); });
      sg.pcs.forEach(function(c){ var len=dst(c[0],c[1])+dst(c[1],c[2])+dst(c[2],c[3]),m=Math.max(3,Math.ceil(len/step));
        for(var k=1;k<=m;k++){ var q=bz(c[0],c[1],c[2],c[3],k/m); if(q.x<0||q.y<0||q.x>=W||q.y>=H) continue; var X=Math.floor(q.x*s),Y=Math.floor(q.y*s),id=Y*w+X;
          if(PM.near[id]){ var al=acc+len*k/m; if(PM.body[id]&&al>EDGE&&tot-al>EDGE){ pen+=1; sp+=1; sn++; } continue; }
          var d=PM.DT[id],e=1-Math.exp(-(d/sig)*(d/sig)); pen+=e; sp+=e; sn++; G[Math.floor(q.y/cs)*gw+Math.floor(q.x/cs)]=0; }
        acc+=len; });
      per.push(sn?1-sp/sn:1); });
    chamfer(G,gw,gh);
    var rec=0; for(var j=0;j<PM.A.length;j++){ var d=G[PM.A[j]]/3*cs; rec+=Math.exp(-(d/sig)*(d/sig)); }
    var pri=0; t.forEach(function(x){ if(x) pri+=x==='f'?(opt.pf||1):(opt.pw||5); });
    var xc=0; if(XP) g.segs.forEach(function(sg,j){ var sk=(t[j]||'').charAt(0)==='b'?by[route[j]]:null; sg.pcs.forEach(function(c){ xc+=wingX(c,sk); }); });
    return {sc:rec-beta*pen*step/cs-pri-XP*xc,per:per,rec:rec,pen:pen*step/cs,xc:xc,g:g}; }
  var t=route.map(function(){return '';}),cur=score(t),allows=[function(st){return st===''||st==='f';},function(){return true;}],ai,sweep,i,j,st,t2,r;
  yield;
  /* nejdřív jen strany a vstupy (f), potom i otočky kolem křídla a zadní strany */
  for(ai=0;ai<allows.length;ai++) for(sweep=0;sweep<4;sweep++){ var changed=false;
    for(i=0;i<n;i++){ var ss=states(i).filter(allows[ai]); if(ss.length<2) continue;
      for(j=0;j<ss.length;j++){ st=ss[j]; if(st===t[i]) continue; t2=t.slice(); t2[i]=st; r=score(t2); if(r.sc>cur.sc+1e-6){ t=t2; cur=r; changed=true; } yield; } }
    if(!changed) break; }
  /* jistota: o kolik buněk je zvolená varianta lepší než nejlepší jiná na stejném místě */
  function* margins(){ var out=[]; for(var i=0;i<n;i++){ var ss=states(i); if(ss.length<2){ out.push(99); continue; } var alt=-1e9;
    for(var j=0;j<ss.length;j++){ var st=ss[j]; if(st===t[i]) continue; var t2=t.slice(); t2[i]=st; var r=score(t2); if(r.sc>alt) alt=r.sc; yield; } out.push(cur.sc-alt); } return out; }
  var marg=yield* margins();
  /* dvojice sousedních míst najednou (např. otočka + vstup do dalšího tunelu), jen kde je rozhodnutí těsné */
  for(var pass=0;pass<2;pass++){ var ch2=false;
    for(var i2=0;i2<n-1;i2++){ var s1=states(i2),s2=states(i2+1); if(s1.length<2||s2.length<2||Math.min(marg[i2],marg[i2+1])>(opt.pairAll===false?12:1e9)) continue;
      for(var p1=0;p1<s1.length;p1++) for(var p2=0;p2<s2.length;p2++){ var a1=s1[p1],a2=s2[p2]; if(a1===t[i2]&&a2===t[i2+1]) continue; t2=t.slice(); t2[i2]=a1; t2[i2+1]=a2; r=score(t2); if(r.sc>cur.sc+1e-6){ t=t2; cur=r; ch2=true; } yield; } }
    if(!ch2) break; marg=yield* margins(); }
  return {turns:t,score:cur.sc,per:cur.per,rec:cur.rec,pen:cur.pen,nA:PM.A.length,margin:marg,eval:score,nev:NEV}; }
/* ---------- celé čtení ---------- */
/* čísla z plánku (srovnaného na s px/m); L = šedotón, lze předat, ať se nepočítá znovu */
function nums(D,s,opt){ opt=opt||{}; var L=gray(D),N=numbers(L,D.width,D.height,s,{thr:opt.thr||150}); N.L=L; return N; }
/* vymazání kroužků s čísly z obrázku (jiné měřítko s2), aby je čtečka překážek nebrala jako kruh */
function clean(D2,s2,N,tr){ var w=D2.width,h=D2.height,d=D2.data,sy=tr&&tr.sy||s2,ox=tr?tr.x0:0,oy=tr?tr.y0:0;
  (N.list||[]).forEach(function(q){ var sc=Math.max(s2,sy),R=q.R*sc,cx=ox+q.x*s2,cy=oy+q.y*sy,band=Math.max(2.5,.22*R),rr=R+band,
      b=q.box?[ox+q.box[0]*s2-.1*R,oy+q.box[1]*sy-.1*R,ox+q.box[2]*s2+.1*R,oy+q.box[3]*sy+.1*R]:null,
      X0=Math.max(0,Math.floor(cx-rr)),X1=Math.min(w-1,Math.ceil(cx+rr)),Y0=Math.max(0,Math.floor(cy-rr)),Y1=Math.min(h-1,Math.ceil(cy+rr)),x,y,k;
    /* barevný kroužek (fialový u Pupíka): mažou se jen barevné body, černé čáry překážek a trasy pod ním zůstanou */
    var n=0,sat=0; for(y=Y0;y<=Y1;y++) for(x=X0;x<=X1;x++){ if(Math.abs(Math.hypot(x-cx,y-cy)-R)>band) continue; k=(y*w+x)*4; var mx=Math.max(d[k],d[k+1],d[k+2]),mn=Math.min(d[k],d[k+1],d[k+2]); if((d[k]+d[k+1]+d[k+2])/3<170){ n++; sat+=mx-mn; } }
    var col=n>5&&sat/n>=55;
    for(y=Y0;y<=Y1;y++) for(x=X0;x<=X1;x++){
      var dd=Math.hypot(x-cx,y-cy); if(dd>rr) continue;
      if(!b&&dd<=R*1.2||Math.abs(dd-R)<=band||b&&x>=b[0]&&x<=b[2]&&y>=b[1]&&y<=b[3]){ k=(y*w+x)*4;
        if(col){ var m1=Math.max(d[k],d[k+1],d[k+2]),m0=Math.min(d[k],d[k+1],d[k+2]); if(m1-m0<30&&(d[k]+d[k+1]+d[k+2])/3<=200) continue; }
        d[k]=d[k+1]=d[k+2]=255; } } }); }
/* skupiny rovnoběžných čar kolem bodu: skok daleký (3 a více prken, i jen obrysy) nebo skok se dvěma břevny (oxer) */
function findPar(L,w,h,s,cx,cy,rad,ex,thr){
  var X0=Math.max(0,Math.floor((cx-rad)*s)),X1=Math.min(w-1,Math.ceil((cx+rad)*s)),Y0=Math.max(0,Math.floor((cy-rad)*s)),Y1=Math.min(h-1,Math.ceil((cy+rad)*s)),pts=[];
  for(var y=Y0;y<=Y1;y++) for(var x=X0;x<=X1;x++){ var i=y*w+x; if(L[i]<thr&&!ex[i]) pts.push(x,y); }
  if(pts.length<30) return {lj:null,ox:null};
  var lj=null,ox=null,gap=2.5/s;
  for(var deg=0;deg<180;deg+=3){ var th=deg*Math.PI/180,c=Math.cos(th),sn=Math.sin(th),B={};
    for(var k=0;k<pts.length;k+=2){ var dx=pts[k]-cx*s,dy=pts[k+1]-cy*s,pp=Math.round(-dx*sn+dy*c),aa=Math.round(dx*c+dy*sn); (B[pp]=B[pp]||[]).push(aa); }
    var lines=[]; Object.keys(B).forEach(function(key){ var a=B[key].sort(function(u,v){return u-v;}),run0=a[0],prev=a[0],bestR=[0,0,0];
      for(var j=1;j<=a.length;j++){ if(j<a.length&&a[j]-prev<=2){ prev=a[j]; continue; } var len=(prev-run0)/s; if(len>bestR[0]) bestR=[len,run0,prev]; if(j<a.length){ run0=a[j]; prev=a[j]; } }
      if(bestR[0]>=.75&&bestR[0]<=1.6) lines.push({p:+key/s,a:(bestR[1]+bestR[2])/2/s,len:bestR[0],ext:a.length>1.5*bestR[0]*s+6}); });
    if(lines.length<2) continue; lines.sort(function(u,v){return u.p-v.p;});
    /* souvislá skupina čar se společným středem podél prken; sousední řádky pixelů jsou jedno prkno */
    for(var i0=0;i0<lines.length;i0++){ var g=[lines[i0]];
      for(var j0=i0+1;j0<lines.length;j0++){ var q=lines[j0]; if(q.p-g[g.length-1].p>.45) break; if(Math.abs(q.a-g[0].a)<.3) g.push(q); }
      var span=g[g.length-1].p-g[0].p,bars=1; for(var b=1;b<g.length;b++) if(g[b].p-g[b-1].p>gap) bars++;
      var ma=0,mp=0; g.forEach(function(q){ ma+=q.a; mp+=q.p; }); ma/=g.length; mp/=g.length;
      var cand={x:cx+ma*c-mp*sn,y:cy+ma*sn+mp*c,rot:(deg+90)%360,n:g.length,span:span,bars:bars};
      if(g.length>=4&&bars>=3&&span>=.45&&span<=1.7){ cand.sc=g.length+Math.min(3,span*2); if(!lj||cand.sc>lj.sc) lj=cand; }
      else if(bars===2&&span>=.12&&span<=.6&&!g.some(function(q){return q.ext;})){ cand.sc=g.length; if(!ox||cand.sc>ox.sc) ox=cand; } } }
  return {lj:lj,ox:ox}; }
function findLJ(L,w,h,s,cx,cy,rad,ex,thr){ return findPar(L,w,h,s,cx,cy,rad,ex,thr).lj; }
/* zeď / tabule: rovný tlustý pruh 0,9–2,2 m (0,08–0,35 m silný); směr skoku kolmo na pruh */
function findBar(L,w,h,s,cx,cy,rad,ex,thr){
  var X0=Math.max(0,Math.floor((cx-rad)*s)),X1=Math.min(w-1,Math.ceil((cx+rad)*s)),Y0=Math.max(0,Math.floor((cy-rad)*s)),Y1=Math.min(h-1,Math.ceil((cy+rad)*s)),pts=[];
  for(var y=Y0;y<=Y1;y++) for(var x=X0;x<=X1;x++){ var i=y*w+x; if(L[i]<thr&&!ex[i]) pts.push(x,y); }
  if(pts.length<30) return null;
  var best=null;
  for(var deg=0;deg<180;deg+=3){ var th=deg*Math.PI/180,c=Math.cos(th),sn=Math.sin(th),B={};
    for(var k=0;k<pts.length;k+=2){ var dx=pts[k]-cx*s,dy=pts[k+1]-cy*s,pp=Math.round(-dx*sn+dy*c); (B[pp]=B[pp]||[]).push(Math.round(dx*c+dy*sn)); }
    var lines=[]; Object.keys(B).forEach(function(key){ var a=B[key].sort(function(u,v){return u-v;}),run0=a[0],prev=a[0],bestR=[0,0,0];
      for(var j=1;j<=a.length;j++){ if(j<a.length&&a[j]-prev<=2){ prev=a[j]; continue; } var len=(prev-run0)/s; if(len>bestR[0]) bestR=[len,run0,prev]; if(j<a.length){ run0=a[j]; prev=a[j]; } }
      if(bestR[0]>=.9&&bestR[0]<=2.2&&a.length<=bestR[0]*s*1.25+8) lines.push({p:+key,a0:bestR[1],a1:bestR[2]}); });
    lines.sort(function(u,v){return u.p-v.p;});
    for(var i0=0;i0<lines.length;i0++){ var g=[lines[i0]];
      for(var j0=i0+1;j0<lines.length&&lines[j0].p-g[g.length-1].p<=1.5;j0++){ var q=lines[j0]; if(Math.abs(q.a0-g[0].a0)<.2*s&&Math.abs(q.a1-g[0].a1)<.2*s) g.push(q); }
      var th2=(g[g.length-1].p-g[0].p+1)/s; if(th2<.11||th2>.35) continue;
      var ma=0,mp=0; g.forEach(function(q){ ma+=(q.a0+q.a1)/2; mp+=q.p; }); ma/=g.length; mp/=g.length;
      var len=(g[0].a1-g[0].a0)/s,sc=g.length+len;
      if(!best||sc>best.sc) best={x:cx+(ma*c-mp*sn)/s,y:cy+(ma*sn+mp*c)/s,rot:(deg+90)%360,len:len,thick:th2,sc:sc}; } }
  return best; }
/* kruh (obruč) poblíž čísla: kružnice o poloměru 0,22–0,5 m bez číslice uvnitř, rám = krátká čára skrz střed s příčkami na koncích */
function findTire(L,w,h,s,cx,cy,rad,ex,thr){
  var X0=Math.max(0,Math.floor((cx-rad)*s)),X1=Math.min(w-1,Math.ceil((cx+rad)*s)),Y0=Math.max(0,Math.floor((cy-rad)*s)),Y1=Math.min(h-1,Math.ceil((cy+rad)*s)),bw=X1-X0+1,bh=Y1-Y0+1,pts=[],x,y,k;
  for(y=Y0;y<=Y1;y++) for(x=X0;x<=X1;x++){ var i=y*w+x; if(L[i]<thr&&!ex[i]) pts.push(x,y); }
  if(pts.length<30) return null;
  var best=null,r0=Math.round(.22*s),r1=Math.round(.5*s);
  for(var r=r0;r<=r1;r++){ var N=Math.max(24,Math.round(2*Math.PI*r)),A=new Uint16Array(bw*bh),dx=[],dy=[];
    for(k=0;k<N;k++){ dx.push(Math.round(Math.cos(k*2*Math.PI/N)*r)); dy.push(Math.round(Math.sin(k*2*Math.PI/N)*r)); }
    for(var q=0;q<pts.length;q+=2) for(k=0;k<N;k++){ var X=pts[q]+dx[k]-X0,Y=pts[q+1]+dy[k]-Y0; if(X>=0&&Y>=0&&X<bw&&Y<bh) A[Y*bw+X]++; }
    for(y=1;y<bh-1;y++) for(x=1;x<bw-1;x++){ var v=A[y*bw+x]; if(v<.55*N) continue; if(A[y*bw+x-1]>v||A[y*bw+x+1]>v||A[(y-1)*bw+x]>v||A[(y+1)*bw+x]>v) continue;
      var gx=X0+x,gy=Y0+y,sc=ringAt(L,w,h,gx,gy,r,thr); if(sc<.85) continue; var ins=inside(L,w,h,gx,gy,.7*r,thr); if(ins>.45) continue;
      if(!best||sc>best.sc+.02||Math.abs(sc-best.sc)<=.02&&r>best.r) best={x:gx,y:gy,r:r,sc:sc}; } }
  if(!best) return null;
  var fr=tireFrame(L,w,h,s,best.x,best.y,best.r,thr);
  return {x:best.x/s,y:best.y/s,r:best.r/s,rot:fr.rot,frame:fr.frame}; }
/* rám obruče: krátká čára skrz střed kružnice s příčkami na koncích; směr skoku je kolmo na rám */
function tireFrame(L,w,h,s,bx,by,br,thr){ var best={x:bx,y:by,r:br};
  function dk(px,py){ var X=Math.round(px),Y=Math.round(py); for(var oy=-1;oy<=1;oy++) for(var ox=-1;ox<=1;ox++){ var XX=X+ox,YY=Y+oy; if(XX>=0&&YY>=0&&XX<w&&YY<h&&L[YY*w+XX]<thr) return true; } return false; }
  /* čára skrz střed: jak daleko za kružnicí pokračuje na obě strany */
  function run(th,sg){ var c=Math.cos(th)*sg,sn=Math.sin(th)*sg,t=best.r+2,miss=0,last=best.r,hit=0,n=0;
    for(;t<=best.r+1.2*s;t++){ n++; if(dk(best.x+c*t,best.y+sn*t)){ hit++; last=t; miss=0; } else if(++miss>3) break; }
    return {end:last/s,ok:last-best.r>=.12*s}; }
  var fr=null,any=null;
  for(var deg=0;deg<180;deg+=4){ var th=deg*Math.PI/180,a=run(th,1),b=run(th,-1); if(!a.ok||!b.ok) continue;
    var e=Math.max(a.end,b.end); if(!any||e<any.e) any={deg:deg,e:e};
    if(a.end<=1&&b.end<=1){ var c=Math.cos(th),sn=Math.sin(th),bar=0;
      [[a.end,1],[b.end,-1]].forEach(function(z){ var px=best.x+c*z[0]*s*z[1],py=best.y+sn*z[0]*s*z[1]; if(dk(px-sn*.12*s,py+c*.12*s)||dk(px+sn*.12*s,py-c*.12*s)) bar++; });
      var scr=bar*2-e; if(!fr||scr>fr.scr) fr={deg:deg,scr:scr}; } }
  return {rot:fr?(fr.deg+90)%360:any?any.deg:null,frame:!!fr,any:!!any}; }
/* dlouhé prkno poblíž čísla (kladina, houpačka, áčko): dvě rovnoběžné rovné čáry stejné délky; osové směry vynechány (mřížka) */
function findPlank(M,w,h,s,cx,cy,rad){
  var X0=Math.max(0,Math.floor((cx-rad)*s)),X1=Math.min(w-1,Math.ceil((cx+rad)*s)),Y0=Math.max(0,Math.floor((cy-rad)*s)),Y1=Math.min(h-1,Math.ceil((cy+rad)*s)),pts=[];
  for(var y=Y0+(Y0&1);y<=Y1;y+=2) for(var x=X0+(X0&1);x<=X1;x+=2) if(M[y*w+x]) pts.push(x,y);
  if(pts.length<25) return null;
  var best=null,gap=2*s,minL=2.5*s,BW=4;
  for(var deg=0;deg<180;deg+=1){ var dm=deg%90; if(dm<4||dm>86) continue;
    var th=deg*Math.PI/180,c=Math.cos(th),sn=Math.sin(th),B={};
    /* pruhy 4 px napříč: dlouhá čára pod nepatrně jiným úhlem zůstane v jednom pruhu */
    for(var k=0;k<pts.length;k+=2){ var dx=pts[k]-cx*s,dy=pts[k+1]-cy*s,pp=Math.round((-dx*sn+dy*c)/BW); (B[pp]=B[pp]||[]).push(Math.round(dx*c+dy*sn)); }
    var lines=[]; Object.keys(B).forEach(function(key){ var a=B[key]; if(a.length<minL*.12) return; a.sort(function(u,v){return u-v;});
      var r0=a[0],prev=a[0],cnt=1;
      for(var j=1;j<=a.length;j++){ if(j<a.length&&a[j]-prev<=gap){ if(a[j]!==prev) cnt++; prev=a[j]; continue; }
        if(prev-r0>=minL&&cnt>=.2*(prev-r0)) lines.push({p:+key*BW,a0:r0,a1:prev});
        if(j<a.length){ r0=a[j]; prev=a[j]; cnt=1; } } });
    if(lines.length<2) continue; lines.sort(function(u,v){return u.p-v.p;});
    for(var i=0;i<lines.length;i++) for(var j2=i+1;j2<lines.length;j2++){ var A=lines[i],Bq=lines[j2],dp=(Bq.p-A.p)/s; if(dp<.15) continue; if(dp>1.25) break;
      var o0=Math.max(A.a0,Bq.a0),o1=Math.min(A.a1,Bq.a1),L1=A.a1-A.a0,L2=Bq.a1-Bq.a0; if(o1-o0<.8*Math.min(L1,L2)||Math.abs(L1-L2)>.2*Math.max(L1,L2)) continue;
      var len=(o1-o0)/s,ty=null; if(dp<=.6){ if(len>4.6&&len<=12.5) ty='dogwalk'; else if(len>=2.8) ty='seesaw'; } else if(dp>=.75&&len>=2.6&&len<=4.8) ty='aframe';
      if(!ty) continue;
      var ma=(o0+o1)/2,mp=(A.p+Bq.p)/2,px=cx+(ma*c-mp*sn)/s,py=cy+(ma*sn+mp*c)/s;
      /* číslo stojí u prkna (do 2 m od jeho osy) */
      var ux=c,uy=sn,t=Math.max(-len/2,Math.min(len/2,(cx-px)*ux+(cy-py)*uy)),dq=Math.hypot(cx-(px+ux*t),cy-(py+uy*t)); if(dq>2) continue;
      var sc=len-dq-Math.abs(dp-(ty==='aframe'?1:.35));
      if(findPlank.dbg) findPlank.dbg.push({type:ty,x:+px.toFixed(2),y:+py.toFixed(2),rot:deg,len:+len.toFixed(2),wid:+dp.toFixed(2),dq:+dq.toFixed(2),sc:+sc.toFixed(2)});
      if(!best||sc>best.sc) best={type:ty,x:px,y:py,rot:deg,len:len,wid:dp,sc:sc}; } }
  return best; }
/* trasa z čísel a překážek + směry podle nakreslené čáry */
function route(D,s,obs,N,opt){ var it=routeG(D,s,obs,N,opt),r; do r=it.next(); while(!r.done); return r.value; }
function* routeG(D,s,obs,N,opt){
  opt=opt||{}; var w=D.width,h=D.height,L=N.L||gray(D),thr=opt.thr||150,issues=[];
  if(!N.list||N.list.length<2) return {ok:false,why:'nums',nums:N.list||[]};
  var T1=performance.now(),rt=[],nn=[],added=[];
  obs=obs.slice(); var nid0=Math.max.apply(null,obs.map(function(o){return o.id;}).concat([0]))+1;
  (N.others||[]).forEach(function(r){ if(obs.some(function(o){ return pdist({x:r.x,y:r.y},opoly(o))<.8; })) return;
    var fr=tireFrame(L,w,h,s,r.x*s,r.y*s,r.R*s,thr); if(!fr.frame) return; var o={id:nid0++,type:'tire',x:+r.x.toFixed(1),y:+r.y.toFixed(1),rot:fr.rot}; obs.push(o); added.push(o.id); });
  var A=attach(N.list,obs);
  /* číslo bez překážky: zkusí najít skok daleký, jinak dočasný skok u čísla (k opravě) */
  var nid=Math.max.apply(null,obs.map(function(o){return o.id;}).concat([0]))+1;
  var EX=null; function exMask(){ if(EX) return EX; EX=new Uint8Array(w*h); function blot(poly,rad){ var b=bbox(poly),X0=Math.max(0,Math.floor((b[0]-rad)*s)),X1=Math.min(w-1,Math.ceil((b[2]+rad)*s)),Y0=Math.max(0,Math.floor((b[1]-rad)*s)),Y1=Math.min(h-1,Math.ceil((b[3]+rad)*s));
      for(var yy=Y0;yy<=Y1;yy++) for(var xx=X0;xx<=X1;xx++){ if(pdist({x:xx/s,y:yy/s},poly)<=rad) EX[yy*w+xx]=1; } }
    obs.forEach(function(o){ blot(mpoly(o),(HW[o.type]||.2)+.1); }); N.list.forEach(function(q){ blot([{x:q.x,y:q.y},{x:q.x+.001,y:q.y}],q.R*1.25); });
    var U=ulines(); for(var i=0;i<w*h;i++) if(U[i]) EX[i]=1; return EX; }
  var UL=null; function ulines(){ if(UL) return UL; var M0=new Uint8Array(w*h); for(var i=0;i<w*h;i++) M0[i]=L[i]<thr?1:0; var M1=unline(M0,w,h,Math.round(1.6*s)); UL=new Uint8Array(w*h); for(i=0;i<w*h;i++) UL[i]=M0[i]&&!M1[i]?1:0; return UL; }
  /* maska jen kroužků s čísly a mřížky (pro hledání v místě, kde už překážka je) */
  var EXR=null; function exRings(){ if(EXR) return EXR; EXR=new Uint8Array(w*h); N.list.forEach(function(q){ var r=q.R*1.25*s,cx=q.x*s,cy=q.y*s;
      for(var yy=Math.max(0,Math.floor(cy-r));yy<=Math.min(h-1,Math.ceil(cy+r));yy++) for(var xx=Math.max(0,Math.floor(cx-r));xx<=Math.min(w-1,Math.ceil(cx+r));xx++) if((xx-cx)*(xx-cx)+(yy-cy)*(yy-cy)<=r*r) EXR[yy*w+xx]=1; });
    var U=ulines(); for(var i=0;i<w*h;i++) if(U[i]) EXR[i]=1; return EXR; }
  /* skok, který je ve skutečnosti skok daleký (čtečka překážek vzala dvě prkna za křídla) */
  A.forEach(function(x){ var o=x.o; if(!o||o.type!=='jump'||o.ph) return; var P=findPar(L,w,h,s,o.x,o.y,1.6,exRings(),thr).lj;
    if(P&&P.n>=5&&P.bars>=3&&Math.hypot(P.x-o.x,P.y-o.y)<1){ o.type='longjump'; o.x=+P.x.toFixed(1); o.y=+P.y.toFixed(1); o.rot=P.rot; } });
  /* skok nebo obruč, kolem kterých nevede nakreslená čára (do 1 m od středu mimo samotné břevno), nejsou překážka trasy */
  var PV=null; function pathV(){ if(PV) return PV; var t2=thr+30,x,y,k,o; PV=new Uint8Array(w*h); for(var i=0;i<w*h;i++) PV[i]=L[i]<t2?1:0;
    for(var gx=0;gx*s<w;gx++){ var c0=Math.round(gx*s); for(y=0;y<h;y++) for(o=-2;o<=2;o++){ x=c0+o; if(x<5||x>=w-5) continue; k=y*w+x; if(PV[k]&&L[y*w+c0-4]>=t2&&L[y*w+c0+4]>=t2) PV[k]=0; } }
    for(var gy=0;gy*s<h;gy++){ var r0=Math.round(gy*s); for(x=0;x<w;x++) for(o=-2;o<=2;o++){ y=r0+o; if(y<5||y>=h-5) continue; k=y*w+x; if(PV[k]&&L[(r0-4)*w+x]>=t2&&L[(r0+4)*w+x]>=t2) PV[k]=0; } }
    N.list.forEach(function(q){ var R=q.R*s,cx=q.x*s,cy=q.y*s,band=Math.max(2.5,.22*R),rr=R+band,b=q.box?[q.box[0]*s-.1*R,q.box[1]*s-.1*R,q.box[2]*s+.1*R,q.box[3]*s+.1*R]:null;
      for(var yy=Math.max(0,Math.floor(cy-rr));yy<=Math.min(h-1,Math.ceil(cy+rr));yy++) for(var xx=Math.max(0,Math.floor(cx-rr));xx<=Math.min(w-1,Math.ceil(cx+rr));xx++){ var dd=Math.hypot(xx-cx,yy-cy); if(dd>rr) continue;
        if(Math.abs(dd-R)<=band||!b&&dd<R||b&&xx>=b[0]&&xx<=b[2]&&yy>=b[1]&&yy<=b[3]) PV[yy*w+xx]=0; } });
    return PV; }
  var bad={},PLM=null; function plankM(){ if(PLM) return PLM; PLM=new Uint8Array(w*h); var E=exRings(),x,y,k,o; for(var i=0;i<w*h;i++) PLM[i]=L[i]<thr&&!E[i]?1:0;
    for(var gx=0;gx*s<w;gx++){ var c0=Math.round(gx*s); for(y=0;y<h;y++) for(o=-2;o<=2;o++){ x=c0+o; if(x<5||x>=w-5) continue; k=y*w+x; if(PLM[k]&&L[y*w+c0-4]>=thr&&L[y*w+c0+4]>=thr) PLM[k]=0; } }
    for(var gy=0;gy*s<h;gy++){ var r0=Math.round(gy*s); for(x=0;x<w;x++) for(o=-2;o<=2;o++){ y=r0+o; if(y<5||y>=h-5) continue; k=y*w+x; if(PLM[k]&&L[(r0-4)*w+x]>=thr&&L[(r0+4)*w+x]>=thr) PLM[k]=0; } }
    /* maskují se jen překážky s číslem (jisté); ostatní můžou být kusy hledaného prkna */
    var withN={}; A.forEach(function(z){ if(z.o) withN[z.o.id]=1; });
    obs.forEach(function(o){ if(bad[o.id]||!withN[o.id]) return; var pl=mpoly(o),rad=(HW[o.type]||.2)+.1,b=bbox(pl),X0=Math.max(0,Math.floor((b[0]-rad)*s)),X1=Math.min(w-1,Math.ceil((b[2]+rad)*s)),Y0=Math.max(0,Math.floor((b[1]-rad)*s)),Y1=Math.min(h-1,Math.ceil((b[3]+rad)*s));
      for(var yy=Y0;yy<=Y1;yy++) for(var xx=X0;xx<=X1;xx++) if(pdist({x:xx/s,y:yy/s},pl)<=rad) PLM[yy*w+xx]=0; }); if(findPlank.dbg) findPlank.mask={M:PLM,w:w,h:h}; return PLM; }
  function onPath(o){ var P=pathV(),a=o.rot*Math.PI/180,ux=Math.cos(a),uy=Math.sin(a),r=1*s,n=0;
    /* čára vedoucí přesně po čáře mřížky se z masky ztratí: takový skok se neověřuje */
    if(Math.abs(uy)<.06&&Math.abs(o.y-Math.round(o.y))<.08||Math.abs(ux)<.06&&Math.abs(o.x-Math.round(o.x))<.08) return true;
    for(var yy=Math.max(0,Math.floor(o.y*s-r));yy<=Math.min(h-1,Math.ceil(o.y*s+r));yy++) for(var xx=Math.max(0,Math.floor(o.x*s-r));xx<=Math.min(w-1,Math.ceil(o.x*s+r));xx++){
      if(!P[yy*w+xx]) continue; var dx=xx/s-o.x,dy=yy/s-o.y; if(dx*dx+dy*dy>1) continue; var nn=Math.abs(dx*ux+dy*uy),al=Math.abs(-dx*uy+dy*ux); if(nn<(al>.5?.22:.14)&&al<1.35) continue; n++; }
    return n>=.3*s; }
  var nMax=0; A.forEach(function(x){ if(x.q.n>nMax) nMax=x.q.n; });
  A.forEach(function(x){ var o=x.o; if(!o||(o.type!=='jump'&&o.type!=='tire')||x.q.n===1||x.q.n===nMax) return; if(!onPath(o)){ bad[o.id]=1; x.o=null; } });
  /* číslo daleko od své překážky (přes 1,2 m): obruč nebo skok daleký, které čtečka překážek nenašla, můžou být blíž */
  A.forEach(function(x){ if(!x.o||x.d<=1.2) return; var lj=findPar(L,w,h,s,x.q.x,x.q.y,2,exMask(),thr).lj,tr=lj?null:findTire(L,w,h,s,x.q.x,x.q.y,2.2,exMask(),thr),c=null;
    if(lj) c={type:'longjump',x:+lj.x.toFixed(1),y:+lj.y.toFixed(1),rot:lj.rot}; else if(tr&&tr.frame) c={type:'tire',x:+tr.x.toFixed(1),y:+tr.y.toFixed(1),rot:tr.rot==null?x.o.rot:tr.rot};
    if(!c||obsDist(x.q,c)>=x.d-.3) return; var pc=opoly(c); if(obs.some(function(o){ return polyD(pc,opoly(o))<.6; })) return;
    c.id=nid++; obs.push(c); added.push(c.id); x.o=c; x.d=obsDist(x.q,c); });
  /* číslo daleko od překážek: vezme nejbližší překážku, která žádné číslo nemá (do 4,5 m) */
  var usedO={}; A.forEach(function(x){ if(x.o) usedO[x.o.id]=1; });
  A.forEach(function(x){ if(x.o) return; var bo=null,bd=4.5; obs.forEach(function(o){ if(usedO[o.id]||bad[o.id]) return; if((o.type==='jump'||o.type==='tire')&&!onPath(o)){ bad[o.id]=1; return; } var d=obsDist(x.q,o); if(d<bd){ bd=d; bo=o; } }); if(bo){ x.o=bo; x.d=bd; x.far=true; usedO[bo.id]=1; issues.push({n:x.q.n,t:'far'}); } });
  /* číslo bez překážky: obruč, skok daleký, skok se dvěma břevny; jinak dočasný skok u čísla (k opravě) */
  A.forEach(function(x,k){ if(x.o) return;
    var par=findPar(L,w,h,s,x.q.x,x.q.y,2.4,exMask(),thr),lj=par.lj,tr=null,br=null,o=null,pl=null;
    var pv=null,nx=null; for(var j=k-1;j>=0;j--) if(A[j].o){ pv=A[j].o; break; } for(j=k+1;j<A.length;j++) if(A[j].o){ nx=A[j].o; break; }
    var dx=(nx?nx.x:x.q.x)-(pv?pv.x:x.q.x),dy=(nx?nx.y:x.q.y)-(pv?pv.y:x.q.y),rr=((Math.round(Math.atan2(dy,dx)*180/Math.PI)%360)+360)%360;
    if(lj&&Math.hypot(lj.x-x.q.x,lj.y-x.q.y)<2.4) o={id:nid++,type:'longjump',x:+lj.x.toFixed(1),y:+lj.y.toFixed(1),rot:lj.rot};
    else if((tr=findTire(L,w,h,s,x.q.x,x.q.y,2.4,exMask(),thr))&&tr.frame&&Math.hypot(tr.x-x.q.x,tr.y-x.q.y)<2.4) o={id:nid++,type:'tire',x:+tr.x.toFixed(1),y:+tr.y.toFixed(1),rot:tr.rot==null?rr:tr.rot};
    else if((br=findBar(L,w,h,s,x.q.x,x.q.y,2.2,exMask(),thr))&&Math.hypot(br.x-x.q.x,br.y-x.q.y)<2.2) o={id:nid++,type:'jump',x:+br.x.toFixed(1),y:+br.y.toFixed(1),rot:br.rot};
    else if(pl=findPlank(plankM(),w,h,s,x.q.x,x.q.y,11)) o={id:nid++,type:pl.type,x:+pl.x.toFixed(1),y:+pl.y.toFixed(1),rot:Math.round(pl.rot)%360};
    else if(par.ox&&Math.hypot(par.ox.x-x.q.x,par.ox.y-x.q.y)<2) o={id:nid++,type:'jump',x:+par.ox.x.toFixed(1),y:+par.ox.y.toFixed(1),rot:par.ox.rot};
    else { o={id:nid++,type:'jump',x:+x.q.x.toFixed(1),y:+x.q.y.toFixed(1),rot:rr,ph:1}; issues.push({n:x.q.n,t:'place'}); }
    obs.push(o); added.push(o.id); x.o=o; x.d=0; });
  A.forEach(function(x){ if(x.o){ rt.push(x.o.id); nn.push(x.q.n); } });
  /* číslo nejisté: špatně sedí na šablony, nebo by jiné přiřazení všech čísel bylo skoro stejně dobré */
  N.list.forEach(function(q){ if(q.cost>.2||(q.regret!=null?q.regret<.04:q.margin<.015)) issues.push({n:q.n,t:'glyph'}); });
  obs.forEach(function(o){ if(rt.indexOf(o.id)<0) issues.push({o:o.id,t:'unused'}); });
  var mx=0; N.list.forEach(function(q){ if(q.n>mx) mx=q.n; });
  if(rt.length<2) return {ok:false,why:'attach',nums:N.list};
  yield; var PM=pathMap(L,w,h,s,obs,N.list,thr+30,opt); yield;
  var T2=performance.now(),F=yield* fitG(obs,rt,PM,w,h,s,opt),T3=performance.now();
  F.margin.forEach(function(m,i){ if(m<3) issues.push({n:nn[i],t:'dir'}); });
  return {ok:true,ms:[Math.round(T2-T1),Math.round(T3-T2)],obs:obs,added:added,route:rt,nn:nn,turns:F.turns,nums:N.list,att:A.map(function(x){return {n:x.q.n,o:x.o&&x.o.id,d:+x.d.toFixed(2),moved:!!x.moved};}),fit:F,issues:issues,max:mx,PM:PM}; }
function run(D,s,W,H,obs,opt){ var T0=performance.now(),N=nums(D,s,opt),T1=performance.now(),r=route(D,s,obs,N,opt); if(r.ok) r.ms=[Math.round(T1-T0)].concat(r.ms); return r; }
return {run:run,nums:nums,clean:clean,rescue:rescue,needRescue:needRescue,route:route,routeG:routeG,findLJ:findLJ,findPar:findPar,findTire:findTire,findPlank:findPlank,findBar:findBar,digitsOf:ringDigits,numbers:numbers,rings:rings,attach:attach,pathMap:pathMap,fit:fit,gray:gray,hungarian:hungarian,classify:classify,tpl:tpl};
})();
