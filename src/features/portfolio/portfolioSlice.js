import { createSlice } from '@reduxjs/toolkit';
import { starter } from '../../utilities/starter';

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    categories: [...starter.categories],
  },
  reducers: {
    toggleLike: (state, action) => {
      state.categories = state.categories.map((cat) => {
        if (cat.categoryId === action.payload.galleryId) {
          const newPhotosArr = cat.photos.map((item) => {
            if (item.photoId === action.payload.imageId) {
              item.liked = !item.liked;
              return item;
            } else {
              return item;
            }
          });
          return { ...cat, photos: newPhotosArr };
        } else {
          return cat;
        }
      });
    },
  },
});

export const { toggleLike } = portfolioSlice.actions;
export default portfolioSlice.reducer;
