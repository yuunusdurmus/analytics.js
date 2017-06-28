var analytics = require('./analytics');

module.exports = {
    actions: [
        {
            type: 'page Viewed',
            push: function(data){
                analytics.page(data)
            }
        },
        {
            type: 'Product List Viewed',
            push: function(data){
               analytics.track('Product List Viewed', data);

            }
        },
        {
            type: 'Product Viewed',
            push: function(data){
               analytics.track('Product Viewed' ,data);

            }
        },
        {
            type: 'Product Viewed',
            push: function(data){
                analytics.track('Product Viewed', data);
            }
        },
        {
            type: 'Product Viewed',
            push: function(data){
                analytics.track('Product Viewed', data);
            }
        },
        {
            type: 'Checkout Step Completed',
            push: function(data){
                analytics.track('Checkout Step Completed', data);
            }
        },
        {
            type: 'Cart Viewed',
            push: function(data){
                analytics.track('Cart Viewed', data);
            }
        },
        {
            type: 'Product Added',
            push: function(data){
                analytics.track('Product Added', data);
            }
        },
        {
            type: 'Product Removed',
            push: function(data){
                analytics.track('Product Removed', data);
            }
        }

    ]
}
