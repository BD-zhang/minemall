<template lang="">
  <div class="goods_list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"></goods-list-item>
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
    margin-bottom: 75px;
  }

</style>
