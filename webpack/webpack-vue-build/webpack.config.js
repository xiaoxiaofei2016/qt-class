const path = require('path')
const VueloaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development', // production
  entry: {
    bundle: path.resolve(__dirname, './src/index.js') // resolve()字符串拼接
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash:5].js' // 指定hash值为5位
  },
  resolve: {
    extensions: ['.vue', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueloaderPlugin()
  ]
}