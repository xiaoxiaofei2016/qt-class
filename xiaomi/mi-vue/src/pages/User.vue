<template>
  <div >
    <v-siteTopBar></v-siteTopBar>
    <v-siteHeader @donotshow="donotshowleftNav"></v-siteHeader>
    <v-user></v-user>
    <v-footer></v-footer>
  </div>
</template>

<script>
import siteTopBar from '@/components/header/siteTopBar.vue'
import siteHeader from '@/components/header/siteHeader.vue'
import user from '@/components/personCenter/user.vue'
import footer from '@/components/footer/footer.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    'v-siteTopBar': siteTopBar,
    'v-siteHeader': siteHeader,
    'v-user': user,
    'v-footer': footer
  },
  methods: {
    donotshowleftNav () {
      this.$store.dispatch('setShowLeftNavs', false)
    }
  },
  created () {
    this.$store.dispatch('setShowAllGoods', true)
    this.$store.dispatch('setShowLeftNavs', false)
  }
}
</script>

<style scoped lang="stylus">

</style>
