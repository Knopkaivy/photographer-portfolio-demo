import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShareOverlay from './ShareOverlay';
import PhotoCard from './PhotoCard';
import { findGallery } from '../utilities/helpers';
import '../styles/Gallery.css';

const Gallery = () => {
  const [gallery, setGallery] = useState(undefined);
  let navigate = useNavigate();
  let params = useParams();
  const categories = useSelector((state) => state.portfolio.categories);
  const shareOverlayIsOpen = useSelector((state) => state.shareOverlay.isOpen);

  useEffect(() => {
    if (!gallery || gallery.categoryId !== params.galleryId) {
      let newGal = findGallery(categories, params.galleryId);
      if (newGal === undefined) {
        navigate(`/portfolio/`, { replace: true });
      } else {
        setGallery(newGal);
      }
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.galleryId]);

  if (gallery) {
    const galleryList = gallery.photos.map((item) => {
      const url = `${item.photoId.charAt(0).toUpperCase()}${item.photoId
        .slice(1)
        .replace('-', '')}md`;
      return (
        <PhotoCard
          imageId={item.photoId}
          imageURL={url}
          imageTitle={item.photoTitle}
          imageDescription={item.photoDescription}
          key={item.photoId}
          galleryName={gallery.categoryName}
          galleryId={gallery.categoryId}
        />
      );
    });

    return (
      <div className="Gallery">
        {shareOverlayIsOpen && <ShareOverlay />}
        <div className="Gallery__headingSection">
          <h2 className="Gallery__header">{gallery.categoryName}</h2>
          <p className="Gallery__sub">{gallery.categoryDescription}</p>
        </div>
        <main className="Gallery__main">{galleryList}</main>
      </div>
    );
  }
};

export default Gallery;
