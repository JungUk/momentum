const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
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
