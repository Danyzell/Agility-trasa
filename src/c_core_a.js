
/* ---------- ikony ---------- */
var IC={
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/></svg>',
  starF:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 20v-4h-4"/></svg>',
  dice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.3" fill="currentColor"/><circle cx="15" cy="15" r="1.3" fill="currentColor"/><circle cx="15" cy="9" r="1.3" fill="currentColor"/><circle cx="9" cy="15" r="1.3" fill="currentColor"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-6.5 8 6.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>',
  playF:'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15c2-5 4 1 6-3s3-2 4-2" stroke-dasharray="2 2.5"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>',
  timer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13.5" r="7"/><path d="M12 13.5V10M10 3h4M18.5 6.5l-1.3 1.3"/></svg>',
  people:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3.3 2.8-5 5.5-5s4.9 1.7 5.5 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15.8 14.2c2.4-.3 4.3 1.2 4.7 4.3"/></svg>',
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  cube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>',
  brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 4.5A3 3 0 0 0 6.6 7 3 3 0 0 0 4.5 12a3 3 0 0 0 2.2 4.6A3 3 0 0 0 12 18V6a3 3 0 0 0-2.5-1.5zM14.5 4.5A3 3 0 0 1 17.4 7a3 3 0 0 1 2.1 5 3 3 0 0 1-2.2 4.6A3 3 0 0 1 12 18"/></svg>',
  walk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="2"/><path d="M10.5 21l2-6-3-3 1.2-4.2 3.8 3 3.5 1M9.7 11.8L7 15"/></svg>',
  photo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h6"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5z" fill="currentColor"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/></svg>',
  gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 17a8 8 0 1 1 15 0"/><path d="M12 13l3.5-4"/><circle cx="12" cy="13" r="1.3" fill="currentColor"/></svg>',
  speak:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10v4h4l5 4V6L8 10z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
  scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M8 15l3-4 2 2.5 3-4"/></svg>',
  compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  undo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>',
  sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6v.2"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4.5h9a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h9"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  paw:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="9.5" r="1.7"/><circle cx="12" cy="6.5" r="1.7"/><circle cx="17" cy="9.5" r="1.7"/><path d="M8.2 17.2c0-2.7 1.7-4.7 3.8-4.7s3.8 2 3.8 4.7c0 1.3-1.1 2-2.1 1.6-.6-.2-1.1-.4-1.7-.4s-1.1.2-1.7.4c-1 .4-2.1-.3-2.1-1.6z"/></svg>',
  log:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18.5h10a4 4 0 0 0 .6-8A5.5 5.5 0 0 0 7 12a3.3 3.3 0 0 0 0 6.5z"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 21V4"/><path d="M5.5 4.5h11l-2.2 4 2.2 4h-11"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4M4 20h16"/><path d="M8.5 16v-4M13 16V8M17.5 16v-6"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8.5 3v4M15.5 3v4"/></svg>',
  trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5.5a2.5 2.5 0 0 0 2.8 4M16 6h2.5a2.5 2.5 0 0 1-2.8 4M12 13v4M8.5 20h7"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 6l6 6-6 6"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.7 3.5 5.7 3.5 9s-1.1 6.3-3.5 9c-2.4-2.7-3.5-5.7-3.5-9s1.1-6.3 3.5-9z"/></svg>',
  brand:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.4" y="3.6" width="3" height="16.8" rx="1.5" fill="currentColor"/><rect x="16.6" y="3.6" width="3" height="16.8" rx="1.5" fill="currentColor"/><rect x="6.4" y="10.5" width="11.2" height="3" rx="1.2" fill="currentColor"/><path d="M2.6 21.2c4.6-.2 6.8-4.4 9.4-9.1s4.8-8.6 9.4-9" fill="none" stroke="var(--mark-accent,var(--zone))" stroke-width="2.3" stroke-linecap="round"/><circle cx="2.9" cy="21.1" r="1.5" fill="var(--mark-accent,var(--zone))"/></svg>'
};
Array.prototype.forEach.call(document.querySelectorAll('[data-ic]'),function(el){el.insertAdjacentHTML('afterbegin',IC[el.getAttribute('data-ic')]);});
DEF.tire.c='#6f7f8c';

/* ---------- kontrola dat parkuru ----------
   Parkur z kódu, ze zálohy nebo z paměti telefonu: jen známé překážky s čísly v souřadnicích, trasa jen přes překážky,
   které na ploše stojí (strany a otočky zůstanou u svých překážek). Poškozená data pak aplikaci neshodí. */
