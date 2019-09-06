const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);
fs.readdir('./static/', (err, files) => {
    console.log('files', files);
})

readFile('./static/').then(res => {
    console.log(res);
})
//1
readFile('./index.js', 'utf8')
.then(data => {
    // console.log(data);
})
//2
fs.readFile('./index.js', 'utf8',
(err, data) => {
    // console.log(data);
})