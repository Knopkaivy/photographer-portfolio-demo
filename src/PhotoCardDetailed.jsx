import React from 'react';
import { useLocation } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { images } from './images';
import Toolbar from './Toolbar';
import './styles/PhotoCardDetailed.css';

const PhotoCardDetailed = () => {
  const { state } = useLocation();
  return (
    <div className="PhotoCardDetailed">
      <Toolbar />
      <div className="PhotoCardDetailed__main">
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
          <BsChevronLeft className="PhotoCardDetailed__navigationIcon icon" />
        </div>
        <div className="PhotoCardDetailed__imageContainer">
          <img
            src={images[state.imageURL]}
            alt="title"
            className="PhotoCardDetailed__image"
          />
        </div>
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
          <BsChevronRight className="PhotoCardDetailed__navigationIcon icon" />
        </div>
        <div className="PhotoCardDetailed__descriptionContainer">
          <h2 className="PhotoCardDetailed__title">{state.imageTitle}</h2>
          <p className="PhotoCardDetailed__description">
            {state.imageDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCardDetailed;
