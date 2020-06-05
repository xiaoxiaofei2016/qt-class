// let A = 'adcjksk'
// let B = 'a' || 'dcfvgfdkh' || 'adc'
// let C = 'bca' || 'bc' ||  'adbc'

// 1. 'bcadcjksk' -> 'bcbcadcjksk' -> 'bcbcbcadcjksk'
// 2. 'bcdcjksk'


let compare = function (a, b, c) {
  const len1 = a.length
  const len2 = b.length
  let d
  if (len2 > len1) return -1
  else if (myIndexOf(a, b) == -1) return a
  else {
    d = a.replace(b, c)
  }
  if (myIndexOf(d, b) !== -1) {
    compare(d, b, c)
  }
  return d
}
let myIndexOf = function (str1, str2, num) {
  if (typeof str1 != 'string') return -1
  if (typeof str2 != 'string') return -1
  var len1 = str1.length
  var len2 = str2.length
  var i
  if (num == undefined || num == null || num < 0) {
    i = 0
  } else if (num > len1 - 1) {
    return -1
  } else {
    i = num
  }
  if (len1 < len2) {
    return -1
  } else if (len1 === len2) {
    if (str1 === str2 && i <= 0) {
      return 0
    } else {
      return -1
    }
  } else {
    var tempStr = ''
    while (i < len1) {
      tempStr = str1.substr(i, len2) // 精粹所在
      if (str2 === tempStr) {
        return i
      }
      i++
    }
    if (i = len1) {
      return -1
    }
  }
}
console.log(compare('adcc', 'c', 'ad'))
console.log(compare('adcc', 'cscdvfbg', 'adc'))

// 当A的长度比B短，或A中不包含B，不能输出，当C中含有B进入死循环