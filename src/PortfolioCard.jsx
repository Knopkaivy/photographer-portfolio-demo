import React from 'react';
import './styles/PortfolioCard.css';

const PortfolioCard = ({ category, image, index, link }) => {
  console.log(Object.values(image)[0]);
  return (
    <div className="PortfolioCard">
      <p className="PortfolioCard__Index">{index}</p>
      <div className="PortfolioCard__ImageContainer">
        <img
          src={Object.values(image)[0]}
          alt={`${category} cover`}
          className="PortfolioCard__Image"
        />
      </div>
      <h2 className="PortfolioCard__Header">{category}</h2>
      <div className="PortfolioCard__LinkContainer">
        <a href="#" className="PortfolioCard__Link">
          See More
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
