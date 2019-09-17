<template>
  <div class="child3">
    <p @click="change">{{msg}}</p>
  </div>
</template>

<script>
// import bus from '@/bus/index.js'
export default {
  data () {
    return {
      msg: '点击改变数据'
    }
  },
  created () {
    this.$bus.$on('toChild3', (param) => {
      console.log(param)
    })
  },
  methods: {
    change () {
      this.$emit('fromChild', this.msg)
    }
  }
}
</script>

<style scoped>

</style>
