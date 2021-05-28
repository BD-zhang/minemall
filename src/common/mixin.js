import {
  debounce
} from '../common/utils'
import BackTop from 'components/content/backtop/BackTop'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = refresh
    this.$bus.$on('itemimgLoad', this.itemImgListener)
  },
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    listenToPosition(pos) {
      let _pos = -pos.y
      if (parseInt(_pos) > 800) {
        this.isShowBackTop = true
      } else this.isShowBackTop = false
    }
  },
}
