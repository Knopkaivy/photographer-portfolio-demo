import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PortfolioCard from './PortfolioCard';

import '../styles/Portfolio.css';

const Portfolio = () => {
  const categories = useSelector((state) => state.portfolio.categories);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categoryList = categories.map((element, index) => {
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