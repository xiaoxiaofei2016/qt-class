var tetsObj = {
    a:3,
    tets: function() {
        console.log(this.a)
    }
}
function testMycall (a,c,d) {
    // console.log(this.b + a + c + d)
    return this.b + a + c + d
}
Function.prototype.myCall = function(obj,...rest) {//...rest表示除obj以外的剩余参数
    // console.log('call',obj)
    obj._fn = this//单纯运行，return被吞掉了
    // console.log(this) //this指向调用myCall方法的函数
    var res = obj._fn(...rest)
    delete obj._fn
    return res
}
var tetsObj1 = {
    b:'b',
    _fn:testMycall
}
// tetsObj1._fn() //this === testobj1
var t = testMycall.myCall(tetsObj1,'a','c','d')
console.log(t)
