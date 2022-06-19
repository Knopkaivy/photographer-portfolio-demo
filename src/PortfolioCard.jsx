import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from './images';
import './styles/PortfolioCard.css';

const PortfolioCard = ({ obj, category, image, index }) => {
  let navigate = useNavigate();
  let linkName = category.toLowerCase().replace(/\s/g, '');

  return (
    <div className="PortfolioCard">
      <p className="PortfolioCard__Index">{index}</p>
      <div
        className="PortfolioCard__ImageContainer"
        onClick={() => navigate(`/portfolio/${linkName}`)}
      >
        <img
          src={images[image]}
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
