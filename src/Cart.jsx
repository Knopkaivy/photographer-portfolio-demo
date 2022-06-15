import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import CartItem from './CartItem';
import './styles/Cart.css';

const Cart = ({ cartIsOpen, closeCart }) => {
  const purchaseItemsStarter = [
    {
      imgURL: '',
      name: 'Image 1',
      label: 'Commercial Use - Web Ready',
      detail: '1200px x 798px / 16.6 x 11" @72dpi',
      id: '1',
    },
    {
      imgURL: '',
      name: 'Image 2',
      label: 'Commercial Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
      id: '12',
    },
    {
      imgURL: '',
      name: 'Image 3',
      label: 'Extended Use - Web Ready',
      detail: '1200px x 625px / 16.6" x 8.6" @72dpi',
      id: '123',
    },
    {
      imgURL: '',
      name: 'Image 4',
      label: 'Extended Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
      id: '1234',
    },
  ];

  const [purchaseItems, setPurchaseItems] = useState(purchaseItemsStarter);
  const [subtotal, setSubtotal] = useState(0);

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
            Cart {purchaseItems.length > 0 && purchaseItems.length}
          </h2>
        </div>
        <div className="Cart__list">{purchaseList}</div>

        <div className="Cart__checkoutSection">
          <div className="Cart__subtotal">
            <div>Subtotal</div>
            <div>{`$${subtotal}.00`}</div>
          </div>
          <button className="Cart__checkoutBtn btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
