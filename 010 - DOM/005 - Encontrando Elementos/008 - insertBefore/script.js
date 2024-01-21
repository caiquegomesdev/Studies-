"use strict";

// Vai encrontrar elemento e inserir um item antes desse elemento 

const container = document.querySelector(".container");
const paragrafo = container.querySelector(".paragrafo")
const h1 = document.querySelector("h1");

const newH2 = document.createElement("h2");
newH2.innerText = "Ola Gomes H2"

container.insertBefore(newH2, paragrafo)
container.insertBefore(newH2, h1)