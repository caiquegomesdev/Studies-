/*
Uma closure ocorre normalmente quando uma fuuncao
e declarada dentro do corpo de outra, e a funcao interior 
referencia variaveis locais da funcao exterior

*/
// function QualSeuNome(name){
//     const msg = `O seu nome e: ${name}`;
//     function SeuNome(){
//         return `${msg} ${name}`;
//     }
//     return SeuNome;
// }
// console.log(QualSeuNome("Gomes"))

function Calculadora (num1, num2) {
    const msg = " Resultado";

    const soma = () => {
        return `${msg}: ${num1 + num2}`;
    }
    const subtracao = () => {
        return `${msg}: ${num1 - num2}`;
    }
    const multiplicacao = () => {
        return `${msg}: ${num1 * num2}`;
    }
    const divisao = () => {
        return `${msg}: ${num1 / num2}`;
    }
    return {
        soma:soma(), 
        subtracao:subtracao(), 
        multiplicacao:multiplicacao(), 
        divisao:divisao(),
    };
}

console.log(Calculadora(10,5));
console.log(Calculadora(10,5).soma);
console.log(Calculadora(10,5).subtracao);
console.log(Calculadora(10,5).multiplicacao);
console.log(Calculadora(10,5).divisao);