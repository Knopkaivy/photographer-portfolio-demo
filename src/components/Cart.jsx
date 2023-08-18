import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../features/cart/cartSlice';
import { BsChevronRight } from 'react-icons/bs';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = ({ goToCheckout }) => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector((state) => state.cart.isOpen);
  const purchaseItems = useSelector((state) => state.cart.purchaseItems);
  const purchaseCount = useSelector((state) => state.cart.purchaseItems.length);
  const cartSubtotal = useSelector((state) =>
    state.cart.purchaseItems.reduce((acc, item) => (acc += item.price), 0)
  );

  let handleCloseCart = (event) => {
    event.stopPropagation();
    dispatch(closeCart());
  };

  let clickAway = (event) => {
    if (event.target.id === 'Cart__backdrop') {
      dispatch(closeCart());
    }
    return;
  };

  let purchaseList = purchaseItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <div className="Cart" onClick={clickAway}>
      <div
        id="Cart__backdrop"
        className={`Cart__backdrop ${cartIsOpen && 'Cart__backdrop-isOpen'}`}
        onClick={clickAway}
      ></div>
      <div className={`Cart__menu ${cartIsOpen && 'Cart__menu-isOpen'}`}>
        <div className="Cart__headerSection">
          <div className="Cart__close" onClick={handleCloseCart}>
            <BsChevronRight />
          </div>
          <h2 className="Cart__header">{`Cart (${purchaseCount})`}</h2>
        </div>
        <div className="Cart__list">{purchaseCount > 0 && purchaseList}</div>

        <div className="Cart__checkoutSection">
          <div className="Cart__subtotal">
            <div>Subtotal</div>
            <div>{`$${cartSubtotal}.00`}</div>
          </div>
          <button
            className="btn"
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
