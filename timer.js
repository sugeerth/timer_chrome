let startTime;
let timerInterval;
let elapsedTime = 0;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById('timer').textContent = timeToString(elapsedTime);
  }, 1000);
}

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let formattedHH = hh.toString().padStart(2, '0');
  let formattedMM = mm.toString().padStart(2, '0');
  let formattedSS = ss.toString().padStart(2, '0');

  return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById('timer').textContent = "00:00:00";
  startTimer();
});

startTimer();
