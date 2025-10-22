import { createSlice } from "@reduxjs/toolkit";
import products from '../../backend/data/products.json';

export interface PlantItem {
  id: number;
  name: string;
  category: string;
  type: string;
  quantity: number;
  price: number;
  description: string;
  isStock: boolean;
  image: string;
}

const initialState: Array <PlantItem> = products;

export const plantsSlice = createSlice({
    name: 'plantProducts',
    initialState,
    reducers: {

    }
})

// const getPlantsData = () => {
//   return (dispatch) => {
//     dispatch();
//   }
// }

export const plantsActions = plantsSlice.actions;

export default plantsSlice.reducer;