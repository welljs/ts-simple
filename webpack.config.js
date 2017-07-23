const webpack = new require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, './'),
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", '.js']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules)/,
        include: [path.resolve(__dirname, './src')],
        use: { loader: 'awesome-typescript-loader' },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  devServer: {
    hot: true,
    noInfo: true,
    port: 5000,
  },
};