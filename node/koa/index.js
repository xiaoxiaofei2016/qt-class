// 回调 -> promise -> generator -> async await
// async 定义函数的一个关键词 
// async () => {
//   let a = await Promise() 
//   // a resolve 时候的值
// }

const Koa = require('koa');
const KoaBody = require('koa-body'); // 也是一个中间件
const path = require('path');
const app = new Koa();
const fs = require('fs');
const { promisify } = require('util'); //promisify:promise风格的一个函数
// formidable form req
app.use(KoaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,
    keepExtensions: true, // 保持文件后缀
    uploadDir: path.join(__dirname, '/static/images')
  }
}));
app.use(async (ctx) => {
  // http://localhost:3000/    上传文件的表单
  // http://localhost:3000/upload 处理表单
  const method = ctx.method;
  const path = ctx.path;
  console.log(method);
  console.log(path);
  if (method === 'GET' && path === '/') {
    ctx.body = `
    <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="avatar"/>
      <input type="submit" value="提交"/>
    </form>
    `
  }
  else if (method === 'POST' && path === '/upload') {
    console.log(ctx.request.files);
    const readdir = promisify(fs.readdir);
    const files = await readdir('./static/images/', 'utf8'); // await后面接一个Promise
    const htmlTemplate = files.map(file => {
      return `
      <li>
        <a href="/images/${file}">${file}</a>
      </li>
      `
    }).join('')
    ctx.body = htmlTemplate;
  }
  else if (method === 'GET' && path.indexOf('jpg') !== 0 ) {
    fs.readFile('')
  }
});
app.listen(3000, () =>{
  console.log('Server is running 3000');
})