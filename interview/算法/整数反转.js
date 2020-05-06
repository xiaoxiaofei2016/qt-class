/*
 1.输入: 123
  输出: 321
 2.输入: -123
  输出: -321
 3.输入: 120
  输出: 21

  假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
  请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

var reverse = function(x) {
  var max = Math.pow(2, 31) - 1
  var min = Math.pow(2, 31) * (-1)
  var y = 0
  while( x != 0) {
    y = 10 * y + x % 10
    x = ~~(x / 10)
    console.log(y, x)
  }
  if (y > max) return 0
  if (y < min) return 0
  return y
};
const a = 123
const b = -123
const c = 120
console.log(reverse(a))
console.log(reverse(b))
console.log(reverse(c))
console.log(7%(-3))