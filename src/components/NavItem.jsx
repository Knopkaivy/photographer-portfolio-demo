import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/NavItem.css';

const NavItem = ({ item }) => {
  const categories = useSelector((state) => state.portfolio.categories);
  let menuList;
  let gallery;
  if (item.menu) {
    menuList = item.menu.map((menuItem) => {
      let linkName = menuItem.toLowerCase().replace(/\s/g, '');
      for (let gal of categories) {
        if (gal.categoryName === menuItem) {
          gallery = gal;
        }
      }
      return (
        <Link
          to={`${item.name}/${linkName}`}
          state={{ gallery: gallery }}
          key={linkName}
          className="NavItem NavItem__menuItem"
        >
          {menuItem}
        </Link>
      );
    });
  }
  return (
    <div className={item.menu ? 'NavItem__menuContainer' : null}>
      <Link
        to={item.name === 'home' ? '/' : item.name}
        className={`NavItem ${item.name === 'Home' ? 'NavItem-active' : null}`}
      >
        {item.name}
      </Link>
      <div className={item.menu ? 'NavItem__menu' : 'NavItem__menu-closed'}>
        {item.menu && menuList}
      </div>
    </div>
  );
};

export default NavItem;
