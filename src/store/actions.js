import {
  ADD_COUNTER,
  ADD_TO_CART,
  SELECT_ALL,
  CANCEL_ALL
} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.查找之前数组是否有该商品
      let oldProduct = context.state.cartList.find(item => item.id == payload.id) //find()直接获取了cartlist的元素，故payload指向的是state
      // 2.判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct.id)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1
        payload.check = true
        context.commit(ADD_TO_CART, payload)
        resolve('添加新商品')
      }
      reject('添加失败')
    })
  },
  select_all(context) {
    context.commit(SELECT_ALL)
  },
  cancel_all(context) {
    context.commit(CANCEL_ALL)
  }
}
