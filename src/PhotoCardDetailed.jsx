import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  // console.log('params are', params);

  const [photo, setPhoto] = useState({
    photoId: '',
    photoTitle: '',
    photoDescription: '',
    liked: false,
  });

  const [imageUrl, setImageUrl] = useState('');
  const [photosCount, setPhotosCount] = useState(0);
  const [ind, setInd] = useState(0);

  let navigate = useNavigate();

  let calculateInd = (id) => {
    let index = id.replace(/^\D+/g, '');
    setInd(index);
  };

  useEffect(() => {
    let gallery;
    let newImageUrl;
    for (let gal of portfolio.categories) {
      if (gal.categoryId === params.galleryId) {
        gallery = gal;
        setPhotosCount(gallery.photos.length);
        // console.log('photosCount is', photosCount);
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
    calculateInd(photo.photoId);
    // console.log('imageUrl is', imageUrl);
    // window.scrollTo(0, 0);
    console.log('PhotoCardDetailed useEffect');
  });

  let navigateLeft = () => {
    let indPrev = ind - 1;
    let photoIdPrev = `${photo.photoId.split('-')[0]}-${indPrev}`;
    // console.log(photoIdPrev);
    let url = `/portfolio/${params.galleryId}/${photoIdPrev}`;
    navigate(url);
  };
  let navigateRight = () => {
    // console.log('ind is', ind);
    let indNext = Number(ind) + 1;
    // console.log('indNext is', indNext);
    let photoIdNext = `${photo.photoId.split('-')[0]}-${indNext}`;
    // console.log(photoIdNext);
    let url = `/portfolio/${params.galleryId}/${photoIdNext}`;
    navigate(url);
  };

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
          {ind > 1 && (
            <BsChevronLeft
              className="PhotoCardDetailed__navigationIcon icon"
              onClick={navigateLeft}
            />
          )}
        </div>
        <div className="PhotoCardDetailed__imageContainer">
          <img
            src={images[imageUrl]}
            alt="title"
            className="PhotoCardDetailed__image"
          />
        </div>
        <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
          {ind < photosCount && (
            <BsChevronRight
              className="PhotoCardDetailed__navigationIcon icon"
              onClick={navigateRight}
            />
          )}
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
