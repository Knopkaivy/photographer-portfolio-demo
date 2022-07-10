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
  goToCheckout,
}) => {
  let params = useParams();

  let location = useLocation();

  let navigate = useNavigate();

  let findGallery = () => {
    for (let gal of portfolio.categories) {
      if (gal.categoryId === params.galleryId) {
        return gal;
      }
    }
    return portfolio.categories[0];
  };

  const [gallery, setGallery] = useState(findGallery());

  let findPhoto = () => {
    for (let pht of gallery.photos) {
      if (pht.photoId === params.imageId) {
        return pht;
      }
    }
    navigate(`/portfolio/${gallery.categoryId}`, { replace: true });
  };

  const [photo, setPhoto] = useState(findPhoto());

  let generateImageUrl = () => {
    let newImageUrl = `${params.imageId.charAt(0).toUpperCase()}${params.imageId
      .slice(1)
      .replace('-', '')}lg`;
    return newImageUrl;
  };

  const [imageUrl, setImageUrl] = useState(generateImageUrl());
  const [photosCount, setPhotosCount] = useState(gallery.photos.length);

  let calculateInd = () => {
    return params.imageId.replace(/^\D+/g, '');
  };

  const [ind, setInd] = useState(calculateInd());

  useEffect(() => {
    if (!gallery || params.galleryId !== gallery.categoryId) {
      let newGal = findGallery();
      setGallery(newGal);
      setPhotosCount(newGal.photos.length);
    }
    if (!photo || params.imageId !== photo.photoId) {
      let newPht = findPhoto();
      setPhoto(newPht);
      let newImageUrl = generateImageUrl();
      setImageUrl(newImageUrl);
      setInd(calculateInd());
    }
  }, [params]);

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

  if (gallery && photo) {
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
          <div className="PhotoCardDetailed__imageAndNavigationContainer">
            <div className="PhotoCardDetailed__imageContainer">
              <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-left">
                {ind > 1 && (
                  <BsChevronLeft
                    className="PhotoCardDetailed__navigationIcon icon"
                    onClick={navigateLeft}
                  />
                )}
              </div>
              <img
                src={images[imageUrl]}
                alt="title"
                className="PhotoCardDetailed__image"
              />
              <div className="PhotoCardDetailed__navigation PhotoCardDetailed__navigation-right">
                {ind < photosCount && (
                  <BsChevronRight
                    className="PhotoCardDetailed__navigationIcon icon"
                    onClick={navigateRight}
                  />
                )}
              </div>
            </div>
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
                goToCheckout={goToCheckout}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PhotoCardDetailed;
