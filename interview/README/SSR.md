## 服务器端渲染
  # 优势
  1. 更利于SEO
    使用了React或者其它MVVM框架之后，页面大多数DOM元素都是在客户端根据js动态生成，可供爬虫抓取分析的内容大大减少，
    服务端渲染返回给客户端的是已经获取了异步数据并执行JavaScript脚本的最终HTML，网络爬中就可以抓取到完整页面的信息
  2. 更利于首屏渲染
    首屏的渲染是node发送过来的html字符串，并不依赖于js文件了，这就会使用户更快的看到页面的内容。尤其是针对大型单页应用，打包后文件体积比较大，普通客户端渲染加载所有所需文件时间较长，首页就会有一个很长的白屏等待时间。
  
  # 局限
    1. 服务器端压力大
      本来是通过客户端完成渲染，现在统一到服务端node服务去做。尤其是高并发访问的情况，会大量占用服务端CPU资源；
    2. 开发条件受限
    在服务端渲染中，只会执行到componentDidMount之前的生命周期钩子，因此项目引用的第三方的库也不可用其它生命周期钩子，这对引用库的选择产生了很大的限制；
    3. 学习成本较高
      除了对webpack、React要熟悉，还需要掌握node、Koa2等相关技术。相对于客户端渲染，项目构建、部署过程更加复杂。
  
  ## JEE ejs
  都是服务端渲染

  ## node的用处
  1. 服务端渲染
  2. webpack babel 等工具类是node做的
  3. 中间层(BFF) backend for front
    client /buy  ->  请求server
    问题：把两个请求合成一个
    /num     
    /login

    get('/nodeBuy', async () => {
      // 内网请求
      // 请求速度理论上限
      get('/num')
      get('/login')
    })


  rpc： romote process call(远程过程调用协议)
  公司一般不用http，用rpc