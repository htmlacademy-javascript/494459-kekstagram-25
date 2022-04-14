const effectsList = document.querySelector('.img-upload__effects');
const imgUploadPreview = document.querySelector('.img-upload__preview');


const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

// sliderValue.value = 1;

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

const photoEffects = {
  none: 'img-upload__preview',
  chrome: 'effects__preview--chrome',
  sepia: 'effects__preview--sepia',
  marvin: 'effects__preview--marvin',
  phobos: 'effects__preview--phobos',
  heat: 'effects__preview--heat',
};


const onEffectListChange = (evt) => {
  const currentEffect = `${photoEffects[evt.target.value]}`;
  if (evt.target.closest('input').value) {
    imgUploadPreview.className = currentEffect;
    slider.noUiSlider.on('update', () => {
      sliderValue.value = slider.noUiSlider.get();
      imgUploadPreview.style.filter = `grayscale(${sliderValue.value})`;
    });
  }
};

effectsList.addEventListener('change', onEffectListChange);

export { effectsList };
