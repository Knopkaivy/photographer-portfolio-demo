import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { remove, update } from '../features/cart/cartSlice';
import { images } from '../utilities/images';
import SelectLicense from './SelectLicense';
import { licenseOptions } from '../utilities/licenseOption';
import '../styles/CartItem.css';

const CartItem = ({ imageUrl, name, label, detail, id }) => {
  const [currentOption, setCurrentOption] = useState(label);
  const dispatch = useDispatch();

  let handleRemoveItemFromCart = () => {
    dispatch(remove(id));
  };

  let updateOption = (newVal) => {
    setCurrentOption(newVal);
    let newLicense = licenseOptions.find((option) => option.label === newVal);
    let newItem = { ...newLicense, id, imageUrl, name };
    dispatch(update({ id, newItem }));
  };

  // let optionsList = licenseOptions.map((item) => {
  //   return (
  //     <option
  //       className="CartItem__licenseOption"
  //       value={item.label}
  //       key={item.licenseId}
  //     >
  //       {`${item.label} - $${item.price}.00`}
  //     </option>
  //   );
  // });
  return (
    <div className="CartItem">
      <div className="CartItem__imageContainer">
        <img src={images[imageUrl]} alt="preview" className="CartItem__image" />
      </div>
      <div className="CartItem__descriptionContainer">
        <div className="CartItem__delete" onClick={handleRemoveItemFromCart}>
          <IoMdClose className="icon" />
        </div>
        <h3 className="CartItem__name">{name}</h3>
        <p className="CartItem__detail">{detail}</p>
        <SelectLicense
          currentOption={currentOption}
          updateOption={updateOption}
          parent="Cart"
        />
        {/* <div className="CartItem__licenseMenu">
          <select
            name="license"
            id="licenseSelect"
            defaultValue={currentLicenseOption}
            className="CartItem__licenseSelect"
            onChange={handleUpdateLicenseOption}
          >
            {optionsList}
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default CartItem;
