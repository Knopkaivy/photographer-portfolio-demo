import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShareOverlay from './ShareOverlay';
import PurchaseForm from './PurchaseForm';
import PhotoCarousel from './PhotoCarousel';
import Toolbar from './Toolbar';
import {
  calculateInd,
  findGallery,
  findPhoto,
  generateImageUrl,
} from '../utilities/helpers';
import '../styles/PhotoCardDetailed.css';

const PhotoCardDetailed = () => {
  let params = useParams();
  let navigate = useNavigate();

  const shareOverlayIsOpen = useSelector((state) => state.shareOverlay.isOpen);
  const categories = useSelector((state) => state.portfolio.categories);
  const [gallery, setGallery] = useState(
    findGallery(categories, params.galleryId) || categories[0]
  );

  const [photo, setPhoto] = useState(
    findPhoto(gallery.photos, gallery.categoryId, params.imageId) ||
      gallery.photos[0]
  );

  const [imageUrl, setImageUrl] = useState(generateImageUrl(params.imageId));
  const [photosCount, setPhotosCount] = useState(gallery.photos.length);
  const [ind, setInd] = useState(calculateInd(params.imageId));
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let newGal = gallery;
    if (!gallery || params.galleryId !== gallery.categoryId) {
      newGal = findGallery(categories, params.galleryId);
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
        setImageUrl(generateImageUrl(params.imageId));
        let newInd = calculateInd(params.imageId);
        if (ind !== newInd) {
          setInd(newInd);
        }
      }
    }
  }, [params]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let updatePhoto = (newInd) => {
    let newPhotoId = gallery.photos[newInd - 1].photoId;
    navigate(`/portfolio/${params.galleryId}/${newPhotoId}`);
  };

  let handleRequestFullscreen = () => {
    document.querySelector('.PhotoCardDetailed').requestFullscreen();
    setIsFullscreen(true);
  };

  let handleExitFullscreen = () => {
    document.exitFullscreen();
    setIsFullscreen(false);
  };

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  if (gallery && photo) {
    return (
      <div className="PhotoCardDetailed">
        {shareOverlayIsOpen && <ShareOverlay />}
        <Toolbar
          isFullscreen={isFullscreen}
          handleRequestFullscreen={handleRequestFullscreen}
          handleExitFullscreen={handleExitFullscreen}
        />
        <div className="PhotoCardDetailed__main">
          <PhotoCarousel
            photoList={gallery.photos}
            ind={ind}
            photosCount={photosCount}
            updatePhoto={updatePhoto}
            isFullscreen={isFullscreen}
          />

          <div className="PhotoCardDetailed__descriptionContainer">
            <h2 className="PhotoCardDetailed__title">{photo.photoTitle}</h2>
            <div className="PhotoCardDetailed__description">
              <PurchaseForm
                photoId={photo.photoId}
                photoTitle={photo.photoTitle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PhotoCardDetailed;
