import { createSlice } from "@reduxjs/toolkit";
import { getBascetLS } from "../../components/utils/getBascetLS";
import { totalCount } from "../../components/utils/totalCount";
import { totalPrice } from "../../components/utils/totalPrice";
import { basket, initialSateBasket } from "../../type";
import { RootState } from "../store";

const {items, count, price} = getBascetLS()

const initialState: initialSateBasket = {
  basket: items,
  totalPrice: price,
  totalCount: count,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket(state, { payload }) {
      const findItems = state.basket.find(
        (obj: basket) =>
          obj.id === payload.id &&
          obj.sizes === payload.sizes &&
          obj.types === payload.types
      );

      if (findItems) {
        findItems.count++;
      } else {
        state.basket = [...state.basket, payload];
      }

      state.totalPrice = totalPrice(state.basket);
      state.totalCount = totalCount(state.basket);
    },

    removeItem(state, { payload }) {
      const findItems = state.basket.find(
        (obj) =>
          obj.id === payload.id &&
          obj.sizes === payload.sizes &&
          obj.types === payload.types
      );

      if (findItems && payload.type === "item") {
        findItems.count--;
      }

      if ((findItems && payload.type === "id") || findItems?.count === 0) {
        state.basket = state.basket.filter((obj) => obj !== findItems);
      }

      state.totalPrice = totalPrice(state.basket);
      state.totalCount = totalCount(state.basket);
      // state.totalPrice = state.basket.reduce((sum: number, obj:basket) => sum + (obj.price * obj?.count), 0)
      // state.totalCount = state.basket.reduce((sum: number, obj: basket) => obj?.count +sum, 0)
    },

    removeBasket(state) {
      state.basket = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const selectBasket = (state: RootState) => state.basketItem;
export const selectBasketId = (id: number) => (state: RootState) =>
  state.basketItem.basket
    ?.filter((item: basket) => item.id === id)
    ?.reduce((sum: number, obj: basket) => obj.count + sum, 0);

export const { addBasket, removeItem, removeBasket } = basketSlice.actions;

export default basketSlice.reducer;
