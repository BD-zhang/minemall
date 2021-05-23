<template lang="">
  <div class="tab_bar_item" @click="btnActived">

    <div v-if="!isActived" class="fontStyle">
      <slot name="item-icon" style="margin-bottom: 9px;"></slot>
    </div>

    <div v-else class="fontStyle">
      <slot name="item-icon-actived" style="margin-bottom: 9px;"></slot>
    </div>

    <div :style="activeStyle" class="item_font">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>



<script>
  // import "assets/img/tabbar_svg/iconfont.js"
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    computed: {
      isActived() {
        // return this.$route.path.indexOf(this.path) !==-1
        return this.$route.path === this.path
      },
      activeStyle() {
        return this.isActived ? {
          color: this.activeColor,
          display: 'inline',
          height:'24px'
        } : {}
      }
    },
    methods: {
      btnActived() {
        this.$router.replace(this.path)
        // console.log(this.path)
      }
    }
  }

</script>

<style>
  .tab_bar_item {
    flex: 1;
    text-align: center;
    line-height: 33px;
    padding: 15px;
    background-color: rgb(238, 238, 238);
    color: gray;
    height: 25px;
    font-size: 18px;
    box-sizing: unset!important;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .fontStyle{
    height: 24px;
    margin-top: -15px;
  }
  .item_font{
    font-size: 15px;
  }

</style>
