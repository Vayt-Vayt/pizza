import { basket } from "../../type";

export const totalPrice = (basket: basket[]) => basket.reduce((sum: number, obj) => sum + (obj.price * obj.count), 0)