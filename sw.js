const CACHE_NAME = 'pwa-cache-v1';

// Instala o Service Worker e armazena os arquivos no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(['./index.html']);
        })
    );
});

// Responde às requisições mesmo offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
