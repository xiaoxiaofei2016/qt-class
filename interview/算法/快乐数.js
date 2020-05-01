/**
 * 输入：19
  输出：true
  解释：
  1^2 + 9^2 = 82
  8^2 + 2^2 = 68
  6^2 + 8^2 = 100
  1^2 + 0^2 + 0^2 = 1
 *  */ 

var isHappy = function(n) {
  let map = new Map()
  while(n != 1) {
    if (map.has(n)) return false
    map.set(n, true)
    n = String(n).split('').map(item => Math.pow(item, 2)).reduce((pre, next) => pre + next)
    console.log(map)
  }
  return true
};

var isHappy = function(n) {
  let map = new Set()
  while(n != 1) {
    if (map.has(n)) return false
    map.add(n)
    n = String(n).split('').map(item => Math.pow(item, 2)).reduce((pre, next) => pre + next)
    console.log(map)
  }
  return true
}

console.log(isHappy(19))
