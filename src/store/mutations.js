import {
  ADD_COUNTER,
  ADD_TO_CART,
  BUTTON_SELECT,
  SELECT_ALL,
  CANCEL_ALL
} from './mutation-types'

export default {
  //mutations唯一的目的是修改state中的状态
  //mutations中的每个方法尽可能完成的事比较单一一点
  [ADD_COUNTER](state, oldId) {
    let id = parseInt(oldId)
    state.cartList[id].count++
  },
  [ADD_TO_CART](state, payload) {
    payload.check = true
    state.cartList.push(payload)
  },
  [BUTTON_SELECT](state, payload) {
    state.cartList[parseInt(payload)].check = !state.cartList[parseInt(payload)].check
  },
  [SELECT_ALL](state){
    state.cartList.forEach(item=>{
      item.check=true
    })
  },
  [CANCEL_ALL](state){
    state.cartList.forEach(item=>{
      item.check=false
    })
  }
}
