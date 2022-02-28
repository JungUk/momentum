
function sayHello(nameOfPerson, age) {
  console.log("Hello I'm " + nameOfPerson + ". " + age);
}

sayHello("dal", 10);
sayHello("lynn", 20);
sayHello("nico", 30);


function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}


plus(1, 2);
divide(10, 2);


const player = {
  name: "nico",
  sayhello: function(PersonName) {
    console.log("Hello " + PersonName);
  }
};

console.log(player.name);
player.sayhello("Cola");