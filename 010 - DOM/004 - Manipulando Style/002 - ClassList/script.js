"use strict";

const h1 = document.querySelector("h1");
h1.classList.add("active", "Teste1");
h1.classList.add("Teste2");
//h1.classList.remove("Teste2");
h1.classList.toggle("Teste2");

if(h1.classList.contains("active")){
    alert("Existe a class active");
}

console.log(h1);