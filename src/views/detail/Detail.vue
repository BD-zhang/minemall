<template lang="">
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scrollLength="contentScroll">
      <detail-swiper ref="goodsInfo" :topImages="topImages"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @shopInfoImgLoad="shopInfoImgLoad"></detail-goods-info>
      <detail-params-info ref="paramsInfo" :paramsInfo="paramsInfo"></detail-params-info>
      <detail-comment-info ref="commentInfo" :commentInfo="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommendInfo" :recommendInfo="recommendInfo"></detail-recommend-info>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>
<script>
  // 导入混入组件
  import {
    itemListenerMixin,
    backTopMixin
  } from '../../common/mixin'
  // 导入工具组件
  import {
    debounce
  } from '../../common/utils'
 
  import {mapActions} from 'vuex'

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
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  // import Toast from 'components/common/toast/Toast'

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
      DetailBottomBar,
      Scroll, //封装组件注册
      // Toast
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
        commentInfo: {}, //第一条信息
        themeTopYs: [0, 1000, 2000, 3000],
        getThemeTopYs: null, //获取各子组件离顶部距离的函数
        currentIndex: 0,
        // message:'',  //给toast组件传递值
        // show:false
      }
    },
    created() {
      // 1.保存传入的id
      this.id = this.$route.params.id
      // 2.根据id 请求数据
      this.getDetailData()
      // 3.给getThemeTopYs赋值
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(this.$refs.goodsInfo.$el.offsetTop)
        this.themeTopYs.push(this.$refs.paramsInfo.$el.offsetTop)
        this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommendInfo.$el.offsetTop)
      }, 100)
    },
    mixins: [itemListenerMixin, backTopMixin], //混入
    mounted() {},
    destroyed() {
      this.$bus.$off('itemimgLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      // 网络请求
      getDetailData() {
        getDetailData()
          .then(res => {
            // console.log(res)
            const data = res.data.result
            // 获取轮播图

            // 通过一个类将复杂数据整合在一起 （detail.json）
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
        this.getThemeTopYs()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
      },
      contentScroll(pos) {
        let _pos = -pos.y
        this.themeTopYs.forEach((item, index) => {
          if (_pos >= item && _pos <= this.themeTopYs[index + 1] && index < this.themeTopYs.length - 1) {
            this.$refs.nav.currentIndex = index
          } else if (_pos >= item && index == this.themeTopYs.length - 1) {
            this.$refs.nav.currentIndex = this.themeTopYs.length - 1
          }
        })
        this.listenToPosition(pos)
      },
      //购物车添加
      addToCart(){
        // 1.获取购物车需要展示的信息
        const product={}
        product.image=this.topImages[0]
        product.title=this.baseInfo.title
        product.price=this.baseInfo.price
        product.id=this.id     //保存于data
        // 2.将商品添加到购物车里
        this.addCart(product)  //调用了mapActions 获取 addCart
        .then(res=>{
          this.$toast.showToast(res,1500)
        })
        
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
