/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = 'development';
const buildPath = path.resolve(__dirname, 'dev-build');

const plugins = [
	new HtmlWebpackPlugin({
		template: './src/index.html',
	}),
];

module.exports = {
	mode,
	entry: './src/index.js',
	plugins,
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: buildPath,
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/i,
				type: 'asset/resource',
			},
		],
	},
	devtool: mode === 'development' ? 'source-map' : false,
	devServer: {
		hot: true,
	},
};
