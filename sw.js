self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('your-cache-name')
        .then(function (cache) {
        return cache.addAll([
          '/',
          './index.html',
          '/cv/assets/css/style.css',
          '/cv/assets/css/first-acsses.css',
          '/cv/assets/js/main.js',
          '/cv/main.html'
        ]);
      })
    );
  });
  
   self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  

//  Global Service Worker
// const CACHE_NAME = 'my-cache';
// const CACHE_VERSION = 'v1';
// const CACHE_FILES = [
//   '/',
//   'index.html',
//   '/cv/assets/css/styles.css',
//   '/cv/assets/js/script.js',
//   // Add more static assets to cache as needed
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(`${CACHE_NAME}-${CACHE_VERSION}`).then(cache => {
//       return cache.addAll([
//         '/',
//         './index.html',
//         '/cv/assets/css/styles.css',
//         '/cv/assets/js/script.js',
//         // Add more static assets to cache as needed
//       ]);
//     })
//   );
// });

// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys().then(keys => {
//       return Promise.all(
//         keys.filter(key => key.startsWith(CACHE_NAME) && key !== `${CACHE_NAME}-${CACHE_VERSION}`)
//           .map(key => caches.delete(key))
//       );
//     })
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       if (response) {
//         return response;
//       }

//       return fetch(event.request).then(fetchResponse => {
//         if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
//           return fetchResponse;
//         }

//         const responseToCache = fetchResponse.clone();

//         caches.open(`${CACHE_NAME}-${CACHE_VERSION}`).then(cache => {
//           cache.put(event.request, responseToCache);
//         });

//         return fetchResponse;
//       });
//     })
//   );
// });
