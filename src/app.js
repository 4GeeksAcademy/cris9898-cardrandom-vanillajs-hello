/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const figures = ["♦", "♥", "♠", "♣"];
  const cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];

  const topElement = document.getElementById("topFigure");
  const cardNumberElement = document.getElementById("randomNumber");
  const bottomElement = document.getElementById("bottomFigure");

  const randomFigure = figures[Math.floor(Math.random() * figures.length)];
  const randomNumberCard =
    cardNumber[Math.floor(Math.random() * cardNumber.length)];

  const topPCreateElement = document.createElement("div");
  const bottomPCreateElement = document.createElement("div");
  const numberCreateElement = document.createElement("div");

  console.log(randomFigure);

  if (randomFigure === "♥" || randomFigure === "♦") {
    topPCreateElement.classList.add("red");
    bottomElement.classList.add("red");
  } else {
    topPCreateElement.classList.add("black");
    bottomElement.classList.add("black");
  }

  topPCreateElement.innerHTML += randomFigure;
  bottomPCreateElement.innerHTML += randomFigure;
  numberCreateElement.innerHTML += randomNumberCard;

  topElement.appendChild(topPCreateElement);
  cardNumberElement.appendChild(numberCreateElement);
  bottomElement.appendChild(bottomPCreateElement);
};
