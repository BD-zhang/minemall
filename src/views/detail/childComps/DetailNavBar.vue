<template>
  <div>
    <nav-bar>
      <div slot="nav-left" @click="backUrl" class="backUrl">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div slot="nav-center" class="detail_titles">
        <div v-for="(item, index) in titles" :key="index" class="detail_titles_items"
          :class="{actived:currentIndex==index }" @click="currentIndexChange(index)">{{item}}</div>
      </div>
      <div slot="nav-right">

      </div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    components: {
      NavBar,
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      // 导航栏 actived 样式触发  
      currentIndexChange(index) {
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      //   返回前一页
      backUrl(){
          this.$router.back()
      }
    },
  }

</script>
<style scoped>
  .detail_titles {
    display: flex;
    /* justify-content: space-between; */
  }

  .detail_titles_items {
    flex: 1;
    font-size: 14px;
  }

  .actived {
    color: var(--color-high-text)
  }

  .backUrl{
      font-size: 23px;
  }

</style>
