import React from 'react';
import './styles/PurchaseForm.css';

const PurchaseForm = () => {
  const purchaseOptions = [
    {
      id: 'licenseChoice1',
      name: 'commercialWR',
      label: 'Commercial Use - Web Ready',
      detail: '1200px x 625px / 16.6" x 8.6" @72dpi',
      price: '$10.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
    {
      id: 'licenseChoice2',
      name: 'commercialOF',
      label: 'Commercial Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
      price: '$15.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
    {
      id: 'licenseChoice3',
      name: 'extendedWR',
      label: 'Extended Use - Web Ready',
      detail: '1200px x 625px / 16.6" x 8.6" @72dpi',
      price: '$20.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
    {
      id: 'licenseChoice4',
      name: 'extendedOF',
      label: 'Extended Use - Original File',
      detail: '1920px x 1000px / 6.4" x 3.3" @300dpi',
      price: '$25.00',
      memo: 'This license offers images, illustrations and photos for commercial use. With this license, content can be used in promotional campaigns such as advertising, as well as on websites and blogs. Permissions are for web and digital use only and does not require the owner to be credited.',
    },
  ];
  return (
    <form className="PurchaseForm">
      <h3 className="PurchaseForm__header">Select License</h3>
      <div className="PurchaseForm__radioGroup">
        <div className="PurchaseForm__radioItem">
          <div className="PurchaseForm__radioItemDescription">
            <input
              type="radio"
              id="licenseChoice1"
              name="commercialWR"
              value=""
            />
            <label for="licenseChoice1">Commercial Use - Web Ready</label>
            <p>1200px x 625px / 16.6" x 8.6" @72dpi</p>
          </div>
          <div className="PurchaseForm__radioItemPrice">$10.00</div>
        </div>
        <div className="PurchaseForm__radioItem">
          <input
            type="radio"
            id="licenseChoice2"
            name="commercialOF"
            value=""
          />
          <label for="licenseChoice1">Commercial Use - Original File</label>
        </div>
        <div className="PurchaseForm__radioItem">
          <input type="radio" id="licenseChoice3" name="extendedWR" value="" />
          <label for="licenseChoice1">Extended Use - Web Ready</label>
        </div>
        <div className="PurchaseForm__radioItem">
          <input type="radio" id="licenseChoice4" name="extendedOF" value="" />
          <label for="licenseChoice1">Extended Use - Original File</label>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PurchaseForm;
