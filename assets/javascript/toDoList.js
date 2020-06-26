const toDoForm = document.querySelector(".to-do-form");
const enterToDoList = toDoForm.querySelector("input");
const toDoListInHtml = document.querySelector("ul");
const toDoListKeyword = "toDoList";

const cancelButton = "❌";

function updateToDoListLocalStorage() {
  let toDoListinLocalStorage = {};
  const toDos = toDoListInHtml.querySelectorAll("li");
  toDos.forEach(function (toDo, index) {
    let id = index + 1;
    let toDoInText = toDo.querySelector("span").innerHTML;
    toDoListinLocalStorage[id] = toDoInText;
  });
  localStorage.setItem(toDoListKeyword, JSON.stringify(toDoListinLocalStorage));
}

function deleteToDo(e) {
  if (event.target.tagName == "BUTTON") {
    event.preventDefault();
    console.dir(event.target);
    event.target.parentNode.remove();
    let toDoListinLocalStorage = {};
    updateToDoListLocalStorage();
  }
}

function deleteToDoList() {
  document.addEventListener("click", deleteToDo);
}

function generateLi(text, id) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = text;
  button.innerText = cancelButton;
  li.id = id;
  li.append(button);
  li.append(span);
  toDoListInHtml.append(li);
  return li;
}

function handlingToDoSubmit(event) {
  event.preventDefault();
  toDo = enterToDoList.value;
  const id = toDoListInHtml.querySelectorAll("li").length + 1;
  const li = generateLi(toDo, id);
  enterToDoList.value = "";
  let toDoListinLocalStorage = {};
  updateToDoListLocalStorage();
}

function addToDoList() {
  toDoForm.addEventListener("submit", handlingToDoSubmit);
}

function loadingToDoList() {
  const toDoListinLocalStorage = JSON.parse(
    localStorage.getItem(toDoListKeyword)
  );
  for (x in toDoListinLocalStorage) {
    generateLi(toDoListinLocalStorage[x], x);
  }
}

function init() {
  loadingToDoList();
  addToDoList();
  deleteToDoList();
}

init();
