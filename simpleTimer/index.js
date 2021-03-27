const minDisplay = document.querySelector(".min-cont");
const secDisplay = document.querySelector(".sec-cont");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const finishText = document.querySelector(".finish-text");
const modal = document.querySelector(".modal");

let timer;

function attributeSetter(boolean) {
  minDisplay.setAttribute("disabled", boolean);
  secDisplay.setAttribute("disabled", boolean);
}

const startTimer = (duration, minDisplay, secDisplay) => {
  --duration;
  let min, sec;

  attributeSetter(true);

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

startBtn.addEventListener("click", () => {
  if (startBtn.textContent === "START") {
    const duration = Number(minDisplay.value) * 60 + Number(secDisplay.value);

    startTimer(duration, minDisplay, secDisplay);
  } else {
    pauseTimer();
  }
});

finishText.addEventListener("click", () => {
  window.location.reload();
});

resetBtn.addEventListener("click", () => {
  pauseTimer();
  minDisplay.value = 1;
  secDisplay.value = 0;
  minDisplay.removeAttribute("disabled");
  secDisplay.removeAttribute("disabled");
});
