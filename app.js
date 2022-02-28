

const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
player.fat = false;
player.lastName = "potato";
player.points = 15;
player.points = player.points + 15;
console.log(player);