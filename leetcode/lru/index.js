/**
 *  最近最少使用原则
 *  @param {number} capacity 容量
 */
var LRUCache = function(capacity){
    this.capacity = this.capacity;//空间的上限
    this.arr = [];//数据结构
    this.obj = {};//3,3
    // 使用的空间 arr.length push
};
LRUCache.prototype.get = function(key){
    //调整优先级
    return;
}
LRUCache.prototype.set = function(){
    
}
new capacity(2);
    // [] 
    // [1] push
    // [1,2]  在右端加入   
    // get(1) 读操作
    // 1   所在的位置，从原来的数组里（队头）移除shift，push到队尾 不会带来空间使用量的增加
    // [2,1]
    // put (3)     带来空间的分配  回收空间？ 最近最少使用 (length>=容量) shift push(3)  