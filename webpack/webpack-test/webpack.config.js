const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', // 加载器
        exclude: /node-modules/ // 过滤，不解析的文件
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader, // 如果是否是开发环境
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
			template: path.join(__dirname, './index.html')
    }),
    new VueLoaderPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      // allChunks: true
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, './dist'),
    port: '8080',
    open: true
  }
}