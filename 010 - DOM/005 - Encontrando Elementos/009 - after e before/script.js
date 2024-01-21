"use strict";

// before = antes
//after = depois 

const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText = "Ola, Gomes"
container.before(newP);
//container.after(newP);