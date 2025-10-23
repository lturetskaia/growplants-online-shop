import { createSlice} from "@reduxjs/toolkit";
import products from '../../backend/data/gardeningProducts.json';
import type { ProductItem } from "common/types";

const initialState: ProductItem[] = products;
const plantersSlice = createSlice({
    name: 'potsPlantersProducts',
    initialState,
    reducers:{}
})

export const plantersActions = plantersSlice.actions;
export default plantersSlice.reducer;