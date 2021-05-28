<template lang="">
  <div>
    <nav-bar class="nav_bar">
      <div slot="nav-left" class="nav_left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui-copy"></use>
        </svg>
      </div>
      <div slot="nav-center" class="nav_center">商品分类</div>
      <!-- <div slot="nav-right">3</div> -->
    </nav-bar>
  </div>
</template>
<script>
  

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "CategoryNavBar",
    components: {
      NavBar
    },
  }

</script>
<style scoped>
  .nav_bar {
    background-color: var(--color-tint);
  }

  .nav_left {
    font-size: 23px;
    color: red;
  }

  .nav_center {
    color: #fff;
  }

</style>
