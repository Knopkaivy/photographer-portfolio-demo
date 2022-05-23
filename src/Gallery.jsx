import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ShareOverlay from './ShareOverlay';
import PhotoCard from './PhotoCard';
import Desert3Md from './images/desert-3-md.webp';

import './styles/Gallery.css';

const Gallery = () => {
  const { state } = useLocation();

  const [overlayOpen, setOverlayOpen] = useState(false);

  let openOverlay = () => {
    setOverlayOpen(true);
  };

  let closeOverlay = () => {
    setOverlayOpen(false);
  };

  const galleryList = state.gallery.photos.map((item) => {
    const url = `${item.photoId.charAt(0).toUpperCase()}${item.photoId
      .slice(1)
      .replace('-', '')}md`;
    // console.log(url);
    return (
      <PhotoCard
        imageId={item.photoId}
        imageURL={url}
        imageTitle={item.photoTitle}
        imageDescription={item.photoDescription}
        openOverlay={openOverlay}
      />
    );
  });

  return (
    <div className="Gallery">
      {overlayOpen && <ShareOverlay closeOverlay={closeOverlay} />}
      <div className="Gallery__headingSection">
        <h1 className="Gallery__header">{state.gallery.categoryName}</h1>
        <p className="Gallery__sub">{state.gallery.categoryDescription}</p>
      </div>
      <main className="Gallery__main">{galleryList}</main>
    </div>
  );
};

export default Gallery;
