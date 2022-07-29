import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { images } from './utilities/images';
import { generateImageUrl } from './utilities/helpers';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/PhotoCarousel.css';

const PhotoCarousel = ({ photoList, ind, photosCount, updatePhoto }) => {
  const [activeIndex, setActiveIndex] = useState(ind - 1);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= photosCount) {
      newIndex = photosCount - 1;
    }
    setActiveIndex(newIndex);
    updatePhoto(newIndex + 1);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  let items = photoList.map((photo, index) => {
    let imageUrl = generateImageUrl(photo.photoId);
    return (
      <div
        className="PhotoCarousel__item"
        style={{ width: '100%' }}
        key={photo.photoId}
      >
        <img
          src={images[imageUrl]}
          alt={photo.photoTitle}
          className="PhotoCarousel__image"
        />
      </div>
    );
  });
  return (
    <div {...handlers} className="PhotoCarousel__container">
      <div className="PhotoCarousel__btn">
        {activeIndex > 0 && (
          <BsChevronLeft
            className="PhotoCarousel__icon icon"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          />
        )}
      </div>
      <div className="PhotoCarousel">
        <div
          className="PhotoCarousel__inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items}
        </div>
      </div>
      <div className="PhotoCarousel__btn">
        {activeIndex < photosCount - 1 && (
          <BsChevronRight
            className="PhotoCarousel__icon icon"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoCarousel;
