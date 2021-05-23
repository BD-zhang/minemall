<template lang="">
  <div>
    <div class="goods_list">
      <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"></goods-list-item>
      <div class="loading">loading......</div>
    </div>
    
  </div>
</template>
<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      },
      className:{
        type:String,
        default:'loading'
      }
    }
  }

</script>
<style scoped>
  .goods_list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 0 6px;
    margin-bottom: 60px;
  }
  .loading{
    margin: 10px 0 10px 0;
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #bababa;
    background-color: rgb(238, 238, 238);
  }
  .loading_none{
    display: none;
  }
</style>
