/* ---------- jazyk (čeština / angličtina) a vzhled (světlý / tmavý) ----------
   Zdrojové texty jsou česky. V angličtině se překládají přes slovník:
   - exact: celý text uzlu (mezery sjednocené) → překlad
   - num:   text, kde čísla nahradí # (např. "Uloženo # parkurů") → překlad s # (nebo #1, #2… pro jiné pořadí)
   - re:    [regulární výraz, náhrada] pro texty se jmény; $1 = beze změny, @1 = přeložit i zachycenou část
   Texty v DOM se překládají samy (MutationObserver), T() je pro plátno, řeč, PDF a nativní dialogy.
   Uživatelská data se nepřekládají: prvek s atributem translate="no" (nebo data-nt). */
var LANGK='agility-lang-v1', THEMEK='agility-theme-v1';
/* výchozí jazyk podle telefonu; automatické testy (navigator.webdriver) běží česky */
var LANG=(function(){ var v=lsGet(LANGK,null); if(v==='cs'||v==='en') return v; if(navigator.webdriver) return 'cs'; var n=((navigator.languages&&navigator.languages[0])||navigator.language||'cs').toLowerCase(); return /^(cs|sk)/.test(n)?'cs':'en'; })();
var LOC=LANG==='en'?'en-GB':'cs-CZ';
var I18N={exact:{},num:{},re:[]};
function i18nNorm(s){ return String(s).replace(/ /g,' ').replace(/\s+/g,' ').trim(); }
var I18N_NUM=/\d+(?:[.,]\d+)?/g;
function i18nAdd(d){
  if(!d) return;
  var k;
  if(d.exact) for(k in d.exact) if(d.exact[k]!=null&&d.exact[k]!=='') I18N.exact[i18nNorm(k)]=d.exact[k];
  if(d.num) for(k in d.num) if(d.num[k]!=null&&d.num[k]!=='') I18N.num[i18nNorm(k)]=d.num[k];
  /* u regulárního výrazu si pamatujeme nejdelší pevný kus textu – rychlé předběžné vyřazení */
  if(d.re) d.re.forEach(function(x){ try{ var lit=x[0].split(/\\.|\([^)]*\)[?*+]?|[\^$|]/).sort(function(a,b){return b.length-a.length;})[0]||''; I18N.re.push([new RegExp(x[0]),x[1],lit]); }catch(e){} });
}
function i18nNumOut(n){ return LANG==='en'?String(n).replace(',','.'):n; }
function trLookup(s,depth){
  var k=i18nNorm(s); if(!k) return null;
  var v=I18N.exact[k]; if(v!=null) return v;
  if(/\d/.test(k)){
    var nums=k.match(I18N_NUM), nk=k.replace(I18N_NUM,'#'); v=I18N.num[nk];
    if(v!=null){ var i=0; return v.replace(/#([1-9])?/g,function(m,d){ var n=d?nums[+d-1]:nums[i++]; return n==null?'':i18nNumOut(n); }); }
  }
  for(var j=0;j<I18N.re.length;j++){
    var R=I18N.re[j]; if(R[2]&&k.indexOf(R[2])<0) continue;
    var m=k.match(R[0]);
    if(m){ return R[1].replace(/([$@])([1-9])/g,function(x,t,d){ var g=m[+d]; if(g==null) return '';
        if(/^\d+(?:[.,]\d+)?$/.test(g)) return i18nNumOut(g);
        if(t==='@'&&(depth||0)<2){ var tg=trLookup(g,(depth||0)+1); return tg==null?g:tg; } return g; }); }
  }
  return null;
}
/* T('česky') → text v aktuálním jazyce (pro plátno, řeč, PDF, nativní dialogy) */
function T(s){ if(LANG==='cs'||s==null||s==='') return s; var r=trLookup(String(s)); return r==null?s:r; }
var TR_MISS={};
function trMiss(v){ var k=i18nNorm(v); if(k&&/[a-zA-ZÀ-ž]/.test(k)) TR_MISS[k]=(TR_MISS[k]||0)+1; }
var TR_ATTRS=['aria-label','placeholder','title','alt'], TR_SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,CODE:1,NOSCRIPT:1};
function trSkipEl(el){ return !el||TR_SKIP[el.nodeName]||el.isContentEditable||(el.closest&&el.closest('[translate="no"],[data-nt]')); }
function trText(n){
  var v=n.nodeValue; if(!v||n.__tr===v||!/[A-Za-zÀ-ž]/.test(v)) return;
  var p=n.parentNode; if(!p||trSkipEl(p)) return;
  var t=trLookup(v); if(t==null){ trMiss(v); n.__tr=v; return; }
  if(p.nodeName==='OPTION'&&!p.hasAttribute('value')) p.setAttribute('value',p.value);
  var nv=v.match(/^\s*/)[0]+t+v.match(/\s*$/)[0]; n.__tr=nv; if(nv!==v) n.nodeValue=nv;
}
function trAttr(el,a){
  var v=el.getAttribute(a); if(!v) return; el.__tra=el.__tra||{}; if(el.__tra[a]===v) return;
  if(trSkipEl(el)&&a!=='aria-label'&&a!=='title') return;
  var t=trLookup(v); if(t==null){ trMiss(v); el.__tra[a]=v; return; }
  el.__tra[a]=t; if(t!==v) el.setAttribute(a,t);
}
function trTree(root){
  if(!root) return;
  if(root.nodeType===3){ trText(root); return; }
  if(root.nodeType!==1||TR_SKIP[root.nodeName]) return;
  for(var i=0;i<TR_ATTRS.length;i++) if(root.hasAttribute(TR_ATTRS[i])) trAttr(root,TR_ATTRS[i]);
  var w=document.createTreeWalker(root,5,null), n;   /* 1|4 = prvky a texty */
  while((n=w.nextNode())){
    if(n.nodeType===3) trText(n);
    else for(var j=0;j<TR_ATTRS.length;j++) if(n.hasAttribute(TR_ATTRS[j])) trAttr(n,TR_ATTRS[j]);
  }
}
/* Překlady nových textů: když přidáš do aplikace český text, sem dopiš jeho anglickou verzi (stejný formát jako i18nAdd). */
var I18N_EXTRA={exact:{
},num:{
},re:[
]};
function i18nStart(){
  i18nAdd(I18N_EXTRA);
  document.documentElement.lang=LANG==='en'?'en':'cs';
  if(LANG!=='en'||!window.MutationObserver) return;
  trTree(document.body);
  new MutationObserver(function(ms){
    for(var i=0;i<ms.length;i++){ var m=ms[i];
      if(m.type==='characterData') trText(m.target);
      else if(m.type==='attributes') trAttr(m.target,m.attributeName);
      else for(var j=0;j<m.addedNodes.length;j++) trTree(m.addedNodes[j]);
    }
  }).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:TR_ATTRS});
}
function setLang(l){ if(l!=='cs'&&l!=='en') return; lsSet(LANGK,l); if(l!==LANG){ try{ location.reload(); }catch(e){} } }

/* vzhled: 'system' | 'light' | 'dark' */
var THEME=lsGet(THEMEK,'system');
function themeApply(){
  var r=document.documentElement;
  if(THEME==='light'||THEME==='dark') r.setAttribute('data-theme',THEME); else r.removeAttribute('data-theme');
  var dark=THEME==='dark'||(THEME!=='light'&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches);
  var mt=document.querySelector('meta[name="theme-color"]'); if(mt) mt.setAttribute('content',dark?'#0f1411':'#1f6b45');
  HM.emit('theme',{theme:THEME,dark:dark});
}
function setTheme(t){ THEME=(t==='light'||t==='dark')?t:'system'; lsSet(THEMEK,THEME); themeApply(); }
function isDark(){ return THEME==='dark'||(THEME!=='light'&&!!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)); }
try{ matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){ if(THEME==='system') themeApply(); }); }catch(e){}
themeApply();
