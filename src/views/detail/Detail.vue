<template lang="">
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @shopInfoImgLoad="shopInfoImgLoad"></detail-goods-info>
      <detail-params-info :paramsInfo="paramsInfo"></detail-params-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <detail-recommend-info :recommendInfo="recommendInfo"></detail-recommend-info>
    </scroll>
  </div>
</template>
<script>
  import {itemListenerMixin} from '../../common/mixin'

  // 网络封装组件请求
  import {
    getDetailData,
    GoodsInfo,
    ShopInfo,
    GoodsParamsInfo,
    CommentsInfo
  } from 'network/detail'
  // 封装组件导入
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import DetailRecommendInfo from './childComps/DetailRecommendInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailRecommendInfo,
      DetailCommentInfo,
      Scroll //封装组件注册
    },
    data() {
      return {
        id: null,
        topImages: [],
        baseInfo: {},
        shopInfo: {},
        detailInfo: {},
        paramsInfo: {},
        recommendInfo: {},
        commentInfo: {} //第一条信息
      }
    },
    created() {
      // 1.保存传入的id
      this.id = this.$route.params.id
      //   2.根据id 请求数据
      this.getDetailData()
    },
    mixins:[itemListenerMixin],//混入
    mounted() {

    },
    destroyed() {
      this.$bus.$off('itemimgLoad', this.itemImgListener)
      console.log(456)
    },
    methods: {
      // 网络请求
      getDetailData() {
        getDetailData()
          .then(res => {
            // console.log(res)
            const data = res.data.result
            // 获取轮播图

            // 通过一个类将复杂数据整合在一起 （detail.js）
            this.topImages = data.topImages
            // 获取baseInfo
            this.baseInfo = new GoodsInfo(data.itemInfo, data.columns, data.services)
            // 获取shopInfo
            this.shopInfo = new ShopInfo(data.shopInfo)
            // 获取detailInfo
            this.detailInfo = data.detailInfo
            // 获取paramsInfo
            this.paramsInfo = new GoodsParamsInfo(data.paramsInfo)
            // 获取recommendInfo
            this.recommendInfo = data.recommendInfo
            // 获取评论信息commentInfo
            this.commentInfo = new CommentsInfo(data.commentsInfo[0])
          })
      },
      shopInfoImgLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }

</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background: white;
    height: 100vh;
  }

  .content {
    /* height: calc(100% - 44px); */
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 0;
  }

  .detail-nav {
    position: relative;
    z-index: 20;
    background-color: white;
  }

</style>
