<template lang="">
  <div class="box">
    <svg :class="{icon_check:isChecked}" class="icon no_checked" aria-hidden="true">
      <use xlink:href="#icon-duigou1"></use>
    </svg>
  </div>
</template>
<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    }
  }

</script>
<style scoped>
  .box {
    width: 20px;
    height: 20px;
    background-color: #fff;
    -webkit-appearance: none;
    border: 1px solid #e4e3e3;
    border-radius: 2px;
    outline: none;
    display: inline-block;
    position: relative;
  }

  .no_checked {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 40%;
    left: 8px;
    display: none;
  }

  .icon_check {
    display: block;
    position: absolute;
    left: 2px;
    top: 1px;
    width: 17px;
    height: 17px;
  }

</style>
