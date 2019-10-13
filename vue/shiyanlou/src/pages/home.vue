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
import MainNavigation from '@/components/home_page/Main_navigation.vue'
import LouPlus from '@/components/home_page/Lou_plus.vue'
import Boutique from '@/components/home_page/Boutique.vue'
import RecentlyRecommendCourse from '@/components/home_page/Recently_recommend_course.vue'
import BaseCourse from '@/components/home_page/Base_course.vue'
import BackendCourse from '@/components/home_page/Backend_course.vue'
import CloudComputeBigDataCourse from '@/components/home_page/CloudCompute_bigData_course.vue'
import TrainingCourse from '@/components/home_page/Training_course.vue'
import LearningPath from '@/components/home_page/Learning_path.vue'
import SiteDescription from '@/components/home_page/Site_description.vue'
export default {
  components: {
    navigationBar,
    MainNavigation,
    LouPlus,
    Boutique,
    RecentlyRecommendCourse,
    BaseCourse,
    BackendCourse,
    CloudComputeBigDataCourse,
    TrainingCourse,
    LearningPath,
    SiteDescription
  }
}
</script>

<style scoped>

</style>
