
/* ---------- 3D průlet parkurem (vlastní vykreslování, bez knihoven) ---------- */
var V3={on:false,raf:0,last:0,d:0,spd:1,view:'dog',prims:null,path:null,saw:[],labels:[],jumps:[],info:''};
function v3sub(a,b){return [a[0]-b[0],a[1]-b[1],a[2]-b[2]];}
function v3dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];}
function v3cross(a,b){return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];}
function v3norm(a){var l=Math.hypot(a[0],a[1],a[2])||1; return [a[0]/l,a[1]/l,a[2]/l];}
function build3d(){
  var P=[], L=[], saw=[], labels=[], jumps=[];
  function quad(pts,col,alpha){P.push({p:pts,c:col,a:alpha||1});}
  function line(a,b,col,w){L.push({a:a,b:b,c:col,w:w||.05});}
  quad([[-80,-0.02,-80],[S.W+80,-0.02,-80],[S.W+80,-0.02,S.H+80],[-80,-0.02,S.H+80]],'#6f9a5c');
  quad([[0,0,0],[S.W,0,0],[S.W,0,S.H],[0,0,S.H]],'#8fbf78');
  for(var gx=0;gx<=S.W;gx+=5) line([gx,.005,0],[gx,.005,S.H],'rgba(255,255,255,.35)',.03);
  for(var gz=0;gz<=S.H;gz+=5) line([0,.005,gz],[S.W,.005,gz],'rgba(255,255,255,.35)',.03);
  S.obs.forEach(function(o){
    var a=o.rot*PI/180, fx=Math.cos(a), fz=Math.sin(a), sx=-fz, sz=fx, d=DEF[o.type];
    function W(f,y,s){return [o.x+fx*f+sx*s, y, o.y+fz*f+sz*s];}
    if(o.type==='jump'){
      [[.75,1.2],[-1.2,-.75]].forEach(function(w){quad([W(0,0,w[0]),W(0,0,w[1]),W(0,1,w[1]),W(0,1,w[0])],'#b8493c');});
      line(W(0,.58,-.75),W(0,.58,.75),'#f4f4f4',.05); line(W(0,.58,-.4),W(0,.58,.4),'#b8493c',.05); jumps.push([o.x,o.y]);
    } else if(o.type==='tire'){
      line(W(0,0,-.6),W(0,1.15,-.6),'#52606b',.06); line(W(0,0,.6),W(0,1.15,.6),'#52606b',.06);
      for(var k=0;k<16;k++){var t1=k/16*2*PI,t2=(k+1)/16*2*PI; line(W(0,.8+.32*Math.sin(t1),.32*Math.cos(t1)),W(0,.8+.32*Math.sin(t2),.32*Math.cos(t2)),'#e8a838',.09);} jumps.push([o.x,o.y]);
    } else if(o.type==='longjump'){
      [-.6,-.2,.2,.6].forEach(function(f,i){var h=.15+i*.043; quad([W(f-.15,h,-.6),W(f+.15,h,-.6),W(f+.15,h,.6),W(f-.15,h,.6)],'#8c8c5a');}); jumps.push([o.x,o.y]);
    } else if(o.type==='weave'){
      for(var q=0;q<12;q++) line(W(-3.3+q*.6,0,0),W(-3.3+q*.6,1.1,0),q%2?'#f4f4f4':'#8a5fc9',.035);
    } else if(o.type==='tunnel'){
      /* prstence podél osy tunelu; u tunelu do oblouku podél oblouku */
      var R=.32, n=8, segs=o.bend?14:9, Lt=tunLen(o);
      var V=function(s,b){ var p=tunPt(o,s), lx=-Math.sin(p.d), lz=Math.cos(p.d); return [p.x+lx*R*Math.cos(b), .32+R*Math.sin(b), p.y+lz*R*Math.cos(b)]; };
      for(var sgi=0;sgi<segs;sgi++){var s1=-Lt/2+Lt*sgi/segs, s2=-Lt/2+Lt*(sgi+1)/segs;
        for(var j=0;j<n;j++){var b1=j/n*2*PI,b2=(j+1)/n*2*PI;
          quad([V(s1,b1),V(s2,b1),V(s2,b2),V(s1,b2)],(sgi%2?'#3f7fc1':'#5a95d1'),.55);}}
    } else if(o.type==='aframe'){
      var z=.39*2.1;
      quad([W(-2.1,0,-.45),W(0,1.7,-.45),W(0,1.7,.45),W(-2.1,0,.45)],'#b8703a'); quad([W(2.1,0,-.45),W(0,1.7,-.45),W(0,1.7,.45),W(2.1,0,.45)],'#b8703a');
      quad([W(-2.1,.01,-.46),W(-2.1+z,.01+1.7*z/2.1,-.46),W(-2.1+z,.01+1.7*z/2.1,.46),W(-2.1,.01,.46)],'#e8a838');
      quad([W(2.1,.01,-.46),W(2.1-z,.01+1.7*z/2.1,-.46),W(2.1-z,.01+1.7*z/2.1,.46),W(2.1,.01,.46)],'#e8a838');
    } else if(o.type==='dogwalk'){
      var e=[-5.4,-1.85,1.85,5.4], hs=[0,1.25,1.25,0];
      for(var p=0;p<3;p++) quad([W(e[p],hs[p],-.15),W(e[p+1],hs[p+1],-.15),W(e[p+1],hs[p+1],.15),W(e[p],hs[p],.15)],'#4fa8ae');
      var zf=.243*3.55, zh=.243*1.25;
      quad([W(-5.4,.01,-.16),W(-5.4+zf,zh+.01,-.16),W(-5.4+zf,zh+.01,.16),W(-5.4,.01,.16)],'#e8a838');
      quad([W(5.4,.01,-.16),W(5.4-zf,zh+.01,-.16),W(5.4-zf,zh+.01,.16),W(5.4,.01,.16)],'#e8a838');
      [-1.85,1.85].forEach(function(f){line(W(f,0,0),W(f,1.25,0),'#4fa8ae',.06);});
    } else if(o.type==='seesaw'){
      saw.push({o:o,W:W}); line(W(0,0,-.2),W(0,.6,0),'#c9527e',.06); line(W(0,0,.2),W(0,.6,0),'#c9527e',.06);
    }
  });
  // dráha psa podle trasy
  var c=calc(), pts=[];
  c.P.forEach(function(p,i){
    var o=getO(S.route[i]), hl=DEF[o.type].hl;
    if(i>0){var pcs=c.segs[i-1].pcs; pcs.forEach(function(pc,pj){ var nk=pcs.length===1?12:6; for(var k=1;k<=nk;k++){ if(pj===pcs.length-1&&k===nk) break; var q=bz(pc[0],pc[1],pc[2],pc[3],k/nk); pts.push([q.x,q.y,0,i-1]);} });}
    if(o.type==='tunnel'&&o.bend){ var Lb=tunLen(o); for(var s3=0;s3<=12;s3++){ var q3=tunPt(o,(p.rev?1:-1)*Lb/2*(1-2*s3/12)); pts.push([q3.x,q3.y,0,i]); } }
    else if(hl>0){for(var s=0;s<=10;s++){var f=s/10, x=p.en.x+(p.ex.x-p.en.x)*f, z=p.en.y+(p.ex.y-p.en.y)*f, dd=f*2*hl, h=0;
      if(o.type==='aframe') h=1.7*(1-Math.abs(dd-hl)/hl); else if(o.type==='dogwalk') h=dd<3.55?1.25*dd/3.55:dd>2*hl-3.55?1.25*(2*hl-dd)/3.55:1.25; else if(o.type==='seesaw') h=.6*Math.min(dd,2*hl-dd)/hl;
      pts.push([x,z,h,i]);}}
    else pts.push([p.en.x,p.en.y,0,i]);
    labels.push({i:i,x:p.en.x,z:p.en.y});
  });
  if(pts.length){var f0=c.P[0].dir, l0=pts[0]; pts.unshift([l0[0]-f0.x*4,l0[1]-f0.y*4,0,-1]); var fl=c.P[c.P.length-1].dx||c.P[c.P.length-1].dir, ll=pts[pts.length-1]; pts.push([ll[0]+fl.x*4,ll[1]+fl.y*4,0,c.P.length-1]);}
  saw.forEach(function(sw){ var idx=S.route.indexOf(sw.o.id), a=sw.o.rot*PI/180; sw.cos=Math.cos(a); sw.sin=Math.sin(a); sw.idx=idx; sw.sign=-1;
    if(idx>=0){var P0=c.P[idx]; sw.sign=((P0.en.x-sw.o.x)*sw.cos+(P0.en.y-sw.o.y)*sw.sin)<0?-1:1;} });
  var cum=[0]; for(var r2=1;r2<pts.length;r2++) cum.push(cum[r2-1]+Math.hypot(pts[r2][0]-pts[r2-1][0],pts[r2][1]-pts[r2-1][1]));
  V3.prims=P; V3.lines=L; V3.saw=saw; V3.labels=labels; V3.jumps=jumps; V3.path={pts:pts,cum:cum,len:cum[cum.length-1]};
}
function pathAt(d){
  var p=V3.path, i=1; d=Math.max(0,Math.min(p.len,d)); while(i<p.cum.length-1&&p.cum[i]<d) i++;
  var a=p.pts[i-1], b=p.pts[i], f=(d-p.cum[i-1])/((p.cum[i]-p.cum[i-1])||1), x=a[0]+(b[0]-a[0])*f, z=a[1]+(b[1]-a[1])*f, h=a[2]+(b[2]-a[2])*f;
  V3.jumps.forEach(function(j){var dd=Math.hypot(x-j[0],z-j[1]); if(dd<1.3) h+=.5*(1-dd*dd/1.69);});
  return {x:x,z:z,h:h,idx:Math.max(a[3],b[3])};
}
function render3d(){
  var cv=$('c3d'), dpr=Math.min(2,window.devicePixelRatio||1), Wc=cv.clientWidth, Hc=cv.clientHeight;
  if(cv.width!==Math.round(Wc*dpr)||cv.height!==Math.round(Hc*dpr)){cv.width=Math.round(Wc*dpr); cv.height=Math.round(Hc*dpr);}
  var x=cv.getContext('2d'); x.setTransform(dpr,0,0,dpr,0,0);
  var g=x.createLinearGradient(0,0,0,Hc); g.addColorStop(0,'#9cc4e4'); g.addColorStop(1,'#e3eef5'); x.fillStyle=g; x.fillRect(0,0,Wc,Hc);
  var dp=pathAt(V3.d), ah=pathAt(V3.d+3), cam, look;
  if(V3.view==='dog'){cam=[dp.x,dp.h+.55,dp.z]; look=[ah.x,ah.h+.45,ah.z];}
  else if(V3.view==='chase'){var bk=pathAt(V3.d-4.5); cam=[bk.x,bk.h+2.6,bk.z]; look=[dp.x,dp.h+.4,dp.z];}
  else {cam=[S.W/2,Math.max(S.W,S.H)*.95,S.H+S.H*.9]; look=[S.W/2,0,S.H*.45];}
  var fw=v3norm(v3sub(look,cam)), rt=v3norm(v3cross(fw,[0,1,0])), up=v3cross(rt,fw), foc=(Hc/2)/Math.tan(35*PI/180), cx=Wc/2, cy=Hc/2, NEAR=.08;
  function tv(p){var q=v3sub(p,cam); return [v3dot(q,rt),v3dot(q,up),v3dot(q,fw)];}
  function pr(v){return [cx+foc*v[0]/v[2], cy-foc*v[1]/v[2]];}
  var items=[], LIGHT=v3norm([.4,1,.3]);
  function addPoly(pts,col,al){
    var vs=pts.map(tv), out=[];
    for(var i=0;i<vs.length;i++){var a=vs[i], b=vs[(i+1)%vs.length], ain=a[2]>NEAR, bin=b[2]>NEAR;
      if(ain) out.push(a); if(ain!==bin){var t=(NEAR-a[2])/(b[2]-a[2]); out.push([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,NEAR]);}}
    if(out.length<3) return;
    var n=v3norm(v3cross(v3sub(pts[1],pts[0]),v3sub(pts[2],pts[0]))), sh=.62+.38*Math.abs(v3dot(n,LIGHT));
    var dz=0; out.forEach(function(v){dz+=v[2];}); items.push({k:0,z:dz/out.length,s:out.map(pr),c:col,a:al,sh:sh});
  }
  V3.prims.forEach(function(q){addPoly(q.p,q.c,q.a);});
  V3.saw.forEach(function(sw){
    var W=sw.W, ax=(dp.x-sw.o.x)*sw.cos+(dp.z-sw.o.y)*sw.sin;
    var passed=sw.idx>=0&&(dp.idx>sw.idx||(dp.idx===sw.idx&&ax*sw.sign<0)), low=passed?-sw.sign:sw.sign;
    var hA=low<0?0:1.2, hB=low<0?1.2:0;
    addPoly([W(-1.85,hA,-.15),W(1.85,hB,-.15),W(1.85,hB,.15),W(-1.85,hA,.15)],'#c9527e',1);
  });
  V3.lines.forEach(function(l){
    var a=tv(l.a), b=tv(l.b); if(a[2]<NEAR&&b[2]<NEAR) return;
    if(a[2]<NEAR){var t=(NEAR-a[2])/(b[2]-a[2]); a=[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,NEAR];}
    if(b[2]<NEAR){var t2=(NEAR-b[2])/(a[2]-b[2]); b=[b[0]+(a[0]-b[0])*t2,b[1]+(a[1]-b[1])*t2,NEAR];}
    items.push({k:1,z:(a[2]+b[2])/2,a0:pr(a),b0:pr(b),c:l.c,w:Math.min(12,Math.max(1,foc*l.w/((a[2]+b[2])/2)))});
  });
  if(V3.view!=='dog'){var dv=tv([dp.x,dp.h+.3,dp.z]); if(dv[2]>NEAR) items.push({k:2,z:dv[2]-.01,p:pr(dv),r:Math.max(3,foc*.28/dv[2])});}
  items.sort(function(p,q){return q.z-p.z;});
  items.forEach(function(it){
    if(it.k===0){x.globalAlpha=it.a; x.fillStyle=shade(it.c,it.sh); x.beginPath(); it.s.forEach(function(p,i){i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]);}); x.closePath(); x.fill(); x.globalAlpha=1;}
    else if(it.k===1){x.strokeStyle=it.c; x.lineWidth=it.w; x.lineCap='round'; x.beginPath(); x.moveTo(it.a0[0],it.a0[1]); x.lineTo(it.b0[0],it.b0[1]); x.stroke();}
    else {x.fillStyle='#8a5a2b'; x.beginPath(); x.arc(it.p[0],it.p[1],it.r,0,2*PI); x.fill(); x.strokeStyle='#fff'; x.lineWidth=2; x.stroke();}
  });
  var next=Math.max(0,dp.idx+1), grp={};
  V3.labels.forEach(function(lb){var k=Math.round(lb.x*2)+','+Math.round(lb.z*2); (grp[k]=grp[k]||{x:lb.x,z:lb.z,n:[]}).n.push(lb.i);});
  Object.keys(grp).forEach(function(k){
    var gp=grp[k], v=tv([gp.x,1.7,gp.z]); if(v[2]<.5) return; var p=pr(v), hot=gp.n.indexOf(next)>=0||(dp.idx<0&&gp.n.indexOf(0)>=0), t=gp.n.map(function(i){return i+1;}).join('·');
    var fs=Math.max(11,Math.min(26,foc*.45/v[2])); x.font='700 '+fs+'px sans-serif'; var w=x.measureText(t).width+fs*.8;
    x.fillStyle=hot?'#e8a838':'rgba(255,255,255,.85)'; x.beginPath(); if(x.roundRect) x.roundRect(p[0]-w/2,p[1]-fs*.8,w,fs*1.4,fs*.7); else x.rect(p[0]-w/2,p[1]-fs*.8,w,fs*1.4); x.fill();
    x.fillStyle='#17201a'; x.textAlign='center'; x.fillText(t,p[0],p[1]+fs*.35); x.textAlign='start';
  });
  var ob=S.route.length, cur=Math.min(ob,Math.max(0,dp.idx+1)), txt='Překážka '+cur+' z '+ob+' · '+fmt(V3.d)+' m z '+fmt(V3.path.len)+' m';
  var pi=$('p3info'); if(pi.getAttribute('data-c')!==txt){ pi.setAttribute('data-c',txt); pi.textContent=txt; }
}
function shade(hex,k){
  if(hex.indexOf('#')!==0) return hex;
  var n=parseInt(hex.slice(1),16), r=(n>>16)&255, g=(n>>8)&255, b=n&255;
  return 'rgb('+Math.round(r*k)+','+Math.round(g*k)+','+Math.round(b*k)+')';
}
function loop3d(ts){
  if(!V3.on&&V3.raf) return;
  if(V3.last&&V3.on){ V3.d+=Math.min(ts-V3.last,100)/1000*4.5*V3.spd; /* po návratu z pozadí neskočit dopředu */ if(V3.d>V3.path.len){V3.d=V3.path.len; V3.on=false; $('p3play').textContent='Znovu';} }
  V3.last=ts; render3d();
  if(!$('ov3d').hidden) V3.raf=requestAnimationFrame(loop3d);
}
function open3d(){
  if(S.route.length<2){toast('Pro 3D průlet potřebuješ trasu aspoň se 2 překážkami.'); return;}
  build3d(); V3.d=0; V3.on=true; V3.last=0; $('ov3d').hidden=false; $('p3play').textContent='Pauza';
  cancelAnimationFrame(V3.raf); V3.raf=requestAnimationFrame(loop3d);
}
$('p3close').onclick=function(){$('ov3d').hidden=true; V3.on=false; cancelAnimationFrame(V3.raf);};
document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!$('ov3d').hidden) $('p3close').click(); });
$('p3play').onclick=function(){ if(V3.d>=V3.path.len) V3.d=0; V3.on=!V3.on; V3.last=0; this.textContent=V3.on?'Pauza':'Přehrát'; if(V3.on){cancelAnimationFrame(V3.raf); V3.raf=requestAnimationFrame(loop3d);} };
$('p3view').onclick=function(e){var b=e.target.closest('button'); if(!b) return; V3.view=b.getAttribute('data-v'); Array.prototype.forEach.call(this.children,function(c){c.classList.toggle('on',c===b);}); render3d();};
$('p3speed').onclick=function(e){var b=e.target.closest('button'); if(!b) return; V3.spd=+b.getAttribute('data-s'); Array.prototype.forEach.call(this.children,function(c){c.classList.toggle('on',c===b);});};
