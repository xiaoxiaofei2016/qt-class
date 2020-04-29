var a = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

var b = (fn, delay) => {
  let timer = true
  
  return (...args) => {
    if (!timer) return
    timer = false
    setTimeout(() => {
      fn.apply(this, args)
      timer = true
    }, delay)
  }
}


