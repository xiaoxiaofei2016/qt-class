const Koa = require('./myKoa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})
app.use(async (ctx, next) => {
  console.log(3)
  await next()
  console.log(4)
})
app.use(async (ctx, next) => {
  console.log(5)
})
// 1 3 5 4 2
// app.listen(3000, () => {
//   console.log('server is running 3000')
// })
// app.run()
const http = require('http')
http.createServer((req, res) => {
  app.run()
})