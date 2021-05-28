<template lang="">
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "TabBar"
  }

</script>
<style>
  body {
    padding: 0;
    margin: 0;
  }

  #tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #d1d1d1;
    /* box-shadow: 0px -3px 5px #cecdcd; */
  }

</style>
