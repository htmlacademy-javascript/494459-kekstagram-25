import { mockData } from './data.js';
import { isEscapeKey, isEnterKey } from './utill.js';


const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const socialComment = (data) => `<li class="social__comment">
<img class="social__picture"
src= ${data.avatar}
alt= ${data.name} width="35" height="35">
<p class="social__text"> ${data.message} </p>
</li>`;


const dataFilling = (pictureData) => {

  const userComments = (data) => {
    let str = '';
    data.forEach((comment) => {
      // console.log(comment);
      // console.log(socialComment(comment));
      str += socialComment(comment);
    });
    return str;
  };

  // console.log(userComments(pictureData.comments));

  showBigPhoto();
  // bigPicture.querySelector('.big-picture__img img').setAttribute('src', pictureData.url);
  // bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
  // bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
  // bigPicture.querySelector('.social__caption').textContent = pictureData.description;
  // bigPicture.querySelector('.social__comments').innerHTML = userComments(pictureData.comments);
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

function onBigPhotoClose() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  closeButton.removeEventListener('click', onBigPhotoClose);
}

function showBigPhoto() {
  document.querySelector('body').classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.removeEventListener('keydown', onBigPhotoClose);
}

function closeBigPhoto() {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', closeBigPicture);
}

function closeBigPicture(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
}

const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', onClickPictureContainer);
closeButton.addEventListener('click', () => onBigPhotoClose());
document.addEventListener('keydown', closeBigPicture);


export { dataFilling };
