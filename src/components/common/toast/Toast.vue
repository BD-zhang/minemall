<template lang="">
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>
<script>
  export default {
    name: "Toast",
    data() {
        return {
            message:"",
            show:false
        }
    },
    methods: {
        showToast(message='默认文字',duration=1500){
           this.message=message
           this.show=true
           setTimeout(()=>{
               this.message=''
               this.show=false
           },duration)
        }
    },
  }

</script>
<style scoped>
  .toast {
    text-align: center;
    border-radius: 10px;
    line-height: 35px;
    background-color: black;
    height: 35px;
    width: 138px;
    position: fixed;
    top: 50%;
    left: 34%;
    right: 50%;
    z-index: 50;
    color: #fff;
    opacity: 0.7;
  }

</style>
