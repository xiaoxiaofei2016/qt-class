global.gc(); // 回收内存
console.log(process.memoryUsage().heapUsed)
let key = new Array(5 * 1024 * 1024); // 1
let wp = new WeakMap();
wp.set(key, 1); // 2
key = null; // 0 不用delete直接回收掉了 注意与map的区别
global.gc(); // 回收内存
console.log(process.memoryUsage().heapUsed)
