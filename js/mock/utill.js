const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return 0;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  const result = (Math.random() * (max + 1 - min) + min);
  return Math.floor(result);
};

const checkMaxLength = (str, strLength) => str.length <= strLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

const modalOpen = () => document.querySelector('body').classList.add('modal-open');
const modalClose = () => document.querySelector('body').classList.remove('modal-open');

export { getRandomNumber, checkMaxLength, isEscapeKey, modalOpen, modalClose};

