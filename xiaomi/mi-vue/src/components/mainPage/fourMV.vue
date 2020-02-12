<template>
  <div class="home-video-box xm-plain-box">
    <div class="box-hd">
      <h2 class="title">视频</h2>
      <div class="more">
        <router-link to="" class="more-link">查看全部
          <i class="iconfont icon-jiantouyou"></i>
        </router-link>
      </div>
    </div>
    <div class="box-bd clearfix">
      <ul class="video-list clearfix">
        <li class="video-item" v-for="(item, index) in mv" :key="index" @click="showMv(item.id)">
          <router-link to="">
            <div class="figure figure-img">
              <img :src="item.img" alt="" width="296" height="180">
              <span class="play">
                <i class="iconfont icon-play"></i>
              </span>
            </div>
            <h3 class="title">{{item.title}}</h3>
            <p class="desc">{{item.desc}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSelect: 1,
      mv: [
        {
          id: 0,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4004fc968de331f702585d58b15aba2.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: '小米MIX Alpha 开箱视频',
          desc: ''
        },
        {
          id: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/395fdedf0f40206032397e33beed756e.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: '小米5G新品手机发布会',
          desc: ''
        },
        {
          id: 2,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a134c9f8fffb85a47ac397e7eeba7e8.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: ' Redmi Note 8 系列发布会',
          desc: ''
        },
        {
          id: 3,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1541da85ac8b204056374641eee24726.jpg?thumb=1&w=370&h=225&f=webp&q=90',
          title: '小米CC9',
          desc: '深蓝星球'
        }
      ]
    }
  },
  // provide () {
  //   return {
  //     id: this.isSelect
  //   }
  // },
  methods: {
    showMv (index) {
      this.isSelect = index
      this.$store.dispatch('setShowVideo', true)
      this.$store.dispatch('setId', index)
      this.$store.dispatch('setShowMask', true)
      // console.log(index, '点击的视频')
      return this.isSelect
    }
  }
}
</script>

<style scoped lang="stylus">
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
        &:hover
          color $hover_color
        &:hover .iconfont
          background $hover_color
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
.home-video-box
  .video-list
    width 1240px
    height 285px
    margin 0
    padding 0
    list-style-type none
    .video-item
      position relative
      float left
      width 296px
      height 285px
      margin-left 14px
      margin-bottom 14px
      text-align center
      background #fff
      -webkit-transition all .2s linear
      transition all .2s linear
      &:first-child
        margin-left 0
      &:hover
        z-index 2
        -webkit-box-shadow 0 15px 30px rgba(0,0,0,.1)
        box-shadow 0 15px 30px rgba(0,0,0,.1)
        -webkit-transform translate3d(0,-2px,0)
        transform translate3d(0,-2px,0)
      .figure-img
        position relative
        width 296px
        height 180px
        margin 0 0 28px
        &:hover .play
          background-color $hover_color
          background-color $hover_color
        img
          width 296px
          height 180px
        .play
          position absolute
          left 20px
          bottom 10px
          width 32px
          height 20px
          border 2px solid #fff
          border-radius 12px
          background-color $bg_color
          background-color rgba(0,0,0,.6)
          color #fff
          -webkit-transition all .2s
          transition all .2s
          overflow hidden
          i
            font-size 30px
            line-height 20px
      .title
        margin 0 14px 6px
        font-size 14px
        font-weight 400
        text-align center
        color #333
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
      .desc
        height 18px
        margin 0 14px
        font-size 12px
        color $font_color
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
</style>
