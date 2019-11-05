// function Person(name) {
//   this.name = name
// }
// let p = new Person('wn')
// console.log(p.__proto__ == Person.prototype) // 实例的隐式原型等于构造函数的显式原型


// function Person(name) {
//   this.name = name
//   return {}
// }
// let p = new Person('wn')
// console.log(p) // {}



// function Person(name) {
//   this.name = name
//   return 678
// }
// let p = new Person('wn')
// console.log(p) // { name: 'wn' }



// function Person(name) {
//   this.name = name
//   return { name }
// }
// let p = new Person('wn')
// console.log(p) // { name: 'wn' }


// Array.prototype.method = function () {}
// var Arr = [1, 2, 3, 4]
// Arr.name = 'wn'
// for (let index in Arr) {
//   console.log(index) // 0,1,2,3,name,method
// }

// for in
// 1. index是索引为字符串型数字，不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组的内部顺序进行
// 3. 使用 for in会遍历数组上所有可枚举的属性

// for of
// 遍历的是数组的元素
// 不包括数组原型和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
let oArr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 8]

console.log(outputArr(gArr))

// function outputArr (arr) {
//   var res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// 方法二
function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}

// 方法三
// let mArr = []
// gArr.toString().split(',').map(item => mArr.push(Number(item)));
// console.log(mArr)