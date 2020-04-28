<template>
  <div class="one">
    <span>One页面</span>
    <div class="goto" @click="gotoTwo">去two页面</div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoTwo() {
      this.$router.replace({path: '/two'})
    }
  }
}
</script>

<style lang="less" scoped>
.one {
  color: green;
  .goto {
    border: 1px solid green;
  }
}
</style>