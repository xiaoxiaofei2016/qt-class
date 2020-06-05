function sendJsonp(url, callback) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url + '?name=func'
    window.func = callback
    document.body.appendChild(script)
    script.onerror = function() {
      reject('error')
      document.body.removeChild(script)
    }
  })
  
}