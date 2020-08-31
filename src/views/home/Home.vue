<template>
  <div id='home'>
    <NavBar>
      <div slot="nav-center">购物街</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { getHomeMulitData } from '@/networks/home'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMulitData().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>

<style>
#home {
  background-color: pink;
}
</style>
