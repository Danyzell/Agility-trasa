
/* ---------- animace techniky ---------- */
var PI=Math.PI, DOGC_='#8a5a2b', HANDC='#3f7fc1';
function kf(keys,t){ if(t<=keys[0][0]) return keys[0][1]; for(var i=1;i<keys.length;i++){ if(t<=keys[i][0]){var a=keys[i-1],b=keys[i],u=(t-a[0])/((b[0]-a[0])||1); return a[1]+(b[1]-a[1])*u;} } return keys[keys.length-1][1]; }
function sampler(pts,smooth){
  var s=[];
  if(smooth&&pts.length>2){
    for(var i=0;i<pts.length-1;i++){
      var p0=pts[Math.max(0,i-1)],p1=pts[i],p2=pts[i+1],p3=pts[Math.min(pts.length-1,i+2)];
      for(var k=0;k<16;k++){var t=k/16,t2=t*t,t3=t2*t;
        s.push([.5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
                .5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)]);}
    }
    s.push(pts[pts.length-1]);
  } else s=pts.slice();
  var L=[0]; for(var j=1;j<s.length;j++) L.push(L[j-1]+Math.hypot(s[j][0]-s[j-1][0],s[j][1]-s[j-1][1]));
  var tot=L[L.length-1];
  return {pts:s,len:tot,lenAt:function(idx){return L[idx]/tot;},at:function(u){
    var d=Math.max(0,Math.min(1,u))*tot, i=1; while(i<L.length-1&&L[i]<d) i++;
    var a=s[i-1],b=s[i],f=(d-L[i-1])/((L[i]-L[i-1])||1);
    return {x:a[0]+(b[0]-a[0])*f,y:a[1]+(b[1]-a[1])*f,a:Math.atan2(b[1]-a[1],b[0]-a[0])};
  },d:'M'+s.map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1);}).join('L')};
}
function deg(a){return (a*180/PI).toFixed(1);}
function dogT(p,op){return '<g transform="translate('+p.x.toFixed(2)+','+p.y.toFixed(2)+') rotate('+deg(p.a)+')" opacity="'+(op==null?1:op)+'"><ellipse rx="2.3" ry="1.15" fill="'+DOGC_+'"/><circle cx="2.45" r=".95" fill="#6d4420"/><path d="M-2.2,0L-3.7,-.7" stroke="'+DOGC_+'" stroke-width=".55" stroke-linecap="round"/></g>';}
function handT(p,f){return '<g transform="translate('+p.x.toFixed(2)+','+p.y.toFixed(2)+') rotate('+deg(f)+')"><circle r="1.9" fill="'+HANDC+'"/><path d="M1.3,-1L3,0L1.3,1z" fill="'+HANDC+'"/><path d="M-.3,-1.9V1.9" stroke="#fff" stroke-width=".45"/></g>';}
function dogS(x,y,a,ph,sc){
  sc=sc||1.25; var s=Math.sin(ph)*.9, c='stroke="'+DOGC_+'" stroke-width=".45" stroke-linecap="round"';
  return '<g transform="translate('+x.toFixed(2)+','+y.toFixed(2)+') rotate('+deg(a)+') scale('+sc+')">'+
    '<path d="M1.6,-1.6L'+(1.6+s).toFixed(2)+',0M1.1,-1.6L'+(1.1-s).toFixed(2)+',0M-1.8,-1.6L'+(-1.8-s).toFixed(2)+',0M-1.3,-1.6L'+(-1.3+s).toFixed(2)+',0" '+c+'/>'+
    '<ellipse cy="-2.2" rx="2.8" ry="1.05" fill="'+DOGC_+'"/><circle cx="2.9" cy="-3.1" r="1" fill="#6d4420"/><path d="M-2.7,-2.5L-3.9,-3.4" '+c+'/></g>';
}
function jumpT(x,y,a,n){return '<g transform="translate('+x+','+y+') rotate('+deg(a)+')"><line y1="-1.4" y2="1.4" stroke="#b8493c" stroke-width=".6"/><rect x="-.5" y="-2.3" width="1" height="1" fill="#b8493c"/><rect x="-.5" y="1.3" width="1" height="1" fill="#b8493c"/></g>'+(n?'<circle cx="'+(x+3)+'" cy="'+(y-3)+'" r="1.5" fill="#e8a838"/><text x="'+(x+3)+'" y="'+(y-2.45)+'" font-size="1.7" text-anchor="middle" font-weight="700" fill="#2a1d05">'+n+'</text>':'');}
function ground(y){return '<line x1="0" x2="100" y1="'+y+'" y2="'+y+'" stroke="var(--muted)" stroke-width=".35"/>';}
function trail(sp,col){return '<path d="'+sp.d+'" fill="none" stroke="'+col+'" stroke-width=".35" stroke-dasharray="1 1" opacity=".45"/>';}
function legend(side){return '<g font-size="2" fill="var(--muted)"><circle cx="3" cy="47.5" r="1" fill="'+DOGC_+'"/><text x="5" y="48.2">pes</text>'+(side?'':'<circle cx="12" cy="47.5" r="1" fill="'+HANDC+'"/><text x="14" y="48.2">psovod</text>')+'</g>';}
function sideSeg(pts){ var sp=sampler(pts,false); return sp; }
function handling(cfg){
  var ds=sampler(cfg.dog,true), hs=sampler(cfg.hand,true);
  return function(t){
    var h=cfg.jumps.map(function(j,i){return jumpT(j[0],j[1],j[2],i+1);}).join('')+trail(ds,DOGC_)+trail(hs,HANDC);
    var dp=ds.at(kf(cfg.dk,t)), hp=hs.at(kf(cfg.hk,t)), f=kf(cfg.face,t);
    return h+handT(hp,f)+dogT(dp)+(cfg.extra?cfg.extra(t,dp,hp):'')+legend();
  };
}
var SC={
  jump:function(t){
    var x=6+88*t, y=42, a=0, air=x>40&&x<60;
    if(air){var u=(x-50)/10; y=42-7.5*(1-u*u); a=Math.atan(15*u/10*.5);}
    return ground(42)+'<rect x="49.3" y="30" width="1.4" height="12" fill="#b8493c" opacity=".35"/><rect x="48.8" y="30" width=".6" height="12" fill="#b8493c"/><circle cx="50" cy="36" r=".9" fill="#b8493c"/>'+
      '<text x="50" y="45.5" font-size="2" text-anchor="middle" fill="var(--muted)">laťka</text>'+dogS(x,y,a,air?PI/2:t*60)+legend(1);
  },
  tunnel:(function(){
    var inner=[]; for(var i=0;i<=24;i++){var s=i/24,m=1-s; inner.push([m*m*m*20+3*m*m*s*20+3*m*s*s*80+s*s*s*80, m*m*m*40+3*m*m*s*5+3*m*s*s*5+s*s*s*40]);}
    var dog=sampler([[4,46],[12,43]].concat(inner).concat([[88,43],[96,46]]),false), hand=sampler([[14,47],[60,47],[86,47]],false);
    var in0=dog.lenAt(2), in1=dog.lenAt(2+24);
    return function(t){
      var u=t, dp=dog.at(u), inside=u>in0&&u<in1, hp=hand.at(kf([[0,0],[.6,.8],[1,1]],t));
      return '<path d="M20,40 C20,5 80,5 80,40" fill="none" stroke="#3f7fc1" stroke-width="6.5" opacity=".28"/><path d="M20,40 C20,5 80,5 80,40" fill="none" stroke="#3f7fc1" stroke-width=".4" stroke-dasharray="1.2 1.6" opacity=".7"/>'+
        trail(hand,HANDC)+handT(hp,0)+dogT(dp,inside?.35:1)+legend();
    };
  })(),
  weave:(function(){
    var pts=[[4,40],[11,33.5],[17,29]]; for(var x=20;x<=86;x+=.5) pts.push([x,25+3*Math.cos(PI*(x-20)/6)]); pts.push([92,24.5],[97,25]);
    var dog=sampler(pts,false), hand=sampler([[8,42],[92,42]],false), poles='';
    for(var k=0;k<12;k++) poles+='<circle cx="'+(20+6*k)+'" cy="25" r=".8" fill="#8a5fc9"/>';
    poles+='<circle cx="20" cy="25" r="1.7" fill="none" stroke="#e8a838" stroke-width=".5"/><text x="20" y="21" font-size="2.2" text-anchor="middle" font-weight="700" fill="var(--text)">1</text>';
    return function(t){ return poles+trail(dog,DOGC_)+handT(hand.at(t),0)+dogT(dog.at(t))+legend(); };
  })(),
  aframe:(function(){
    var sp=sideSeg([[3,42],[29,42],[50,25],[71,42],[97,42]]);
    return function(t){
      var p=sp.at(t), inZ=p.x>=62.75&&p.x<=71&&p.y>34;
      return ground(42)+'<path d="M29,42L50,25L71,42" fill="none" stroke="#b8703a" stroke-width="1.3" stroke-linejoin="round"/>'+
        '<path d="M29,42L37.25,35.3M71,42L62.75,35.3" stroke="#e8a838" stroke-width="1.5"/>'+
        (inZ?'<text x="67" y="33" font-size="2.2" text-anchor="middle" font-weight="700" fill="var(--accent)">✓ zóna</text>':'')+
        '<text x="50" y="23" font-size="2" text-anchor="middle" fill="var(--muted)">170 cm</text>'+dogS(p.x,p.y,p.a,t*70)+legend(1);
    };
  })(),
  dogwalk:(function(){
    var sp=sideSeg([[2,42],[7,42],[34.8,32],[64.4,32],[92.2,42],[99,42]]), stop=sp.lenAt(4);
    return function(t){
      var u=kf([[0,0],[.66,stop],[.82,stop],[1,1]],t), p=sp.at(u), halt=t>.66&&t<.82, a=halt?.18:p.a;
      return ground(42)+'<path d="M7,42L34.8,32L64.4,32L92.2,42" fill="none" stroke="#4fa8ae" stroke-width="1.1" stroke-linejoin="round"/>'+
        '<path d="M7,42L13.76,39.57M92.2,42L85.44,39.57" stroke="#e8a838" stroke-width="1.3"/>'+
        (halt?'<text x="86" y="31" font-size="2.2" text-anchor="middle" font-weight="700" fill="var(--accent)">2on2off</text>':'')+
        dogS(p.x,p.y,a,halt?0:t*70)+legend(1);
    };
  })(),
  seesaw:function(t){
    var L=18.5, th0=Math.asin(6/18.5), th=kf([[0,th0],[.48,th0],[.6,-th0],[1,-th0]],t);
    var lx=50-L*Math.cos(th), ly=36+L*Math.sin(th), rx=50+L*Math.cos(th), ry=36-L*Math.sin(th), cx=Math.cos(th), sy=-Math.sin(th);
    var x,y,a=-th,ph=t*60,s;
    if(t<.15){ x=8+(50-L*Math.cos(th0)-8)*(t/.15); y=42; a=0; }
    else if(t<.8){ s=kf([[.15,0],[.48,L+2],[.66,2*L-3],[.8,2*L-3]],t); x=lx+s*cx; y=ly+s*sy; if(t>.66) ph=0; }
    else { var u=(t-.8)/.2; x=rx+(96-rx)*u; y=42; a=0; }
    var z='<path d="M'+lx.toFixed(2)+','+ly.toFixed(2)+'L'+(lx+9*cx).toFixed(2)+','+(ly+9*sy).toFixed(2)+'M'+rx.toFixed(2)+','+ry.toFixed(2)+'L'+(rx-9*cx).toFixed(2)+','+(ry-9*sy).toFixed(2)+'" stroke="#e8a838" stroke-width="1.3"/>';
    return ground(42)+'<path d="M47,42L50,36L53,42z" fill="#c9527e" opacity=".6"/><line x1="'+lx.toFixed(2)+'" y1="'+ly.toFixed(2)+'" x2="'+rx.toFixed(2)+'" y2="'+ry.toFixed(2)+'" stroke="#c9527e" stroke-width="1.1"/>'+z+
      (t>.62&&t<.8?'<text x="'+rx.toFixed(1)+'" y="'+(ry-9).toFixed(1)+'" font-size="2.2" text-anchor="middle" font-weight="700" fill="var(--accent)">čeká</text>':'')+dogS(x,y,a,ph)+legend(1);
  },
  tire:function(t){
    var x=6+88*t, y=42, a=0, air=x>38&&x<62; if(air){var u=(x-50)/12; y=42-5.4*(1-u*u); a=Math.atan(.9*u)*.8;}
    return ground(42)+'<path d="M44.5,42V29M55.5,42V29" stroke="#52606b" stroke-width=".5" opacity=".6"/>'+
      '<circle cx="50" cy="34" r="2.9" fill="none" stroke="#52606b" stroke-width="1.1" opacity=".55"/>'+dogS(x,y,a,air?PI/2:t*60)+
      '<path d="M50,31.1 A2.9,2.9 0 0 1 50,36.9" fill="none" stroke="#52606b" stroke-width="1.1"/>'+legend(1);
  },
  longjump:function(t){
    var x=6+88*t, y=42, a=0, air=x>35&&x<65; if(air){var u=(x-50)/15; y=42-7*(1-u*u); a=Math.atan(14*u/15)*.8;}
    var el=[[43,40.5],[46.5,40.1],[50,39.6],[53.5,39.2]].map(function(e){return '<rect x="'+e[0]+'" y="'+e[1]+'" width="3" height="'+(42-e[1])+'" fill="#7a7a4f"/>';}).join('');
    return ground(42)+el+'<path d="M42,42V31M57.5,42V31" stroke="var(--muted)" stroke-width=".35" opacity=".7"/>'+dogS(x,y,a,air?PI/2:t*60)+legend(1);
  },
  front:handling({jumps:[[25,30,0],[48,30,0],[40,13,PI]],dog:[[8,30],[25,30],[48,30],[60,28],[66,20],[60,13],[40,13],[22,13]],dk:[[0,0],[1,1]],
    hand:[[14,38],[36,37],[56,35],[57,24],[50,20],[34,20]],hk:[[0,0],[.3,.42],[.5,.62],[1,1]],face:[[0,0],[.3,0],[.38,-PI/2],[.48,-PI],[1,-PI]]}),
  blind:handling({jumps:[[25,30,0],[48,30,0],[40,13,PI]],dog:[[8,30],[25,30],[48,30],[60,28],[66,20],[60,13],[40,13],[22,13]],dk:[[0,0],[1,1]],
    hand:[[14,38],[36,37],[56,35],[57,24],[50,20],[34,20]],hk:[[0,0],[.3,.42],[.5,.62],[1,1]],face:[[0,0],[.3,0],[.38,PI/2],[.48,PI],[1,PI]]}),
  rear:handling({jumps:[[25,30,0],[50,30,0],[68,12,-PI/2]],dog:[[8,30],[25,30],[50,30],[62,27],[68,19],[68,12],[68,4]],dk:[[0,0],[1,1]],
    hand:[[14,38],[34,37],[42,33],[46,24],[56,20],[62,14]],hk:[[0,0],[.45,.35],[.62,.62],[1,1]],face:[[0,0],[.5,0],[.62,-PI/4],[1,-PI/2]]}),
  wrap:handling({jumps:[[50,25,0]],dog:[[10,25],[30,25],[50,25],[55,26.5],[55.5,30],[51,32.5],[44,33],[30,33],[16,32]],dk:[[0,0],[1,1]],
    hand:[[34,38],[40,37],[36,37],[24,37]],hk:[[0,0],[.35,.3],[.5,.45],[1,1]],face:[[0,0],[.45,0],[.55,PI/2],[.65,PI],[1,PI]]}),
  spin:handling({jumps:[[50,25,0]],dog:[[10,25],[30,25],[50,25],[55,23.5],[55.5,20],[51,17.5],[44,17],[36,19],[30,24],[22,27]],dk:[[0,0],[1,1]],
    hand:[[34,31],[40,30.5],[37,30.5],[26,31.5]],hk:[[0,0],[.35,.3],[.5,.45],[1,1]],face:[[0,0],[.45,0],[.55,-PI/2],[.65,-PI],[1,-PI]]}),
  backside:handling({jumps:[[55,25,0]],dog:[[8,33],[28,33],[46,32.6],[58,31.8],[63,28.8],[62,25.6],[55,25],[40,25],[22,25]],dk:[[0,0],[1,1]],
    hand:[[12,39],[30,38.5],[40,37],[36,34],[24,32]],hk:[[0,0],[.35,.45],[.55,.6],[1,1]],face:[[0,0],[.4,0],[.55,-PI/2],[.7,-PI],[1,-PI]]}),
  start:handling({jumps:[[30,25,0],[55,25,0],[80,25,0]],dog:[[16,25],[30,25],[55,25],[80,25],[96,25]],dk:[[0,0],[.4,0],[1,1]],
    hand:[[18,31],[42,31],[88,31]],hk:[[0,0],[.3,.29],[.4,.29],[1,1]],face:[[0,0],[.28,0],[.32,PI],[.4,PI],[.44,0],[1,0]],
    extra:function(t,dp,hp){return t>.36&&t<.47?'<text x="'+hp.x.toFixed(1)+'" y="'+(hp.y-3.5).toFixed(1)+'" font-size="2.6" text-anchor="middle" font-weight="700" fill="var(--accent)">Hop!</text>':'';}})
};
