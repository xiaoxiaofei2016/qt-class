<template>
  <div>
    <h2 :style="{ color: theme }">一段话</h2>
  </div>
</template>

<script>
export default {
  inject: ['theme']
}
</script>

<style scoped>

</style>
