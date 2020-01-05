var arr = [2, 3, '2', 7, 3, NaN, NaN]
function singe(arr) {
  var len = arr.length
  var newArr = []
  for (let i = 0; i < len; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(singe(arr))

// 总结
// 上述判断也可以为：if (newArr.indexOf(arr[i]) == -1) 但是不够语义化，且不能判断NaN
// 数组的includes方法，判断包含某一元素，第二个参数表示判断的起始位置，可以是负数

function singe(arr) {
  var set = new Set(arr)
  return Array.from(set.values())
}