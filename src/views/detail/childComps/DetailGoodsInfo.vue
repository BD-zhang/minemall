<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-text-wrap">
      <div class="text-top-style"></div>
      <!-- <div class="desc info-text-desc">{{detailInfo.desc}}</div> -->
      <div class="text-bot-style"></div>
    </div>
    <div class="img-list-wrap" v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="desc">{{item.key}}</div>
      <!-- <div v-for="(item, index) in item.list" :key="index"> -->
      <img :src="item" alt="" class="img" @load="imgLoad">
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
        return {
            counter:0,
            imagesLength:0
        }
    },
    methods: {
        imgLoad(){
            this.$emit('shopInfoImgLoad')
        }
    },
    watch:{
        detailInfo(){
            this.imagesLength=this.detailInfo.detailImage.length
        }
    }
  }

</script>
<style scoped>
  .img-list-wrap {
    width: 100%;
    margin: 10px 0 0;
    overflow: hidden;
  }
  .img-list-wrap img{
    width: 100%;
  }
</style>
