import React from 'react';
import { MdOpenInFull } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import './styles/Toolbar.css';

const Toolbar = () => {
  return (
    <div className="Toolbar">
      <div className="Toolbar__iconsList">
        <div className="Toolbar__iconContainer">
          <MdOpenInFull className="Toolbar__icon icon" />
        </div>
        <div className="Toolbar__iconContainer">
          <RiShareForwardLine className="Toolbar__icon icon" />
        </div>
        <div className="Toolbar__iconContainer">
          <AiOutlineHeart className="Toolbar__icon icon" />
        </div>
      </div>
      <div className="Toolbar__iconContainer">
        <IoMdClose className="Toolbar__icon icon" />
      </div>
    </div>
  );
};

export default Toolbar;
