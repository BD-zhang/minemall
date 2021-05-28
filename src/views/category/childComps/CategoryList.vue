<template lang="">
  <div class="list_ul">
    <ul>
      <li v-for="(item, index) in categoryList" :key="index" class="list_li" 
      :class="{list_li_active:currentIndex==index}" @click="click_list(index)">
        <div class="list_div">
          {{item}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "CategoryList",
    props: {
      categoryList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        click_list(index){
            this.currentIndex=index
            this.$emit('currentIndexChange',index)
        }
    },
  }

</script>
<style scoped>
  .list_ul {
    background-color: #ececec;
    height: 100vh;
    width: 100%;
  }

  .list_li {
    width: 100%;
    height: 60px;
    background-color: #ececec;
    /* border-bottom: 1px solid #767676; */
  }

  .list_div {
    color: rgb(147 147 147);
    font-size: 20px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    /* padding: 5px; */
  }

  .list_li_active {
    background-color: var(--color-tint);
    border-left: 7px solid rgb(63 184 250);
  }

  .list_li_active>div {
    color: #fff !important;
  }

</style>
