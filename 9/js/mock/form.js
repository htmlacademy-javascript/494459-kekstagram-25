import { isEscapeKey, modalOpen, modalClose } from './utill.js';

const uploadBtn = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelBtn = document.querySelector('.img-upload__cancel');
const textHashtag = document.querySelector('.text__hashtags');
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

// const regExp = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;

// const onInputChange = (evt) => {
//   const tmpResult = evt.target.value.split(' ');
//   const isNoHaveRepeats = tmpResult.every((str, index, arr) => arr.indexOf(str) === index);
//   const isHashtagLessThanFive = tmpResult.length <= 5;
// };

const pristine = new Pristine(imgUploadForm, {
  classTo: 'form__text',
  errorClass: 'form__text--invalid',
  successClass: 'form__text--valid',
  errorTextParent: 'form__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const validateHashTags = (value) => value.length < 10;

pristine.addValidator(textHashtag, validateHashTags, 'АстанАвись!!');

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

uploadBtn.addEventListener('change', showUploadedPhoto);
// textHashtag.addEventListener('change', onInputChange);

export { uploadBtn };
