import { createSlice } from "@reduxjs/toolkit";
import type { CartData } from "common/types";
import type { CartItem } from "common/types";

const initialState: CartData = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.length > 0) {
        const index = state.findIndex(
          (cartItem) =>
            cartItem.id === action.payload.id &&
            action.payload.option === cartItem.option
        );

        //if the cart already has an entry with the same id and option
        //add quantity to the existing item
        if (index >= 0) {
          state[index].quantity += action.payload.quantity;
          return;
        }
      }
      // otherwise, create a new entry
      state.push(action.payload);
    },

    removeItem: (state, action) => {
      if (state.length > 0) {
        const updatedState = state.filter(
          (cartItem) =>
            action.payload.option !== cartItem.option ||
            cartItem.id !== action.payload.id
        );
        return updatedState;
      }
    },

    decrementQuantity(state, action: { payload: CartItem }) {
      if (state.length > 0) {
        const index = state.findIndex(
          (cartItem) =>
            cartItem.id === action.payload.id &&
            action.payload.option === cartItem.option
        );

        //if the entry is found
        //decrease the quantity to the existing item by 1
        if (index >= 0) {
          {
            state[index].quantity -= 1;
            return;
          }
        }
      }
    },

    incrementQuantity(state, action) {
      if (state.length > 0) {
        const index = state.findIndex(
          (cartItem) =>
            cartItem.id === action.payload.id &&
            action.payload.option === cartItem.option
        );

        //if the entry is found
        //increase the quantity to the existing item by 1
        if (index >= 0) {
          state[index].quantity += 1;
          return;
        }
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
