const ToDoInput = document.querySelector("#todolist-input");
const ToDoListButton = document.querySelector("#todolist-button");
const ToDoForm = document.querySelector(".todolist-form");
const ToDoList = document.querySelector(".todolist-list");

const TODO_KEYS = "todolist";

let toDoArray = [];
const getArray = JSON.parse(localStorage.getItem(TODO_KEYS));

function storeArray() {
  localStorage.setItem(TODO_KEYS, JSON.stringify(toDoArray));
}
function deletFun(event) {
  const liID = event.target.parentElement;
  toDoArray = toDoArray.filter((e) => e.id !== parseInt(liID.id));
  storeArray();
  liID.remove();
}
function paintToDo(arg) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  li.id = arg.id;
  li.appendChild(span);
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", deletFun);
  span.innerText = arg.text;
  ToDoList.appendChild(li);
}

function todolist(e) {
  e.preventDefault();
  const value = ToDoInput.value;
  const valueObj = {
    text: value,
    id: Date.now(),
  };
  toDoArray.push(valueObj);
  ToDoInput.value = "";
  paintToDo(valueObj);
  storeArray();
}

if (getArray !== null) {
  getArray.forEach((element) => paintToDo(element));
  toDoArray = getArray;
}
ToDoForm.addEventListener("submit", todolist);
