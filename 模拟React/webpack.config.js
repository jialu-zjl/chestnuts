const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      { test: /\.js$/, use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [[
            '@babel/plugin-transform-react-jsx',
            {pragma: 'ToyReact.createElement'}
          ]]
        }
      } }
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Toy React'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};