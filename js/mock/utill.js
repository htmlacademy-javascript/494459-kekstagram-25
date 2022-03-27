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
const isEnterKey = (evt) => evt.key === 'Enter';


export { getRandomNumber, checkMaxLength, isEscapeKey, isEnterKey };

