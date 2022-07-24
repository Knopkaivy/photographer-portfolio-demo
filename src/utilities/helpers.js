export const findGallery = (categories, galleryId) => {
  for (let gal of categories) {
    if (gal.categoryId === galleryId) {
      return gal;
    }
  }
};

export const findPhoto = (photos, categoryId, imageId) => {
  for (let pht of photos) {
    if (pht.photoId === imageId) {
      return pht;
    }
  }
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
