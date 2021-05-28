<template lang="">
    <div>
        <nav-bar class="nav_bar">
            <div slot="nav-center" class="nav_center">个人中心</div>
        </nav-bar>
    </div>
</template>
<script>
    import NavBar from 'components/common/navbar/NavBar'
export default {
    name:"ProfileNavBar",
    components:{
        NavBar
    }
}
</script>
<style scoped>
    .nav_bar{
        background-color: var(--color-tint);
    }
    .nav_center {
    color: #fff;
  }
</style>