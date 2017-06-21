module.exports = {
    list: [
        {
            selector: 'HOME',
            tracker: require('./home-page').initTracker
        },
        {
            selector :'SERCH_RESULT',
            tracker: require('./product-detail').initTracker
        },
        {
            selector :'PRODUCT_DETAIL',
            tracker: require('./search-result').initTracker
        }
    ]

}
