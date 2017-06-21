module.exports = {
    devtool: "#inline-source-map",
    entry: [
        './index.js'
    ],

    output: {
        filename: 'analytics.js',
        publicPath: './',
        library: 'analytics',
        libraryTarget: 'umd'
    },
};

