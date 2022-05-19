import React from 'react';
import Hero from './Hero';
import Carousel from './Carousel';
import './styles/Landing.css';

const Landing = () => {
  return (
    <main className="Landing">
      <Hero />
      <Carousel />
    </main>
  );
};

export default Landing;
