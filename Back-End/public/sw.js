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
  console.log('now ready to handle fetches!');
});

// fetch
self.addEventListener('fetch', event => {
  console.log('now fetch!');
});