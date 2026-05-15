const CACHE_NAME = 'fullalbum-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Usamos catch para evitar que falle la instalación si algún asset no está (ej. en desarrollo local)
      return cache.addAll(ASSETS).catch(err => console.warn('PWA: Error cacheando assets', err));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});