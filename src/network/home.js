import {request} from 'network/request'
import { requestLocal } from './request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoodsList(){
    return requestLocal({
        url:'/data.json'
    })
}

export function getMoreGoodsList(){
    return requestLocal({
        url:'/data.json'
    })
}
