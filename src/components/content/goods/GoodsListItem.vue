<template lang="">
  <div class="goods_item" @click="itemClick">
    <img v-lazy="goodsItem.image" alt="" class="goods_item_image" @load="imgLoad">
    <div class="goods_item_box">
      <p class="goods_item_decription">{{goodsItem.description}}</p>
      <div class="goods_item_smallbox">
        <span class="goods_item_price">{{goodsItem.price}}￥</span>
        <span class="goods_item_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>{{goodsItem.collections}}</span>
          <!-- <span>{{goodsItem.id}}</span> -->
        </span>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    data() {
      return {}
    },
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      },
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemimgLoad')
      },
      itemClick() {
        // 跳转详情页
        // console.log('456')
        // this.$router.push('/detail')
        // this.$router.push({
        //   path:'/detail',
        //   query:{
        //     id:123
        //   }
        // })
        this.$router.push('/detail/' + this.goodsItem.id)
      }
    },
  }

</script>
<style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .goods_item {
    width: 49%;
    height: auto;
    padding-top: 6px;
    font-size: 14px;
  }

  .goods_item_box {
    height: 40px;
  }

  .goods_item_smallbox {
    margin-top: -10px;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline
  }

  .goods_item_image {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .goods_item_price {
    /* display: flex;
    justify-content: space-between; */
    margin: 6px 0;
    color: rgb(241, 156, 170);
  }

  .goods_item_decription {
    color: #333;
    display: block;
    width: 100%;
    height: 30px;
    font-size: 0.24rem;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 5.14%;
    overflow: hidden;
  }

  .goods_item_icon {
    font-size: 14px;
  }

  .collect_icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    /* background: url(~assets/images/home/collect_icon.png) no-repeat; */
    background-size: cover;
    vertical-align: bottom;
  }

</style>
