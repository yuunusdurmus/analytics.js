module.exports = {
    list: [
        {
            selector: 'index',
            tracker: require('./home-page').initTracker
        },
        {
            selector :'search',
            tracker: require('./search-result').initTracker
        },
        {
            selector :'product',
            tracker: require('./product-detail').initTracker
        },
        {
            selector :'basket',
            tracker: require('./basket-page').initTracker
        },
        {
            selector :'checkout',
            tracker: require('./checkout-page').initTracker
        },
        {
            selector: 'any',
            tracker: require('./basket-action').initTracker
        }
    ]

}
