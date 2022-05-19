import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Landing1 from './images/landing-1.webp';
import Landing2 from './images/landing-2.webp';
import Landing3 from './images/landing-3.webp';
import Landing4 from './images/landing-4.webp';
import Landing5 from './images/landing-5.webp';
import Landing6 from './images/landing-6.webp';
import './styles/Carousel.css';

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src={Landing1} onDragStart={handleDragStart} role="presentation" />,
  <img src={Landing2} onDragStart={handleDragStart} role="presentation" />,
  <img src={Landing3} onDragStart={handleDragStart} role="presentation" />,
  <img src={Landing4} onDragStart={handleDragStart} role="presentation" />,
  <img src={Landing5} onDragStart={handleDragStart} role="presentation" />,
  <img src={Landing6} onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = () => {
  return (
    <AliceCarousel
      animationDuration={800}
      animationEasingFunction="ease-in"
      autoHeight
      autoPlay
      autoPlayInterval={5000}
      autoPlayStrategy="none"
      disableButtonsControls
      disableDotsControls
      infinite
      items={items}
      className="Carousel"
    />
  );
};

export default Carousel;
