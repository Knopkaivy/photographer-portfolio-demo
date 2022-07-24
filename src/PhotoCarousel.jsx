import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { images } from './utilities/images';
import { generateImageUrl } from './utilities/helpers';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/PhotoCarousel.css';

const PhotoCarousel = ({ gallery, ind, updatePhoto }) => {
  let changePhoto = (e) => {
    updatePhoto(e.slide, gallery.photos[e.slide].photoId);
  };
  let items = gallery.photos.map((photo) => {
    let imageUrl = generateImageUrl(photo.photoId);
    return (
      <img src={images[imageUrl]} alt={photo.photoTitle} key={photo.photoId} />
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
      onSlideChanged={changePhoto}
    />
  );
};

export default PhotoCarousel;
