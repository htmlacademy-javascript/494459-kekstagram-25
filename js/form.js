import { isEscapeKey, modalOpen, modalClose } from './utill.js';

const uploadBtn = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelBtn = document.querySelector('.img-upload__cancel');
const textHashtagInput = document.querySelector('.text__hashtags');
const textDescriptionInput = document.querySelector('.text__description');
const imgUploadForm = document.querySelector('.img-upload__form');

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

const pristine = new Pristine(imgUploadForm, {
  classTo: 'error-message__text',
  errorClass: 'error-message__text--invalid',
  successClass: 'error-message__text--valid',
  errorTextParent: 'error-message__text',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});

const regExp = /^#[A-Za-zА-Я-а-яЁё0-9]{1,19}$/;

const isNoHaveRepeats = (string) => string.split(' ').every((value, index, arr) => arr.indexOf(value) === index);
const isHashtagLessThanFive = (string) => string.split(' ').length <= 5;
const isStringValidation = (string) => string.split(' ').every((value) => regExp.test(value));

const isSymbolCountValidation = (str) => str.length <= 140;

pristine.addValidator(textHashtagInput, isNoHaveRepeats, 'Хэштеги не должны повторяться');
pristine.addValidator(textHashtagInput, isHashtagLessThanFive, 'Количество хэштегов не может быть больше 5');
pristine.addValidator(textHashtagInput, isStringValidation, 'Хэштег должен начинаться с "#" и не должен превышать 20 символов');

pristine.addValidator(textDescriptionInput, isSymbolCountValidation, 'Количество символов не может быть больше 140');

imgUploadForm.addEventListener('submit', () => pristine.validate());

const stopPropagation = (evt) => evt.stopPropagation();

textHashtagInput.addEventListener('keydown', stopPropagation);
textDescriptionInput.addEventListener('keydown', stopPropagation);

uploadBtn.addEventListener('change', showUploadedPhoto);

export { uploadBtn };
