console.log(process.memoryUsage())
let array = new Array(5 * 1024 * 1024);

console.log(process.memoryUsage())
array = null; // 回收内存
global.gc(); // 回收内存
console.log(process.memoryUsage())
