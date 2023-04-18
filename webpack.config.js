const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'password.html',
      template: './src/password.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'reg-account.html',
      template: './src/reg-account.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'reg-email-info.html',
      template: './src/reg-email-info.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'social.html',
      template: './src/social.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'motivation.html',
      template: './src/motivation.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'portfolio.html',
      template: './src/portfolio.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      template: './src/profile.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'notifications.html',
      template: './src/notifications.html'
      }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/contacts.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
} 