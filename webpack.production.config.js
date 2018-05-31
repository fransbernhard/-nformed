// Webpack config for production
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Location for file output
const output = {
  filename: 'bundle.min.js',
	path: path.resolve(__dirname, 'dist'),
}

const plugins = [
  new UglifyJsPlugin({ // minify JS file
    parallel: true,
    extractComments: false
  }),
  new webpack.DefinePlugin({ // Define environment to production mode
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new ExtractTextPlugin('bundle.css'), // seperate css file from js file
  new HtmlWebPackPlugin({ // extract HTML file from "./src/index-template.html" and put it at "/dist/bundle.min.js"
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
				use: ExtractTextPlugin.extract({ // extract css and put it at "/dist/bundle.css"
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
			  test: /\.(png|jpg|gif)$/, // compile images to "dist/src/img/"
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
