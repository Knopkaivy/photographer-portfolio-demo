import React, { useEffect } from 'react';
import Landing from './Landing';
import Portfolio from './Portfolio';

const Home = ({ portfolio }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Landing />
      <Portfolio portfolio={portfolio} />
    </React.Fragment>
  );
};

export default Home;
