/* Agility trasa: offline a příjem plánku přes Sdílet */
var CACHE='agility-trasa-1.9';
var CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png'];
self.addEventListener('install',function(e){ e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(CORE);}).then(function(){return self.skipWaiting();})); });
self.addEventListener('activate',function(e){ e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){return k!==CACHE&&k!=='agility-share';}).map(function(k){return caches.delete(k);})); }).then(function(){return self.clients.claim();})); });
self.addEventListener('fetch',function(e){
  var u=new URL(e.request.url);
  if(e.request.method==='POST'&&u.origin===location.origin&&/\/share-target\/?$/.test(u.pathname)){
    e.respondWith(e.request.formData().then(function(fd){ var f=fd.get('plan');
      return (f&&f.size?caches.open('agility-share').then(function(c){ return c.put('shared-plan',new Response(f,{headers:{'Content-Type':f.type||'image/jpeg'}})); }):Promise.resolve());
    }).then(function(){ return Response.redirect(new URL('./?share=1',self.registration.scope).href,303); },function(){ return Response.redirect(new URL('./',self.registration.scope).href,303); }));
    return; }
  if(e.request.method!=='GET'||u.origin!==location.origin) return;
  if(e.request.mode==='navigate'){ /* nová verze, když je internet; jinak uložená */
    e.respondWith(fetch(e.request).then(function(r){ if(r&&r.ok){ var cp=r.clone(); caches.open(CACHE).then(function(c){ c.put('index.html',cp); }); } return r; }).catch(function(){ return caches.match('index.html'); }));
    return; }
  e.respondWith(caches.match(e.request).then(function(r){ return r||fetch(e.request); }));
});
