var analytics = require('@segment/analytics.js-core');

var configurations = [
    {
        package: require('@segment/analytics.js-integration-google-analytics'),
        name: 'Google Analytics',
        settings: {
            trackingId: 'UA-XXXXXXXXX-X' 
        }
    }
]

var initializeObj = {};

configurations.forEach(function(config){
    analytics.use(config.package);
    initializeObj[config.name] = config.settings;
})

analytics.initialize(initializaObj);
analytics.page();
