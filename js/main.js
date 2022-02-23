const getRandomNumber = (min, max) => {
  const RADIX = 10;
  if (min < 0 || max < 0) {
    return 0;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return parseInt(Math.random() * (max - min) + min, RADIX);
};

const checkMaxLength = (str, strLength) => str.length <= strLength;

getRandomNumber();
checkMaxLength();
