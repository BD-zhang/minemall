<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<!-- <script src="//at.alicdn.com/t/font_2512573_n6ncdve6hxn.js"></script> -->
<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar,
    }
  }
</script>


<style>
@import 'assets/css/base.css';
</style>