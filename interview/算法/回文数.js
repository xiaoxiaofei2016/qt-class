var isPalindrome = function(x) {
  let y = x.toString().split('').reverse().join('').JSON.parse()
  console.log(y, x)
  return x === y
}
console.log(isPalindrome(121))