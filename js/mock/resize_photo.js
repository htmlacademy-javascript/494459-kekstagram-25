const scaleBtnMinus = imgUploadForm.querySelector('.scale__control--smaller');
const scaleBtnPlus = imgUploadForm.querySelector('.scale__control--bigger');
// const controlValue = imgUploadForm.querySelector('.scale__control--value');
const scaleControllValue = imgUploadForm.querySelector('.scale__control--value');

// console.log(scaleControllValue.value);

let test = 100;

const onscaleBtnMinusClick = (evt) => {
  scaleControllValue.setAttribute('value', `${test}%`);
  evt.preventDefault();
  if (evt.target) {
    test -= 25;
  }
};

const onscaleBtnPlusClick = (evt) => {
  scaleControllValue.setAttribute('value', `${test}%`);
  evt.preventDefault();
  if (evt.target && scaleControllValue.value < 100) {
    test += 25;
  }
};

scaleBtnMinus.addEventListener('click', onscaleBtnMinusClick);
scaleBtnPlus.addEventListener('click', onscaleBtnPlusClick);
