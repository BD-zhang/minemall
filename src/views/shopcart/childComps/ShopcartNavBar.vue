<template lang="">
  <div>
    <nav-bar class="navbar">
      <div slot="nav-left"></div>
      <div slot="nav-center" class="navbar_center">
        <span>购物车({{cartLength}})</span>
      </div>
      <div slot="nav-right"></div>
    </nav-bar>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'


  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "ShopcartNavBar",
    components: {
      NavBar
    },
    computed:{
        ...mapGetters([
            'cartLength',
            'cartList'
        ])
    }
  }

</script>
<style scoped>
  .navbar {
    background-color: var(--color-tint);

  }

  .navbar_center {
    color: #fff;
    /* font-weight: 700; */
  }

</style>
