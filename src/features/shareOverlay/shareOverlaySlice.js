import { createSlice } from '@reduxjs/toolkit';

export const shareOverlaySlice = createSlice({
  name: 'shareOverlay',
  initialState: {
    isOpen: false,
    linkVal: '/',
  },
  reducers: {
    close: (state) => {
      state.isOpen = false;
      state.linkVal = '/';
    },
    open: (state, action) => {
      state.isOpen = true;
      state.linkVal = action.payload.val;
    },
  },
});

export const { close, open } = shareOverlaySlice.actions;
export default shareOverlaySlice.reducer;
