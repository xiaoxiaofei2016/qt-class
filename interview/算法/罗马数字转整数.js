/*****
 * 字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

   1. 输入: "III"
      输出: 3
   2. 输入: "IX"
      输出: 9
   3. 输入: "LVIII"
      输出: 58
      解释: L = 50, V= 5, III = 3.
 */

var romanToInt = function(s) {
  const map = [
    {'I': 1},
    {'V': 5},
    {'X': 10},
    {'L': 50},
    {'C': 100},
    {'D': 500},
    {'M': 1000}
  ]
  const a = s.split('') // ['I', 'I', 'I']
  let b = []
  let sum = 0
  a.forEach((item) => {
    map.forEach(i => {
      if (i[item] != undefined) {
        b.push(i[item])
      }
    })
  })
  console.log(b)
  let c = []
  for (let i = 0; i < b.length; i++) {
    if (b[i] < b[i + 1]) {
      c.push(b[i+1]-b[i])
    } else {
      c.push(b[i]+ b[i+1])
    }
    console.log(c)
  }
  
  return sum
};

// console.log(romanToInt('III'))
// console.log(romanToInt('IX'))
console.log(romanToInt('MCMXCIV'))