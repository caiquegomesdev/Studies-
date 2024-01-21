"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) =>{
    event.preventDefault(); // stop the browser from submitting the form.   
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, password)
})