<template>
  <div class="tab-bar-item"
       @click="itemClick">
    <div v-if="!isActive">
      <slot name='item-img'></slot>
    </div>
    <div v-else>
      <slot name='item-img-active'>
      </slot>
    </div>
    <div :style='getActiveColor'>
      <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    getActiveColor() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
      this.isActive = true
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}

.tab-bar-item img {
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
</style>