"use strict";

// Sempre vai pegar o pai

const strong = document.querySelector("strong");
const p = document.querySelector(".paragrafo");
const container = document.querySelector(".container");
const body = document.querySelector("body");

console.log(strong.parentElement);
console.log(strong.parentNode);

console.log(p.parentElement);
console.log(p.parentNode);

console.log(container.parentElement);
console.log(container.parentNode);

console.log(body.parentElement);
console.log(body.parentNode);
// parentElement returns the immediate parent of an element, while parentNode returns the closest ancestor