<template lang="">
  <div class="bottom_bar">
    <div class="bottom_bar_item">
      <span class="span">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-service"></use>
        </svg>
      </span>
      <p>客服</p>
    </div>
    <div class="bottom_bar_item">
      <span class="span">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-dianpu"></use>
        </svg>
      </span>
      <p>店铺</p>
    </div>
    <div class="bottom_bar_item">
      <span class="span">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
      </span>
      <p>收藏</p>
    </div>
    <div class="bottom_bar_btn_left bottom_bar_addcart" @click="addCart">加入购物车</div>
    <div class="bottom_bar_btn_right bottom_bar_buy">购买</div>
  </div>
</template>
<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCart(){
        this.$emit('addCart')
      }
    },
  }

</script>
<style scoped>
  .bottom_bar {
    /* position: relative;
        height: 49px;
        background-color: red;
        bottom: 0;
        z-index: 10; */
    position: fixed;
    display: flex;
    bottom: 0;
    height: 49px;
    background-color: #fff;
    width: 100%;
  }

  .bottom_bar_item {
    padding: 9px;
    flex: 1;
    font-size: 13px;
    color: #333;
    text-align: center;
  }
  .span{
    font-size: 22px;
  }
  .bottom_bar_btn_left {
    margin: 4px 0 4px 0;
    height: 41px;
    line-height: 41px;
    border-radius: 20px 0 0 20px;
    width: 26%;
    font-size: 16px;
    line-height: 41px;
    text-align: center;
  }

  .bottom_bar_btn_right {
    margin: 4px 0 4px 0;
    height: 41px;
    line-height: 41px;
    border-radius: 0 20px 20px 0;
    width: 26%;
    font-size: 16px;
    line-height: 41px;
    text-align: center;
  }

  .bottom_bar_buy {
    background-image: linear-gradient(to right, #3f7daf, #007ba5);
    color: #fff;
  }

  .bottom_bar_addcart {
    background-image: linear-gradient(to right, #51d3ff, #229dff);
    color: #fff;
  }

</style>
