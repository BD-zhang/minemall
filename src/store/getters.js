export default{
    cartLength(state){
        return state.cartList.length
    },
    cartList(state){
        return state.cartList
    },
    totalPrice(state){
        let total=0
        state.cartList.forEach((item)=>{
            if(item.check==true){
                // console.log(item)
                let count=parseInt(item.count)
                let price=parseInt(item.price.substr(1))
                total=total+(count*price)
            }
        })
        return total
    }
}