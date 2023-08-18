import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    purchaseItems: [],
    isOpen: false,
  },
  reducers: {
    add: (state, action) => {
      state.purchaseItems.push(action.payload);
    },
    remove: (state, action) => {
      state.purchaseItems = state.purchaseItems.filter(
        (item) => item.id !== action.payload
      );
    },
    update: (state, action) => {
      state.purchaseItems = state.purchaseItems.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.newItem;
        } else {
          return item;
        }
      });
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    openCart: (state) => {
      state.isOpen = true;
    },
  },
});

export const { add, remove, update, closeCart, openCart } = cartSlice.actions;
export default cartSlice.reducer;
