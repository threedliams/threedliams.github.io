var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: ['react-hot-loader/webpack', 'babel-loader']
			},
			{
				test: /\.markdown$/,
				use: 'raw-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader', options: { importLoaders: 1 }
					},
					'postcss-loader',
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};