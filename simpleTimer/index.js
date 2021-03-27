const minDisplay = document.querySelector(".min-cont");
const secDisplay = document.querySelector(".sec-cont");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const finishText = document.querySelector(".finish-text");
const modal = document.querySelector(".modal");

var timer;

const startTimer = (duration, minDisplay, secDisplay) => {
  --duration;
  var min, sec;

  minDisplay.setAttribute("disabled", true);
  secDisplay.setAttribute("disabled", true);

  startBtn.textContent = "PAUSE";

  timer = setInterval(() => {
    min = parseInt(duration / 60);
    sec = parseInt(duration % 60);

    minDisplay.value = min;
    secDisplay.value = sec;

    if (duration > 0) {
      --duration;
    } else {
      finishText.style.display = "block";
      modal.style.display = "block";
    }
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(timer);
  startBtn.textContent = "START";
};

let count = 0;

startBtn.addEventListener("click", () => {
  if (count % 2 === 0) {
    const duration = Number(minDisplay.value) * 60 + Number(secDisplay.value);

    startTimer(duration, minDisplay, secDisplay);
  } else {
    pauseTimer();
  }

  count++;
});

finishText.addEventListener("click", () => {
  window.location.reload();
});

resetBtn.addEventListener("click", () => {
  pauseTimer();
  minDisplay.value = "1";
  secDisplay.value = "0";
});
