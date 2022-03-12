const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}

function onLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;  // submit하면 화면에 'Hello 이름' 저장
  greeting.classList.remove(HIDDEN_CLASSNAME);  // 가려놨던 greeting 드러내기  
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}