const files = ['/', '/index.html', '/app.js'];
// const files = ['/', '/index.html', '/app.js', '/app.css'];

const cacheName = 'my-cache';
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(files)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch((error) => console.error('[SW] Error during network fetch', error))
  );
});
