import { basket } from "../../type";

export const totalCount = (basket: basket[]) =>  basket.reduce((sum: number, obj) => obj.count +sum, 0)