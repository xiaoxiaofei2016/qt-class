<template>
  <div class="chatapp">
    <!-- 容器组件 -->
    <thead-section></thead-section>
    <message-section></message-section>
  </div>
</template>

<script>
import threadSection from '@/components/ThreadSection.vue'
import messageSection from '@/components/MessageSection.vue'

export default {
  name: 'App',
  components: {
    'thead-section': threadSection,
    'message-section': messageSection
  },
  mounted() {
    this.$store.dispatch('getAllMessages')
  }
}
</script>

<style>

</style>
