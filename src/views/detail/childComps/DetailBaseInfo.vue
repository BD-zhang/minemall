<template>
  <div v-if="Object.keys(baseInfo).length !== 0">
    <div class="info-title">{{baseInfo.title}}</div>
    <div class="price-wrap">
      <div class="new-price">{{baseInfo.price}}</div>
      <div class="old-price">{{baseInfo.oldprice}}</div>
      <div class="discount-desc" v-if="baseInfo.discountDesc">{{baseInfo.discountDesc}}</div>
    </div>
    <div class="other-info">
      <div>{{baseInfo.columns[0]}}</div>
      <div>{{baseInfo.columns[1]}}</div>
    </div>
    <div class="serves-wrap">
      <div v-for="( item , index ) in baseInfo.services" :key="index">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      baseInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    created() {
      //   console.log(this.baseInfo)
    },
  }

</script>
<style scoped>
  .info-title {
    margin: 10px 0;
    padding: 0 4px;
    font-size: 14px;
    line-height: 20px;
  }

  .price-wrap {
    display: flex;
    padding: 0 4px 10px;
  }

  .new-price {
    color: var(--color-high-text)
  }

  .old-price {
    color: #999;
    font-size: 12px;
    margin: 0 4px;
    text-decoration: line-through;
  }

  .discount-desc {
    color: #fff;
    font-size: 12px;
    border-radius: 100px;
    padding: 2px 6px;
    background-color: var(--color-high-text);
  }


  .other-info {
    display: flex;
    color: #999;
    font-size: 12px;
    padding: 10px 4px;
    border-bottom: 1px solid #ededed;
    border-top: 1px solid #ededed;
  }

  .other-info div {
    flex: 1;
  }


  .serves-wrap {
    display: flex;
    font-size: 12px;
    color: #333;
    padding: 10px 4px;
    justify-content: space-between;
    border-bottom: 4px solid #ededed;
  }

  img {
    width: 12px;
    height: 12px;
    vertical-align: middle;

  }

</style>
