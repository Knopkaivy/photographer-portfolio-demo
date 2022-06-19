import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import CartItem from './CartItem';
import './styles/Cart.css';

const Cart = ({
  cartSubtotal,
  cartIsOpen,
  closeCart,
  purchaseItems,
  removeItemFromCart,
  updateItemInCart,
  goToCheckout,
}) => {
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
        key={item.id}
        imageUrl={item.imageUrl}
        name={item.name}
        label={item.label}
        licenseId={item.licenseId}
        detail={item.detail}
        id={item.id}
        removeItemFromCart={removeItemFromCart}
        updateItemInCart={updateItemInCart}
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
          <h2 className="Cart__header">{`Cart (${purchaseItems.length})`}</h2>
        </div>
        <div className="Cart__list">
          {purchaseItems.length > 0 && purchaseList}
        </div>

        <div className="Cart__checkoutSection">
          <div className="Cart__subtotal">
            <div>Subtotal</div>
            <div>{`$${cartSubtotal}.00`}</div>
          </div>
          <button
            className="Cart__checkoutBtn btn"
            disabled={cartSubtotal === 0}
            onClick={goToCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
