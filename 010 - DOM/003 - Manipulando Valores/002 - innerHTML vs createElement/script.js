"use strict"

/*
innerHtml => Retorna o texto com formatacoes e com elementos Html
createElement => Cria um elemento HTML
*/

const div = document.querySelector("div");
// console.log(1, div);

// div.innerHTML += "<strong>Esse E meu texto Alterado</strong>";
// console.log(2, div);

const elementUl = document.createElement("ul");

[1, 2, 3].forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi)
} )

div.appendChild(elementUl)

console.log(elementUl)