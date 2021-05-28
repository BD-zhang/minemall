<template lang="">
  <div class="bottom">
    <div class="selectAll">
      <check-button class="check_button" @click.native="select_all" :isChecked="isSelectAll"></check-button>
      <label for="all">{{isSel_all}}</label>
    </div>
    <div class="total">合计：{{totalPrice}} ￥</div>
    <div class="pay" @click="calcClick">去结算({{cartLength}})</div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  import CheckButton from 'components/content/checkbutton/CheckButton'

  export default {
    name: "ShopcartBottomBar",
    components: {
      CheckButton
    },
    data() {
      return {
        isSel_all: '全选'
      }
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList', 'totalPrice']),
      isSelectAll() {
        return !(this.cartList.filter(item => !item.check).length) && (this.cartLength != 0)
      },
      isEmpty(){
        return !this.cartList.find(item=>item.check)
      }
    },
    methods: {
      select_all() {
        if (this.isSelectAll) {
          this.$store.dispatch('cancel_all')
        } 
        else {
          this.$store.dispatch('select_all')
        }
      },
      calcClick(){
        if(this.isEmpty){
          this.$toast.showToast('未选择商品',2000)
        }
      }
    },
  }

</script>
<style scoped>
  .bottom {
    position: fixed;
    display: flex;
    bottom: 55px;
    left: 0;
    right: 0;
    height: 40px;
    padding: 0 0 0 10px;
    font-size: 15px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
    z-index: 15;
  }

  .selectAll {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .check_button {
    margin-right: 5px;
  }

  .all {
    flex: 1;
  }

  .total {
    flex: 2;
    color: tomato;
    font-size: 16px;
    font-weight: bold;
  }

  .pay {
    flex: 1;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-image: linear-gradient(to right, #00bbff, #76dcff);
  }

</style>
