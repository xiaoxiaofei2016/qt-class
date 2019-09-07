// 使用hash
class HashRouter {
    constructor() {
        // Key(/page1) => val (func 由外界传进来)
        this.routers = {}
        window.addEventListener('hashchange', this.load.bind(this))
    }

    register (hash, callback = function() {}) {
        this.routers[hash] = callback; 
    }

    registerNotFound(callback = function() {}) {
        this.routers['404'] = callback;
    }
    registerError(callback = function() {}) {
        this.routers['error'] = callback;
    }
    load () {
        // console.log(this);// HashRouter {}
        let hash = location.hash.slice(1),
            handler;// 处理函数 container 显示相应的page内容  由外界决定
        //仅限于对自身的属性hasOwnProperty，不去原型链上查找
        if (!this.routers.hasOwnProperty(hash)) {
            handler = this.routers['404'];
        }
        else {
            handler = this.routers[hash];
        }
        try {
            handler.apply(this);
        } catch(e) {
            console.error(e);
            (this.routers['error'] || function () {}).call(this, e); 
        }
       
    }
}