const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const todayImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${todayImage}`;

document.body.appendChild(bgimage);