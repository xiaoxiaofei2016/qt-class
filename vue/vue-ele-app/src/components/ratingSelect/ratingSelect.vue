<template>
  <div>
    <div class="ratingselect">
        <div class="rating-type">
          <div class="block positive" :class="{'active': isActive === 2}" @click="all(2)">
            {{desc.all}}
            <span class="count">{{seller.ratingCount}}</span>
          </div>
          <div class="block positive" :class="{'active': isActive === 0}" @click="filterClick(0)"> 
            {{desc.positive}}
            <span class="count">{{goodscore}}</span>
          </div>
          <div class="block negative" :class="{'active': isActive === 1}" @click="filterClick(1)">
            {{desc.negative}}
            <span class="count">{{seller.ratingCount-goodscore}}</span>
          </div>
        </div>
        <div class="switch on" @click="content">
          <span class="icon-check_circle" :class="{'highlight': option}"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    ratings: {
      type: Array,
      default() {
        return []
      }
    },
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      desc: {
        all: '全部',
        positive: '满意',
        negative: '不满意'
      },
      option: false,
      isActive: 2,
      goodscore: 0,
      displayComm: []
    }
  },
  watch: {
    ratings: {
      handler(newValue, oldValue) {
        this.goodScore()
      },
      deep: true
    }
  },
  created () {
    this.goodScore()
    // console.log(this.ratings)
  },

  methods: {
    goodScore () {
      // console.log(this.ratings)
      for (let i = 0;i < this.ratings.length; i++) {
        if (this.ratings[i].score >=4 || this.ratings[i].rateType == 0) {
          this.goodscore++
        }
      }
      console.log(this.goodscore) // 18
      return this.goodscore
    },
    all (num) {
      this.displayComm = this.ratings 
      this.$emit('displayComm', this.displayComm)
      this.isActive = num // 通过改变isActive的值，从而实现类名active的添加或删除
    },
    filterClick (condition) {
      let retArr = []
      for (let rating of this.ratings) {
        if (condition === rating.rateType) {
          retArr.push(rating)
        }
      }
      this.displayComm = retArr
      this.$emit('displayComm', this.displayComm)
      this.isActive = condition // 通过改变condition的值改变isActive的值，从而实现类名active的添加或删除
    },
    content () {
      let retArr = []
      for (let rating of this.displayComm) {
        if (rating.text && rating.text !== '') {
          retArr.push(rating)
        }
      }
      this.option = !this.option
      if (this.option) {
        this.displayComm = retArr
      }else {
        this.displayComm = this.ratings
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixin.styl"
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
        .all
          background #CCECF8
        .positive
          background #CCECF8
        .negative
          background #DBDDDF
        .all.active
          background #00a0dc
          color #ffffff
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
          color #93999f
          display inline-block
          vertical-align top
          margin-right 4px
          font-size 24px
        .icon-check_circle.highlight
          color #00c850
        .text
          display inline-block
          vertical-align top
          font-size 12px
</style>
