import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { images } from '../utilities/images';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/LandingCarousel.css';

const items = [
  <img src={images.Landing1} aria-hidden="true" alt="" />,
  <img src={images.Landing2} aria-hidden="true" alt="" />,
  <img src={images.Landing3} aria-hidden="true" alt="" />,
  <img src={images.Landing4} aria-hidden="true" alt="" />,
  <img src={images.Landing5} aria-hidden="true" alt="" />,
  <img src={images.Landing6} aria-hidden="true" alt="" />,
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
