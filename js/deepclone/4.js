let obj = {
    a:1,
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}
function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = {};
        //性能开销
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);//递归
        }
        return cloneTarget;
    } else {//递归退出条件
        return target;
    }
}

let obj1 = clone(obj);
obj1.a = 2;
obj1.field4.child2.child2 = 'newChild'
console.log(obj);
console.log(obj.field4.child2.child2);