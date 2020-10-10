let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImg1 =
  "Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice" +
  randomNumber1 +
  ".png";
let randomImg2 =
  "Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice" +
  randomNumber2 +
  ".png";

document
  .querySelector('img[alt="Player 1 Dice"]')
  .setAttribute("src", randomImg1);
document.querySelector(".player2-img").setAttribute("src", randomImg2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Won!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Won!";
} else {
  document.querySelector("h1").innerText = "It's a Tie!";
}
