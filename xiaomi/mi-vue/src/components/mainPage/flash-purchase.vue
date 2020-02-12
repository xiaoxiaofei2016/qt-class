<template>
  <div class="home-flashsale xm-plain-box">
    <div class="box-hd">
      <h2 class="title">小米闪购</h2>
    </div>
    <div class="box-bd clearfix">
      <div class="row">
        <div class="flashsale-countdown rainbow-item-4 span4">
          <div class="round">{{resttime}} 场</div>
          <img src="@/assets/seckill.png" alt="" width="34" height="53">
          <div class="desc">距离结束还有</div>
          <div class="countdown clearfix">
            <span id="h">{{hour}}</span>
            <i>:</i>
            <span id="m">{{minute}}</span>
            <i>:</i>
            <span id="s">{{second}}</span>
          </div>
        </div>
        <swiper class="span16 flashsale-list swiper-container swiper-no-swiping" :options="swiperOption" ref="mySwiper">
          <li class="swiper-slide" :class="`rainbow-item-${index + 1}`"
            v-for="(item, index) in list" :key="index">
            <router-link to="">
              <div class="content">
                <div class="thumb">
                  <img :src="item.pc_img" :alt="item.goods_name" width="160" height="160">
                </div>
                <h3 class="title">{{item.goods_name}}</h3>
                <p class="desc">{{item.desc}}</p>
                <p class="price">
                  <span>{{item.seckill_Price}}</span>元
                  <del>{{item.goods_price}}元</del>
                </p>
                <span class="flag" v-show="item.label_text">{{item.label_text}}</span>
              </div>
            </router-link>
          </li>
        </swiper>
        <div class="swiper-controls">
          <span class="swiper-flashsale-prev">
            <i class="iconfont icon-jiantou-copy-copy"></i>
          </span>
          <span class="swiper-flashsale-next">
            <i class="iconfont icon-jiantouxuanze"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
// import Swiper from 'swiper'
export default {
  data () {
    return {
      hour: '',
      minute: '',
      second: '',
      start: '2019-11-11 09:00:00',
      swiperOption: {
        speed: 1000,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 14,
        loop: false,
        allowTouchMove: false,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        navigation: {
          nextEl: '.swiper-flashsale-next',
          prevEl: '.swiper-flashsale-prev',
          disabledClass: 'my-button-disabled'
        }
      },
      list: []
    }
  },
  computed: {
    resttime () {
      let resttime1 = this.start
      let a = resttime1.substr(resttime1.indexOf(' ') + 1, 2)
      let b = resttime1.substr(resttime1.indexOf(':') + 1, 2)
      let resttime = `${a}:${b}`
      return resttime
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    leftTimer () {
      var newDate = new Date()
      var newDate1 = new Date(this.start)
      var restTime = newDate1.getTime() - newDate.getTime() // 计算剩余的毫秒数
      // console.log(restTime)
      if (restTime <= 0) restTime = 0
      var hours = parseInt(restTime / 1000 / 60 / 60 % 24, 10) // 计算剩余的小时
      var minutes = parseInt(restTime / 1000 / 60 % 60, 10)// 计算剩余的分钟
      var seconds = parseInt(restTime / 1000 % 60, 10)// 计算剩余的秒数
      hours = this.fix(hours, 2)
      minutes = this.fix(minutes, 2)
      seconds = this.fix(seconds, 2)
      this.hour = hours
      this.minute = minutes
      this.second = seconds
    },
    fix (num, length) {
      return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/flash-purchase.json').then(res => {
      this.list = res.data.list
    })
    let time = setInterval(() => {
      this.leftTimer()
    }, 1000)
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  destroyed () {
    clearInterval(this.time)
  }
}
</script>

<style scoped lang="stylus">
.home-flashsale
  margin-bottom 22px
  position relative
  .flashsale-countdown
    height 300px
    padding-top 39px
    border-top-width 1px
    border-top-style solid
    background #f1eded
    text-align center
  .rainbow-item-4
    border-top-color #e53935
    .round
      font-size 21px
      color #ef3a3b
      padding-top 15px
    img
      margin 25px auto
    .desc
      color rgba(0,0,0,.54)
      font-size 15px
    .countdown
      width 168px
      margin 28px auto 0
      span
        width 46px
        height 46px
        background #605751
        color #fff
        font-size 24px
        line-height 46px
        float left
      i
        width 15px
        float left
        height 46px
        line-height 46px
        color #605751
        font-size 28px
        font-style normal
  .flashsale-list
    float left
    li
      width 234px
      margin-right 14px
      border-top-width 1px
      border-top-style solid
      text-align center
      background #fff
      -webkit-transition all 0.6s
      transition all 0.6s
      position relative
      list-style none
      &:hover
        z-index 2
      a
        display block
        height 300px
        padding-top 39px
        position relative
        &::after
          content ""
          position absolute
          left 0
          top 0
          right 0
          bottom 0
          z-index 2
          background rgba(0, 0, 0, 0.02)
        .thumb
          display block
          width 160px
          margin 0 auto 22px
          img
            width 160px
            height 160px
        .title
          margin 0 20px 6px
          font-size 14px
          font-weight 400
          text-overflow ellipsis
          color #212121
          overflow hidden
          white-space nowrap
        .desc
          height 18px
          margin 0 20px 12px
          font-size 12px
          text-overflow ellipsis
          color $font_color
          overflow hidden
          white-space nowrap
        .price
          margin 0
          color #ff6709
          font-size 14px
          del
            color $font_color
        .flag
          position absolute
          top 0
          left 50%
          width 64px
          height 20px
          margin-left -32px
          font-size 12px
          line-height 20px
          text-align center
          color #fff
          background-color #e53935
          z-index 2
  .swiper-controls
    position absolute
    right 0
    top 24px
    .swiper-flashsale-prev,.swiper-flashsale-next
      display inline-block
      width 24px
      height 16px
      padding 3px 5px
      margin-left -1px
      border 1px solid $border_color
      font-size 16px
      line-height 16px
      -webkit-transition color .5s
      transition color .5s
      color $font_color
      text-align center
      cursor pointer
    .swiper-flashsale-next:focus,.swiper-flashsale-prev:focus
      outline none
    .swiper-flashsale-next:hover,.swiper-flashsale-prev:hover
      color $hover_color
.xm-plain-box
  .box-hd
    position relative
    height 58px
    -webkit-font-smoothing antialiased
    .title
      margin 0
      font-size 22px
      font-weight 200
      line-height 58px
      color #333

.home-flashsale .swiper-flashsale-next,.home-flashsale .swiper-flashsale-prev
  display inline-block
  width 24px
  height 16px
  padding 3px 5px
  margin-left -1px
  border 1px solid $border_color
  font-size 16px
  line-height 16px
  -webkit-transition color 0.5s
  transition color 0.5s
  color $font_color
  text-align center
  cursor pointer

.home-flashsale .swiper-flashsale-next:focus,.home-flashsale .swiper-flashsale-prev:focus
  outline none

.home-flashsale .swiper-flashsale-next:hover,.home-flashsale .swiper-flashsale-prev:hover
  color $hover_color
</style>
