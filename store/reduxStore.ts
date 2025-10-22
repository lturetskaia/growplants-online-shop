import { configureStore } from "@reduxjs/toolkit";
import { plantsSlice } from "features/productList/plantsSlice";

export const store = configureStore({
  reducer: {
    plantProducts: plantsSlice.reducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
