<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>导航:
      <router-link to="/">首页</router-link>
      <router-link :to="{name: 'look', params:{id: 123}}">看一看</router-link>
      <router-link to="/look/look1">看1</router-link>
      <router-link to="/look/look2">看2</router-link>
      <router-link to="/go-back">重定向</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
