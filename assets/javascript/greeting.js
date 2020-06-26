const name = document.querySelector(".name");
const nameForm = document.querySelector(".name-form");
const nameInput = nameForm.querySelector("input");
const greeting = name.querySelector(".greeting");
const greetingName = greeting.querySelector(".greeting-name");

const userNameKey = "username";
const noShow = "no-show";

function hideElement(element) {
  element.classList.add(noShow);
}

function showElement(element) {
  element.classList.remove(noShow);
}

function handlingNameSubmit(event) {
  event.preventDefault();
  const userName = nameInput.value;
  localStorage.setItem(userNameKey, userName);
  showName();
}

function enterName() {
  nameForm.addEventListener("submit", handlingNameSubmit);
}

function showName() {
  const userName = localStorage.getItem(userNameKey);
  hideElement(nameForm);
  showElement(greeting);
  greetingName.innerText = ` ${userName}`;
}

function loadingName() {
  const userName = localStorage.getItem(userNameKey);
  if (userName == null) {
    hideElement(greeting);
    showElement(nameForm);
    enterName();
  } else {
    showName();
  }
}

function init() {
  loadingName();
}
init();
