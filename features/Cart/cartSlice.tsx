import { createSlice } from "@reduxjs/toolkit";
import cartData from '../../backend/data/cartData.json';
import type { CartData} from "common/types";

const initialState: CartData = cartData;

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers:{}
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;