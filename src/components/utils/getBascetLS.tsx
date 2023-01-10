import { totalCount } from "./totalCount"
import { totalPrice } from "./totalPrice"

 export const getBascetLS = () => {
    const data = window.localStorage.getItem("_bascet")
    const items = data ? JSON.parse(data) : []
    return {
        items,
        price: totalPrice(items),
        count: totalCount(items) 
    }
 }