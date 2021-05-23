<template lang="">
  <div id="recommend">
    <h4>商品推荐</h4>
    <goods-list :goods="recommendInfo.goodsList" class="detail-goods-list"></goods-list>
  </div>
</template>
<script>
  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: "DetailRecommendInfo",
    components: {
      GoodsList
    },
    props: {
      recommendInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }

</script>
<style>
  #recommend {
    border-top: 10px solid#ededed;
    background: white;
  }
  h4{
      margin: 5px 0 5px 12px;
  }
  .detail-goods-list>div>div {
    width: 31%;
    height: auto;
    padding-top: 6px;
    font-size: 14px;
  }

</style>
