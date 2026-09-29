/* Agility trasa: offline a příjem plánku přes Sdílet */
var CACHE='agility-trasa-1.10', FONTS='agility-fonts';
var CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png'];
/* na cvičišti bývá slabý signál: když server do 3 s neodpoví, otevře se uložená verze (nová se mezitím stáhne na příště) */
var NAV_WAIT=3000;
self.addEventListener('install',function(e){ e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(CORE);}).then(function(){return self.skipWaiting();})); });
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
  if(e.request.mode==='navigate'){ /* nová verze, když je internet; jinak (nebo když server dlouho neodpovídá) uložená */
    var put=null, net=fetch(e.request).then(function(r){ if(r&&r.ok){ var cp=r.clone(); put=caches.open(CACHE).then(function(c){ return c.put('index.html',cp); }); } return r; });
    e.waitUntil(net.then(function(){ return put; }).catch(function(){}));
    e.respondWith(new Promise(function(res){
      var sent=false; function send(r){ if(r&&!sent){ sent=true; res(r); } }
      var t=setTimeout(function(){ caches.match('index.html').then(send); },NAV_WAIT);
      net.then(function(r){ clearTimeout(t); send(r); },function(){ clearTimeout(t); caches.match('index.html').then(function(c){ send(c||Response.error()); }); });
    }));
    return; }
  e.respondWith(caches.match(e.request).then(function(r){ return r||fetch(e.request); }));
});
