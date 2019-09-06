<template>
    <div class="main-content">
        <!-- 头部header -->
        <Header></Header>
        <Slide></Slide>
        <div class="content">
          <transition name="move" mode="out-in">
            <router-view/>
          </transition>
        </div>
    </div>
</template>

<script>
import Header from '@/common/Header'// 引入组件
import Slide from '@/common/Slide'
export default {
  name: 'mainContent',
  data () {
    return {}
  },
  components: {
    Header, // 声明组件
    Slide
  }
}
</script>

<style scoped>
.content{
  padding-left: 200px;
}
</style>
