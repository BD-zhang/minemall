import {request} from 'network/request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/data.json',
        params:{
            type,
            page
        }
    })
}

// export function getHomeGoodsLocal(){
//     return requestLocal({
//         url:'/data.json'
//     })
// }