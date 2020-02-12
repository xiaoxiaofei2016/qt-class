<template>
  <div>
    <div class="breadcrumbs">
      <div class="container">
        <router-link to="/">首页</router-link>
        <span class="sep">></span>
        <span>我的订单</span>
      </div>
    </div>
    <div class="page-main user-main">
      <div class="container">
        <div class="row">
          <div class="span4">
            <v-userleft></v-userleft>
          </div>
          <div class="span16">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import usercenter from './usercenter.vue'
import userleft from './userleft.vue'
export default {
  components: {
    // 'v-usercenter': usercenter,
    'v-userleft': userleft
  }
}
</script>

<style scoped lang="stylus">
.breadcrumbs
  height 40px
  font-size 12px
  line-height 40px
  background #f5f5f5
  color #616161
  a
    color #757575
    &:hover
      color #424242
  .sep
    margin 0 0.5em
    color #b0b0b0
.page-main
  background #f5f5f5
.user-main
  padding-bottom 40px
</style>
