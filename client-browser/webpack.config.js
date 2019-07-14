const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }          
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    historyApiFallback: true,
    compress: true,
    before: function(app, server) {
      console.log("'before' callback is here")
    },
    after: function(app, server) {
      console.log("'after' callback is here")
    },
    allowedHosts: [
      '.localhost'
    ],
    headers: {
      'Access-Control-Allow-Headers': '*'
    }
  }  
}