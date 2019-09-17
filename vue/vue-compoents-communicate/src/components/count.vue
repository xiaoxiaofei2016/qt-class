<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <!-- 取仓库里的数据 -->
    <button @click="$store.commit('add')">+</button>
    <!-- 取用仓库里的方法 -->
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  store
}
</script>

<style scoped>

</style>
