<template lang="">
    <div>
        <div class="info">
            <img src="~assets/img/lazyload/lazyload.png" alt="">
            <div class="span_box">
                <span>登录</span>
                <span>/</span>
                <span>注册</span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:"ProfileInfo",
    
}
</script>
<style scoped>
    .info{
        background-color: rgb(99 196 248);
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        padding: 15px 50px;
    }
    .info>img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .span_box{
        width: 100px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        color: #fff;
        font-size: 20px;
        margin-left: 50px;
        letter-spacing: 1px;
    }
    span:nth-child(2){
        font-size: 30px;
    }
</style>