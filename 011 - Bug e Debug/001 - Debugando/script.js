"use strict"

const bugNum = () => {
    const number = "123";
    //debugger;

    console.log(typeof number);
    console.log(number === 123);
    //debugger;

    if (number === 123){
        return "Seu numero e 123 - type Number"
    }
    console.log(number);
    return "Deu ruim";
}

//debugger
console.log(bugNum())