<template>
  <div class="site-header">
    <div class="container">
      <div class="header-logo">
        <router-link class="logo ir" to="/" title="小米官网">小米官网</router-link>
      </div>
      <div class="header-nav">
        <ul class="nav-list clearfix">
          <li class="nav-category" @mouseleave="donotshowleftnav">
            <router-link class="link-category" to="/" @mouseover.native="showleftnav" >
              <span class="text" v-show="isShowAllGoods">全部商品分类</span>
            </router-link>
            <div class="site-category" style="display: block" v-show="isShowLeftNavs">
              <ul class="site-category-list clearfix" :class="{'site-category-list-custom': !isShowAllGoods}">
                <li class="category-item"
                  :class="isShowLeftNav == item.id ? 'category-item-active' : ''"
                  v-for="(item, id) in leftNav" :key="id"
                  @mouseenter="enterLeftNav(item.id)" @mouseleave="leaveLeftNav(item.id)"
                  >
                  <router-link to="/" class="title">{{item.name}}
                    <i class="iconfont icon-jiantou"></i>
                  </router-link>
                  <div class="children clearfix " :class="`children-col-${Object.keys(item.list[0]).length}`">
                    <ul class="children-list children-list-col children-list-col-1" v-if="item.list.length && item.list[0].col1">
                      <li v-for="(list, index) in item.list[0].col1" :key="index">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                    <ul class="children-list children-list-col children-list-col-2" v-if="item.list.length && item.list[0].col2">
                      <li v-for="(list, index) in item.list[0].col2" :key="index">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                    <ul class="children-list children-list-col children-list-col-3" v-if="item.list.length && item.list[0].col3">
                      <li v-for="(list, index) in item.list[0].col3" :key="index">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                    <ul class="children-list children-list-col children-list-col-4" v-if="item.list.length && item.list[0].col4">
                      <li v-for="(list, index) in item.list[0].col4" :key="index">
                        <router-link to="/" class="link clearfix">
                          <img :src="list.img" alt="" width="40" height="40" class="thumb"/>
                          <span class="text">{{list.title}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <!-- 头部导航 -->
          <li class="nav-item"  
            :class="{'nav-item-active': isEnterNav == index}" 
            :data-index="nav.id"
            v-for="(nav, index) in topNav" :key="index"
            @mouseenter="enterNav(nav.id)"
            @mouseleave="leaveNav(nav.id)">
            <router-link to="/" class="link">
              <span class="text">{{nav.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="header-search">
        <form action="" class="search-form clearfix" method="get">
          <input type="search" class="search-text"/>
          <input type="submit" class="search-btn iconfont" value=""/>
          <div class="search-hot-words" @click="isShowSearch" :class="{ 'fade-out': isSearch, 'fade-in': !isSearch}">
            <router-link to="">小米9 Pro 5G</router-link>
            <router-link to="">Redmi Note 8</router-link>
          </div>
        </form>
      </div>
    </div>
    <!-- 顶部导航栏的内容 -->
    <div class="header-nav-menu"
      :class="{'slide-down': isShowNav == index, 'header-nav-menu-active': isShowNav == index}"
      v-for="(item, index) in topNav" :key="index"
      v-show="item.list"
      @mouseenter="enterNav(item.id)" 
      @mouseleave="leaveNav(item.id)"
      >
      <div class="container">
        <ul class="children-list clearfix" v-if="topNav.length">
          <li class="first"  v-for="(list, index) in item.list" :key="index">
            <router-link to="/">
              <div class="figure figure-thumb">
                <img :src="list.img" alt="" width="160" height="110">
              </div>
              <div class="title">{{list.title}}</div>
              <p class="price">{{list.price}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isEnterNav: 11,
      showAll: true,
      isSearch: false,
      leftNav: [],
      // isShowLeftNav: [
      //   false, false, false, false, false, false, false, false, false, false
      // ],
      isShowLeftNav: 11,
      topNav: [],
      // isShowNav: [
      //   false, true, false, false, false, false, false
      // ]
      isShowNav: 11
    }
  },
  computed: {
    ...mapGetters([
      'isShowAllGoods',
      'isShowLeftNavs'
    ])
  },
  methods: {
    enterNav (a) {
      this.isEnterNav = a
      this.isShowNav = a
      // this.isEnterNav2 = this.isEnterNav1
    //   // let isEnterNav = this.isEnterNav.slice(0)
    //   // let isShowNav = this.isShowNav.slice(0)

    //   this.isEnterNav[index] = true
    //   // this.isEnterNav = isEnterNav
    //   // this.isEnterNav[index] = true
    //   if (index < 7) {
    //     this.isShowNav[index] = true
    //     // this.isShowNav = isShowNav
    //     // this.isShowNav[index] = true
    //     console.log(index, 'enter')
    //     this.index = event.target.dataset.index
    //   }
    //   // console.log(index)
    },
    leaveNav (a) {
      this.isEnterNav = 11
      this.isShowNav = 11

      // this.isEnterNav2 = this.isEnterNav1
    //   this.num = index
    //   console.log('leaveNav', index)
    //   // let isEnterNav = this.isEnterNav.slice(0)
    //   this.isEnterNav[index] = false
    //   // this.isEnterNav = isEnterNav
    //   // index = event.target.dataset.index
    //   if (index < 7) {
    //     let isShowNav = this.isShowNav
    //     this.isShowNav[index] = false
    //     this.isShowNav = isShowNav
    //     // this.index = event.target.dataset.index
    //   }
    },
    isShowSearch () {
      this.isSearch = true
    },
    enterLeftNav (b) {
      this.isShowLeftNav = b
    },
    leaveLeftNav (b) {
      this.isShowLeftNav = 11
    },
    showleftnav () {
      this.$store.dispatch('setShowLeftNavs', true)
    },
    donotshowleftnav () {
      this.$emit('donotshow') // 抛出方法donotshow，组件组接收
    }
  },
  created () {
    this.$nextTick(() => {
      this.$http.get('http://localhost:8080/static/leftNav.json').then((res) => {
        console.log(res)
        this.leftNav = res.data.nav
      })
      this.$http.get('http://localhost:8080/static/topNav.json').then(res => {
        this.topNav = res.data.topNav
      })
    })
  }
}
</script>

<style scoped lang="stylus">
.site-header
  z-index: 20;
  height: 100px
  .container
    position relative
    .header-logo
      float left
      width 62px
      margin-top 22px
      .logo
        position relative
        display block
        width 55px
        height 55px
        overflow hidden
        background-color $hover_color
        &::before
          background url('https://s02.mifile.cn/assets/static/image/mi-logo.png') no-repeat 50% 50%
          opacity 1
          transform translate(0, 0)
        &::after
          background url('https://s02.mifile.cn/assets/static/image/mi-home.png') no-repeat 50% 50%
          opacity 0
          margin-left -55px
          transform translate(0, 0)
        &:hover::before
          opacity 0
          transform translateX(55px)
        &:hover::after
          opacity 1
          transform translateX(55px)
        &:active::after
          transform scale(.9)
      .logo::before, .logo::after
        position absolute
        left 0
        top 0
        z-index 1
        width 55px
        height 55px
        content ''
        transform-origin 50% 50%
        transition all .2s
        transform: translateZ(0)
    .header-nav
      float left
      width 850px
      .nav-list
        position relative
        z-index 10
        float left
        width 1100px
        height 88px
        margin 0
        padding 12px 0 0 30px
        font-size 16px
        .nav-category
          position relative
          float left
          width 127px
          padding 0 15px 12px 0
          .link-category
            display inline-block
            padding 26px 0 38px
            text-align right
            color #333333
          .site-category
            // display none
            position absolute
            top 88px
            left -92px
            z-index: 21
            width 234px
            height 460px
            font-size 14px
            .site-category-list
              height 418px
              margin 0
              padding 20px 0
              list-style-type none
              border 1px solid $hover_color
              color $bg_color
              background #fff
              .category-item
                .title
                  position relative
                  display block
                  padding-left 30px
                  height 42px
                  line-height 42px
                  color $bg_color
                  i[class*=iconfont]
                    position absolute
                    top 12px
                    right 20px
                    font-size 16px
                    line-height 16px
                    color $border_color
                .children-col-1
                  width 248px
                  background #fff
                .children-col-2
                  width 496px
                  background #fff
                .children-col-3
                  width 744px
                  background #fff
                .children-col-4
                  width 992px
                  background #fff
                .children
                  display none
                  position absolute
                  left 234px
                  top 0
                  z-index 24
                  height 458px
                  border 1px solid $border_color
                  border-left 0
                  box-shadow 0 8px 16px rgba(0,0,0,.18)
                  .children-list
                    height 458px
                    margin 0
                    padding 2px 0
                    list-style-type none
                  .children-list-col
                    float left
                    width 248px
                    li
                      position relative
                      float left
                      width 265px
                      height 76px
                      .link
                        display block
                        padding 18px 20px
                        line-height 40px
                        color #333
                        transition color .2s
                        &:hover
                          color $hover_color
                        .thumb
                          float left
                          margin-right 12px
                          vertical-align middle
                        .text
                          float left
                          width 172px
                          line-height 40px
                          white-space nowrap
                          text-overflow ellipsis
                          overflow hidden
              .category-item-active .title
                background $hover_color
                color: #fff
              .category-item-active i[class*=iconfont]
                color #fff
                color hsla(0,0%,100%,.5)
              .category-item-active .children
                display block
            .site-category-list-custom
              height 420px
              border 0
              color #ffffff
              background rgba(105,101,101,0.6)
              
        .nav-item
          float left
          .link
            display block
            padding 26px 10px 38px
            color #333333
            transition color 0.2s
        .nav-item-active
          position relative
          &::after
            position absolute
            top 50px
            left 50%
            width 600px
            height 40px
            margin-left -300px
            content ''
            background-color rgba(0,0,0,0)
        .nav-item-active .link
          color $hover_color
        .nav-item .link:focus
          outline 0
    .header-search
      float right
      width 296px
      margin-top 25px
      .search-form
        position relative
        width 296px
        height 50px
        z-index 20
        .search-form:hover .search-btn,.search-form:hover .search-text
          border-color $font_color
        .search-form-focus .search-btn,.search-form-focus .search-text,.search-form-focus:hover .search-btn,.site-header .search-form-focus:hover .search-text,.search-form:hover .search-btn:hover
          border-color $hover_color
        .search-text
          right 51px
          z-index 1
          width 223px
          height 48px
          padding 0 10px
          font-size 14px
          line-height 48px
        .search-btn
          right 0
          z-index 2
          width 52px
          height 50px
          font-size 24px
          line-height 24px
          background #fff
          color #616161
          &:hover
            background $hover_color
            color #ffffff
        .search-btn,.search-text
          position absolute
          top 0
          border 1px solid $border_color
          outline 0
          transition all .2s
        .search-hot-words
          position absolute
          top 14px
          right 62px
          z-index 2
          text-align right
          transition opacity 0.2s
        .search-hot-words.fade-out
            opacity 0
        .search-hot-words.fade-in
            opacity 1
          a
            display inline-block
            margin-left 5px
            padding 0 5px
            font-size 12px
            background #eee
            color #757575
            transition all .2s
            &:hover
              background $hover_color
              color #ffffff
  .header-nav-menu
    position absolute
    top 140px
    left 0
    z-index 24
    width 100%
    height 0
    background #fff
    overflow hidden
    transition: height .3s, box-shadow .2s;
    transition: box-shadow .2s, height .3s;
    transition: box-shadow .2s, height .3s, box-shadow .2s
    li
      position: relative
      float left
      width 180px
      padding 35px 12px 0
      text-align center
      &::before
        position absolute
        left 0
        top 35px
        z-index 1
        width 1px
        height 100px
        content ''
        background-color $border_color
      .title
        margin 0
        line-height 20px
        color #333
      .price
        margin 0
        line-height 20px
        color $hover_color
  .header-nav-menu.slide-down
    height: 219px
  .header-nav-menu-active
    display block
    border-bottom 1px solid\9
    border-top 1px solid $border_color
    box-shadow 0 3px 4px rgba(0, 0, 0, 0.18)
    .container
      .children-list
        margin 0
        padding 0
        list-style-type none
        font-size 12px             
      .children-list .first::before
        display none
          .figure-thumb
            width 160px
            height 110px
            margin 0 auto 16px
            text-align center
            img
              width 160px
              height 110px
</style>
