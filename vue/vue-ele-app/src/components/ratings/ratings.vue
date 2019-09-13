<template>
  <div class="rating">
    <div class="rating-content">
      <div class="overview">
        <div class="avg-rating">
          <h1 class="avg-rating-num">4.2</h1>
          <div class="text">综合评分</div>
          <div class="compare">高于周边商家69.2%</div>
        </div>
        <div class="allscore">
          <div class="serviceScore Score">
            <div class="text">服务态度</div>
            <div class="star star-36">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item off"></span>
            </div>
            <span class="score">4.1</span>
          </div>
          <div class="goodsScore Score">
            <div class="text">商品评分</div>
            <div class="star star-36">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item off"></span>
            </div>
            <span class="score">4.3</span>
          </div>
          <div class="deliveryTime">
            <span class="text">送达时间</span>
            <span class="time">38分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type">
          <div class="block positive" :class="{'active': active1 === true}" @click="act1" >
            全部
            <span class="count">24</span>
          </div>
          <div class="block positive" :class="{'active': active2 === true}" @click="act2" > 
            满意
            <span class="count">18</span>
          </div>
          <div class="block negative" :class="{'active': active3 === true}" @click="act3" >
            不满意
            <span class="count">6</span>
          </div>
        </div>
        <div class="switch on">
          <span class="icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item">
            <div class="avatar">
              <img src="" alt="" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                </div>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active1: false,
      active2: false,
      active3: false
    }
  },
  methods: {
    act1 () {
     this.active1 = !this.active1
     this.active2= false
     this.active3 = false
    },
    act2 () {
     this.active2 = !this.active2
     this.active1 = false
     this.active3 = false
    },
    act3 () {
      this.active3 = !this.active3
      this.active1 = false
      this.active2 = false
    }
  }

};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin'
.rating 
  width: 100%;
  position absolute
  top 174px
  bottom 0
  overflow hidden
  .rating-content
    .overview
      display flex
      padding 18px 0
      .avg-rating
        width 137px
        padding 6px 0
        flex 0 0 137px
        border-right 1px solid rgba(7,17,27,.1)
        text-align center
        .avg-rating-num
          font-size 24px
          color #FF9900
          margin-bottom 6px
          line-height 28px
        .text
          font-size 12px
          color #07111B
          margin-bottom 8px
          line-height 12px
        .compare
          font-size 12px
          line-height 12px
          color #C2C5C9
      .allscore
        width 137px
        padding 6px 0 6px 24px
        flex 1
        .Score
          margin-bottom 8px
          font-size 0
          .text
            display inline-block
            line-height 18px
            font-size 12px
            color #07111b
            vertical-align top
          .star
            margin 0 12px
            display inline-block
            vertical-align top
            .star-item
              display inline-block
              width 15px
              height 15px
              margin-right 6px
              background-size 15px 15px
              background-repeat no-repeat
              &.on
                background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568179318474&di=48030ee46d498c6118e947761f0c0714&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F15%2F20141015142052_aJUBr.png')
              &.off
                background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568179465508&di=92f336fc12e5a88cecfddfdb189a5857&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F35%2F49%2F32573be6dddd5cb.jpg')
          .score
            display inline-block
            font-size 12px
            line-height 18px
            color #ff9900
            vertical-align top
        .deliveryTime
          font-size 0
          .text
            font-size 12px
            line-height 18px
            color #07111b
          .time
            font-size 12px
            line-height 18px
            color #93999f
            margin-left 12px
    
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1)
      background #f3f5f7
    .ratingselect
      width 100%
      .rating-type
        padding 18px 0
        margin 0 18px
        position relative
        font-size 0
        border-bottom 1px solid rgba(7,17,27,.1)
        .block
          display inline-block
          margin-right 8px
          padding 8px 12px
          font-size 12px
          line-height 16px
          border-radius 1px
          color #4D555D
          .count
            display inline-block
            margin-left 2px
            font-size 8px
        .positive
          background #CCECF8
        .negative
          background #DBDDDF
        .positive.active
          background #00a0dc
          color #ffffff
        .negative.active
          background #4D555D
          color #ffffff
      .switch
        padding 12px 18px
        line-height 24px
        border-bottom 1px solid rgba(7,17,27,.1)    
        color #93999f
        font-size 0
        .icon-check_circle
          color #00c850
          display inline-block
          vertical-align top
          margin-right 4px
          font-size 24px
        .text
          display inline-block
          vertical-align top
          font-size 12px

    .rating-wrapper
      padding 0 18px
      .rating-item
        padding 18px 0
        display flex
        position relative
        .avatar
          flex 0 0 28px
          width 28px
          margin-right 12px
          img 
            border-radius 50%
        .content
          position relative
          flex 1
          h1
            margin-bottom 4px
            line-height 12px
            font-size 10px
            color #07111b
          .star-wrapper
            margin-bottom 6px
            font-size 0
            .star
              display inline-block
              margin-right 6px
              vertical-align top
              &-item 
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                background-repeat no-repeat
                display inline-block
          .text
            margin-bottom 8px
            line-height 18px
            color #07111b
            font-size 12px
          .recommend
            line-height 16px
            font-size 0
            .icon-thumb_up
              color #00a0dc
              display inline-block
              margin 0 8px 4px 0
              font-size 9px
            .item
              padding 0 6px
              border 1px solid rgba(7,17,27,.1)
              border-radius 1px
              color #93999f
              background #fff
              display inline-block
              margin 0 8px 4px 0
              font-size 9px
          .time
            position absolute
            top 0
            right 0
            line-height 12px
            font-size 10px
            color #93999f

</style>
