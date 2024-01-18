/*
IMC e a sigla para Indice de Massa Corporea,
 paramentro adotado pela Organizacao mundial 
 de saude para calcular o peso ideal de cada pessoa.

 Como calcular IMC?
 O IMC é calculado dividindo o peso (em kg) pela 
 altura ao quadrado (em m), de acordo com a seguinte
 formula: IMC = Peso / (altura x altura).

 E nosso calculo devemos retornar os seguintes valores para o usuario:

 Resultado do Calc  | Resultado para o usuario
 Abaixo de 17       | Muito abaixo do peso
 Entre 17 e 18.5    | Abaixo do peso
 Entre 18.5 e 24.9  | Peso normal
 Entre 24.9 e 29.9  | Acima do peso
 30 até 34.9        | Obesidade grau 1
 35 até 39.9        | Obesidade grau 2
*/

const peso = 72.5
const altura = 1.81
const imc = Number((peso / (altura * altura)).toFixed(2));



switch (true){
    case imc < 17:
        console.log("Muito abaixo do peso");
        break;

    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso");
        break;

    case imc >= 18.5 && imc <= 24.9:
        console.log("Peso Normal");
        break;

    case imc >= 25 && imc <= 29.9:
        console.log("Acima do peso");
        break;
    
    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade Grau 1");
        break;
    
    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade Grau 2");
        break;
    
    default: console.log("Nao se enquadra ao calculo")
}

console.log(`Seu imc e de ${imc}`)