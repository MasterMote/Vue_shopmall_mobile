<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for='(item,index) in tabControlTitle'
         :key='index'
         :class='{active:currentItem == index}'
         @click='tabContolClick(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    tabControlTitle: Array,
    default() {
      return []
    }
  },
  data() {
    return {
      currentItem: 0
    }
  },
  methods: {
    tabContolClick(index) {
      this.currentItem = index
      this.$emit('tabItemClick', index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}
.active {
  color: pink;
}
.active span {
  border-bottom: 2px solid pink;
  padding: 5px;
}
</style>

