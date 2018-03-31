const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		client: './src/client/index.js'
	},
	output : {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname,'dist'),
	},
	mode:'development',
	devtool : 'source-map',
	devServer: {
  	publicPath: '/',
    contentBase: './src/client',
    inline: true,
    port: 8080, 
    proxy: {
    	'**': {
      	target: 'http://localhost:3000',
        changeOrigin: true,
        secure:false
      }
    }
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
			__isBrowser__ : 'true'
		})
	]
}
