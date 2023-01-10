import { createSlice } from "@reduxjs/toolkit";
import { initialStateFilter } from "../../type";

const initialState: initialStateFilter = {
  indexSelect: { id: 0, sort: "rating", order: "desc" },
  activIndex: 0,
  selectVisibility: false,
  selectValue: ["популярноси", "убывании цены", "повышении цены", "названию"],
  serchState: "",
  page: 1,
  maxCount: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeIndexSelect(state, { payload }) {
      const sorts = ["rating", "price", "price", "title"];
      const orders = ["desc", "desc", "asc", "asc"];
      state.indexSelect = {
        id: payload,
        sort: sorts[payload],
        order: orders[payload],
      };
    },

    changeActiveIndex(state, { payload }) {
      state.activIndex = payload;
    },

    changeSelectVisibilyti(state, { payload }) {
      state.selectVisibility =
        payload === null ? !state.selectVisibility : payload;
    },

    changeSerch(state, { payload }) {
      state.serchState = payload;
    },

    setFilter(state, {payload}) {
      state.indexSelect = {id: Number(payload.index) ,  sort: payload.sortProperty, order: payload.order }
      state.activIndex = Number(payload.categoryId)
    }
  },
});

export const {
  changeActiveIndex,
  changeIndexSelect,
  changeSelectVisibilyti,
  changeSerch,
  setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
