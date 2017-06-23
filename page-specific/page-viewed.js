var analytics = require('../lib/analytics')

module.exports = {
    initTracker: function (){
        var viewedMessage = window.ANALYTICS.viewedMessage || 'anonymous page viewed';
        analytics.page(viewedMessage);
    }
}
