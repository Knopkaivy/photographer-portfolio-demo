import { createSlice } from '@reduxjs/toolkit';

export const shareOverlaySlice = createSlice({
  name: 'shareOverlay',
  initialState: {
    isOpen: false,
    linkVal: '/',
  },
  reducers: {
    closeShareOverlay: (state) => {
      state.isOpen = false;
      state.linkVal = '/';
    },
    openShareOverlay: (state, action) => {
      state.isOpen = true;
      state.linkVal = action.payload.val;
    },
  },
});

export const { closeShareOverlay, openShareOverlay } =
  shareOverlaySlice.actions;
export default shareOverlaySlice.reducer;
