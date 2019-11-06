// let a = {
//   name: 'wn',
//   book: {
//     title: 'You do not kown JS',
//     price: '45'
//   }
// }
// let b = a
// console.log(b)

// a.name = 'du'
// a.book.price = '55'
// console.log(a)
// console.log(b)

// let b = Object.assign({}, a)
// let b = {...a} 与Object.assign()一样
// console.log(b)
// a.name = 'du'
// a.book.price = '55'


let a = [0, '1', [2, 3]]
let b = a.slice(1)
a[1] = '22'
a[2][0] = 4
console.log(a)
console.log(b)


