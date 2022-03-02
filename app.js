const age = prompt("How old are you?");

// console.log(age);
// console.log("age의 타입 " + typeof age);

// const agee = parseInt(prompt("HOAU"));
// console.log(agee);
// console.log("agee의 타입 " + typeof agee);

if(isNaN(age)) {
  console.log("Please write a number");
}
else {
  console.log("Thank you for writing your age.");
}