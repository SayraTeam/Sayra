const workboxPlugin = require('workbox-webpack-plugin');
module.exports = {
    baseUrl: '/',
    configureWebpack: {
        performance: {
            hints: false,
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            },
        },
        plugins: [
            new workboxPlugin.GenerateSW({
                runtimeCaching: [
                    {
                        urlPattern: new RegExp('https://media*.giphy.com/media/*/*.gif'),
                        handler: 'networkFirst',
                        options: {
                            networkTimeoutSeconds: 20,
                            cacheName: 'api-cache',
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                ],
            }),
        ],
    },
    pwa: {
        iconPaths: {
            favicon32: 'img/icons/favicon-32.png',
            favicon16: 'img/icons/favicon-16.png',
        },
    },
};
