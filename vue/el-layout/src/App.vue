<template>
  <div id="app">
    <ElRow>
      东西
    </ElRow>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ElRow from './components/el-row'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ElRow
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
