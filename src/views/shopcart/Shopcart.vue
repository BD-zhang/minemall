<template lang="">
  <div class="box">
    <shopcart-nav-bar></shopcart-nav-bar>
    <scroll class="content" ref="scroll">
      <shopcart-list></shopcart-list>
    </scroll>
    <shopcart-botton-bar></shopcart-botton-bar>
  </div>
</template>
<script>
  import ShopcartNavBar from './childComps/ShopcartNavBar'
  import ShopcartList from './childComps/ShopcartList'
  import ShopcartBottonBar from './childComps/ShopcartBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "Shopcart",
    components: {
      ShopcartNavBar,
      ShopcartList,
      ShopcartBottonBar,
      Scroll
    },
    activated() {
      this.$refs.scroll.refresh()
    },
  }

</script>
<style scoped>
  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 33px;
    background-color: rgb(241 241 241);
  }
.box{
  height: 100vh;
  position: relative;
}
</style>
