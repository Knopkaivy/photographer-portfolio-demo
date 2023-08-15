import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    portfolio: portfolioReducer,
  },
});
