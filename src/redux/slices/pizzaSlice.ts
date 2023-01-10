import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pizzaParams } from "../../api/api";
import { getItemsPizza, initialStatePizzas } from "../../type";

const initialState: initialStatePizzas = {
  pizzaState: [],
  loader: "",
  error: null,
};

export const fetchPizzaStatus = createAsyncThunk(
  "pizza/fetcgPizzaStatus",
  async ({ indexSelect, activIndex }: getItemsPizza) =>
    pizzaParams.getItems(indexSelect, activIndex)
);

export const pizzaSlice = createSlice({
  name: "pizzaState",
  initialState,
  reducers: {
    addState: (state, { payload }) => {
      state.pizzaState = payload;
    },

    changeLoader(state, { payload }) {
      state.loader = payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchPizzaStatus.pending, (state) => {
      state.loader = "loading";
      state.pizzaState = [];
    });
    builder.addCase(fetchPizzaStatus.fulfilled, (state, { payload }) => {
      state.loader = "success";
      state.pizzaState = payload;
    });
    builder.addCase(fetchPizzaStatus.rejected, (state) => {
      state.loader = "error";
      state.pizzaState = [];
    });
  },
});

export const { addState, changeLoader } = pizzaSlice.actions;

export default pizzaSlice.reducer;
