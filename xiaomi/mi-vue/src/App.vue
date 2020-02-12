<template>
  <div id="app">
    <transition name="tab_router_view">
      <router-view v-if="isReloadAlive"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () { // 实现页面刷新
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isReloadAlive: true
    }
  },
  methods: {
    reload () {
      this.isReloadAlive = false
      this.$nextTick(() => {
        this.isReloadAlive = true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
// #app
//   height calc(100vh - 263px)

.tab_router_view-enter-active, .tab_router_view-leave-active
  /*opacity: 0;*/
  transition all .5s

.tab_router_view-enter, .tab_router_view-leave-to
  opacity 0

.tab_router_view-enter-to, .tab_router_view-leave
  opacity 1
</style>
