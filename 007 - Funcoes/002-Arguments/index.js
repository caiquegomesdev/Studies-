//arguments
function soma(num1, num2){
    //tratamento
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }
    return "Voce Passo dados diferentes!";
}
console.log(soma(1,5))


function subtracao() { 
    return arguments;
}

console.log(subtracao(1,2, "Abc"));