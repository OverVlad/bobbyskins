const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const options = {
  entry: {
    css: path.join(__dirname, '/client/src/assets/css/main.scss'),
    js: path.join(__dirname,'/client/assets/'),
    fonts: path.join(__dirname,'/client/assets/fonts/'),
    app: path.join(__dirname, '/client/src/app.jsx')
  }
}

module.exports = {
  entry: [options.entry.app, options.entry.css],
  output: {
    path: path.join(__dirname, '/client/public/js'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/client/src'),
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=../fonts/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(css|scss|sass)$/,
        include: [options.entry.css, /flexboxgrid/],
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader', 'import-glob-loader']
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '../css/style.css',
      allChunks: true,
      disable: false,
    }),
  ],

  // postcss() {
  //   return [
  //     autoprefixer({
  //       browsers: ['last 2 versions', '> 1%', 'IOS >= 8'],
  //     }),
  //   ];
  // },

  watch: true
};
