<template>
  <div class="site-topbar">
    <div class="container">
      <div class="topbar-nav">
        <router-link to="/" target="_blank" class="title">小米商城</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">MIUI</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">IoT</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">云服务</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">金融</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">有品</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">小爱开放平台</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">企业团购</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">资质证照</router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">协议规则</router-link>
        <span class="sep">|</span>
        <router-link to="" class="topbar-download title" :class="{'active': isShowQRCode}" @mouseenter.native="enterQRCode" @mouseleave.native="leaveQRCode">下载app
          <span class="appcode">
            <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="小米商城" width="90" height="90">小米商城APP
          </span>
        </router-link>
        <span class="sep">|</span>
        <router-link to="" class="title">Select Location</router-link>
      </div>
      <div class="topbar-cart" :class="[{'topbar-cart-active': isShowCart}]" @mouseenter="enterCart" @mouseleave="leaveCart">
        <router-link class="cart-mini" to="" @click.native="toCart">
          <i class="iconfont icon-cart--copy "></i>
          <i class="iconfont icon-gouwucheman hide"></i>
          购物车
          <span class="cart-mini-num">(0)</span>
        </router-link>
        <div class="cart-menu" :style="{height: isShowCart?'100px':'0px'}">
          <div class="menu-content">
            <div class="loading" :class="showLoading ? '' : 'hide'" ref="loading" >
              <div class="loader"></div>
            </div>
            <ul class="cart-list hide"></ul>
            <div class="cart-total clearfix hide"></div>
            <div class="msg msg-error hide"></div>
            <div class="msg msg-empty" ref="msg" :class="showMsg ? '' : 'hide'">购物车中还没有商品，赶紧选购吧!</div>
          </div>
        </div>
      </div>
      <div class="topbar-info" v-if="!isLogin">
        <router-link class="link title" to="/Login">登录</router-link>
        <span class="sep">|</span>
        <router-link class="link title" to="" @click.native="showAgreement">注册</router-link>
        <span class="sep">|</span>
        <span class="message">
          <router-link class="needmessage title" to="">
            消息通知
          </router-link>
        </span>
      </div>
      <div class="topbar-info" v-else>
        <span class="user" @mouseenter="showUser" @mouseleave="leaveUser" :class="{'user-active': showUserInfo}">
          <router-link to="" class="user-name">
            <span class="name">huahai</span>
            <i class="iconfont icon-jiantouxia"></i>
          </router-link>
          <div class="user-menu-wrapper" :style="{height: showUserInfo ? '164px': '0px'}">
            <ul class="user-menu">
              <li v-for="(item, index) in user" :key="index" @click="toUser(index)">
                <router-link :to="{name: `usercenter${Id[index]}`, query:{title: item}, params:{id: Id[index]}}" >{{item}}</router-link>
              </li>
              <li>
                <router-link to="">小米账户</router-link>
              </li>
              <li>
                <router-link to="" @click.native="loseLogin">退出登录</router-link>
              </li>
            </ul>
          </div>
        </span>
        <span class="sep">|</span>
        <span class="message">
          <router-link class="needmessage title" to="">
            消息通知
          </router-link>
        </span>
        <span class="sep">|</span>
        <router-link to="" class="link link-order title">我的订单</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  inject: ['reload'],
  data () {
    return {
      isShowQRCode: false,
      isShowCart: false,
      showLoading: false,
      showMsg: false,
      showUserInfo: false,
      user: [
        '个人中心', '评价晒单', '我的喜欢'
      ],
      Id: ['6', '3', '12']
    }
  },
  methods: {
    enterQRCode () {
      this.isShowQRCode = true
    },
    leaveQRCode () {
      this.isShowQRCode = false
    },
    enterCart () {
      this.isShowCart = true
      // this.showMsg = false
      // this.showLoading = true
      let timer1 = setTimeout(() => {
        this.showLoading = false
        this.showMsg = true
      }, 500)
    },
    leaveCart () {
      clearTimeout(this.timer1)
      this.isShowCart = false
      this.showMsg = false
      setTimeout(() => {
        this.showLoading = true
      }, 500)
    },
    showAgreement () {
      this.$store.dispatch('setShowAgreement', true)
      this.$store.dispatch('setShowMask', true)
    },
    showUser () {
      this.showUserInfo = true
    },
    leaveUser () {
      this.showUserInfo = false
    },
    loseLogin () {
      this.$store.dispatch('setIsLogin', false)
      this.$router.push({ path: '/' })
      this.reload()
    },
    // beforeRouteEnter(to, from, next) {
    //     console.log(to, from)
    // },
    toUser (index) {
      this.reload()
      
    },
    toCart () {
      this.$router.push({ path: '/Cart' })
    }
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ])
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">
.site-topbar
  position relative
  height 40px
  font-size 12px
  color $font_color
  background #333
  z-index 30
  .container
    width 1226px
    margin 0 auto
    .topbar-nav
      float left
      height 40px
      line-height 40px
      .title:hover
        color #fff
      .sep
        margin 0.3em
        color $bg_color
      a
        color $font_color
        line-height 40px
        display inline-block

      .topbar-download
        position relative
        .appcode
          position absolute
          top 40px
          left 50%
          width 124px
          height 0
          background #fff
          margin-left -55px
          box-shadow 0 1px 5px #aaa
          text-align center
          font-size 14px
          color #333
          line-height 1
          overflow hidden
          transition height 0.3s
        img
          display block
          margin 18px auto 12px
      .active
        &::before
          content ''
          position absolute
          bottom 0
          left 50%
          width 0
          height 0
          margin-left -8px
          border-width 0 8px 8px
          border-style solid
          border-color rgba(0,0,0,0) rgba(0,0,0,0) #fff
      .topbar-download.active .appcode
        height 148px

    .topbar-cart
      position relative
      float right
      width 120px
      height 40px
      margin-left 15px
      transition all 0.2s
      font-size 12px
    .topbar-cart-active .cart-mini
      color $hover_color
      background #fff
    .cart-mini
      position relative
      z-index 32
      display block
      height 40px
      line-height 40px
      text-align center
      color $font_color
      background $bg_color
      i
        margin-right 4px
        font-size 20px
        line-height 20px
        vertical-align -4px
    .cart-menu
      position absolute
      right 0
      top 40px
      z-index 31
      width 316px
      height 0
      color $bg_color
      background #fff
      box-shadow 0 2px 10px rgba(0, 0, 0, 0.15)
      transition height 0.3s
      .menu-content
        .loading
          margin 20px 20px
          text-align center
          padding 20px 0
          .loader
            position relative
            margin 0 auto
            width 4px
            height 20px
            background $hover_color
            overflow visible
            transform scale(1)
            animation loader 0.3s infinite alternate-reverse linear
            &::before, &::after
              position absolute
              left 50%
              top 50%
              width 4px
              height 20px
              content ''
              background $hover_color
            &::before
              margin -10px 0 0 -10px
              transform scaleY(.3)
              transform-origin 50% 50%
              animation loader 0.3s .25s infinite alternate-reverse linear
            &::after
              margin -10px 0 0 6px
              transform scaleY(.5)
              transform-origin 50% 50%
              animation loader 0.3s .5s infinite alternate-reverse linear
          .cart-list
            margin 0
            padding 0
            list-style-type none
          .cart-total
            padding 15px 20px
            background #fafafa
          .msg
            padding 20px 0 20px
        .cart-menu .loading,.msg
          text-align center
          margin 20px 20px
          padding 20px 0 20px
      @keyframes loader
        0%
          transform scaleY(0.5)
          opacity 0.2
        100%
          transform scale(1)
          opacity 1

    .topbar-info
      position relative
      float right
      height 40px
      line-height 40px
      a
        color $font_color
        line-height 40px
        display inline-block
      .title:hover
        color #fff
      .link
        padding 0 5px
        text-align center
      .sep
        margin 0
        color $bg_color
      .message
        padding 0 10px
      .user
        float left
        position relative
        width 110px
        padding 0
        white-space nowrap
        .user-name
          position relative
          z-index 5
          display block
          width 110px
          height 40px
          text-align center
          .name
            display inline-block
            width auto
            max-width 75px
            text-overflow ellipsis
            vertical-align text-bottom
            overflow hidden
          .iconfont
            font-size 24px
            line-height 24px
            vertical-align 9px
        .user-menu-wrapper
          position absolute
          left 0
          top 40px
          z-index 3
          height 0
          overflow hidden
          -webkit-transition height .3s
          transition height .3s
          background #fff
          -webkit-box-shadow 0 2px 10px rgba(0,0,0,.15)
          box-shadow 0 2px 10px rgba(0,0,0,.15)
          .user-menu
            width 110px
            margin 0
            padding 7px 0
            list-style-type none
            a
              display block
              padding 3px 30px
              line-height 2
      .user-active
        a
          color #424242
          &:hover
            color $hover_color
        .user-name
          background #fff
        .user-menu-wrapper
          .user-menu
            display block
            a
              -webkit-transition all .2s
              transition all .2s
              &:hover
                background-color #f5f5f5
</style>
