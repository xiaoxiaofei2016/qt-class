function connectArr(arr1, arr2) {
  var stack1 = []
  var stack2 = []
  stack1.push(arr1[0])
  stack2.push(arr2[1])
  max(stack1[0] - arr2[0], arr1[1] - arr2[1], stack2[0] - arr1[1])
  // ... 
}
function max(a, b, c) {
  var a = abs(a)
  var b = abs(b)
  var c = abs(c)
  var min1 = a - b > 0 ? b : a
  var min2 = min1 - c > 0 ? c : min
  return min2
}

// 针对于arr1 = [3, 2, 7] arr2 = [5, 8, 6, 9]
// 思路
// 1. 3压入栈1，5压入栈2
// 2. 比较2-5 3-8 2-8， 2-5最小，所以2压入栈1
// 3. 然后7-5 7-8 2-8  7-8最小，7压入栈1，8压入栈2
// 4. arr1已经都压入栈了，所以把6， 9都压入栈2
// 这样栈1: [7, 2, 3] 栈2: [9, 6, 8, 5]
// 每次对比的结果存入数组，最后输出 [[3,5],[2,5],[7,8],[7,6],[7,9]]
