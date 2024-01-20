"use strict"
/*
textContent => Retorna o text COM formatacoes, mas sem os elementos
innerHTML => Retorna o texto com as formatações dos elementos (html)
*/

const p = document.querySelector("p");


console.log(p.textContent);
console.log(p.innerText);

//p.textContent = "Caique Goems"

p.innerText = "<strong> GOMES </strong>"