import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { FaTumblr } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import './styles/ShareOverlay.css';
import { useState } from 'react';

const ShareOverlay = ({ location, closeOverlay }) => {
  const [copied, setCopied] = useState(false);

  let handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  let handleCloseOverlay = (event) => {
    event.stopPropagation();
    closeOverlay();
  };
  let clickAway = (event) => {
    if (event.target.id === 'ShareOverlay') {
      closeOverlay();
    }
    return;
  };
  return (
    <div id="ShareOverlay" className="ShareOverlay" onClick={clickAway}>
      <div className="ShareOverlay__menu">
        <div
          className="ShareOverlay__iconCloseContainer"
          onClick={handleCloseOverlay}
        >
          <IoMdClose className="ShareOverlay__icon ShareOverlay__icon-close icon" />
        </div>
        <div className="ShareOverlay__iconContainer">
          <BsFacebook className="ShareOverlay__icon icon" />
          <BsTwitter className="ShareOverlay__icon icon" />
          <BsPinterest className="ShareOverlay__icon icon" />
          <FaTumblr className="ShareOverlay__icon icon" />
          <MdEmail className="ShareOverlay__icon icon" />
        </div>
        <div className="ShareOverlay__linkContainer">
          <p className="ShareOverlay__link">{`https://photographer-portfolio-demo.web.app${location}`}</p>
          <CopyToClipboard
            text={`https://photographer-portfolio-demo.web.app${location}`}
            onCopy={handleCopy}
          >
            <button className="ShareOverlay__copyBtn">
              {copied ? (
                <FiCheck className="ShareOverlay__icon ShareOverlay__icon-copy" />
              ) : (
                <FiCopy className="ShareOverlay__icon ShareOverlay__icon-copy icon" />
              )}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default ShareOverlay;
