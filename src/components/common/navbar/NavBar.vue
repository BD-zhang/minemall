<template lang="">
  <div class="nav-bar">
    <div class="left">
      <slot name="nav-left"></slot>
    </div>
    <div class="center">
      <slot name="nav-center"></slot>
    </div>
    <div class="right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavBar'
  }

</script>
<style>
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    /* background-color: rgb(105, 203, 255); */
    /* box-shadow: 0px 3px 5px #cecdcd; */
  }

  .left,
  .right {
    width: 60px;
    height: 44px;
    /* background-color:blue; */
  }

  .center {
    font-weight: bold;
    font-size: 20px;
    flex: 1;
    height: 44px;
    /* background-color:red; */
  }

</style>
