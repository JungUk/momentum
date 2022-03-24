const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "toDos";

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "🤮";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  span.innerText = newToDo.text;
  toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}