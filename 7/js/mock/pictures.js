import { getMockSimilarUsers } from './data.js';

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const similarUsers = getMockSimilarUsers();
const similarListFragments = document.createDocumentFragment();

similarUsers.forEach(({ url, likes, comments }) => {
  const picture = template.cloneNode(true);
  picture.querySelector('img').setAttribute('src', url);
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.message;
  similarListFragments.appendChild(picture);
});

pictures.appendChild(similarListFragments);

export { pictures };
