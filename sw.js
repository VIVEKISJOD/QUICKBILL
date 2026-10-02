const C='quickbill-v6',A=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
 const u=new URL(r.url);
 /* only handle this site and the QR library; never touch the live sync database */
 if(u.origin!==location.origin&&u.hostname!=='cdnjs.cloudflare.com')return;
 const store=res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res};
 if(r.mode==='navigate')e.respondWith(fetch(r).then(store).catch(()=>caches.match('./index.html')));
 else e.respondWith(caches.match(r).then(x=>x||fetch(r).then(store)))});
