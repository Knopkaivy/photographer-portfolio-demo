import React, { useState } from 'react';
import { starter } from './starter';
import Landing from './Landing';
import Portfolio from './Portfolio';

const Home = ({ portfolio }) => {
  // const [portfolio, setPortfolio] = useState(starter);
  // console.log('portfolio is ', portfolio);
  return (
    <React.Fragment>
      <Landing />
      <Portfolio portfolio={portfolio} />
    </React.Fragment>
  );
};

export default Home;
