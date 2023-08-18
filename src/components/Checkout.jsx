import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openCart } from '../features/cart/cartSlice';
import CheckoutList from './CheckoutList';
import '../styles/Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let continueShopping = () => {
    navigate(-1);
  };

  const editCart = () => {
    navigate(-1);
    dispatch(openCart());
  };

  return (
    <div className="Checkout">
      <div className="Checkout__headerBar">
        <div className="Checkout__headerContainer container">
          <h2 className="Checkout__header">Checkout</h2>
          <div
            className="Checkout__shoppingLink link"
            onClick={continueShopping}
          >
            Continue Shopping
          </div>
        </div>
      </div>
      <div className="Checkout__main container">
        <div className="Checkout__message">
          We are unable to accept online payments at this time. Please get in
          touch to complete your purchase.
        </div>
        <CheckoutList editCart={editCart} />
      </div>
    </div>
  );
};

export default Checkout;
