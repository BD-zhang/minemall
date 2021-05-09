<template lang="">
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="probeType" @scrollLength="showBackTop">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control class="tab_control" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoodsType"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>





    <!-- <h1>首页</h1> -->
  </div>
</template>

<script>
  import axios from 'axios'


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
        isShowBackTop: false
      }
    },
    created() {
      this.getHomeMultidata()
      // 自己定义的数据获取
      axios.get('./api/data.json').then(res => {
        console.log(res.data)
        this.goods.pop = res.data.pop
        this.goods.news = res.data.news
        this.goods.sell = res.data.sell
      })
      // this.getHomeGoods('pop')
      // this.getHomeGoods('news')
      // this.getHomeGoods('sell')
    },
    computed: {
      showGoodsType() {
        return this.goods[this.currentType].list
      },
    },
    methods: {
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
      // getHomeGoods(type) {
      //   const page = this.goods[type].page++
      //   getHomeGoods(type, page)
      //     .then(res => {
      //       // this.goods.pop=res
      //       console.log(res)
      //     })
      // },
      /*
      事件监听
      */ //
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
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      showBackTop(pos) {
        this.isShowBackTop = (-pos.y) > 500;
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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }

  .tab_control {
    position: sticky;
    top: 44px;
  }

  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }

</style>
