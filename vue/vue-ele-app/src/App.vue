<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header // 重命名
  },
  created () {
    // this.$http.get('https://www.easy-mock.com/mock/5d6e06a56ebb2c4da999c45d/example/vue-element-app')
    this.$http.get('http://localhost:8080/static/seller.json')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixin.styl'
  .tab
    width 100%
    height 40px
    display flex
    // align-items center
    line-height 40px
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    &-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        text-decoration none
        color rgb(77, 85, 93)

        &.router-link-active
          color rgb(240, 20, 20)




</style>
