const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),  // 入口
  output: { // 出口
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', // 加载器
        exclude: /node-modules/ // 过滤，不解析的文件
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // 限制url地址长度< 8192时，编译成base64
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin({

    }),
    new HtmlWebPackPlugin({
      filename: 'index.html',
			template: path.join(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      allChunks: true // 
    })
  ],
  resolve: { // vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时）,vue模块的package.json的main字段默认为runtime模式,指向了"dist/vue.runtime.common.js"位置
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devServer: { // 起web服务
    contentBase: path.join(__dirname, './dist'),
    port: '8080',
    open: true, // 自动打开浏览器
    hot: true // 热更新
  }
}