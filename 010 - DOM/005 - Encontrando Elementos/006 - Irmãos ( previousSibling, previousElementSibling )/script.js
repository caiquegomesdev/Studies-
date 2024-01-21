"use strict";

// vai pegar os elementos irmaos (o que vem antes dele)
const h1  = document.querySelector("h1");
const container = document.querySelector(".container");
const p  = document.querySelector(".paragrafo");
const body  = document.querySelector("body");

console.log(h1.previousSibling); // HTMLCollection
console.log(h1.previousElementSibling); // NodeList 

console.log(container.previousSibling); // HTMLCollection
console.log(container.previousElementSibling); // NodeList 

console.log(p.previousSibling); // HTMLCollection
console.log(p.previousElementSibling); // NodeList 

console.log(body.previousSibling); // HTMLCollection
console.log(body.previousElementSibling); // NodeList 