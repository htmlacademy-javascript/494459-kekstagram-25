import { createUser } from './data.js';

const SIMILAR_USER_COUNT = 25;

const similarUsers = new Array(SIMILAR_USER_COUNT).fill('').map((_, index) => createUser(index));
