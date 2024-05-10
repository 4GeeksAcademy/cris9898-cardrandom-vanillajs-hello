/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const figures = ["♦", "♥", "♠", "♣"];
  const cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];

  const appElement = document.getElementById("app");

  const createCardElement = document.getElementById("createCard");

  createCard;
  createCardElement.addEventListener("click", createCard);

  setInterval(createCard, 10000);

  //Funcion para crear Cards
  function createCard() {
    const randomFigure = figures[Math.floor(Math.random() * figures.length)];
    const colorFigure =
      randomFigure === "♦" || randomFigure === "♥" ? "red" : "black";
    //el div de carta
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.width = "18rem";
    appElement.appendChild(cardElement);

    //El top de la carta

    const cardTopElement = document.createElement("div");
    cardTopElement.classList.add("card-body", colorFigure);
    cardTopElement.id = "topFigure";
    cardTopElement.innerHTML = randomFigure;
    cardElement.appendChild(cardTopElement);

    //Va el numero de la carta en medio de la carta

    const cardNumberElement = document.createElement("div");
    cardNumberElement.classList.add(
      "d-flex",
      "justify-content-center",
      "number"
    );
    cardNumberElement.id = "randomNumber";
    cardNumberElement.innerHTML =
      cardNumber[Math.floor(Math.random() * cardNumber.length)];
    cardElement.appendChild(cardNumberElement);

    //La figura la final de la carta

    const cardBottomElement = document.createElement("div");
    cardBottomElement.classList.add(
      "d-flex",
      "justify-content-end",
      "reverse",
      "m-3",
      colorFigure
    );
    cardNumberElement.id = "bottomFigure";
    cardBottomElement.innerHTML = randomFigure;
    cardElement.appendChild(cardBottomElement);
  }
};
