import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { images } from './images';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/LandingCarousel.css';

const items = [
  <img src={images.Landing1} role="presentation" />,
  <img src={images.Landing2} role="presentation" />,
  <img src={images.Landing3} role="presentation" />,
  <img src={images.Landing4} role="presentation" />,
  <img src={images.Landing5} role="presentation" />,
  <img src={images.Landing6} role="presentation" />,
];

const LandingCarousel = () => {
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
      className="LandingCarousel"
    />
  );
};

export default LandingCarousel;
