<template lang="">
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">购物街</div>
    </nav-bar>
    <tab-control class="tab_control" :titles="titles" @tabClick="tabClick" ref="tabControl_top"
      v-show="isTabControlFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="probeType" @scrollLength="contentScroll" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoodsType"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>





    <!-- <h1>首页</h1> -->
  </div>
</template>

<script>
  import {itemListenerMixin} from '../../common/mixin'

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend"
  import HomeFeature from './childComps/HomeFeature'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import {
    getHomeMultidata,
    getHomeGoodsList,
    getMoreGoodsList
  } from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      GoodsList,
      TabControl,
      Scroll,
      BackTop
    },
    data() {
      return {
        currentType: 'pop',
        titles: ['流行', '新款', '精选'],
        banners: [],
        recommends: [],
        goods: {
          pop: {},
          news: {},
          sell: {}
        },
        showIndicator: false,
        probeType: 3,
        isShowBackTop: false,
        isTabControlFixed: false,
        tabOffsetTop: 0,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoodsList()
    },
    mounted() {
    },
    mixins:[itemListenerMixin],//混入
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 保存Y值
      this.saveY = this.$refs.scroll.getScrollY()
      // 取消itemimgLoad
      this.$bus.$off('itemimgLoad', this.itemImgListener)
    },
    computed: {
      showGoodsType() {
        return this.goods[this.currentType].list
      },
    },
    methods: {
      /*
      防抖函数
      */
      // debounce(func, delay = 300) {
      //   let timer = null
      //   return function (...args) {
      //     if (timer) clearTimeout(timer)
      //     timer = setTimeout(() => {
      //       func.apply(this, args)
      //       // console.log('home')
      //       // console.log('/*/*/*/*/')
      //     }, delay)
      //   }
      // },



      /*
      网络请求
       */ //
      getHomeMultidata() {
        getHomeMultidata()
          .then(res => {
            this.banners = res.data.data.banner.list
            this.recommends = res.data.data.recommend.list
          })
          .catch(err => {
            console.log(err)
          })
      },
      getHomeGoodsList() {
        getHomeGoodsList()
          .then(res => {
            this.goods.pop = res.data.pop
            this.goods.news = res.data.news
            this.goods.sell = res.data.sell
          })
      },
      // 加载更多数据
      loadMore() {
        getMoreGoodsList().then((res) => {
            return new Promise((resolve, reject) => {
              resolve(res)
              reject()
            })
          })
          .then((res) => {
            setTimeout(() => {
              switch (this.currentType) {
                case 'pop':
                  res.data.pop.list.forEach(item => {
                    this.goods.pop.list.push(item)
                  })
                  break;
                case 'news':
                  res.data.news.list.forEach(item => {
                    this.goods.news.list.push(item)
                  })
                  break;
                case 'sell':
                  res.data.sell.list.forEach(item => {
                    this.goods.sell.list.push(item)
                  })
                  break;
              }
              this.$refs.scroll.finishPullUp()
            }, 2000)
          })
          .catch(err => {
            console.log(err)
          })
      },





      /*
      事件监听
      */ //
      // 等到轮播图照片加载完成后发出事件，再获取正确的offsetTop
      swiperImgLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      //对父组件的数据更改
      imgsrc_change(obj1, obj2) {
        this.banners.push(obj1)
        this.banners.unshift(obj2)
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'news'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabControl_top.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      // 点击回到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      // 箭头按钮显示与隐藏+tabControl的fixed
      contentScroll(pos) {
        // 1.判断backTop是否显示
        this.isShowBackTop = (-pos.y) > 500;
        // 2.决定tabControl是否吸顶(position:fixed)
        this.isTabControlFixed = (-pos.y) > this.tabOffsetTop

      }
    },
  }

</script>





<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: rgb(48, 106, 139);
    margin-top: -44px;
    /* font-weight: bold; */
  }

  .home-nav div {
    font-weight: bold;
  }

  .tab_control {
    position: relative;
    z-index: 5;
  }

  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 33px;
  }

  /* .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  } */

</style>
