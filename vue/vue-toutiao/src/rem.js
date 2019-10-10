// flexiable.js 移动端适配的库
// rem -> html font-size
// 根据不同的屏幕大小 去计算出不同的 html font-size
(function(win, doc) {
  const cal = function() {
    const w = doc.documentElement.clientWidth;// 获取浏览器窗口文档显示区域的宽度，不包括滚动条 iphone6/7/8/X 设备宽度为375px
    // 宽375 设备
    document.documentElement.style.fontSize = 100 * (w / 375) + 'px'; // html字体大小设为100px
    doc.body.style.fontSize = '16px'; // body字体大小设为16px，对于没有设置字体大小的默认给16px
  }
  cal();
})(window, document)