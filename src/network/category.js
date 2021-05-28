import {requestLocal} from 'network/request'

export function getCategoryData(){
    return requestLocal({
        url:'/category.json'
    })
}

// export class CategoryShowGoods{
//     constructor(categoryShowGoods){
//         this.categoryName=categoryShowGoods.categoryName
//         this.images=categoryShowGoods.images
//     }
// }