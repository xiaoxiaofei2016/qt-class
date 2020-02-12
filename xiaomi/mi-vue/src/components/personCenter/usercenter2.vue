<template>
  <div class="uc-box uc-main-box">
    <div class="uc-content-box order-list-box">
      <div class="box-hd">
        <h1 class="title">
          我的订单
          <small>
            请谨防钓鱼链接或诈骗电话，
            <router-link to="">了解更多></router-link>
          </small>
        </h1>
        <div class="more clearfix">
          <ul class="filter-list">
            <li :class="{'active': currentIndex == index}" v-for="(item, index) in nav" :key="index">
              <router-link to="" @click.native="selectnav(index)">{{item}}</router-link>
            </li>
          </ul>
          <form id="J_orderSearchForm" class="search-form clearfix" action="#" method="get">
            <label for="search" class="hide">站内搜索</label>
            <input
              class="search-text"
              type="search"
              id="J_orderSearchKeywords"
              name="keywords"
              autocomplete="off"
              placeholder="输入商品名称、商品编号、订单号"
            />
            <input type="submit" class="search-btn iconfont" value="" />
          </form>
        </div>
      </div>
      <div class="box-bd">
        <div>
          <p class="empty">当前没有交易订单。</p>
        </div>
        <div id="J_orderListPages"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: ['全部有效订单', '待支付', '待收货', '订单回收站'],
      currentIndex: 0
    }
  },
  methods: {
    selectnav (index) {
      this.currentIndex = index
    }
  }
};
</script>

<style scoped lang="stylus">
.uc-box
  background #fff
.uc-main-box
  padding 36px 0
  .uc-content-box
    margin 0 48px
    .box-hd
      .title
        margin 0
        font-size 30px
        font-weight 400
        line-height 68px
        color #757575
        small
          margin-left 10px
          font-size 12px
          line-height 1.5
          a
            color #757575
            &:hover
              text-decoration underline
      .more
        border-bottom 0
        .filter-list
          float left
          margin 0
          padding 18px 0
          list-style-type none
          font-size 16px
          line-height 1.25
          li
            float left
            padding 0 20px
            border-left 1px solid #e0e0e0
            color #757575
            &:nth-child(1)
              border-left 0
              padding-left 0
            &:hover
              color #333
          a
            color #757575
            &:hover
              color #333
          .active
            color #ff6700
            a
              color #ff6700
        .search-form
          float right
          position relative
          width 262px
          height 40px
          margin-top 8px
          &:hover .search-text
            border-color #b0b0b0
          &:hover .search-btn
            border-color #b0b0b0
            &:hover
              border-color #ff6700
          .search-text
            position absolute
            top 0
            right 41px
            z-index 1
            width 189px
            height 40px
            padding 0 15px
            border 1px solid #e0e0e0
            font-size 12px
            line-height 40px
            outline 0
            color #757575
            -webkit-transition all .2s
            transition all .2s
          .search-btn
            position absolute
            right 0
            top 0
            z-index 2
            width 42px
            height 42px
            border 1px solid #e0e0e0
            font-size 24px
            line-height 24px
            background #fff
            color #616161
            outline 0
            -webkit-transition all .2s
            transition all .2s
            &:hover
              background #ff6700
              color #fff
    .box-bd
      .empty
        margin 40px 0
        font-size 18px
        text-align center
        color #b0b0b0
</style>
