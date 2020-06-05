function Counter() {
  var start = Date.now()
  this.num = 0
  this.timer1 = setInterval(function () {
    this.num++
    var gap = Date.now() - start
    console.log('t1', this.num, gap)
    // console.log(this, 'this1')
  }, 900)
  // JSON.parse('{"desc":"..."}') // 假设耗时1000毫秒
  function sleep(d){
    for(var t = Date.now(); Date.now() - t <= d;);
    return
  }
  sleep(1000)
  // console.log(this, 'this2')
  this.timer2 = setTimeout(() => {
    this.num++
    var gap = Date.now() - start
    console.log('t2', this.num, gap)
    // console.log(this, 'this3')
  }, 0)
}

new Counter() // t1 NaN 1000  t2 1 1000   t1 NaN 1800 setTimeout时this指向构造函数Counter，到了setInterval时指向window
// Counter() // t1 1 1000  t2 2 1001   t1 3 1800   // window下调用this指向window