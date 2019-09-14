<template>
  <div class="rating">
    <div class="rating-content">
      <div class="overview">
        <div class="avg-rating">
          <h1 class="avg-rating-num">{{seller.score}}</h1>
          <div class="text">综合评分</div>
          <div class="compare">高于周边商家{{seller.rankRate}}%</div>
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
            <span class="score">{{seller.serviceScore}}</span>
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
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="deliveryTime">
            <span class="text">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type">
          <div class="block positive" @click="all">
            全部
            <span class="count">{{seller.ratingCount}}</span>
          </div>
          <div class="block positive" @click="positive"> 
            满意
            <span class="count">{{goodscore}}</span>
          </div>
          <div class="block negative" @click="negative">
            不满意
            <span class="count">{{seller.ratingCount-goodscore}}</span>
          </div>
        </div>
        <div class="switch on">
          <span class="icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(item, index) in ratings" :key="index">
            <div class="avatar">
              <img :src="item.avatar" alt="" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{item.username}}</h1>
              <div class="star-wrapper">
                <div class="star star-24" >
                  <span class="star-item " ref="star24" @star24="star24"></span>
                  <span class="star-item " ></span>
                  <span class="star-item " ></span>
                  <span class="star-item " ></span>
                  <span class="star-item " ></span>
                </div>
                <span class="delivery">{{item.deliveryTime}}</span>
              </div>
              <p class="text">{{item.text}}</p>
              <div class="recommend" v-if="item.recommend">
                <span :class="{'icon-thumb_up': item.recommend}"></span>
                <span class="item" v-for="(foods, index) in item.recommend" :key="index">{{item.recommend[index]}}</span>
              </div>
              <div class="time">{{item.rateTime}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: [],
      goodscore: 0
    }
  },
  computed: {
    
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
    .then(res => {
      console.log(res)
      if (res.data.errno === 0) {
        this.ratings = res.data.data
        this.$nextTick(() => {
          this.goodScore()
          this.star24()
        })
      }
    })
  },
  methods: {
    goodScore () {
      for (let i = 0;i < this.ratings.length; i++) {
        if (this.ratings[i].score >=4 ) {
          this.goodscore++
        }
      }
      console.log(this.goodscore)
      return this.goodscore
    },
    star24 () {
      let star24 = this.$refs.star24
      console.log(star24)
    },
    all () {
      for (let i = 0; i < this.ratings; i ++) {

      }
    },
    positive () {

    },
    negative () {

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
              background-image url('')
              &.on
                background-image url('')
              // &.off
              //   background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568179465508&di=92f336fc12e5a88cecfddfdb189a5857&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F35%2F49%2F32573be6dddd5cb.jpg')
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
              &.on
                background-image url('./starw16.png')
              &.off
                background-image url('./stary16.png')
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
