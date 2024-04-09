import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id == action.payload.id
      );
      if (existingProduct) {
        // console.log('im am already in')
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteToCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, num } = action.payload;
      let findItem = state.find((item) => item.id == id);
      if (findItem) {
        findItem.quantity += num;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteToCart, updateQuantity } = cartSlice.actions;
