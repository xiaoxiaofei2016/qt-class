const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包html的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ['syntax-dynamic-import'] // 用以识别import导入的语法
        }
      },
      {
        test: /\.css$/,
        use: [ // 在打包生成的js文件中，动态创建<style>将css-loader内部样式注入head标签,所以在单独打包css的时候就要把rules里的style-loader去掉
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ] // 注意先后顺序，数组越靠前越先执行
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|svg|gif|png)$/,
        use: [ // url-loader，file-loader都可以,但url-loader可以限制url地址长度不超过时编译为base64，大于limit时调用file-loader对图片进行处理
          // url-loader封装了file-loader，但url-loader并不依赖于file-loader
          // url-loader还可以处理.mp4 .eot等后缀的文件
          {
            loader: 'url-loader',
            options: {
              // limit默认为10000，大小为8kb
              limit: 8192, // 限制url地址长度< 8192时，编译成Data URL(base64)
              name: 'img/[name].[hash:7].[ext]' // [ext]为后缀.jpg
            }
          },
          // {
          //   loader: 'file-loader'
          // }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new VueLoaderPlugin({})
  ],
  resolve: {
    alias: { // 配置别名
      vue: 'vue/dist/vue.js'
    }
  },
  // watch: true, // 监听打包
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: '8080',
    open: true,
    hot: true
  }
}