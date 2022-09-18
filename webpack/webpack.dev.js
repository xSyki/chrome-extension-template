const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
}
