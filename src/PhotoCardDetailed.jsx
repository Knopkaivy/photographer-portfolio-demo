import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import Desert3Md from './images/desert-3-md.webp';
import Desert3Lg from './images/desert-3-lg.webp';
import Toolbar from './Toolbar';
import './styles/PhotoCardDetailed.css';

const PhotoCardDetailed = () => {
  return (
    <div className="PhotoCardDetailed">
      <Toolbar />
      <div className="PhotoCardDetailed__main">
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
          <BsChevronLeft className="PhotoCardDetailed__navigationIcon icon" />
        </div>
        <div className="PhotoCardDetailed__imageContainer">
          <img
            src={Desert3Md}
            alt="title"
            className="PhotoCardDetailed__image"
          />
        </div>
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
          <BsChevronRight className="PhotoCardDetailed__navigationIcon icon" />
        </div>
        <div className="PhotoCardDetailed__descriptionContainer">
          <h2 className="PhotoCardDetailed__title">Title</h2>
          <p className="PhotoCardDetailed__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque
            distinctio. Possimus odit dicta accusamus doloremque quisquam
            reiciendis, officiis vero quasi expedita autem amet deleniti vitae
            sint esse blanditiis quod!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCardDetailed;
