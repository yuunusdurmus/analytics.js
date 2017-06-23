var analytics = require('../lib/analytics');

function listViewied(listId, catagory, products) {
    analytics.track('Product List Viewed',{
        list_id: listId,
        category: catagory,
        products: products
    });
};

module.exports = {
    initTracker: function (){
        analytics.page('Search Result Page');        
        var pageData = window.ANALYTICS;
        listViewied(
            pageData.listId, 
            pageData.category, 
            pageData.products
        );
    }
};

/*
var listId = 'hot_deals_1';
var category = 'Deals';
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

/*
var filters = [
    {
        type: 'department',
        value: 'beauty'
    },
    {
        type: 'price',
        value: 'under-$25'
    }
]
var sorts = [
    {
      type: 'price',
      value: 'desc'
    }
]
function listFiltered(listId, filters, sorts, products) {
    analytics.track('Product List Filtered',{
        list_id: listId,
        filters: filters,
        sorts: sorts,
        products: products
    });
}
*/
