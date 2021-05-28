<template lang="">
  <div class="list_item">
    <div class="selection" @click="Checked">
      <check-button :isChecked="isChecked"></check-button>
    </div>
    <div class="img">
      <slot name="item_img"></slot>
    </div>
    <div class="title_count_price">
      <div class="title">
        <slot name="item_title"></slot>
      </div>
      <div class="price">
        <slot name="item_price"></slot>
      </div>
      <div class="count">
        <span>x</span>
        <slot name="item_count"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import CheckButton from 'components/content/checkbutton/CheckButton'

  export default {
    name: "ShopcartListItem",
    components: {
      CheckButton
    },
    props:{
      isChecked:{
        type:Boolean,
        default:true
      }
    },
    // data() {
    //   return {
    //     isChecked: true
    //   }
    // },
    methods: {
      Checked() {
        this.$emit('changeChecked')
      }
    },
  }

</script>
<style scoped>
  .list_item {
    margin: 8px 5px;
    padding: 3px 0;
    height: 150px;
    display: flex;
    /* justify-content: space-between; */
    background-color: white;
    border-radius: 8px;
  }

  .selection {
    position: relative;
    width: 10%;
    /* padding: 0 5px 0 5px; */
    text-align: center;
    height: 140px;
    line-height: 140px;
  }

  .img {
    padding: 5px 0 20px 0;
    width: 25%;
    text-align: center;
  }

  .img>img {
    width: 100%;
    height: 100%;
    /* background-color: rosybrown; */
  }

  .title_count_price {
    min-width: 0;
    padding: 5px 7px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }

  .title {
    max-width: 250px;
    font-size: 15px;
    color: black;
    height: 50%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
  }


  .count {
    margin-top: 5px;
    display: flex;
    height: 25%;
    font-size: 16px;
    color: rgb(145, 145, 145);
    /* background-color: royalblue; */
  }

  .price {
    margin-top: 5px;
    color: tomato;
    font-size: 18px;
    font-weight: bold;
    height: 25%;
  }

</style>
