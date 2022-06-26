import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { licenseOptions } from './licenseOption';
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

  let handleChangeOption = (event) => {
    let newId = event.target.id;
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

  const purchaseList = licenseOptions.map((option) => {
    return (
      <div className="PurchaseForm__radioItem" key={option.licenseId}>
        <input
          type="radio"
          id={option.licenseId}
          name="license"
          defaultChecked={
            currentOption !== null &&
            option.licenseId === currentOption.licenseId
          }
        />
        <div className="PurchaseForm__radioItemDescription">
          <label
            className="PurchaseForm__radioItemLabel"
            htmlFor={option.licenseId}
          >
            {option.label}
            <div className="PurchaseForm__radioItemMemo">{option.memo}</div>
          </label>
          <p>{option.detail}</p>
        </div>
        <div className="PurchaseForm__radioItemPrice">{`$${option.price}.00`}</div>
      </div>
    );
  });
  return (
    <form
      className="PurchaseForm"
      onChange={handleChangeOption}
      onSubmit={handleSubmitPurchase}
    >
      <h3 className="PurchaseForm__header">Select License</h3>
      <div className="PurchaseForm__radioGroup">{purchaseList}</div>
      <div className="PurchaseForm__buttonContainer">
        <button type="submit" className="btn">
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
