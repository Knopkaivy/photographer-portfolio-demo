import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShareOverlay from './ShareOverlay';
import PhotoCard from './PhotoCard';

import './styles/Gallery.css';

const Gallery = ({
  portfolio,
  toggleLike,
  overlayIsOpen,
  overlayInputVal,
  openOverlay,
  closeOverlay,
}) => {
  let navigate = useNavigate();
  let params = useParams();

  let findGallery = () => {
    for (let gal of portfolio.categories) {
      if (gal.categoryId === params.galleryId) {
        return gal;
      }
    }
    return portfolio.categories[0];
  };

  const [gallery, setGallery] = useState(findGallery());
  useEffect(() => {
    if (!gallery || gallery.categoryId !== params.galleryId) {
      setGallery(findGallery());
    }
    window.scrollTo(0, 0);
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
          isLiked={item.liked}
          key={item.photoId}
          openOverlay={openOverlay}
          toggleLike={toggleLike}
          galleryName={gallery.categoryName}
          galleryId={gallery.categoryId}
        />
      );
    });

    return (
      <div className="Gallery">
        {overlayIsOpen && (
          <ShareOverlay
            closeOverlay={closeOverlay}
            location={overlayInputVal}
          />
        )}
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
