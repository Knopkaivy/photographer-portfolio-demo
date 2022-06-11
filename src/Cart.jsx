import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import './styles/Cart.css';

const Cart = ({ closeCart }) => {
  const purchaseItems = [
    {
      imgURL: '',
      name: 'Image 1',
      label: '',
      detail: '1200px x 798px / 16.6 x 11" @72dpi',
    },
    {
      imgURL: '',
      name: 'Image 2',
      label: '',
      detail: '4256px x 2832px / 14.1 x 9.4" @300dpi',
    },
    {
      imgURL: '',
      name: 'Image 3',
      label: '',
      detail: '1200px x 798px / 16.6 x 11" @72dpi',
    },
  ];

  let handleCloseCart = (event) => {
    event.stopPropagation();
    closeCart();
  };
  let clickAway = (event) => {
    if (event.target.id === 'Cart') {
      closeCart();
    }
    return;
  };
  return (
    <div id="Cart" className="Cart" onClick={clickAway}>
      <div className="Cart__menu">
        <div className="Cart__headerSection" onClick={handleCloseCart}>
          <div className="Cart__close">
            <BsChevronRight />
          </div>
          <h2 className="Cart__header">Cart (2)</h2>
        </div>
        <div className="Cart__list">
          <div className="Cart__listItem">Item 1</div>
          <div className="Cart__listItem">Item 2</div>
        </div>

        <div className="Cart__checkoutSection">
          <div className="Cart__subtotal">
            <div>Subtotal</div>
            <div>$20.00</div>
          </div>
          <button className="Cart__checkoutBtn btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
