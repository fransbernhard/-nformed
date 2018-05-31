// Common webpack config for development and production environment

module.exports = {
  entry: ['./src/app.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Compile JSX and es6 to es5
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
			  test: /\.(png|jpg|gif)$/, // Compile images
			  use: [{
			    loader: 'url-loader',
          options: { limit: 10000, name: './img/[name].[ext]' }
			  }]
			},
      { test: /\.(mov|mp4|mp3)$/, // Compile movie files
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      }
    ]
  }
}
