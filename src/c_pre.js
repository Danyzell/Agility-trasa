var $=function(i){return document.getElementById(i);};
var NS='http://www.w3.org/2000/svg', ZC='#e8a838', KEY='agility-plan-v2', MYK='agility-my-v1', MKK='agility-marks-v1', SETK='agility-set-v1';
function lsGet(k,d){try{var v=localStorage.getItem(k); return v?JSON.parse(v):d;}catch(e){return d;}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v)); return true;}catch(e){lsFull(e); return false;}finally{ if(window.HM) HM.emit('store',{key:k}); }}
/* plná paměť: změna se neuloží, tak to aspoň řekni (nejvýš jednou za 15 s, hláška přebije případné „Uloženo“) */
function lsFull(e){
  if(!e||!(e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED'||e.code===22||e.code===1014)) return;
  if(lsFull.t&&Date.now()-lsFull.t<15000) return; lsFull.t=Date.now();
  setTimeout(function(){toast('Paměť aplikace je plná, poslední změna se neuložila. Odeber podklad z fotky nebo smaž staré parkury v Moje.',6000);},0);
}
/* ---------- HandlerMap: události a registr obrazovek (moduly se sem zapisují, UI je vykreslí) ---------- */
var HM={_h:{},screens:{},cards:{},
  on:function(e,f){(this._h[e]=this._h[e]||[]).push(f);},
  off:function(e,f){this._h[e]=(this._h[e]||[]).filter(function(x){return x!==f;});},
  emit:function(e,d){(this._h[e]||[]).slice().forEach(function(f){try{f(d);}catch(x){if(window.console) console.error('HM '+e,x);}});},
  /* obrazovka modulu: {title, ic, group:'train'|'more'|'home', order, render(el,arg), hide()} */
  screen:function(id,o){o.id=id; this.screens[id]=o;},
  /* karta na úvodní obrazovce: {order, render(el) -> false = skrýt} */
  card:function(id,o){o.id=id; this.cards[id]=o;},
  /* otevření obrazovky modulu; UI ho může přepsat vlastní navigací */
  open:function(id,arg){var s=this.screens[id]; if(!s) return; show('more'); var el=document.getElementById('moreBody'); el.innerHTML=''; s.render(el,arg);}
};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
