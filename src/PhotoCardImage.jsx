import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { images } from './images';

const PhotoCardImage = ({
  ind,
  navigateLeft,
  navigateRight,
  imageUrl,
  photosCount,
}) => {
  return (
    <div className="PhotoCardDetailed__imageAndNavigationContainer">
      <div className="PhotoCardDetailed__imageContainer">
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
          {/* {ind > 1 && ( */}
          <BsChevronLeft
            className="PhotoCardDetailed__navigationIcon icon"
            onClick={navigateLeft}
          />
          {/* )} */}
        </div>
        <img
          src={images[imageUrl]}
          alt="title"
          className="PhotoCardDetailed__image"
        />
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
          {/* {ind < photosCount && ( */}
          <BsChevronRight
            className="PhotoCardDetailed__navigationIcon icon"
            onClick={navigateRight}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default PhotoCardImage;
