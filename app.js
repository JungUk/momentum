const title = document.querySelector(".hello:first-child h1");

console.log(title);


// function handleTitleClick() {
//   if(title.style.color != black) {
//   title.style.color = "blue"; }
// }

// function handleTitleClickBlack() {
//   if(title.style.color == blue) {
//   title.style.color = "black"; }
// }

function handleTitleClick() {
    title.style.color = "blue";
  }

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("click", handleTitleClickBlack);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// addEventListener??? googling