import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { navList } from '../utilities/navList';
import NavItem from './NavItem';
import '../styles/Header.css';

const Header = ({ openCart }) => {
  const purchaseCount = useSelector((state) => state.cart.purchaseItems.length);

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
          onClick={openCart}
        >
          <BsBag className="Header__ListItem-cartIcon" />{' '}
          <span>{purchaseCount}</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
