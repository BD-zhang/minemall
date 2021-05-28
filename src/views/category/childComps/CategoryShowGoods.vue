<template lang="">
  <div class="box">
    <ul>
      <li v-for="(item, index) in categoryShowGoods" :key="index" :id="forId(index)">
        <div class="goods_box">
          <div class="goods_name">
            <h3>{{item.categoryName}}</h3>
          </div>
          <div class="goods_img">
            <img v-for="(it, ind) in item.images" :key="ind" :src="it" alt="" @load="imgLoad">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "CategoryShowGoods",
    props: {
      categoryShowGoods: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        goodsTopY: [],
        goodsLength: 0,
        element: null
      }
    },
    created() {},
    mounted() {},
    watch: {
      categoryShowGoods() {
        new Promise((resolve, reject) => {
            this.goodsLength = this.categoryShowGoods.length
            resolve()
            reject()
          })
          .then(() => {
            this.getOffsetTop()
          })
      },
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemimgLoad')
      },
      forId(index) {
        return 'forId' + index
      },
      getOffsetTop() {
        for (let i = 0; i < this.goodsLength; i++) {
          this.element = document.querySelector('#forId' + i)
          this.goodsTopY.push(this.element.offsetTop)
        }
        this.$emit('getOffsetTop', this.goodsTopY)
      },
      
    },
  }

</script>
<style scoped>
  .box {
    /* height: 100vh; */
  }

  .goods_img {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 200px;
  }

  .goods_img>img {
    width: 33%;
    height: 45%;
    border-radius: 50%;
  }

  .goods_box {
    text-align: center;
    margin: 0 20px;
    padding: 5px;
    border-bottom: 1px solid rgb(206, 206, 206);
  }

  .goods_name {
    border-bottom: 1px solid var(--color-tint);
  }

  .goods_name>h3 {
    margin-bottom: 3px;
  }

</style>
