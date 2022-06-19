import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ShareOverlay from './ShareOverlay';
import PurchaseForm from './PurchaseForm';
import { images } from './images';
import Toolbar from './Toolbar';
import './styles/PhotoCardDetailed.css';

const PhotoCardDetailed = ({
  portfolio,
  toggleLike,
  overlayIsOpen,
  openOverlay,
  closeOverlay,
  openCart,
  purchaseItems,
  addItemToCart,
}) => {
  let params = useParams();

  let location = useLocation();

  const [photo, setPhoto] = useState({
    photoId: '',
    photoTitle: '',
    photoDescription: '',
    liked: false,
  });

  const [imageUrl, setImageUrl] = useState('');
  const [gallery, setGallery] = useState({
    categoryName: '',
    categoryId: '',
    categoryDescription: '',
    categoryCover: '',
    photos: [],
  });
  const [photosCount, setPhotosCount] = useState(0);
  const [ind, setInd] = useState(0);

  let navigate = useNavigate();

  let findGallery = () => {
    for (let gal of portfolio.categories) {
      if (gal.categoryId === params.galleryId) {
        return gal;
      }
    }
  };

  let calculateInd = (id) => {
    let index = id.replace(/^\D+/g, '');
    setInd(index);
  };

  useEffect(() => {
    let newGal = findGallery();
    setGallery(newGal);
    setPhotosCount(gallery.photos.length);
    let newImageUrl;
    for (let img of gallery.photos) {
      if (img.photoId === params.imageId) {
        setPhoto(img);
        newImageUrl = `${img.photoId.charAt(0).toUpperCase()}${img.photoId
          .slice(1)
          .replace('-', '')}lg`;
        setImageUrl(newImageUrl);
        break;
      }
    }
    calculateInd(photo.photoId);
    // window.scrollTo(0, 0);
    console.log('PhotoCardDetailed useEffect');
  }, [params, photo.photoId, portfolio.categories, gallery]);

  let navigateLeft = () => {
    let indPrev = ind - 1;
    let photoIdPrev = `${photo.photoId.split('-')[0]}-${indPrev}`;
    let url = `/portfolio/${params.galleryId}/${photoIdPrev}`;
    navigate(url);
  };
  let navigateRight = () => {
    let indNext = Number(ind) + 1;
    let photoIdNext = `${photo.photoId.split('-')[0]}-${indNext}`;
    let url = `/portfolio/${params.galleryId}/${photoIdNext}`;
    navigate(url);
  };

  return (
    <div className="PhotoCardDetailed">
      {overlayIsOpen && (
        <ShareOverlay
          location={location.pathname}
          closeOverlay={closeOverlay}
        />
      )}
      <Toolbar
        photo={photo}
        toggleLike={toggleLike}
        openOverlay={openOverlay}
        openCart={openCart}
        purchaseItems={purchaseItems}
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
          {/* {ind < gallery.photos.length && ( */}
          {ind < photosCount && (
            <BsChevronRight
              className="PhotoCardDetailed__navigationIcon icon"
              onClick={navigateRight}
            />
          )}
        </div>
        <div className="PhotoCardDetailed__descriptionContainer">
          <h2 className="PhotoCardDetailed__title">{photo.photoTitle}</h2>
          <div className="PhotoCardDetailed__description">
            <PurchaseForm
              photoId={photo.photoId}
              photoTitle={photo.photoTitle}
              openCart={openCart}
              purchaseItems={purchaseItems}
              addItemToCart={addItemToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCardDetailed;
