<template>
  <div class="aaa">
    <ul class="content">
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
    </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'Categroy',
  mounted() {
    let wrapper = document.querySelector('.aaa')
    let scroll = new BScroll(wrapper)
  }
}
</script>

<style>
.aaa {
  background-color: red;
  height: 200px;
  overflow: hidden;
}
</style>