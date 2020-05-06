/****
 * -121 -> 121- false
 * 10 -> 01 false
 * 121 -> 121 true
 */

var isPalindrome = function(x) {
  const y = String(x).split('').reverse().join()
  const a = String(x).split('')
  return y == a
}
console.log(isPalindrome(-121))