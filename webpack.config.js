var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app/main',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 8005
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}