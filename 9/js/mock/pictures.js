const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const similarListFragments = document.createDocumentFragment();

const getPictureTemplate = (dataPicture) => {
  const picture = template.cloneNode(true);
  picture.setAttribute('id', dataPicture.id);
  picture.querySelector('img').setAttribute('src', dataPicture.url);
  picture.querySelector('.picture__likes').textContent = dataPicture.likes;
  picture.querySelector('.picture__comments').textContent = dataPicture.comments.length;
  return picture;
};

const renderPhotos = (similarPictures) => {
  similarPictures.forEach((picture) => {
    const similarPicture = getPictureTemplate(picture);
    similarListFragments.appendChild(similarPicture);
  });
  pictures.appendChild(similarListFragments);
};

export { renderPhotos, pictures };
