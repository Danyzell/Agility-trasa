
/* ---------- plánek z obrázku: rohy plochy, srovnání perspektivy, rozpoznání překážek, pořadí klepáním ---------- */
var IMP=null;
function homog(from,to){ /* 3×3 matice H, kde to ~ H·from (4 páry bodů) */
  var A=[], i;
  for(i=0;i<4;i++){ var x=from[i][0], y=from[i][1], u=to[i][0], v=to[i][1];
    A.push([x,y,1,0,0,0,-u*x,-u*y,u]); A.push([0,0,0,x,y,1,-v*x,-v*y,v]); }
  for(var c=0;c<8;c++){ var p=c; for(var r0=c+1;r0<8;r0++) if(Math.abs(A[r0][c])>Math.abs(A[p][c])) p=r0; var t=A[c]; A[c]=A[p]; A[p]=t;
    if(Math.abs(A[c][c])<1e-12) return null;
    for(var r1_=0;r1_<8;r1_++){ if(r1_===c) continue; var f=A[r1_][c]/A[c][c]; for(var k=c;k<9;k++) A[r1_][k]-=f*A[c][k]; } }
  var h=A.map(function(row,j){return row[8]/row[j];}); h.push(1); return h;
}
/* srovnání: čtyřúhelník v obrázku → obdélník W×H metrů po s px na metr */
function impWarp(D,quad,W,H,s){
  var ow=Math.round(W*s), oh=Math.round(H*s), h=homog([[0,0],[ow,0],[ow,oh],[0,oh]],quad); if(!h) return null;
  var out=new ImageData(ow,oh), o=out.data, d=D.data, iw=D.width, ih=D.height;
  for(var y=0;y<oh;y++) for(var x=0;x<ow;x++){
    var w=h[6]*x+h[7]*y+1, sx=(h[0]*x+h[1]*y+h[2])/w, sy=(h[3]*x+h[4]*y+h[5])/w, j=(y*ow+x)*4;
    if(sx<0||sy<0||sx>=iw-1||sy>=ih-1){ o[j]=o[j+1]=o[j+2]=255; o[j+3]=255; continue; }
    var x0=sx|0, y0=sy|0, fx=sx-x0, fy=sy-y0, i00=(y0*iw+x0)*4, i10=i00+4, i01=i00+iw*4, i11=i01+4;
    for(var c=0;c<3;c++) o[j+c]=(d[i00+c]*(1-fx)+d[i10+c]*fx)*(1-fy)+(d[i01+c]*(1-fx)+d[i11+c]*fx)*fy;
    o[j+3]=255;
  }
  return out;
}
function impOpen(){
  impClose(); IMP={step:'pick'};
  var ov=document.createElement('div'); ov.className='ovsp'; ov.id='ovImp';
  ov.innerHTML='<div class="ovsp-top"><b>Plánek z obrázku</b><span class="grow"></span><button class="btn" id="imClose">Zavřít</button></div>'+
    '<p class="hint" id="imHint">'+(APK_LITE?'Zkopíruj obrázek plánku (v galerii nebo prohlížeči Kopírovat) a vlož ho do pole níž: podrž na něm prst a zvol Vložit. Nic se nenahrává, obrázek zůstane v telefonu.':'Vyber snímek obrazovky nebo fotku plánku, nebo obrázek vlož ze schránky (Ctrl+V). Nic se nenahrává, obrázek zůstane v zařízení.')+'</p>'+
    '<div class="impaste" id="imPaste" contenteditable="true" aria-label="Sem vlož obrázek plánku">'+(APK_LITE?'Sem vlož obrázek plánku':'Sem můžeš vložit obrázek ze schránky')+'</div>'+
    '<div class="imwrap"><canvas id="imCv"></canvas></div>'+
    '<div class="grid2" id="imSize"><label for="imW">Šířka plochy (m)<input id="imW" type="number" min="10" max="60" inputmode="numeric"></label><label for="imH">Hloubka plochy (m)<input id="imH" type="number" min="10" max="40" inputmode="numeric"></label></div>'+
    '<div class="acts"><button class="btn" id="imPick"'+(APK_LITE?' hidden':'')+'>Vybrat obrázek</button><button class="btn primary" id="imGo" disabled>Rozpoznat</button></div>'+
    '<input type="file" id="imFile" accept="image/*" hidden>';
  document.body.appendChild(ov);
  $('imClose').onclick=impClose; $('imPick').onclick=function(){ IMP.tok=(IMP.tok||0)+1; if(IMP.step==='res'){ impCorners(); return; } $('imFile').click(); };
  $('imFile').onchange=function(){ var f=this.files&&this.files[0]; this.value=''; if(f) impLoad(f); };
  $('imGo').onclick=function(){ if(IMP.step==='res') impApply(); else impDetect(); };
  $('imW').value=S.W||40; $('imH').value=S.H||20; $('imSize').hidden=true;
  /* vložení ze schránky: obrázek jako soubor, nebo obrázek v HTML (data: nebo blob:) */
  var pz=$('imPaste');
  pz.addEventListener('paste',function(e){ e.preventDefault(); impPaste(e.clipboardData); });
  pz.addEventListener('input',function(){ var im=pz.querySelector('img'); if(im&&im.src){ impLoadSrc(im.src); } pz.textContent=APK_LITE?'Sem vlož obrázek plánku':'Sem můžeš vložit obrázek ze schránky'; });
  var cv=$('imCv'), drag=-1;
  cv.addEventListener('pointerdown',function(e){ if(IMP.step!=='corners') return; var p=impPt(e), best=-1, bd=1e9;
    IMP.q.forEach(function(q,i){ var d2=Math.hypot(q[0]-p[0],q[1]-p[1]); if(d2<bd){bd=d2; best=i;} });
    if(bd<40/IMP.k){ drag=best; cv.setPointerCapture(e.pointerId); e.preventDefault(); } });
  cv.addEventListener('pointermove',function(e){ if(drag<0) return; var p=impPt(e); IMP.q[drag]=[cl(p[0],0,IMP.D.width-1),cl(p[1],0,IMP.D.height-1)]; impDraw(); });
  cv.addEventListener('pointerup',function(){ drag=-1; });
  if(!APK_LITE) $('imFile').click();
}
function impPaste(dt){
  if(!IMP||!dt) return; var items=dt.items||[], f=null, i;
  for(i=0;i<items.length;i++){ if(items[i].kind==='file'&&/^image\//.test(items[i].type)){ f=items[i].getAsFile(); break; } }
  if(!f&&dt.files&&dt.files.length&&/^image\//.test(dt.files[0].type)) f=dt.files[0];
  if(f){ impLoad(f); return; }
  var html=dt.getData&&dt.getData('text/html'), m=html&&html.match(/<img[^>]+src="([^"]+)"/i);
  if(m&&/^(data:image|blob:)/.test(m[1])){ impLoadSrc(m[1]); return; }
  var txt=dt.getData&&dt.getData('text/plain');
  if(txt&&/^data:image\//.test(txt)){ impLoadSrc(txt); return; }
  toast(APK_LITE?'Ve schránce není obrázek. V galerii zvol u plánku Kopírovat a vlož ho sem.':'Ve schránce není obrázek.');
}
function impPt(e){ var r=$('imCv').getBoundingClientRect(); return [(e.clientX-r.left)/IMP.k,(e.clientY-r.top)/IMP.k]; }
function impClose(){ var ov=$('ovImp'); if(ov) ov.parentNode.removeChild(ov); IMP=null; }
function impLoad(f){
  var rd=new FileReader(); rd.onload=function(){ impLoadSrc(rd.result); }; rd.readAsDataURL(f);
}
function impLoadSrc(src){
  var im=new Image(); if(IMP) IMP.tok=(IMP.tok||0)+1; /* rozběhnuté čtení předchozího obrázku se zahodí */
  im.onload=function(){
    if(!IMP) return;
    var k=Math.min(1,2000/Math.max(im.width,im.height)), c=document.createElement('canvas'); c.width=Math.round(im.width*k); c.height=Math.round(im.height*k);
    var x=c.getContext('2d'); x.drawImage(im,0,0,c.width,c.height);
    try{ IMP.D=x.getImageData(0,0,c.width,c.height); }catch(e){ toast('Tenhle obrázek nejde přečíst. Ulož ho do zařízení a vlož znovu.'); return; }
    IMP.img=c; var g=null; try{ g=PR.grid(IMP.D,{}); }catch(e){}
    if(g&&g.W>=10&&g.H>=8){ IMP.q=[[g.x0,g.y0],[g.x0+g.W*g.sx,g.y0],[g.x0+g.W*g.sx,g.y0+g.H*g.sy],[g.x0,g.y0+g.H*g.sy]]; $('imW').value=Math.round(g.W); $('imH').value=Math.round(g.H); IMP.auto=true; IMP.g=g; IMP.q0=JSON.stringify(IMP.q); }
    else { var w=c.width, h=c.height; IMP.q=[[w*.05,h*.05],[w*.95,h*.05],[w*.95,h*.95],[w*.05,h*.95]]; IMP.auto=false; IMP.g=null; }
    var pz=$('imPaste'); if(pz) pz.hidden=true;
    impCorners();
  };
  im.onerror=function(){ toast('Tenhle soubor se nepodařilo načíst jako obrázek.'); };
  im.src=src;
}
function impCorners(){
  IMP.step='corners'; $('imSize').hidden=false; $('imGo').disabled=false; $('imGo').textContent='Rozpoznat'; $('imPick').textContent='Jiný obrázek';
  $('imHint').textContent=IMP.auto?'Mřížka plochy nalezena. Zkontroluj rohy a rozměr plochy a klepni na Rozpoznat.':'Posuň čtyři body na rohy plochy (vnější okraj mřížky) a vyplň rozměr plochy v metrech.';
  impDraw();
}
function impDraw(){
  var cv=$('imCv'), src=IMP.step==='res'?IMP.out:IMP.img, maxW=Math.min(window.innerWidth-32,900), maxH=window.innerHeight*.55, k=Math.min(maxW/src.width,maxH/src.height);
  IMP.k=k; cv.width=Math.round(src.width*k); cv.height=Math.round(src.height*k);
  var x=cv.getContext('2d'); x.drawImage(src,0,0,cv.width,cv.height);
  if(IMP.step==='corners'){
    x.strokeStyle='#1f6b45'; x.lineWidth=2; x.beginPath(); IMP.q.forEach(function(q,i){ if(i) x.lineTo(q[0]*k,q[1]*k); else x.moveTo(q[0]*k,q[1]*k); }); x.closePath(); x.stroke();
    IMP.q.forEach(function(q,i){ x.fillStyle='rgba(31,107,69,.85)'; x.beginPath(); x.arc(q[0]*k,q[1]*k,11,0,7); x.fill(); x.fillStyle='#fff'; x.font='bold 12px sans-serif'; x.textAlign='center'; x.fillText(['↖','↗','↘','↙'][i],q[0]*k,q[1]*k+4); });
  } else if(IMP.step==='res'){
    var s=IMP.s;
    IMP.obs.forEach(function(o){ var d=DEF[o.type]; if(!d) return; x.save(); x.translate(o.x*s*k,o.y*s*k); x.strokeStyle=d.c; x.fillStyle=d.c; x.lineWidth=3; x.setLineDash(o.ph?[5,4]:[]);
      if(o.type==='tunnel'&&o.bend){ x.rotate(0); var L=tunLen(o), pts=[]; for(var j=0;j<=12;j++){ var p=tunPt({x:0,y:0,rot:o.rot,bend:o.bend},-L/2+L*j/12); pts.push(p); }
        x.beginPath(); pts.forEach(function(p,j){ if(j) x.lineTo(p.x*s*k,p.y*s*k); else x.moveTo(p.x*s*k,p.y*s*k); }); x.stroke(); }
      else { x.rotate(o.rot*Math.PI/180); var hl=Math.max(DEF[o.type].hl,.7); x.beginPath(); if(DEF[o.type].hl>0){ x.moveTo(-hl*s*k,0); x.lineTo(hl*s*k,0); } else { x.moveTo(0,-.7*s*k); x.lineTo(0,.7*s*k); } x.stroke(); }
      x.restore(); x.beginPath(); x.arc(o.x*s*k,o.y*s*k,4,0,7); x.fillStyle=d.c; x.fill(); });
    if(IMP.R){ var g=null; try{ g=calc(IMP.obs,IMP.R.route,IMP.R.turns.map(function(t){return t||null;})); }catch(e){}
      if(g){ x.strokeStyle='rgba(232,140,20,.9)'; x.lineWidth=3; g.segs.forEach(function(sg){ x.beginPath(); sg.pcs.forEach(function(q,j){ if(!j) x.moveTo(q[0].x*s*k,q[0].y*s*k); x.bezierCurveTo(q[1].x*s*k,q[1].y*s*k,q[2].x*s*k,q[2].y*s*k,q[3].x*s*k,q[3].y*s*k); }); x.stroke(); }); }
      var bad={}; IMP.R.issues.forEach(function(q){ if(q.n!=null) bad[q.n]=1; });
      IMP.R.nums.forEach(function(q){ var X=q.x*s*k,Y=q.y*s*k,rr=Math.max(9,q.R*s*k*1.1); x.beginPath(); x.arc(X,Y,rr,0,7); x.fillStyle=bad[q.n]?'rgba(192,57,43,.92)':'rgba(31,107,69,.92)'; x.fill();
        x.fillStyle='#fff'; x.font='bold '+Math.round(rr*1.05)+'px sans-serif'; x.textAlign='center'; x.textBaseline='middle'; x.fillText(String(q.n),X,Y+1); }); }
  }
}
function impDetect(){
  var W=Math.round(+$('imW').value), H=Math.round(+$('imH').value);
  if(!(W>=10&&W<=60&&H>=10&&H<=40)){ toast('Rozměr plochy: šířka 10–60 m, hloubka 10–40 m.'); return; }
  $('imGo').disabled=true;
  /* po krocích s oddechem pro obrazovku: na telefonu trvá čtení několik sekund, aplikace mezitím ukazuje, co dělá */
  var st=impStages(W,H),tok=IMP.tok=(IMP.tok||0)+1;
  function done(){ if(IMP&&$('imGo')) $('imGo').disabled=IMP.step==='res'&&!(IMP.obs&&IMP.obs.length); }
  (function step(){ if(!IMP||IMP.tok!==tok) return; var more=false; if(st.msg) $('imHint').textContent=st.msg;
    setTimeout(function(){ if(!IMP||IMP.tok!==tok) return; try{ more=st.next(); }catch(e){ more=false; } if(more) step(); else done(); },30); })();
}
function impDetect2(W,H){ var st=impStages(W,H); while(st.next()); }
function impStages(W,H){
  var s=25, s2=50, D, show, N=null, D50=null, g, flat, G25, res, obs, R=null, k=0;
  function inBand(o){ var b=res&&res.bands; if(!b) return false; var P=opoly(o).concat([{x:o.x,y:o.y}]),e=.15;
    return b.T&&P.every(function(p){return p.y<1-e;})||b.B&&P.every(function(p){return p.y>H-1+e;})||b.L&&P.every(function(p){return p.x<1-e;})||b.R&&P.every(function(p){return p.x>W-1+e;}); }
  function toObs(r){ return r.obs.filter(function(o){return DEF[o.type];}).map(function(o){ var n={type:o.type,x:r1(cl(o.x,.3,W-.3)),y:r1(cl(o.y,.3,H-.3)),rot:((Math.round(o.rot)%360)+360)%360}; if(o.type==='tunnel'&&o.bend) n.bend=o.bend; if(o.info&&o.info.bar) n.bar=o.info.bar; return n; }); }
  var steps=[
    /* 1) srovnání a čísla v kroužcích (jemnější srovnání 50 px/m), kroužky se pak pro čtečku překážek vymažou */
    function(){ D=impWarp(IMP.D,IMP.q,W,H,s); /* čtečka překážek je vyladěná na plánky kolem 25 px na metr */ if(!D){ toast('Rohy netvoří čtyřúhelník, posuň je.'); return false; }
      show=new ImageData(new Uint8ClampedArray(D.data),D.width,D.height);
      try{ D50=impWarp(IMP.D,IMP.q,W,H,s2); N=PRR.nums(D50,s2); if(N.list.length>=2) PRR.clean(D,s,N); else N=null; }catch(e){ N=null; } },
    /* 2) překážky: rovný plánek (screenshot, export z programu) s nalezenou mřížkou v plném rozlišení, fotka přes srovnání */
    function(){ g=IMP.g; flat=IMP.auto&&g&&IMP.q0===JSON.stringify(IMP.q)&&Math.round(g.W)===W&&Math.round(g.H)===H&&!(window.IMPOPT&&IMPOPT.warp);
      /* v plném rozlišení se kroužky s čísly vymažou z kopie obrázku (jinak by je čtečka překážek brala jako překážky) */
      var Dn=IMP.D; if(flat&&N){ try{ Dn=new ImageData(new Uint8ClampedArray(IMP.D.data),IMP.D.width,IMP.D.height); PRR.clean(Dn,g.sx,N,{x0:g.x0,y0:g.y0,sy:g.sy}); }catch(e){ Dn=IMP.D; } }
      G25={grid:{sx:s,sy:s,x0:0,y0:0,W:W,H:H,lx:W+1,ly:H+1}};
      try{ res=flat?PR.read(Dn,{grid:g}):PR.read(D,G25); }catch(e){ res={err:String(e)}; }
      if(!res||res.err||!res.obs){ toast('Překážky se nepodařilo rozpoznat. Zkus ostřejší obrázek nebo přesnější rohy.'); return false; }
      /* pás popisků u okraje mřížky: překážka celá uvnitř pásu je složená z písmen (např. řada číslic jako slalom) */
      obs=toObs(res).filter(function(o){ return !inBand(o); });
      /* kroužek nakreslený přes překážku ji po vymazání může rozbít: číslo, u kterého pak nic není, dostane překážku
         z čtení nevymazaného obrázku (když tam je a není to jen kroužek) */
      if(N&&PRR.needRescue(obs,N)){ try{ var r0=flat?PR.read(IMP.D,{grid:g}):PR.read(show,G25); if(r0&&r0.obs) obs=obs.concat(PRR.rescue(obs,toObs(r0).filter(function(o){ return !inBand(o); }),N)); }catch(e){} }
      obs.forEach(function(o,i){ o.id=i+1; delete o.bar; }); },
    /* 3) trasa: čísla k překážkám, chybějící překážky u čísel, směry podle nakreslené čáry */
    function(){ if(N&&obs.length>=2){ try{ R=PRR.route(D50,s2,obs,N); }catch(e){ R=null; } } },
    /* 4) výsledek */
    function(){ var c=document.createElement('canvas'); c.width=D.width; c.height=D.height; c.getContext('2d').putImageData(show,0,0);
      /* s přečtenou trasou: skoky a kruhy bez čísla jsou skoro vždy omyl čtečky (kus čáry, okraj tunelu), vynechají se */
      if(R&&R.ok){ var inR={}; R.route.forEach(function(id){ inR[id]=1; }); var drop={};
        R.obs.forEach(function(o){ if(!inR[o.id]&&(o.type==='jump'||o.type==='tire')) drop[o.id]=1; });
        R.issues=R.issues.filter(function(x){ return !(x.t==='unused'&&drop[x.o]); });
        obs=R.obs.filter(function(o){ return !drop[o.id]; }).map(function(o){ var n={id:o.id,type:o.type,x:r1(cl(o.x,.3,W-.3)),y:r1(cl(o.y,.3,H-.3)),rot:o.rot}; if(o.bend) n.bend=o.bend; if(o.ph) n.ph=1; return n; }); }
      IMP.out=c; IMP.obs=obs; IMP.R=R&&R.ok?R:null; IMP.N=N; IMP.s=s; IMP.W=W; IMP.H=H; IMP.step='res';
      var cnt={}; obs.forEach(function(o){ cnt[o.type]=(cnt[o.type]||0)+1; });
      var found=obs.length?'Nalezeno: '+Object.keys(cnt).map(function(t){return cnt[t]+'× '+DEF[t].l.toLowerCase();}).join(', ')+'. ':'';
      if(IMP.R){ var q=impIssues(IMP.R);
        $('imHint').innerHTML=esc(found)+'<b>Trasa 1–'+IMP.R.max+' přečtená z čísel na plánku</b>, směry podle nakreslené čáry.'+(q?' Zkontroluj: '+esc(q)+'.':' Vše vypadá jistě.')+' Po použití jde cokoli opravit v Plánu.'; }
      else $('imHint').textContent=obs.length?found+(N?'Čísla na plánku se nepodařilo přiřadit, ':'Čísla v kroužcích jsem nenašel, ')+'po použití klepej na překážky v pořadí podle čísel na plánku, chybějící doplň v režimu Stavba.':'Na obrázku se nenašly žádné překážky. Zkus jiný obrázek nebo je polož ručně na podklad.';
      $('imSize').hidden=true; $('imGo').textContent='Použít'; $('imGo').disabled=!obs.length; $('imPick').textContent='Zpět k rohům';
      impDraw(); }
  ], msgs=['Čtu čísla v kroužcích…','Hledám překážky…','Čtu trasu a směry podle nakreslené čáry…',''];
  var st={msg:msgs[0],next:function(){ if(k>=steps.length) return false; var r=steps[k++](); if(r===false){ k=steps.length; return false; } st.msg=msgs[k]||''; return k<steps.length; }};
  return st;
}
/* srozumitelný seznam míst, kde si čtečka nebyla jistá */
function impIssues(R){
  var by={}; R.issues.forEach(function(x){ var k=x.n!=null?'č. '+x.n:null; if(!k) return; (by[k]=by[k]||[]).push(x.t); });
  var un=R.issues.filter(function(x){return x.t==='unused';}).length;
  var out=Object.keys(by).map(function(k){ var t=by[k], w=[]; if(t.indexOf('place')>=0) w.push('překážka jen odhadem'); if(t.indexOf('far')>=0) w.push('ověř překážku'); if(t.indexOf('glyph')>=0) w.push('číslo'); if(t.indexOf('dir')>=0) w.push('směr'); return k+' ('+w.join(', ')+')'; });
  if(un) out.push(un+(un>1?' překážky mimo trasu':' překážka mimo trasu'));
  return out.slice(0,6).join(', ');
}
function impApply(){
  var W=IMP.W, H=IMP.H, url=IMP.out.toDataURL('image/jpeg',.8), obs=IMP.obs, R=IMP.R;
  function go(){
    S.W=W; S.H=H; setSizeSel();
    S.obs=obs.map(function(o){ var n={id:o.id,type:o.type,x:o.x,y:o.y,rot:o.rot}; if(o.bend) n.bend=o.bend; return n; });
    S.sides=[]; S.hp=[]; sel=null;
    if(R){ S.route=R.route.slice(); S.turns=R.turns.map(function(t,i){return tuValid(t||null,getO(S.route[i]).type);});
      var bad={}; R.issues.forEach(function(q){ if(q.n!=null) bad[q.n]=1; }); S.chk=R.nn.map(function(n){return bad[n]?1:0;}); }
    else { S.route=[]; S.turns=[]; S.chk=null; }
    S.meta={id:null,name:'Plánek z obrázku',cls:S.meta.cls||'A2',author:'',gen:false,dirty:true};
    BG={src:url,op:.5,fit:'none'}; lsSet('agility-bg-v1',BG);
    mode=R?'build':'route'; impClose(); save(); drawGrid(); render(); ui(); topbar(); resetRun(); show('plan');
    if(R){ var q=S.chk.filter(Boolean).length; toast('Trasa načtená z plánku: '+S.route.length+' překážek'+(q?', zkontroluj '+q+(q===1?' místo':q<5?' místa':' míst')+' s otazníkem':'')+'. Ulož ji tlačítkem Uložit.'); }
    else toast('Rozpoznáno '+S.obs.length+' překážek. Teď na ně klepej v pořadí podle čísel na plánku.');
  }
  if(S.obs.length&&(S.meta.dirty||!S.meta.id)) ask('Nahradit rozpracovaný plán?','Plocha se nahradí překážkami z obrázku.','Nahradit',go); else go();
}
