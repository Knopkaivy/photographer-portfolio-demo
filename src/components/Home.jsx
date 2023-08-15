import React, { useEffect } from 'react';
import Landing from './Landing';
import Portfolio from './Portfolio';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Landing />
      <Portfolio />
    </React.Fragment>
  );
};

export default Home;
