const minDisplay = document.querySelector(".min-cont");
const secDisplay = document.querySelector(".sec-cont");
const startBtn = document.querySelector(".start");
const duration = minDisplay.value * 60 + secDisplay.value;

const startTimer = (duration, minDisplay, secDisplay) => {
  let timer = duration,
    min,
    sec;
  setInterval(() => {
    min = parseInt(timer / 60);
    sec = parseInt(timer % 60);

    minDisplay.value = min;
    secDisplay.value = sec;

    --timer;
  }, 1000);
};

startBtn.addEventListener("click", () => {
  startTimer(duration, minDisplay, secDisplay);
});
