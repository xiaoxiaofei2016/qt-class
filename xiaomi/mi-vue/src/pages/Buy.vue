<template>
  <div class="buy">
    <v-cartHeader :title="'确认订单'"></v-cartHeader>
    <v-address></v-address>
    <v-footer></v-footer>
  </div>
</template>

<script>
import cartHeader from '@/components/cart/cartHeader.vue'
import address from '@/components/buy/address.vue'
import footer from '@/components/footer/footer.vue'
export default {
  name: 'Buy',
  components: {
    'v-cartHeader': cartHeader,
    'v-address': address,
    'v-footer': footer
  }
}
</script>

<style scoped>

</style>
