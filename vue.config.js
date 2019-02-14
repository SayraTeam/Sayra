module.exports = {
    pwa: {
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'public/service-worker.js',
            //skipWaiting: true,
            //navigateFallback: '/index.html',
            /*runtimeCaching: [{
                urlPattern: new RegExp('https://media*.giphy.com/media/*'),
                handler: 'networkFirst',
                options: {
                    networkTimeoutSeconds: 20,
                    cacheName: 'api-cache',
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            }],*/
        }
    }
};
