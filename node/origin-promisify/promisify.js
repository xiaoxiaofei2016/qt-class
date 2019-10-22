// const { promisify } = require('util')
const fs = require('fs')
function promisify(fn) {
  return function(...arg) {
    return new Promise((resolve, reject) => {
      fn(...arg, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  }
}
const readFile = promisify(fs.readFile)
readFile('./a.txt', 'utf8')
.then(res => console.log(res))