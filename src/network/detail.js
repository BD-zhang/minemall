import {
  requestLocal
} from 'network/request'

export function getDetailData() {
  return requestLocal({
    url: '/detail.json',
    // params:{
    //     id
    // }
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldprice = itemInfo.oldprice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}


export class GoodsParamsInfo {
  constructor(paramsInfo) {
    this.info = paramsInfo.info
  }
}


export class CommentsInfo{
  constructor(CommentsInfo){
    this.profilePhoto=CommentsInfo.profilePhoto
    this.nickName=CommentsInfo.nickName
    this.comment=CommentsInfo.comment
    this.photos=CommentsInfo.photos
    this.date=CommentsInfo.date
    this.stars=CommentsInfo.stars
    this.goodsSize=CommentsInfo.goodsSize
    this.goodsColor=CommentsInfo.goodsColor
  }
}
