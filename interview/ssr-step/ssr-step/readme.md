## 一份代码，既可以在客户端运行，也可以在服务器端运行

  虚拟dom 服务端只认识字符串
  服务器: 生成 html
  客户端：负责事件绑定

  SPA: html   事件在客户端

  ## JEE ejs
  服务端渲染

  ## node
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