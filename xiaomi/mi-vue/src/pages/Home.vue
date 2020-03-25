<template>
  <div>
    <v-header></v-header>
    <v-agreement></v-agreement>
    <v-leftnav></v-leftnav>
    <v-mainPage></v-mainPage>
    <v-sidebar></v-sidebar>
    <v-footer></v-footer>
    <v-video></v-video>
    <div class="video_mask" v-show="isShowMask"></div><!-- 蒙层效果 -->
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/header/Header.vue'
import LeftNav from '@/components/container/leftNav.vue'
import Footer from '@/components/footer/footer.vue'
import Sidebar from '@/components/sidebar/sidebar.vue'
import MainPage from '@/components/mainPage/MainPage.vue'
import Video from '@/components/video/video.vue'
import Agreement from '@/components/register_login/register.vue'
export default {
  components: {
    'v-header': Header,
    'v-leftnav': LeftNav,
    'v-footer': Footer,
    'v-sidebar': Sidebar,
    'v-mainPage': MainPage,
    'v-video': Video,
    'v-agreement': Agreement
  },
  computed: {
    ...mapGetters([
      'isShowMask'
    ])
  },
  created () {
    this.$store.dispatch('setShowAllGoods', false)
    this.$store.dispatch('setShowLeftNavs', true)
  }
}
</script>

<style scoped lang="stylus">
.video_mask
  position fixed
  width 100%
  margin 0 auto
  top 0
  left 0
  bottom 0
  right 0
  z-index 1000
  background rgba(0, 0, 0, 0.6)
</style>
