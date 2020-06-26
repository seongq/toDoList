const backGround = document.querySelector(".bg");
const imageNumber = Math.floor(Math.random() * 5 + 1);

backGround.style.backgroundImage = `url(assets/images/${imageNumber}.jpg)`;
