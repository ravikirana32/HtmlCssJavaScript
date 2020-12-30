//YOUTUBE LINK: "https://www.youtube.com/watch?v=ksXwaWHCW6k"


const cacheName="v2";
var cacheAsset=[
    '/index.html',
    '/about.html',
    '/css/style.css',
    '/js/main.js'
]

// ,
//     './service_Worker/about.html',
//     './service_Worker/css/style.css',
//     './service_Worker/js/main.css'

//Install service worker here
self.addEventListener('install',(event)=>{
    console.log("Service worker: Installed successfully.");
    event.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log("Service worker: Chacing Files.");
            cache.addAll();
        })
        .then(()=>{
            self.skipWaiting();
        })
    )
})

//Activate service worker here
self.addEventListener('activate',(event)=>{
    console.log("Service worker: Activated successfully.");
    event.waitUntil(
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cache_name) => {
              if (cacheName !== cache_name) {
                    console.log("Service worker: Cleared old cache.");
                    return caches.delete(cache_name);
              }
            })
          );
        })
      );
})

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
        // .then(res => {
        //     const cacheRes = res.clone();
        //     caches.open(CACHE_NAME)
        //       .then(cache => cache.put(event.request, cacheRes));
        //     return res;
        // })
        .catch(() => caches.match(event.request)
        //.then(res => res)
        )
    );
  });