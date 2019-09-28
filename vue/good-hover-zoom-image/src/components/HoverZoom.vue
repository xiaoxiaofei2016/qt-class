<template>
  <div class="zoom">
    <!-- small -->
    <div class="smallbox" @mouseover="mouseOver" @mousemove="mouseMove" @mouseout="mouseOut">
      <img :src="smallSrc" alt="">
      <div class="mask" :style="{ width: '210px', height: '210px', opacity: 0.6, backgroundColor: 'rgba(25, 122, 255, 0.5)' }"></div>
    </div>
    <div class="bigbox">
      <div :style="{ width: '430px', height: '430px' }">
        <img :src="bigSrc" alt="" :style="{ width: '800px', height: '800px' }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smallSrc: { type: String },
    bigSrc: { type: String }
  },
  methods: {
    mouseOver () {

    },
    mouseMove (e) {
      const x = e.clientX, 
            y = e.clientY
      let maskX = x - 210 / 2,
          maskY = y - 210 / 2  // 蒙层左上角的坐标
      maskX = maskX < 0 ? 0 : maskX
      maskY = maskY < 0 ? 0 : maskY
      const smallboxRect = document.querySelector('.smallbox img').getBoundingClientRect() // 小图片宽高

      if (maskX + 210 >= smallboxRect.width) {
        maskX = smallboxRect.width - 210
      }
      if (maskY + 210 >= smallboxRect.height) {
        maskY = smallboxRect.height - 210
      }
      const mask = document.querySelector('.mask')
      mask.style.transform = `translate(${maskX}px, ${maskY}px`
      // (800 - 430) / (430 - 210)
      const bigboxMore = document.querySelector('.bigbox div img')
      bigboxMore.style.left = - maskX * ((800 - 430) / (430 - 210)) + 'px'
      bigboxMore.style.top = - maskY * ((800 - 430) / (430 - 210)) + 'px'

    },
    mouseOut () {}
  }
}
</script>

<style scoped>
.smallbox {
  position: absolute;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  cursor: crosshair;
}
.bigbox {
  left: 450px;
  position: absolute;
}
.bigbox div {
  position: absolute;
  border: 1px solid #000;
  overflow: hidden;
}
.bigbox div img {
  position: absolute;
}
</style>
