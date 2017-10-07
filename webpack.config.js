module.exports = {
  entry: ["whatwg-fetch", "./js/app.js"],
  output: { filename: "./js/out.js" },
  watch: true,
  module: {
  loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
      }
    ]
  }
}
