import React from 'react';
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
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
      {
        imageURL: { Desert3Md },
        imageTitle: 'Image Title Placeholder',
        imageDescription: 'Image Description Placeholder',
      },
    ],
  };

  const galleryList = gallery.images.map((img) => {
    return (
      <PhotoCard
        imageURL={img.imageURL}
        imageTitle={img.imageTitle}
        imageDescription={img.imageDescription}
      />
    );
  });

  return (
    <div className="Gallery">
      <div className="Gallery__headingSection">
        <h1 className="Gallery__header">{gallery.category}</h1>
        <p className="Gallery__sub">{gallery.description}</p>
      </div>
      <main className="Gallery__main">{galleryList}</main>
    </div>
  );
};

export default Gallery;
