import React from 'react';
import { licenseOptions } from './utilities/licenseOption';
import './styles/SelectLicense.css';

const SelectLicense = ({
  currentOption,
  changeOption,
  updateOption,
  parent,
}) => {
  let handleUpdateOption = (event) => {
    if (parent === 'PF') {
      let newId;
      for (let option of licenseOptions) {
        if (option.label === event.target.value) {
          newId = option.licenseId;
          break;
        }
      }
      changeOption(newId);
    } else if (parent === 'Cart') {
      updateOption(event.target.value);
    }
  };
  let optionsList = licenseOptions.map((item) => {
    return (
      <option
        className="SelectLicense__option"
        id={item.licenseId}
        value={item.label}
        key={item.licenseId}
      >
        {`${item.label} - $${item.price}.00`}
      </option>
    );
  });
  return (
    <div
      className={`SelectLicense__menu ${
        parent === 'PF' && 'SelectLicense-purchaseFormSelect'
      }`}
    >
      <select
        name="license"
        id="licenseSelect"
        defaultValue={currentOption}
        className="SelectLicense"
        onChange={handleUpdateOption}
      >
        {optionsList}
      </select>
    </div>
  );
};

export default SelectLicense;
