import React from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import NavItem from './NavItem';
import './styles/Header.css';

const Header = ({ portfolio, openCart, purchaseItems }) => {
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
      <nav className="Header container">
        <Link to="/" className="Header__Logo">
          A-W
        </Link>
        {listItems}
        <div
          className="Header__ListItem Header__ListItem-cart"
          onClick={openCart}
        >
          <BsBag className="Header__ListItem-cartIcon" />{' '}
          <span>{purchaseItems.length}</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
