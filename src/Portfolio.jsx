import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import DesertCover from './images/desert-cover.webp';
import SierraCover from './images/sierra-cover.webp';
import BeachCover from './images/beach-cover.webp';
import ForestCover from './images/forest-cover.webp';
import './styles/Portfolio.css';

const Portfolio = () => {
  const [categories, setCategories] = useState([
    {
      category: 'The Desert',
      image: { DesertCover },
    },
    {
      category: 'High Sierra',
      image: { SierraCover },
    },
    { category: 'Beach', image: { BeachCover } },
    {
      category: 'Forests Wilderness',
      image: { ForestCover },
    },
  ]);

  const categoryList = categories.map((element, index) => {
    const ind = `0${index + 1}`;
    return (
      <PortfolioCard
        category={element.category}
        image={element.image}
        index={ind}
        link={element.link}
        key={ind}
      />
    );
  });

  return <div className="Portfolio container">{categoryList}</div>;
};

export default Portfolio;
