/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  //write your code here

  function generarCarta() {
    let number = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "j",
      "Q",
      "K",
      "A"
    ];
    let suits = ["♦", "♥", "♠", "♣"];

    const randomNumber = number[Math.floor(Math.random() * number.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    let paloArriba = document.getElementById("palo-arriba");
    let cardNumber = document.getElementById("card-number");
    let paloAbajo = document.getElementById("palo-abajo");
    paloArriba.innerHTML = randomSuit;
    cardNumber.innerHTML = randomNumber;
    paloAbajo.innerHTML = randomSuit;

    if (randomSuit === "♦" || randomSuit === "♥") {
      paloArriba.style.color = "red";
      paloAbajo.style.color = "red";
    } else {
      paloArriba.style.color = "black";
      paloAbajo.style.color = "black";
    }
  }
  generarCarta();
  document.getElementById("generarCarta").addEventListener("click", () => {
    generarCarta();
  });
};
