const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		server : './src/server/index.js'
	},
	output: {
		filename : '[name]-bundle.js',
		path : path.resolve(__dirname,'dist')
	},
	target:'node',
	externals: [nodeExternals()],
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
}
