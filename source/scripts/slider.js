
const slider = document.querySelector('.results__slider');
const curtain = slider.querySelector('.results__divider');
const sliderStyles = getComputedStyle(slider);

let curtainPlaceStart;
let clientX;

window.addEventListener('pointerup', stopTheCurtainShifting);
curtain.addEventListener('pointerdown', startTheCurtainShifting);

function startTheCurtainShifting (event) {
  curtainPlaceStart = Number(sliderStyles.getPropertyValue('--curtain-place'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--curtain-place', `${curtainPlace}`);
}

function stopTheCurtainShifting () {
  window.removeEventListener('pointermove', shiftТheСurtain);
}
