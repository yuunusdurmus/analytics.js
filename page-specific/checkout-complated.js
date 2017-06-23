var analytics = require('../lib/analytics');

function orderComplated(data){
    analytics.track('Checkout Step Completed', data);
}

module.exports = {
    initTracker: function (){
        var pageData = window.ANALYTICS;
        orderComplated(pageData.data)
    }
}

/*
var orderComplated = {
  checkout_id: 'fksdjfsdjfisjf9sdfjsd9f',
  order_id: '50314b8e9bcf000000000000',
  affiliation: 'Google Store',
  total: 30,
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
*/

