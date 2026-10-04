
/* ---------- čtečka plánků: mřížka, překážky v metrech (stejný kód, jakým se přepisují parkury trenérů) ---------- */
(function(){
var PR={};
PR.data=function(im){var c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;var x=c.getContext('2d');x.drawImage(im,0,0);return x.getImageData(0,0,c.width,c.height);};
function lum(d,i){return (d[i]+d[i+1]+d[i+2])/3;}
PR.grid=function(D,opt){
var g0=PR.grid1(D,opt); if(g0||(opt&&opt.gthr))return g0;
return PR.grid1(D,Object.assign({},opt||{},{gthr:246}));
};
PR.grid1=function(D,opt){
var W=D.width,H=D.height,d=D.data,col=new Float32Array(W),row=new Float32Array(H),thr=(opt&&opt.gthr)||215;
for(var y=0;y<H;y++)for(var x=0;x<W;x++){var i=(y*W+x)*4;if(lum(d,i)<thr){col[x]++;row[y]++;}}
function peaks(p,n,len){var out=[];for(var i=1;i<n-1;i++)if(p[i]>.3*len&&p[i]>=p[i-1]&&p[i]>=p[i+1]){if(out.length&&i-out[out.length-1]<=3){if(p[i]>p[out[out.length-1]])out[out.length-1]=i;}else out.push(i);}return out;}
function lattice(ps){
if(ps.length<4)return null;
var df=[];for(var i=1;i<ps.length;i++)df.push(ps[i]-ps[i-1]);
var best=null;df.forEach(function(v){if(v<8)return;var m=df.filter(function(u){return Math.abs(u-v)<=Math.max(1.5,v*.03);});if(!best||m.length>best.length)best=m;});
if(!best)return null;
var s=best.reduce(function(a,b){return a+b;},0)/best.length;
var p0=ps[0],pts=[];ps.forEach(function(p){var k=Math.round((p-p0)/s);if(Math.abs(p-(p0+k*s))<Math.max(2,.12*s))pts.push([k,p]);});
var n=pts.length,sx=0,sy=0,sxx=0,sxy=0;pts.forEach(function(q){sx+=q[0];sy+=q[1];sxx+=q[0]*q[0];sxy+=q[0]*q[1];});
var sl=(n*sxy-sx*sy)/(n*sxx-sx*sx),o=(sy-sl*sx)/n,k0=pts[0][0],k1=pts[n-1][0];
return {s:sl,o:o+k0*sl,n:k1-k0,lines:n};
}
var gx=lattice(peaks(col,W,H)),gy=lattice(peaks(row,H,W));
if(!gx||!gy)return null;
function dark(x,y){x=Math.round(x);y=Math.round(y);for(var o=-1;o<=1;o++){var xx=x+o;if(xx<0||xx>=W||y<0||y>=H)continue;if(lum(d,(y*W+xx)*4)<thr)return true;}return false;}
function darkV(x,y){x=Math.round(x);y=Math.round(y);for(var o=-1;o<=1;o++){var yy=y+o;if(yy<0||yy>=H||x<0||x>=W)continue;if(lum(d,(yy*W+x)*4)<thr)return true;}return false;}
function trim(a,b,vert){
var ok=[];for(var j=0;j<a.n;j++){var mid=a.o+(j+.5)*a.s,hit=0,tot=0;for(var i=0;i<=b.n;i++){var p=b.o+i*b.s;tot++;if(vert?darkV(mid,p):dark(p,mid))hit++;}ok.push(hit/tot>.25);}
var best=[0,-1],cur=0;for(var j2=0;j2<ok.length;j2++){if(ok[j2]){cur++;if(cur>best[1]-best[0]+1)best=[j2-cur+1,j2];}else cur=0;}
if(best[1]<0)return;a.o=a.o+best[0]*a.s;a.n=best[1]-best[0]+1;
}
trim(gy,gx,false);trim(gx,gy,true);
var cell=(opt&&opt.cell)||1;
return {sx:gx.s/cell,sy:gy.s/cell,x0:gx.o,y0:gy.o,W:gx.n*cell,H:gy.n*cell,lx:gx.lines,ly:gy.lines};
};
function comps(mask,W,H,minA){
var lab=new Int32Array(W*H),out=[],st=new Int32Array(W*H),n=0;
for(var i0=0;i0<W*H;i0++){
if(!mask[i0]||lab[i0])continue;n++;var sp=0,cl0=mask[i0];st[sp++]=i0;lab[i0]=n;
var A=0,sx=0,sy=0,sxx=0,syy=0,sxy=0,sx3=0,sy3=0,sx2y=0,sxy2=0,x0=1e9,y0=1e9,x1=-1,y1=-1,ox=i0%W,oy=(i0-ox)/W;
while(sp){var k=st[--sp],x=k%W,y=(k-x)/W,u=x-ox,v=y-oy;A++;sx+=u;sy+=v;sxx+=u*u;syy+=v*v;sxy+=u*v;sx3+=u*u*u;sy3+=v*v*v;sx2y+=u*u*v;sxy2+=u*v*v;
if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;
if(x>0&&mask[k-1]===cl0&&!lab[k-1]){lab[k-1]=n;st[sp++]=k-1;}if(x<W-1&&mask[k+1]===cl0&&!lab[k+1]){lab[k+1]=n;st[sp++]=k+1;}
if(y>0&&mask[k-W]===cl0&&!lab[k-W]){lab[k-W]=n;st[sp++]=k-W;}if(y<H-1&&mask[k+W]===cl0&&!lab[k+W]){lab[k+W]=n;st[sp++]=k+W;}}
if(A<minA)continue;
out.push({id:n,A:A,m:[sx,sy,sxx,syy,sxy,sx3,sy3,sx2y,sxy2],o:[ox,oy],bb:[x0,y0,x1,y1],cl:cl0});
}
return {lab:lab,list:out};
}
function pca(c){
var A=c.A,m=c.m,cx=m[0]/A,cy=m[1]/A,vxx=m[2]/A-cx*cx,vyy=m[3]/A-cy*cy,vxy=m[4]/A-cx*cy;
var th=.5*Math.atan2(2*vxy,vxx-vyy),r=Math.sqrt(((vxx-vyy)/2)*((vxx-vyy)/2)+vxy*vxy),l1=(vxx+vyy)/2+r,l2=Math.max(0,(vxx+vyy)/2-r);
return {x:cx+c.o[0],y:cy+c.o[1],ang:th,len:Math.sqrt(12*l1),wid:Math.sqrt(12*l2)};
}
function mergeC(a,b){
var dx=b.o[0]-a.o[0],dy=b.o[1]-a.o[1],m=b.m,A=b.A;
var sx=m[0]+A*dx,sy=m[1]+A*dy,sxx=m[2]+2*dx*m[0]+A*dx*dx,syy=m[3]+2*dy*m[1]+A*dy*dy,sxy=m[4]+dx*m[1]+dy*m[0]+A*dx*dy;
var sx3=m[5]+3*dx*m[2]+3*dx*dx*m[0]+A*dx*dx*dx,sy3=m[6]+3*dy*m[3]+3*dy*dy*m[1]+A*dy*dy*dy;
var sx2y=m[7]+2*dx*m[4]+dy*m[2]+dx*dx*m[1]+2*dx*dy*m[0]+A*dx*dx*dy;
var sxy2=m[8]+2*dy*m[4]+dx*m[3]+dy*dy*m[0]+2*dx*dy*m[1]+A*dx*dy*dy;
var r={id:a.id,cl:a.cl,A:a.A+A,m:[a.m[0]+sx,a.m[1]+sy,a.m[2]+sxx,a.m[3]+syy,a.m[4]+sxy,a.m[5]+sx3,a.m[6]+sy3,a.m[7]+sx2y,a.m[8]+sxy2],o:a.o,
bb:[Math.min(a.bb[0],b.bb[0]),Math.min(a.bb[1],b.bb[1]),Math.max(a.bb[2],b.bb[2]),Math.max(a.bb[3],b.bb[3])],ids:(a.ids||[a.id]).concat(b.ids||[b.id])};
return r;
}
function circ(c){
var n=c.A,m=c.m,Sx=m[0],Sy=m[1],Sxx=m[2],Syy=m[3],Sxy=m[4];
var M=[[Sxx,Sxy,Sx],[Sxy,Syy,Sy],[Sx,Sy,n]],b=[-(m[5]+m[8]),-(m[7]+m[6]),-(Sxx+Syy)];
function det(a){return a[0][0]*(a[1][1]*a[2][2]-a[1][2]*a[2][1])-a[0][1]*(a[1][0]*a[2][2]-a[1][2]*a[2][0])+a[0][2]*(a[1][0]*a[2][1]-a[1][1]*a[2][0]);}
var D0=det(M);if(Math.abs(D0)<1e-9)return null;
function rep(k){return M.map(function(r,i){return r.map(function(v,j){return j===k?b[i]:v;});});}
var Dd=det(rep(0))/D0,Ee=det(rep(1))/D0,Ff=det(rep(2))/D0,cx=-Dd/2,cy=-Ee/2,R2=cx*cx+cy*cy-Ff;
if(!(R2>0))return null;
return {x:cx+c.o[0],y:cy+c.o[1],R:Math.sqrt(R2)};
}
function refine(lab,W,c,C){
var ids={};(c.ids||[c.id]).forEach(function(i){ids[i]=1;});var bb=c.bb,pts=[];
for(var y=bb[1];y<=bb[3];y++)for(var x=bb[0];x<=bb[2];x++)if(ids[lab[y*W+x]])pts.push(x,y);
var n=pts.length/2,mx=0,my=0;for(var i=0;i<pts.length;i+=2){mx+=pts[i];my+=pts[i+1];}mx/=n;my/=n;
var cx=C.x,cy=C.y,R=C.R;
for(var it=0;it<30;it++){var sd=0,ux=0,uy=0;
for(var j=0;j<pts.length;j+=2){var dx=cx-pts[j],dy=cy-pts[j+1],dd=Math.hypot(dx,dy)||1e-9;sd+=dd;ux+=dx/dd;uy+=dy/dd;}
R=sd/n;var nx=mx+R*ux/n,ny=my+R*uy/n;if(Math.hypot(nx-cx,ny-cy)<.01){cx=nx;cy=ny;break;}cx=nx;cy=ny;}
return {x:cx,y:cy,R:R};
}
function arcSpan(lab,W,c,C){
var ids={};(c.ids||[c.id]).forEach(function(i){ids[i]=1;});
var bins=new Uint8Array(360),bb=c.bb,cnt=0;
for(var y=bb[1];y<=bb[3];y++)for(var x=bb[0];x<=bb[2];x++){if(!ids[lab[y*W+x]])continue;var a=Math.atan2(y-C.y,x-C.x)*180/Math.PI;bins[((Math.floor(a)%360)+360)%360]=1;cnt++;}
var best=0,bs=0;for(var s=0;s<360;s++){if(bins[s])continue;var l=0;while(l<360&&!bins[(s+l)%360])l++;if(l>best){best=l;bs=s;}}
if(best===0)return {a0:0,a1:360,span:360};
var a0=(bs+best)%360,span=360-best;return {a0:a0,a1:a0+span,span:span};
}
function angDiff(a,b){var d=Math.abs(a-b)%Math.PI;return Math.min(d,Math.PI-d);}
PR.h={lum:lum,comps:comps,pca:pca,mergeC:mergeC,circ:circ,refine:refine,arcSpan:arcSpan,angDiff:angDiff};
PR.read=function(D,opt){
var h=PR.h,lum=h.lum,comps=h.comps,pca=h.pca,mergeC=h.mergeC,circ=h.circ,refine=h.refine,arcSpan=h.arcSpan,angDiff=h.angDiff;
opt=opt||{};var W=D.width,H=D.height,d=D.data,g=opt.grid||PR.grid(D,opt);if(!g)return {err:'mřížka nenalezena'};
var s=(g.sx+g.sy)/2,S2=s*s;
var F=new Uint8Array(W*H),K=new Uint8Array(W*H),L=new Float32Array(W*H),CH=new Uint8Array(W*H),BL=new Uint8Array(W*H);
for(var i=0,j=0;i<W*H;i++,j+=4){L[i]=lum(d,j);var mx=Math.max(d[j],d[j+1],d[j+2]),mn=Math.min(d[j],d[j+1],d[j+2]);CH[i]=mx-mn;}
function colCls(j){var r=d[j],gg=d[j+1],b=d[j+2];if(r>150&&gg>150&&b<120)return 2;if(b>120&&r<120&&gg<150)return 3;if(r>140&&gg<110&&b<110)return 4;if(gg>120&&r<120&&b<140)return 5;return 6;}
var lo=opt.lo||95,hi=opt.hi||236;
function inpaint(vert){
var n=vert?g.W:g.H,sp=vert?g.sx:g.sy,o0=vert?g.x0:g.y0,len=vert?H:W;
for(var li=0;li<=n;li++){var c0=Math.round(o0+li*sp);
for(var t=0;t<len;t++)for(var dd=-1;dd<=1;dd++){var p=c0+dd; if(p<3||p>(vert?W:H)-4)continue;
var k=vert?t*W+p:p*W+t, st=vert?1:W, a=L[k-3*st], b=L[k+3*st];
if(L[k]<150&&a>=lo&&a<=hi&&b>=lo&&b<=hi&&Math.abs(a-b)<40)L[k]=(a+b)/2;}}
}
inpaint(true);inpaint(false);
function bg(k){return L[k]>=215&&CH[k]<60;}
for(var y=2;y<H-2;y++)for(var x=2;x<W-2;x++){var k=y*W+x,v=L[k];
if((v<215||CH[k]>=60)&&!(bg(k-2)&&bg(k+2))&&!(bg(k-2*W)&&bg(k+2*W)))BL[k]=1;
if(CH[k]>=60){F[k]=colCls(k*4);continue;}
if(v<70&&CH[k]<50&&!(L[k-2]>=70&&L[k+2]>=70)&&!(L[k-2*W]>=70&&L[k+2*W]>=70))K[k]=1; if(v<lo||v>hi)continue;
if(L[k-2]>hi&&L[k+2]>hi)continue; if(L[k-2*W]>hi&&L[k+2*W]>hi)continue;
var nw=0,nd=0; for(var oy=-1;oy<=1;oy++)for(var ox=-1;ox<=1;ox++){var q=L[k+oy*W+ox];if(q>hi)nw=1;else if(q<90)nd=1;}
if(nw&&nd)continue; F[k]=1;}
var cf=comps(F,W,H,Math.max(8,Math.round(.004*S2)));
var P=cf.list.map(function(c){var p=pca(c);c.p=p;return c;});
function toM(px,py){return {x:(px-g.x0)/g.sx,y:(py-g.y0)/g.sy};}
function info(c){var p=c.p||pca(c);return {x:p.x,y:p.y,ang:p.ang,len:p.len/s,wid:p.wid/s,A:c.A/S2};}
var used={},M=[];
P.sort(function(a,b){return b.A-a.A;});
for(var a=0;a<P.length;a++){
if(used[a])continue;var c=P[a];used[a]=1;
for(var guard=0;guard<6;guard++){
var ci=info(c),mergedAny=false;
for(var b=0;b<P.length;b++){
if(used[b]||P[b].cl!==c.cl)continue;var e=info(P[b]);
var tube=ci.A>.5&&ci.wid>.25&&ci.len>1.5&&e.A>.03&&Math.max(e.len,e.wid)<ci.wid*2.5+.4&&e.wid<ci.wid+.35;
var vx=e.x-ci.x,vy=e.y-ci.y,dd=Math.hypot(vx,vy)/s;
if(dd<1e-6)continue;var va=Math.atan2(vy,vx),perp=Math.abs(Math.sin(va-ci.ang))*dd;
if(tube){ var gap=dd-ci.len/2-Math.max(e.len,e.wid)/2; if(perp<.3&&gap<.9&&gap>-.3){c=mergeC(c,P[b]);c.p=pca(c);used[b]=1;mergedAny=true;break;} continue; }
if(angDiff(ci.ang,e.ang)>.3||angDiff(va,ci.ang)>.25)continue;
var gap2=dd-(ci.len+e.len)/2;
if(gap2<.14&&gap2>-.2&&Math.abs(e.wid-ci.wid)<.08){c=mergeC(c,P[b]);c.p=pca(c);used[b]=1;mergedAny=true;break;}
}
if(!mergedAny)break;
}
c.p=pca(c);M.push(c);
}
var obs=[],left=[];
if(opt.debug){var dbg=[];M.forEach(function(c){var q=info(c),m=toM(q.x,q.y);if(Math.hypot(m.x-opt.debug[0],m.y-opt.debug[1])<opt.debug[2])dbg.push({x:+m.x.toFixed(2),y:+m.y.toFixed(2),A:+q.A.toFixed(3),len:+q.len.toFixed(2),wid:+q.wid.toFixed(3),ang:+(q.ang*180/Math.PI).toFixed(0),so:+(q.A/Math.max(1e-6,q.len*q.wid)).toFixed(2)});});PR.dbg=dbg;}
function tubeFit(c){
var q=info(c);
if(q.A<.45||q.len<1.5)return null;
var t=q.A/q.len;
if(q.wid<1.25*t+.1&&t>.25&&t<1.3){
var ux=Math.cos(q.ang),uy=Math.sin(q.ang),hh=q.len*s/2;
return {type:'tunnel',px:q.x,py:q.y,rot:q.ang,len:q.len,thick:t,ends:[[q.x-ux*hh,q.y-uy*hh],[q.x+ux*hh,q.y+uy*hh]],tan:[[-ux,-uy],[ux,uy]]};
}
var C=circ(c);if(!C)return null;C=refine(cf.lab,W,c,C);
var R=C.R/s;if(R<.8||R>8)return null;
var sp=arcSpan(cf.lab,W,c,C),th=sp.span*Math.PI/180,t2=q.A/(R*th);
if(t2<.25||t2>1.4||sp.span<25||sp.span>300)return null;
var a0=sp.a0*Math.PI/180,a1=sp.a1*Math.PI/180,A0=[C.x+C.R*Math.cos(a0),C.y+C.R*Math.sin(a0)],B0=[C.x+C.R*Math.cos(a1),C.y+C.R*Math.sin(a1)];
var am=(a0+a1)/2,Pm=[C.x+C.R*Math.cos(am),C.y+C.R*Math.sin(am)];
return {type:'tunnel',px:(A0[0]+B0[0])/2,py:(A0[1]+B0[1])/2,curved:true,R:R,span:sp.span,thick:t2,ends:[A0,B0],mid:Pm,tan:[[Math.sin(a0),-Math.cos(a0)],[-Math.sin(a1),Math.cos(a1)]]};
}
M.forEach(function(c){c.q=info(c);});
function solid(q){return q.A/Math.max(1e-6,q.len*q.wid);}
function pairs(list,test){var out=[];for(var i=0;i<list.length;i++)for(var j=i+1;j<list.length;j++){var r=test(list[i],list[j]);if(r)out.push([r.sc,i,j,r]);}out.sort(function(a,b){return a[0]-b[0];});return out;}
function roundish(c){var ids={};(c.ids||[c.id]).forEach(function(i){ids[i]=1;});var q=c.p,mr=0,bb=c.bb;
for(var y=bb[1];y<=bb[3];y++)for(var x=bb[0];x<=bb[2];x++)if(ids[cf.lab[y*W+x]]){var r=Math.hypot(x-q.x,y-q.y);if(r>mr)mr=r;}
return c.A/(Math.PI*mr*mr+1e-9)>.82;}
var Z=M.filter(function(c){var q=c.q;return solid(q)>=.6&&q.wid*s>=1.6&&q.len>=.55&&q.len<=1.5&&q.wid>=.13&&q.A>=.08;}), zu={};
Z.forEach(function(c){c.round=c.q.wid>.45&&roundish(c);});
pairs(Z,function(a,b){
var qa=a.q,qb=b.q,vx=qb.x-qa.x,vy=qb.y-qa.y,D=Math.hypot(vx,vy)/s,va=Math.atan2(vy,vx),fat=Math.min(qa.wid,qb.wid)>.45;
if(a.round||b.round||a.cl!==b.cl)return null;
if(!fat&&(angDiff(qa.ang,qb.ang)>.25||angDiff(va,qa.ang)>.25))return null;
if(Math.abs(qa.A-qb.A)>.6*Math.max(qa.A,qb.A))return null;
var ty=null; if(fat&&D>=2.4&&D<=4.4)ty='aframe'; else if(!fat&&D>=7.5&&D<=11.8)ty='dogwalk'; else if(!fat&&D>=2&&D<=3.6)ty='seesaw';
if(!ty)return null; return {sc:Math.abs(D-(ty==='dogwalk'?9.8:ty==='aframe'?3.3:2.7)),ty:ty,D:D,va:va};
}).forEach(function(p){var i=p[1],j=p[2];if(zu[i]||zu[j])return;zu[i]=zu[j]=1;var a=Z[i].q,b=Z[j].q;Z[i].cls=Z[j].cls='zone';
var ct={type:p[3].ty,px:(a.x+b.x)/2,py:(a.y+b.y)/2,rot:p[3].va,zoneDist:p[3].D};obs.push(ct);
M.forEach(function(e){ if(e.cls)return; var q=e.q,dx=q.x-ct.px,dy=q.y-ct.py,ux=Math.cos(ct.rot),uy=Math.sin(ct.rot),along=(dx*ux+dy*uy)/s,perp=Math.abs(-dx*uy+dy*ux)/s;
if(Math.abs(along)<p[3].D/2&&perp<.5&&(angDiff(q.ang,ct.rot)<.3||q.len<1.2))e.cls='mid'; });
});
var TT=[];
M.forEach(function(c){ if(c.cls)return; var tb=tubeFit(c); if(tb){c.cls='tunnel';c.tb=tb;TT.push(c);} });
TT.forEach(function(c){
for(var guard=0;guard<3;guard++){
var tb=c.tb,best=null;
M.forEach(function(e,ei){ if(e.cls||e.dead)return; var q=e.q; if(q.A<.05||Math.max(q.len,q.wid)>2.2||q.wid>tb.thick+.35)return;
for(var k=0;k<2;k++){var E=tb.ends[k],T=tb.tan[k],vx=q.x-E[0],vy=q.y-E[1],dd=Math.hypot(vx,vy)/s; if(dd>1.4)continue;
var cosA=(vx*T[0]+vy*T[1])/(Math.hypot(vx,vy)||1); if(cosA<.5)continue; if(!best||dd<best.d)best={e:e,d:dd};}});
if(!best)break;
var m2=mergeC(c,best.e);m2.p=pca(m2);var tb2=tubeFit(m2);if(!tb2)break;
best.e.dead=1;c.A=m2.A;c.m=m2.m;c.bb=m2.bb;c.ids=m2.ids;c.p=m2.p;c.q=info(c);c.tb=tb2;
}
obs.push(c.tb);
});
M=M.filter(function(c){return !c.dead;});
var Wg=[],Bo=[],CB=[];
M.forEach(function(c){ if(c.cls)return; var q=c.q, so=solid(q);
if(so<.6||q.wid*s<1.6){left.push(c);return;}
if(c.cl>=2&&q.len>=.9&&q.len<=1.9&&q.wid<=.32) CB.push(c);
else if(q.len>=.55&&q.len<=1.5&&q.wid>=.13&&q.A>=.08) left.push(c);
else if(q.len>=.25&&q.len<=.8&&q.wid<.2&&q.A>=.008) Wg.push(c);
else if(q.len>.8&&q.len<=1.7&&q.wid<.25) Bo.push(c);
else left.push(c);
});
CB.forEach(function(c){ var q=c.q; c.cls='jump'; obs.push({type:'jump',px:q.x,py:q.y,rot:q.ang+Math.PI/2,bar:q.len,bs:.9,colbar:1}); });
var frag=left.filter(function(c){return !c.cls&&c.q&&c.q.wid>=.28&&c.q.A>=.15&&c.q.len<2.5;});
var fu={};
function fragArc(a,b){
var qa=a.q,qb=b.q,P1=[qa.x,qa.y],P2=[qb.x,qb.y],t1=[Math.cos(qa.ang),Math.sin(qa.ang)],t2=[Math.cos(qb.ang),Math.sin(qb.ang)];
var th=(qa.wid+qb.wid)/2, n1=[-t1[1],t1[0]],n2=[-t2[1],t2[0]], den=n1[0]*n2[1]-n1[1]*n2[0];
var dx=P2[0]-P1[0],dy=P2[1]-P1[1];
if(Math.abs(den)<.08){
var u=[dx,dy],ul=Math.hypot(dx,dy);u=[u[0]/ul,u[1]/ul]; if(Math.abs(u[0]*t1[0]+u[1]*t1[1])<.9)return null;
var e1=[P1[0]-u[0]*qa.len*s/2,P1[1]-u[1]*qa.len*s/2],e2=[P2[0]+u[0]*qb.len*s/2,P2[1]+u[1]*qb.len*s/2],Ls=Math.hypot(e2[0]-e1[0],e2[1]-e1[1])/s;
if(Ls<2.4||Ls>7)return null;
return {type:'tunnel',px:(e1[0]+e2[0])/2,py:(e1[1]+e2[1])/2,rot:Math.atan2(u[1],u[0]),len:Ls,thick:th,ends:[e1,e2],tan:[[-u[0],-u[1]],u]};
}
var k1=(dx*n2[1]-dy*n2[0])/den, C=[P1[0]+n1[0]*k1,P1[1]+n1[1]*k1], R1=Math.hypot(P1[0]-C[0],P1[1]-C[1]),R2=Math.hypot(P2[0]-C[0],P2[1]-C[1]);
if(Math.abs(R1-R2)>.3*Math.max(R1,R2))return null; var R=(R1+R2)/2; if(R/s<.8||R/s>8)return null;
var b1=Math.atan2(P1[1]-C[1],P1[0]-C[0]),b2=Math.atan2(P2[1]-C[1],P2[0]-C[0]),db=Math.atan2(Math.sin(b2-b1),Math.cos(b2-b1)),sg=db>0?1:-1;
var a0=b1-sg*(qa.len*s/2)/R,a1=b2+sg*(qb.len*s/2)/R, span=Math.abs(db)+(qa.len+qb.len)*s/2/R;
if(span*180/Math.PI>300||R*span/s<2.4)return null;
if(sg<0){var tmp=a0;a0=a1;a1=tmp;}
var A0=[C[0]+R*Math.cos(a0),C[1]+R*Math.sin(a0)],B0=[C[0]+R*Math.cos(a1),C[1]+R*Math.sin(a1)],am=(a0+a1)/2,Pm=[C[0]+R*Math.cos(am),C[1]+R*Math.sin(am)];
return {type:'tunnel',px:(A0[0]+B0[0])/2,py:(A0[1]+B0[1])/2,curved:true,R:R/s,span:Math.round(span*180/Math.PI),thick:th,ends:[A0,B0],mid:Pm,tan:[[Math.sin(a0),-Math.cos(a0)],[-Math.sin(a1),Math.cos(a1)]]};
}
pairs(frag,function(a,b){var qa=a.q,qb=b.q,D=Math.hypot(qb.x-qa.x,qb.y-qa.y)/s,gap=D-(qa.len+qb.len)/2;
if(gap>1.1||Math.abs(qa.wid-qb.wid)>.3)return null; var tb=fragArc(a,b);
if(!tb)return null; return {sc:gap,tb:tb};
}).forEach(function(p){var i=p[1],j=p[2];if(fu[i]||fu[j])return;fu[i]=fu[j]=1;frag[i].cls=frag[j].cls='tunnel';obs.push(p[3].tb);});
left=left.filter(function(c){return c.cls!=='tunnel';});
left=left.filter(function(c){ if(!c.cls&&c.q&&c.q.wid<.3&&c.q.len<1&&c.q.len>=.25&&solid(c.q)>=.6&&c.q.wid*s>=1.6){Wg.push(c);return false;} return true; });
function barScore(ax,ay,bx,by){var n=0,h=0;for(var t=.2;t<=.8;t+=.04){var x=Math.round(ax+(bx-ax)*t),y=Math.round(ay+(by-ay)*t),hit=0;
for(var oy=-2;oy<=2&&!hit;oy++)for(var ox=-2;ox<=2&&!hit;ox++){var k=(y+oy)*W+x+ox;if(k>=0&&k<W*H&&L[k]<120)hit=1;}n++;h+=hit;}return h/n;}
var wu={};
/* „břevno“ z jednoho křídla, které je jen čarou mřížky, není skok */
function onGrid(ax,ay,bx,by){ if(Math.abs(ax-bx)<4){ var gx=((ax+bx)/2-g.x0)/g.sx; if(Math.abs(gx-Math.round(gx))*g.sx<3)return true; }
if(Math.abs(ay-by)<4){ var gy=((ay+by)/2-g.y0)/g.sy; if(Math.abs(gy-Math.round(gy))*g.sy<3)return true; } return false; }
pairs(Wg,function(a,b){
var qa=a.q,qb=b.q,D=Math.hypot(qb.x-qa.x,qb.y-qa.y)/s;
if(D<1.1||D>2.8)return null;
if(Math.abs(qa.len-qb.len)>.25||Math.abs(qa.wid-qb.wid)>.1)return null;
var bs=barScore(qa.x,qa.y,qb.x,qb.y);if(bs<.75)return null;
return {sc:Math.abs(D-1.9)+(1-bs)*2,D:D,va:Math.atan2(qb.y-qa.y,qb.x-qa.x),bs:bs};
}).forEach(function(p){var i=p[1],j=p[2];if(wu[i]||wu[j])return;wu[i]=wu[j]=1;var a=Wg[i].q,b=Wg[j].q;
obs.push({type:'jump',px:(a.x+b.x)/2,py:(a.y+b.y)/2,rot:p[3].va+Math.PI/2,bar:p[3].D,bs:+p[3].bs.toFixed(2)});});
var bars=obs.filter(function(o){return o.type==='jump';}).map(function(o){return o.bar;}).sort(), barM=bars.length?bars[Math.floor(bars.length/2)]:1.9;
Wg.forEach(function(c,i){ if(wu[i])return; var q=c.q,ux=Math.cos(q.ang),uy=Math.sin(q.ang);
[1,-1].forEach(function(sg){ if(wu[i])return; var run=0;
for(var t=q.len/2+.08;t<=barM+.2;t+=.04){var x=Math.round(q.x+sg*ux*t*s),y=Math.round(q.y+sg*uy*t*s),hit=0;
for(var oy=-1;oy<=1&&!hit;oy++)for(var ox=-1;ox<=1&&!hit;ox++){var k=(y+oy)*W+x+ox;if(k>=0&&k<W*H&&L[k]<120)hit=1;}
if(hit)run=t;else break;}
if(run>=barM*.6&&!onGrid(q.x,q.y,q.x+sg*ux*run*s,q.y+sg*uy*run*s)){wu[i]=1;obs.push({type:'jump',px:q.x+sg*ux*barM/2*s,py:q.y+sg*uy*barM/2*s,rot:q.ang+Math.PI/2,bar:barM,bs:.5,one:1});}
});
});
var Bd=Wg.filter(function(c,i){return !wu[i];}).concat(Bo), bu={};
Bd.forEach(function(c,i){ if(bu[i])return; var grp=[i],q=c.q;
Bd.forEach(function(e,j){ if(j===i||bu[j])return; var r=e.q; if(angDiff(q.ang,r.ang)>.25)return;
var D=Math.hypot(r.x-q.x,r.y-q.y)/s; if(D<.15||D>1.6||Math.abs(r.len-q.len)>.35)return; var va=Math.atan2(r.y-q.y,r.x-q.x); if(angDiff(va,q.ang+Math.PI/2)>.35)return; grp.push(j); });
if(grp.length>=3){ grp.forEach(function(k){bu[k]=1;}); var mx=0,my=0; grp.forEach(function(k){mx+=Bd[k].q.x;my+=Bd[k].q.y;}); mx/=grp.length;my/=grp.length;
obs.push({type:'longjump',px:mx,py:my,rot:q.ang+Math.PI/2,boards:grp.length}); }
});
Bd.forEach(function(c,i){if(!bu[i])left.push(c);});
var ck=comps(BL,W,H,3).list.map(function(c){c.p=pca(c);return c;}).filter(function(c){var q=c.p;return q.len/s<.3&&q.wid/s>.04&&q.len<2.2*q.wid+2&&c.A/S2<.05;});
var adj=ck.map(function(){return [];});
for(var u=0;u<ck.length;u++)for(var v2=u+1;v2<ck.length;v2++){var dd2=Math.hypot(ck[u].p.x-ck[v2].p.x,ck[u].p.y-ck[v2].p.y)/s;if(dd2>=.4&&dd2<=.85){adj[u].push(v2);adj[v2].push(u);}}
var seen={};
for(var u2=0;u2<ck.length;u2++){ if(seen[u2]||!adj[u2].length)continue; var st=[u2],grp2=[];seen[u2]=1; while(st.length){var z=st.pop();grp2.push(z);adj[z].forEach(function(w){if(!seen[w]){seen[w]=1;st.push(w);}});}
if(grp2.length<5)continue;
var c2={A:0,m:[0,0,0,0,0,0,0,0,0],o:[0,0]}; grp2.forEach(function(z){var p=ck[z].p;c2.A++;c2.m[0]+=p.x;c2.m[1]+=p.y;c2.m[2]+=p.x*p.x;c2.m[3]+=p.y*p.y;c2.m[4]+=p.x*p.y;});
var q2=pca(c2); if(q2.wid/s>.35||q2.len/s<2.4||grp2.length<6)continue;
obs.push({type:'weave',px:q2.x,py:q2.y,rot:q2.ang,poles:grp2.length,len:q2.len/s});
}
var mB=opt.margin==null?.3:opt.margin;
/* okrajový pás s popisky (čísla metrů v krajních buňkách mřížky): překážky v něm jsou jen písmena */
function band(side){ var hor=side==='T'||side==='B',n=Math.round(hor?g.W:g.H),hit=0;
for(var c=0;c<n;c++){ var cx0=hor?g.x0+c*g.sx:(side==='L'?g.x0:g.x0+(g.W-1)*g.sx),cy0=hor?(side==='T'?g.y0:g.y0+(g.H-1)*g.sy):g.y0+c*g.sy,
ax=Math.round(cx0+.15*g.sx),bx=Math.round(cx0+.85*g.sx),ay=Math.round(cy0+.15*g.sy),by=Math.round(cy0+.85*g.sy),dk=0,all=0,y0=1e9,y1=-1;
for(var yy=Math.max(0,ay);yy<=Math.min(H-1,by);yy++)for(var xx=Math.max(0,ax);xx<=Math.min(W-1,bx);xx++){all++;if(L[yy*W+xx]<120){dk++;if(yy<y0)y0=yy;if(yy>y1)y1=yy;}}
if(all&&dk/all>.02&&dk/all<.35&&y1-y0>.25*g.sy)hit++;}
return n>=6&&hit/n>=.6;}
var bT=band('T'),bB=band('B'),bL=band('L'),bR=band('R');
obs=obs.filter(function(o){var m=toM(o.px,o.py);return m.x>mB&&m.y>mB&&m.x<g.W-mB&&m.y<g.H-mB;});
obs=obs.filter(function(o,i){ if(o.type!=='jump')return true; for(var j=0;j<obs.length;j++){var e=obs[j]; if(j===i||e.type!=='jump')continue;
if(Math.hypot(e.px-o.px,e.py-o.py)/s<.6&&((e.bs>o.bs)||(e.bs===o.bs&&j<i)))return false;} return true; });
var out=obs.map(function(o){
var m=toM(o.px,o.py),r={type:o.type,x:+m.x.toFixed(2),y:+m.y.toFixed(2)};
if(o.curved){
var A0=toM(o.ends[0][0],o.ends[0][1]),B0=toM(o.ends[1][0],o.ends[1][1]),Pm=toM(o.mid[0],o.mid[1]);
var a=Math.atan2(B0.y-A0.y,B0.x-A0.x),Mx=(A0.x+B0.x)/2,My=(A0.y+B0.y)/2,ux=Math.cos(a),uy=Math.sin(a);
var left2=(Pm.x-Mx)*uy+(Pm.y-My)*(-ux)>0, bend=Math.round(Math.min(180,o.span))*(left2?-1:1);
var Lt=4.5+1.5*Math.min(1,Math.abs(bend)/180),kk=bend*Math.PI/180/Lt,hh=(1-Math.cos(kk*Lt/2))/kk;
r.x=+(Mx-Math.sin(a)*hh).toFixed(2);r.y=+(My+Math.cos(a)*hh).toFixed(2);r.rot=((Math.round(a*180/Math.PI)%360)+360)%360;r.bend=bend;
r.info={R:+o.R.toFixed(2),span:o.span,thick:+o.thick.toFixed(2),A:[+A0.x.toFixed(2),+A0.y.toFixed(2)],B:[+B0.x.toFixed(2),+B0.y.toFixed(2)]};
} else { r.rot=((Math.round(o.rot*180/Math.PI)%360)+360)%360; r.info={}; ['len','thick','zoneDist','bar','bs','boards','poles','one'].forEach(function(k){if(o[k]!=null)r.info[k]=+(+o[k]).toFixed(2);}); }
return r;
});
out.sort(function(a,b){return a.y-b.y||a.x-b.x;});
out.forEach(function(o,i){o.id=i+1;});
var unk=left.filter(function(c){return c.A/S2>.05;}).map(function(c){var q=c.q||info(c),m=toM(q.x,q.y);return {x:+m.x.toFixed(1),y:+m.y.toFixed(1),A:+(c.A/S2).toFixed(2),len:+q.len.toFixed(2),wid:+q.wid.toFixed(2)};});
return {W:g.W,H:g.H,scale:+s.toFixed(2),grid:g,obs:out,unknown:unk,bands:{T:bT,B:bB,L:bL,R:bR}};
};
window.PR=PR;
})();
