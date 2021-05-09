<template lang="">
  <div class="backtop_box">
    <svg class="icon backtop" aria-hidden="true">
      <use xlink:href="#icon-i-back-top"></use>
    </svg>
  </div>
</template>
<script>
  export default {
    name: "BackTop"
  }

</script>
<style scoped>
  .backtop_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 2px 2px 5px grey;
    background-color: rgb(255, 255, 255);
    position: fixed;
    right: 10px;
    bottom: 100px;
    z-index: 10;
  }

  .backtop {
    font-size: 35px;
  }

</style>
