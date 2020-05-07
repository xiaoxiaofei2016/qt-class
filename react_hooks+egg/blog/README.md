## 解决不能引入css，只能使用<style jsx>的问题
1. @zeit/next-css 
2. next.config.js:
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})
## 引入antd
1. npm install --save antd
2. 再安装babel-plugin-import： npm install --save babel-plugin-import
目的：只加载项目中用到的模块，这就需要我们用到一个babel-plugin-import文件，配 置好了 .babelrc 就不会把Ant Design打包到生产环境。
.babelrc:
{
  "presets":["next/babel"], // Next.js的配置文件，相当于继承了它本身的所有配置
  "plugins":[  // 增加新的插件，这个插件就是让antd可以按需引入，包括css
    [
      "import",
      {
        "libraryName":"antd",
        "style":"css"  // 引入css
      }
    ]
  ]
}