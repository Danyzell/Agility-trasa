
/* ---------- plocha ---------- */
$('palette').innerHTML=Object.keys(DEF).map(function(k){var d=DEF[k];
  return '<button class="ob-btn" data-type="'+k+'" style="color:'+d.c+'"><svg viewBox="-9 -9 18 18">'+d.p+'</svg><span style="color:var(--text)">'+d.l+'</span></button>';}).join('');

function syncSides(){
  if(!S.sides) S.sides=[]; while(S.sides.length<S.route.length) S.sides.push(null); S.sides.length=S.route.length;
  if(!S.turns) S.turns=[]; while(S.turns.length<S.route.length) S.turns.push(null); S.turns.length=S.route.length;
}
/* otočky u skoku: vnitřkem = k psovodovi, venkem = od psovoda (podle strany psa L/P v Dráze psovoda) */
function tuInside(t,sd){var d=t.charAt(1); return (sd==='L'&&d==='R')||(sd==='P'&&d==='L');}
function tuLabel(t,sd){
  if(!t) return '';
  if(t==='f') return '⇄ z druhé strany';
  var g=t.charAt(1)==='L'?'↶':'↷';
  if(t.charAt(0)==='b') return g+' zadní strana';
  return g+' otočka '+(sd?(tuInside(t,sd)?'vnitřkem':'venkem'):(t.charAt(1)==='L'?'doleva':'doprava'));
}
function entrySheet(i){
  var o=getO(S.route[i]), t=S.turns[i]==='f'?'f':'', nm=DEF[o.type].l;
  var opts=[['','Bližším koncem','Pes vběhne do překážky koncem, který je blíž předchozí překážce.'],
    ['f','Vzdálenějším koncem','Pes překážku oběhne a vběhne do ní z druhé strany, třeba do odvráceného konce tunelu.']];
  openSheet('<h3>'+esc(nm)+' č. '+(i+1)+': vstup</h3><p>Aplikace sama volí konec, který je blíž předchozí překážce. Když trenér posílá psa do vzdálenějšího konce, přepni to tady.</p><div class="opts">'+opts.map(function(x){
      return '<button class="opt'+(x[0]===t?' on':'')+'" data-tv="'+x[0]+'"><b>'+x[1]+'</b><span>'+x[2]+'</span></button>';
    }).join('')+'</div><div class="acts"><button class="btn" data-a="x">Zavřít</button></div>',
    function(e){
      var b=e.target.closest('[data-tv]');
      if(b){ S.turns[i]=b.getAttribute('data-tv')||null; closeSheet(); touch(); render(); toast(nm+' č. '+(i+1)+': vstup '+(S.turns[i]?'vzdálenějším':'bližším')+' koncem'); return; }
      if(e.target.closest('[data-a]')) closeSheet();
    });
}
function turnSheet(i){
  if(getO(S.route[i]).type!=='jump') return entrySheet(i);
  var t=S.turns[i]||'', sd=S.sides[i], first=i===0, lastI=i===S.route.length-1;
  var opts=[['','Bez otočky','Pes skok skočí a běží rovnou k další překážce.',false],
    ['f','Skok z druhé strany','Aplikace volí směr skoku podle toho, odkud pes přibíhá. Když ho trenér posílá na skok z opačné strany, přepni to tady.',false],
    ['wL','Otočka doleva','Po skoku se pes otočí o 180° kolem levého křídla.',lastI],
    ['wR','Otočka doprava','Po skoku se pes otočí o 180° kolem pravého křídla.',lastI],
    ['bL','Zadní strana, otočka doleva','Pes skok mine, oběhne křídlo doleva a skočí ho z druhé strany.',first],
    ['bR','Zadní strana, otočka doprava','Pes skok mine, oběhne křídlo doprava a skočí ho z druhé strany.',first]];
  var why=sd?'Pes běží u psovoda '+(sd==='L'?'vlevo':'vpravo')+', takže otočka '+(sd==='L'?'doprava':'doleva')+' je vnitřkem (k psovodovi) a otočka '+(sd==='L'?'doleva':'doprava')+' venkem (od psovoda).'
    :'Doleva a doprava je z pohledu psa. Když v Dráze psovoda nastavíš, na které straně psovoda pes běží, aplikace ukáže, jestli je otočka vnitřkem (k psovodovi), nebo venkem (od psovoda).';
  openSheet('<h3>Skok č. '+(i+1)+': otočka</h3><p>'+why+'</p><div class="opts">'+opts.map(function(o){
      return '<button class="opt'+(o[0]===t?' on':'')+'" data-tv="'+o[0]+'"'+(o[3]?' disabled':'')+'><b>'+o[1]+(sd&&o[0].charAt(0)==='w'?' · '+(tuInside(o[0],sd)?'vnitřkem':'venkem'):'')+'</b><span>'+o[2]+'</span></button>';
    }).join('')+'</div><div class="acts"><button class="btn" data-a="x">Zavřít</button></div>',
    function(e){
      var b=e.target.closest('[data-tv]');
      if(b&&!b.disabled){ S.turns[i]=b.getAttribute('data-tv')||null; closeSheet(); touch(); render(); toast(S.turns[i]?'Skok č. '+(i+1)+': '+tuLabel(S.turns[i],sd).slice(2):'Bez otočky'); return; }
      if(e.target.closest('[data-a]')) closeSheet();
    });
}
function drawBg(){
  var b=BG;
  $('bgimg').innerHTML=(b&&b.src)?'<image href="'+b.src+'" x="0" y="0" width="'+S.W+'" height="'+S.H+'" preserveAspectRatio="'+(b.fit==='none'?'none':'xMidYMid meet')+'" opacity="'+(b.op||0.6)+'"/>':'';
}
function drawGrid(){
  $('fieldbg').innerHTML='<rect width="'+S.W+'" height="'+S.H+'" fill="var(--field)"/>';
  var h='', x, y, op=(BG&&BG.src)?' stroke-opacity=".6"':'';
  for(x=0;x<=S.W;x++) h+='<line x1="'+x+'" y1="0" x2="'+x+'" y2="'+S.H+'" stroke="var(--grid)"'+op+' stroke-width="'+(x%10?(x%5?.03:.07):.12)+'"/>';
  for(y=0;y<=S.H;y++) h+='<line x1="0" y1="'+y+'" x2="'+S.W+'" y2="'+y+'" stroke="var(--grid)"'+op+' stroke-width="'+(y%10?(y%5?.03:.07):.12)+'"/>';
  for(x=10;x<S.W;x+=10) h+='<text x="'+(x+.3)+'" y=".9" font-size=".7" fill="var(--muted)">'+x+' m</text>';
  for(y=10;y<S.H;y+=10) h+='<text x=".3" y="'+(y-.3)+'" font-size=".7" fill="var(--muted)">'+y+' m</text>';
  $('grid').innerHTML=h; drawBg();
  svg.setAttribute('viewBox','0 0 '+S.W+' '+S.H);
}
function obEl(o){
  var d=DEF[o.type], g=document.createElementNS(NS,'g'), hw=d.hl+.5, e=.15;
  g.setAttribute('class','ob'); g.setAttribute('data-id',o.id);
  g.setAttribute('transform','translate('+o.x+','+o.y+') rotate('+o.rot+')');
  g.setAttribute('style','color:'+d.c);
  var gr=d.g;
  if(o.type==='tunnel'&&o.bend){ /* tunel do oblouku */
    var L2=tunLen(o)/2, pp=[], lo={x:0,y:0,rot:0,bend:o.bend};
    for(var j=0;j<=12;j++){ var q=tunPt(lo,-L2+j*L2/6); pp.push(r(q.x)+','+r(q.y)); }
    var dd='M'+pp.join('L');
    gr='<path d="'+dd+'" fill="none" stroke="currentColor" stroke-opacity=".28" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round"/><path d="'+dd+'" fill="none" stroke="currentColor" stroke-width=".1"/>';
  }
  g.innerHTML=gr+'<rect x="'+(-hw)+'" y="'+(-d.w)+'" width="'+(2*hw)+'" height="'+(2*d.w)+'" fill="#000" fill-opacity="0"/>'+
    ((o.id===sel&&mode==='build')?'<rect x="'+(-hw-e)+'" y="'+(-d.w-e)+'" width="'+(2*(hw+e))+'" height="'+(2*(d.w+e))+'" rx=".2" fill="none" stroke="var(--accent)" stroke-width=".1" stroke-dasharray=".35 .25"/>':'');
  return g;
}
function sideChanges(){
  var out=[], sd=S.sides||[];
  for(var i=1;i<S.route.length;i++) if(sd[i]&&sd[i-1]&&sd[i]!==sd[i-1]) out.push(i-1);
  return out;
}
function render(){
  syncSides();
  var obsG=$('obs'); obsG.innerHTML='';
  S.obs.forEach(function(o){obsG.appendChild(obEl(o));});
  var pf=pathProf(), c=calc(undefined,undefined,undefined,pf), cs=pf?calc():c, h='', quiz=panel==='quiz'&&QZ, showN=quiz&&QZ.phase==='test'?QZ.pos:Infinity;
  c.segs.forEach(function(s,i){
    if(i+1>=showN) return;
    h+='<path d="'+s.d+'" fill="none" stroke="var(--zone)" stroke-width=".14" stroke-dasharray=".5 .35" marker-end="url(#arr)"/>'+
      (quiz?'':'<text x="'+r(s.m.x)+'" y="'+r(s.m.y)+'" font-size=".62" text-anchor="middle" fill="var(--muted)" stroke="var(--field)" stroke-width=".22" paint-order="stroke">'+fmt(s.len)+' m</text>');
  });
  $('pth').innerHTML=h;
  var gr={}, b='';
  c.P.forEach(function(p,i){ if(i>=showN) return; var k=Math.round(p.en.x*4)+','+Math.round(p.en.y*4); (gr[k]=gr[k]||{p:p.en,n:[]}).n.push(i); });
  Object.keys(gr).forEach(function(k){
    var g=gr[k], t=g.n.map(function(i){return i+1;}).join('·'), w=Math.max(.45,t.length*.19+.15);
    var sd=panel==='side'?g.n.map(function(i){return S.sides[i]||'';}).join(''):'';
    b+='<g transform="translate('+r(g.p.x+.8)+','+r(g.p.y-.8)+')"><rect x="'+(-w)+'" y="-.45" width="'+(2*w)+'" height=".9" rx=".45" fill="var(--zone)"/><text y=".22" font-size=".62" text-anchor="middle" font-weight="600" fill="var(--on-zone)">'+t+'</text>'+
      (sd?'<text y="1.25" font-size=".7" text-anchor="middle" font-weight="700" fill="var(--accent)" stroke="var(--field)" stroke-width=".2" paint-order="stroke">'+sd+'</text>':'')+'</g>';
  });
  /* značka otočky uprostřed smyčky: ↶ doleva, ↷ doprava, Z zadní strana */
  c.P.forEach(function(p,i){
    if(i>=showN||!(p.w||p.b)) return;
    var o=getO(S.route[i]), s=p.t.charAt(1), f=p.dir, n=sideV(f,s), k=p.w?c.pf.wl:-c.pf.wl, C={x:o.x+f.x*k+n.x*c.pf.wr,y:o.y+f.y*k+n.y*c.pf.wr};
    b+='<text x="'+r(C.x)+'" y="'+r(C.y+.32)+'" font-size=".95" text-anchor="middle" font-weight="700" fill="var(--accent)" stroke="var(--field)" stroke-width=".18" paint-order="stroke">'+(p.b?'Z':(s==='L'?'↶':'↷'))+'</text>';
  });
  $('bdg').innerHTML=b;
  var hp=S.hp&&S.hp.length>1?'<polyline points="'+S.hp.map(function(p){return p[0]+','+p[1];}).join(' ')+'" fill="none" stroke="var(--accent)" stroke-width=".22" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>':'';
  $('hp').innerHTML=(panel==='side'||hp&&!quiz)?hp:'';
  var mk='';
  if(panel==='side') sideChanges().forEach(function(i){var m=c.segs[i]&&c.segs[i].m; if(m) mk+='<g transform="translate('+r(m.x)+','+r(m.y-.9)+')"><circle r=".55" fill="var(--accent)"/><path d="M-.25,-.25L.25,.25M.25,-.25L-.25,.25" stroke="var(--on-accent)" stroke-width=".12"/></g>';});
  if(pf&&S.route.length>1) mk+='<text x=".5" y="'+r(S.H-.5)+'" font-size=".8" font-weight="600" fill="var(--accent)" stroke="var(--field)" stroke-width=".2" paint-order="stroke">Dráha psa velikosti '+SET.psz+'</text>';
  $('marks').innerHTML=mk;
  $('specs').innerHTML=specsHTML(metrics(S.obs,S.route,S.meta.cls,S.turns,cs));
  if(!drag) fciBar(cs);
  var ol=$('routeList'); ol.className='order'+(panel==='side'?' sidemode':'');
  if(S.chk&&S.chk.length!==S.route.length) S.chk=null;
  ol.innerHTML=S.route.length
    ? S.route.map(function(id,i){var sd=S.sides[i], ty=getO(id).type, t=tuValid(S.turns[i],ty), jp=ty==='jump';
        var tb=(jp||DEF[ty].hl>0)&&(t||mode==='route'||panel==='side')?' <button class="tu'+(t?' on':'')+'" data-tu="'+i+'" aria-label="'+(jp?'Otočka u skoku':'Vstup do překážky')+' č. '+(i+1)+'">'+(t?tuLabel(t,sd):jp?'+ otočka':'+ vstup')+'</button>':'';
        return '<li>'+DEF[ty].l+(S.chk&&S.chk[i]?' <span class="chk" title="Zkontroluj podle plánku">?</span>':'')+tb+(panel==='side'?'<span class="sd"><button data-sd="'+i+'" data-v="L" class="'+(sd==='L'?'on':'')+'">L</button><button data-sd="'+i+'" data-v="P" class="'+(sd==='P'?'on':'')+'">P</button></span>':'')+'</li>';}).join('')
    : '<li class="empty">Zatím žádná trasa. Přepni na Trasa a klepej na překážky v pořadí.</li>';
  if(panel==='side'){var n=sideChanges().length; $('sideInfo').textContent='Změny strany: '+n+(n<2?' (FCI chce aspoň 2)':'');}
}
function ui(){
  var special=panel==='side'||panel==='quiz';
  $('mBuild').className=mode==='build'?'on':''; $('mRoute').className=mode==='route'?'on':'';
  $('modeRow').hidden=special;
  $('buildTools').hidden=mode!=='build'||special; $('routeTools').hidden=mode!=='route'||special;
  $('sideBar').hidden=panel!=='side'; $('quizBar').hidden=panel!=='quiz'; $('bgBar').hidden=panel!=='bg';
  svg.setAttribute('class',special?panel:mode);
  Array.prototype.forEach.call(document.querySelectorAll('.ob-btn'),function(b){b.classList.toggle('on',b.getAttribute('data-type')===tool);});
  Array.prototype.forEach.call(document.querySelectorAll('#planTools .tool'),function(b){var t=b.getAttribute('data-t'); b.classList.toggle('on',t===panel);});
  var o=sel!=null?getO(sel):null;
  $('selRow').hidden=!o||special;
  if(o){$('rot').value=o.rot; $('rotLbl').textContent=o.rot+'°';}
  $('bendSel').hidden=!o||o.type!=='tunnel';
  if(o&&o.type==='tunnel'){ var bs=$('bendSel'), bv=String(o.bend||0);
    if(!Array.prototype.some.call(bs.options,function(x){return x.value===bv;})){ var op=document.createElement('option'); op.value=bv; op.textContent=(Math.abs(o.bend)>=180?'Do U ':'Oblouk '+Math.abs(o.bend)+'° ')+(o.bend>0?'↶':'↷'); bs.appendChild(op); }
    bs.value=bv; }
  $('zLbl').textContent=Math.round(zoom*100)+' %';
  svg.style.width=(zoom*100)+'%';
  if(BG){$('bgOp').value=Math.round((BG.op||.6)*100); $('bgFit').textContent=BG.fit==='none'?'Zachovat poměr':'Roztáhnout';}
  $('hint').textContent=panel==='side'?'':panel==='quiz'?'':mode==='build'
    ? 'Vyber překážku a klepnutím ji polož na plochu. Tažením ji přesuneš, posuvníkem otočíš.'
    : 'Klepej na překážky v pořadí, v jakém je pes poběží. Stejnou překážku můžeš použít víckrát. Otočku kolem křídla nebo zadní stranu nastavíš u skoku v seznamu pod plochou.';
  $('hint').hidden=special;
}
function pt(e){var b=svg.getBoundingClientRect(); return {x:(e.clientX-b.left)/b.width*S.W, y:(e.clientY-b.top)/b.height*S.H};}

