/* ---------- nainstalovaná aplikace (jen verze z GitHub Pages) ---------- */
(function(){
  if(!IS_PWA) return;
  /* aktualizace: po návratu do aplikace (nejvýš jednou za 10 min) se zkontroluje nová verze; když ji service worker
     převezme, lišta nabídne obnovení (nic se neobnovuje samo, ať se nepřeruší třeba měření stopkami) */
  if('serviceWorker' in navigator){
    var had=!!navigator.serviceWorker.controller, reg=null, last=Date.now();
    navigator.serviceWorker.register('sw.js').then(function(r){ reg=r; },function(){});
    document.addEventListener('visibilitychange',function(){ if(document.visibilityState==='visible'&&reg&&Date.now()-last>6e5){ last=Date.now(); reg.update().catch(function(){}); } });
    navigator.serviceWorker.addEventListener('controllerchange',function(){
      if(!had){ had=true; return; } /* první instalace: stránka už je aktuální */
      if($('updBar')) return;
      var bar=document.createElement('div'); bar.className='saybar'; bar.id='updBar'; bar.setAttribute('role','status');
      bar.innerHTML='<span>Je připravená nová verze aplikace.</span><button class="btn" id="updGo">Obnovit</button><button class="btn" id="updX" aria-label="Později">×</button>';
      document.body.appendChild(bar);
      $('updGo').onclick=function(){ location.reload(); };
      $('updX').onclick=function(){ bar.parentNode.removeChild(bar); };
    });
  }
  /* tlačítko Instalovat v záložce Více → O aplikaci */
  var ev=null;
  window.addEventListener('beforeinstallprompt',function(e){ e.preventDefault(); ev=e; pwaInstUI(); });
  window.addEventListener('appinstalled',function(){ ev=null; pwaInstUI(); toast('Aplikace je nainstalovaná, najdeš ji na ploše.'); });
  window.pwaInstUI=function(){ var el=document.getElementById('pwaInst'); if(!el) return;
    var inst=window.matchMedia&&matchMedia('(display-mode: standalone)').matches;
    el.innerHTML=inst||!ev?'':'<div class="panel" style="display:flex;flex-direction:column;gap:8px"><b>Nainstalovat do telefonu</b><p class="hint">Aplikace pak poběží z ikony na ploše přes celou obrazovku, i bez internetu.</p><div class="row"><button class="btn primary" id="pwaInstBtn">Nainstalovat</button></div></div>';
    var b=document.getElementById('pwaInstBtn'); if(b) b.onclick=function(){ if(!ev) return; ev.prompt(); ev.userChoice.then(function(){ ev=null; pwaInstUI(); }); }; };
  /* plánek poslaný přes Sdílet z galerie: service worker ho uložil, tady se otevře ve čtečce */
  if(/[?&]share=1/.test(location.search)&&window.caches){
    try{ history.replaceState(null,'',location.pathname); }catch(e){}
    caches.open('agility-share').then(function(c){ return c.match('shared-plan').then(function(r){ if(!r){ toast('Obrázek se nepodařilo převzít, vyber ho v Plánu → Plánek z obrázku.'); return; }
      return r.blob().then(function(b){ c.delete('shared-plan'); var fr=new FileReader(); fr.onload=function(){ show('plan'); impOpen(); impLoadSrc(fr.result); }; fr.readAsDataURL(b); }); }); });
  }
})();
