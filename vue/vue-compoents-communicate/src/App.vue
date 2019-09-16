<template>
  <div id="child1">
    <child1 :msg="msg" :msg2="msg2" :fn="appFn" v-bind="test" :count="count" @addCount="add1" :add="add1"></child1>
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
export default {
  name: 'App',
  components: {
    child1
  },
  data () {
    return {
      msg: '给child1的礼物',
      msg2: '再次给child1的礼物',
      test: {
        a: 1,
        b: 2
      },
      count: 1
    }
  },
  methods: {
    appFn () {
      console.log('我是app.vue的方法')
    },
    add1 () {
      this.count++
    }
  }
}
</script>

<style>

</style>
