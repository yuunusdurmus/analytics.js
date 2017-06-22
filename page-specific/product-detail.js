var analytics = require('../lib/analytics')

/*
var data = {
  product_id: '507f1f77bcf86cd799439011',
  sku: 'G-32',
  category: 'Games',
  name: 'Monopoly: 3rd Edition',
  brand: 'Hasbro',
  variant: '200 pieces',
  price: 18.99,
  quantity: 1,
  coupon: 'MAYDEALS',
  currency: 'usd',
  position: 3,
  value: 18.99
}
*/

function productViewed(data) {
    analytics.track('Product Viewed', data);
}

module.exports = {
    initTracker: function (){
        analytics.page('Product Detail Page');
        var pageData = window.ANALYTICS;
        productViewed(pageData.data);
    }
}

