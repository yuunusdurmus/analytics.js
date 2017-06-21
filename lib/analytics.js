var analytics = require('@segment/analytics.js-core');
var integrations = require('./integrations');

var initializeObj = {};

integrations.config.forEach(function(config){
    analytics.use(config.package);
    initializeObj[config.name] = config.settings;
})

analytics.initialize(initializeObj);

module.exports = analytics;
