<template>
  <div class="home-banner-box">
    <router-link to="/">
      <img :src="images" alt="" width="1226" height="120">
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['images']
}
</script>

<style scoped lang="stylus">
.home-banner-box
  height 120px
  margin 22px 0
  overflow hidden
</style>
