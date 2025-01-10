let time = 30;
const timerElement = document.querySelector(".timer");
const animationElement = document.querySelector(".animation");

let timer = setInterval(() => {
  time--;
  timerElement.textContent = time;

  if (time === 10) {
    animationElement.style.display = "block";
  }

  if (time === 0) {
    clearInterval(timer);
    console.log("Таймер завершено!");
  }
}, 1000);
