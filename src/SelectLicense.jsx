import React from 'react';
import { licenseOptions } from './utilities/licenseOption';
import './styles/SelectLicense.css';

const SelectLicense = ({ currentOption, updateOption }) => {
  let handleUpdateOption = (event) => {
    updateOption(event.target.value);
  };
  let optionsList = licenseOptions.map((item) => {
    return (
      <option
        className="SelectLicense__option"
        value={item.label}
        key={item.licenseId}
      >
        {`${item.label} - $${item.price}.00`}
      </option>
    );
  });
  return (
    <div className="SelectLicense__menu">
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
