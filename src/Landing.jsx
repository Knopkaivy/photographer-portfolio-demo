import React from 'react';
import Hero from './Hero';
import LandingCarousel from './LandingCarousel';
import './styles/Landing.css';

const Landing = () => {
  return (
    <main className="Landing">
      <Hero />
      <LandingCarousel />
    </main>
  );
};

export default Landing;
