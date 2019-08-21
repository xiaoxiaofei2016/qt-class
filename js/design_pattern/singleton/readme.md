- 单例模式，是设计模式的最基本模式。
    不管new多少次，永远返回一个对象
    instance
- 立即执行函数 + 闭包
    instance 全局?
    var instance = null;//污染命名空间
    function Singleton() {
        if(instance) {
            return instance;
        }
        return instance = this;//创建出来
    }

    
    var Singleton = ()(function() {
        var instance = null;
        return function() {
            if(instance) {
                return instance;
            }
            return instance = this;
        }
    }

立即执行函数，在返回函数，是构成闭包常用手段，
生产环境 立即执行函数  创建闭包环境 变量一直都在
闭包函数在运行时，可以引用到生成时闭包环境的变量