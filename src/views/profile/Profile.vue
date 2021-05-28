<template lang="">
    <div>
        <profile-nav-bar></profile-nav-bar>
        <profile-info></profile-info>
    </div>
</template>
<script>

import ProfileNavBar from './childComps/ProfileNavBar'
import ProfileInfo from './childComps/ProfileInfo'

export default {
    name:"Profile",
    components:{
        ProfileNavBar,
        ProfileInfo
    }
}
</script>
<style lang="">
    
</style>