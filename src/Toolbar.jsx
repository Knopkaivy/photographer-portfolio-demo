import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOpenInFull } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import './styles/Toolbar.css';

const Toolbar = ({ photo }) => {
  let navigate = useNavigate();
  let params = useParams();

  // console.log('params', params);

  let handleLike = () => {
    console.log('liked');
  };

  let handleCloseDetail = () => {
    let url = `/portfolio/${params.galleryId}`;
    navigate(url);
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar__iconsList">
        <div className="Toolbar__iconContainer">
          <MdOpenInFull className="Toolbar__icon icon" />
        </div>
        <div className="Toolbar__iconContainer">
          <RiShareForwardLine className="Toolbar__icon icon" />
        </div>
        <div className="Toolbar__iconContainer" onClick={handleLike}>
          {photo.liked ? (
            <div className="PhotoCard__icon-like-container">
              <AiFillHeart className="PhotoCard__icon-like Toolbar__icon icon" />
              <span className="Toolbar__icon-span">1</span>
            </div>
          ) : (
            <AiOutlineHeart className="Toolbar__icon icon" />
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
