import { renderPhotos } from './mock/pictures.js';
import { renderBigPicture } from './mock/big-picture.js';
import { mockData } from './mock/data.js';
import { uploadBtn } from './mock/form.js';
import { scaleControllValue } from './mock/photo-resize.js';
// import { effectsList } from './mock/photo-filter.js';


renderPhotos(mockData);

window.console.log(uploadBtn);
window.console.log(renderBigPicture);
window.console.log(scaleControllValue);
