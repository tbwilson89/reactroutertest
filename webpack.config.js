let path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/project/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          }
        }
      }
    ]
  }
}
