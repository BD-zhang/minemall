<template lang="">
  <div class="tab_control">
    <div v-for="(item, index) in titles" :key="index" class="tab_control_item" :class="{actived:index==currentIndex}">
      <span @click="isClick(index)">{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      isClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    },
  }

</script>
<style scoped>
  .tab_control {
    display: flex;
    /* padding: 5px 0 5px 0; */
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    opacity: 0.9;
  }

  .tab_control_item {
    /* padding: 5px; */
    flex: 1;
  }
.tab_control_item span{
    padding: 5px;
}
  .actived {
    color: var(--color-high-text)
  }

  .actived span {
    border-bottom: pink solid 2px;
  }

</style>
