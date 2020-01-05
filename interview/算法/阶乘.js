function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
}

// arguments.callee()递归的函数即使被重写了，都可以保证正常完成调用

var a = factorial;
factorial = function () {
  return 0
}
console.log(a(3))// 0 6