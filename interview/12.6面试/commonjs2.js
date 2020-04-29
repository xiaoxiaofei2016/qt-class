console.log(exports === module.exports)
var counter = 3
// typeof exports === 'object'
var obj = {
  name: 'David'
}
function changeValue() {
  counter++;
  obj.name = 'Tom'
}
console.log(counter, 'counter1')
console.log(obj, 'obj1')
// changeValue()
// console.log(counter, 'counter2')
// console.log(obj, 'obj2')
module.exports = {
  counter,
  obj,
  changeValue
}

// module.exports.counter = counter
// exports.counter = counter
// exports = module.exports = {
//   counter
// }