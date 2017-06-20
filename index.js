var analytics = require('@segment/analytics.js-core');

var Integrations = {
  'google-analytics': require('@segment/analytics.js-integration-google-analytics')
}

Object.keys(Integrations).forEach(function(name) {
  analytics.use(Integrations[name]);
});

analytics.initialize({
  'Google Analytics': {
    trackingId: 'UA-XXXXXXXXX-X' 
  }
});

analytics.page();
