var analytics = require('../lib/analytics');

/*
var cartId = 'd92jd29jd92jd29j92d92jd'
var products = [
    {
      product_id: '507f1f77bcf86cd799439011',
      sku: '45790-32',
      name: 'Monopoly: 3rd Edition',
      price: 19,
      position: 1,
      category: 'Games'
    },
    {
      product_id: '505bd76785ebb509fc183733',
      sku: '46493-32',
      name: 'Uno Card Game',
      price: 3,
      position: 2,
      category: 'Games'
    }
  ]
*/

function cartViewed(cartId, products){
    analytics.track('Cart Viewed', {
        cart_id: cartId,
        products: products
    });
}

module.exports = {
    initTracker: function (){
        analytics.page('Basket page');
        var pageData = window.ANALYTICS;
        cartViewed(
            pageData.cartId,
            pageData.products
        )
    }
}

