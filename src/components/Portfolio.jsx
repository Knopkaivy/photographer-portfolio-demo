import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PortfolioCard from './PortfolioCard';

import '../styles/Portfolio.css';

const Portfolio = () => {
  const categories = useSelector((state) => state.portfolio.categories);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categoryList = categories.map((item, index) => {
    const ind = `0${index + 1}`;
    return (
      <PortfolioCard
        category={item.categoryName}
        image={item.categoryCover}
        index={ind}
        link={item.link}
        key={ind}
        width={item.width}
        height={item.height}
      />
    );
  });

  return <div className="Portfolio container">{categoryList}</div>;
};

export default Portfolio;
