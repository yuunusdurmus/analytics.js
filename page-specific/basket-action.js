var analytics = require('../lib/analytics');

var event = null


function productAdded(data){
    console.log(data);
    analytics.track('Product Added',data);
}
/*
function productRemoved(data){
    analytics.track('Product Added',data);    
}
*/

function setEvents(){
    event = new Event('productAdded');
    document.addEventListener('productAdded', function(){
        console.log('listener')
        productAdded({})
    })
}


module.exports = {
    initTracker: function (){
        setEvents();

        window.basketEvent = {
            productAdded: function(){
                document.dispatchEvent(event);
            }
        }


    }
}


/*
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
