import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalPrice -= state.cartItems[index].price;
        state.cartItems.splice(index, 1);
      }
    },
    updateProductCount: (state, action) => {
      const { product, count } = action.payload;
      const item = state.cartItems.find(item => item.id === product.id);
      if (item) {
        state.totalPrice -= item.price * item.count;
        item.count = count;
        state.totalPrice += item.price * count;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateProductCount } = cartSlice.actions;
export default cartSlice.reducer;
