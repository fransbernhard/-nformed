const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

const output = {
  filename: 'bundle.min.js',
	path: path.resolve(__dirname, 'dist'),
}

const plugins = [
  new UglifyJsPlugin({
    parallel: true,
    extractComments: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new ExtractTextPlugin('bundle.css'),
  new HtmlWebPackPlugin({
    template: "./src/index-template.html",
    filename: "./index-template.html",
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }
  })
]

const config = merge(commonConfig, {
  // devtool: 'source-map',
  module: {
    rules: [
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
			    fallback: 'style-loader',
			    use: [
			      {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
			      { loader: 'postcss-loader',
							options: {
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
						},
			      'sass-loader',
			    ]
			  })
			},
      {
			  test: /\.(png|jpg|gif)$/,
			  use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					}
				}]
			},
		]
  },
  plugins: plugins,
  output: output
})

module.exports = config
