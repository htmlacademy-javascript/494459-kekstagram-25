import { SIMILAR_USER_COUNT, createUser } from './data.js';

const similarUsers = new Array(SIMILAR_USER_COUNT).fill('').map((_, index) => createUser(index));

window.console.log(similarUsers);
