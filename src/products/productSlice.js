import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    resetProducts: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, resetProducts } = productSlice.actions;
export default productSlice.reducer;