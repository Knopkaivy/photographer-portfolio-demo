import React, { useState } from 'react';
import { licenseOptions } from './licenseOption';
import './styles/PurchaseForm.css';

const PurchaseForm = ({ openCart }) => {
  const [currentOption, setCurrentOption] = useState(null);

  const purchaseOptions = [
    {
      id: 'commercialWR',
      label: 'Commercial Use - Web Ready',
      detail: '1200px x 625px / 16.6" x 8.6" @72dpi',
      price: '$10.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
    {
      id: 'commercialOF',
      label: 'Commercial Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
      price: '$15.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
    {
      id: 'extendedWR',
      label: 'Extended Use - Web Ready',
      detail: '1200px x 625px / 16.6" x 8.6" @72dpi',
      price: '$20.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
    {
      id: 'extendedOF',
      label: 'Extended Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
      price: '$25.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
  ];

  let handleSubmitPurchase = (event) => {
    event.preventDefault();
    if (currentOption !== null) {
      console.log('submitting', currentOption);
      openCart();
    } else {
      console.log('no item selected');
    }
  };
  let handleSelectOption = (event) => {
    let newId = event.target.id;
    let newOption = {};
    for (let option of purchaseOptions) {
      if (option.id === newId) {
        newOption = { ...option };
        setCurrentOption(newOption);
        break;
      }
    }
  };

  const purchaseList = purchaseOptions.map((option) => {
    return (
      <div className="PurchaseForm__radioItem" key={option.id}>
        <input
          type="radio"
          id={option.id}
          name="license"
          onClick={handleSelectOption}
        />
        <div className="PurchaseForm__radioItemDescription">
          <label className="PurchaseForm__radioItemLabel" htmlFor={option.id}>
            {option.label}
            <div className="PurchaseForm__radioItemMemo">{option.memo}</div>
          </label>
          <p>{option.detail}</p>
        </div>
        <div className="PurchaseForm__radioItemPrice">{option.price}</div>
      </div>
    );
  });
  return (
    <form className="PurchaseForm" onSubmit={handleSubmitPurchase}>
      <h3 className="PurchaseForm__header">Select License</h3>
      <div className="PurchaseForm__radioGroup">{purchaseList}</div>
      <div className="PurchaseForm__buttonContainer">
        <button type="submit" className="PurchaseForm__button">
          Add to Cart
        </button>
      </div>
      <div className="PurchaseForm__checkoutLink">Continue to Checkout (1)</div>
    </form>
  );
};

export default PurchaseForm;
