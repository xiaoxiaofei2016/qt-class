<template>
  <div class="components-A">
    组件A{{app.user}}
    <comb :send="test"></comb>
  </div>
</template>

<script>
import comb from './b.vue'
export default {
  components: {
    comb
  },
  inject: ['app'],
  data () {
    return {
      test: '我是aaa'
    }
  },
  provide () {
    return {
      name: 'wn'
    }
  }
  
}
</script>

<style scoped>

</style>