function courseClean(d){
  d=d&&typeof d==='object'?d:{};
  var W=+d.W, H=+d.H; if(!(W>=10&&W<=60)) W=40; if(!(H>=10&&H<=40)) H=20;
  var by={}, obs=[];
  (Array.isArray(d.obs)?d.obs:[]).forEach(function(o){
    if(!o||typeof o!=='object'||!Object.prototype.hasOwnProperty.call(DEF,o.type)) return;
    var id=+o.id, x=+o.x, y=+o.y, ro=+o.rot, b=Math.round(+o.bend);
    if(!(id>0&&id%1===0)||by[id]||!isFinite(x)||!isFinite(y)) return;
    var n={id:id,type:o.type,x:cl(x,0,W),y:cl(y,0,H),rot:isFinite(ro)?(ro%360+360)%360:0};
    if(o.type==='tunnel'&&b&&Math.abs(b)<=180) n.bend=b;
    by[id]=n; obs.push(n);
  });
  var rt=Array.isArray(d.route)?d.route:[], sd=Array.isArray(d.sides)?d.sides:[], tu=Array.isArray(d.turns)?d.turns:[], route=[], sides=[], turns=[];
  rt.forEach(function(v,i){ var o=by[+v]; if(!o) return;
    route.push(o.id); sides.push(sd[i]==='L'||sd[i]==='P'?sd[i]:null); turns.push(tuValid(tu[i],o.type)); });
  var hp=(Array.isArray(d.hp)?d.hp:[]).filter(function(p){return Array.isArray(p)&&isFinite(+p[0])&&isFinite(+p[1]);})
    .map(function(p){return [cl(+p[0],0,W),cl(+p[1],0,H)];});
  return {W:W,H:H,obs:obs,route:route,sides:sides,turns:turns,hp:hp};
}
function clsClean(c){return ['A1','A2','A3'].indexOf(c)>=0?c:'A1';}

/* dnešní datum v místním čase (toISOString dává UTC, v noci by to byl včerejšek) */
function localDate(d){d=d||new Date(); return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}
function dateOf(s){ return /^\d{4}-\d{2}-\d{2}$/.test(s||'')?new Date(s+'T00:00'):new Date(s); }

/* ---------- stav ---------- */
var S=lsGet(KEY,null), FRESH=!S; /* FRESH: první spuštění aplikace */
if(!S||typeof S!=='object') S={};
(function(){ var c=courseClean(S); for(var k in c) S[k]=c[k]; })();
if(!S.meta||typeof S.meta!=='object') S.meta={id:null,name:S.obs.length?'Rozpracovaný plán':'Nový parkur',cls:'A1',author:'',gen:false,dirty:S.obs.length>0};
S.meta.cls=clsClean(S.meta.cls); S.meta.name=String(S.meta.name||'Nový parkur'); S.meta.author=String(S.meta.author||'');
if(typeof S.meta.id!=='string') S.meta.id=null;
var BG=lsGet('agility-bg-v1',null), panel=null, QZ=null, hpDraw=null;
var SET=lsGet(SETK,{spd:{A1:3.0,A2:3.5,A3:4.0}});
var MK=lsGet(MKK,{});
var mode='build', tool='jump', sel=null, zoom=(window.innerWidth<600?2:1), drag=null, tap=null, view='plan';
var svg=$('field');
function getO(id){for(var i=0;i<S.obs.length;i++)if(S.obs[i].id===id)return S.obs[i];return null;}
function nid(){return S.obs.reduce(function(m,o){return Math.max(m,o.id);},0)+1;}
function save(){lsSet(KEY,S);}
/* Zpět: před každou změnou plánu (touch) se zapamatuje předchozí stav. Změny se stejnou skupinou g jdou za sebou
   jako jedna (tah posuvníkem otočení). Načtení jiného parkuru, Nový a plánek z obrázku historii smažou. */
var UNDO=[], UNDO_CUR=null, UNDO_G=null, UNDO_SV=null; /* UNDO_SV: plán, jak je uložený (null = neznámo) */
function planSnap(){ syncSides(); return JSON.stringify({W:S.W,H:S.H,obs:S.obs,route:S.route,sides:S.sides,turns:S.turns,hp:S.hp,chk:S.chk||null}); }
function undoUI(){ $('undoAll').disabled=!UNDO.length; }
function undoReset(){ UNDO=[]; UNDO_G=null; UNDO_CUR=planSnap(); UNDO_SV=S.meta.dirty?null:UNDO_CUR; undoUI(); }
function touch(g){
  var s=planSnap();
  if(s===UNDO_CUR&&UNDO_CUR!=null) return; /* nic se nezměnilo (klepnutí na už vybranou volbu) */
  if(UNDO_CUR!=null&&!(g&&g===UNDO_G)){ UNDO.push(UNDO_CUR); if(UNDO.length>60) UNDO.shift(); }
  UNDO_G=g||null; UNDO_CUR=s;
  S.meta.dirty=true; save(); topbar(); undoUI();
}
function undo(){
  if(!UNDO.length) return;
  var st=JSON.parse(UNDO.pop()), sz=st.W!==S.W||st.H!==S.H;
  S.W=st.W; S.H=st.H; S.obs=st.obs; S.route=st.route; S.sides=st.sides; S.turns=st.turns; S.hp=st.hp; S.chk=st.chk;
  UNDO_CUR=planSnap(); UNDO_G=null;
  if(sel!=null&&!getO(sel)) sel=null;
  S.meta.dirty=UNDO_CUR!==UNDO_SV;
  save(); if(sz){ setSizeSel(); drawGrid(); } render(); ui(); topbar(); undoUI();
}

