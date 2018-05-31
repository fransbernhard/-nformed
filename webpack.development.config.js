// Webpack config for development

const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const commonConfig = require('./webpack.common.config')

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({ // set HTML file for development "/index.html"
    template: "./index.html",
    filename: "./index.html"
  })
]

const config = merge(commonConfig, {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
				test: /\.(js|jsx)$/, // use es-lint loader
				exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				use: {
					loader: "eslint-loader",
					options: {
	          failOnWarning: false,
	          failOnError: false
					}
				}
    	},
			{
				test: /\.(sass|scss)$/, // Compile style for development
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
  },
  plugins: plugins
})

module.exports = config
