"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("input", (event) =>{
    event.preventDefault(); // stop the browser from submitting the form.   
    const name = form.name.value;
    const newDivElement = document.createElement("div");
    newDivElement.innerText = name.toUpperCase();

    form.nextElementSibling.remove();
    form.after(newDivElement);
    
});