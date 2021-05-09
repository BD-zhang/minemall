<template lang="">
  <div style="display:inline;">

    <tab-bar>
      <tab-bar-item path="/home" activeColor='rgb(18, 150, 219)'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-home"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-actived">
          <use xlink:href="#icon-home-copy"></use>
        </svg>
        <span slot="item-text">首页</span>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor='rgb(18, 150, 219)'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-category"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-actived">
          <use xlink:href="#icon-category-copy"></use>
        </svg>
        <span slot="item-text">分类</span>
      </tab-bar-item>

      <tab-bar-item path="/shopcart" activeColor='rgb(18, 150, 219)'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-icon8"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-actived">
          <use xlink:href="#icon-icon8-copy"></use>
        </svg>
        <span slot="item-text">购物车</span>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor='rgb(18, 150, 219)'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-geren"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-actived">
          <use xlink:href="#icon-geren-copy"></use>
        </svg>
        <span slot="item-text">个人</span>
      </tab-bar-item>

    </tab-bar>

  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
