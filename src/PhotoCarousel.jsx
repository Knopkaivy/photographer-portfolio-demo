import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { images } from './utilities/images';
import { generateImageUrl } from './utilities/helpers';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles/PhotoCarousel.css';

const PhotoCarousel = ({ gallery, ind, photosCount, updatePhoto }) => {
  const handleOnDragStart = (e) => e.preventDefault();

  let changingPhoto = (e) => {
    // console.log('slide is about to change');
    // console.log(e);
    // updatePhoto(e.slide, gallery.photos[e.slide].photoId);
  };
  // let changePhoto = (e) => {
  // console.log('slide changed');
  // console.log(e);
  // updatePhoto(e.slide, gallery.photos[e.slide].photoId);
  // };
  let onSlideChanged = (e) => {
    console.log(e);
    // setCurrentIndex(e.item);
  };

  // let slidePrev = () => {
  //   if (currentIndex === 0) {
  //     setCurrentIndex(lastIndex);
  //   } else {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };
  // let slideNext = () => {
  //   if (currentIndex === lastIndex) {
  //     setCurrentIndex(0);
  //   } else {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };
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
    <div className="PhotoCardDetailed__imageAndNavigationContainer">
      {/* <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
        <BsChevronLeft
          className="PhotoCardDetailed__navigationIcon icon"
          onClick={slidePrev}
        />
      </div> */}
      <AliceCarousel
        // activeIndex={currentIndex}
        animationDuration={800}
        animationEasingFunction="ease-in"
        autoHeight
        disableDotsControls
        keyboardNavigation
        infinite
        items={items}
        mouseDragEnabled
        className="PhotoCarousel"
        onSlideChange={changingPhoto}
        onSlideChanged={onSlideChanged}
        swipeDelta={2}
        renderPrevButton={() => {
          return (
            <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
              <BsChevronLeft className="PhotoCardDetailed__navigationIcon icon" />
            </div>
          );
        }}
        renderNextButton={() => {
          return (
            <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
              <BsChevronRight className="PhotoCardDetailed__navigationIcon icon" />
            </div>
          );
        }}
      />
      {/* <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
        <BsChevronRight
          className="PhotoCardDetailed__navigationIcon icon"
          onClick={slideNext}
        />
      </div> */}
    </div>
  );
};

export default PhotoCarousel;
