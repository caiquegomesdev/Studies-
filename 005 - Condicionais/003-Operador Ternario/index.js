//condicao ? true : false;

const velocidade = 120;
const warn = 85;

//Operador ternario
const condicao = velocidade >= warn 
    ? console.log("Recebeu uma Multa!") 
    : console.log("Continue andando!");

//if else
if (velocidade >= warn){
    console.log(`A velocidade é ${velocidade} KM, ultrapassou a velocidade, voce recebeu um multa!`)
} else {
    console.log(`A velocidade é ${velocidade} KM, continue em cautela!`)
}