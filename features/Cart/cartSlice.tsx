import { createSlice } from "@reduxjs/toolkit";
import type { CartData } from "common/types";

const initialState: CartData = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("Adding a new item to the cart", action.payload);
      if (state.length > 0) {
        const index = state.findIndex(
          (cartItem) =>
            cartItem.id === action.payload.id &&
            action.payload.option === cartItem.option
        );

        //if the cart already has an entry with the same id and option
        //add quantity to the existing item
        if (index >= 0) {
          console.log("update quantity");
          state[index].quantity += action.payload.quantity;
          return;
        }
      }
      console.log("Update state");
      // otherwise, create a new entry
      state.push(action.payload);
    },

    removeItem: (state) => {},
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
