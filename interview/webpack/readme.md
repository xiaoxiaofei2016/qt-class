# webpack4.x
1. entry: {}
   output: {}
   module: {
     rules: [
       {test: /\.js$/, loader: 'babel-loader'/}
     ]
   }
  plugins: [],
  devSever: {}
2. plugins: 
  HtmlWebpackPlugin: 分离出html文件
  MiniCssExtractPlugin: 分离出css文件，并在html文件以link标签的形式引入
  CopyWebpackPlugin: 复制文件，from:要复制的文件  to:复制到指定目录下
  VueLoaderPlugin: 解析vue
3. style-loader 将css放在<style>标签里
   file-loader与url-loader
   url-loader有limit属性(默认10000，即为8kb)，url地址长度在limit内编译为base64格式，超出limit则靠file-loader解析

   babel-plugin-syntax-dynamic-import用以识别vue动态import导入语法
   用法：{
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins: ['syntax-dynamic-import']
          }
        },
  
4. webpack-dev-server 热加载，指代码修改了页面也自动更新了
  react-hot-loader不会刷新整个页面，只是替换了修改的代码，做到了页面的局部刷新
