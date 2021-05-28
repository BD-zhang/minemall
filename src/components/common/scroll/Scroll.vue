<template lang="">
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 3
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    // activated() {
    // 	// this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 	this.$refs.scroll.refresh();
    // },
    mounted() {
      //创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: true
      })
      //监听滚动的位置
      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on('scroll', pos => {
          this.$emit('scrollLength', pos)
        })

      }
      //监听上拉事件
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 500) {
        //this.scroll判断DOM有没有加载完
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    },
  }

</script>
<style scoped>
  /* .wrapper{
  height: 300px;
} */
  /* .content{
   height: 100%;
} */

</style>
