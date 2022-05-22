import React, { useState } from 'react';
import ShareOverlay from './ShareOverlay';
import PhotoCard from './PhotoCard';
import Desert3Md from './images/desert-3-md.webp';

import './styles/Gallery.css';

const Gallery = () => {
  const gallery = {
    category: 'The Desert',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum laborum adipisci alias fuga culpa.',
    images: [
      {
        imageId: 'desert-3-md',
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageId: 'desert-3-md',
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageId: 'desert-3-md',
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageId: 'desert-3-md',
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageId: 'desert-3-md',
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageId: 'desert-3-md',
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
    ],
  };

  const [overlayOpen, setOverlayOpen] = useState(false);

  let openOverlay = () => {
    setOverlayOpen(true);
  };

  let closeOverlay = () => {
    setOverlayOpen(false);
  };

  const galleryList = gallery.images.map((img) => {
    return (
      <PhotoCard
        imageId={img.imageId}
        imageURL={img.imageURL}
        imageTitle={img.imageTitle}
        imageDescription={img.imageDescription}
        openOverlay={openOverlay}
      />
    );
  });

  return (
    <div className="Gallery">
      {overlayOpen && <ShareOverlay closeOverlay={closeOverlay} />}
      <div className="Gallery__headingSection">
        <h1 className="Gallery__header">{gallery.category}</h1>
        <p className="Gallery__sub">{gallery.description}</p>
      </div>
      <main className="Gallery__main">{galleryList}</main>
    </div>
  );
};

export default Gallery;
