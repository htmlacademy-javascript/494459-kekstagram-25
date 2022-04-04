import { isEscapeKey, modalOpen, modalClose } from './utill.js';

const uploadBtn = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelBtn = document.querySelector('.img-upload__cancel');
const textHashtagInput = document.querySelector('.text__hashtags');
const textDescriptionInput = document.querySelector('.text__description');
const imgUploadForm = document.querySelector('.img-upload__form');
// const submitForm = document.querySelector('.img-upload__submit');

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoToUpload();
    imgUploadForm.reset();
  }
};

function closePhotoToUpload() {
  uploadOverlay.classList.add('hidden');
  modalClose();
  imgUploadCancelBtn.removeEventListener('click', closePhotoToUpload);

  document.removeEventListener('keydown', onDocumentKeyDown);
  uploadBtn.addEventListener('change', showUploadedPhoto);
}

function showUploadedPhoto() {
  uploadOverlay.classList.remove('hidden');
  modalOpen();
  imgUploadCancelBtn.addEventListener('click', closePhotoToUpload);
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadBtn.removeEventListener('change', showUploadedPhoto);
}

const regExp = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;

const onInputChange = (evt) => {
  const stringArray = evt.target.value.split(' ');
  const isNoHaveRepeats = stringArray.every((str, index, arr) => arr.indexOf(str) === index);
  const isHashtagLessThanFive = stringArray.length <= 5;
  return (isNoHaveRepeats && isHashtagLessThanFive && regExp.test(evt.target.value)) ? evt.target.value : false;
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'error-message__text',
  errorClass: 'error-message__text--invalid',
  successClass: 'error-message__text--valid',
  errorTextParent: 'error-message__text',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});

const validateHashTags = (value) => { // WIP
  if (onInputChange) {
    return value;
  }
};

const validateTextCount = (value) => value.length <= 140;

pristine.addValidator(textHashtagInput, validateHashTags, 'АстАнАвись!! Ты что-то делаешь не так!!');
pristine.addValidator(textDescriptionInput, validateTextCount, 'Количество символов не может быть больше 140');

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const stopPropagation = (evt) => evt.stopPropagation();

textHashtagInput.addEventListener('keydown', stopPropagation);
textDescriptionInput.addEventListener('keydown', stopPropagation);

uploadBtn.addEventListener('change', showUploadedPhoto);
textHashtagInput.addEventListener('change', onInputChange);

export { uploadBtn };
