<template lang="">
  <div class="box">
    <div v-for="(item, index) in cartList" :key="index">
      <shopcart-list-item :isChecked="item.check" @changeChecked="buttonClick(index)">
        <img slot="item_img" :src="item.image">
        <div slot="item_title">{{item.title}}</div>
        <div slot="item_price">{{item.price}}</div>
        <div slot="item_count">{{item.count}}</div>
      </shopcart-list-item>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'



  import ShopcartListItem from './ShopcartListItem'

  export default {
    name: "ShopcartList",
    components: {
      ShopcartListItem,
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    methods: {
      buttonClick(ind) {
        this.$store.commit('buttonClick',ind)
        // this.$store.state.cartList[ind].check=!this.$store.state.cartList[ind].check
      }
    },
  }

</script>
<style scoped>
  .box {
    margin-top: 18px;
  }

</style>
