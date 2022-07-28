import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { images } from './utilities/images';

const PhotoCardImage = ({ ind, imageUrl, photosCount, updatePhoto }) => {
  let navigateLeft = () => {
    let newInd = ind - 1;
    updatePhoto(newInd);
  };
  let navigateRight = () => {
    let newInd = ind + 1;
    updatePhoto(newInd);
  };

  return (
    <div className="PhotoCardDetailed__imageAndNavigationContainer">
      <div className="PhotoCardDetailed__imageContainer">
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
          {ind > 1 && (
            <BsChevronLeft
              className="PhotoCardDetailed__navigationIcon icon"
              onClick={navigateLeft}
            />
          )}
        </div>
        <img
          src={images[imageUrl]}
          alt="title"
          className="PhotoCardDetailed__image"
        />
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
          {ind < photosCount && (
            <BsChevronRight
              className="PhotoCardDetailed__navigationIcon icon"
              onClick={navigateRight}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoCardImage;
