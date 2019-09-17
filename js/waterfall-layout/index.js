// b
var a = 123;
(function() {
  function Waterfall(option) {
    this.container = option.container;
    this.number = option.number; // 一次渲染多少张图片
    this.width = document.body.clientWidth; // 屏幕宽度
    this.init();
  }
  Waterfall.prototype.init = function () {
    const imgList = document.getElementsByTagName('img');
    // 第一排：float； 第二排：position
    const perNum = this.getPerNum();
    let heights = [];
    for (let i = 0; i < perNum; i++) {
      heights.push(imgList[i].offsetHeight);
    }
    let minIndex = this.getMinIndex(heights);
    for (let i = perNum; i < imgList.length; i++) {
      imgList[i].style.position = 'absolute';
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`; // 距离屏幕左边的距离
      imgList[i].style.top = `${heights[minIndex]}px`;

      // 更新高度
      heights[minIndex] = heights[minIndex] + imgList[i].offsetHeight;
      minIndex = this.getMinIndex(heights);
    }
    this.heights = heights;
  }
  Waterfall.prototype.getMinIndex = function (heights) {
    const min = Math.min(...heights);
    return heights.findIndex(e => e === min); //返回高度最小值的索引
  }
  Waterfall.prototype.getPerNum = function () { 
    const imgList = document.getElementsByTagName('img');
    const singleWidth = imgList[0].offsetWidth; // 每张图片宽度一样
    return Math.floor(this.width / singleWidth); // 得到每一排的数量
  }
  Waterfall.prototype.append = function(frag) {
    const $waterfall = document.getElementById(this.container);
    $waterfall.appendChild(frag);
    const imgList = document.getElementsByTagName('img');
    const imgFromFrag = Array.prototype.slice.call(imgList, -20);

    let heights = this.heights;
    let minIndex = this.getMinIndex(heights);
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        imgFromFrag[i].style.position = 'absolute';
        imgFromFrag[i].style.left = `${imgList[minIndex].offsetLeft}px`; // 距离屏幕左边的距离
        imgFromFrag[i].style.top = `${heights[minIndex]}px`;
  
        // 更新高度
        heights[minIndex] = heights[minIndex] + imgFromFrag[i].offsetHeight;
        minIndex = this.getMinIndex(heights);
      }
    },5000);
  }
  window.Waterfall = Waterfall // 立即执行函数里面的方法到window下才能拿到
})()
console.log(Waterfall);
// b
var b = 456;