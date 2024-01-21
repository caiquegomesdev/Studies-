"use strict";

// Vai acrecentar itens aos elemenntos html

const container = document.querySelector(".container");
//container.append("<p>Ola Gomes</p>")

const newDiv = document.createElement("div");
newDiv.innerText = "Ola Gomes"
container.appendChild(newDiv);
