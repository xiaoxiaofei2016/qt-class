<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-searchBox @query="onQueryChange" ref="searchBox"></v-searchBox>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <!-- 热门搜索 -->
      <v-scroll>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  components: {
    'v-searchBox': searchBox,
    'v-scroll': scroll
  },
  methods: {
    onQueryChange () {

    }
  }
}
</script>

<style scoped>

</style>
