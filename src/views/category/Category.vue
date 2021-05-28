<template lang="">
  <div>
    <category-nav-bar></category-nav-bar>
    <scroll class="wrapper_left">
      <category-list :categoryList="categoryList" @currentIndexChange="currentIndexChange" ref="categoryList"></category-list>
    </scroll>
    <scroll class="wrapper_right" ref="scroll" @scrollLength="contentScroll">
      <category-show-goods :categoryShowGoods="categoryShowGoods" @getOffsetTop="getOffsetTop"></category-show-goods>
    </scroll>
  </div>
</template>
<script>
  import {
    itemListenerMixin,
    // backTopMixin
  } from '../../common/mixin'

  import {
    getCategoryData
  } from 'network/category.js'

  import CategoryNavBar from './childComps/CategoryNavBar'
  import CategoryList from './childComps/CategoryList'
  import CategoryShowGoods from './childComps/CategoryShowGoods'

  import Scroll from 'components/common/scroll/Scroll'



  export default {
    name: "Category",
    components: {
      CategoryNavBar,
      CategoryList,
      CategoryShowGoods,
      Scroll
    },
    mixins: [itemListenerMixin],
    data() {
      return {
        categoryList: [],
        categoryShowGoods: [],
        currentIndex: 0,
        goodsTopY: [],
      }
    },
    created() {
      this.getCategoryData()
    },
    activated() {},
    methods: {
      getCategoryData() {
        getCategoryData()
          .then(res => {
            // console.log(res)
            const data = res.data
            // 获取左侧分类数组
            this.categoryList = data.categoryList
            // 获取右侧分类展示信息
            this.categoryShowGoods = data.categoryShowGoods
          })
      },
      getOffsetTop(array) {
        this.goodsTopY = array
      },
      currentIndexChange(index) {
        this.currentIndex = index
        this.$refs.scroll.scrollTo(0, parseInt(-this.goodsTopY[this.currentIndex]), 300)
      },
      contentScroll(pos) {
        this.goodsTopY.forEach((item,index) => {
          let _pos=-pos.y
          // console.log(_pos)
          if(_pos>=item&&_pos<this.goodsTopY[index+1]&& index < this.goodsTopY.length - 1){
            this.$refs.categoryList.currentIndex=index
          }
          else if (_pos >= item && index == this.goodsTopY.length - 1) {
            this.$refs.categoryList.currentIndex = this.goodsTopY.length - 1
          }
        })
      }
    },
  }

</script>
<style scoped>
  .wrapper_left {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 80%;
    top: 44px;
    bottom: 33px;
  }

  .wrapper_right {
    overflow: hidden;
    position: absolute;
    left: 20%;
    right: 0;
    top: 44px;
    bottom: 33px;
  }

</style>
