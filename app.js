const h1 = document.querySelector(".hello:first-child h1");

console.log(h1);


// function handleTitleClick() {
//   if(title.style.color != black) {
//   title.style.color = "blue"; }
// }

// function handleTitleClickBlack() {
//   if(title.style.color == blue) {
//   title.style.color = "black"; }
// }

function handleTitleClick() {
    h1.style.color = "blue";
  }

function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

h1.onclick = handleTitleClick;
// title.addEventListener("click", handleTitleClickBlack);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
// addEventListener??? googling

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline); // no signal
window.addEventListener("online", handleWindowOnline); // signal