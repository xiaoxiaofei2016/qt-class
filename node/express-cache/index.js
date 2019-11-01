const express = require('express')
const md5 = require('md5')
const fs = require('fs')
const path = require('path')

const app = express()
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <script src="/demo.js"></script>
    </body>
    </html>
  `)
})

app.get('/demo.js', (req, res) => {
  console.log('这里被请求了')
  const jsPath = path.resolve(__dirname, './demo.js')
  const content = fs.readFileSync(jsPath)
  const mtime = fs.statSync(jsPath).mtime.toUTCString() // 文件修改时间
  if (mtime === req.headers['if-modified-since']) { // 服务器决策
    res.writeHead(304, 'Not Modified')
    res.end()
    return false
  }
  res.setHeader('Last-Modified', mtime)
  res.setHeader('Cache-Control', 'public,max-age=30') // 30秒缓存过期
  res.end(content)
})
app.listen(3000, () => {
  console.log('server is running 3000')
})