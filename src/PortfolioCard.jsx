import React from 'react';
import { Link } from 'react-router-dom';
import { images } from './images';
import './styles/PortfolioCard.css';

const PortfolioCard = ({ obj, category, image, index }) => {
  console.log('category is ', category);
  let linkName = category.toLowerCase().replace(/\s/g, '');
  return (
    <div className="PortfolioCard">
      <p className="PortfolioCard__Index">{index}</p>
      <div className="PortfolioCard__ImageContainer">
        <img
          src={images[image]}
          alt={`${category} cover`}
          className="PortfolioCard__Image"
        />
      </div>
      <h2 className="PortfolioCard__Header">{category}</h2>
      <div className="PortfolioCard__LinkContainer">
        <Link
          to={`/portfolio/${linkName}`}
          state={{ gallery: obj }}
          className="PortfolioCard__Link"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