svg.addEventListener('pointerdown',function(e){
  var g=e.target.closest('.ob'), id=g?+g.getAttribute('data-id'):null;
  tap={x:e.clientX,y:e.clientY,id:id};
  if(panel==='side'){
    var p=pt(e), last=S.hp&&S.hp[S.hp.length-1];
    hpDraw=(last&&Math.hypot(last[0]-p.x,last[1]-p.y)<2)?S.hp.slice():[[r1(p.x),r1(p.y)]];
    try{svg.setPointerCapture(e.pointerId);}catch(x){}
    return;
  }
  if(panel==='quiz') return;
  if(mode==='build'&&g){
    var o=getO(id), q=pt(e); sel=id;
    drag={id:id,dx:o.x-q.x,dy:o.y-q.y,moved:false};
    try{svg.setPointerCapture(e.pointerId);}catch(x){}
  }
});
svg.addEventListener('pointermove',function(e){
  if(hpDraw){
    var p=pt(e), l=hpDraw[hpDraw.length-1];
    if(Math.hypot(l[0]-p.x,l[1]-p.y)>.35){hpDraw.push([r1(cl(p.x,0,S.W)),r1(cl(p.y,0,S.H))]); S.hp=hpDraw; render();}
    return;
  }
  if(!drag||!tap) return;
  if(Math.hypot(e.clientX-tap.x,e.clientY-tap.y)>4) drag.moved=true;
  if(!drag.moved) return;
  var q=pt(e), o=getO(drag.id);
  o.x=cl(r1(q.x+drag.dx),0,S.W); o.y=cl(r1(q.y+drag.dy),0,S.H);
  render();
});
svg.addEventListener('pointerup',function(e){
  var still=tap&&Math.hypot(e.clientX-tap.x,e.clientY-tap.y)<=6;
  if(hpDraw){ if(hpDraw.length>1){S.hp=hpDraw; touch();} hpDraw=null; render(); tap=null; return; }
  if(panel==='quiz'){ if(tap&&still&&tap.id!=null) quizTap(tap.id); tap=null; return; }
  if(drag){
    var mv=drag.moved; drag=null; if(mv) touch(); render(); ui();
  } else if(tap&&still){
    if(mode==='route'){
      if(tap.id!=null){S.route.push(tap.id); syncSides(); touch(); render();}
    } else if(tool){
      var p=pt(e), o={id:nid(),type:tool,x:cl(r1(p.x),0,S.W),y:cl(r1(p.y),0,S.H),rot:0};
      S.obs.push(o); sel=o.id; touch(); render(); ui();
    } else { sel=null; render(); ui(); }
  }
  tap=null;
});
svg.addEventListener('pointercancel',function(){drag=null;tap=null;hpDraw=null;});

