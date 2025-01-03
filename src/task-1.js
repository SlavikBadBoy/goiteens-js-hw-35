const timer = document.querySelector("#timer");
let seconds = 3600;
const formatTime = (totalSeconds) => {
  const hour = Math.floor(totalSeconds / 60 / 60);
  const minute = Math.floor((totalSeconds % 3600) / 60);
  const second = totalSeconds % 60;
  return `${hour}:${minute}:${second}`;
};
let timerId = setInterval(function () {
  
  seconds -= 1;
  if (seconds === 1800) {
    alert("залишилося менше половини часу!");
  }
  if (seconds === 0) {
    clearInterval(timerId);
    alert("час вийшов");
  }
  timer.textContent = formatTime(seconds);
}, 1000);
