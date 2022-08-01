import React, { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { images } from './utilities/images';
import { generateImageUrl } from './utilities/helpers';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/PhotoCarousel.css';

const PhotoCarousel = ({
  photoList,
  ind,
  photosCount,
  updatePhoto,
  isFullscreen,
}) => {
  const [activeIndex, setActiveIndex] = useState(ind - 1);
  const [trans, setTrans] = useState(activeIndex * 100);
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.focus();
  }, [mainRef, isFullscreen]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= photosCount) {
      newIndex = photosCount - 1;
    }
    setActiveIndex(newIndex);
    setTrans(newIndex * 100);
    updatePhoto(newIndex + 1);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
    onSwiping: (event) => {
      let base = activeIndex * 100;
      let movement =
        Math.floor((event.deltaX * 100) / mainRef.current.offsetWidth / 5) * 5;
      if (trans !== base - movement) {
        setTrans(base - movement);
      }
    },
  });

  let handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      updateIndex(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      updateIndex(activeIndex - 1);
    }
  };

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
      <div
        className="PhotoCarousel"
        ref={mainRef}
        tabIndex="-1"
        onKeyDown={handleKeyDown}
      >
        <div
          className="PhotoCarousel__inner"
          style={{ transform: `translateX(-${trans}%)` }}
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
