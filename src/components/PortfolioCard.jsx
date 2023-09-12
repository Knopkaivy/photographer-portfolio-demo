import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../utilities/images';
import '../styles/PortfolioCard.css';

const PortfolioCard = ({ category, height, image, index, width }) => {
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
          width={width}
          height={height}
        />
      </div>
      <h2 className="PortfolioCard__Header">{category}</h2>
      <div className="PortfolioCard__LinkContainer">
        <Link
          to={`/portfolio/${linkName}`}
          className="PortfolioCard__Link"
          aria-label={`see more of ${linkName} gallery`}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
