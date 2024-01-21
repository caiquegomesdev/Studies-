"use strict";

// vai pegar o primeiro filho
const container = document.querySelector(".container");
const p  = document.querySelector(".paragrafo");

console.log(container.firstChild); // HTMLCollection
console.log(container.firstElementChild); // NodeList 

console.log(p.firstChild); // HTMLCollection
console.log(p.firstElementChild); // NodeList 
