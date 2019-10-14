const Koa = require('koa'); // Koa是一个构造函数
const student = new Koa();
// const manage = new Koa();
// 用户 request -> middleWare1 -> middleWare2 ->  res
student.use(async (ctx, next) => { // 中间件 函数
  console.log(ctx.path, ctx.query);
  ctx.body = 'hello world'
  await next(); // 等下一个执行完再执行 await用于等待异步完成
  console.log('middleWare1');
})
student.use(async (ctx, next) => { // 中间件 函数
  await next();
  console.log('middleWare2');
})
student.use(async (ctx, next) => { // 中间件 函数
  console.log('middleWare3');
})
student.listen(3000, () => {
  console.log('Server is running 3000');
})