$('palette').addEventListener('click',function(e){
  var b=e.target.closest('.ob-btn'); if(!b) return;
  var t=b.getAttribute('data-type'); tool=(tool===t)?null:t; ui();
});
$('mBuild').onclick=function(){mode='build'; ui(); render();};
$('mRoute').onclick=function(){mode='route'; sel=null; ui(); render();};
$('zIn').onclick=function(){zoom=Math.min(4,zoom+.5); ui();};
$('zOut').onclick=function(){zoom=Math.max(1,zoom-.5); ui();};
$('rot').oninput=function(){var o=getO(sel); if(!o) return; o.rot=+this.value; $('rotLbl').textContent=o.rot+'°'; touch(); render();};
$('bendSel').onchange=function(){var o=getO(sel); if(!o||o.type!=='tunnel') return; var v=+this.value; if(v) o.bend=v; else delete o.bend; touch(); render();};
$('delBtn').onclick=function(){
  var keep=[]; S.route.forEach(function(id,i){if(id!==sel) keep.push(i);});
  S.sides=keep.map(function(i){return S.sides[i]||null;}); S.turns=keep.map(function(i){return (S.turns&&S.turns[i])||null;}); S.route=keep.map(function(i){return S.route[i];});
  S.obs=S.obs.filter(function(o){return o.id!==sel;});
  sel=null; touch(); render(); ui();
};
$('undoBtn').onclick=function(){if(!S.route.length) return; S.route.pop(); syncSides(); touch(); render();};
$('clrRoute').onclick=function(){
  if(!S.route.length) return;
  ask('Smazat trasu?','Překážky zůstanou na ploše, smaže se jen pořadí.','Smazat trasu',function(){S.route=[]; S.sides=[]; S.turns=[]; touch(); render();},true);
};
/* plocha jiné velikosti (třeba 40 × 30 m u parkuru trenéra) dostane v nabídce vlastní položku */
function setSizeSel(){
  var s=$('sizeSelect'), v=S.W+'x'+S.H;
  if(!Array.prototype.some.call(s.options,function(o){return o.value===v;})){ var o=document.createElement('option'); o.value=v; o.textContent='Plocha '+S.W+' × '+S.H+' m'; s.appendChild(o); }
  s.value=v;
}
$('sizeSelect').onchange=function(){
  var v=this.value.split('x'); S.W=+v[0]; S.H=+v[1];
  S.obs.forEach(function(o){o.x=cl(o.x,0,S.W); o.y=cl(o.y,0,S.H);});
  drawGrid(); touch(); render();
};
$('routeList').onclick=function(e){
  var tb=e.target.closest('[data-tu]'); if(tb){ var ti=+tb.getAttribute('data-tu'); if(S.chk&&S.chk[ti]){ S.chk[ti]=0; } turnSheet(ti); return;}
  var b=e.target.closest('[data-sd]'); if(!b) return;
  var i=+b.getAttribute('data-sd'), v=b.getAttribute('data-v');
  S.sides[i]=S.sides[i]===v?null:v; touch(); render();
};

