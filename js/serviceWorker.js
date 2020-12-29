const cacheArr=['/'];
const CACHE_NAME="cache_v10";
self.addEventListener('install',(event)=>{
    console.log("Intall is done");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
          console.log("Opened cache");
          cache.addAll(cacheArr).then(() => self.skipWaiting());
        })
    );
})

self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (CACHE_NAME !== cacheName) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

    self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request).catch(() => caches.match(event.request));
        }
      )
    );
  });