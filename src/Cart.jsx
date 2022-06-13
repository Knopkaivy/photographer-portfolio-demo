import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import CartItem from './CartItem';
import './styles/Cart.css';

const Cart = ({ closeCart }) => {
  const purchaseItemsStarter = [
    {
      imgURL: '',
      name: 'Image 1',
      label: 'Commercial Use - Web Ready',
      detail: '1200px x 798px / 16.6 x 11" @72dpi',
    },
    {
      imgURL: '',
      name: 'Image 2',
      label: 'Commercial Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
    },
    {
      imgURL: '',
      name: 'Image 3',
      label: 'Extended Use - Web Ready',
      detail: '1200px x 625px / 16.6" x 8.6" @72dpi',
    },
    {
      imgURL: '',
      name: 'Image 4',
      label: 'Extended Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
    },
  ];

  const [purchaseItems, setPurchaseItems] = useState(purchaseItemsStarter);

  let handleCloseCart = (event) => {
    console.log('closing cart');
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
      />
    );
  });

  return (
    <div id="Cart" className="Cart" onClick={clickAway}>
      <div className="Cart__menu">
        <div className="Cart__headerSection">
          <div className="Cart__close" onClick={handleCloseCart}>
            <BsChevronRight />
          </div>
          <h2 className="Cart__header">Cart (2)</h2>
        </div>
        <div className="Cart__list">{purchaseList}</div>

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
