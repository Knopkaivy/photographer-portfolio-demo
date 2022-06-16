import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import CartItem from './CartItem';
import './styles/Cart.css';

const Cart = ({ cartSubtotal, cartIsOpen, closeCart, purchaseItems }) => {
  // const [purchaseItems, setPurchaseItems] = useState(purchaseItemsStarter);

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

  let purchaseList = purchaseItems.map((item) => {
    return (
      <CartItem
        imageURL={item.imgURL}
        name={item.name}
        label={item.label}
        detail={item.detail}
        id={item.id}
        key={item.id}
      />
    );
  });

  return (
    <div id="Cart" className="Cart" onClick={clickAway}>
      <div
        className={`Cart__backdrop ${cartIsOpen && 'Cart__backdrop-isOpen'}`}
        onClick={clickAway}
      ></div>
      <div className={`Cart__menu ${cartIsOpen && 'Cart__menu-isOpen'}`}>
        <div className="Cart__headerSection">
          <div className="Cart__close" onClick={handleCloseCart}>
            <BsChevronRight />
          </div>
          <h2 className="Cart__header">
            {`Cart (${purchaseItems.length > 0 && purchaseItems.length})`}
          </h2>
        </div>
        <div className="Cart__list">
          {purchaseItems.length > 0 && purchaseList}
        </div>

        <div className="Cart__checkoutSection">
          <div className="Cart__subtotal">
            <div>Subtotal</div>
            <div>{`$${cartSubtotal}.00`}</div>
          </div>
          <button className="Cart__checkoutBtn btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
