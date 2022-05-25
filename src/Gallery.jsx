import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ShareOverlay from './ShareOverlay';
import PhotoCard from './PhotoCard';

import './styles/Gallery.css';

const Gallery = ({ portfolio }) => {
  const [gallery, setGallery] = useState({
    categoryName: '',
    categoryId: '',
    categoryDescription: '',
    categoryCover: '',
    photos: [],
  });
  let params = useParams();
  useEffect(() => {
    for (let gal of portfolio.categories) {
      if (gal.categoryId === params.galleryId) {
        setGallery(gal);
      }
    }
  }, [gallery]);

  const { state } = useLocation();

  const [overlayOpen, setOverlayOpen] = useState(false);

  let openOverlay = () => {
    setOverlayOpen(true);
  };

  let closeOverlay = () => {
    setOverlayOpen(false);
  };

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
        openOverlay={openOverlay}
      />
    );
  });

  return (
    <div className="Gallery">
      {overlayOpen && <ShareOverlay closeOverlay={closeOverlay} />}
      <div className="Gallery__headingSection">
        <h1 className="Gallery__header">{gallery.categoryName}</h1>
        <p className="Gallery__sub">{gallery.categoryDescription}</p>
      </div>
      <main className="Gallery__main">{galleryList}</main>
    </div>
  );
};

export default Gallery;
