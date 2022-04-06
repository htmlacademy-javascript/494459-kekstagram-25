import { getRandomNumber } from './utill.js';

const NAMES = ['Вася', 'Петя', 'Саша', 'Никита', 'Николай', 'Гриша', 'Яша'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const SIMILAR_USER_COUNT = 25;
const AMOUNT_COMMENTS = getRandomNumber(1, 2);
const RANDOM_LIKES_AMOUNT = getRandomNumber(15, 200);
const RANDOM_ID = getRandomNumber(1, 25);
const RANDOM_AVATAR = getRandomNumber(1, 6);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
const getRandomComments = (comments) => comments.slice(0, AMOUNT_COMMENTS).join(', ');

const createPicture = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: 'bla bla bla',
  likes: RANDOM_LIKES_AMOUNT,
  comments: [{
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
  {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
  {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
  {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
  {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
  {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
  {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
  {
    id: RANDOM_ID,
    avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
    message: getRandomComments(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }],
});

const getMockSimilarPictures = () => new Array(SIMILAR_USER_COUNT).fill('').map((_, index) => createPicture(index));

const mockData = getMockSimilarPictures();

export { mockData, AMOUNT_COMMENTS };
