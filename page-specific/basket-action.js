var analytics = require('../lib/analytics');

function productAdded(data){
    analytics.track('Product Added',data);
}

function productRemoved(data){
    analytics.track('Product Removed',data); 
}

module.exports = {
    initTracker: function (){
        window.analytics = {
            productAdded: productAdded,
            productRemoved: productRemoved
        }
    }
}

/*
 * example data structure

var data = {
  cart_id: 'skdjsidjsdkdj29j',
  product_id: '507f1f77bcf86cd799439011',
  sku: 'G-32',
  category: 'Games',
  name: 'Monopoly: 3rd Edition',
  brand: 'Hasbro',
  variant: '200 pieces',
  price: 18.99,
  quantity: 1,
  coupon: 'MAYDEALS',
  position: 3
} 

*/
