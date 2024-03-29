import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { add, closeCart, openCart } from '../features/cart/cartSlice';
import { licenseOptions } from '../utilities/licenseOption';
import RadioGroup from './RadioGroup';
import SelectLicense from './SelectLicense';
import '../styles/PurchaseForm.css';

const PurchaseForm = ({ photoId, photoTitle }) => {
  const navigate = useNavigate();
  const [currentOption, setCurrentOption] = useState(licenseOptions[0]);
  const dispatch = useDispatch();
  const purchaseCount = useSelector((state) => state.cart.purchaseItems.length);

  const changeOption = (newId) => {
    let newOption = {};
    for (let option of licenseOptions) {
      if (option.licenseId === newId) {
        newOption = { ...option };
        setCurrentOption(newOption);
        break;
      }
    }
  };

  const goToCheckout = () => {
    dispatch(closeCart());
    navigate('/checkout');
  };

  const handleSubmitPurchase = (event) => {
    event.preventDefault();
    if (currentOption !== null) {
      let item = { ...currentOption };
      item.id = uuidv4();
      item.name = photoTitle;
      item.imageUrl = `${photoId.charAt(0).toUpperCase()}${photoId
        .slice(1)
        .replace('-', '')}md`;
      dispatch(add(item));
      dispatch(openCart());
    }
  };

  useEffect(() => {
    setCurrentOption(licenseOptions[0]);
  }, [photoId]);

  return (
    <form className="PurchaseForm" onSubmit={handleSubmitPurchase}>
      <h3 className="PurchaseForm__header">Select License</h3>
      <RadioGroup currentOption={currentOption} changeOption={changeOption} />
      <SelectLicense
        currentOption={currentOption}
        changeOption={changeOption}
        parent="PF"
      />
      <div className="PurchaseForm__buttonContainer">
        <button type="submit" className="PurchaseForm__button btn">
          Add to Cart
        </button>
      </div>
      <div className="PurchaseForm__checkoutLink link" onClick={goToCheckout}>
        {purchaseCount > 0 && `Continue to Checkout (${purchaseCount})`}
      </div>
    </form>
  );
};

export default PurchaseForm;
