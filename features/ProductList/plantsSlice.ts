import { createSlice } from "@reduxjs/toolkit";
import products from '../../backend/data/plantProducts.json';
import type { ProductItem } from "common/types";

const initialState: ProductItem[] = products;

export const plantsSlice = createSlice({
    name: 'plantProducts',
    initialState,
    reducers: {
    }
})


export const plantsActions = plantsSlice.actions;

export default plantsSlice.reducer;