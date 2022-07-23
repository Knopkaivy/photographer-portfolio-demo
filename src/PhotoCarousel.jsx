import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { images } from './utilities/images';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/PhotoCarousel.css';

const PhotoCarousel = ({ gallery, ind }) => {
  let items = gallery.photos.map((photo) => {
    let imageUrl = `${photo.photoId.charAt(0).toUpperCase()}${photo.photoId
      .slice(1)
      .replace('-', '')}lg`;
    return (
      <img src={images[imageUrl]} role="presentation" key={photo.photoId} />
    );
  });
  return (
    <AliceCarousel
      activeIndex={ind - 1}
      animationDuration={800}
      animationEasingFunction="ease-in"
      autoHeight
      disableDotsControls
      keyboardNavigation
      infinite
      items={items}
      className="PhotoCarousel"
    />
  );
};

export default PhotoCarousel;
