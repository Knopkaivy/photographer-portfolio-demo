import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    purchaseItems: [],
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
  },
});

export const { add, remove, update } = cartSlice.actions;
export default cartSlice.reducer;
