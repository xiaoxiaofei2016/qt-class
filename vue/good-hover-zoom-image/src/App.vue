<template>
  <div id="app">
    <HoverZoom 
    bigSrc="https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg" 
    smallSrc="https://img.alicdn.com/imgextra/i3/1714128138/O1CN01K14VAw29zFjiFDawl_!!1714128138.jpg_430x430q90.jpg" 
    />
    <parent></parent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HoverZoom from './components/HoverZoom'
import parent from './components/Parent'

export default {
  name: 'App',
  components: {
    HoverZoom,
    parent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
