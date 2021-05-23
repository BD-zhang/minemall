import {debounce} from '../common/utils'

export const itemListenerMixin = {
data() {
    return {
        itemImgListener:null
    }
},
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = refresh
    this.$bus.$on('itemimgLoad', this.itemImgListener)
    // console.log('mixin')
  },
}
