var find = function (arr, k) {
  let a = arr.indexOf(k)
  let sum = 0
  for (let i = a + 1; i < arr.length; i++) {
    if (arr[i] = k) {
      sum++
    }
  }
  return sum
}
console.log(find([2, 3, 4, 3], 3)) // 2