/* ---------- nástroje plánu: dráha psovoda, podklad, trénink paměti ---------- */
/* ---------- kontrola parkuru podle Řádu agility FCI ---------- */
function fciCheck(obs,route,turns,sides,cls,geo){
  var by={}, out=[], n=route.length; obs.forEach(function(o){by[o.id]=o;});
  if(n<2) return out;
  geo=geo||calc(obs,route,turns);
  function add(ok,t){out.push({ok:ok,t:t});}
  var types=route.map(function(id){return by[id].type;}), cnt=function(t){return types.filter(function(x){return x===t;}).length;};
  add(n>=15&&n<=22,'Počet překážek '+n+' (FCI: 15–22)');
  add(cnt('jump')>=7,'Skoků '+cnt('jump')+' (FCI: aspoň 7)');
  add(geo.total>=100&&geo.total<=220,'Délka trati '+fmt(geo.total)+' m (FCI: 100–220 m)');
  var gaps=[];
  geo.segs.forEach(function(s,i){
    var a=geo.P[i].ex, b=geo.P[i+1].en, st=Math.hypot(a.x-b.x,a.y-b.y), lab=(i+1)+'→'+(i+2);
    if(s.len<5) gaps.push(lab+' po dráze jen '+fmt(s.len)+' m');
    if(st>7) gaps.push(lab+' vzdušnou čarou '+fmt(st)+' m');
    if(s.len>9) gaps.push(lab+' po dráze '+fmt(s.len)+' m');
  });
  add(!gaps.length,'Rozestupy (FCI: po dráze 5–9 m, vzdušnou čarou nejvýš 7 m)'+(gaps.length?': '+gaps.join('; '):''));
  add(cnt('weave')===1,'Slalom '+(cnt('weave')?cnt('weave')+'×':'chybí')+' (FCI: v každém parkuru, jen jednou)');
  if(cnt('tire')) add(cnt('tire')===1,'Kruh '+cnt('tire')+'× (FCI: jen jednou)');
  var zt=types.filter(function(t){return ZN.indexOf(t)>=0;}), kinds={}; zt.forEach(function(t){kinds[t]=1;});
  if(zt.length){ var mx=cls==='A1'?3:4; add(Object.keys(kinds).length===3&&zt.length<=mx,'Zónové překážky '+zt.length+'×, druhů '+Object.keys(kinds).length+' (FCI: všechny 3 druhy, v '+cls+' nejvýš '+mx+')'); }
  var sd=(sides||[]).slice(0,n);
  if(sd.filter(Boolean).length===n){ var ch=0; for(var i=1;i<n;i++) if(sd[i]!==sd[i-1]) ch++; add(ch>=2,'Změny strany psovoda '+ch+' (FCI: aspoň 2)'); }
  else add(null,'Změny strany psovoda: v Dráze psovoda nastav stranu psa u všech překážek (FCI chce aspoň 2)');
  var hits=[];
  geo.segs.forEach(function(s,i){
    var skip={}, hit=null; skip[route[i]]=1; skip[route[i+1]]=1;
    s.pcs.forEach(function(pc){ for(var t=0;t<=12&&!hit;t++){ var q=bz(pc[0],pc[1],pc[2],pc[3],t/12);
      for(var k=0;k<obs.length&&!hit;k++){ var o=obs[k]; if(skip[o.id]) continue; if(pdist(q,opoly(o))<.45) hit=o; } } });
    if(hit){ var num=route.indexOf(hit.id); hits.push((i+1)+'→'+(i+2)+' přes '+DEF[hit.type].l.toLowerCase()+(num>=0?' č. '+(num+1):'')); }
  });
  add(!hits.length,'Dráha psa nevede přes jinou překážku'+(hits.length?': '+hits.join('; '):''));
  return out;
}
function fciBar(geo){
  var el=$('fciBar'); if(!el) return;
  if(S.route.length<2){el.hidden=true; return;}
  var bad=fciCheck(S.obs,S.route,S.turns,S.sides,S.meta.cls,geo).filter(function(x){return x.ok===false;}).length;
  el.hidden=false; el.className='fcibar '+(bad?'warn':'ok');
  el.innerHTML='<span class="ic">'+(bad?'!':'✓')+'</span><span class="grow">'+(bad?'Pravidla FCI: '+bad+' '+(bad===1?'problém':bad<5?'problémy':'problémů'):'Pravidla FCI v pořádku')+'</span><span class="more">Podrobnosti</span>';
}
function fciSheet(){
  var items=fciCheck(S.obs,S.route,S.turns,S.sides,S.meta.cls);
  openSheet('<h3>Kontrola podle pravidel FCI</h3><ul class="fcilist">'+items.map(function(x){
      return '<li class="'+(x.ok===true?'ok':x.ok===false?'bad':'info')+'"><span class="i">'+(x.ok===true?'✓':x.ok===false?'!':'•')+'</span><span>'+esc(x.t)+'</span></li>';}).join('')+'</ul>'+
    '<p class="hint">Rozestupy se měří po dráze psa, jak ji ukazuje plán, i se smyčkami otoček. Pravidla platí pro závody, na trénink si můžeš postavit cokoli.</p>'+
    '<div class="acts"><button class="btn primary" data-a="x">Zavřít</button></div>',
    function(e){if(e.target.closest('[data-a]')) closeSheet();});
}
$('fciBar').onclick=fciSheet;
function setPanel(p){
  if(panel==='quiz'&&p!=='quiz') quizStop();
  panel=(panel===p)?null:p; sel=null;
  if(panel==='quiz') quizStart();
  ui(); render();
}
$('hpClear').onclick=function(){S.hp=[]; touch(); render();};
$('sideDone').onclick=function(){setPanel(null);};
$('bgDone').onclick=function(){setPanel(null);};
$('bgPick').onclick=function(){ if(APK_LITE){toast('Fotku jako podklad vložíš ve webové verzi aplikace.'); return;} $('bgFile').click(); };
$('bgDel').onclick=function(){BG=null; try{localStorage.removeItem('agility-bg-v1');}catch(e){} drawGrid(); ui(); toast('Podklad odebrán');};
$('bgFit').onclick=function(){if(!BG) return; BG.fit=BG.fit==='none'?'meet':'none'; lsSet('agility-bg-v1',BG); drawBg(); ui();};
$('bgOp').oninput=function(){if(!BG) return; BG.op=this.value/100; drawBg();};
$('bgOp').onchange=function(){if(BG) lsSet('agility-bg-v1',BG);};
$('bgFile').onchange=function(){
  var f=this.files&&this.files[0]; this.value=''; if(!f) return;
  var rd=new FileReader();
  rd.onload=function(){
    var im=new Image();
    im.onload=function(){
      var k=Math.min(1,1400/Math.max(im.width,im.height)), c=document.createElement('canvas');
      c.width=Math.round(im.width*k); c.height=Math.round(im.height*k);
      c.getContext('2d').drawImage(im,0,0,c.width,c.height);
      BG={src:c.toDataURL('image/jpeg',.8),op:.55,fit:'meet'};
      lsSet('agility-bg-v1',BG); drawGrid(); ui(); toast('Podklad vložen');
    };
    im.onerror=function(){toast('Tenhle soubor se nepodařilo načíst jako obrázek.');};
    im.src=rd.result;
  };
  rd.readAsDataURL(f);
};
function quizStart(){
  if(S.route.length<3){toast('Trénink paměti potřebuje trasu aspoň se 3 překážkami.'); panel=null; return;}
  QZ={phase:'look',pos:0,miss:0,lookEnd:Date.now()+45000,t0:0,timer:setInterval(quizBar,250)};
  quizBar();
}
function quizStop(){ if(QZ){clearInterval(QZ.timer);} QZ=null; }
function quizBar(){
  if(!QZ) return; var el=$('quizBar'), h;
  if(QZ.phase==='look'){
    var left=Math.max(0,Math.ceil((QZ.lookEnd-Date.now())/1000));
    if(!left){quizTest(); return;}
    h='<div class="quizbar-row"><span class="grow">Prohlídka: zapamatuj si pořadí překážek.</span><b>'+left+' s</b></div><div class="row"><button class="btn primary" data-q="test">Začít test</button><button class="btn" data-q="stop">Ukončit</button></div>';
  } else if(QZ.phase==='test'){
    h='<div class="quizbar-row"><span class="grow">Klepni na překážku č. <b>'+(QZ.pos+1)+'</b></span><span>Chyby: <b>'+QZ.miss+'</b></span><span><b>'+fmt((Date.now()-QZ.t0)/1000)+' s</b></span></div><div class="row"><button class="btn" data-q="stop">Ukončit</button></div>';
  } else {
    h='<div class="quizbar-row"><span class="grow">Hotovo! Čas <b>'+fmt(QZ.time)+' s</b>, chyby <b>'+QZ.miss+'</b>.</span></div><div class="row"><button class="btn primary" data-q="again">Znovu</button><button class="btn" data-q="stop">Zavřít</button></div>';
  }
  if(el.getAttribute('data-h')!==h){el.innerHTML=h; el.setAttribute('data-h',h);}
}
function quizTest(){ if(!QZ) return; QZ.phase='test'; QZ.pos=0; QZ.miss=0; QZ.t0=Date.now(); render(); quizBar(); }
function quizTap(id){
  if(!QZ||QZ.phase!=='test') return;
  if(S.route[QZ.pos]===id){
    QZ.pos++;
    if(QZ.pos>=S.route.length){QZ.phase='done'; QZ.time=(Date.now()-QZ.t0)/1000; clearInterval(QZ.timer);}
  } else {
    QZ.miss++; var w=$('wrap'); w.classList.remove('flash-bad'); void w.offsetWidth; w.classList.add('flash-bad');
  }
  render(); quizBar();
}
$('quizBar').onclick=function(e){
  var b=e.target.closest('[data-q]'); if(!b) return; var q=b.getAttribute('data-q');
  if(q==='test') quizTest();
  else if(q==='again'){quizStop(); quizStart(); render();}
  else setPanel(null);
};
$('planTools').onclick=function(e){
  var b=e.target.closest('.tool'); if(!b) return; var t=b.getAttribute('data-t');
  if(t==='side'||t==='bg'||t==='quiz') setPanel(t);
  else if(t==='ana') anaSheet();
  else if(t==='say') saySheet();
  else if(t==='imp') impOpen();
  else if(t==='fld') fldOpen();
  else if(t==='3d') open3d();
  else if(t==='export') exportSheet();
  else if(t==='share') shareSheet();
};
