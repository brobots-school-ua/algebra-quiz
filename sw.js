// Service Worker for Algebra Quiz PWA
const CACHE = 'algebra-quiz-v4';
const BASE = '/algebra-quiz';

// Only cache static assets that rarely change — NOT html files
const ASSETS = [
  BASE + '/manifest.json',
  BASE + '/icon.svg',
  BASE + '/js/quizzes.js',
  BASE + '/js/quizzes-extra.js',
  BASE + '/js/quizzes-interactive.js',
  BASE + '/js/api.js',
  BASE + '/js/auth.js',
  BASE + '/js/achievements.js',
  BASE + '/js/sounds.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Always fetch fresh from network (no cache) for HTML pages and API calls
  if (
    url.includes('.html') ||
    url.endsWith('/') ||
    url.includes('cataas') ||
    url.includes('googleapis') ||
    url.includes('api.github.com') ||
    url.includes('accounts.google') ||
    url.includes('fonts.google') ||
    url.includes('unpkg.com') ||
    url.includes('jsdelivr') ||
    url.includes('css/style.css')
  ) {
    return; // browser fetches normally, no SW intervention
  }

  // Cache-first for JS assets
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.ok && e.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match(e.request));
    })
  );
});
