const filesToCache = [
  '/',
  '/index.html',
  '/index.bundle.js'
];

// install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-v1').then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

// activate
self.addEventListener('activate', event => {

});

// fetch
self.addEventListener('fetch', event => {

});