(function migrateMy(){
  var L=lsGet(MYK,[]), ch=false;
  if(!Array.isArray(L)){L=[]; ch=true;}
  L=L.filter(function(c){ if(c&&typeof c==='object') return true; ch=true; return false; });
  L.forEach(function(c,i){
    if(!c.id||typeof c.id!=='string'){c.id='my-'+Date.now().toString(36)+'-'+i; ch=true;}
    if(clsClean(c.cls)!==c.cls){c.cls=clsClean(c.cls); ch=true;}
    if(typeof c.author!=='string'){c.author=c.author==null?'':String(c.author); ch=true;}
    if(typeof c.name!=='string'){c.name=c.name==null?'Můj parkur':String(c.name); ch=true;}
    var k=courseClean(c), q;
    for(q in k) if(JSON.stringify(k[q])!==JSON.stringify(c[q]==null?[]:c[q])){ c[q]=k[q]; ch=true; }
  });
  if(ch) lsSet(MYK,L);
})();
function myDB(){return lsGet(MYK,[]);}
function mySave(L){return lsSet(MYK,L);}

function getMark(id){return (id&&MK[id])||{fav:false,done:false,runs:[]};}
function setMark(id,patch){
  var m=MK[id]||{fav:false,done:false,runs:[]};
  for(var k in patch) m[k]=patch[k];
  MK[id]=m; lsSet(MKK,MK);
}

/* ---------- časy podle FCI ---------- */
function fmt(v){var s=v.toFixed(1); return LANG==='en'?s:s.replace('.',',');}
function fmt2(v){var s=v.toFixed(2); return LANG==='en'?s:s.replace('.',',');}
function spdOf(cls){return (SET.spd&&SET.spd[cls])||3.5;}
function metrics(obs,route,cls,turns,geo){
  var by={}; obs.forEach(function(o){by[o.id]=o;});
  var len=route.length>1?(geo||calc(obs,route,turns||null)).total:0;
  var zones=route.some(function(id){return by[id]&&ZN.indexOf(by[id].type)>=0;});
  var mcs=zones?2.5:3.0, spd=spdOf(cls);
  return {len:len,n:route.length,disc:zones?'Agility':'Jumping',mcs:mcs,spd:spd,cls:cls,
    /* časy z délky zaokrouhlené na desetiny, jak ji aplikace ukazuje (130,0 m / 2,5 m/s = 52 s, ne 53 s) */
    sct:len?Math.ceil(Math.round(len*10)/10/spd-1e-9):0, mct:len?Math.ceil(Math.round(len*10)/10/mcs-1e-9):0};
}
function curM(){return metrics(S.obs,S.route,S.meta.cls,S.turns);}
function specsHTML(m){
  var dash='–';
  return '<div class="spec"><small>Délka trati</small><b>'+(m.len?fmt(m.len)+' m':dash)+'</b><i>'+m.n+' překážek</i></div>'+
    '<div class="spec"><small>Disciplína</small><b>'+m.disc+'</b><i>třída '+m.cls+'</i></div>'+
    '<div class="spec"><small>SČP</small><b>'+(m.sct?m.sct+' s':dash)+'</b><i>'+fmt(m.spd)+' m/s</i></div>'+
    '<div class="spec mct"><small>MČP (max.)</small><b>'+(m.mct?m.mct+' s':dash)+'</b><i>'+fmt(m.mcs)+' m/s dle FCI</i></div>';
}

/* ---------- horní lišta ---------- */
function authorLine(meta){
  if(meta.author) return 'Stavěl/a: '+meta.author;
  if(meta.gen) return meta.id?'Generátor podle pravidel FCI':'Vygenerováno v aplikaci';
  return 'Autor neuveden';
}
function topbar(){
  var m=S.meta, mk=getMark(m.id);
  $('cName').textContent=m.name+(m.dirty&&m.id?' *':'');
  $('cSub').textContent=m.cls+' · '+authorLine(m)+(m.dirty&&m.id?' · upraveno':'');
  var fb=$('favBtn'), db=$('doneBtn');
  fb.setAttribute('aria-pressed',mk.fav?'true':'false'); fb.innerHTML=mk.fav?IC.starF:IC.star;
  db.setAttribute('aria-pressed',mk.done?'true':'false');
  var as=$('appSub'); if(as){ as.textContent={lib:'Parkury',video:'Videa',more:'Více'}[view]||''; }
}

