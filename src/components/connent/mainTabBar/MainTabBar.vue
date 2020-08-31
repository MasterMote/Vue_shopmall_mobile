<template>
  <tab-bar>
    <TabBarItem path='/home'>
      <img src="@/assets/images/home.svg"
           slot="item-img">
      <img src="@/assets/images/home_active.svg"
           slot="item-img-active">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path='/categroy'>
      <img src="@/assets/images/fenlei.svg"
           slot="item-img">
      <img src="@/assets/images/fenlei_active.svg"
           slot="item-img-active">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path='/shopcart'>
      <img src="@/assets/images/shop_car.svg"
           slot="item-img">
      <img src="@/assets/images/shop_car_active.svg"
           slot="item-img-active">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path='profile'>
      <img src="@/assets/images/mine.svg"
           slot="item-img">
      <img src="@/assets/images/mine_active.svg"
           slot="item-img-active">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
