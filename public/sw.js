// ViThea Progressive Web App Service Worker
const CACHE_NAME = 'vithea-pwa-v1';

const PRECACHE_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/manifest.json',
  '/favicon.ico?v=vithea-3',
  '/icon-192x192.png?v=vithea-3',
  '/icon-512x512.png?v=vithea-3',
  '/apple-touch-icon.png?v=vithea-3',
  '/vithea-mark.png',
  '/solutions',
  '/capabilities',
  '/how-we-work',
  '/about',
  '/contact'
];

// Install: precache essential shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[ViThea SW] Precache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Strategy depending on request type
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Ignore cross-origin non-http(s) schemes like chrome-extension
  if (!url.protocol.startsWith('http')) return;

  // Static assets (images, fonts, scripts, styles): Cache-First with Network fallback
  const isStaticAsset =
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|css|woff2?)$/i);

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Navigation requests (HTML pages): Network-First with Cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // Fallback to cached home page if page not in cache
          const fallback = await caches.match('/');
          if (fallback) {
            return fallback;
          }
          return new Response(
            `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Offline | ViThea</title>
                <style>
                  body { background: #040711; color: #f8fafc; font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; padding: 20px; }
                  .card { background: #0b1325; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px; max-width: 400px; }
                  h1 { font-size: 20px; margin-bottom: 8px; color: #38bdf8; }
                  p { font-size: 14px; color: #94a3b8; line-height: 1.5; }
                  button { margin-top: 20px; background: #38bdf8; color: #020617; border: 0; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; }
                </style>
              </head>
              <body>
                <div class="card">
                  <h1>Offline Mode</h1>
                  <p>You are currently offline. Please reconnect to the internet to view new updates.</p>
                  <button onclick="window.location.reload()">Retry Connection</button>
                </div>
              </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
          );
        })
    );
    return;
  }
});
