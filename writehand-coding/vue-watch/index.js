(function () {
  var b = { a: 1 }
  Object.defineProperty(b, 'b', {
    get: function() {
      return this.a
    },
    set: function(val) {
      this.a = val
    },
    configurable: true
  })

  console.log(o.b)
})()