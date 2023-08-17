import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';
import shareOverlayReducer from '../features/shareOverlay/shareOverlaySlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    portfolio: portfolioReducer,
    shareOverlay: shareOverlayReducer,
  },
});
