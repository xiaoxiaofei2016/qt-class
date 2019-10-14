<template>
  <div>
    组件B{{app.user}}
    <button @click="check">check</button>
  </div>
</template>

<script>
export default {
  // props: ['send']
  inject: ['app'],
  methods: {
    check () {
      this.app.userInfo()
    }
  }
}
</script>

<style scoped>

</style>
