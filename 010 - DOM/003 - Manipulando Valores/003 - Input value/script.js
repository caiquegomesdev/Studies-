"use strict"



const input = document.querySelector("input")
console.log(input.value);

setTimeout(() => {
    input.value = "Abacate";
    console.log(input.value);
}, 1000)