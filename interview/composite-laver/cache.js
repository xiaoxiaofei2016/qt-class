const fs = require('fs')
const md5 = require('md5')

fs.stat('./readme.md', (err, stat) => {
  console.log(stat.mtime) // 修改时间
})
const readme = fs.readFileSync('./readme.md', 'utf8')
console.log(md5(readme))