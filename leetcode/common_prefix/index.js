function isCommonPrefix(strs,middle) {
    const prefix = strs[0].substring(0,middle);//substring() 方法用于提取字符串中介于两个指定下标之间的字符
    for(let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(prefix))//startsWith()用于检测字符串是否以指定的子字符串开始
        return false;
    }
    return true
}
var longestCommonPrefix = function(strs) {
    // 最短的一项
    let minLen = Number.MAX_VALUE;//初始化minLen的值为一个非常大的数
    // 二分
    for (let i = 0;i < strs.length; i++) {
        minLen = Math.min(minLen,strs[i].length);
    }
    console.log(minLen)


    let low = 0, //start
        high = minLen; //end
    // 不停地查找中间值
    
    while (low <= high) {
        // let mid = Math.floor((low + high)/2);
        let mid = (low + high) >>1;//相当于除以二，位运算符
        if (isCommonPrefix(strs,mid)) low = mid + 1;//后半段
        else high = mid - 1;
    }
    return strs[0].substring(0,(low + high) >> 1)

}
console.log(longestCommonPrefix(["flower","flow","floght"]))