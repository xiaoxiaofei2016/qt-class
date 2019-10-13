<template>
  <div id="home_page">
    <navigationBar/>
    <MainNavigation/>
    <LouPlus/>
    <Boutique/>
    <RecentlyRecommendCourse/>
    <BaseCourse/>
    <BackendCourse/>
    <CloudComputeBigDataCourse/>
    <TrainingCourse/>
    <LearningPath/>
    <SiteDescription/>
  </div>
</template>

<script>
import navigationBar from '@/components/home_page/navigation_bar.vue'
export default {
  components: {
    navigationBar
  }
}
</script>

<style scoped>

</style>
