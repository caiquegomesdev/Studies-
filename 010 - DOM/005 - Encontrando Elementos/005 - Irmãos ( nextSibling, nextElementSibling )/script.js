"use strict";

// vai pegar os elementos irmaos (o que vem depois dele)
const h1  = document.querySelector("h1");
const container = document.querySelector(".container");
const p  = document.querySelector(".paragrafo");

console.log(h1.nextSibling); // HTMLCollection
console.log(h1.nextElementSibling); // NodeList

console.log(container.nextSibling); // HTMLCollection
console.log(container.nextElementSibling); // NodeList 

console.log(p.nextSibling); // HTMLCollection
console.log(p.nextElementSibling); // NodeList 