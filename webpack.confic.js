module.exports = {
    devtool: "#inline-source-map",
    entry: [
        './index.js'
    ],

    output: {
        filename: './dist/analytics.js',
        publicPath: './',
        library: 'analytics',
        libraryTarget: 'umd'
    },
};

