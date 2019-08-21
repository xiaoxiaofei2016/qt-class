// function Singleton() {
//     let instance = null;
//     return instance;
// }
const Singleton = (function() {
    //闭包 closure
    let instance = null;//闭包区域
    console.log('---------闭包区域')
    return function() {//constructor
        console.log('---------new')
        if(instance) {
            return instance;
        }
        return instance = this;
    }
})();//自执行函数
console.log(Singleton,typeof Singleton);
//实例 return 单例模式
console.log(Singleton)
const a = new Singleton();
const b = new Singleton();
console.log(a == b)