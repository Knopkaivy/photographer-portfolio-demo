import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { images } from './utilities/images';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/PhotoCarousel.css';

const PhotoCarousel = ({ gallery, ind, navigateLeft, navigateRight }) => {
  let changePhoto = (e) => {
    let oldItem = ind - 1;
    let newItem = e.item;
    if (oldItem - newItem === 1 || oldItem - newItem < -1) {
      navigateLeft();
    } else if (oldItem - newItem === -1 || oldItem - newItem > 1) {
      navigateRight();
    }
  };
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
      onSlideChanged={changePhoto}
    />
  );
};

export default PhotoCarousel;
