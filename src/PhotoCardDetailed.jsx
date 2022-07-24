import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ShareOverlay from './ShareOverlay';
import PurchaseForm from './PurchaseForm';
import PhotoCarousel from './PhotoCarousel';
import Toolbar from './Toolbar';
import {
  calculateInd,
  findGallery,
  findPhoto,
  generateImageUrl,
} from './utilities/helpers';
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

  const [gallery, setGallery] = useState(
    findGallery(portfolio.categories, params.galleryId)
  );
  const [photo, setPhoto] = useState(
    findPhoto(gallery.photos, gallery.categoryId, params.imageId)
  );
  const [imageUrl, setImageUrl] = useState(generateImageUrl(params.imageId));
  const [photosCount, setPhotosCount] = useState(gallery.photos.length);
  const [ind, setInd] = useState(calculateInd(params.imageId));

  useEffect(() => {
    if (!gallery || params.galleryId !== gallery.categoryId) {
      let newGal = findGallery(portfolio.categories, params.galleryId);
      setGallery(newGal);
      setPhotosCount(newGal.photos.length);
    }
    if (!photo || params.imageId !== photo.photoId) {
      let newPht = findPhoto(
        gallery.photos,
        gallery.categoryId,
        params.imageId
      );
      setPhoto(newPht);
      let newImageUrl = generateImageUrl(params.imageId);
      setImageUrl(newImageUrl);
      setInd(calculateInd(params.imageId));
    }
  }, [params]);

  let navigateLeft = () => {
    let indPrev;
    if (ind > 1) {
      indPrev = ind - 1;
    } else if (ind === 1) {
      indPrev = photosCount;
    }
    let photoIdPrev = `${photo.photoId.split('-')[0]}-${indPrev}`;
    let url = `/portfolio/${params.galleryId}/${photoIdPrev}`;
    navigate(url);
  };
  let navigateRight = () => {
    let indNext;
    if (ind < photosCount) {
      indNext = ind + 1;
    } else if (ind === photosCount) {
      indNext = 1;
    }
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
            <PhotoCarousel
              gallery={gallery}
              ind={ind}
              navigateLeft={navigateLeft}
              navigateRight={navigateRight}
            />
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
