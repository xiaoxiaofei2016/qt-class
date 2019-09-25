let obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc',
  [Symbol('d')]: 'ddd'
}
Object.defineProperty(obj, 'e', {
  value: 'eee',
  enumerable: false // 默认false不可枚举
})
console.log(Object.keys(obj)) 
// for (let n in obj) { // 遍历对象
//   console.log(n)
// }
