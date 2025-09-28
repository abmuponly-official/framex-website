/**
 * FrameX Service Worker
 * Version: 2.0.0
 * Performance optimized with advanced caching strategies
 */

const CACHE_VERSION = 'framex-v2.0.0';
const RUNTIME_CACHE = 'framex-runtime-v2';
const IMAGE_CACHE = 'framex-images-v2';

// Critical assets that should be cached immediately
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/css/critical.css',
  '/css/style.css',
  '/js/main.min.js',
  '/manifest.json'
];

// Assets to cache on install
const STATIC_ASSETS = [
  '/about.html',
  '/products.html',
  '/services.html',
  '/projects.html',
  '/blog.html',
  '/contact.html',
  '/css/products.css',
  '/css/services.css',
  '/css/projects.css',
  '/css/blog.css',
  '/css/contact.css',
  '/css/responsive.css',
  '/js/products.js',
  '/js/services.js',
  '/js/projects.js',
  '/js/blog.js',
  '/js/contact.js',
  '/js/lazy-images.js',
  '/js/image-loader.js',
  '/404.html'
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => {
        // Cache critical assets first
        return cache.addAll(CRITICAL_ASSETS)
          .then(() => {
            // Then cache other static assets in background
            return cache.addAll(STATIC_ASSETS).catch(err => {
              console.warn('Some static assets failed to cache:', err);
            });
          });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => {
            return name.startsWith('framex-') && 
                   name !== CACHE_VERSION && 
                   name !== RUNTIME_CACHE && 
                   name !== IMAGE_CACHE;
          })
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http(s) protocols
  if (!request.url.startsWith('http')) return;

  // Handle different resource types with appropriate strategies
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (url.pathname.match(/\.(css|js)$/)) {
    event.respondWith(handleStaticAsset(request));
  } else if (url.pathname.match(/\.html$/) || url.pathname === '/') {
    event.respondWith(handleHTMLRequest(request));
  } else {
    event.respondWith(handleGenericRequest(request));
  }
});

// Strategy: Cache First with Network Fallback for images
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE);
  
  try {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      // Return cached image and update in background
      fetchAndCache(request, IMAGE_CACHE);
      return cachedResponse;
    }

    // Not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return placeholder image if available
    const placeholderResponse = await cache.match('/assets/img/placeholder.svg');
    return placeholderResponse || new Response('', {
      status: 404,
      statusText: 'Image not found'
    });
  }
}

// Strategy: Stale While Revalidate for static assets
async function handleStaticAsset(request) {
  const cache = await caches.open(CACHE_VERSION);
  
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

// Strategy: Network First with Cache Fallback for HTML
async function handleHTMLRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(RUNTIME_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page if available
    const offlineResponse = await caches.match('/offline.html');
    return offlineResponse || new Response('Offline - Content not available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({
        'Content-Type': 'text/html'
      })
    });
  }
}

// Generic handler for other requests
async function handleGenericRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('', {
      status: 404,
      statusText: 'Not found'
    });
  }
}

// Helper function to fetch and cache in background
async function fetchAndCache(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response);
    }
  } catch (error) {
    // Silently fail - this is background update
  }
}

// Listen for messages from the main thread
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
  
  if (event.data.action === 'clearCache') {
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => {
      event.ports[0].postMessage({ cleared: true });
    });
  }
  
  if (event.data.action === 'getCacheSize') {
    calculateCacheSize().then(size => {
      event.ports[0].postMessage({ size });
    });
  }
});

// Calculate total cache size
async function calculateCacheSize() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  
  for (const name of cacheNames) {
    const cache = await caches.open(name);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return totalSize;
}