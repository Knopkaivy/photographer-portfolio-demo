import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdOpenInFull } from 'react-icons/md';
import { MdCloseFullscreen } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import './styles/Toolbar.css';

const Toolbar = ({ photo, toggleLike, openOverlay }) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();

  // console.log('params', params);

  const [isFullscreen, setIsFullscreen] = useState(false);

  let handleRequestFullscreen = () => {
    console.log('requesting fullscreen');
    document.querySelector('.PhotoCardDetailed').requestFullscreen();
    setIsFullscreen(true);
  };

  let handleExitFullscreen = () => {
    document.exitFullscreen();
    setIsFullscreen(false);
  };

  let handleOpenOverlay = () => {
    openOverlay(location.pathname);
  };

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

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
          <RiShareForwardLine
            className="Toolbar__icon Toolbar__icon-secondary icon"
            onClick={handleOpenOverlay}
          />
        </div>
        <div className="Toolbar__iconContainer" onClick={handleLike}>
          {photo.liked ? (
            <div className="PhotoCard__icon-like-container">
              <AiFillHeart className="PhotoCard__icon-like Toolbar__icon Toolbar__icon-secondary icon" />
              <span className="Toolbar__icon-span">1</span>
            </div>
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
