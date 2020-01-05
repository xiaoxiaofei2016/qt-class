## webpack 
1. vue有两种形式的代码 compiler(模板)和runtime(运行时),默认是runtime模式，指向dist/vue.runtime.common.js
  打包时需要修改为compiler形式
  resolve: {
    alias: { // 别名配置
      vue: 'vue/dist/vue.js' 
    }
  }
  这样import Vue from 'vue' 就相当于 import Vue from 'vue/dist/vue.js'

2. loader:用于对模块源码的转换，loader描述了webpack如何处理非js模块，可以将文件从不同的语言(如ts)转换为js；
  如：css-loader、style-loader、sass-loader、babel-loader、vue-loader
  plugin:目的在于解决loader无法实现的其他事，从打包优化和压缩 如：MiniCssExtractPlugin：剥离css文件
  HtmlWebPackPlugin：生成html文件(如果需要配置多个html时，就需要实例化该插件多次)
