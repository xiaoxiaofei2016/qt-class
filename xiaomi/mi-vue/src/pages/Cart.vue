<template>
  <div>
    <v-cartHeader></v-cartHeader>
    <v-cartBody></v-cartBody>
    <v-footer></v-footer>
  </div>
</template>

<script>
import cartHeader from '@/components/cart/cartHeader.vue'
import cartBody from '@/components/cart/cartbody.vue'
import footer from '@/components/footer/footer.vue'
export default {
  components: {
    'v-cartHeader': cartHeader,
    'v-cartBody': cartBody,
    'v-footer': footer
  }
}
</script>

<style scoped>

</style>
