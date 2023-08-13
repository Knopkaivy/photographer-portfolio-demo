import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutList from './CheckoutList';
import '../styles/Checkout.css';

const Checkout = ({ purchaseItems, cartSubtotal, openCart }) => {
  const navigate = useNavigate();

  let continueShopping = () => {
    navigate(-1);
  };

  let editCart = () => {
    navigate(-1);
    openCart();
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
        <CheckoutList
          purchaseItems={purchaseItems}
          cartSubtotal={cartSubtotal}
          editCart={editCart}
        />
      </div>
    </div>
  );
};

export default Checkout;
