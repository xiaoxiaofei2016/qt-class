// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000, () => {
//   console.log('Server is running 3000')
// })

// const Koa = require('koa2')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world'
// })

// app.listen(3000, () => {
//   console.log('Server is running 3000')
// })

let myKoa = require('./lib/application')
let app = new myKoa()

app.use((ctx, next) => {
  // res.end('abcdefg')
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.request.path)
  // console.log(ctx.url)
  // console.log(ctx.path)
  // ctx.body = 'hello world'
  ctx.body = 'hello'
  console.log(ctx.response.body)
  console.log(ctx.body)
  next()
})
app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})

/*
app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.use((ctx, next) => {
  console.log(5)
  next()
  console.log(6)
})

app.use((ctx, next) => {
  console.log(1)
  // next()
  app.use((ctx, next) => {
    console.log(3)
    // next()
    app.use((ctx, next) => {
      console.log(5)
      // next()
      console.log(6)
    })
    console.log(4)
  })
  console.log(2)
})
*/


app.listen(3000, () => {
  console.log('myKoa成功了')
})
