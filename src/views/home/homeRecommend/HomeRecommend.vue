<template>
  <div class="recommend-wrap">
    <div class="recommend-item"
         v-for='item in recommends'
         :key="item.acm">
      <a href="">
        <img class="recommend-img"
             :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: Array,
    default() {
      return []
    }
  },
  components: {}
}
</script>


<style lang="less" scoped>
.recommend-wrap {
  display: flex;
  background-color: #fff;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ededed;
  .recommend-item {
    flex: 1;
    text-align: center;
    .recommend-img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
