import { mockData } from './data.js';
import { isEscapeKey } from './utill.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const socialComment = (data) => `
<li class="social__comment">
<img class="social__picture"
src= ${data.avatar}
alt= ${data.name} width="35" height="35">
<p class="social__text"> ${data.message} </p>
</li>`;

const getUserComments = (data) => {
  const userComments = data.map((comment) => socialComment(comment));
  return userComments.join('');
};

const dataFilling = (pictureData) => {
  showBigPhoto();
  bigPicture.querySelector('.big-picture__img img').setAttribute('src', pictureData.url);
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  bigPicture.querySelector('.social__comments').innerHTML = getUserComments(pictureData.comments);
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
};

const onClickPictureContainer = (evt) => {
  const pictureCard = evt.target.closest('.picture');
  const pictureData = mockData.find((pictureObj) => {
    if (+pictureObj.id === +pictureCard.id) {
      return pictureObj;
    }
  });
  dataFilling(pictureData);
};

const onEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const onClickDown = () => closeBigPhoto();

function showBigPhoto() {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onEscapeKeyDown);

  closeButton.addEventListener('click', onClickDown);
}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');

  document.removeEventListener('keydown', onEscapeKeyDown);
  closeButton.removeEventListener('click', onClickDown);
}

const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', onClickPictureContainer);

export { dataFilling };
