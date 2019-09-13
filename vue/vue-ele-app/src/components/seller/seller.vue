<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">粥品香坊(回龙观)</h1>
        <div class="desc">
          <div class="star star-36">
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item off"></span>
          </div>
          <span class="text">(24)</span>
          <span class="text">月售90单</span>
        </div>
        <div class="remark">
          <div class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">20</span>
              元
            </div>
          </div>
          <div class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">4</span>
              元
            </div>
          </div>
          <div class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">38</span>
              分钟
            </div>
          </div>
        </div>
        <div class="favorite">
          <span class="icon-favorite"></span>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title"></h1>
        <div class="content-wrapper">
          <p class="content"></p>
        </div>
        <ul class="supports">
          <li class="support-item">
            <span class="icon decrease"></span>
            <span class="text">在线满减</span>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item">
              <img src="" alt="" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title"></h1>
        <ul>
          <li class="info-item">该商家</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          position relative
          font-size 0
          .icon
            display inline-block
            width 16px
            height 16px
            vertical-align top
            margin-right 6px
            background-size 16px 16px
            background-repeat no-repeat
          .text
            line-height 16px
            font-size 12px
            color #07111b

    .pics
      padding 18px
      h1
        margin-bottom 12px
        line-height 14px
        color #07111b
        font-size 14px
      .pic-wrapper
        width 100%
        overflow hidden
        white-space nowrap
        .pic-list
          font-size 0
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
        .info-item
          padding 16px 12px
          line-height 16px
          position relative
          font-size 12px

</style>
