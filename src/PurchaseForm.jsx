import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { licenseOptions } from './utilities/licenseOption';
import RadioGroup from './RadioGroup';
import './styles/PurchaseForm.css';

const PurchaseForm = ({
  photoId,
  photoTitle,
  openCart,
  purchaseItems,
  addItemToCart,
  goToCheckout,
}) => {
  const [currentOption, setCurrentOption] = useState(licenseOptions[0]);

  let changeOption = (newId) => {
    let newOption = {};
    for (let option of licenseOptions) {
      if (option.licenseId === newId) {
        newOption = { ...option };
        setCurrentOption(newOption);
        break;
      }
    }
  };

  let handleSubmitPurchase = (event) => {
    event.preventDefault();
    if (currentOption !== null) {
      let item = { ...currentOption };
      item.id = uuidv4();
      item.name = photoTitle;
      item.imageUrl = `${photoId.charAt(0).toUpperCase()}${photoId
        .slice(1)
        .replace('-', '')}md`;
      addItemToCart(item);
      openCart();
    }
  };

  useEffect(() => {
    setCurrentOption(licenseOptions[0]);
  }, [photoId]);

  return (
    <form className="PurchaseForm" onSubmit={handleSubmitPurchase}>
      <h3 className="PurchaseForm__header">Select License</h3>
      <RadioGroup currentOption={currentOption} changeOption={changeOption} />
      <div className="PurchaseForm__buttonContainer">
        <button type="submit" className="PurchaseForm__button btn">
          Add to Cart
        </button>
      </div>
      <div className="PurchaseForm__checkoutLink link" onClick={goToCheckout}>
        {purchaseItems.length > 0 &&
          `Continue to Checkout (${purchaseItems.length})`}
      </div>
    </form>
  );
};

export default PurchaseForm;
