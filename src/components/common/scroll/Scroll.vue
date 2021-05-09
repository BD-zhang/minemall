<template lang="">
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
        return {
           scroll:null
        }
    },
    props:{
        probeType:{
          type:Number,
          default:3
        }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: true
      })
      if(this.probeType==2||this.probeType==3){
        this.scroll.on('scroll',pos=>{
          this.$emit('scrollLength', pos)
        })
        
      }

      // //监听滚动的位置
			// if(this.probeType === 2 || this.probeType === 3){
			// 	this.scroll.on('scroll',position => {
			// 		this.$emit('scroll',position)
			// 	})
			// }
			// //监听上拉事件
			// if(this.pullUpLoad){
			// 	this.scroll.on('pullingUp',()=> {
			// 		this.$emit('pullingUp')
			// 	})
			// }
    },
    methods: {
      scrollTo(x,y,time=500){
         this.scroll.scrollTo(x,y,time)
      } 
    },
  }

</script>
<style scoped>
/* .wrapper{
  height: 300px;
} */
/* .content{
   height: 100%;
} */
</style>
