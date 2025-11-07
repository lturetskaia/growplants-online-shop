import { configureStore, isAnyOf } from "@reduxjs/toolkit";
import plantsSliceReducer from "../features/ProductList/plantsSlice";
import plantersSliceReducer from "../features/ProductList/plantersSlice";
import cartSliceReducer from "../features/Cart/cartSlice";
import { cartSliceActions } from "../features/Cart/cartSlice";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import type { CartItem } from "common/types";

//create the listener middleware
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    cartSliceActions.addItem,
    cartSliceActions.removeItem,
    cartSliceActions.decrementQuantity,
    cartSliceActions.incrementQuantity
  ),
  effect: () => {
    const cartState = store.getState().cart;
    try {
      localStorage.setItem("cart", JSON.stringify(cartState));
    } catch (err) {
      //Ignore write errors for local storage
    }
  },
});

const rehydrateStore = (): CartItem[] | null => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};
const cartLocalData = rehydrateStore() || [];

export const store = configureStore({
  reducer: {
    plantProducts: plantsSliceReducer,
    potsPlantersProducts: plantersSliceReducer,
    cart: cartSliceReducer,
  },
  preloadedState: { cart: cartLocalData },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
