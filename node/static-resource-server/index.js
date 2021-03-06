const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log(req.url);
    const reqUrl = req.url;
    if (/^\/static\//.test(reqUrl)) {
        staticServer(req, res) 
        return false;
    }
    fs.readFile('./index1.html', 'binary',
    (err, file) => {
        res.write(file, 'binary'),//默认编码binary
        res.end();
    });
})
.listen(9090, () => {
    console.log('Server is running 9090');
})

function staticServer(req, res) {
    const reqUrl = req.url;
    // /static/a.jpg
    // /static/b.jpg
    const filePath = path.join(__dirname, reqUrl);//连接所有参数,并规范化路径
    //__dirname 总是指向被执行 js 文件的绝对路径F:/workspace/node/static-resource-server
    fs.exists(filePath, exists => {
        if (!exists) {
            res.writeHead(404);//404一个三位的 HTTP 状态码
            res.end();
            return false;
        }
        fs.readFile(filePath, 'binary',
        (err, file) => {
            res.write(file, 'binary');
            res.end();
        })
    })
}