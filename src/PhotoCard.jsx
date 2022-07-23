import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { images } from './utilities/images';
import './styles/PhotoCard.css';

const PhotoCard = ({
  imageId,
  imageURL,
  imageTitle,
  isLiked,
  openOverlay,
  galleryId,
  toggleLike,
}) => {
  let location = useLocation();
  let shareUrl = `${location.pathname}/${imageId}`;

  let handleToggleLike = () => {
    toggleLike(galleryId, imageId);
  };
  let handleOpenOverlay = (event) => {
    event.stopPropagation();
    openOverlay(shareUrl);
  };
  return (
    <div to={imageId} className="PhotoCard">
      <Link to={imageId} className="PhotoCard__overlay"></Link>
      <div className="PhotoCard__iconContainer">
        <div className="PhotoCard__icon" onClick={handleToggleLike}>
          {isLiked ? (
            <div className="PhotoCard__icon-like-container">
              <AiFillHeart className="icon-like" />
              <span className="PhotoCard__icon-span">1</span>
            </div>
          ) : (
            <AiOutlineHeart />
          )}
        </div>
        <div
          className="PhotoCard__icon PhotoCard__icon-share"
          onClick={handleOpenOverlay}
        >
          <RiShareForwardLine />
        </div>
      </div>
      <div className="PhotoCard__imageContainer">
        <img
          src={images[imageURL]}
          alt={imageTitle}
          className="PhotoCard__image"
        />
      </div>
    </div>
  );
};

export default PhotoCard;
