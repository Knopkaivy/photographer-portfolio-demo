import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import NavItem from './NavItem';
import './styles/Header.css';

const Header = () => {
  const navList = [
    { name: 'home' },
    {
      name: 'portfolio',
      menu: ['the Desert', 'high sierra', 'beach', 'forests wilderness'],
    },
    { name: 'bio' },
    { name: 'store' },
  ];
  const listItems = navList.map((item) => {
    return <NavItem item={item} />;
  });
  return (
    <div className="Header__Fixed">
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
