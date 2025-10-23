import { configureStore } from "@reduxjs/toolkit";
import plantsSliceReducer from "../features/ProductList/plantsSlice";
import plantersSliceReducer from "../features/ProductList/plantersSlice";

export const store = configureStore({
  reducer: {
    plantProducts: plantsSliceReducer,
    potsPlantersProducts: plantersSliceReducer
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
