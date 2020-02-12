<template>
  <div class="page-main home-main">
    <div class="container">
      <v-flashPurchase></v-flashPurchase>
      <v-img :images="imgs[0].imgUrl"></v-img>
      <v-nineImg></v-nineImg>
      <v-img :images="imgs[1].imgUrl"></v-img>
      <v-elevenImg :titleId="data0"></v-elevenImg>
      <v-img :images="imgs[2].imgUrl"></v-img>
      <v-elevenImg :titleId="data1"></v-elevenImg>
      <v-img :images="imgs[3].imgUrl"></v-img>
      <v-elevenImg :titleId="data2"></v-elevenImg>
      <v-img :images="imgs[4].imgUrl"></v-img>
      <v-elevenImg :titleId="data3"></v-elevenImg>
      <v-img :images="imgs[5].imgUrl"></v-img>
      <v-elevenImg :titleId="data4"></v-elevenImg>
      <v-img :images="imgs[6].imgUrl"></v-img>
      <v-fourMV></v-fourMV>
    </div>
  </div>
</template>

<script>
import flashPurchase from './flash-purchase.vue'
import img from './img.vue'
import nineImg from './nineImg.vue'
import elevenImg from './elevenImg.vue'
import fourMV from './fourMV'
export default {
  components: {
    'v-flashPurchase': flashPurchase,
    'v-img': img,
    'v-nineImg': nineImg,
    'v-elevenImg': elevenImg,
    'v-fourMV': fourMV
  },
  data () {
    return {
      imgs: [
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b242827ad93e9ec28c8ddb9b30fd003.jpg?thumb=1&w=1533&h=150&f=webp&q=90' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e63ab43e7c32296f18f34c8efb41534.jpg?thumb=1&w=1533&h=150&f=webp&q=90' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1533&h=150&f=webp&q=90' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5cb5e3368bb386449e5150dea66f550.jpg?thumb=1&w=1533&h=150&f=webp&q=90' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/89c2a209b742fce9b10d9d196149d634.jpg?thumb=1&w=1533&h=150&f=webp&q=90' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10fb0086cb21120c53248a3d8cc56dc5.jpg?thumb=1&w=1533&h=150&f=webp&q=90' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1533&h=150&f=webp&q=90' }
      ],
      data0: [],
      data1: [],
      data2: [],
      data3: [],
      data4: []
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/elevenimg.json').then(res => {
      // console.log(res)
      this.data0 = res.data.jiadian
      this.data1 = res.data.zhineng
      this.data2 = res.data.dapei
      this.data3 = res.data.peijian
      this.data4 = res.data.zhoubian
    })
  }
}
</script>

<style scoped lang="stylus">
.page-main
  background #f5f5f5
.home-main
  padding-top 4px
  padding-bottom 12px
</style>
