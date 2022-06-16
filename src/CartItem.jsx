import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { images } from './images';
import { licenseOptions } from './licenseOption';
import './styles/CartItem.css';

const CartItem = ({ imageURL, name, label, detail }) => {
  const [currentLicenseOption, setCurrentLicenseOption] = useState(label);
  let optionsList = licenseOptions.map((item) => {
    return (
      <option
        selected={item.label === currentLicenseOption}
        className="CartItem__licenseOption"
      >
        {item.label}
        <span> - {item.price}</span>
      </option>
    );
  });
  return (
    <div className="CartItem">
      <div className="CartItem__imageContainer">
        <img src={images.Forest1md} alt="preview" className="CartItem__image" />
      </div>
      <div className="CartItem__descriptionContainer">
        <div className="CartItem__delete">
          <IoMdClose />
        </div>
        <h3 className="CartItem__name">{name}</h3>
        <p className="CartItem__detail">{detail}</p>
        <div className="CartItem__licenseMenu">
          <select
            name="license"
            id="licenseSelect"
            className="CartItem__licenseSelect"
          >
            {optionsList}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartItem;