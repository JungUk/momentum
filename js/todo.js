const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

const TODOS_KEY = "toDos";

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "🤮";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of", item));
}