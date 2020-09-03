<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
import MainTabBar from '@/components/connent/mainTabBar/MainTabBar'
// import Detail from '@/views/detail/Detail.vue'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
    MainTabBar
    // Detail
  }
}
</script>

<style>
@import 'assets/css/reset.css';
</style>
