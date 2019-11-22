const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 复制assets目录的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, './src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true // 开启css-module
              modules: {
                mode: 'local',
                localIdentName: '[path][name][hash:base64:5]' // base64前5个
              }
            }
          }, 
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true, // 启用热更新
    contentBase: path.join(__dirname, './src/') // 才能到http://localhost:8081/访问
  },
  plugins: [
    new HtmlWebPackPlugin({
			template: './index.html'
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets/', to: 'assets/'} // to表示要复制到的dist下的文件夹
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css' // main.css
    })
  ]
}
