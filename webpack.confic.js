module.exports = {
  devtool: "#inline-source-map",
  entry: [
    './lib/index.js'
  ],

  output: {
    filename: 'analytics.js',
    publicPath: './',
    library: 'analytics',
    libraryTarget: 'umd'
  },
};

