var analytics = require('@segment/analytics.js-core');
var integrtions = require('./integrations');

var initializeObj = {};

integrations.config.forEach(function(config){
    analytics.use(config.package);
    initializeObj[config.name] = config.settings;
})

analytics.initialize(initializaObj);

module.exports = analytics;
