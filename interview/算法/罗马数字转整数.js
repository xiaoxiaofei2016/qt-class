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

// var romanToInt = function(s) {
//   const map = {
//     I : 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000
//   }
//   let sum = 0
//   for (let i = 0; i < s.length;) {
//     if (i + 1 < s.length && map[s.substring(i, i+2)]) {
//       sum += map[s.substring(i, i+2)]
//       i += 2
//     } else {
//       sum += map[s.substring(i, i+1)]
//       i++
//     }
//   }
//   return sum
// };

// 解法二:前一位和下一位比较大小，若后一位大，则减去后一位，否则加上后一位
var romanToInt = function(s) {
  let map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000},
      sum = 0, loop = 0, num = 0;
  while(loop < s.length) {
    if (map[s[loop]] > num) {
      sum -= num
    } else {
      sum += num
    }
    num = map[s[loop]]
    loop++
  }
  sum += num
  return sum
}

// console.log(romanToInt('III'))
console.log(romanToInt("MCDLXXVI"))
// console.log(romanToInt('MCMXCIV'))