<template>
  <div id='home'>
    <NavBar class="nar-bar">
      <div slot="nav-center">购物街</div>
    </NavBar>
    <keep-alive>
      <Scroll ref="scroll">
        <HomeSwiper :banners='banners'></HomeSwiper>
        <HomeRecommend :recommends='recommends'></HomeRecommend>
        <HomeFashion></HomeFashion>
        <TabControl :tabControlTitle='tabControlTitle'
                    @tabItemClick='tabItemClick'></TabControl>
        <GoodsList :goods="showGoods"></GoodsList>
      </Scroll>
    </keep-alive>
    <BackTop @click.native="backToTop"></BackTop>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Scroll from '@/components/common/scroll/Scroll'

import TabControl from '@/components/connent/tabControl/TabControl.vue'
import GoodsList from '@/components/connent/goodsList/GoodsList.vue'
import BackTop from '@/components/connent/backTop/BackTop'

import { getHomeMulitData, getHomeGoods } from '@/networks/home'

import HomeSwiper from '@/views/home/homeSwiper/HomeSwiper.vue'
import HomeRecommend from '@/views/home/homeRecommend/HomeRecommend.vue'
import HomeFashion from '@/views/home/homeFashion/HomeFashion.vue'

import BScroll from '@better-scroll/core'
export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    HomeFashion
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tabControlTitle: ['流行', '新款', '精选'],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentTabClick: 'pop',
      scroll: null
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTabClick].list
    }
  },
  created() {
    //获取首页轮播图、推荐数据
    this.getHomeMulitData()
    //获取首页商品信息
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // console.log(this.$refs.scroll)
    // setTimeout(() => {
    //   this.$refs.scroll.refresh()
    // }, 50)

    //监听图片加载事件，图片加载一次就刷新差异scroll对象
    this.$bus.$on('homeItemImgLoad', () => {
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    // 事件监听
    tabItemClick(index) {
      switch (index) {
        case 0:
          this.currentTabClick = 'pop'
          break
        case 1:
          this.currentTabClick = 'new'
          break
        case 2:
          this.currentTabClick = 'sell'
          break
      }
    },
    backToTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },

    // 网络请求相关
    getHomeMulitData() {
      getHomeMulitData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
}
.nar-bar {
  background-color: pink;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 400px;
  background-color: red;
}
</style>
