import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import './styles/PhotoCard.css';

const PhotoCard = ({ imageURL, imageTitle, imageDescription, openOverlay }) => {
  const [liked, setLiked] = useState(false);
  let toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="PhotoCard">
      <div className="PhotoCard__overlay"></div>
      <div className="PhotoCard__iconContainer">
        <div className="PhotoCard__icon" onClick={toggleLike}>
          {liked ? (
            <div className="PhotoCard__icon-like-container">
              <AiFillHeart className="PhotoCard__icon-like" />
              <span className="PhotoCard__icon-span">1</span>
            </div>
          ) : (
            <AiOutlineHeart />
          )}
        </div>
        <div
          className="PhotoCard__icon PhotoCard__icon-share"
          onClick={openOverlay}
        >
          <RiShareForwardLine />
        </div>
      </div>
      <div className="PhotoCard__imageContainer">
        <img
          src={Object.values(imageURL)[0]}
          alt={imageTitle}
          className="PhotoCard__image"
        />
      </div>
    </div>
  );
};

export default PhotoCard;
