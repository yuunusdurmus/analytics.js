var analytics = require('../lib/analytics');

function checkoutStart(data) {
    analytics.track('Checkout Started', data);
}

function checkoutStep(data){
    analytics.track('Checkout Step Viewed', data)
}


module.exports = {
    initTracker: function (){
        var pageData = window.ANALYTICS;
        checkoutStart(pageData.checkoutStart);
        window.analytics = {
            checkoutStep: checkoutStep
        }
    }
}

/*
var checkoutStep = {
    checkout_id: '50314b8e9bcf000000000000',
    step: 2,
    shipping_method: 'Fedex',
    payment_method: 'Visa'
}

var checkoutStart = {
  order_id: '50314b8e9bcf000000000000',
  affiliation: 'Google Store',
  value: 30,
  revenue: 25,
  shipping: 3,
  tax: 2,
  discount: 2.5,
  coupon: 'hasbros',
  currency: 'USD',
  products: [
    {
      product_id: '507f1f77bcf86cd799439011',
      sku: '45790-32',
      name: 'Monopoly: 3rd Edition',
      price: 19,
      quantity: 1,
      category: 'Games'
    },
    {
      product_id: '505bd76785ebb509fc183733',
      sku: '46493-32',
      name: 'Uno Card Game',
      price: 3,
      quantity: 2,
      category: 'Games'
    }
  ]
}
*/

