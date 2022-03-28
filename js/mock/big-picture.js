import { mockData } from './data.js';
import { isEscapeKey, modalOpen, modalClose } from './utill.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

function socialComment(data) {
  return `<li class="social__comment">
    <img class="social__picture"
    src= ${data.avatar}
    alt= ${data.name} width="35" height="35">
    <p class="social__text"> ${data.message} </p>
    </li>`;
}

const getUserComments = (data) => {
  const userComments = data.map((comment) => socialComment(comment));
  return userComments.join('');
};

const renderBigPicture = (pictureData) => {
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
  if (pictureCard === null) {
    return;
  }
  const pictureData = mockData.find((pictureObj) => {
    if (+pictureObj.id === +pictureCard.id) {
      return pictureObj;
    }
  });
  renderBigPicture(pictureData);
};

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const onСloseButtonClick = () => closeBigPhoto();

function showBigPhoto() {
  bigPicture.classList.remove('hidden');
  modalOpen();

  document.addEventListener('keydown', onDocumentKeyDown);

  closeButton.addEventListener('click', onСloseButtonClick);
}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  modalClose();

  document.removeEventListener('keydown', onDocumentKeyDown);
  closeButton.removeEventListener('click', onСloseButtonClick);
}

const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', onClickPictureContainer);

export { renderBigPicture };
