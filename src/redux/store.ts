import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";

import filterSlice from "./slices/filterSlice";
import pizzaSlice from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    pizzaSlice,
    filter: filterSlice,
    basketItem: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
