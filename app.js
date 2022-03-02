const age = prompt("How old are you?");

// console.log(age);
// console.log("age의 타입 " + typeof age);

// const agee = parseInt(prompt("HOAU"));
// console.log(agee);
// console.log("agee의 타입 " + typeof agee);

if(isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
}
else {
  console.log("Thank you for writing your age.");
}