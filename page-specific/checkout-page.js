var analytics = require('../lib/analytics');

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

