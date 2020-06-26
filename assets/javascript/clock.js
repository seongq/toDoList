const clock = document.querySelector(".clock");

function doubleDigit(time) {
  if (time < 10) {
    let doubleDigitTime = `0${time}`;
    return doubleDigitTime;
  } else {
    let doubleDigitTime = `${time}`;
    return doubleDigitTime;
  }
}

function loadingTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let hoursString = doubleDigit(hours);
  let minutesString = doubleDigit(minutes);
  let secondsString = doubleDigit(seconds);
  let realTime = `${hoursString}:${minutesString}:${secondsString}`;
  clock.innerHTML = realTime;
}

function showingTime() {
  setInterval(loadingTime, 1000);
}

function init() {
  loadingTime();
  showingTime();
}

init();
