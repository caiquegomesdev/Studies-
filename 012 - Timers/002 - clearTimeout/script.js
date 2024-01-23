"use strict"

const timer = setTimeout(() =>{
    console.log("Meu Timer foi Iniciado")
}, 1000)
console.log("Meu console");
clearTimeout(timer)