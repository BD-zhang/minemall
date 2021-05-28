<template lang="">
  <div>
    <swiper class="topImage">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" @load="imgLoad">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemimgLoad')
      },
    },
  }

</script>
<style scoped>
  .topImage {
    height: 300px;
    overflow: hidden;
  }

</style>
