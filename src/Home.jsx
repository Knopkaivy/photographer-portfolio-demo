import React, { useState } from 'react';
import { starter } from './starter';
import Landing from './Landing';
import Portfolio from './Portfolio';

const Home = ({ portfolio }) => {
  return (
    <React.Fragment>
      <Landing />
      <Portfolio portfolio={portfolio} />
    </React.Fragment>
  );
};

export default Home;
