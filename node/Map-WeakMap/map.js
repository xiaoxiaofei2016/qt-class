global.gc(); // 回收内存
console.log(process.memoryUsage().heapUsed)
let key = new Array(5 * 1024 * 1024); // 1
let map = new Map();
map.set(key, 1); // 2
map.delete(key); // 1
key = null; // 0
global.gc(); // 回收内存
console.log(process.memoryUsage().heapUsed)