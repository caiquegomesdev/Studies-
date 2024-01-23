"use strict"

const timer = setInterval(() =>{
    console.log("Meu Timer foi Iniciado")
}, 1000)

console.log("Meu console");

setTimeout(() => {
    clearInterval(timer);
}, 3000)
