// 7: 6 5; 6: 5 4; 5: 4 3 。。。
// 函数 自己调用自己
const w = new Map();//数据结构 Hash表
function f(n) {
    //归 退出条件
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (w.has(n)) {
        return w.get(n);
    }
    var ret = f(n-1) + f(n-2);
    w.set(n, ret);
    return ret//递
}

console.log(f(7));//内存溢出 重复计算， 计算过的缓存一下
//每次调用函数 入栈 不优化 ，内存溢出
// {key:val} Map() get set  HashMap
// 1. f(7)
// f() = f(5) 