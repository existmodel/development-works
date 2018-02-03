self.addEventListener('install', (event) => {
    console.log('Установлен');
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
});


this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/index.html',
        '/css/style.css',
        '/js/script.js',
        '/img/device.png'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request);
    new Response('Hello from your friendly neighbourhood service worker!');

  );
});

// const CACHE = 'cache-only-v1';

// При установке воркера мы должны закешировать часть данных (статику).
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE).then((cache) => {
//             return cache.addAll([
//                 '../img'
//             ]);
//         })
//     );
// });

// // При запросе на сервер (событие fetch), используем только данные из кэша.
// self.addEventListener('fetch', (event) =>
//     event.respondWith(fromCache(event.request));
// );

// function fromCache(request) {
//     return caches.open(CACHE).then((cache) =>
//       cache.match(request)
//           .then((matching) => matching || Promise.reject('no-match'))
//     );
// }