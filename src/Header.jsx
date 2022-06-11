import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import Cart from './Cart';
import NavItem from './NavItem';
import './styles/Header.css';

const Header = ({ portfolio, cartIsOpen, openCart, closeCart }) => {
  const menu = portfolio.categories.map((cat) => {
    return cat.categoryName;
  });
  const navList = [
    { name: 'home' },
    {
      name: 'portfolio',
      menu,
    },
    { name: 'bio' },
  ];
  const listItems = navList.map((item) => {
    return <NavItem item={item} portfolio={portfolio} key={item.name} />;
  });
  return (
    <div className="Header__Fixed">
      <Cart closeCart={closeCart} />
      <nav className="Header container">
        <Link to="/" className="Header__Logo">
          A-W
        </Link>
        {listItems}
        <Link to="/" className="Header__ListItem Header__ListItem-cart">
          <BsBag className="Header__ListItem-cartIcon" /> <span>0</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
