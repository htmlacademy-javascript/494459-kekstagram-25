import { mockData } from './data.js';
import { isEscapeKey, modalOpen, modalClose } from './utill.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social__comments');

function socialComment(data) {
  return `
  <li class="social__comment">
  <img class="social__picture"
  src= ${data.avatar}
  alt= ${data.name} width="35" height="35">
  <p class="social__text"> ${data.message} </p>
    </li>
  `;
}

const getUserComments = (data) => {
  const userComments = data.map((comment) => socialComment(comment));
  return userComments.join('');
};

const renderBigPicture = (pictureData) => {
  showBigPhoto();
  const socialCommentLoaderBtn = bigPicture.querySelector('.social__comments-loader');
  bigPicture.querySelector('.big-picture__img img').setAttribute('src', pictureData.url);
  bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  socialComments.innerHTML = getUserComments(pictureData.comments);

  let counter = bigPicture.querySelector('.current-quantity-comments').textContent = socialComments.querySelectorAll('.social__comment').length;

  const onSocialCommentLoaderBtnClick = (evt) => {
    evt.preventDefault();
    const currentQuanitityComments = bigPicture.querySelector('.current-quantity-comments');
    socialComments.innerHTML += getUserComments(pictureData.comments.slice(0, 5));
    counter += 5;
    currentQuanitityComments.textContent = counter;
  };
  socialCommentLoaderBtn.addEventListener('click', onSocialCommentLoaderBtnClick);
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
