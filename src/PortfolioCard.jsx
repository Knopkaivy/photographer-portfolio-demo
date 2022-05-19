import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PortfolioCard.css';

const PortfolioCard = ({ category, image, index }) => {
  let linkName = category.toLowerCase().replace(/\s/g, '');
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
        <Link to={`/portfolio/${linkName}`} className="PortfolioCard__Link">
          See More
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
