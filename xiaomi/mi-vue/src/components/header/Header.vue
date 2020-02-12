<template>
  <div>
    <v-siteTopBar></v-siteTopBar>
    <v-siteHeader></v-siteHeader>
  </div>
</template>

<script>
import siteTopBar from './siteTopBar.vue'
import siteHeader from './siteHeader'
export default {
  components: {
    'v-siteTopBar': siteTopBar,
    'v-siteHeader': siteHeader
  }
}
</script>

<style scoped>

</style>
