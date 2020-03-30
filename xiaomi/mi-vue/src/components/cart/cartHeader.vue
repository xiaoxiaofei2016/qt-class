<template>
  <div class="site-header site-mini-header">
    <div class="container">
      <div class="header-logo">
        <router-link to="" class="logo ir">小米官网</router-link>
      </div>
      <div class="header-title has-more">
        <h2>{{title}}</h2>
        <p v-if="cart.length">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
      </div>
      <div class="topbar-info" v-if="loginStatus == false">
        <router-link class="link" to="/Login">登录</router-link>
        <span class="sep">|</span>
        <router-link class="link" to="/Register">注册</router-link>
      </div>
      <div class="topbar-info" v-else>
        <span class="user" @mouseenter="showUser" @mouseleave="leaveUser" :class="{'user-active': showUserInfo}">
          <router-link to="" class="user-name">
            <span class="name">{{nickname}}</span>
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
        <router-link :to="{name: 'usercenter1', query: {title: '我的订单'}, params: {id: 1}}" class="link link-order title">我的订单</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  inject: ['reload'],
  computed: {
    ...mapGetters([
      'loginStatus', 'cart'
    ]),
    nickname() {
      return this.userInfo.nickname
    },
    userId() {
      return this.userInfo.userId
    }
  },
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      user: [
        '个人中心', '评价晒单', '我的喜欢'
      ],
      Id: ['6', '3', '12'],
      showUserInfo: false,
      userInfo: {
        nickname: '',
        userId: ''
      }
    }
  },
  created() {
    if (this.loginStatus == true) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods: {
    toUser (index) {
      this.reload()
    },
    ...mapMutations(['loselogin']),
    loseLogin () {
      this.loselogin()
      // this.$store.dispatch('setIsLogin', false)
      this.$router.push({ path: '/' })
      localStorage.removeItem('userInfo')
      this.reload()
    },
    showUser () {
      this.showUserInfo = true
    },
    leaveUser () {
      this.showUserInfo = false
    }
  },
}
</script>

<style scoped lang="stylus">
.site-header
  position: relative;
  z-index: 20;
  height: 100px;
.site-mini-header
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
  .container
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    position relative;
    .header-logo
      width: 93px;
      margin-top: 26px;
      float left
      .logo
        position relative
        display block
        width 48px
        height 48px
        overflow hidden
        background-color $hover_color
        &::before
          background url('https://s02.mifile.cn/assets/static/image/mi-logo.png') no-repeat 50% 50%
          opacity 1
          transform translate(0, 0)
        &::after
          background url('https://s02.mifile.cn/assets/static/image/mi-home.png') no-repeat 50% 50%
          opacity 0
          margin-left -48px
          transform translate(0, 0)
        &:hover::before
          opacity 0
          transform translateX(48px)
        &:hover::after
          opacity 1
          transform translateX(48px)
        &:active::after
          transform scale(.9)
      .logo::before, .logo::after
        position absolute
        left 0
        top 0
        z-index 1
        width 48px
        height 48px
        content ''
        transform-origin 50% 50%
        transition all .2s
        transform: translateZ(0)
    .header-title
      float: left;
      margin-top: 26px;
      h2
        float left
        font-size: 28px;
        line-height: 48px;
        font-weight: normal;
        color: #424242;
    .has-more
      height 48px
      p
        float: left;
        height: 20px;
        line-height: 20px;
        margin-top: 20px;
        margin-left: 15px;
        color: #757575;
    .topbar-info
      margin-top 30px
      line-height 40px
      position relative
      float right
      height 40px
      .link
        padding 0 5px
        float left
        color #757575
      .sep
        color #e0e0e0
        float left
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
