<template>
  <div class="rating" ref="ratings">
    <div class="rating-content" >
      <div class="overview">
        <div class="avg-rating">
          <h1 class="avg-rating-num">{{seller.score}}</h1>
          <div class="text">综合评分</div>
          <div class="compare">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="allscore">
          <div class="serviceScore Score">
            <div class="text">服务态度</div>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="goodsScore Score">
            <div class="text">商品评分</div>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="deliveryTime">
            <span class="text">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <RatingSelect :ratings="ratings" :isActive="isActive" :option="option" :seller="seller"></RatingSelect>
      <div class="rating-wrapper" >
        <ul>
          <li class="rating-item" @displayComm="data" v-for="(item, index) in displayComms" :key="index">
            <div class="avatar">
              <img :src="item.avatar" alt="" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{item.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="item.score"></star>
                <span class="delivery">{{item.deliveryTime}}</span>
              </div>
              <p class="text">{{item.text}}</p>
              <div class="recommend" v-if="item.recommend">
                <span :class="{'icon-thumb_up': item.recommend != ''}"></span>
                <span class="item" v-for="(foods, index) in item.recommend" :key="index">{{item.recommend[index]}}</span>
              </div>
              <div class="time">{{item.rateTime|time}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import star from '@/components/star/star'
import RatingSelect from '@/components/ratingSelect/ratingSelect'
export default {
  components: {
    star,
    RatingSelect
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: [],
      displayComms: [],
      option: false,
      isActive: 2
    }
  },  
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
    .then(res => {
      console.log(res)
      if (res.data.errno === 0) {
        this.ratings = res.data.data
        // this.displayComm = this.ratings
        this.$nextTick(() => {
          this.initScroll()
        })
      }
    })
  },
  filters: { //日期过滤器,将时间戳转换为标准格式
    time: function time (value) {
      let tm = new Date(value)
      var year = tm.getFullYear()
      var mouth = (tm.getMonth() + 1) > 9? tm.getMonth() + 1 : '0' + (tm.getMonth() + 1)
      var date = tm.getDate() > 9? tm.getDate() : '0' + tm.getDate()
      var hours = tm.getHours() > 9? tm.getHours() : '0' + tm.getHours()
      var minutes = tm.getMinutes() > 9? tm.getMinutes() : '0' + tm.getMinutes()
      return year + '-' + mouth + '-' + date + ' ' + hours + ':' + minutes
    }
  },
  methods: {
    initScroll () {
      this.commScroll = new BScroll(this.$refs.ratings, {
        click: true
      })
      // console.log(this.commScroll)
    },
    data (displayComm) {
      this.displayComms = displayComm
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin'
.rating 
  width 100%
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
            .delivery
              font-size 12px
            
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
