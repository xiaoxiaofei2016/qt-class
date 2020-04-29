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
  react-hot-loader是对webpack的热加载进行了改进，保证状态可以存下来


## webpack的构建流程
1. 初始化参数：从配置文件和shell语句中读取与合并参数，得到最终的参数
2. 开始编译：从上一步得到的参数初始化一个compiler对象，执行对象的run方法开始执行编译
3. 确定入口: 找到entry的所有入口文件
4. 编译模块：调用所有配置的loader对模块进行翻译，再找到该模块依赖的模块，再递归本步骤，直到所有入口依赖的文件都经过了本步骤的处理，最终得到了每个模块被翻译后的最终内容已经他们之间依赖的模块
5. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，再把每个chunk转换成一个单独的文件加入到输出列表。确定好输出内容后，根据配置确定最终输出的路径和文件名

## webpack热更新(HMR)HotModuleReplacementPlugin是如何做到的？
主要是通过sockjs(webpack-dev-sever的依赖)在客户端和服务端之间建立一个websocket长连接，服务端将webpack编译打包的各个阶段的状态信息告知客户端，最主要的还是新模块的hash值，客户端不能直接请求更新的代码，也不会执行热更模块，而是把工作又交回给了webpack，webapck就是根据客户端传给他的信息决定是刷新浏览器还是进行模块热更新

## 利用webapck来优化性能
1. 压缩代码，删除多余代码，注释，简化代码写法，利用webpack的uglifyJsPlugin和ParallelUglifyPlugin来压缩js，用cssnano来压缩css
2. 删除死代码
3. 提取公共代码
4. 利用CDN加速（内容分发网络）
