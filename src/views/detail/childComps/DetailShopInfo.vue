<template>
  <div v-if="Object.keys(shopInfo).length !== 0">
    <div class="flex shop-name-info">
      <img :src="shopInfo.shopLogo" alt="" class="shop-img">
      <div>{{shopInfo.name}}</div>
    </div>
    <div class="flex shop-other-info">
      <div class="flex shop-other-item shop-other-sell">
        <div>
          <p class="f16">{{shopInfo.cSells}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="f16">{{shopInfo.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-item shop-other-right">
        <div>
          <div v-for="(item,index) in shopInfo.score" :key="index">
            {{item.name}}&ensp;
            <span class="score" :class="{scoreactive:!item.isBetter}">{{item.score}}</span>
            <span class="score-bg" :class="{scorebgactive:!item.isBetter}">{{item.isBetter? '低' : '高'}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    created() {
      // console.log(this.shopInfo)
    },
  }

</script>
<style scoped>

  .flex {
    display: flex;
  }

  .f16 {
    font-size: 16px;
  }

  .shop-name-info {
    align-items: center;
    margin: 20px 10px;
  }

  .shop-img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .shop-other-info {
    font-size: 12px;
    align-items: center;
    line-height: 22px;
  }

  .shop-other-item {
    flex: 1;
  }


  .shop-other-sell {
    border-right: 1px solid #ececec;
  }

  .shop-other-sell div {
    flex: 1;
    text-align: center;
  }

  .shop-other-right {
    /* padding-left: 40px; */
  }

  .shop-other-right div {
    margin-left: 18px;
  }

  .score {
    display: inline-block;
    width: 30px;
    color: #34ac32;
  }

  .scoreactive {
    color: #d52512;
  }


  .score-bg {
    background-color: #34ac32;
    color: #fff;
    padding: 1px 4px;
    font-size: 12px;
  }

  .scorebgactive {
    background-color: #d52512;
  }

  .enter-shop {
    text-align: center;
    width: 39%;
    margin: 5px auto;
    border: 10px solid #efefef;
    border-radius: 21px;
    background: #efefef;
  }

</style>
