import { isEscapeKey, modalOpen, modalClose } from './utill.js';

const uploadBtn = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancelBtn = document.querySelector('.img-upload__cancel ');
// const textDescription = document.querySelector('.text__description');

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoToUpload();
    document.querySelector('.img-upload__form').reset();
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

uploadBtn.addEventListener('change', showUploadedPhoto);

export { uploadBtn };
