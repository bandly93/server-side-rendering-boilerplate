var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
	mode : 'development',
	devtool : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [ { loader: "babel-loader"} ]
      },
      {
        test: /\.css$/,
        use: [ { loader: "style-loader" } , { loader: "css-loader" } ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [ { loader: "file-loader", options: { name: "images/[name].[ext]" } } ]
      }, 
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
	mode: 'development',
	devtool: 'source-map',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [ { loader: "babel-loader"} ]
      },
      {
        test: /\.css$/,
        use: [ { loader: "style-loader" } , { loader: "css-loader" } ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [ { loader: "file-loader", options: { name: "images/[name].[ext]" } } ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]
