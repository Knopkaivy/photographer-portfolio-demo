import React from 'react';
import { licenseOptions } from './utilities/licenseOption';
import './styles/RadioGroup.css';

const RadioGroup = ({ currentOption, changeOption }) => {
  let handleChangeOption = (event) => {
    console.log(event.target.id);
    changeOption(event.target.id);
  };
  const optionList = licenseOptions.map((option) => {
    return (
      <div className="RadioGroup__item" key={option.licenseId}>
        <input
          type="radio"
          id={option.licenseId}
          name="license"
          checked={
            currentOption !== null &&
            option.licenseId === currentOption.licenseId
          }
          onChange={handleChangeOption}
        />
        <div className="RadioGroup__itemDescription">
          <label className="RadioGroup__itemLabel" htmlFor={option.licenseId}>
            {option.label}
            <div className="RadioGroup__itemMemo">{option.memo}</div>
          </label>
          <p>{option.detail}</p>
        </div>
        <div className="RadioGroup__itemPrice">{`$${option.price}.00`}</div>
      </div>
    );
  });
  return <div className="RadioGroup">{optionList}</div>;
};

export default RadioGroup;
