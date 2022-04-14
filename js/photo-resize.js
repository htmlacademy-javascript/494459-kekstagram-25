const scaleBtnMinus = document.querySelector('.scale__control--smaller');
const scaleBtnPlus = document.querySelector('.scale__control--bigger');
const scaleControllValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const VALUE_STEP = 25;
let currentValue = 100;
scaleControllValue.setAttribute('value', `${currentValue}%`);

const onscaleBtnMinusClick = (evt) => {
  evt.preventDefault();
  if (evt.target && currentValue > VALUE_STEP) {
    currentValue -= VALUE_STEP;
    scaleControllValue.setAttribute('value', `${currentValue}%`);
    imgPreview.style.transform = `scale(0.${currentValue})`;
  }
};

const onscaleBtnPlusClick = (evt) => {
  evt.preventDefault();
  if (evt.target && currentValue < 100) {
    currentValue += VALUE_STEP;
    scaleControllValue.setAttribute('value', `${currentValue}%`);
    if (currentValue === 100) {
      imgPreview.style.transform = 'scale(1)';
    } else {
      imgPreview.style.transform = `scale(0.${currentValue})`;
    }
  }
};

scaleBtnMinus.addEventListener('click', onscaleBtnMinusClick);
scaleBtnPlus.addEventListener('click', onscaleBtnPlusClick);

export { scaleControllValue };
