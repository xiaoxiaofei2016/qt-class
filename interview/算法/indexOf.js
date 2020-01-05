var str = 'adsf12'
console.log(myIndexOf('qswd', 'w', 2))
// 字符串indexOf方法
function myIndexOf(str1, str2, num) {
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
    while(i < len1) {
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

var arr = [1, 4, '8']