// 深拷贝的方法
// let a = {
//   name: 'OY',
//   book: {
//     title: 'I like JS',
//     price: '45'
//   }
// }

// let b = JSON.parse(JSON.stringify(a)) undefined symbal Date() 正则无法处理

// b.book.price = '50'

// console.log(a)
// console.log(b)

let a = [0, 1, [2, 3]]
let b = JSON.parse(JSON.stringify(a.slice(1))) 
a[1] = 2
a[2][0] = 4
console.log(b)
