import { getMockSimilarUsers, AMOUNT_COMMENTS } from './data.js';

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = getMockSimilarUsers();
const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({ url, likes, comments }) => {
  const picture = template.cloneNode(true);
  picture.querySelector('img').setAttribute('src', url);
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = AMOUNT_COMMENTS;
  similarListFragment.appendChild(picture);
});

pictures.appendChild(similarListFragment);

export { pictures };
