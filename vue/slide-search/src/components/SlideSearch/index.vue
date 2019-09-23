<template>
  <div class="search-wrap">
    <div class="title-wrap">
      <span>标题</span>
      <div>&gt;</div>
    </div>
    <div class="icon-back">
      <span>&lt;</span>
    </div>
    <div class="search-input"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.search-wrap {
  z-index: 999;
  width: 100%;
  height: 94px;
  background-color: #fff;
}
.title-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  text-align: center;
}
</style>
