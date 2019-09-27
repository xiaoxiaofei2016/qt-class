<template>
  <div id="app">
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <my-elrow tag="div">
      列
    </my-elrow>
  </div>
</template>

<script>
import ElRow from './components/El-Row'
export default {
  name: 'App',
  components: {
    'my-elrow': ElRow
  },
  methods: {
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        duration: 0 // 弹出不消失
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
