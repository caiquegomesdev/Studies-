"use strict";

// Sempre vai pegar o elementos filho
const container = document.querySelector(".container");

console.log(container.children); // HTMLCollection
console.log(container.childNodes); // NodeList 

const children = Array.from(container.children);
//console.log(children);

children.forEach((res) => {
    console.log(res);
})

//const strong = document.querySelector("strong");
//const p = document.querySelector(".paragrafo");
//const body = document.querySelector("body");

/*
console.log(strong.children); // HTMLCollection
console.log(strong.childNodes); // NodeList

console.log(p.children); // HTMLCollection
console.log(p.childNodes); // NodeList

console.log(body.children); // HTMLCollection
console.log(body.childNodes); // NodeList

*/
