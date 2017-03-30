const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const options = {
  entry: {
    css: path.join(__dirname, '/client/src/assets/css/main.scss'),
    js: path.join(__dirname,'/client/assets/'),
    app: path.join(__dirname, '/client/src/app.jsx')
  },
  output: {
    css: path.join(__dirname,'/server/static/css/style.css'),
    js: path.join(__dirname, '/server/static/js/[name].js'),
  }
}

module.exports = {
  entry: [options.entry.app, options.entry.css],
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"]
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(css|scss|sass)$/,
        include: options.entry.css,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
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
