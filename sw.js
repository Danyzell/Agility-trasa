/* Pawkur (dříve AgiPlan, HandlerMap a Agility trasa): offline a příjem plánku přes Sdílet */
var CACHE='agility-trasa-3.4', FONTS='agility-fonts';
var CORE=['./','index.html','manifest.webmanifest','icon-192.png']; /* velké ikony (fotka, přes 0,5 MB) si bere jen instalace z manifestu, offline nejsou potřeba */
/* 3D balíček (677 kB) se neukládá při instalaci, ale až při prvním použití 3D; pak funguje i offline.
   Stejně slovník polštiny a němčiny (i18n/pl.js, de.js): uloží se při prvním načtení v tom jazyce (3.4) */
var LAZY=/\/(v3d\/v3d\.js|i18n\/(pl|de)\.js)$/;
/* na cvičišti bývá slabý signál: když server do 3 s neodpoví, otevře se uložená verze (nová se mezitím stáhne na příště) */
var NAV_WAIT=3000;
/* cache:'reload': nová verze se stáhne ze serveru, ne z mezipaměti prohlížeče (GitHub Pages ji drží až 10 minut) */
self.addEventListener('install',function(e){ e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(CORE.map(function(u){return new Request(u,{cache:'reload'});}));}).then(function(){return self.skipWaiting();})); });
self.addEventListener('activate',function(e){ e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){return k!==CACHE&&k!=='agility-share'&&k!==FONTS;}).map(function(k){return caches.delete(k);})); }).then(function(){return self.clients.claim();})); });
self.addEventListener('fetch',function(e){
  var u=new URL(e.request.url);
  if(e.request.method==='POST'&&u.origin===location.origin&&/\/share-target\/?$/.test(u.pathname)){
    e.respondWith(e.request.formData().then(function(fd){ var f=fd.get('plan');
      return (f&&f.size?caches.open('agility-share').then(function(c){ return c.put('shared-plan',new Response(f,{headers:{'Content-Type':f.type||'image/jpeg'}})); }):Promise.resolve());
    }).then(function(){ return Response.redirect(new URL('./?share=1',self.registration.scope).href,303); },function(){ return Response.redirect(new URL('./',self.registration.scope).href,303); }));
    return; }
  if(e.request.method!=='GET') return;
  /* písmo Barlow z Google Fonts: uložené se použije hned (i offline), na pozadí se obnoví */
  if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(FONTS).then(function(c){ return c.match(e.request).then(function(hit){
      var net=fetch(e.request).then(function(r){ if(r&&(r.ok||r.type==='opaque')) e.waitUntil(c.put(e.request,r.clone()).catch(function(){})); return r; });
      if(hit){ e.waitUntil(net.catch(function(){})); return hit; }
      return net; }); }));
    return; }
  if(u.origin!==location.origin) return;
  /* jiné stránky v rozsahu aplikace (privacy.html): ze sítě, offline z mezipaměti; nikdy se neuloží místo aplikace */
  if(e.request.mode==='navigate'&&!/\/(index\.html)?$/.test(u.pathname)){
    e.respondWith(fetch(e.request).catch(function(){ return caches.match(e.request,{ignoreSearch:true}).then(function(r){ return r||caches.match('index.html'); }); }));
    return; }
  if(e.request.mode==='navigate'){ /* nová verze, když je internet; jinak (nebo když server dlouho neodpovídá) uložená */
    /* jako aplikace se uloží jen stránka HTML (ne ikona nebo jiný soubor, který se otevřel v rozsahu aplikace) */
    var put=null, net=fetch(e.request.url,{cache:'no-cache',credentials:'same-origin',redirect:'manual'}).then(function(r){ if(r&&r.ok&&/^text\/html/.test(r.headers.get('content-type')||'')){ var cp=r.clone(); put=caches.open(CACHE).then(function(c){ return c.put('index.html',cp); }); } return r; });
    e.waitUntil(net.then(function(){ return put; }).catch(function(){}));
    e.respondWith(new Promise(function(res){
      var sent=false; function send(r){ if(r&&!sent){ sent=true; res(r); } }
      var t=setTimeout(function(){ caches.match('index.html').then(send); },NAV_WAIT);
      net.then(function(r){ clearTimeout(t); send(r); },function(){ clearTimeout(t); caches.match('index.html').then(function(c){ send(c||Response.error()); }); });
    }));
    return; }
  if(LAZY.test(u.pathname)){ e.respondWith(caches.open(CACHE).then(function(c){ return c.match(e.request).then(function(r){ if(r) return r; return fetch(e.request).then(function(n){ if(n&&n.ok) e.waitUntil(c.put(e.request,n.clone()).catch(function(){})); return n; }); }); })); return; }
  e.respondWith(caches.match(e.request).then(function(r){ return r||fetch(e.request); }));
});
/* upozornění (3.0): zpráva ze serveru {title, body, url, tag}; klepnutí otevře (nebo přepne na) aplikaci na dané adrese */
self.addEventListener('push',function(e){
  var d={}; try{ d=e.data?e.data.json():{}; }catch(x){ d={body:e.data?e.data.text():''}; }
  if(!d||typeof d!=='object') d={};
  var o={body:String(d.body||''),icon:'icon-192.png',data:{url:String(d.url||'./')}};
  if(d.tag) o.tag=String(d.tag);
  e.waitUntil(self.registration.showNotification(String(d.title||'Pawkur'),o));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  var u; try{ u=new URL((e.notification.data&&e.notification.data.url)||'./',self.registration.scope).href; }catch(x){ u=self.registration.scope; }
  if(u.indexOf(self.registration.scope)!==0) u=self.registration.scope;
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(cs){
    for(var i=0;i<cs.length;i++){ if(cs[i].url.indexOf(self.registration.scope)===0&&'focus' in cs[i]){ if(cs[i].navigate) cs[i].navigate(u).catch(function(){}); /* okno, které service worker neřídí, přesměrovat neumí; aspoň se zaměří */ return cs[i].focus(); } }
    if(self.clients.openWindow) return self.clients.openWindow(u);
  }));
});
/* prohlížeč odběr obnovil (nový klíč, vypršení): přihlásit znovu stejným klíčem; nový odběr pošle aplikace na server při dalším otevření */
self.addEventListener('pushsubscriptionchange',function(e){
  var old=e.oldSubscription, key=old&&old.options&&old.options.applicationServerKey; if(!key) return;
  e.waitUntil(self.registration.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:key}).catch(function(){}));
});
