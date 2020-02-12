<template>
  <div class="home-tool-bar " :class="[isSmall ? 'home-tool-bar-small' : '', isSmall ? 'mini' : '']">
    <router-link to="/" class="item item-image">
      <div class="icon">
        <img src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png" alt="" class="static">
        <img src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png" alt="" class="hover">
      </div>
      <span class="text">
        手机APP
      </span>
      <div class="pop-content">
        <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png" alt="">
        <span class="desc">手机扫一扫一分赢好礼</span>
      </div>
    </router-link>
    <router-link :to="{name: `usercenter6`, query:{title: '个人中心'}, params:{id: 6}}" class="item">
      <div class="icon">
        <img src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png" alt="" class="static">
        <img src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png" alt="" class="hover">
      </div>
      <span class="text">
        个人中心
      </span>
    </router-link>
    <router-link :to="{name: `usercenter17`, query:{title: '售后服务'}, params:{id: 17}}" class="item">
      <div class="icon">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png" alt="" class="static">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png" alt="" class="hover">
      </div>
      <span class="text">
        售后服务
      </span>
    </router-link>
    <router-link to="/" class="item">
      <div class="icon">
        <img src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png" alt="" class="static">
        <img src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png" alt="" class="hover">
      </div>
      <span class="text">
        人工客服
      </span>
    </router-link>
    <router-link to="/Cart" class="item">
      <div class="icon">
        <img src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png" alt="" class="static">
        <img src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png" alt="" class="hover">
      </div>
      <span class="text">
        购物车
      </span>
    </router-link>
    <router-link to="/" class="item backtop" @click.native="backtop" v-if="btnFlag">
      <div class="icon">
        <img src="https://i1.mifile.cn/f/i/2018/home/totop.png" alt="" class="static">
        <img src="https://i1.mifile.cn/f/i/2018/home/totop_hover.png" alt="" class="hover">
      </div>
      <span class="text">回顶部</span>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    backtop () {
      // document.body.scrollTop = 0
      // document.documentElement.scrollTop = 0
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    scrollToTop () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 300) {
        this.btnFlag = true
      } else {
        this.btnFlag = false
      }
    }
  },
  data () {
    return {
      isback: false,
      btnFlag: false,
      isSmall: false,
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    window.onresize = () => { // onresize 事件会在窗口或框架被调整大小时发生
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
    window.onresize = null
  },
  watch: {
    screenWidth (newval, oldval) {
      // if (!this.isSmall) {
      //   this.screenWidth = val
      //   if (this.screenWidth < 1300) {
      //     this.isSmall = true
      //   }
      //   this.isSmall = true
      //   let that = this
      //   setTimeout(() => {
      //     that.isSmall = false
      //   }, 400);
      // }
      if (oldval < 1400) {
        this.isSmall = true
      } else {
        this.isSmall = false
      }
      if (newval < 1400) {
        this.isSmall = true
      } else {
        this.isSmall = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.home-tool-bar
  position fixed
  bottom 70px
  right 0
  z-index 99
  .item
    position relative
    display block
    width 82px
    height 90px
    margin-top -1px
    background-color #fff
    border 1px solid #f5f5f5
    text-align center
    .icon
      position relative
      width 30px
      height 30px
      margin 0 auto 8px
      padding-top 18px
      img
        position absolute
        bottom 0
        left 0
        width 30px
        height 30px
        -webkit-transition opacity .3s
        transition opacity .3s
      .static
        opacity 1
      .hover
        opacity 0
    &:hover .text
      color $hover_color
    &:hover .static
      opacity 0
    &:hover .hover
      opacity 1
    &:hover .pop-content
      transform translate3d(-110%,0,0)
      opacity 1
      visibility visible
    .text
      color #757575
      -webkit-transition color .3s
      transition color .3s
    .pop-content
      position absolute
      left 0
      top 0
      padding 14px
      background #fff
      border 1px solid #f5f5f5
      -webkit-transition opacity .3s
      transition opacity .3s
      -webkit-transform translateZ(0)
      transform translateZ(0)
      opacity 0
      visibility hidden
      &::after
        right -18px
        border-color rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #fff
        z-index 2
      &::before
        right -19px
        border-color rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #f5f5f5
        z-index 1
      &::before,&::after
        content ''
        position absolute
        top 21%
        width 0
        height 0
        border-width 10px
        border-style solid
        overflow hidden
      img
        display block
        width 100px
        height 100px
        margin 6px auto
      .desc
        display block
        width 82px
        margin 14px auto 0
        color #757575
        text-align center
  .backtop
    margin-top 14px
    border-top 1px solid #f5f5f5
    // visibility hidden
    &.active
      visibility visible

.home-tool-bar-small
  left 50%
  right auto
  margin-left 613px
  bottom 40px
  &.mini
    right 0
    left auto
    margin-left 0
  .item
    width 25px
    height 40px
    .icon
      width 20px
      height 20px
      padding-top 10px
      img
        width 20px
        height 20px
    .text
      display none
      position absolute
      left 0
      top 50%
      height 28px
      line-height 28px
      padding 0 8px
      background-color #fff
      border 1px solid #f5f5f5
      text-align center
      white-space nowrap
      &::after,&::before
        content ''
        position absolute
        top 50%
        width 0
        height 0
        margin-top -6px
        border-width 6px
        border-style solid
        overflow hidden
      &::after
        border-color rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #fff
        right -12px
        z-index 2
      &::before
        border-color rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #f5f5f5
        right -13px
        z-index 1
    .pop-content
      &::after,&::before
        top 10px
        border-width 6px
      &::after
        right -12px
      &::before
        right -13px
    &:hover .text
      display block
      -webkit-transform translate3d(-115%,-50%,0)
      transform translate3d(-115%,-50%,0)
      color #757575
  .item-image
    &:hover .text
      display none
</style>
