workbox.setConfig({
    debug: false,
  });
  
  workbox.precaching.precacheAndRoute([]);
  
  //image in cache
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
  );
  
  //network request in cache
  workbox.routing.registerRoute(
    new RegExp('http://localhost:8888/'),
    workbox.strategies.networkFirst({
      cacheName: 'api',
    }),
  );
  
  //js and css in cache
  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate(),
  ); 

  //webfont in cache
  workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'googleapis',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
      ],
    }),
  );