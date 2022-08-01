import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdOpenInFull } from 'react-icons/md';
import { MdCloseFullscreen } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import './styles/Toolbar.css';

const Toolbar = ({
  photo,
  toggleLike,
  openOverlay,
  openCart,
  purchaseItems,
  isFullscreen,
  handleRequestFullscreen,
  handleExitFullscreen,
}) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  let handleOpenOverlay = () => {
    openOverlay(location.pathname);
  };

  let handleLike = () => {
    toggleLike(params.galleryId, params.imageId);
  };

  let handleCloseDetail = () => {
    let url = `/portfolio/${params.galleryId}`;
    navigate(url);
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar__iconsList">
        <div className="Toolbar__iconContainer">
          {isFullscreen ? (
            <MdCloseFullscreen
              className="Toolbar__icon icon"
              onClick={handleExitFullscreen}
            />
          ) : (
            <MdOpenInFull
              className="Toolbar__icon icon"
              onClick={handleRequestFullscreen}
            />
          )}
        </div>
        <div className="Toolbar__iconContainer">
          <BsBag
            className="Toolbar__icon Toolbar__icon-secondary icon"
            onClick={openCart}
          />{' '}
          <span className="Toolbar__icon-secondary Toolbar__icon-span">
            {purchaseItems.length}
          </span>
        </div>
        <div className="Toolbar__iconContainer">
          <RiShareForwardLine
            className="Toolbar__icon Toolbar__icon-secondary icon"
            onClick={handleOpenOverlay}
          />
        </div>
        <div className="Toolbar__iconContainer" onClick={handleLike}>
          {photo.liked ? (
            <React.Fragment>
              <AiFillHeart className="Toolbar__icon Toolbar__icon-secondary icon icon-like" />
              <span className="Toolbar__icon-span">1</span>
            </React.Fragment>
          ) : (
            <AiOutlineHeart className="Toolbar__icon Toolbar__icon-secondary icon" />
          )}
        </div>
      </div>
      <div className="Toolbar__iconContainer">
        <IoMdClose className="Toolbar__icon icon" onClick={handleCloseDetail} />
      </div>
    </div>
  );
};

export default Toolbar;
