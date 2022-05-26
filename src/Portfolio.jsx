import React from 'react';
import PortfolioCard from './PortfolioCard';

import './styles/Portfolio.css';

const Portfolio = ({ portfolio }) => {
  const categoryList = portfolio.categories.map((element, index) => {
    const ind = `0${index + 1}`;
    return (
      <PortfolioCard
        category={element.categoryName}
        image={element.categoryCover}
        index={ind}
        link={element.link}
        key={ind}
      />
    );
  });

  return <div className="Portfolio container">{categoryList}</div>;
};

export default Portfolio;
