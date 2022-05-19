import React from 'react';
import './styles/NavItem.css';

const NavItem = ({ item }) => {
  let menuList;
  if (item.menu) {
    menuList = item.menu.map((menuItem) => {
      return (
        <a href="#" className="NavItem NavItem__menuItem">
          {menuItem}
        </a>
      );
    });
  }
  return (
    <div className={item.menu ? 'NavItem__menuContainer' : null}>
      <a
        href="#"
        className={`NavItem ${item.name === 'Home' ? 'NavItem-active' : null}`}
      >
        {item.name}
      </a>
      <div className={item.menu ? 'NavItem__menu' : 'NavItem__menu-closed'}>
        {item.menu && menuList}
      </div>
    </div>
  );
};

export default NavItem;
