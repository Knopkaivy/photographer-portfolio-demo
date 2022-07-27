import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { images } from './utilities/images';
import { generateImageUrl } from './utilities/helpers';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/PhotoCarousel.css';

const PhotoCarousel = ({ gallery, ind }) => {
  let items = gallery.photos.map((photo) => {
    let imageUrl = generateImageUrl(photo.photoId);
    return (
      <img
        src={images[imageUrl]}
        alt={photo.photoTitle}
        key={photo.photoId}
        onDragStart={handleOnDragStart}
      />
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
