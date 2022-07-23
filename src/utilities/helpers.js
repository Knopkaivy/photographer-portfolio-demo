// import {  useNavigate } from 'react-router-dom';

export const findGallery = (categories, galleryId) => {
  for (let gal of categories) {
    if (gal.categoryId === galleryId) {
      return gal;
    }
  }
  return categories[0];
};

export const findPhoto = (photos, categoryId, imageId) => {
  // let navigate = useNavigate();
  for (let pht of photos) {
    if (pht.photoId === imageId) {
      return pht;
    }
  }
  return photos[0];
  // navigate(`/portfolio/${categoryId}`, { replace: true });
};

export const generateImageUrl = (imageId) => {
  let newImageUrl = `${imageId.charAt(0).toUpperCase()}${imageId
    .slice(1)
    .replace('-', '')}lg`;
  return newImageUrl;
};

export const calculateInd = (imageId) => {
  return Number(imageId.replace(/^\D+/g, ''));
};
