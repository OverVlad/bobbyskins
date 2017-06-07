const debug = process.env.NODE_ENV !== "production";

console.log('is production:', !debug );

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const options = {
  entry: {
    css: path.join(__dirname, '/client/src/assets/css/main.scss'),
    js: path.join(__dirname,'/client/assets/'),
    fonts: path.join(__dirname,'/client/assets/fonts/'),
    images: path.join(__dirname, '/client/public/img'),
    app: path.join(__dirname, '/client/src/app.jsx')
  }
}

const plugins = [
  new ExtractTextPlugin({
    filename: '../css/style.css',
    allChunks: true,
    disable: false,
  })
]

if (!debug) {
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  }));
}

module.exports = {
  devtool: debug ? 'source-map' : '',
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
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader?name=../img/[name].[ext]"
      },
    ],
  },

  plugins: plugins,

  watch: debug
};
