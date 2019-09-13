<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" :key="index" class="menu-item" @click="selectMenu(index, $event)" :class="{'current': currentIndex === index}">
            <span class="text border-1px">
              <span class="icon" :class="classMap[item.type]" v-if="item.type > 0"></span>
              <!-- item.type第一项为-1，数组下标不能为负数，所以用v-if判断一下 -->
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="food-list" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="(food, index) in item.foods" :key="index" class="food-item border-1px">
                <div class="icon">
                  <img :src="food.icon" alt="" width="57" height="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span class="count">好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <div class="now">￥{{food.price}}</div>
                    <div class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</div>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food" @add="addFood"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 购物车 -->
      <shopcart :selectFoods="selectfoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import cartcontrol from '@/components/cartcontrol/cartcontrol'
import shopcart from '@/components/shopcart/shopcart'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      classMap: [],
      listHeight: [],
      scrollY: 0
    }
  },
  components: {
    cartcontrol,
    shopcart
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

    this.$http.get('http://localhost:8080/static/goods.json')
    .then(res => {
      console.log(res)
      if (res.data.errno === 0) {
        this.goods = res.data.data
        this.$nextTick(() => { // 页面渲染完成才会执行 vue内置方法
          this._initScroll()
          this._caculateHeight()
        })
      }
    })
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i] //前一个li的高度
        let height2 = this.listHeight[i+1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectfoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new Bscroll(this.$refs.menuWrapper, {click: true})
      this.foodsScroll = new Bscroll(this.$refs.foodsWrapper, {click: true, probeType: 3})
      //当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
      this.foodsScroll.on('scroll', pos => {
        console.log(pos)
        this.scrollY = Math.abs(Math.round(pos.y)) //绝对值并取整
      })
    },
    selectMenu (index, event) {
      console.log(event)
      // this.currentIndex = index
      let foodList = this.$refs.foodList // 数组
      let el = foodList[index] // 左边菜单和右边对应
      this.foodsScroll.scrollToElement(el, 300) // 点击左边菜单右边实现跳转相应的商品，300毫秒跳转时间
    },
    _caculateHeight() {
      let foodList = this.$refs.foodList //数组
      let height = 0
      this.listHeight.push(height) // 热销榜不需要滚动
      for (let i = 0; i < foodList.length; i++) { //长度为9
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    addFood () {
      // console.log(123)

    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin'
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
      .text
        // border-none()
        display table-cell
        width 56px
        vertical-align middle
        
        font-size 12px
      .border-1px
        border-1px(rgba(7,17,27,0.1))
        .icon
          display inline-block
          vertical-align top 
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease {
            bg-image('decrease_3');
          }

          &.discount {
            bg-image('discount_3');
          }

          &.guarantee {
            bg-image('guarantee_3');
          }

          &.invoice {
            bg-image('invoice_3');
          }

          &.special {
            bg-image('special_3');
          }
  
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0

      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc,.extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px

</style>
