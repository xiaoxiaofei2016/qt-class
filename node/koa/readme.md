cnpm i koa -S 安装koa的依赖
中间件是一个方法
  async (ctx, next) => { // 中间件 函数
    ctx.body = 'hello world'
  }
next把中间件连接起来

## ctx
ctx: {
  req,
  res
}
第三方的中间件都是对ctx继续增强 把要提供的方法放在ctx上
koa-body
ctx.req.files // 获取文件信息
koa-view
ctx.res.render() //

## http

中台
后端服务 越来越往后 越来越纯
提供数据：
api -> json 

## thrift
Login() =>
调用方自己去写
node 才支持

## SSR
解决 SPA 的问题
node 支持