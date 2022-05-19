import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import NavItem from './NavItem';
import './styles/Header.css';

const Header = () => {
  const navList = [
    { name: 'Home' },
    {
      name: 'Portfolio',
      menu: ['The Desert', 'High Sierra', 'Beach', 'Forests Wilderness'],
    },
    { name: 'Bio' },
    { name: 'Store' },
  ];
  const listItems = navList.map((item) => {
    return <NavItem item={item} />;
  });
  return (
    <div className="Header__Fixed">
      <nav className="Header container">
        <a href="#" className="Header__Logo">
          A-W
        </a>
        {listItems}
        <a href="#" className="Header__ListItem Header__ListItem-cart">
          <BsBag className="Header__ListItem-cartIcon" /> <span>0</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
