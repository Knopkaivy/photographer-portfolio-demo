import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ShareOverlay from './ShareOverlay';
import PurchaseForm from './PurchaseForm';
import PhotoCarousel from './PhotoCarousel';
import Toolbar from './Toolbar';
import { calculateInd, findGallery, findPhoto } from './utilities/helpers';
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
    findGallery(portfolio.categories, params.galleryId) ||
      portfolio.categories[0]
  );

  const [photo, setPhoto] = useState(
    findPhoto(gallery.photos, gallery.categoryId, params.imageId) ||
      gallery.photos[0]
  );
  const [photosCount, setPhotosCount] = useState(gallery.photos.length);
  const [ind, setInd] = useState(calculateInd(params.imageId));

  useEffect(() => {
    let newGal = gallery;
    if (!gallery || params.galleryId !== gallery.categoryId) {
      newGal = findGallery(portfolio.categories, params.galleryId);
      if (newGal === undefined) {
        navigate(`/portfolio/`, { replace: true });
      } else {
        setGallery(newGal);
        setPhotosCount(newGal.photos.length);
      }
    }
    if (!photo || params.imageId !== photo.photoId) {
      let newPht = findPhoto(newGal.photos, newGal.categoryId, params.imageId);
      if (newPht === undefined) {
        navigate(`/portfolio/${newGal.categoryId}`, { replace: true });
      } else {
        setPhoto(newPht);
        let newInd = calculateInd(params.imageId);
        if (ind !== newInd) {
          setInd(newInd);
        }
      }
    }
  }, [params]);

  let updatePhoto = (newInd, newPhotoId) => {
    setInd(newInd + 1);
    navigate(`/portfolio/${params.galleryId}/${newPhotoId}`);
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
              updatePhoto={updatePhoto}
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
