<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <div class="star star-36">
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item off"></span>
          </div>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <div class="remark">
          <div class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>
              元
            </div>
          </div>
          <div class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>
              元
            </div>
          </div>
          <div class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>
              分钟
            </div>
          </div>
        </div>
        <div class="favorite" @click="search" >
          <span class="icon-favorite" :class="{'active': shoucang === true}"></span>
          <span class="text" ref="text">收藏</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports" v-if="seller.supports">
          <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
            <span class="icon" :class="classMap[seller.supports[index].type]"></span>
            <span class="text">{{seller.supports[index].description}}</span>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="(item, index) in seller.pics" :key="index">
              <img :src="seller.pics[index]" alt="" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(item, index) in seller.infos" :key="index">{{seller.infos[index]}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: [],
      shoucang: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    this.$nextTick(() => {
      // this.initScroll()
    })
  },
  methods: {
    // initScroll () {
    //   this.sellerScroll = new BScroll(this.$refs.seller, {
    //     click: true
    //   })
    // },
    search () {
      let text = this.$refs.text
      if (this.shoucang === false) {
        this.shoucang = true
        text.innerHTML = '已收藏'
      }else {
        this.shoucang = false
        text.innerHTML = '收藏'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin'
.seller
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .seller-content
    .overview
      position relative
      padding 18px
      .title
        margin-bottom 8px
        line-height 14px
        color #07111b
        font-size 14px
      .desc
        padding-bottom 18px
        position relative
        font-size 0
        border-bottom 1px solid rgba(7,17,27,.1)
        .star
          display inline-block
          margin-right 8px
          vertical-align top
          font-size 0
          .star-item 
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px
            display inline-block
            background-repeat no-repeat
        .text
          display inline-block
          margin-right 12px
          line-height 18px
          vertical-align top
          font-size 10px
          color #4d555d
      .remark
        display flex
        padding-top 18px
        .block
          flex 1
          text-align center
          border-right 1px solid rgba(7,17,27,.1)
          h2
            margin-bottom 4px
            line-height 10px
            font-size 10px
            color #93999f
          .content
            line-height 24px
            font-size 10px
            color #07111b
            .stress
              font-size 24px
      .favorite
        position absolute
        width 50px
        right 11px
        top 18px
        text-align center
        .icon-favorite
          display block
          margin-bottom 4px
          line-height 24px
          font-size 24px
          color #d4d6d9
          &.active
            color #f01414
        .text
          line-height 10px
          font-size 10px
          color #4d555d
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1) 
      background #f3f5f7 
    .bulletin
      padding 18px 18px 0
      h1
        margin-bottom 8px
        line-height 14px
        color #07111b
        font-size 14px
      .content-wrapper
        padding 0 12px 16px
        position relative
        border-bottom 1px solid rgba(7,17,27,.1)
        .content
          line-height 24px
          font-size 12px
          color #f01414
      .supports
        .support-item
          padding 16px 12px
          border-bottom 1px solid rgba(7,17,27,.1)
          font-size 0
          &:last-child
            margin-bottom 0
          .icon
            display inline-block
            width 16px
            height 16px
            vertical-align top
            margin-right 6px
            background-size 16px 16px
            background-repeat no-repeat

            &.decrease
              bg-image('decrease_2')

            &.discount
              bg-image('discount_2')

            &.guarantee
              bg-image('guarantee_2')

            &.invoice
              bg-image('invoice_2')

            &.special
              bg-image('special_2')

          .text
            font-size 12px
            line-height 16px

    .pics
      padding 18px
      h1
        margin-bottom 12px
        line-height 14px
        color #07111b
        font-size 14px
      .pic-wrapper

        .pic-list
          font-size 0
          white-space nowrap
          overflow-x scroll
          .pic-item
            display inline-block
            margin-right 6px
            width 120px
            height 90px

    .info
      padding 18px 18px 0
      color #07111b
      h1
        padding-bottom 12px
        line-height 14px
        position relative
        font-size 14px
        border-bottom 1px solid rgba(7,17,27,.1)
      ul
        .info-item
          padding 16px 12px
          line-height 16px
          position relative
          font-size 12px
          border-bottom 1px solid rgba(7,17,27,.1)

</style>
