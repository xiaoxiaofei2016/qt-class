<template>
  <div class="home-brick-box home-brick-row-2-box xm-plain-box">
    <div class="box-hd">
      <h2 class="title">手机</h2>
      <div class="more">
        <router-link to="/" class="more-link">
        查看全部
          <i class="iconfont icon-jiantouyou"></i>
        </router-link>
      </div>
    </div>
    <div class="box-bd clearfix">
      <div class="row">
        <div class="span4">
          <ul class="brick-promo-list clearfix">
            <li class="brick-item brick-item-1">
              <router-link to="/">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90" alt=""/>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="span16">
          <ul class="brick-list clearfix">
            <li class="brick-item brick-item-m brick-item-m-2" v-for="(item, index) in nineImg" :key="index">
              <router-link to="">
                <div class="figure figure-img">
                  <img :src="item.imgUrl" alt="" width="160" height="160">
                </div>
                <h3 class="title">
                  {{item.title}}
                </h3>
                <p class="desc">{{item.desc}}</p>
                <p class="price">
                  <span class="num">{{item.newprice}}</span>
                  <del class v-show="item.oldprice">
                    <span class="num">{{item.oldprice}}</span>
                  </del>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nineImg: []
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/nineimg.json').then(res => {
      this.nineImg = res.data.nineImg
    })
  }
}
</script>

<style scoped lang="stylus">
.home-brick-box
  margin-bottom 8px
  .brick-promo-list
    height 614px
    margin 0
    padding 0
    list-style-type none
    margin 0 0 -14px -14px
    .brick-item
      position relative
      z-index 1
      float left
      width 234px
      height 614px
      margin-left 14px
      margin-bottom 14px
      background #fff
      -webkit-transition all .2s linear
      transition all .2s linear
      &:hover
        z-index 2
        -webkit-box-shadow 0 15px 30px rgba(0,0,0,.1)
        box-shadow 0 15px 30px rgba(0,0,0,.1)
        -webkit-transform translate3d(0,-2px,0)
        transform translate3d(0,-2px,0)
      a
        display block
        width 100%
        height 100%
        img
          width 234px
          height 614px
  .brick-list
    width 992px
    margin 0 0 -14px -14px
    height 614px
    // margin 0
    padding 0
    list-style-type none
    .brick-item
      position relative
      z-index 1
      float left
      width 234px
      height 614px
      margin-left 14px
      margin-bottom 14px
      background #fff
      -webkit-transition all .2s linear
      transition all .2s linear
      &:hover
        z-index 2
        -webkit-box-shadow 0 15px 30px rgba(0,0,0,.1)
        box-shadow 0 15px 30px rgba(0,0,0,.1)
        -webkit-transform translate3d(0,-2px,0)
        transform translate3d(0,-2px,0)
      .figure-img
        margin 0 auto 18px
    .brick-item-m-2
      height 260px
      padding 20px 0
      .figure-img,.figure-img img
        width 160px
        height 160px
      .title
        margin 0 10px 4px
        text-align center
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        color #333
        font-size 14px
        font-weight 400
      .price
        margin 0 10px 14px
        text-align center
        color $hover_color
        .num
          font-size 14px
        del
          margin-left 0.5em
          color $font_color
      .desc
        margin 0 10px 10px
        height 18px
        font-size 12px
        color $font_color
        text-align center
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
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
    .more
      position absolute
      top 0
      right 0
      .more-link
        font-size 16px
        line-height 58px
        color $bg_color
        -webkit-transition all .4s
        transition all .4s
        .iconfont
          width 12px
          height 12px
          padding 4px
          margin-left 8px
          border-radius 16px
          font-size 12px
          line-height 12px
          background $font_color
          color #fff
          vertical-align 1px
          -webkit-transition all .4s
          transition all .4s
        &:hover
          color $hover_color
        &:hover .iconfont
          background $hover_color
</style>
