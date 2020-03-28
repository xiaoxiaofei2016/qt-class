function parseParams(url) {
  let obj = {}
  if (url.indexOf('?') !== -1) {
    paramsString = url.split('?')[1]
    // console.log(paramsString) 
  }
  var paramsArr = paramsString.split('&')
  paramsArr.forEach(element => {
    if (element.indexOf('=') !== -1) {
      var [key, val] = element.split('=')
      var val = decodeURIComponent(val) // 解码
      if (obj.hasOwnProperty(key)) {
        obj[key] = [].concat(obj[key], val)
      } else {
        obj[key] = val
      }
    }
    else {
      obj[element] = true
    }
  })
  return obj
}


console.log(parseParams('https://juejin.im/search?query=node&type=all'))
console.log(parseParams('https://juejin.im/search?query=node&type'))
console.log(parseParams('https://juejin.im/search?query=%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97&type=article'))
console.log(parseParams('https://juejin.im/search?query=node&type=all&query=js'))