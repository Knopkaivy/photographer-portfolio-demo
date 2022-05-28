import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ShareOverlay from './ShareOverlay';
import { images } from './images';
import Toolbar from './Toolbar';
import './styles/PhotoCardDetailed.css';

const PhotoCardDetailed = ({
  portfolio,
  toggleLike,
  overlayIsOpen,
  openOverlay,
  closeOverlay,
}) => {
  let params = useParams();
  const [photo, setPhoto] = useState({
    photoId: '',
    photoTitle: '',
    photoDescription: '',
    liked: false,
  });

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    let gallery;
    let newImageUrl;
    for (let gal of portfolio.categories) {
      if (gal.categoryId === params.galleryId) {
        gallery = gal;
        break;
      }
    }
    for (let img of gallery.photos) {
      if (img.photoId === params.imageId) {
        setPhoto(img);
        newImageUrl = `${img.photoId.charAt(0).toUpperCase()}${img.photoId
          .slice(1)
          .replace('-', '')}md`;
        setImageUrl(newImageUrl);
        break;
      }
    }
    console.log('imageUrl is', imageUrl);
    window.scrollTo(0, 0);
  }, [photo]);

  return (
    <div className="PhotoCardDetailed">
      {overlayIsOpen && <ShareOverlay closeOverlay={closeOverlay} />}
      <Toolbar
        photo={photo}
        toggleLike={toggleLike}
        openOverlay={openOverlay}
      />
      <div className="PhotoCardDetailed__main">
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
          <BsChevronLeft className="PhotoCardDetailed__navigationIcon icon" />
        </div>
        <div className="PhotoCardDetailed__imageContainer">
          <img
            src={images[imageUrl]}
            alt="title"
            className="PhotoCardDetailed__image"
          />
        </div>
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
          <BsChevronRight className="PhotoCardDetailed__navigationIcon icon" />
        </div>
        <div className="PhotoCardDetailed__descriptionContainer">
          <h2 className="PhotoCardDetailed__title">{photo.photoTitle}</h2>
          <p className="PhotoCardDetailed__description">
            {photo.photoDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCardDetailed;
