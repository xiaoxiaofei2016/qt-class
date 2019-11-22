const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);
fs.readdir('./static/', (err, files) => {//readdir读取目录下的文件及文件夹
    console.log('files', files);
})

readFile('./static/').then(res => {
    console.log(res);
})
//1
readFile('./index.js', 'utf8')//编码为utf8为了输出能看到，默认是binary
.then(data => {
    // console.log(data);
})
//2
fs.readFile('./index.js', 'utf8',
(err, data) => {
    // console.log(data);
})