// La app se mudo a https://app.peruptd.com: este service worker limpia y se retira.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
 try{for(const k of await caches.keys())await caches.delete(k)}catch(_){}
 await self.registration.unregister();
 for(const c of await self.clients.matchAll({type:'window'})){try{c.navigate(c.url)}catch(_){}}
})()));
