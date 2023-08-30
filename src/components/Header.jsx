import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { navList } from '../utilities/navList';
import NavItem from './NavItem';
import '../styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const purchaseCount = useSelector((state) => state.cart.purchaseItems.length);

  const handleOpenCart = () => {
    dispatch(openCart());
  };

  const listItems = navList.map((item) => {
    return <NavItem item={item} key={item.name} />;
  });
  return (
    <div className="Header__Fixed">
      <nav className="Header container">
        <Link to="/" className="Header__Logo" aria-label="Home page">
          A-W
        </Link>
        {listItems}
        <div
          className="Header__ListItem Header__ListItem-cart"
          onClick={handleOpenCart}
          role="button"
          tabIndex={0}
        >
          <BsBag
            className="Header__ListItem-cartIcon"
            aria-label={`shopping cart with ${purchaseCount} items in it`}
          />{' '}
          <span>{purchaseCount}</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
