<template lang="">
    <div class="recommend">
        <div v-for="(item, index) in recommends" :key="index" class="recommend_item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px 0;
        border-bottom: 10px solid #eee;
    }
    .recommend_item{
        flex: 1;

    }
    .recommend_item img{
        width: 90px;
        height: 90px;
        margin-bottom: 10px;
    }
</style>